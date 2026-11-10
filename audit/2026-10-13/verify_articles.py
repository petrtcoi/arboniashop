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
BASE, NAME = sys.argv[1].rstrip('/'), sys.argv[2]
ARTICLES = [json.loads(p.read_text()) for p in sorted((ROOT / 'data/articles').glob('*.json'))]
EXPECTED_BUILD = (ROOT / '.next/BUILD_ID').read_text().strip()
errors = []
reports = []
links = set()

def fetch(path):
    request = urllib.request.Request(BASE + path, headers={'User-Agent': 'ArboniaShop-publication-check/1.0'})
    with urllib.request.urlopen(request, timeout=30) as response:
        data = response.read()
        text = '' if response.headers.get('Content-Type', '').startswith('image/') else data.decode()
        return response.status, response.url, text

def check(condition, message):
    if not condition:
        errors.append(message)

for a in ARTICLES:
    path = '/articles/' + a['slug']
    status, final_url, html = fetch(path)
    soup = BeautifulSoup(html, 'html.parser')
    canonical = 'https://arboniashop.ru' + path
    check(status == 200 and final_url == BASE + path, path + ': HTTP status or redirect')
    check(len(soup.find_all('h1')) == 1 and soup.h1.get_text() == a['heading'], path + ': H1')
    check(soup.title.get_text() == a['title'], path + ': title')
    check(soup.select_one('meta[name="description"]')['content'] == a['description'], path + ': description')
    check(soup.select_one('link[rel="canonical"]')['href'] == canonical, path + ': canonical')
    check('noindex' not in soup.select_one('meta[name="robots"]')['content'], path + ': noindex')
    check(soup.select_one('meta[property="og:type"]')['content'] == 'article', path + ': Open Graph')
    check(json.loads(soup.select_one('#__NEXT_DATA__').string)['buildId'] == EXPECTED_BUILD, path + ': stale build')
    structured = [json.loads(s.string) for s in soup.select('script[type="application/ld+json"]')]
    by_type = {item['@type']: item for item in structured if '@type' in item}
    required_types = {'Article', 'BreadcrumbList', 'FAQPage'}
    check(required_types.issubset(by_type) and set(by_type).issubset(required_types | {'Organization'}), path + ': schema types')
    check(all(sum(item.get('@type') == kind for item in structured) == 1 for kind in required_types), path + ': duplicate schema')
    article = by_type['Article']
    check(article['headline'] == a['heading'] and article['description'] == a['description'], path + ': Article metadata')
    check(article['mainEntityOfPage']['@id'] == canonical, path + ': mainEntityOfPage')
    check(article['datePublished'] == article['dateModified'] == '2026-10-13', path + ': dates')
    check(article['publisher']['logo']['url'] == 'https://arboniashop.ru/images/logo.png', path + ': publisher logo')
    breadcrumb = by_type['BreadcrumbList']['itemListElement'][-1]
    check(breadcrumb['item']['@id'] == canonical and breadcrumb['item']['name'] == a['heading'], path + ': breadcrumbs')
    body = soup.find('article')
    check(body is not None, path + ': visible article')
    faq = by_type['FAQPage']['mainEntity']
    check(len(faq) == len(a['faq']) == 3, path + ': FAQ count')
    for q, expected in zip(faq, a['faq']):
        check(q['name'] == expected['question'] and q['acceptedAnswer']['text'] == expected['answer'], path + ': FAQ data')
        visible = body.find('h3', string=expected['question'])
        check(visible is not None and visible.find_next_sibling('p').get_text(' ', strip=True) == expected['answer'], path + ': visible FAQ')
    words = len(re.findall(r'[A-Za-zА-Яа-яЁё0-9]+(?:[-–][A-Za-zА-Яа-яЁё0-9]+)*', body.get_text(' ', strip=True)))
    check(900 <= words <= 1200, path + ': article length')
    links.add(a['image'])
    for asset in soup.select('script[src], link[rel="stylesheet"]'):
        asset_url = asset.get('src') or asset.get('href', '')
        if asset_url.startswith('/_next/'):
            links.add(asset_url)
    for link in body.find_all('a', href=True):
        if link['href'].startswith('/'):
            links.add(link['href'].split('#')[0])
    reports.append({'url': canonical, 'status': status, 'words_including_byline': words, 'jsonld_types': list(by_type), 'faq_questions': len(faq)})

_, _, sitemap = fetch('/sitemap-0.xml')
locations = {e.text for e in ET.fromstring(sitemap).iter() if e.tag.endswith('}loc')}
for a in ARTICLES:
    check('https://arboniashop.ru/articles/' + a['slug'] in locations, a['slug'] + ': sitemap')

incoming = {
    '/articles/ral-9016-pochemu-vybirayut-arkhitektory': [ARTICLES[2]['slug']],
    '/articles/kak-vybrat-cvet-radiatora-pod-interer': [ARTICLES[2]['slug']],
    '/coloring': [ARTICLES[2]['slug']],
    '/models/3030': [ARTICLES[0]['slug']],
    '/models/3030-9016-12': [ARTICLES[0]['slug']],
    '/articles/arbonia-3030-vs-3037': [ARTICLES[0]['slug']],
    '/articles/radiator-pod-nizkiy-podokonnik': [ARTICLES[0]['slug'], ARTICLES[1]['slug']],
    '/articles/gde-razmestit-radiator-otopleniya': [ARTICLES[1]['slug']],
    '/articles/termostat': [ARTICLES[1]['slug']],
    '/articles': [a['slug'] for a in ARTICLES],
}
for path, slugs in incoming.items():
    _, _, html = fetch(path)
    hrefs = {link['href'] for link in BeautifulSoup(html, 'html.parser').find_all('a', href=True)}
    for slug in slugs:
        check('/articles/' + slug in hrefs, path + ': missing incoming link to ' + slug)

def inspect_link(path):
    try:
        status, final, _ = fetch(path)
        return {'path': path, 'status': status, 'final': final}
    except Exception as e:
        return {'path': path, 'error': str(e)}

with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
    link_results = list(pool.map(inspect_link, sorted(links)))
for result in link_results:
    check(result.get('status') == 200 and result.get('final') == BASE + result['path'], 'Broken or redirected link: ' + result['path'])
report = {'base': BASE, 'build_id': EXPECTED_BUILD, 'articles': reports, 'sitemap_urls': len(locations), 'incoming_links_checked': sum(map(len, incoming.values())), 'linked_pages_images_and_assets': len(links), 'errors': errors}
(ROOT / 'audit/2026-10-13' / (NAME + '-articles-verification.json')).write_text(json.dumps(report, ensure_ascii=False, indent=2))
print(json.dumps(report, ensure_ascii=False, indent=2))
sys.exit(1 if errors else 0)
