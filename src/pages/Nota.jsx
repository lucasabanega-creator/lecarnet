import { Link, useParams } from "react-router-dom";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { notaPorSlug } from "../data/notas";

export default function Nota() {
  const { slug } = useParams();
  const nota = notaPorSlug(slug);

  useDocumentMeta(
    nota
      ? {
          title: `${nota.titulo} — Casa Banega`,
          description: nota.bajada || nota.titulo,
          type: "article",
          structuredData: {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: nota.titulo,
            description: nota.bajada,
            author: { "@type": "Person", name: "Lucas Banega" },
            datePublished: nota.fechaISO,
          },
        }
      : { title: "No encontrado — Casa Banega" }
  );

  if (!nota) {
    return (
      <section className="page-hero centrado">
        <p className="eyebrow">No encontrado</p>
        <h1 className="headline-principal">Esta nota no está en la guía</h1>
        <Link to="/notas" className="ver-mas-inline">Volver a notas</Link>
      </section>
    );
  }

  return (
    <section className="filosofia-page centrado">
      <Link to="/notas" className="volver">← Notas</Link>
      <p className="eyebrow">{nota.fecha}</p>
      <h1 className="headline-principal">{nota.titulo}</h1>
      <span className="titulo-divisor" />

      <div className="filosofia-cuerpo">
        {nota.cuerpo.map((parrafo, i) => (
          <p className="item-texto" key={i}>{parrafo}</p>
        ))}
      </div>
    </section>
  );
}
