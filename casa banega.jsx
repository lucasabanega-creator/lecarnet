import React, { useEffect, useRef, useState } from "react";

/* ---------- Tokens ---------- */
const C = {
  bg: "#F4F0E9",       // crudo / lino planchado
  bgAlt: "#EAE3D5",    // placeholder tono 1
  bgAlt2: "#E0D8C8",   // placeholder tono 2
  line: "#DAD2C2",     // hairline
  stone: "#8F8778",    // texto secundario
  ink: "#262320",      // texto primario
};

/* ---------- Reveal-on-scroll wrapper ---------- */
function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(18px)",
        transition: `opacity 900ms cubic-bezier(.2,.7,.2,1) ${delay}ms, transform 900ms cubic-bezier(.2,.7,.2,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ---------- Data ---------- */
const EXPERIENCIAS = [
  {
    id: "palacio-duhau",
    lugar: "Palacio Duhau — Park Hyatt",
    ciudad: "Buenos Aires, Argentina",
    texto:
      "Un palacio de 1932 convertido en refugio urbano. Los jardines internos siguen siendo el secreto mejor guardado de Recoleta.",
    detalle:
      "Construido en 1932 como residencia de la familia Duhau, el palacio conserva sus salones originales, sus boiseries francesas y una bodega subterránea que hoy funciona como sala de cata privada. Lo que distingue a este lugar no es el mármol — es el jardín interno de casi una hectárea, invisible desde la calle, que separa el ala histórica de la torre contemporánea. Ahí, entre los plátanos centenarios, el ruido de la avenida Alvear desaparece por completo.",
    destacamos:
      "El té de las cinco en la Sala de las Bóvedas y el spa subterráneo, construido sobre los antiguos túneles de la casa.",
  },
  {
    id: "casa-cavia",
    lugar: "Casa Cavia",
    ciudad: "Buenos Aires, Argentina",
    texto:
      "Farmacia, editorial, restaurante y jardín conviven en una casona de Palermo sin perder nunca la compostura.",
    detalle:
      "Casa Cavia ocupa una residencia de 1929 que funcionó, entre otras cosas, como consultorio médico — de ahí el nombre de su farmacia interna, que hoy vende perfumes de nicho y objetos de autor en vez de remedios. El restaurante ocupa lo que fue el living principal, con el jardín como extensión natural del comedor. No hay cartelería, no hay ostentación: cada ambiente se descubre caminando, como en una casa de verdad.",
    destacamos:
      "La farmacia-perfumería en la entrada y el brunch de domingo en el jardín, sin música de fondo.",
  },
  {
    id: "fasano-las-piedras",
    lugar: "Fasano Las Piedras",
    ciudad: "José Ignacio, Uruguay",
    texto:
      "Arquitectura de piedra y pasto entre las dunas. Aquí el lujo se mide en metros de horizonte.",
    detalle:
      "Diseñado por Isay Weinfeld, el hotel se apoya en piedra local, pasto pampa y grandes superficies de vidrio que borran el límite entre interior y paisaje. No hay vista al mar directa — es deliberado: la propiedad mira hacia la laguna y los campos, no hacia la ostentación de la costa. Las suites no tienen televisión. El silencio es, literalmente, parte del diseño.",
    destacamos:
      "Las cabalgatas al atardecer y la carta de vinos uruguayos, curada por bodegas familiares de Garzón.",
  },
  {
    id: "awasi-patagonia",
    lugar: "Awasi Patagonia",
    ciudad: "Torres del Paine, Chile",
    texto:
      "Cabañas aisladas frente al macizo. Ningún lujo compite con el paisaje — y ese es, precisamente, el punto.",
    detalle:
      "Cada una de las villas de Awasi está orientada para tener una vista privada del macizo de Torres del Paine, sin que ninguna otra estructura entre en el encuadre. El servicio funciona con un guía y un vehículo asignados por cabaña — no hay excursiones grupales, no hay horarios fijos. La arquitectura, en madera oscura y piedra, se disuelve intencionalmente en la estepa.",
    destacamos:
      "Las excursiones privadas de un día completo y las cabañas con tina exterior frente a la cordillera.",
  },
];

const DIARIO = [
  {
    id: "arte-de-no-mostrar",
    titulo: "Sobre el arte de no mostrar",
    fecha: "12 jun 2026",
    resumen:
      "Por qué las marcas latinoamericanas más elegantes dejaron de posar para las cámaras.",
    cuerpo: [
      "Durante años, el lujo latinoamericano copió el manual del lujo importado: logos grandes, campañas aspiracionales, la promesa explícita de un estatus. Ese modelo empieza a agotarse entre las marcas y los espacios que más nos interesan.",
      "Lo que reemplaza a la ostentación no es la austeridad — es la precisión. Un hotel que no publica sus tarifas. Una casa de campo que no tiene cartel en la entrada. Una firma de indumentaria que fabrica el doble de lo que anuncia. La discreción, en estos casos, no es ausencia de estrategia: es la estrategia.",
      "Escribimos sobre esto porque creemos que hay una escuela latinoamericana de lujo silencioso todavía sin nombre propio — y queremos documentarla mientras se está formando, no después.",
    ],
  },
  {
    id: "hospitalidad-silenciosa-fasano",
    titulo: "La hospitalidad silenciosa de Fasano",
    fecha: "28 may 2026",
    resumen:
      "Una visita a José Ignacio y la escuela de servicio que no necesita sonreír para ser cálida.",
    cuerpo: [
      "El personal de Fasano Las Piedras no sonríe de forma automática. No es descortesía — es una forma de hospitalidad que prioriza la anticipación sobre la efusividad: la toalla que aparece antes de que uno la busque, la copa que se retira sin preguntar si se puede.",
      "Esa cultura de servicio, heredada de la tradición paulista de la familia Fasano, contrasta con el modelo de hospitalidad más caribeño o norteamericano, basado en el entusiasmo verbal constante. Aquí el silencio del staff es, en sí mismo, una señal de confianza hacia el huésped.",
      "Es un matiz que cualquier proyecto de hospitalidad latinoamericano debería estudiar antes de copiar fórmulas ajenas.",
    ],
  },
  {
    id: "lujo-que-hereda-la-tierra",
    titulo: "El lujo que hereda la tierra",
    fecha: "09 may 2026",
    resumen:
      "Materiales locales, mano de obra artesanal: el nuevo código de las casas de campo argentinas.",
    cuerpo: [
      "Las nuevas casas de campo del interior de Buenos Aires y Córdoba están abandonando el mármol importado y el mobiliario europeo en favor de ladrillo visto, maderas nativas y artesanos regionales.",
      "No es una moda estética: es una respuesta directa a un tipo de cliente que ya vivió la etapa del lujo importado y ahora busca algo que no se pueda comprar en un catálogo. El valor está en la mano de obra, no en el logo.",
      "Visitamos tres estancias que representan esta transición y hablamos con los arquitectos que las diseñaron.",
    ],
  },
  {
    id: "palermo-jardines-secretos",
    titulo: "Palermo y sus jardines secretos",
    fecha: "22 abr 2026",
    resumen:
      "Un recorrido por los patios internos que Buenos Aires no muestra en sus mapas.",
    cuerpo: [
      "Detrás de las fachadas de Palermo Chico y Barrio Parque hay una red de jardines internos que casi nunca aparecen en fotos: patios de casonas reconvertidas, invernaderos privados, huertas de restaurantes que no figuran en el menú.",
      "Recorrimos seis de ellos, con permiso de sus dueños, para entender cómo el verde se volvió el lujo más difícil de conseguir en una ciudad densa.",
      "El resultado es menos una guía y más un mapa de lo que la ciudad decidió no mostrar.",
    ],
  },
  {
    id: "contra-el-lujo-ruidoso",
    titulo: "Contra el lujo ruidoso",
    fecha: "03 abr 2026",
    resumen:
      "Un ensayo sobre por qué la discreción se volvió el bien más escaso de la región.",
    cuerpo: [
      "En una región con desigualdad visible, el lujo ruidoso siempre tuvo una función social: mostrar que se llegó. Pero esa función está cambiando entre una nueva generación de clientes que prefiere no ser identificada como tal.",
      "Este ensayo argumenta que la discreción, más que una estética, se convirtió en la forma más sofisticada de exclusividad disponible hoy en América Latina — precisamente porque no se puede fotografiar ni replicar en serie.",
      "Es el argumento que sostiene, en el fondo, todo lo que publicamos en Casa Banega.",
    ],
  },
];

const NAV = [
  { id: "manifiesto", label: "Manifiesto" },
  { id: "experiencias", label: "Experiencias" },
  { id: "diario", label: "Diario" },
  { id: "contacto", label: "Contacto" },
];

/* ---------- Shared bits ---------- */
function GlobalStyle() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500&display=swap');
      .font-display { font-family: 'Playfair Display', serif; }
      .tracking-wider2 { letter-spacing: 0.18em; }
      .tracking-wider3 { letter-spacing: 0.3em; }
      html { scroll-behavior: smooth; }
      ::selection { background: ${C.line}; }
      .underline-reveal { position: relative; text-decoration: none; }
      .underline-reveal::after {
        content: '';
        position: absolute;
        left: 0; bottom: -4px;
        width: 100%; height: 1px;
        background: currentColor;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 500ms cubic-bezier(.2,.7,.2,1);
      }
      .underline-reveal:hover::after { transform: scaleX(1); }
      @keyframes floatLine {
        0%, 100% { transform: scaleY(1); opacity: .5; }
        50% { transform: scaleY(0.6); opacity: 1; }
      }
    `}</style>
  );
}

function GrainFilter() {
  return (
    <svg style={{ position: "fixed", width: 0, height: 0 }}>
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" result="noise" />
        <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.04 0" />
      </filter>
    </svg>
  );
}

function Nav({ page, goHome, goTo, scrolled }) {
  const [open, setOpen] = useState(false);

  const handleMobileNav = (id) => {
    setOpen(false);
    setTimeout(() => goTo(id), 350);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: open ? C.bg : scrolled ? "rgba(244,240,233,0.9)" : "transparent",
          backdropFilter: scrolled && !open ? "blur(6px)" : "none",
          borderBottom: scrolled || open ? `1px solid ${C.line}` : "1px solid transparent",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          <button
            onClick={() => { setOpen(false); goHome(); }}
            className="font-display text-lg tracking-wide relative z-[60]"
            style={{ color: C.ink }}
          >
            CB
          </button>

          <nav className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-wider2" style={{ color: C.stone }}>
            {NAV.map((n) => (
              <button key={n.id} onClick={() => goTo(n.id)} className="underline-reveal">
                {n.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="md:hidden relative z-[60] w-8 h-8 flex flex-col items-center justify-center gap-[6px]"
          >
            <span
              className="block h-px w-6 transition-all duration-300"
              style={{ backgroundColor: C.ink, transform: open ? "translateY(3.5px) rotate(45deg)" : "none" }}
            />
            <span
              className="block h-px w-6 transition-all duration-300"
              style={{ backgroundColor: C.ink, transform: open ? "translateY(-3.5px) rotate(-45deg)" : "none" }}
            />
          </button>
        </div>
      </header>

      <div
        className="fixed inset-0 z-[55] md:hidden flex flex-col items-center justify-center transition-all duration-500"
        style={{
          backgroundColor: C.bg,
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <nav className="flex flex-col items-center gap-8">
          {NAV.map((n, i) => (
            <button
              key={n.id}
              onClick={() => handleMobileNav(n.id)}
              className="font-display italic text-3xl"
              style={{
                color: C.ink,
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0px)" : "translateY(10px)",
                transition: `opacity 400ms ease ${i * 60}ms, transform 400ms ease ${i * 60}ms`,
              }}
            >
              {n.label}
            </button>
          ))}
        </nav>
        <p className="absolute bottom-12 text-[10px] uppercase tracking-wider3" style={{ color: C.stone }}>
          Casa Banega
        </p>
      </div>
    </>
  );
}

function PageFooter() {
  return (
    <p className="text-center text-[11px] uppercase tracking-wider2 py-16" style={{ color: C.stone }}>
      Casa Banega — Cultura del lujo
    </p>
  );
}

function Back({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      className="underline-reveal text-[11px] uppercase tracking-wider2"
      style={{ color: C.stone }}
    >
      ← {label}
    </button>
  );
}

/* ---------- Home ---------- */
function Home({ goTo, openExperiencia, openArticulo }) {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ filter: "url(#grain)" }} />
        <div className="hidden md:block absolute left-6 top-0 bottom-0 items-center" style={{ writingMode: "vertical-rl" }}>
          <span className="text-[10px] tracking-wider3 uppercase flex h-full items-center" style={{ color: C.stone }}>
            Cultura del lujo
          </span>
        </div>
        <div className="text-center max-w-3xl">
          <p className="text-[11px] uppercase tracking-wider3 mb-8" style={{ color: C.stone }}>
            Un diario editorial
          </p>
          <h1 className="font-display italic text-[15vw] md:text-[6.5rem] leading-[0.95]" style={{ color: C.ink }}>
            Casa Banega
          </h1>
          <p className="mt-8 text-sm md:text-base tracking-wider2 uppercase" style={{ color: "#57524A" }}>
            El lujo que no necesita anunciarse
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="w-px h-10" style={{ backgroundColor: "#A9A399", animation: "floatLine 2.4s ease-in-out infinite" }} />
          <span className="text-[10px] uppercase tracking-wider2" style={{ color: C.stone }}>Desplazá</span>
        </div>
      </section>

      {/* Manifiesto */}
      <section id="manifiesto" className="px-6 md:px-10 py-28 md:py-40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Reveal><p className="text-[11px] uppercase tracking-wider3" style={{ color: C.stone }}>Manifiesto</p></Reveal>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <Reveal delay={100}>
              <p className="font-display text-2xl md:text-[2rem] leading-relaxed" style={{ color: C.ink }}>
                Casa Banega nace de una convicción simple: el lujo verdadero no se anuncia, se percibe.
              </p>
              <p className="mt-8 text-base md:text-lg leading-loose max-w-xl" style={{ color: "#57524A" }}>
                En un continente que a menudo confunde el lujo con la ostentación importada, buscamos otra
                cosa — el silencio bien puesto, el detalle que no necesita explicarse, los lugares y las
                personas que entendieron que la elegancia es, sobre todo, una forma de discreción.
                Escribimos sobre hoteles, casas, oficios y rituales de América Latina que eligieron no gritar.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10"><div className="h-px" style={{ backgroundColor: C.line }} /></div>

      {/* Experiencias preview */}
      <section id="experiencias" className="px-6 md:px-10 py-28 md:py-40">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex items-end justify-between mb-16 md:mb-20 flex-wrap gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-wider3 mb-3" style={{ color: C.stone }}>Experiencias</p>
                <h2 className="font-display italic text-3xl md:text-4xl" style={{ color: C.ink }}>
                  Lugares que visitamos con atención
                </h2>
              </div>
              <button onClick={() => goTo("experiencias-index")} className="underline-reveal text-[11px] uppercase tracking-wider2" style={{ color: C.stone }}>
                Ver todas →
              </button>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {EXPERIENCIAS.slice(0, 4).map((exp, i) => (
              <Reveal key={exp.id} delay={i * 80}>
                <button onClick={() => openExperiencia(exp.id)} className="group text-left w-full">
                  <div className="w-full aspect-[4/3] mb-6 transition-all duration-700" style={{ backgroundColor: i % 2 === 0 ? C.bgAlt : C.bgAlt2 }} />
                  <p className="text-[10px] uppercase tracking-wider2 mb-2" style={{ color: C.stone }}>{exp.ciudad}</p>
                  <h3 className="font-display text-xl md:text-2xl mb-3 underline-reveal inline" style={{ color: C.ink }}>{exp.lugar}</h3>
                  <p className="text-sm leading-relaxed max-w-sm" style={{ color: "#57524A" }}>{exp.texto}</p>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10"><div className="h-px" style={{ backgroundColor: C.line }} /></div>

      {/* Diario preview */}
      <section id="diario" className="px-6 md:px-10 py-28 md:py-40">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex items-end justify-between mb-16 md:mb-20 flex-wrap gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-wider3 mb-3" style={{ color: C.stone }}>Diario</p>
                <h2 className="font-display italic text-3xl md:text-4xl" style={{ color: C.ink }}>Reflexiones y crónicas</h2>
              </div>
              <button onClick={() => goTo("diario-index")} className="underline-reveal text-[11px] uppercase tracking-wider2" style={{ color: C.stone }}>
                Ver todo →
              </button>
            </div>
          </Reveal>

          <div>
            {DIARIO.slice(0, 3).map((art, i) => (
              <Reveal key={art.id} delay={i * 60}>
                <button onClick={() => openArticulo(art.id)} className="group block w-full text-left py-8 border-t first:border-t-0" style={{ borderColor: C.line }}>
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-10">
                    <span className="text-[11px] uppercase tracking-wider2 md:w-28 shrink-0" style={{ color: C.stone }}>{art.fecha}</span>
                    <div className="flex-1">
                      <h3 className="font-display text-xl md:text-2xl underline-reveal inline" style={{ color: C.ink }}>{art.titulo}</h3>
                      <p className="mt-2 text-sm max-w-xl" style={{ color: "#57524A" }}>{art.resumen}</p>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="px-6 md:px-10 py-28 md:py-36 border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-wider3 mb-6" style={{ color: C.stone }}>Contacto</p>
            <h2 className="font-display italic text-3xl md:text-4xl mb-10" style={{ color: C.ink }}>Escribinos</h2>
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-base md:text-lg">
              <a href="mailto:hola@casabanega.com" className="underline-reveal" style={{ color: C.ink }}>hola@casabanega.com</a>
              <span className="hidden md:inline" style={{ color: C.line }}>/</span>
              <a href="https://instagram.com/casabanega" className="underline-reveal" style={{ color: C.ink }}>@casabanega</a>
            </div>
          </Reveal>
          <p className="mt-24 text-[11px] uppercase tracking-wider2" style={{ color: C.stone }}>
            Casa Banega — Cultura del lujo latinoamericano
          </p>
        </div>
      </section>
    </>
  );
}

/* ---------- Experiencias index ---------- */
function ExperienciasIndex({ goHome, openExperiencia }) {
  return (
    <section className="px-6 md:px-10 pt-32 md:pt-40 pb-28">
      <div className="max-w-6xl mx-auto">
        <Back onClick={goHome} label="Inicio" />
        <p className="text-[11px] uppercase tracking-wider3 mt-10 mb-3" style={{ color: C.stone }}>Experiencias</p>
        <h1 className="font-display italic text-4xl md:text-5xl mb-16 md:mb-20" style={{ color: C.ink }}>
          Lugares que visitamos con atención
        </h1>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {EXPERIENCIAS.map((exp, i) => (
            <Reveal key={exp.id} delay={i * 60}>
              <button onClick={() => openExperiencia(exp.id)} className="group text-left w-full">
                <div className="w-full aspect-[4/3] mb-6" style={{ backgroundColor: i % 2 === 0 ? C.bgAlt : C.bgAlt2 }} />
                <p className="text-[10px] uppercase tracking-wider2 mb-2" style={{ color: C.stone }}>{exp.ciudad}</p>
                <h3 className="font-display text-xl md:text-2xl mb-3 underline-reveal inline" style={{ color: C.ink }}>{exp.lugar}</h3>
                <p className="text-sm leading-relaxed max-w-sm" style={{ color: "#57524A" }}>{exp.texto}</p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Experiencia detail ---------- */
function ExperienciaDetail({ id, goBack, goHome }) {
  const exp = EXPERIENCIAS.find((e) => e.id === id) || EXPERIENCIAS[0];
  return (
    <article className="px-6 md:px-10 pt-32 md:pt-40 pb-28">
      <div className="max-w-3xl mx-auto">
        <Back onClick={goBack} label="Experiencias" />
        <p className="text-[11px] uppercase tracking-wider2 mt-10 mb-3" style={{ color: C.stone }}>{exp.ciudad}</p>
        <h1 className="font-display italic text-4xl md:text-5xl mb-10" style={{ color: C.ink }}>{exp.lugar}</h1>
        <div className="w-full aspect-[16/9] mb-12" style={{ backgroundColor: C.bgAlt }} />
        <p className="text-lg leading-loose mb-10" style={{ color: "#57524A" }}>{exp.detalle}</p>
        <div className="pt-8 border-t" style={{ borderColor: C.line }}>
          <p className="text-[11px] uppercase tracking-wider2 mb-3" style={{ color: C.stone }}>Lo que destacamos</p>
          <p className="text-base leading-relaxed" style={{ color: "#57524A" }}>{exp.destacamos}</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-20">
        <button onClick={goHome} className="underline-reveal text-[11px] uppercase tracking-wider2" style={{ color: C.stone }}>
          Volver al inicio
        </button>
      </div>
    </article>
  );
}

/* ---------- Diario index ---------- */
function DiarioIndex({ goHome, openArticulo }) {
  return (
    <section className="px-6 md:px-10 pt-32 md:pt-40 pb-28">
      <div className="max-w-6xl mx-auto">
        <Back onClick={goHome} label="Inicio" />
        <p className="text-[11px] uppercase tracking-wider3 mt-10 mb-3" style={{ color: C.stone }}>Diario</p>
        <h1 className="font-display italic text-4xl md:text-5xl mb-16 md:mb-20" style={{ color: C.ink }}>
          Reflexiones y crónicas
        </h1>
        <div>
          {DIARIO.map((art, i) => (
            <Reveal key={art.id} delay={i * 50}>
              <button onClick={() => openArticulo(art.id)} className="group block w-full text-left py-8 border-t first:border-t-0" style={{ borderColor: C.line }}>
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-10">
                  <span className="text-[11px] uppercase tracking-wider2 md:w-28 shrink-0" style={{ color: C.stone }}>{art.fecha}</span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl md:text-2xl underline-reveal inline" style={{ color: C.ink }}>{art.titulo}</h3>
                    <p className="mt-2 text-sm max-w-xl" style={{ color: "#57524A" }}>{art.resumen}</p>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Articulo detail ---------- */
function ArticuloDetail({ id, goBack, goHome }) {
  const art = DIARIO.find((a) => a.id === id) || DIARIO[0];
  return (
    <article className="px-6 md:px-10 pt-32 md:pt-40 pb-28">
      <div className="max-w-2xl mx-auto">
        <Back onClick={goBack} label="Diario" />
        <p className="text-[11px] uppercase tracking-wider2 mt-10 mb-4" style={{ color: C.stone }}>{art.fecha}</p>
        <h1 className="font-display italic text-3xl md:text-5xl leading-tight mb-12" style={{ color: C.ink }}>{art.titulo}</h1>
        {art.cuerpo.map((p, i) => (
          <p key={i} className="text-lg leading-loose mb-6" style={{ color: "#57524A" }}>{p}</p>
        ))}
      </div>
      <div className="max-w-2xl mx-auto mt-20">
        <button onClick={goHome} className="underline-reveal text-[11px] uppercase tracking-wider2" style={{ color: C.stone }}>
          Volver al inicio
        </button>
      </div>
    </article>
  );
}

/* ---------- Contacto page ---------- */
function ContactoPage({ goHome }) {
  return (
    <section className="px-6 md:px-10 pt-32 md:pt-40 pb-28 min-h-screen flex flex-col">
      <div className="max-w-6xl mx-auto w-full">
        <Back onClick={goHome} label="Inicio" />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <p className="text-[11px] uppercase tracking-wider3 mb-6" style={{ color: C.stone }}>Contacto</p>
        <h1 className="font-display italic text-4xl md:text-5xl mb-10" style={{ color: C.ink }}>Escribinos</h1>
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-base md:text-lg">
          <a href="mailto:hola@casabanega.com" className="underline-reveal" style={{ color: C.ink }}>hola@casabanega.com</a>
          <span className="hidden md:inline" style={{ color: C.line }}>/</span>
          <a href="https://instagram.com/casabanega" className="underline-reveal" style={{ color: C.ink }}>@casabanega</a>
        </div>
      </div>
    </section>
  );
}

/* ---------- App / simple router ---------- */
export default function CasaBanega() {
  const [page, setPage] = useState("home");     // home | experiencias-index | experiencia-detail | diario-index | articulo-detail | contacto
  const [selectedId, setSelectedId] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [page, selectedId]);

  const goHome = () => setPage("home");
  const goTo = (target) => {
    if (page !== "home") setPage("home");
    if (target === "experiencias-index") { setPage("experiencias-index"); return; }
    if (target === "diario-index") { setPage("diario-index"); return; }
    if (target === "contacto") { setPage("contacto"); return; }
    // scroll anchor on home (manifiesto / experiencias / diario)
    setTimeout(() => {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, page !== "home" ? 50 : 0);
  };
  const openExperiencia = (id) => { setSelectedId(id); setPage("experiencia-detail"); };
  const openArticulo = (id) => { setSelectedId(id); setPage("articulo-detail"); };

  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: C.bg, color: C.ink, fontFamily: "'Inter', sans-serif" }}>
      <GlobalStyle />
      <GrainFilter />
      <Nav page={page} goHome={goHome} goTo={goTo} scrolled={scrolled || page !== "home"} />

      {page === "home" && (
        <Home goTo={goTo} openExperiencia={openExperiencia} openArticulo={openArticulo} />
      )}
      {page === "experiencias-index" && (
        <ExperienciasIndex goHome={goHome} openExperiencia={openExperiencia} />
      )}
      {page === "experiencia-detail" && (
        <ExperienciaDetail id={selectedId} goBack={() => setPage("experiencias-index")} goHome={goHome} />
      )}
      {page === "diario-index" && (
        <DiarioIndex goHome={goHome} openArticulo={openArticulo} />
      )}
      {page === "articulo-detail" && (
        <ArticuloDetail id={selectedId} goBack={() => setPage("diario-index")} goHome={goHome} />
      )}
      {page === "contacto" && (
        <ContactoPage goHome={goHome} />
      )}

      {page !== "home" && <PageFooter />}
    </div>
  );
}