import { Link } from "react-router-dom";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import CategoryGrid from "../components/CategoryGrid";

export default function Gateway() {
  useDocumentMeta({
    title: "Casa Banega — Guía personal de quiet luxury",
    description:
      "Experiencias, gastronomía y perfumería verificadas, sin relatos inventados.",
  });

  return (
    <>
      <section className="mosaico-wrap mosaico-primera">
        <div className="mosaico">
          <div className="tile tile-video" data-tema="oscuro">
            <video autoPlay muted loop playsInline>
              <source src="/hero.mp4" type="video/mp4" />
            </video>
            <div className="tile-video-overlay">
              <h1 className="tile-marca-titulo">
                Casa Banega
                <span className="titulo-hero-linea" />
              </h1>
              <p className="tile-marca-sub">Guía de experiencias, gastronomía y perfumes</p>
            </div>
          </div>

          <blockquote className="tile tile-cita" data-tema="oscuro">
            <p>“Quien sabe que tiene suficiente, es rico.”</p>
            <cite>— Lao-Tsé, Tao Te Ching</cite>
          </blockquote>

          <a
            className="tile tile-clara"
            href="https://lucasbanega.com"
            target="_blank"
            rel="noopener"
          >
            <p className="eyebrow">Proyecto hermano</p>
            <h2 className="tile-titulo">Online Boutique</h2>
            <p className="tile-apoyo">
              Lucas Banega, nuestra casa de moda masculina — mismo criterio, otro rubro.
              Salís de Casa Banega a un sitio propio y distinto.
            </p>
            <span className="ver-mas-inline">Visitar la boutique ↗</span>
          </a>

          <Link className="tile tile-clara" to="/filosofia">
            <p className="eyebrow">Dentro de Casa Banega</p>
            <h2 className="tile-titulo">Filosofía</h2>
            <p className="tile-apoyo">Por qué verificamos antes de publicar.</p>
            <span className="ver-mas-inline">Explorar filosofía</span>
          </Link>
        </div>
      </section>

      <section className="mosaico-wrap">
        <div className="section-head-row">
          <div>
            <p className="eyebrow" style={{ marginBottom: 6 }}>La guía</p>
            <h2>Tres formas de buscar lo mismo</h2>
          </div>
        </div>
        <CategoryGrid />
      </section>

      <section className="mosaico-wrap">
        <div className="tile tile-oscura">
          <p className="eyebrow">Para marcas y colaboraciones</p>
          <h2 className="tile-titulo-grande">Trabajemos juntos</h2>
          <p className="tile-apoyo tile-apoyo-oscura">
            Abierto a colaboraciones editoriales, contenido de marca y experiencias curadas
            con lugares que compartan esta misma sensibilidad.
          </p>
          <a className="btn-accent btn-accent-oscuro" href="mailto:hola@casabanega.com">
            Escribinos
          </a>
        </div>
      </section>
    </>
  );
}
