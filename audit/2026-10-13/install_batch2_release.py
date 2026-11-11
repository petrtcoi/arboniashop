import hashlib
import json
import pathlib
import shutil
import socket
import subprocess
import sys
import tarfile

archive = pathlib.Path('/root/releases/arboniashop-clusters-20261013.tgz')
release = pathlib.Path('/root/releases/arboniashop-clusters-20261013')
expected_sha, expected_build = sys.argv[1:]
assert hashlib.sha256(archive.read_bytes()).hexdigest() == expected_sha
processes = json.loads(subprocess.check_output(['pm2', 'jlist']))
current = next(p for p in processes if p['name'] == 'arboniashop')
old = pathlib.Path(current['pm2_env']['pm_cwd'])
assert old == pathlib.Path('/root/releases/arboniashop-intents-20261013'), str(old)
assert current['pm2_env']['status'] == 'online'
assert not release.exists(), 'Release directory already exists'
assert all(p['name'] != 'arboniashop-clusters-check' for p in processes)
with socket.socket() as test:
    test.bind(('127.0.0.1', 3904))
release.mkdir()
with tarfile.open(archive) as tar:
    for member in tar.getmembers():
        path = pathlib.PurePosixPath(member.name)
        assert not path.is_absolute() and '..' not in path.parts, member.name
        assert not member.issym() and not member.islnk(), member.name
    tar.extractall(release)
assert (release / '.next/BUILD_ID').read_text().strip() == expected_build
(release / 'node_modules').symlink_to((old / 'node_modules').resolve(), target_is_directory=True)
for name in ['.env', '.env.local', '.env.production', '.env.production.local']:
    if (old / name).is_file():
        shutil.copy2(old / name, release / name)

def config(name, directory, port, args):
    return {'apps': [{'name': name, 'cwd': str(directory), 'script': '/usr/bin/npm',
                      'args': args, 'env': {'NODE_ENV': 'production', 'PORT': str(port)}}]}

(release / 'ecosystem-rollback.json').write_text(json.dumps(config('arboniashop', old, 3001, ['start']), indent=2))
(release / 'ecosystem-production.json').write_text(json.dumps(config('arboniashop', release, 3001, ['start']), indent=2))
(release / 'ecosystem-staging.json').write_text(json.dumps(config('arboniashop-clusters-check', release, 3904,
    ['start', '--', '--hostname', '127.0.0.1', '--port', '3904']), indent=2))
baseline = {p['name']: {'pid': p.get('pid'), 'status': p['pm2_env']['status'], 'cwd': p['pm2_env'].get('pm_cwd')}
            for p in processes if p['name'] != 'arboniashop'}
(release / 'other-processes-before.json').write_text(json.dumps(baseline, indent=2))
subprocess.run(['pm2', 'start', str(release / 'ecosystem-staging.json'), '--only', 'arboniashop-clusters-check'],
               check=True, stdout=subprocess.DEVNULL)
print(json.dumps({'release': str(release), 'staging_port': 3904, 'sha256': expected_sha, 'build_id': expected_build}))
