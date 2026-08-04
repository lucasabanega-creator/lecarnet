import { Link } from "react-router-dom";
import CategoryGrid from "../components/CategoryGrid";
import Home from "./Home";

export default function Gateway() {
  return (
    <>
      <section className="gateway-splash">
        <blockquote className="gateway-cita">
          <p>“Quien sabe que tiene suficiente, es rico.”</p>
          <cite>— Lao-Tsé, Tao Te Ching</cite>
        </blockquote>

        <div className="gateway-accesos">
          <a
            className="gateway-bloque"
            href="https://lucasbanega.com"
            target="_blank"
            rel="noopener"
          >
            <h2 className="gateway-bloque-titulo">Online Boutique</h2>
            <p className="gateway-bloque-apoyo">
              Nuestra casa de moda masculina, sprezzatura y criterio propio.
            </p>
            <span className="ver-mas">Visitar la boutique</span>
          </a>

          <Link className="gateway-bloque" to="/filosofia">
            <h2 className="gateway-bloque-titulo">Filosofía</h2>
            <p className="gateway-bloque-apoyo">Por qué verificamos antes de publicar.</p>
            <span className="ver-mas">Explorar filosofía</span>
          </Link>
        </div>
      </section>

      <section className="gateway-categorias">
        <CategoryGrid />
      </section>

      <Home />
    </>
  );
}
