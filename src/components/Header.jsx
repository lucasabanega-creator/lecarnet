import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const solido = !isHome || scrolled;
  const linkClass = ({ isActive }) => "navlink" + (isActive ? " activo" : "");

  return (
    <header className={(solido ? "solido" : "") + (open ? " abierto" : "")}>
      <div className="header-inner">
        <Link to="/" className="wordmark" onClick={() => setOpen(false)}>
          <span className="wordmark-texto">Casa Banega</span>
          <span className="wordmark-linea" />
        </Link>
        <nav className="nav-desktop">
          <NavLink to="/experiencias" className={linkClass}>Experiencias</NavLink>
          <NavLink to="/gastronomia" className={linkClass}>Gastronomía</NavLink>
          <NavLink to="/perfumes" className={linkClass}>Perfumes</NavLink>
          <a className="btn-accent" href="mailto:hola@casabanega.com">Escribinos</a>
        </nav>
        <button
          className="nav-toggle"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
      <nav className="nav-mobile">
        <NavLink to="/experiencias" className={linkClass} onClick={() => setOpen(false)}>Experiencias</NavLink>
        <NavLink to="/gastronomia" className={linkClass} onClick={() => setOpen(false)}>Gastronomía</NavLink>
        <NavLink to="/perfumes" className={linkClass} onClick={() => setOpen(false)}>Perfumes</NavLink>
        <a className="btn-accent" href="mailto:hola@casabanega.com">Escribinos</a>
      </nav>
    </header>
  );
}
