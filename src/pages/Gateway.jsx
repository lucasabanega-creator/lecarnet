import { Link } from "react-router-dom";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { CATEGORIAS, OBJETOS } from "../data/items";

export default function Gateway() {
  useDocumentMeta({ title: "CASA BANEGA — El lujo de mirar de cerca", description: "Un archivo personal de lugares, sabores y fragancias. La selección de CASA BANEGA, con criterio y fuentes." });
  const categories = [CATEGORIAS.gastronomia, CATEGORIAS.perfumes, CATEGORIAS.experiencias];
  return <>
    <section className="editorial-cover" aria-labelledby="cover-title">
      <p className="cover-index">Un archivo personal<br />Buenos Aires, Argentina</p>
      {categories.map((cat, i) => <Link key={cat.slug} to={`/${cat.slug}`} className={`cover-tile cover-tile-${i + 1}`}>
        <img src={cat.imagenPortada} alt={cat.nombre} fetchpriority={i === 0 ? "high" : "auto"} />
        <span>0{i + 1} / {cat.nombre}</span>
      </Link>)}
      <div className="cover-title"><p className="eyebrow">Lugares, sabores y fragancias</p><h1 id="cover-title">CASA BANEGA</h1><p>El lujo de mirar de cerca.</p></div>
      <p className="cover-note">Una selección con criterio.<br />Historias que merecen quedarse.</p>
      <Link className="cover-explore" to="/filosofia">Nuestro criterio</Link>
    </section>
    <section className="editorial-intro"><p className="eyebrow">La mirada de la casa</p><h2>Lo extraordinario,<br />en voz baja.</h2><div><p className="lead">Un lugar al que volver. Un sabor que permanece. Una fragancia que cuenta una historia.</p><p>CASA BANEGA reúne experiencias, gastronomía y perfumes en un archivo personal. Cada ficha tiene una razón para estar acá, fuentes y una fecha de revisión.</p><Link className="ver-mas-inline" to="/sobre">Conocer la casa</Link></div></section>
    <section className="selection"><div className="section-head-row"><p className="eyebrow">El archivo / Selección actual</p><h2>Para detenerse.</h2></div><div className="grid-cards">{OBJETOS.map((item, i) => <Link className="card-chica" key={item.slug} to={`/${item.cat}/${item.slug}`}><img className="card-media-foto" src={item.imagenBanner || item.imagen} alt={item.nombre} loading="lazy" /><div className="card-chica-content"><p className="card-cat">0{i + 1} / {CATEGORIAS[item.cat].nombre}</p><h3>{item.nombre}</h3><p>{item.lugar}</p></div></Link>)}</div></section>
  </>;
}
