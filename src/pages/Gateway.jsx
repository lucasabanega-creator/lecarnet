import { Link } from "react-router-dom";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { CATEGORIAS } from "../data/items";

export default function Gateway() {
  useDocumentMeta({
    title: "Casa Banega — Guía personal de quiet luxury",
    description:
      "Experiencias, gastronomía y perfumería verificadas, sin relatos inventados.",
  });

  const experiencias = CATEGORIAS.experiencias;
  const gastronomia = CATEGORIAS.gastronomia;
  const perfumes = CATEGORIAS.perfumes;

  return (
    <>
      <section className="mosaico-wrap mosaico-primera">
        <div className="mosaico mosaico-grande">
          <Link className="tile tile-cita" to="/filosofia">
            <img className="tile-cita-img" src="/3-sculpture.jpeg" alt="" />
            <div className="tile-cita-content">
              <p className="card-cat">Filosofía</p>
              <p className="tile-cita-quote">“Quien sabe que tiene suficiente, es rico.”</p>
              <p className="tile-cita-autor">— Lao-Tsé, Tao Te Ching</p>
              <span className="ver-mas-inline">Explorar filosofía</span>
            </div>
          </Link>

          <Link className="tile tile-foto" to={`/${gastronomia.slug}`}>
            <img className="tile-foto-img" src={gastronomia.imagenPortada} alt="" />
            <div className="tile-foto-content">
              <p className="card-cat">{gastronomia.eyebrow}</p>
              <h3>{gastronomia.nombre}</h3>
              <span className="ver-mas-inline" style={{ color: "#FFFFFF" }}>
                Explorar {gastronomia.nombre.toLowerCase()}
              </span>
            </div>
          </Link>

          <Link className="tile tile-foto" to={`/${perfumes.slug}`}>
            <img className="tile-foto-img" src={perfumes.imagenPortada} alt="" />
            <div className="tile-foto-content">
              <p className="card-cat">{perfumes.eyebrow}</p>
              <h3>{perfumes.nombre}</h3>
              <span className="ver-mas-inline" style={{ color: "#FFFFFF" }}>
                Explorar {perfumes.nombre.toLowerCase()}
              </span>
            </div>
          </Link>

          <Link className="tile tile-foto" to={`/${experiencias.slug}`}>
            <img className="tile-foto-img" src={experiencias.imagenPortada} alt="" />
            <div className="tile-foto-content">
              <p className="card-cat">{experiencias.eyebrow}</p>
              <h3>{experiencias.nombre}</h3>
              <span className="ver-mas-inline" style={{ color: "#FFFFFF" }}>
                Explorar {experiencias.nombre.toLowerCase()}
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="mosaico-wrap">
        <div className="tile tile-oscura">
          <img className="tile-oscura-img" src="/Bottle-Mediterraneo.png" alt="" />
          <div className="tile-oscura-content">
            <p className="eyebrow">Proyecto hermano</p>
            <h2 className="tile-titulo-grande">Online Boutique</h2>
            <p className="tile-apoyo tile-apoyo-oscura">
              Lucas Banega, nuestra casa de moda masculina — mismo criterio, otro rubro. Salís
              de Casa Banega a un sitio propio y distinto.
            </p>
            <a
              className="btn-accent"
              href="https://lucasbanega.com"
              target="_blank"
              rel="noopener"
            >
              Visitar la boutique ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
