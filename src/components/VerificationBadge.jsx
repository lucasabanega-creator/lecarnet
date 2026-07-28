import { Link } from "react-router-dom";
import Monogram from "./Monogram";

export default function VerificationBadge({ curador, verificado, fuentes }) {
  if (!curador && !(fuentes && fuentes.length)) return null;

  return (
    <div className="verificacion-badge">
      <Monogram size={42} className="verificacion-sello" />
      <div className="verificacion-texto">
        {curador && (
          <p className="verificacion-linea">
            <span className="verificacion-label">Verificado</span> por{" "}
            <Link to="/sobre" className="verificacion-curador">{curador}</Link>
            {verificado ? ` · ${verificado}` : ""}
          </p>
        )}
        {fuentes && fuentes.length > 0 && (
          <p className="verificacion-fuentes">Fuentes: {fuentes.join(" · ")}</p>
        )}
      </div>
    </div>
  );
}
