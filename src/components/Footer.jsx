import { Link } from "react-router-dom";

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
          <Link to="/experiencias">Experiencias</Link>
          <Link to="/gastronomia">Gastronomía</Link>
          <Link to="/perfumes">Perfumes</Link>
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
