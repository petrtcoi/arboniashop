import hashlib,json,tarfile
from pathlib import Path
ROOT=Path(__file__).resolve().parents[2];OUT=Path('/private/tmp/arboniashop-clusters-20261013.tgz')
source_dirs=['api_utils','components','contexts','data','hooks','models','pages','styles','theme','utils','variables','variablesPrices']
source_files=['package.json','package-lock.json','next.config.js','next-sitemap.js','tsconfig.json','next-env.d.ts']
roots=['.next','public']+source_dirs+source_files
with tarfile.open(OUT,'w:gz') as tar:
 for name in roots:
  p=ROOT/name
  if not p.exists():continue
  def allowed(info):
   if info.name.startswith('.next/cache') or info.name.endswith('.DS_Store') or info.issym() or info.islnk():return None
   return info
  tar.add(p,arcname=name,filter=allowed)
meta={'archive':str(OUT),'bytes':OUT.stat().st_size,'sha256':hashlib.sha256(OUT.read_bytes()).hexdigest(),'build_id':(ROOT/'.next/BUILD_ID').read_text().strip(),'release':'/root/releases/arboniashop-clusters-20261013','source_roots':roots}
(ROOT/'audit/2026-10-13/batch-2-artifact.json').write_text(json.dumps(meta,indent=2)+'\n');print(json.dumps(meta))
