import { Link } from "react-router-dom";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const Arrow = () => <span className="arrow" aria-hidden="true">→</span>;

export default function Gateway() {
  useDocumentMeta({ title: "CASA BANEGA — A journal of objects, places and culture", description: "Casa Banega is a Buenos Aires journal of objects, places and ways of living worth remembering." });
  return <>
    <section className="journal-hero" aria-labelledby="hero-title">
      <video className="hero-film" autoPlay muted loop playsInline poster="/covers/experiencias.jpg"><source src="/hero.mp4" type="video/mp4" /></video>
      <div className="hero-wash" />
      <div className="hero-copy"><p className="kicker light">Places / Issue 001</p><h1 id="hero-title">A Morning<br />in Buenos Aires</h1><Link className="editorial-link light" to="/experiencias">Read the journal <Arrow /></Link></div>
      <p className="hero-meta">Buenos Aires<br />September 2026</p>
    </section>
    <section className="manifesto section-shell reveal"><p className="kicker">Casa Banega</p><h2>A journal devoted to objects,<br className="desktop-only" /> places and ways of living<br className="desktop-only" /> worth remembering.</h2></section>
    <section className="latest section-shell reveal" aria-labelledby="latest-title">
      <div className="section-label"><p id="latest-title" className="kicker">Latest journal</p><span>01—03</span></div>
      <div className="journal-grid"><article className="journal-lead"><Link className="image-frame" to="/gastronomia/nano-cafe"><img src="/gastronomia/nano-cafe-croissant.jpg" alt="A warm morning table at Nano Café" /></Link><div className="story-index"><span>01</span><span>Places</span></div><h3><Link to="/gastronomia/nano-cafe">A Morning in Buenos Aires</Link></h3><p className="story-dek">A short exploration of ritual, architecture and the quiet hours of the city.</p><Link className="editorial-link" to="/gastronomia/nano-cafe">Read journal <Arrow /></Link></article>
        <div className="journal-minors"><article className="minor-story"><div className="story-index"><span>02</span><span>Objects</span></div><h3><Link to="/perfumes/eau-parfumee-the-imperial">Objects Made to Age</Link></h3><Link className="editorial-link" to="/perfumes/eau-parfumee-the-imperial">Read journal <Arrow /></Link></article><article className="minor-story image-minor"><img src="/perfumes/bvlgari-the-imperial-banner.jpg" alt="Bvlgari Eau Parfumée Thé Impérial" /><div className="story-index"><span>03</span><span>Scent</span></div><h3><Link to="/perfumes/eau-parfumee-the-imperial">Notes on Rose and Oud</Link></h3><Link className="editorial-link" to="/perfumes/eau-parfumee-the-imperial">Read journal <Arrow /></Link></article></div>
      </div>
    </section>
    <section className="categories section-shell reveal" aria-label="Editorial categories"><p className="kicker">The index</p><div className="category-list"><Link to="/perfumes"><span>Objects</span><em>Things chosen to remain.</em><Arrow /></Link><Link to="/experiencias"><span>Places</span><em>Hotels, cafés, homes and cities.</em><Arrow /></Link><Link to="/notas"><span>Dress</span><em>Clothes, textiles and the pleasure of form.</em><Arrow /></Link><Link to="/perfumes"><span>Scent</span><em>Perfume as memory and material.</em><Arrow /></Link><Link to="/gastronomia"><span>Table</span><em>Food, coffee and hospitality.</em><Arrow /></Link><Link to="/notas"><span>Notes</span><em>Observations from the house.</em><Arrow /></Link></div></section>
    <section className="feature-story reveal" aria-labelledby="feature-title"><img src="/3-sculpture.jpeg" alt="Sculptural object in natural light" /><div className="feature-overlay"><p className="kicker light">Feature / Objects</p><h2 id="feature-title">The Things We<br />Choose to Keep</h2><Link className="editorial-link light" to="/perfumes/eau-parfumee-the-imperial">Read story <Arrow /></Link></div></section>
    <section className="quote-section section-shell reveal"><p>“Good objects are not consumed.<br />They acquire a life.”</p></section>
    <section className="private-notes section-shell reveal" aria-labelledby="notes-title"><div><p className="kicker">Private notes</p><h2 id="notes-title">Occasional letters<br />from Casa Banega.</h2></div><form className="notes-form" onSubmit={(e) => e.preventDefault()}><label className="sr-only" htmlFor="email">Email address</label><input id="email" type="email" placeholder="Email address" required /><button type="submit">Subscribe <Arrow /></button></form></section>
  </>;
}
