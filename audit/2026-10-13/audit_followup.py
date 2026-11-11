import concurrent.futures
import json
from audit_public import audit, get, OUT, BASE
from bs4 import BeautifulSoup

paths = ["/", "/radiators/2180-06", "/radiators/2180-10", "/models/3030-9016-12", "/models/3050-9016-69tvv/24", "/models/3180-9016-69tvv/4", "/models/3030-9016-69tvv/22", "/models/2180-9016-12/6", "/models/2180-9016-69tvv/10", "/models/2050-9016-69tvv/10", "/models/3030-9016-12/32", "/models/2057-9016-12/16", "/models/2057-9016-69tvv/30", "/models/2180-9005-12", "/models/2180-9005-69tvv"]
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
    results = list(pool.map(audit, [BASE + p for p in paths]))
details = []
for path in ["/radiators/2180-06", "/radiators/2180-10", "/models/2180", "/models/2030-9016-12", "/articles/arbonia-2180-po-ploshadi", "/articles/vertical-vs-horizontal"]:
    soup = BeautifulSoup(get(BASE + path).content, "html.parser")
    details.append({"url": BASE + path, "offers": [{"tag": e.name, "type": e.get("itemtype"), "content": e.get("content"), "text": e.get_text(" ", strip=True)[:500]} for e in soup.select('[itemprop="offers"],[itemprop="price"],[itemprop="priceCurrency"],[itemprop="lowPrice"],[itemprop="highPrice"]')], "jsonld_raw": [s.string or s.get_text() for s in soup.select('script[type="application/ld+json"]')]})
(OUT / "public-followup.json").write_text(json.dumps({"pages": results, "details": details}, ensure_ascii=False, indent=2))
print(json.dumps({"statuses": [{"url":r["url"],"status":r.get("status"),"robots":r.get("robots"),"error":r.get("error")} for r in results],"details": details}, ensure_ascii=False)[:15000])
