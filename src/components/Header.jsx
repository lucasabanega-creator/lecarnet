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
    <a className="skip-link" href="#contenido">Skip to content</a><Link to="/" className="wordmark">Casa Banega</Link>
    <nav className="desktop-nav" aria-label="Primary navigation"><Link to="/notas">Journal</Link><Link to="/perfumes">Objects</Link><Link to="/experiencias">Places</Link><Link to="/notas">Notes</Link><Link to="/sobre">About</Link><button className="search-control" aria-label="Search">Search</button></nav>
    <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
    <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation"><Link to="/notas">Journal</Link><Link to="/perfumes">Objects</Link><Link to="/experiencias">Places</Link><Link to="/notas">Notes</Link><Link to="/sobre">About</Link><p>Buenos Aires<br />Argentina</p></nav>
  </header>;
}
