import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CATEGORIAS, itemPorSlug } from "../data/items";

export default function ItemPage() {
  const { cat: catSlug, slug } = useParams();
  const cat = CATEGORIAS[catSlug];
  const item = cat ? itemPorSlug(catSlug, slug) : null;
  const [imgError, setImgError] = useState(false);

  if (!cat || !item) {
    return (
      <section className="page-hero centrado">
        <p className="eyebrow">No encontrado</p>
        <h1 className="headline-principal">Este lugar no está en la guía</h1>
        <Link to="/" className="ver-mas-inline">Volver al inicio</Link>
      </section>
    );
  }

  return (
    <>
      <section className="item-page">
        <Link to={`/${cat.slug}`} className="volver">← {cat.nombre}</Link>

        <div
          className={
            "item-media" +
            (!item.imagenBanner && item.estiloImagen === "producto" ? " producto" : "")
          }
          style={{ background: item.tono }}
        >
          {(item.imagenBanner || item.imagen) && !imgError && (
            <img
              src={item.imagenBanner || item.imagen}
              alt={item.nombre}
              onError={() => setImgError(true)}
            />
          )}
        </div>

        <div className="item-encabezado">
          <p className="eyebrow">{item.lugar}{item.tipo ? ` — ${item.tipo}` : ""}</p>
          <h1 className="headline-principal">{item.nombre}</h1>
          <p className="lead item-desc">{item.desc}</p>
          {item.enlaceOficial && (
            <a
              className="btn-externo"
              href={item.enlaceOficial}
              target="_blank"
              rel="noreferrer"
            >
              Ver en el sitio oficial ↗
            </a>
          )}
        </div>

        {item.historia && (
          <div className="item-cuerpo">
            <h2 className="item-subtitulo">Historia</h2>
            <p className="item-texto">{item.historia}</p>
          </div>
        )}

        {item.piramide && (
          <div className="item-cuerpo">
            <h2 className="item-subtitulo">Pirámide olfativa</h2>
            <div className="piramide">
              <div className="piramide-nivel">
                <p className="piramide-label">Salida</p>
                <p className="piramide-valor">{item.piramide.salida}</p>
              </div>
              <div className="piramide-nivel">
                <p className="piramide-label">Corazón</p>
                <p className="piramide-valor">{item.piramide.corazon}</p>
              </div>
              <div className="piramide-nivel">
                <p className="piramide-label">Fondo</p>
                <p className="piramide-valor">{item.piramide.fondo}</p>
              </div>
            </div>
          </div>
        )}

        {item.fuente && item.fuente.length > 0 && (
          <p className="item-fuente">Fuentes: {item.fuente.join(" · ")}</p>
        )}
      </section>
    </>
  );
}
