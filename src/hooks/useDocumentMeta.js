import { createContext, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE, absoluteUrl, canonicalPath } from "../site";
export const MetadataContext = createContext(null);
export function resolveMeta(meta, pathname, origin = SITE.url) {
  return { ...meta, title:meta.title || "Casa Banega — Cultura del lujo y decisiones de marca", description:meta.description || SITE.description,
    image:absoluteUrl(meta.image || SITE.image,origin), url:absoluteUrl(canonicalPath(pathname),origin), type:meta.type || "website", noindex:Boolean(meta.noindex) || !origin };
}
function setMeta(attr,key,value) {
  let el=document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) { el=document.createElement("meta"); el.setAttribute(attr,key); document.head.appendChild(el); }
  el.setAttribute("content",value);
}
export function useDocumentMeta(input) {
  const collector=useContext(MetadataContext), {pathname}=useLocation();
  if (collector) Object.assign(collector,input);
  const serialized=JSON.stringify(input);
  useEffect(()=>{
    const meta=resolveMeta(JSON.parse(serialized),pathname,SITE.url || window.location.origin);
    document.title=meta.title;
    setMeta("name","description",meta.description);
    setMeta("name","robots",meta.noindex ? "noindex, follow" : "index, follow");
    for (const [key,value] of Object.entries({title:meta.title,description:meta.description,type:meta.type,url:meta.url,image:meta.image,site_name:SITE.name,locale:"es_AR"})) setMeta("property",`og:${key}`,value);
    for (const [key,value] of Object.entries({card:"summary_large_image",title:meta.title,description:meta.description,image:meta.image})) setMeta("name",`twitter:${key}`,value);
    let canonical=document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {canonical=document.createElement("link");canonical.rel="canonical";document.head.appendChild(canonical);}
    canonical.href=meta.url;
    document.querySelectorAll('script[data-page-schema]').forEach(el=>el.remove());
    if (meta.structuredData) {const script=document.createElement("script");script.type="application/ld+json";script.dataset.pageSchema="true";script.textContent=JSON.stringify(meta.structuredData);document.head.appendChild(script);}
  },[serialized,pathname]);
}
