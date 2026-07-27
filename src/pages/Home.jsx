import { useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORIAS, destacadoPorCategoria } from "../data/items";

function CatCard({ cat, item }) {
  const [imgError, setImgError] = useState(false);
  const mostrarImagen = cat.imagenPortada && !imgError;

  return (
    <Link
      to={`/${cat.slug}`}
      className="cat-card"
      style={{ background: item ? item.tono : "#F4F4F4" }}
    >
      {mostrarImagen && (
        <img
          src={cat.imagenPortada}
          alt=""
          className="cat-card-img"
          onError={() => setImgError(true)}
        />
      )}
      <div className="cat-card-content">
        <p className="card-cat">{item ? item.lugar : "Próximamente"}</p>
        <h3>{cat.nombre}</h3>
        <p className="card-desc">{cat.intro}</p>
        <span className="ver-mas">
          {item ? `Explorar ${cat.nombre.toLowerCase()}` : "Ver categoría"}
        </span>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <div className="hero-video">
        <video autoPlay muted loop playsInline>
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-content">
          <h1 className="titulo-hero">
            Casa Banega
            <span className="titulo-hero-linea" />
          </h1>
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
          Cada lugar de esta guía se publica con su historia verificada. Preferimos mostrar
          poco y confirmado antes que mucho e inventado.
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
          {Object.values(CATEGORIAS).map((cat) => (
            <CatCard key={cat.slug} cat={cat} item={destacadoPorCategoria(cat.slug)} />
          ))}
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
