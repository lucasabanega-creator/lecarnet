import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CATEGORIAS, destacadoPorCategoria } from "../data/items";

const CATEGORIAS_CON_CONTENIDO = Object.values(CATEGORIAS).filter((cat) =>
  destacadoPorCategoria(cat.slug)
);

export default function Header() {
  const { pathname } = useLocation();
  const [sobreOscuro, setSobreOscuro] = useState(pathname === "/");
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);
  const intersectando = useRef(new Set());

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    let observer;

    const configurar = () => {
      if (observer) observer.disconnect();
      intersectando.current = new Set();

      const alto = header.getBoundingClientRect().height;
      const zonas = document.querySelectorAll('[data-tema="oscuro"]');
      if (zonas.length === 0) {
        setSobreOscuro(false);
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) intersectando.current.add(entry.target);
            else intersectando.current.delete(entry.target);
          });
          setSobreOscuro(intersectando.current.size > 0);
        },
        { rootMargin: `0px 0px -${Math.max(window.innerHeight - alto, 0)}px 0px`, threshold: 0 }
      );

      zonas.forEach((zona) => observer.observe(zona));
    };

    configurar();
    window.addEventListener("resize", configurar);
    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener("resize", configurar);
    };
  }, [pathname]);

  const solido = !sobreOscuro || open;
  const linkClass = ({ isActive }) => "navlink" + (isActive ? " activo" : "");

  return (
    <>
      <header ref={headerRef} className={(solido ? "solido" : "") + (open ? " abierto" : "")}>
        <div className="header-inner">
          <button className="menu-toggle" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
            <span>{open ? "Cerrar" : "Menú"}</span>
          </button>

          <Link to="/" className="wordmark" onClick={() => setOpen(false)}>
            <span className="wordmark-texto">Casa Banega</span>
          </Link>

          <a className="header-cta" href="mailto:hola@casabanega.com">Escribinos</a>
        </div>
      </header>

      <div className={"menu-overlay" + (open ? " abierto" : "")}>
        <nav className="menu-overlay-nav">
          {CATEGORIAS_CON_CONTENIDO.map((cat) => (
            <NavLink key={cat.slug} to={`/${cat.slug}`} className={linkClass} onClick={() => setOpen(false)}>
              {cat.nombre}
            </NavLink>
          ))}
          <NavLink to="/sobre" className={linkClass} onClick={() => setOpen(false)}>Sobre</NavLink>
          <NavLink to="/filosofia" className={linkClass} onClick={() => setOpen(false)}>Filosofía</NavLink>
        </nav>
        <a className="menu-overlay-cta" href="mailto:hola@casabanega.com">hola@casabanega.com</a>
      </div>
    </>
  );
}
