import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";
  const toggle = useRef(null);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => { const update = () => setScrolled(window.scrollY > 36 || pathname !== "/"); update(); window.addEventListener("scroll", update, { passive: true }); return () => window.removeEventListener("scroll", update); }, [pathname]);
  return <header className={`site-header ${(!isHome || scrolled) ? "is-scrolled" : ""} ${open ? "menu-open" : ""}`}>
    <a className="skip-link" href="#contenido">Ir al contenido</a><Link to="/" className="wordmark">CASA BANEGA</Link>
    <nav className="desktop-nav" aria-label="Navegación principal"><Link to="/notas">Revista</Link><Link to="/perfumes">Objetos</Link><Link to="/experiencias">Lugares</Link><Link to="/notas">Notas</Link><Link to="/sobre">Sobre la casa</Link><button className="search-control" aria-label="Buscar">Buscar</button></nav>
    <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? "Cerrar" : "Menú"}</button>
    <nav id="mobile-menu" className="mobile-nav" aria-label="Navegación móvil"><Link to="/notas">Revista</Link><Link to="/perfumes">Objetos</Link><Link to="/experiencias">Lugares</Link><Link to="/notas">Notas</Link><Link to="/sobre">Sobre la casa</Link><p>Buenos Aires<br />Argentina</p></nav>
  </header>;
}
