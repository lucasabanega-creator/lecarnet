import { useDocumentMeta } from "../hooks/useDocumentMeta";

export default function Filosofia() {
  useDocumentMeta({
    title: "Filosofía — Casa Banega",
    description: "Por qué verificamos antes de publicar cada ficha de la guía.",
  });

  return (
    <section className="filosofia-page centrado">
      <p className="eyebrow">Casa Banega</p>
      <h1 className="headline-principal">Filosofía</h1>
      <span className="titulo-divisor" />

      <div className="filosofia-cuerpo">
        <div className="capitulo">
          <p className="capitulo-titulo">El criterio</p>
          <p className="item-texto">
            Casa Banega no es un ranking ni un catálogo de tendencias. Es un archivo personal de
            lugares, sabores y fragancias que entendieron que el verdadero lujo no necesita
            anunciarse.
          </p>
        </div>

        <div className="capitulo">
          <p className="capitulo-titulo">La verificación</p>
          <p className="item-texto">
            Verificamos antes de publicar. Preferimos una ficha confirmada a diez inventadas,
            porque la confianza del lector vale más que el volumen de contenido. Cada hotel, cada
            café, cada perfume que aparece acá sostiene su historia en el tiempo, no en una
            campaña.
          </p>
        </div>

        <div className="capitulo">
          <p className="capitulo-titulo">La idea de suficiencia</p>
          <blockquote className="filosofia-cita">
            <p>“Quien sabe que tiene suficiente, es rico.”</p>
            <cite>— Lao-Tsé, Tao Te Ching</cite>
          </blockquote>
          <p className="item-texto">
            Esa idea de suficiencia — de no necesitar más de lo que ya es verdadero y bien hecho —
            es el criterio con el que elegimos cada lugar de esta guía.
          </p>
        </div>
      </div>
    </section>
  );
}
