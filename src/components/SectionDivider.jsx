import Monogram from "./Monogram";

export default function SectionDivider() {
  return (
    <div className="section-divider" aria-hidden="true">
      <span className="section-divider-linea" />
      <Monogram size={30} className="section-divider-sello" />
      <span className="section-divider-linea" />
    </div>
  );
}
