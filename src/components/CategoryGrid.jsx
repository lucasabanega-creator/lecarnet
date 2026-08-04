import { useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORIAS, destacadoPorCategoria } from "../data/items";
import CategoryIcon from "./CategoryIcon";

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
        <CategoryIcon slug={cat.slug} className="cat-card-icono" />
        <p className="card-cat">{item ? cat.eyebrow : "Próximamente"}</p>
        <h3>{cat.nombre}</h3>
        <p className="card-desc">{cat.intro}</p>
        {item ? (
          <span className="ver-mas">Explorar {cat.nombre.toLowerCase()}</span>
        ) : (
          <span className="sin-cta">Fichas en curación — próximamente</span>
        )}
      </div>
    </Link>
  );
}

export default function CategoryGrid() {
  return (
    <div className="cat-grid">
      {Object.values(CATEGORIAS).map((cat) => (
        <CatCard key={cat.slug} cat={cat} item={destacadoPorCategoria(cat.slug)} />
      ))}
    </div>
  );
}
