import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CATEGORIAS } from "../data/items";

export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  useEffect(() => setOpen(false), [pathname]);
  const linkClass = ({ isActive }) => "navlink" + (isActive ? " activo" : "");
  return (
    <header className="site-header" onKeyDown={(e) => {
      if (e.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); }
    }}>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Link to="/" className="wordmark">CASA BANEGA</Link>
      <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="navegacion" onClick={() => setOpen(!open)}>{open ? "Cerrar" : "Menú"}</button>
      <nav id="navegacion" className={open ? "site-nav abierto" : "site-nav"} aria-label="Navegación principal">
        <div className="nav-categories">{Object.values(CATEGORIAS).map(cat => <NavLink key={cat.slug} to={`/${cat.slug}`} className={linkClass}>{cat.nombre}</NavLink>)}</div>
        <div className="nav-pages"><NavLink to="/" end className={linkClass}>Índice</NavLink><NavLink to="/sobre" className={linkClass}>La casa</NavLink><NavLink to="/filosofia" className={linkClass}>Criterio</NavLink><NavLink to="/notas" className={linkClass}>Notas</NavLink></div>
      </nav>
    </header>
  );
}
