import concurrent.futures
import json
import re
import sys
import urllib.request
from collections import Counter
from pathlib import Path
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[2]
BASE, NAME = sys.argv[1].rstrip('/'), sys.argv[2]
BUILD = (ROOT / '.next/BUILD_ID').read_text().strip()
MAP = json.loads((ROOT / 'audit/2026-10-13/article-intent-revisions.json').read_text())
REWRITTEN = {d['slug']: json.loads((ROOT / 'data/article-revisions' / (d['slug'] + '.json')).read_text()) for d in MAP['revisions']}
CHANGED = set(REWRITTEN) | {d['slug'] for d in MAP['targeted_revisions']}
slugs = sorted(p.parent.name for p in (ROOT / 'pages/articles').glob('*/index.tsx'))
errors, rows, links = [], [], set()

def fetch(path):
    req = urllib.request.Request(BASE + path, headers={'User-Agent': 'ArboniaShop-intent-review/1.0'})
    with urllib.request.urlopen(req, timeout=30) as r:
        content = r.read()
        return r.status, r.url, content

def check(condition, message):
    if not condition:
        errors.append(message)

def normalize(text):
    return ' '.join(text.split())

with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
    pages = dict(zip(slugs, pool.map(lambda slug: fetch('/articles/' + slug), slugs)))

for slug, (status, url, content) in pages.items():
    path = '/articles/' + slug
    soup = BeautifulSoup(content, 'html.parser')
    canonical = 'https://arboniashop.ru' + path
    h1 = soup.find_all('h1')
    check(status == 200 and url == BASE + path, path + ': status/redirect')
    check(len(h1) == 1, path + ': H1 count')
    check(soup.select_one('link[rel="canonical"]')['href'] == canonical, path + ': canonical')
    check('noindex' not in soup.select_one('meta[name="robots"]')['content'], path + ': noindex')
    check(json.loads(soup.select_one('#__NEXT_DATA__').string)['buildId'] == BUILD, path + ': stale build')
    structured = [json.loads(script.string) for script in soup.select('script[type="application/ld+json"]')]
    title = soup.title.get_text()
    description = soup.select_one('meta[name="description"]')['content']
    rows.append({'slug': slug, 'title': title, 'heading': h1[0].get_text() if h1 else '', 'description': description, 'changed': slug in CHANGED})
    if slug in CHANGED:
        for link in soup.select('a[href], img[src], script[src], link[rel="stylesheet"]'):
            target = link.get('href') or link.get('src')
            if target.startswith('/'):
                links.add(target.split('#')[0])
        for kind in ['Article', 'FAQPage', 'BreadcrumbList']:
            check(sum(d.get('@type') == kind for d in structured) <= 1, path + ': duplicate ' + kind)
        faq = next((d for d in structured if d.get('@type') == 'FAQPage'), None)
        if faq:
            visible = normalize(soup.get_text(' ', strip=True))
            for q in faq['mainEntity']:
                check(normalize(q['name']) in visible and normalize(q['acceptedAnswer']['text']) in visible, path + ': hidden/inconsistent FAQ')
    if slug in REWRITTEN:
        a = REWRITTEN[slug]
        check(title == a['title'] and h1[0].get_text() == a['heading'] and description == a['description'], path + ': metadata')
        types = Counter(d.get('@type') for d in structured)
        check(all(types[k] == 1 for k in ['Article', 'BreadcrumbList', 'FAQPage']), path + ': schema coverage')
        article = next(d for d in structured if d.get('@type') == 'Article')
        check(article['dateModified'] == '2026-10-13' and article['mainEntityOfPage']['@id'] == canonical, path + ': Article date/URL')
        check(article.get('datePublished') == a.get('datePublished'), path + ': changed publication date')
        body = soup.find('article')
        words = len(re.findall(r'\w+', body.get_text(' ', strip=True)))
        check(words >= 650, path + ': shortened body')
        check(body.find_all('h2') and body.find_all('h3'), path + ': structure')
        check(not body.select('input'), path + ': duplicated calculator')
        rows[-1]['words'] = words

for field in ['title', 'heading', 'description']:
    values = Counter(normalize(r[field]) for r in rows)
    check(all(n == 1 for n in values.values()), 'Duplicate ' + field)

listing = BeautifulSoup(fetch('/articles')[2], 'html.parser')
for slug in MAP['listing_cards_updated']:
    anchor = listing.find('a', href='/articles/' + slug)
    check(anchor is not None, slug + ': listing card missing')
    if slug in REWRITTEN:
        check(REWRITTEN[slug]['title'] in anchor.get_text(' ', strip=True), slug + ': old listing title')

power = BeautifulSoup(pages['vertical-radiator-power'][2], 'html.parser')
check(not power.find('article').select('input'), 'Vertical power still has a duplicate calculator')
calc = BeautifulSoup(pages['arbonia-2180-po-ploshadi'][2], 'html.parser')
check(len(calc.select('input[type="number"]')) == 2 and len(calc.select('input[type="checkbox"]')) == 6, '2180 calculator controls removed')
check('130 Вт' in calc.get_text(' ', strip=True) and 'условная модель оценки' in calc.get_text(' ', strip=True), 'Calculator default regime/assumption')
ral = BeautifulSoup(pages['ral-9016-pochemu-vybirayut-arkhitektory'][2], 'html.parser')
check(not ral.select('table'), 'RAL 9016 still repeats the three-white comparison')

def verify_link(path):
    try:
        status, final, _ = fetch(path)
        return {'path': path, 'status': status, 'redirect': final != BASE + path}
    except Exception as e:
        return {'path': path, 'error': str(e)}

with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
    linked = list(pool.map(verify_link, sorted(links)))
for r in linked:
    check(r.get('status') == 200, 'Broken page/image/asset: ' + r['path'])
report = {'base': BASE, 'build_id': BUILD, 'articles_checked': len(slugs), 'articles_revised': len(CHANGED),
          'listing_cards_updated': len(MAP['listing_cards_updated']), 'linked_pages_images_assets': len(linked),
          'articles': rows, 'links': linked, 'errors': errors}
(ROOT / 'audit/2026-10-13' / (NAME + '-intents-verification.json')).write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n')
print(json.dumps({k: v for k, v in report.items() if k not in ['articles', 'links']}, ensure_ascii=False, indent=2))
sys.exit(1 if errors else 0)
