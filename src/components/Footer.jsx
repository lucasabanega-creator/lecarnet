import { Link } from "react-router-dom";
export default function Footer() {
  return <footer className="site-footer"><div className="footer-brand"><Link to="/">Casa Banega</Link><p>Buenos Aires</p></div><div className="footer-links"><nav><Link to="/notas">Journal</Link><Link to="/perfumes">Objects</Link><Link to="/experiencias">Places</Link><Link to="/notas">Notes</Link><Link to="/sobre">About</Link></nav><nav><a href="https://instagram.com/casabanega" target="_blank" rel="noreferrer">Instagram</a><a href="mailto:hola@casabanega.com">Newsletter</a></nav></div><div className="footer-bottom"><span>© Casa Banega</span><span>Buenos Aires, Argentina</span></div></footer>;
}
