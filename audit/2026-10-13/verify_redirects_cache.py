import json
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path
from bs4 import BeautifulSoup

BASE = 'https://arboniashop.ru'

class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *args, **kwargs):
        return None

opener = urllib.request.build_opener(NoRedirect)
pairs = [
    ('/articles/arbonia-3180-ral-9016-vs-anthracite-metallic', '/articles/arbonia-3180-ral-9016-vs-anthracite'),
    ('/models/3057-9016-1270-34', '/models/3057-9016-12'),
    ('/news/2023-report', '/news/2024-report'),
    ('/policy', '/privacy'),
]
results = []
for source, target in pairs:
    try:
        opener.open(BASE + source, timeout=20)
        raise AssertionError('No redirect')
    except urllib.error.HTTPError as e:
        location = e.headers['Location']
        assert e.code in [301, 308] and urllib.parse.urlsplit(location).path == target
        with urllib.request.urlopen(BASE + source, timeout=20) as final:
            assert final.status == 200
            final_url = final.geturl()
        results.append({'source': source, 'destination': location, 'status': e.code, 'final_url': final_url})

for origin in ['http://www.arboniashop.ru', 'http://arboniashop.ru', 'https://www.arboniashop.ru']:
    try:
        opener.open(origin + '/models/3030-9016-12', timeout=20)
        raise AssertionError('No host redirect')
    except urllib.error.HTTPError as e:
        assert e.code == 301 and e.headers['Location'] == BASE + '/models/3030-9016-12'
        results.append({'source': origin, 'status': e.code, 'destination': e.headers['Location']})

with urllib.request.urlopen(BASE, timeout=20) as r:
    html = r.read().decode()
    html_cache = r.headers['Cache-Control']
soup = BeautifulSoup(html, 'html.parser')
asset = next(e.get('src') for e in soup.select('script[src]') if e.get('src').startswith('/_next/static/'))
with urllib.request.urlopen(BASE + asset, timeout=20) as r:
    static_cache = r.headers['Cache-Control']
    assert 'immutable' in static_cache
assert 'max-age=0' in html_cache
report = {'redirects': results, 'html_cache': html_cache, 'static_asset_cache': static_cache, 'tls_certificate_verified': True}
Path(__file__).with_name('production-redirects-and-cache.json').write_text(json.dumps(report, indent=2))
print(json.dumps(report))
