import concurrent.futures
import json
import re
import sys
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[2]
OUT = Path(__file__).resolve().parent
BASE = sys.argv[1].rstrip('/')
NAME = sys.argv[2]
EXPECTED_BUILD = (ROOT / '.next/BUILD_ID').read_text().strip()

def fetch(path):
    request = urllib.request.Request(BASE + path, headers={'User-Agent': 'ArboniaShop-release-verification/1.0'})
    with urllib.request.urlopen(request, timeout=30) as r:
        return r.status, {k.lower(): v for k, v in r.headers.items()}, r.read().decode()

def inspect_html(html):
    soup = BeautifulSoup(html, 'html.parser')
    errors = []
    blocks = soup.select('script[type="application/ld+json"]')
    for block in blocks:
        try:
            json.loads(block.string or block.get_text())
        except Exception as e:
            errors.append(str(e))
    prices = []
    for el in soup.select('[itemprop="price"],[itemprop="lowPrice"],[itemprop="highPrice"]'):
        value = el.get('content') or el.get_text(strip=True)
        if not re.fullmatch(r'\d+(?:\.\d+)?', value):
            prices.append(value)
    robots = [e.get('content', '') for e in soup.select('meta[name="robots"]')]
    product_names = []
    bad_product_names = []
    for scope in soup.select('[itemscope]'):
        if not re.search(r'/Product(?:Model)?$', scope.get('itemtype', '')):
            continue
        names = [e.get('content') or e.get_text(' ', strip=True) for e in scope.select('[itemprop="name"]')
                 if e.find_parent(attrs={'itemscope': True}) is scope]
        product_names.append(names)
        if not names or names[0] in ['Главная', 'Радиаторы под окно']:
            bad_product_names.append(names)
    data = soup.select_one('script#__NEXT_DATA__')
    build = json.loads(data.string)['buildId'] if data and data.string else None
    return {'jsonld_blocks': len(blocks), 'jsonld_errors': errors, 'invalid_prices': prices,
            'robots': robots, 'build_id': build, 'title': soup.title.get_text() if soup.title else '',
            'product_names': product_names, 'bad_product_names': bad_product_names}

_, _, sitemap = fetch('/sitemap-0.xml')
paths = [urllib.parse.urlsplit(e.text).path or '/' for e in ET.fromstring(sitemap).iter() if e.tag.endswith('}loc')]
extra = ['/radiators/2180-06', '/radiators/2180-10', '/models/2050-9016-12/10']

def check(path):
    try:
        status, headers, html = fetch(path)
        result = {'path': path, 'status': status, 'cache': headers.get('cache-control'), **inspect_html(html)}
        if path == '/catalog/high-models':
            result['comparison_present'] = 'Сравнение Arbonia 2180 и 3180 на 8 секций' in html
        if path == '/delivery':
            result['individual_delivery_present'] = 'индивидуально' in html
        return result
    except Exception as e:
        return {'path': path, 'error': str(e)}

with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
    results = list(pool.map(check, list(dict.fromkeys(paths + extra))))
failures = [r for r in results if r.get('error') or r.get('status') != 200 or r.get('jsonld_errors')
            or r.get('invalid_prices') or r.get('bad_product_names') or r.get('build_id') != EXPECTED_BUILD
            or (r['path'] in paths and any('noindex' in v for v in r.get('robots', [])))
            or r.get('comparison_present') is False or r.get('individual_delivery_present') is False]
local_files = list((ROOT / '.next/server/pages').rglob('*.html'))
local_errors = []
jsonld_count = 0
for file in local_files:
    parsed = inspect_html(file.read_text())
    jsonld_count += parsed['jsonld_blocks']
    if parsed['jsonld_errors'] or parsed['invalid_prices'] or parsed['bad_product_names']:
        local_errors.append({'file': str(file.relative_to(ROOT)), **parsed})
report = {'base': BASE, 'expected_build_id': EXPECTED_BUILD, 'sitemap_urls': len(paths),
          'http_pages_checked': len(results), 'local_html_files': len(local_files),
          'local_jsonld_blocks': jsonld_count, 'local_errors': local_errors, 'failures': failures, 'results': results}
(OUT / f'{NAME}-verification.json').write_text(json.dumps(report, ensure_ascii=False, indent=2))
print(json.dumps({**{k: v for k, v in report.items() if k not in ['results', 'failures']},
                  'failure_count': len(failures), 'failure_examples': failures[:2]}, ensure_ascii=False))
sys.exit(1 if failures or local_errors else 0)
