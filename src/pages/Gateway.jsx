import { Link } from "react-router-dom";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { CATEGORIAS } from "../data/items";

export default function Gateway() {
  useDocumentMeta({
    title: "Casa Banega — Guía personal de quiet luxury",
    description:
      "Experiencias, gastronomía y perfumería verificadas, sin relatos inventados.",
  });

  const pilares = [CATEGORIAS.gastronomia, CATEGORIAS.perfumes, CATEGORIAS.experiencias];

  return (
    <>
      <section className="home-intro centrado">
        <p className="eyebrow">Casa Banega</p>
        <h1 className="headline-principal">El verdadero lujo no necesita anunciarse.</h1>
        <p className="lead">
          Un archivo personal de lugares, sabores y fragancias — verificados antes de
          publicarse, sin relatos inventados.
        </p>
        <Link className="ver-mas-inline" to="/filosofia">Sobre el criterio</Link>
      </section>

      <section className="pilares-wrap">
        <div className="section-head-row">
          <div>
            <p className="eyebrow" style={{ marginBottom: 6 }}>La guía</p>
            <h2>Tres formas de buscar lo mismo</h2>
          </div>
        </div>
        <div className="pilares-grid">
          {pilares.map((cat) => (
            <Link key={cat.slug} className="pilar-card" to={`/${cat.slug}`}>
              <div className="pilar-media">
                <img src={cat.imagenPortada} alt="" />
              </div>
              <p className="card-cat">{cat.eyebrow}</p>
              <h3 className="pilar-nombre">{cat.nombre}</h3>
              <p className="pilar-intro">{cat.intro}</p>
              <span className="ver-mas-inline">Explorar {cat.nombre.toLowerCase()}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
