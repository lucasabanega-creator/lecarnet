import { useState, useEffect } from "react";
import { CATEGORIAS, OBJETOS } from "../data/items";
import ItemPanel from "../components/ItemPanel";

export default function CategoryPage({ catSlug }) {
  const cat = CATEGORIAS[catSlug];
  const items = OBJETOS.filter((o) => o.cat === catSlug);
  const [destacado, ...resto] = items;
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setSelected(null); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <section className="page-hero centrado">
        <p className="eyebrow">{cat.eyebrow}</p>
        <h1 className="headline-principal">{cat.nombre}</h1>
        <p className="lead" style={{ maxWidth: 620, margin: "0 auto" }}>{cat.intro}</p>
      </section>

      <section>
        <div
          className="card-grande"
          style={{ background: destacado.tono }}
          onClick={() => setSelected(destacado)}
        >
          <div className="card-grande-content">
            <p className="card-cat">{destacado.lugar}</p>
            <h3>{destacado.nombre}</h3>
            <p className="card-desc">{destacado.desc}</p>
            <span className="ver-mas">Ver más</span>
          </div>
        </div>

        <div className="grid-cards">
          {resto.map((obj) => (
            <div
              key={obj.nombre}
              className="card-chica"
              style={{ background: obj.tono }}
              onClick={() => setSelected(obj)}
            >
              <div className="card-chica-content">
                <p className="card-cat">{obj.lugar}</p>
                <h3>{obj.nombre}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ItemPanel item={selected} onClose={() => setSelected(null)} />
    </>
  );
}
