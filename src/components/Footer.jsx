import { Link } from "react-router-dom";
export default function Footer() {
  return <footer className="site-footer"><div className="footer-brand"><Link to="/">CASA BANEGA</Link><p>BUENOS AIRES</p></div><div className="footer-links"><nav><Link to="/notas">REVISTA</Link><Link to="/perfumes">OBJETOS</Link><Link to="/experiencias">LUGARES</Link><Link to="/notas">NOTAS</Link><Link to="/sobre">SOBRE LA CASA</Link></nav><nav><a href="https://instagram.com/casabanega" target="_blank" rel="noreferrer">INSTAGRAM</a><a href="mailto:hola@casabanega.com">NEWSLETTER</a></nav></div><div className="footer-bottom"><span>© CASA BANEGA</span><span>BUENOS AIRES, ARGENTINA</span></div></footer>;
}
