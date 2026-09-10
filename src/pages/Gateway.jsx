import { Link } from "react-router-dom";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const Arrow = () => <span className="arrow" aria-hidden="true">→</span>;

export default function Gateway() {
  useDocumentMeta({ title: "CASA BANEGA — Objetos, lugares y cultura", description: "CASA BANEGA es un journal de Buenos Aires sobre objetos, lugares y formas de vivir que vale la pena recordar." });
  return <>
    <section className="journal-hero" aria-labelledby="hero-title">
      <video className="hero-film" autoPlay muted loop playsInline poster="/covers/experiencias.jpg"><source src="/hero.mp4" type="video/mp4" /></video>
      <div className="hero-wash" />
      <div className="hero-copy"><p className="kicker light">Lugares / Edición 001</p><h1 id="hero-title">Una mañana<br />en Buenos Aires</h1><Link className="editorial-link light" to="/experiencias">Leer la nota <Arrow /></Link></div>
      <p className="hero-meta">Buenos Aires<br />Septiembre 2026</p>
    </section>
    <section className="manifesto section-shell reveal"><p className="kicker">Casa Banega</p><h2>Una revista dedicada a los objetos,<br className="desktop-only" /> lugares y formas de vivir<br className="desktop-only" /> que vale la pena recordar.</h2></section>
    <section className="latest section-shell reveal" aria-labelledby="latest-title">
      <div className="section-label"><p id="latest-title" className="kicker">Últimas notas</p><span>01—03</span></div>
      <div className="journal-grid"><article className="journal-lead"><Link className="image-frame" to="/gastronomia/nano-cafe"><img src="/gastronomia/nano-cafe-croissant.jpg" alt="Una mesa matinal en Nano Café" /></Link><div className="story-index"><span>01</span><span>Lugares</span></div><h3><Link to="/gastronomia/nano-cafe">Una mañana en Buenos Aires</Link></h3><p className="story-dek">Una breve exploración de rituales, arquitectura y las horas silenciosas de la ciudad.</p><Link className="editorial-link" to="/gastronomia/nano-cafe">Leer la nota <Arrow /></Link></article>
        <div className="journal-minors"><article className="minor-story"><div className="story-index"><span>02</span><span>Objetos</span></div><h3><Link to="/perfumes/eau-parfumee-the-imperial">Objetos hechos para envejecer</Link></h3><Link className="editorial-link" to="/perfumes/eau-parfumee-the-imperial">Leer la nota <Arrow /></Link></article><article className="minor-story image-minor"><img src="/perfumes/bvlgari-the-imperial-banner.jpg" alt="Bvlgari Eau Parfumée Thé Impérial" /><div className="story-index"><span>03</span><span>Perfume</span></div><h3><Link to="/perfumes/eau-parfumee-the-imperial">Notas sobre rosa y oud</Link></h3><Link className="editorial-link" to="/perfumes/eau-parfumee-the-imperial">Leer la nota <Arrow /></Link></article></div>
      </div>
    </section>
    <section className="categories section-shell reveal" aria-label="Categorías editoriales"><p className="kicker">El índice</p><div className="category-list"><Link to="/perfumes"><span>Objetos</span><em>Cosas elegidas para permanecer.</em><Arrow /></Link><Link to="/experiencias"><span>Lugares</span><em>Hoteles, cafés, casas y ciudades.</em><Arrow /></Link><Link to="/notas"><span>Vestir</span><em>Ropa, textiles y el placer de la forma.</em><Arrow /></Link><Link to="/perfumes"><span>Perfume</span><em>El perfume como memoria y materia.</em><Arrow /></Link><Link to="/gastronomia"><span>Mesa</span><em>Comida, café y hospitalidad.</em><Arrow /></Link><Link to="/notas"><span>Notas</span><em>Observaciones desde la casa.</em><Arrow /></Link></div></section>
    <section className="feature-story reveal" aria-labelledby="feature-title"><img src="/3-sculpture.jpeg" alt="Objeto escultórico en luz natural" /><div className="feature-overlay"><p className="kicker light">Especial / Objetos</p><h2 id="feature-title">Las cosas que<br />elegimos guardar</h2><Link className="editorial-link light" to="/perfumes/eau-parfumee-the-imperial">Leer la nota <Arrow /></Link></div></section>
    <section className="quote-section section-shell reveal"><p>“Los buenos objetos no se consumen.<br />Adquieren una vida.”</p></section>
    <section className="private-notes section-shell reveal" aria-labelledby="notes-title"><div><p className="kicker">Notas privadas</p><h2 id="notes-title">Cartas ocasionales<br />de Casa Banega.</h2></div><form className="notes-form" onSubmit={(e) => e.preventDefault()}><label className="sr-only" htmlFor="email">Correo electrónico</label><input id="email" type="email" placeholder="Correo electrónico" required /><button type="submit">Suscribirme <Arrow /></button></form></section>
  </>;
}
