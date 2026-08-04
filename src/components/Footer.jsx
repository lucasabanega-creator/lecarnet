import { Link } from "react-router-dom";
import { CATEGORIAS, destacadoPorCategoria } from "../data/items";

const CATEGORIAS_CON_CONTENIDO = Object.values(CATEGORIAS).filter((cat) =>
  destacadoPorCategoria(cat.slug)
);

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-col">
          <p className="footer-wordmark">
            Casa Banega
            <span className="footer-wordmark-linea" />
          </p>
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
      <div className="footer-bottom">© 2026 Casa Banega — Guía personal de quiet luxury</div>
    </footer>
  );
}
