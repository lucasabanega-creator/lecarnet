import React, { useState, useEffect } from "react";
import "./casa-banega.css";

const OBJETOS = [
  { cat: "Moda", nombre: "Loro Piana", desc: "Sobre el tejido que no necesita logo para decir lo que cuesta.", nota: "No hay logo visible en la prenda. Eso fue lo primero que entendí sobre el lujo silencioso: cuando algo cuesta lo que cuesta esta chaqueta, no necesita decírtelo. El tejido habla solo, y solo lo nota quien ya sabe reconocerlo.", tono: "#E4DED0" },
  { cat: "Hospitalidad", nombre: "Palacio Duhau", desc: "Un palacio de 1932 y el jardín interno que la ciudad no ve.", nota: "Volví tres veces al mismo jardín interno, el que no se ve desde la calle. Ahí entendí que el verdadero lujo urbano no es el mármol del lobby — es el silencio que un edificio logra construir en medio de una avenida.", tono: "#DED2BE" },
  { cat: "Fragancias", nombre: "Acqua di Parma", desc: "Colonia, no perfume — y la diferencia lo dice todo.", nota: "Colonia, no perfume — la palabra ya dice algo. Es un aroma que no busca ser recordado a la distancia, sino reconocido de cerca. Esa diferencia resume todo lo que me interesa del quiet luxury.", tono: "#E6DFCF" },
  { cat: "Hospitalidad", nombre: "Casa Cavia", desc: "Farmacia, restaurante y jardín en una sola casona de Palermo.", nota: "Entrás por una farmacia y terminás en un jardín. Nadie te explica el recorrido — se supone que lo vas a descubrir solo. Ese gesto, el de no facilitarte todo, es en sí mismo una forma de respeto.", tono: "#DAD0BC" },
  { cat: "Moda", nombre: "Hermès", desc: "Semanas de trabajo artesanal en un solo pañuelo.", nota: "Un pañuelo que tardaron semanas en producir, cosido por una sola persona de principio a fin. Lo que compro ahí no es tela — es tiempo humano concentrado en un objeto que va a durar más que yo.", tono: "#E2DBCC" },
  { cat: "Hospitalidad", nombre: "Fasano Las Piedras", desc: "Sin televisión en las habitaciones, y con razón.", nota: "No hay televisión en las habitaciones. La primera noche lo sentí como una carencia. Para la segunda, entendí que era, de nuevo, diseño: te obligan a mirar el paisaje en vez de una pantalla.", tono: "#E7E0D0" },
  { cat: "Fragancias", nombre: "Santa Maria Novella", desc: "La misma fórmula desde el siglo XVI, sin necesidad de cambiar.", nota: "La misma fórmula desde el siglo XVI. No hay reformulación cada temporada, no hay campaña nueva cada año. El lujo silencioso, a veces, es simplemente negarse a cambiar algo que ya funciona.", tono: "#DFD6C3" },
  { cat: "Moda", nombre: "Brunello Cucinelli", desc: "Una arruga deliberada como forma de diseño.", nota: "Una camisa de lino sin planchar a propósito. El arrugado es parte del diseño, no un descuido. Me tomó un tiempo entender que esa imperfección deliberada es, quizás, la forma más difícil de lujo.", tono: "#E4DAC5" },
];

export default function CasaBanega() {
  const [scrolled, setScrolled] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setSelected(null); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const [destacado, ...resto] = OBJETOS;

  return (
    <div className="cb-root">
      <header className={scrolled ? "solido" : ""}>
        <div className="header-inner">
          <span className="wordmark">Casa Banega</span>
          <nav>
            <a className="navlink" href="#coleccion">Colección</a>
            <a className="navlink" href="#sobre">Sobre</a>
            <a className="btn-gold" href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <div className="hero-video">
        <video autoPlay muted loop playsInline>
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-content">
          <h1 className="titulo-hero">Casa Banega</h1>
          <p className="subtitulo-hero">El lujo que no necesita anunciarse</p>
        </div>
      </div>

      <section id="sobre" className="centrado">
        <p className="eyebrow">Sobre Casa Banega</p>
        <h2 className="headline-gold">CASA BANEGA</h2>
        <p className="sub-tracked">Diario personal de quiet luxury</p>
        <p className="lead">
          Casa Banega documenta, desde una mirada personal, las casas de moda, los hoteles y los
          objetos que entendieron que el lujo verdadero no necesita anunciarse.
        </p>
        <p className="lead">
          Cada pieza de esta colección responde a un mismo criterio: la discreción como la forma
          más alta de elegancia.
        </p>
        <p className="lead">
          No es un directorio ni una guía exhaustiva — es una selección curada, pensada para
          quienes ya comparten esta sensibilidad.
        </p>
      </section>

      <section id="coleccion">
        <div className="section-head-row">
          <div>
            <p className="eyebrow" style={{ marginBottom: 6 }}>Colección</p>
            <h2>Piezas curadas</h2>
          </div>
        </div>

        <div
          className="card-grande"
          style={{ background: destacado.tono }}
          onClick={() => setSelected(destacado)}
        >
          <div className="card-grande-content">
            <p className="card-cat">{destacado.cat}</p>
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
                <p className="card-cat">{obj.cat}</p>
                <h3>{obj.nombre}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contacto">
        <div className="inner">
          <p className="eyebrow">Para marcas y colaboraciones</p>
          <h2>Trabajemos juntos</h2>
          <p>
            Abierto a colaboraciones editoriales, contenido de marca y experiencias curadas con
            casas que compartan esta misma sensibilidad.
          </p>
          <a
            className="btn-gold"
            href="mailto:hola@casabanega.com"
            style={{ borderColor: "var(--gold-light)", color: "#FDFCF9" }}
          >
            Escribinos
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div className="footer-col">
            <p className="footer-wordmark">Casa Banega</p>
            <p className="footer-tagline">El lujo que no necesita anunciarse.</p>
          </div>
          <div className="footer-col">
            <h4>Explorar</h4>
            <a href="#coleccion">Colección</a>
            <a href="#sobre">Sobre</a>
            <a href="#contacto">Contacto</a>
          </div>
          <div className="footer-col">
            <h4>Contacto</h4>
            <a href="mailto:hola@casabanega.com">hola@casabanega.com</a>
            <a href="https://instagram.com/casabanega">@casabanega</a>
          </div>
        </div>
        <div className="footer-bottom">© 2026 Casa Banega — Diario personal de quiet luxury</div>
      </footer>

      <div className={"overlay" + (selected ? " open" : "")} onClick={(e) => { if (e.target === e.currentTarget) setSelected(null); }}>
        <div className="panel">
          <button className="cerrar" onClick={() => setSelected(null)}>Cerrar ×</button>
          {selected && (
            <>
              <div className="panel-swatch" style={{ background: selected.tono }} />
              <p className="panel-cat">{selected.cat}</p>
              <h2 className="panel-titulo">{selected.nombre}</h2>
              <p className="panel-nota">{selected.nota}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
