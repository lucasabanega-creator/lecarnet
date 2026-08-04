import { Link } from "react-router-dom";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { NOTAS } from "../data/notas";

export default function Notas() {
  useDocumentMeta({
    title: "Notas — Casa Banega",
    description: "Ensayos cortos sobre quiet luxury, criterio y curaduría.",
  });

  return (
    <section className="page-hero centrado">
      <p className="eyebrow">Casa Banega</p>
      <h1 className="headline-principal">Notas</h1>
      <span className="titulo-divisor" />

      {NOTAS.length === 0 ? (
        <p className="lead" style={{ maxWidth: 460, margin: "0 auto" }}>
          Todavía no publicamos ningún ensayo verificado en esta sección. Preferimos no
          mostrar nada antes que mostrar algo sin trabajar de verdad.
        </p>
      ) : (
        <div className="lista-verificaciones" style={{ maxWidth: 640, margin: "40px auto 0", textAlign: "left" }}>
          {NOTAS.map((nota) => (
            <Link key={nota.slug} to={`/notas/${nota.slug}`} className="verificacion-fila">
              <span className="verificacion-fecha">{nota.fecha}</span>
              <span className="verificacion-nombre">{nota.titulo}</span>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
