import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CATEGORIAS, OBJETOS, itemPorSlug } from "../data/items";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { absoluteUrl, SITE } from "../site";
import NotFound from "./NotFound";
import VerificationBadge from "../components/VerificationBadge";

function construirSchema(item, cat) {
  return {
    "@context":"https://schema.org", "@type":"Article", headline:item.nombre,
    description:item.desc,image:absoluteUrl(item.imagenBanner || item.imagen || SITE.image),articleSection:cat.nombre,
    author:{"@type":"Person",name:item.curador,url:absoluteUrl("/sobre")},
    publisher:{"@type":"Organization",name:"Casa Banega",url:absoluteUrl("/")},
    dateModified:item.verificadoISO,datePublished:item.publicadoISO || item.verificadoISO,
    mainEntityOfPage:absoluteUrl(`/${item.cat}/${item.slug}/`),
    citation:item.fuente.map(f=>typeof f === "string" ? f : f.url),
    about:item.piramide ? {"@type":"Product",name:item.nombre,brand:{"@type":"Brand",name:item.marca},image:absoluteUrl(item.imagen)} : {"@type":item.schemaType || "Place",name:item.nombre,...(item.direccion ? {address:{"@type":"PostalAddress",streetAddress:item.direccion,addressLocality:"Buenos Aires",addressCountry:"AR"}} : {})}
  };
}

function FotoGaleria({ src, alt }) {
  const [error, setError] = useState(false);
  if (error) return null;
  return <img src={src} alt={alt} width="600" height="800" loading="lazy" onError={() => setError(true)} />;
}

export default function ItemPage() {
  const { cat: catSlug, slug } = useParams();
  const cat = CATEGORIAS[catSlug];
  const item = cat ? itemPorSlug(catSlug, slug) : null;
  const [imgError, setImgError] = useState(false);
  useEffect(() => setImgError(false), [catSlug, slug]);

  useDocumentMeta(
    item
      ? {
          title: `${item.nombre} — Casa Banega`,
          description: item.desc,
          image: item.imagenBanner || item.imagen,
          type: "article",
          structuredData: construirSchema(item, cat),
        }
      : { title: "No encontrado — Casa Banega", noindex: true }
  );

  if (!cat || !item) return <NotFound />;

  const relacionados = [...OBJETOS]
    .filter((o) => o.slug !== item.slug)
    .sort((a, b) => (a.cat === item.cat ? -1 : 0) - (b.cat === item.cat ? -1 : 0))
    .slice(0, 3);

  return (
    <div data-cat={cat.slug}>
      <section className="item-page">
        <Link to="/selecciones" className="volver">← Selecciones</Link>

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
          {(item.enlaceOficial || item.enlaceMenu || item.enlaceReserva) && (
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
              {item.enlaceReserva && <a className="btn-externo" href={item.enlaceReserva} target="_blank" rel="noreferrer">Consultar reservas ↗</a>}
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

        <figure
          className={
            "item-media" +
            (!item.imagenBanner && item.estiloImagen === "producto" ? " producto" : "")
          }
        >
          {(item.imagenBanner || item.imagen) && !imgError && (
            <img
              src={item.imagenBanner || item.imagen}
              alt={item.imagenAlt || item.nombre}
              width="1200" height="800"
              onError={() => setImgError(true)}
            />
          )}
          {item.creditoImagen && <figcaption className="image-credit">Fuente de imagen: <a href={item.creditoImagen.url} target="_blank" rel="noreferrer">{item.creditoImagen.nombre} ↗</a></figcaption>}
        </figure>

        <div className="item-cuerpo research-note"><p>{item.metodo || "Selección documental. Esta ficha no implica una visita ni una prueba personal."}</p>{item.mapa && <a className="editorial-link" href={item.mapa} target="_blank" rel="noreferrer">Ver ubicación en el mapa ↗</a>}</div>
        {item.historia && (
          <div className="item-cuerpo">
            <h2 className="item-subtitulo">Historia y contexto</h2>
            <p className="item-texto">{item.historia}</p>
          </div>
        )}

        {item.porQueElegido && (
          <div className="item-cuerpo">
            <h2 className="item-subtitulo">Criterio de selección</h2>
            <p className="item-texto">{item.porQueElegido}</p>
          </div>
        )}

        {item.paraVisitar && <div className="item-cuerpo"><h2 className="item-subtitulo">Antes de ir</h2><p className="item-texto">{item.paraVisitar}</p></div>}
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
            <h2 className="item-subtitulo">Otra selección de la casa</h2>
            <div className="item-relacionados">
              {relacionados.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/${rel.cat}/${rel.slug}`}
                  className="item-relacionado"

                >
                  {rel.imagen && <img src={rel.imagen} alt="" loading="lazy" width="600" height="800" />}
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
