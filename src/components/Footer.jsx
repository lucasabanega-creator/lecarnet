import { Link } from "react-router-dom";
import { CATEGORIAS, destacadoPorCategoria } from "../data/items";
import Monogram from "./Monogram";

const CATEGORIAS_CON_CONTENIDO = Object.values(CATEGORIAS).filter((cat) =>
  destacadoPorCategoria(cat.slug)
);

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <p className="footer-wordmark">
            <Monogram size={24} />
            Casa Banega
          </p>
          <a
            className="footer-social"
            href="https://instagram.com/casabanega"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram de Casa Banega"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>

        <div className="footer-cols">
          <div className="footer-col">
            <p className="footer-tagline">Guía de experiencias, gastronomía y perfumes de quiet luxury.</p>
          </div>
          <div className="footer-col">
            <h4>Explorar</h4>
            {CATEGORIAS_CON_CONTENIDO.map((cat) => (
              <Link key={cat.slug} to={`/${cat.slug}`}>{cat.nombre}</Link>
            ))}
            <Link to="/sobre">Sobre</Link>
            <Link to="/filosofia">Filosofía</Link>
          </div>
          <div className="footer-col">
            <h4>Contacto</h4>
            <a href="mailto:hola@casabanega.com">hola@casabanega.com</a>
            <a href="https://instagram.com/casabanega" target="_blank" rel="noreferrer">@casabanega</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Casa Banega — Guía personal de quiet luxury</span>
      </div>
    </footer>
  );
}
