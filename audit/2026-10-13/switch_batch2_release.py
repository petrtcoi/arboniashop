import json
import pathlib
import subprocess
import sys
import time
import urllib.request

release = pathlib.Path('/root/releases/arboniashop-clusters-20261013')
expected_build = sys.argv[1]
assert (release / '.next/BUILD_ID').read_text().strip() == expected_build

def run(*args):
    subprocess.run(['pm2', *args], check=True, stdout=subprocess.DEVNULL)

current = next(p for p in json.loads(subprocess.check_output(['pm2', 'jlist'])) if p['name'] == 'arboniashop')
assert current['pm2_env']['pm_cwd'] == '/root/releases/arboniashop-intents-20261013'
with urllib.request.urlopen('http://127.0.0.1:3904/articles/low-models', timeout=10) as r:
    assert expected_build in r.read().decode()
run('delete', 'arboniashop')
try:
    run('start', str(release / 'ecosystem-production.json'), '--only', 'arboniashop')
    success = False
    for attempt in range(15):
        try:
            with urllib.request.urlopen('http://127.0.0.1:3001/articles/low-models', timeout=2) as r:
                success = r.status == 200 and expected_build in r.read().decode()
        except Exception:
            pass
        if success:
            break
        time.sleep(1)
    assert success, 'Production health check failed'
    processes = json.loads(subprocess.check_output(['pm2', 'jlist']))
    live = next(p for p in processes if p['name'] == 'arboniashop')
    assert live['pm2_env']['pm_cwd'] == str(release) and live['pm2_env']['status'] == 'online'
    before = json.loads((release / 'other-processes-before.json').read_text())
    after = {p['name']: {'pid': p.get('pid'), 'status': p['pm2_env']['status'], 'cwd': p['pm2_env'].get('pm_cwd')}
             for p in processes if p['name'] not in ['arboniashop', 'arboniashop-clusters-check']}
    assert before == after, 'Other PM2 processes changed'
    run('save')
    print(json.dumps({'status': 'published', 'cwd': live['pm2_env']['pm_cwd'], 'build_id': expected_build,
                      'other_processes_unchanged': True, 'rollback_config': str(release / 'ecosystem-rollback.json')}))
except Exception:
    subprocess.run(['pm2', 'delete', 'arboniashop'], stdout=subprocess.DEVNULL)
    run('start', str(release / 'ecosystem-rollback.json'), '--only', 'arboniashop')
    run('save')
    raise
