import { Link } from "react-router-dom";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { SITE, absoluteUrl } from "../site";
import { NOTAS } from "../data/notas";
import { OBJETOS } from "../data/items";
import HeroFilm from "../components/HeroFilm";
import Newsletter from "../components/Newsletter";
export default function Gateway(){
  useDocumentMeta({title:"Casa Banega — Cultura del lujo y decisiones de marca",description:SITE.description,structuredData:{"@context":"https://schema.org","@type":"Organization",name:SITE.name,url:SITE.url,logo:absoluteUrl("/monogram-512.png"),founder:{"@type":"Person",name:"Lucas Banega"}}});
  return <>
    <section className="journal-hero" aria-labelledby="hero-title"><HeroFilm/><div className="hero-wash"/><div className="hero-copy"><p className="kicker light">Casa Banega · Desde Buenos Aires</p><h1 id="hero-title">El valor está<br/>en las decisiones.</h1><p className="hero-dek">Una publicación sobre cultura del lujo, objetos y las decisiones que construyen una marca.</p><Link className="editorial-link light" to="/notas">Leer la revista →</Link></div></section>
    <section className="manifesto section-shell"><p className="kicker">La mirada</p><h2>Observar un objeto.<br/>Entender una experiencia.<br/>Leer una decisión de marca.</h2></section>
    <section className="latest section-shell" aria-labelledby="latest-title"><div className="section-label"><h2 id="latest-title" className="kicker">En la revista</h2><span>01—03</span></div><div className="journal-grid"><article className="journal-lead"><p className="story-index">{NOTAS[0].categoria}</p><h3><Link to={`/notas/${NOTAS[0].slug}`}>{NOTAS[0].titulo}</Link></h3><p className="story-dek">{NOTAS[0].bajada}</p><Link className="editorial-link" to={`/notas/${NOTAS[0].slug}`}>Leer el análisis →</Link></article><div className="journal-minors">{NOTAS.slice(1).map(n=><article className="minor-story" key={n.slug}><p className="story-index">{n.categoria}</p><h3><Link to={`/notas/${n.slug}`}>{n.titulo}</Link></h3><p className="story-dek">{n.bajada}</p><Link className="editorial-link" to={`/notas/${n.slug}`}>Leer la nota →</Link></article>)}</div></div></section>
    <section className="selections-home section-shell" aria-labelledby="selection-title"><div className="section-label"><h2 id="selection-title" className="kicker">Selecciones de la casa</h2><Link to="/selecciones">Ver el archivo →</Link></div><div className="selection-grid">{OBJETOS.map(item=><article key={item.slug}><Link className="image-frame" to={`/${item.cat}/${item.slug}`}><img src={item.imagenBanner || item.imagen} alt={item.nombre} loading="lazy" width="960" height="720"/></Link><p className="kicker">{item.lugar}</p><h3><Link to={`/${item.cat}/${item.slug}`}>{item.nombre}</Link></h3><p>{item.desc}</p></article>)}</div></section>
    <section className="house-intro section-shell"><p className="kicker">La casa</p><h2>Una publicación de Lucas Banega.</h2><p>Desde Buenos Aires, una mirada sobre los detalles que conectan cultura, producto y experiencia. Cada selección explica su criterio; cada análisis distingue los hechos de su interpretación.</p><Link className="editorial-link" to="/sobre">Conocer la casa →</Link></section>
    <Newsletter/>
  </>;
}
