import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { render, routes, origin } from "../.prerender/entry-server.js";
const template=await readFile("dist/index.html","utf8");
const escape=value=>String(value).replaceAll("&","&amp;").replaceAll('"',"&quot;").replaceAll("<","&lt;").replaceAll(">","&gt;");
for(const pathname of [...routes,"/404"]){
  const {html,meta}=render(pathname);
  const tags=[`<title>${escape(meta.title)}</title>`,`<meta name="description" content="${escape(meta.description)}">`,`<meta name="robots" content="${meta.noindex ? "noindex, follow" : "index, follow"}">`,`<link rel="canonical" href="${escape(meta.url)}">`];
  const social={"og:title":meta.title,"og:description":meta.description,"og:type":meta.type,"og:url":meta.url,"og:image":meta.image,"og:site_name":"Casa Banega","og:locale":"es_AR"};
  for(const [key,value] of Object.entries(social))tags.push(`<meta property="${key}" content="${escape(value)}">`);
  for(const [key,value] of Object.entries({card:"summary_large_image",title:meta.title,description:meta.description,image:meta.image}))tags.push(`<meta name="twitter:${key}" content="${escape(value)}">`);
  if(meta.structuredData)tags.push(`<script type="application/ld+json" data-page-schema="true">${JSON.stringify(meta.structuredData).replaceAll("<","\\u003c")}</script>`);
  const blueprint=pathname==="/cartas" ? '<form name="cartas" method="POST" data-netlify="true" netlify-honeypot="bot-field" hidden><input type="hidden" name="form-name" value="cartas"><input name="bot-field"><input type="email" name="email"><input type="checkbox" name="consentimiento" value="si"></form>' : "";
  const output=template.replace(/<title>[\s\S]*?<\/title>/,"").replace(/<meta\s+name="description"[\s\S]*?\/>/,"").replace("</head>",`${tags.join("\n")}\n</head>`).replace('<div id="root"></div>',`<div id="root">${html}</div>`).replace("</body>",`${blueprint}</body>`);
  const target=pathname==="/" ? "dist/index.html" : pathname==="/404" ? "dist/404.html" : `dist${pathname}/index.html`;
  await mkdir(target.slice(0,target.lastIndexOf("/")),{recursive:true});await writeFile(target,output.replace(/[ \t]+$/gm,""));
}
await writeFile("dist/sitemap.xml",`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(path=>`<url><loc>${escape(origin+path)}</loc></url>`).join("\n")}</urlset>\n`);
await writeFile("dist/robots.txt",`User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);
await rm(".prerender",{recursive:true,force:true});
console.log(`Generated ${routes.length} pages, 404, robots and sitemap for ${origin}.`);
