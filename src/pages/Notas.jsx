import { Link } from "react-router-dom";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { NOTAS } from "../data/notas";
export default function Notas(){
  useDocumentMeta({title:"Revista — Casa Banega",description:"Análisis de lujo, cultura, espacios y decisiones de marca. Una publicación de Lucas Banega."});
  return <section className="archive-page section-shell"><p className="kicker">Casa Banega</p><h1 className="headline-principal">La revista</h1><p className="archive-intro">Hechos, observaciones y una lectura propia sobre cómo se construye valor.</p><div className="essay-list">{NOTAS.map(n=><article key={n.slug}><p className="kicker">{n.categoria} · <time dateTime={n.fechaISO}>{n.fecha}</time></p><h2><Link to={`/notas/${n.slug}`}>{n.titulo}</Link></h2><p>{n.bajada}</p><Link className="editorial-link" to={`/notas/${n.slug}`}>Leer la nota →</Link></article>)}</div></section>;
}
