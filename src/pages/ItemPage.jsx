import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CATEGORIAS, OBJETOS, itemPorSlug } from "../data/items";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import VerificationBadge from "../components/VerificationBadge";

function construirSchema(item, cat) {
  const imagen = item.imagenBanner || item.imagen;
  const imagenAbsoluta = imagen ? window.location.origin + imagen : undefined;

  const datosProperty = (item.datosTecnicos || []).map((d) => ({
    "@type": "PropertyValue",
    name: d.label,
    value: d.valor,
  }));

  if (item.piramide) {
    return {
      "@context": "https://schema.org",
      "@type": "Product",
      name: item.nombre,
      description: item.desc,
      image: imagenAbsoluta,
      category: item.tipo,
      brand: item.marca ? { "@type": "Brand", name: item.marca } : undefined,
      additionalProperty: [
        { "@type": "PropertyValue", name: "Nota de salida", value: item.piramide.salida },
        { "@type": "PropertyValue", name: "Nota de corazón", value: item.piramide.corazon },
        { "@type": "PropertyValue", name: "Nota de fondo", value: item.piramide.fondo },
        ...datosProperty,
      ],
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.nombre,
    description: item.desc,
    image: imagenAbsoluta,
    articleSection: cat.nombre,
    author: item.curador ? { "@type": "Person", name: item.curador } : undefined,
    dateModified: item.verificadoISO,
    additionalProperty: datosProperty.length > 0 ? datosProperty : undefined,
  };
}

function FotoGaleria({ src, alt }) {
  const [error, setError] = useState(false);
  if (error) return null;
  return <img src={src} alt={alt} loading="lazy" onError={() => setError(true)} />;
}

export default function ItemPage() {
  const { cat: catSlug, slug } = useParams();
  const cat = CATEGORIAS[catSlug];
  const item = cat ? itemPorSlug(catSlug, slug) : null;
  const [imgError, setImgError] = useState(false);

  useDocumentMeta(
    item
      ? {
          title: `${item.nombre} — Casa Banega`,
          description: item.desc,
          image: item.imagenBanner || item.imagen,
          type: item.piramide ? "product" : "article",
          structuredData: construirSchema(item, cat),
        }
      : { title: "No encontrado — Casa Banega" }
  );

  if (!cat || !item) {
    return (
      <section className="page-hero centrado">
        <p className="eyebrow">No encontrado</p>
        <h1 className="headline-principal">Este lugar no está en la guía</h1>
        <Link to="/" className="ver-mas-inline">Volver al inicio</Link>
      </section>
    );
  }

  const relacionados = [...OBJETOS]
    .filter((o) => o.slug !== item.slug)
    .sort((a, b) => (a.cat === item.cat ? -1 : 0) - (b.cat === item.cat ? -1 : 0))
    .slice(0, 3);

  return (
    <div data-cat={cat.slug}>
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
          <p className="eyebrow">
            {item.lugarVinculo ? (
              <Link
                to={`/${item.lugarVinculo.cat}/${item.lugarVinculo.slug}`}
                className="eyebrow-link"
              >
                {item.lugar}
              </Link>
            ) : (
              item.lugar
            )}
            {item.tipo ? ` — ${item.tipo}` : ""}
          </p>
          <h1 className="headline-principal">{item.nombre}</h1>
          <p className="lead item-desc">{item.desc}</p>
          {(item.enlaceOficial || item.enlaceMenu) && (
            <div className="item-enlaces">
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
              {item.enlaceMenu && (
                <a
                  className="btn-externo"
                  href={item.enlaceMenu}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver el menú ↗
                </a>
              )}
            </div>
          )}
        </div>

        {item.historia && (
          <div className="item-cuerpo">
            <h2 className="item-subtitulo">Historia</h2>
            <p className="item-texto">{item.historia}</p>
          </div>
        )}

        {item.porQueElegido && (
          <div className="item-cuerpo">
            <h2 className="item-subtitulo">Por qué la elegí</h2>
            <p className="item-texto">{item.porQueElegido}</p>
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

        {item.datosTecnicos && item.datosTecnicos.length > 0 && (
          <div className="item-cuerpo">
            <h2 className="item-subtitulo">Ficha</h2>
            <div className="piramide">
              {item.datosTecnicos.map((d) => (
                <div className="piramide-nivel" key={d.label}>
                  <p className="piramide-label">{d.label}</p>
                  <p className="piramide-valor">{d.valor}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {item.galeria && item.galeria.length > 0 && (
          <div className="item-cuerpo">
            <h2 className="item-subtitulo">En imágenes</h2>
            <div className="item-galeria">
              {item.galeria.map((src) => (
                <FotoGaleria key={src} src={src} alt={item.nombre} />
              ))}
            </div>
          </div>
        )}

        <VerificationBadge
          curador={item.curador}
          verificado={item.verificado}
          fuentes={item.fuente}
        />

        {relacionados.length > 0 && (
          <div className="item-cuerpo">
            <h2 className="item-subtitulo">Seguí en la guía</h2>
            <div className="item-relacionados">
              {relacionados.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/${rel.cat}/${rel.slug}`}
                  className="item-relacionado"
                  style={{ background: rel.tono }}
                >
                  {rel.imagen && <img src={rel.imagen} alt="" />}
                  <span className="item-relacionado-content">
                    <span className="card-cat">{CATEGORIAS[rel.cat].nombre}</span>
                    <span className="item-relacionado-nombre">{rel.nombre}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
