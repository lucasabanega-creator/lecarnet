import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORIAS, OBJETOS } from "../data/items";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

function CardMedia({ item }) {
  const [error, setError] = useState(false);
  const esProducto = item.estiloImagen === "producto";
  const mostrarImagen = item.imagen && !error;

  if (esProducto) {
    return (
      <div className="card-media-cuadro" style={{ background: item.tono }}>
        {mostrarImagen && (
          <img
            src={item.imagen}
            alt={item.nombre}
            loading="lazy"
            onError={() => setError(true)}
          />
        )}
      </div>
    );
  }

  if (mostrarImagen) {
    return (
      <img
        className="card-media-foto"
        src={item.imagen}
        alt={item.nombre}
        loading="lazy"
        onError={() => setError(true)}
      />
    );
  }
  return <div className="card-media-tono" style={{ background: item.tono }} />;
}

export default function CategoryPage({ catSlug }) {
  const cat = CATEGORIAS[catSlug];
  const todos = OBJETOS.filter((o) => o.cat === catSlug);

  useDocumentMeta({
    title: `${cat.nombre} — Casa Banega`,
    description: cat.intro,
    image: cat.imagenPortada,
  });

  const tipos = useMemo(
    () => [...new Set(todos.map((o) => o.tipo).filter(Boolean))],
    [todos]
  );

  const [query, setQuery] = useState("");
  const [tipoActivo, setTipoActivo] = useState(null);

  const items = todos.filter((o) => {
    const coincideTexto =
      !query ||
      o.nombre.toLowerCase().includes(query.toLowerCase()) ||
      o.lugar.toLowerCase().includes(query.toLowerCase());
    const coincideTipo = !tipoActivo || o.tipo === tipoActivo;
    return coincideTexto && coincideTipo;
  });

  return (
    <>
      <section className="page-hero centrado">
        <p className="eyebrow">{cat.eyebrow}</p>
        <h1 className="headline-principal">{cat.nombre}</h1>
        <p className="lead" style={{ maxWidth: 620, margin: "0 auto" }}>{cat.intro}</p>
      </section>

      {todos.length === 0 ? (
        <section className="estado-vacio centrado">
          <p className="eyebrow">Próximamente</p>
          <p className="lead" style={{ maxWidth: 460, margin: "0 auto" }}>
            Todavía no publicamos ningún lugar verificado en esta categoría. Preferimos no
            mostrar nada antes que mostrar algo sin confirmar.
          </p>
        </section>
      ) : (
        <section>
          {todos.length > 1 && (
            <div className="filtros">
              <input
                className="filtro-buscar"
                type="text"
                placeholder={`Buscar en ${cat.nombre.toLowerCase()}...`}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {tipos.length > 1 && (
                <div className="filtro-tags">
                  <button
                    className={"filtro-tag" + (!tipoActivo ? " activo" : "")}
                    onClick={() => setTipoActivo(null)}
                  >
                    Todos
                  </button>
                  {tipos.map((t) => (
                    <button
                      key={t}
                      className={"filtro-tag" + (tipoActivo === t ? " activo" : "")}
                      onClick={() => setTipoActivo(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {items.length === 0 ? (
            <p className="filtro-sin-resultados">No hay resultados para esa búsqueda.</p>
          ) : (
            <div className="grid-cards grid-cards-uniforme">
              {items.map((obj) => (
                <Link
                  key={obj.slug}
                  to={`/${cat.slug}/${obj.slug}`}
                  className={"card-chica" + (obj.estiloImagen === "producto" ? " producto" : "")}
                >
                  <CardMedia item={obj} />
                  <div className="card-chica-content">
                    <p className="card-cat">{obj.lugar}</p>
                    <h3>{obj.nombre}</h3>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      )}
    </>
  );
}
