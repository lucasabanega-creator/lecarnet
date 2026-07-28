import { useDocumentMeta } from "../hooks/useDocumentMeta";
import Monogram from "../components/Monogram";

export default function Sobre() {
  useDocumentMeta({
    title: "Sobre — Casa Banega",
    description:
      "Quién escribe Casa Banega y cómo se verifica cada ficha de la guía.",
  });

  return (
    <section className="sobre-page">
      <div className="sobre-grid">
        <div className="sobre-cita">
          <Monogram size={48} className="sobre-sello" />
          <p className="sobre-cita-texto">
            Casa Banega no es una redacción con staff — es un criterio curado por una sola
            persona, aplicado con el mismo rigor a un hotel de cinco estrellas que a un
            frasco de perfume.
          </p>
        </div>

        <dl className="sobre-ficha">
          <div className="sobre-ficha-fila">
            <dt>Curador</dt>
            <dd>Lucas Banega</dd>
          </div>
          <div className="sobre-ficha-fila">
            <dt>Base</dt>
            <dd>Buenos Aires, Argentina</dd>
          </div>
          <div className="sobre-ficha-fila">
            <dt>Enfoque</dt>
            <dd>Experiencias, cafés y perfumes de quiet luxury</dd>
          </div>
          <div className="sobre-ficha-fila">
            <dt>Contacto</dt>
            <dd>
              <a href="mailto:hola@casabanega.com">hola@casabanega.com</a>
              <br />
              <a href="https://instagram.com/casabanega" target="_blank" rel="noreferrer">
                @casabanega
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <div className="sobre-metodo">
        <h2 className="item-subtitulo">Cómo se verifica cada ficha</h2>
        <p className="item-texto">
          Cada lugar u objeto publicado en esta guía pasa por el mismo proceso: se investiga
          en fuentes primarias y secundarias verificables — sitios oficiales, prensa
          especializada, archivos históricos —, esa fuente se cita al pie de la nota, y la
          ficha queda firmada con la fecha de la última revisión.
        </p>
        <p className="item-texto">
          Si un dato no se puede confirmar, no se publica. Esa es la única promesa real
          detrás de la palabra "verificado" que aparece en cada ficha de Casa Banega.
        </p>
      </div>
    </section>
  );
}
