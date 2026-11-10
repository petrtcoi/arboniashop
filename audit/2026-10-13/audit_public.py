"""Read-only public SEO audit; save evidence locally, never submit forms."""
import concurrent.futures
import hashlib
import json
from pathlib import Path
from urllib.parse import urljoin, urlparse
import xml.etree.ElementTree as ET
import requests
from bs4 import BeautifulSoup

BASE = "https://arboniashop.ru"
OUT = Path(__file__).parent
NS = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}

def get(url):
    return requests.get(url, timeout=20, headers={"User-Agent": "ArboniaShop-SEO-Audit/1.0"})

def audit(url):
    try:
        r = get(url)
        soup = BeautifulSoup(r.content, "html.parser")
        data = {
            "url": url, "final_url": r.url, "status": r.status_code,
            "redirects": [{"status": h.status_code, "url": h.url} for h in r.history],
            "headers": {k: v for k, v in r.headers.items() if k.lower() in {"cache-control", "x-robots-tag", "content-type", "location"}},
            "title": soup.title.get_text(" ", strip=True) if soup.title else "",
            "description": [m.get("content") for m in soup.select('meta[name="description"]')],
            "robots": [m.get("content") for m in soup.select('meta[name="robots"]')],
            "canonical": [m.get("href") for m in soup.select('link[rel="canonical"]')],
            "h1": [h.get_text(" ", strip=True) for h in soup.find_all("h1")],
            "headings": [h.get_text(" ", strip=True) for h in soup.select("h2,h3")],
            "links": [{"url": urljoin(r.url, a["href"]), "text": a.get_text(" ", strip=True)} for a in soup.select("a[href]")],
            "microdata_types": [e.get("itemtype") for e in soup.select("[itemtype]")],
            "jsonld": [], "jsonld_errors": [],
        }
        for s in soup.select('script[type="application/ld+json"]'):
            try:
                data["jsonld"].append(json.loads(s.string or s.get_text()))
            except Exception as e:
                data["jsonld_errors"].append(str(e))
        for s in soup.select("script,style,noscript"):
            s.decompose()
        data["text"] = soup.get_text(" ", strip=True)
        data["word_count"] = len(data["text"].split())
        return data
    except Exception as e:
        return {"url": url, "error": str(e)}

if __name__ == "__main__":
    sitemap = get(BASE + "/sitemap.xml")
    (OUT / "sitemap.xml").write_bytes(sitemap.content)
    root = ET.fromstring(sitemap.content)
    urls = []
    for loc in root.findall("s:sitemap/s:loc", NS):
        r = get(loc.text)
        (OUT / Path(urlparse(loc.text).path).name).write_bytes(r.content)
        sub = ET.fromstring(r.content)
        urls.extend(e.text for e in sub.findall("s:url/s:loc", NS))
    chosen = [u for u in urls if "/articles" in u or "/catalog/" in u or urlparse(u).path in {"/", "/models/2180", "/models/3180", "/models/3030", "/models/3057", "/models/3050", "/models/2057", "/models/2050", "/coloring", "/about", "/delivery"}]
    chosen += [BASE + p for p in ["/models/2030-9016-12", "/models/2180-9016-69tvv", "/models/3030-9005-69tvv", "/models/2180-9016-12/6", "/models/2180/", "/models/2180?utm_source=audit", "/order/cart", "/accepted"]]
    chosen = list(dict.fromkeys(chosen))
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
        results = list(pool.map(audit, chosen))
    (OUT / "public-audit.json").write_text(json.dumps({"sitemap_urls": urls, "pages": results}, ensure_ascii=False, indent=2))
    print(json.dumps({"sitemap_urls": len(urls), "audited": len(results), "errors": [r for r in results if "error" in r], "jsonld_errors": [{"url": r["url"], "errors": r.get("jsonld_errors")} for r in results if r.get("jsonld_errors")]}, ensure_ascii=False))
