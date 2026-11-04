import test from "node:test";
import assert from "node:assert/strict";
import { readFile, readdir, stat, access } from "node:fs/promises";
import { join } from "node:path";
const origin="https://casabanega.com";
async function collect(dir){const paths=[];for(const entry of await readdir(dir,{withFileTypes:true})){const p=join(dir,entry.name);if(entry.isDirectory())paths.push(...await collect(p));else if(p.endsWith('.html'))paths.push(p);}return paths;}
const pages=await collect('dist');
test("Every public page ships content, unique metadata and crawlable internal destinations",async()=>{
  const titles=new Set();
  for(const file of pages){
    const html=await readFile(file,'utf8');
    assert.match(html,/<h1[\s>]/,file);
    assert.match(html,/<div id="root"><div/,file);
    const title=html.match(/<title>(.*?)<\/title>/)?.[1];assert.ok(title,file);assert.ok(!titles.has(title),`Repeated title: ${title}`);titles.add(title);
    assert.match(html,/<meta property="og:image" content="https:\/\/casabanega.com\/[^\"]+"/);
    const canonical=html.match(/rel="canonical" href="([^\"]+)"/)?.[1];assert.ok(canonical?.startsWith(origin));assert.ok(!/[?#]/.test(canonical));
    for(const match of html.matchAll(/(?:href|src)="([^\"]+)"/g)){
      const raw=match[1].replaceAll('&amp;','&');
      if(!raw.startsWith('/') || raw.startsWith('//'))continue;
      const url=new URL(raw,origin);if(url.pathname==='/404')continue;
      const target=join('dist',decodeURIComponent(url.pathname));
      try{const info=await stat(target);if(info.isDirectory())await access(join(target,'index.html'));}catch{assert.fail(`${file}: missing local resource ${raw}`);}
    }
    for(const schema of html.matchAll(/<script type="application\/ld\+json" data-page-schema="true">(.*?)<\/script>/g))assert.doesNotThrow(()=>JSON.parse(schema[1]));
  }
});
test("Sitemap only contains generated public pages; errors are noindex",async()=>{
  const sitemap=await readFile('dist/sitemap.xml','utf8');
  const urls=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);assert.equal(urls.length,pages.length-1);assert.ok(!urls.some(u=>u.includes('/experiencias') || u.includes('/404')));
  for(const url of urls)await access(join('dist',new URL(url).pathname,'index.html'));
  const error=await readFile('dist/404.html','utf8');assert.match(error,/name="robots" content="noindex, follow"/);
  assert.match(await readFile('netlify.toml','utf8'),/status = 404/);
});
test("Editorial promises and newsletter fallback are explicit",async()=>{
  const home=await readFile('dist/index.html','utf8');
  assert.doesNotMatch(home,/Próximamente|Notas sobre rosa y oud|Buscar|Objetos hechos para envejecer/);
  assert.match(home,/richemont-crecer-y-conservar-margen/);assert.match(home,/hermes-vitrina-como-relato/);assert.match(home,/bvlgari-del-hotel-al-objeto/);
  assert.match(home,/mailto:hola@casabanega.com\?subject=/);
  assert.ok((await stat('public/sculpture-1600.jpg')).size<400000);
});

test("Five researched reviews are published with sources, directions and image attribution",async()=>{
  for(const slug of ["la-patisserie-recoleta","presencia-gran-cafe","casa-cavia","amayta","shelter-coffee"]){
    const html=await readFile(`dist/gastronomia/${slug}/index.html`,"utf8");
    assert.match(html,/Reseña documental/);assert.match(html,/Antes de ir/);assert.match(html,/Dirección/);assert.match(html,/Fuente de imagen/);assert.match(html,/google.com\/maps\/search/);
    assert.ok((await stat(`public/gastronomia/${slug}.jpg`)).size<500000);
  }
});
