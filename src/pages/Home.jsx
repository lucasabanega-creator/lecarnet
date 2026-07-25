import { Link } from "react-router-dom";
import { CATEGORIAS, destacadoPorCategoria } from "../data/items";

export default function Home() {
  return (
    <>
      <div className="hero-video">
        <video autoPlay muted loop playsInline>
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-content">
          <h1 className="titulo-hero">Casa Banega</h1>
          <p className="subtitulo-hero">Guía de experiencias, cafés y perfumes</p>
        </div>
      </div>

      <section id="sobre" className="centrado">
        <p className="eyebrow">Sobre Casa Banega</p>
        <h2 className="headline-principal">CASA BANEGA</h2>
        <p className="sub-tracked">Guía personal de quiet luxury</p>
        <p className="lead">
          Casa Banega reúne, desde una mirada personal, los hoteles, los cafés y las casas de
          perfumería que entendieron que el lujo verdadero no necesita anunciarse.
        </p>
        <p className="lead">
          Cada lugar de esta guía responde a un mismo criterio: la discreción como la forma
          más alta de elegancia.
        </p>
        <p className="lead">
          No es un directorio exhaustivo — es una selección curada, pensada para quienes ya
          comparten esta sensibilidad.
        </p>
      </section>

      <section id="categorias">
        <div className="section-head-row">
          <div>
            <p className="eyebrow" style={{ marginBottom: 6 }}>La guía</p>
            <h2>Tres formas de buscar lo mismo</h2>
          </div>
        </div>

        <div className="cat-grid">
          {Object.values(CATEGORIAS).map((cat) => {
            const item = destacadoPorCategoria(cat.slug);
            return (
              <Link
                to={`/${cat.slug}`}
                className="cat-card"
                key={cat.slug}
                style={{ background: item.tono }}
              >
                <div className="cat-card-content">
                  <p className="card-cat">{cat.eyebrow}</p>
                  <h3>{cat.nombre}</h3>
                  <p className="card-desc">{cat.intro}</p>
                  <span className="ver-mas">Explorar {cat.nombre.toLowerCase()}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section id="contacto">
        <div className="inner">
          <p className="eyebrow">Para marcas y colaboraciones</p>
          <h2>Trabajemos juntos</h2>
          <p>
            Abierto a colaboraciones editoriales, contenido de marca y experiencias curadas con
            lugares que compartan esta misma sensibilidad.
          </p>
          <a className="btn-accent btn-accent-oscuro" href="mailto:hola@casabanega.com">
            Escribinos
          </a>
        </div>
      </section>
    </>
  );
}
