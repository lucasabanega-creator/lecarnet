import { Link } from "react-router-dom";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { CATEGORIAS, OBJETOS } from "../data/items";

export default function Sobre() {
  useDocumentMeta({
    title: "Sobre — Casa Banega",
    description:
      "Quién escribe Casa Banega y cómo se verifica cada ficha de la guía.",
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
            Casa Banega no es una redacción con staff — es un criterio curado por una sola
            persona, aplicado con el mismo rigor a un hotel de cinco estrellas que a un
            frasco de perfume.
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
            <dd>Experiencias, gastronomía y perfumes de quiet luxury</dd>
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
        <h2 className="item-subtitulo">Cómo se verifica cada ficha</h2>
        <p className="item-texto">
          Cada lugar u objeto publicado en esta guía pasa por el mismo proceso: se investiga
          en fuentes primarias y secundarias verificables — sitios oficiales, prensa
          especializada, archivos históricos —, esa fuente se cita al pie de la nota, y la
          ficha queda firmada con la fecha de la última revisión.
        </p>
        <p className="item-texto">
          Si un dato no se puede confirmar, no se publica. Esa es la única promesa real
          detrás de la palabra "verificado" que aparece en cada ficha de Casa Banega.
        </p>
      </div>

      {OBJETOS.some((item) => item.porQueElegido) && (
        <div className="sobre-criterio">
          <h2 className="item-subtitulo">Criterio de selección</h2>
          <p className="item-texto" style={{ marginBottom: 24 }}>
            No hay una fórmula fija — pero cada ficha publicada tiene una razón concreta
            detrás, no solo "está de moda" o "es lindo". Dos ejemplos reales:
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
          <h2 className="item-subtitulo">Actividad reciente</h2>
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
