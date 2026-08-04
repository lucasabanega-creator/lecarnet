import { Link } from "react-router-dom";
import { CATEGORIAS, OBJETOS } from "../data/items";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import CategoryGrid from "../components/CategoryGrid";

export default function Home() {
  useDocumentMeta({
    title: "Casa Banega — Guía personal de quiet luxury",
    description:
      "Experiencias, gastronomía y perfumería verificadas, sin relatos inventados.",
  });

  const recientes = [...OBJETOS]
    .filter((o) => o.verificadoISO)
    .sort((a, b) => b.verificadoISO.localeCompare(a.verificadoISO))
    .slice(0, 3);

  return (
    <>
      <div className="hero-video" data-tema="oscuro">
        <video autoPlay muted loop playsInline>
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-content">
          <h1 className="titulo-hero">
            Casa Banega
            <span className="titulo-hero-linea" />
          </h1>
          <p className="subtitulo-hero">Guía de experiencias, gastronomía y perfumes</p>
        </div>
      </div>

      <section id="sobre" className="centrado">
        <p className="eyebrow">Sobre Casa Banega</p>
        <h2 className="headline-principal">CASA BANEGA</h2>
        <p className="sub-tracked">Guía personal de quiet luxury</p>
        <p className="lead">
          Casa Banega reúne, desde una mirada personal, los hoteles, la gastronomía y las casas
          de perfumería que entendieron que el lujo verdadero no necesita anunciarse.
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

        <CategoryGrid />
      </section>

      {recientes.length > 0 && (
        <section id="verificaciones">
          <div className="section-head-row">
            <div>
              <p className="eyebrow" style={{ marginBottom: 6 }}>Actividad de la guía</p>
              <h2>Últimas verificaciones</h2>
            </div>
          </div>

          <ul className="lista-verificaciones">
            {recientes.map((item) => (
              <li key={item.slug}>
                <Link to={`/${item.cat}/${item.slug}`} className="verificacion-fila">
                  <span className="verificacion-fecha">{item.verificado}</span>
                  <span className="verificacion-nombre">{item.nombre}</span>
                  <span className="verificacion-cat">{CATEGORIAS[item.cat].nombre}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

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
