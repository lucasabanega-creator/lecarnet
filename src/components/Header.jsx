import { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
const links=[["/notas","Revista"],["/selecciones","Selecciones"],["/sobre","La casa"],["/cartas","Cartas"]];
export default function Header() {
  const {pathname}=useLocation();
  const [open,setOpen]=useState(false),[scrolled,setScrolled]=useState(false);
  const toggle=useRef(null),menu=useRef(null);
  useEffect(()=>{setOpen(false);},[pathname]);
  useEffect(()=>{const update=()=>setScrolled(window.scrollY>36);update();window.addEventListener("scroll",update,{passive:true});return()=>window.removeEventListener("scroll",update);},[]);
  useEffect(()=>{
    if (!open) return;
    const previous=document.body.style.overflow;document.body.style.overflow="hidden";
    menu.current?.querySelector("a")?.focus();
    const keydown=e=>{
      if(e.key==="Escape"){setOpen(false);toggle.current?.focus();}
      if(e.key!=="Tab")return;
      const elements=[toggle.current,...menu.current.querySelectorAll("a")],first=elements[0],last=elements.at(-1);
      if(e.shiftKey && document.activeElement===first){e.preventDefault();last.focus();}
      else if(!e.shiftKey && document.activeElement===last){e.preventDefault();first.focus();}
    };
    const resize=()=>{if(window.innerWidth>760)setOpen(false);};
    document.addEventListener("keydown",keydown);window.addEventListener("resize",resize);
    return()=>{document.body.style.overflow=previous;document.removeEventListener("keydown",keydown);window.removeEventListener("resize",resize);};
  },[open]);
  return <header className={`site-header ${pathname!=="/" || scrolled ? "is-scrolled" : ""} ${open ? "menu-open" : ""}`}>
    <a className="skip-link" href="#contenido">Ir al contenido</a><Link to="/" className="wordmark">Casa Banega</Link>
    <nav className="desktop-nav" aria-label="Navegación principal">{links.map(([url,label])=><NavLink key={url} to={url}>{label}</NavLink>)}</nav>
    <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(value=>!value)}>{open ? "Cerrar" : "Menú"}</button>
    <nav ref={menu} id="mobile-menu" className="mobile-nav" aria-label="Navegación móvil" hidden={!open}>{links.map(([url,label])=><NavLink key={url} to={url}>{label}</NavLink>)}<p>Buenos Aires<br/>Argentina</p></nav>
  </header>;
}
