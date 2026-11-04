import { Link } from "react-router-dom";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { CATEGORIAS, OBJETOS } from "../data/items";

export default function Sobre() {
  useDocumentMeta({
    title: "Sobre — Casa Banega",
    description:
      "La mirada de Lucas Banega sobre cultura del lujo, objetos y decisiones de marca.",
  });

  const recientes = [...OBJETOS]
    .filter((o) => o.verificadoISO)
    .sort((a, b) => b.verificadoISO.localeCompare(a.verificadoISO))
    .slice(0, 5);

  return (
    <section className="sobre-page">
      <p className="eyebrow">CASA BANEGA</p><h1 className="headline-principal">La casa</h1>
      <div className="sobre-grid">
        <div className="sobre-cita">
          <p className="sobre-cita-texto">
            Casa Banega es una publicación de Lucas Banega sobre cultura del lujo y las decisiones que construyen valor. Objetos, espacios y experiencias son el punto de partida.
          </p>
        </div>

        <dl className="sobre-ficha">
          <div className="sobre-ficha-fila">
            <dt>Curador</dt>
            <dd>Lucas Banega</dd>
          </div>
          <div className="sobre-ficha-fila">
            <dt>Base</dt>
            <dd>Buenos Aires, Argentina</dd>
          </div>
          <div className="sobre-ficha-fila">
            <dt>Enfoque</dt>
            <dd>Cultura del lujo, estrategia de marca y experiencia</dd>
          </div>
          <div className="sobre-ficha-fila">
            <dt>Contacto</dt>
            <dd>
              <a href="mailto:hola@casabanega.com">hola@casabanega.com</a>
              <br />
              <a href="https://instagram.com/casabanega" target="_blank" rel="noreferrer">
                @casabanega
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <div className="sobre-metodo">
        <h2 className="item-subtitulo">Cómo se trabaja cada publicación</h2>
        <p className="item-texto">
          Los análisis parten de fuentes identificables: documentos de las marcas, reportes y archivos. Los enlaces acompañan cada publicación. Las selecciones incluyen una razón concreta de elección y una fecha de revisión documental.
        </p>
        <p className="item-texto">
          Los hechos documentados se distinguen de su interpretación. Una ficha investigada no implica una visita ni una prueba personal. Cuando exista experiencia directa, se indicará expresamente.
        </p>
      </div>

      {OBJETOS.some((item) => item.porQueElegido) && (
        <div className="sobre-criterio">
          <h2 className="item-subtitulo">Criterio de selección</h2>
          <p className="item-texto" style={{ marginBottom: 24 }}>
            La selección observa la relación entre historia, producto y experiencia. Cada entrada explica qué decisión merece atención y con qué información se sostiene.
          </p>
          <div className="sobre-ejemplos">
            {OBJETOS.filter((item) => item.porQueElegido).map((item) => (
              <Link key={item.slug} to={`/${item.cat}/${item.slug}`} className="sobre-ejemplo">
                <p className="card-cat">{CATEGORIAS[item.cat].nombre}</p>
                <h3 className="sobre-ejemplo-nombre">{item.nombre}</h3>
                <p className="item-texto">{item.porQueElegido}</p>
                <span className="ver-mas-inline">Ver la ficha</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {recientes.length > 0 && (
        <div className="sobre-criterio">
          <h2 className="item-subtitulo">Revisiones del archivo</h2>
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
        </div>
      )}
    </section>
  );
}
