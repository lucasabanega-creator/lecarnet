export default function ItemPanel({ item, onClose }) {
  return (
    <div
      className={"overlay" + (item ? " open" : "")}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="panel">
        <button className="cerrar" onClick={onClose}>Cerrar ×</button>
        {item && (
          <>
            <div className="panel-swatch" style={{ background: item.tono }} />
            <p className="panel-cat">{item.lugar}</p>
            <h2 className="panel-titulo">{item.nombre}</h2>
            <p className="panel-nota">{item.nota}</p>
          </>
        )}
      </div>
    </div>
  );
}
