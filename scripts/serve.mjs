import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
const root=resolve("dist");
const types={".html":"text/html; charset=utf-8",".js":"text/javascript",".css":"text/css",".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".ico":"image/x-icon",".mp4":"video/mp4",".xml":"application/xml",".txt":"text/plain"};
createServer(async(req,res)=>{
  if(req.method!=="GET" && req.method!=="HEAD"){res.writeHead(405);res.end("Method not allowed");return;}
  try{
    const pathname=decodeURIComponent(new URL(req.url,"http://localhost").pathname);
    if(pathname==="/experiencias" || pathname==="/experiencias/"){res.writeHead(301,{Location:"/selecciones"});res.end();return;}
    let file=resolve(root,`.${pathname}`);
    if(file!==root && !file.startsWith(root+sep))throw new Error("path");
    try{if((await stat(file)).isDirectory())file=resolve(file,"index.html");await stat(file);}catch{res.statusCode=404;file=resolve(root,"404.html");}
    const data=await readFile(file);res.setHeader("Content-Type",types[extname(file)] || "application/octet-stream");res.end(req.method==="HEAD" ? undefined : data);
  }catch{res.writeHead(400);res.end("Bad request");}
}).listen(4173,"127.0.0.1",()=>console.log("Local: http://127.0.0.1:4173/"));
