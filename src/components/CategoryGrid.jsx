import { useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORIAS, destacadoPorCategoria } from "../data/items";
import CategoryIcon from "./CategoryIcon";

function CatCard({ cat, item }) {
  const [imgError, setImgError] = useState(false);
  const mostrarImagen = cat.imagenPortada && !imgError;

  return (
    <Link to={`/${cat.slug}`} className="cat-card" style={{ background: item.tono }}>
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
        <p className="card-cat">{cat.eyebrow}</p>
        <h3>{cat.nombre}</h3>
        <p className="card-desc">{cat.intro}</p>
        <span className="ver-mas">Explorar {cat.nombre.toLowerCase()}</span>
      </div>
    </Link>
  );
}

export default function CategoryGrid() {
  const categorias = Object.values(CATEGORIAS)
    .map((cat) => ({ cat, item: destacadoPorCategoria(cat.slug) }))
    .filter(({ item }) => item);

  return (
    <div className="cat-grid">
      {categorias.map(({ cat, item }) => (
        <CatCard key={cat.slug} cat={cat} item={item} />
      ))}
    </div>
  );
}
