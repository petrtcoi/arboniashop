import concurrent.futures,json,re,sys,urllib.request,xml.etree.ElementTree as ET
from pathlib import Path
from bs4 import BeautifulSoup
ROOT=Path(__file__).resolve().parents[2];OUT=Path(__file__).resolve().parent
BASE,NAME=sys.argv[1].rstrip('/'),sys.argv[2];BUILD=(ROOT/'.next/BUILD_ID').read_text().strip()
DRAFTS=json.loads((ROOT/'content-drafts/2026-10-13-batch-2/articles.json').read_text());errors=[];links=set();reports=[]
def check(ok,msg):
 if not ok:errors.append(msg)
def fetch(path):
 with urllib.request.urlopen(urllib.request.Request(BASE+path,headers={'User-Agent':'ArboniaShop-publication-check/1.0'}),timeout=25) as r:return r.status,r.url,r.read().decode()
def norm(s):return re.sub(r'\s+([.,;:?!])',r'\1',re.sub(r'\s+',' ',s).strip())
for p in sorted((ROOT/'data/articles').glob('*.json')):
 a=json.loads(p.read_text());path='/articles/'+a['slug'];status,url,html=fetch(path);s=BeautifulSoup(html,'html.parser');body=s.find('article');ld=[json.loads(x.string) for x in s.select('script[type="application/ld+json"]')];schemas={x['@type']:x for x in ld if '@type' in x}
 check(status==200 and url==BASE+path,path+': HTTP');check(s.title.get_text()==a['title'],path+': title');check(len(s.select('h1'))==1 and s.h1.get_text()==a['heading'],path+': H1')
 check(s.select_one('meta[name=description]')['content']==a['description'],path+': description');check(s.select_one('link[rel=canonical]')['href']=='https://arboniashop.ru'+path,path+': canonical');check('noindex' not in s.select_one('meta[name=robots]')['content'],path+': indexability')
 check(json.loads(s.select_one('#__NEXT_DATA__').string)['buildId']==BUILD,path+': build');check({'Article','BreadcrumbList','FAQPage'}<=set(schemas),path+': schema types')
 check(schemas['Article']['datePublished']==a['datePublished'] and schemas['Article']['dateModified']==a['dateModified'],path+': dates')
 check(len(body.select('h2'))>=6,path+': H2');faq=schemas['FAQPage']['mainEntity'];check(len(faq)==len(a['faq'])==3,path+': FAQ count')
 for f,q in zip(faq,a['faq']):
  visible=body.find('h3',string=q['question']);check(visible is not None,path+': FAQ H3')
  check(f['name']==q['question'] and f['acceptedAnswer']['text']==q['answer'],path+': FAQ JSON-LD');check(visible is not None and norm(visible.find_next_sibling('p').get_text(' ',strip=True))==norm(q['answer']),path+': FAQ visible answer')
 if any(x['slug']==a['slug'] for x in DRAFTS):
  check(len(body.select('h3'))==3,path+': real H3');check('pyradia' not in str(body).lower(),path+': removed external link');check(not body.select('a[href*="Pyradia"]'),path+': irrelevant source')
  if 'konvektor' in a['slug']:check(all(t in body.get_text() for t in ['1,33','51%','45%']),path+': comparison percentages')
 for x in body.select('a[href]'):
  if x['href'].startswith('/'):links.add(x['href'].split('#')[0])
 links.add(a['image']);reports.append({'path':path,'h1':1,'h2':len(body.select('h2')),'h3':len(body.select('h3')),'faq':len(faq)})
parents={}
for a in DRAFTS:
 for x in a['incoming']:parents.setdefault(x['from'],set()).add('/articles/'+a['slug'])
parents.setdefault('/articles/delta-t-teplootdacha',set()).add('/articles/arbonia-3030-skolko-sektsiy-dlina-moshchnost')
for path,targets in parents.items():
 _,_,html=fetch(path);s=BeautifulSoup(html,'html.parser');hrefs={x['href'] for x in s.select('a[href]')}
 for target in targets:check(target in hrefs,path+': incoming link '+target)
 if path=='/coloring':check(all(t in s.get_text() for t in ['порошков','официальный дилер','гарантия сохраняется']),path+': service facts')
 if path=='/articles/panorama':
  items=[json.loads(x.string) for x in s.select('script[type="application/ld+json"]')];faq=next(x for x in items if x.get('@type')=='FAQPage')
  q=next(x for x in faq['mainEntity'] if 'внутрипольный конвектор?' in x['name']);h=s.find('h3',string=q['name']);check(norm(h.find_next_sibling().get_text(' ',strip=True))==norm(q['acceptedAnswer']['text']),path+': parent FAQ synchronization')
corrected={'2057':(42,53),'2100':(74,93),'3037':(38,48),'3057':(58,73),'5045':(77,98)};card_reports=[]
paths=['/models/2057-9016-12','/models/2057-9016-69tvv','/models/2100','/models/3037','/models/3037-9016-12','/models/3037-9016-69tvv','/models/3057-9016-12','/models/3057-9016-69tvv','/models/5045','/models/3057-9016-12/18']
for path in paths:
 _,_,html=fetch(path);s=BeautifulSoup(html,'html.parser');props=json.loads(s.select_one('#__NEXT_DATA__').string)['props']['pageProps'];m=props.get('modelCurr') or props['model'];family=m['id'].split('-')[0];expected=corrected[family];actual=(float(m['dt50']),float(m['dt60']));check(actual==expected,path+': corrected power');card_reports.append({'path':path,'dt50':actual[0],'dt60':actual[1]})
for path in ['/models/2057','/models/3057']:
 _,_,html=fetch(path);text=BeautifulSoup(html,'html.parser').get_text(' ',strip=True);old='54 Вт' if path.endswith('2057') else '78 Вт';check(old not in text,path+': old hardcoded value')
_,_,html=fetch('/articles/faq');s=BeautifulSoup(html,'html.parser');table=s.select_one('#faq-42 table');rows=table.select('tr')[1:]
for row in rows:
 cells=row.select('td');n=int(re.search(r'(\d+) секц',cells[1].get_text()).group(1));power=int(re.search(r'(\d+) Вт',cells[1].get_text()).group(1));check(power==n*73,'FAQ table: 3057 total power')
_,_,xml=fetch('/sitemap-0.xml');locs={e.text for e in ET.fromstring(xml).iter() if e.tag.endswith('}loc')}
for a in DRAFTS:check('https://arboniashop.ru/articles/'+a['slug'] in locs,a['slug']+': sitemap')
def inspect(path):
 try:
  with urllib.request.urlopen(BASE+path,timeout=20) as r:return path,r.status
 except Exception as e:return path,str(e)
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
 for path,status in pool.map(inspect,sorted(links)):check(status==200,path+': linked asset '+str(status))
# Every generated family/variant must carry the fixed powers, including unlinked variants.
variants=[]
for p in (ROOT/'.next/server/pages/models').rglob('*.json'):
 d=json.loads(p.read_text());props=d.get('pageProps',{});m=props.get('modelCurr') or props.get('model')
 if not m:continue
 family=m['id'].split('-')[0]
 if family in corrected:
  check((float(m['dt50']),float(m['dt60']))==corrected[family],str(p)+': prerender correction');variants.append(str(p.relative_to(ROOT/'.next/server/pages')))
report={'base':BASE,'build_id':BUILD,'articles':reports,'incoming_links':sum(len(v) for v in parents.values()),'parents':len(parents),'cards':card_reports,'generated_corrected_variants':len(variants),'faq_3057_rows_corrected':len(rows),'linked_pages_and_images':len(links),'sitemap_urls':len(locs),'errors':errors}
(OUT/(NAME+'-batch-2-verification.json')).write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n');print(json.dumps({k:v for k,v in report.items() if k not in ['articles','cards']},ensure_ascii=False,indent=2));sys.exit(bool(errors))
