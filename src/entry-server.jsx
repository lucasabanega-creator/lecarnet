import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.js";
import App from "./App";
import { MetadataContext, resolveMeta } from "./hooks/useDocumentMeta";
import { OBJETOS, CATEGORIAS } from "./data/items";
import { NOTAS } from "./data/notas";
import { SITE } from "./site";
export const origin = SITE.url;
export const routes = ["/", "/notas", "/selecciones", "/sobre", "/filosofia", "/cartas", "/privacidad",
  ...Object.keys(CATEGORIAS).filter(cat=>OBJETOS.some(item=>item.cat===cat)).map(cat=>`/${cat}`),
  ...OBJETOS.map(item=>`/${item.cat}/${item.slug}`),...NOTAS.map(n=>`/notas/${n.slug}`)];
export function render(pathname) {
  const metadata={};
  const html=renderToString(<MetadataContext.Provider value={metadata}><StaticRouter location={pathname}><App/></StaticRouter></MetadataContext.Provider>);
  return {html,meta:resolveMeta(metadata,pathname)};
}
