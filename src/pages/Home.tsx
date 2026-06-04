import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const CasaCrest = () => (
  <svg width="18" height="26" viewBox="0 0 18 26" fill="none" stroke="currentColor" strokeWidth="0.6" className="mb-3 text-[#2C2A28] opacity-60">
    <polygon points="9,1 17,7 17,19 9,25 1,19 1,7" strokeLinejoin="round" />
    <polygon points="9,5 13,8.5 13,17.5 9,21 5,17.5 5,8.5" strokeLinejoin="round" />
    <circle cx="9" cy="13" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

const sections = [
  {
    id: 'architecture',
    num: '01',
    label: 'Luoghi e Architettura',
    title: 'La forma como extensión del alma',
    sub: 'Espacios que permanecen en la memoria',
    link: '/architecture',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'fragrances',
    num: '02',
    label: 'Firma Olfattiva',
    title: 'La arquitectura invisible de la presencia',
    sub: 'Perfumes que definen un instante',
    link: '/fragrances',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683702?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'cafes',
    num: '03',
    label: 'Cultura del Caffè',
    title: 'Un ritual destilado en un solo momento',
    sub: 'Cafés y espacios para el pensamiento lento',
    link: '/cafes',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'chat',
    num: '04',
    label: 'Guía de Cafés · IA',
    title: 'Encontrá el café indicado para el momento que tenés en mente.',
    sub: 'Asistente con búsqueda en tiempo real',
    link: '/chat',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 1.2s ease, transform 1.2s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F8F6] font-sans text-[#2C2A28] selection:bg-[#EAE6DF]">

      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-[#F9F8F6]/95 backdrop-blur-sm border-b border-[#2C2A28]/8 flex items-center justify-between h-20 px-8 md:px-16">
        <nav className="flex gap-6 md:gap-8">
          <Link to="/architecture" className="text-[10px] uppercase tracking-[0.22em] text-[#2C2A28]/45 hover:text-[#2C2A28] transition-colors duration-500">Lugares</Link>
          <Link to="/fragrances" className="text-[10px] uppercase tracking-[0.22em] text-[#2C2A28]/45 hover:text-[#2C2A28] transition-colors duration-500">Fragancias</Link>
          <Link to="/cafes" className="text-[10px] uppercase tracking-[0.22em] text-[#2C2A28]/45 hover:text-[#2C2A28] transition-colors duration-500">Cafés</Link>
        </nav>

        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
          <CasaCrest />
          <span className="font-serif text-[11px] tracking-[0.38em] uppercase text-[#2C2A28] leading-none mt-0.5">
            Casa Banega
          </span>
        </div>

        <Link
          to="/chat"
          className="hidden md:block text-[10px] uppercase tracking-[0.22em] text-[#2C2A28]/45 hover:text-[#2C2A28] transition-colors duration-500 border-b border-[#2C2A28]/15 pb-0.5"
        >
          Guía IA
        </Link>
      </header>

      {/* Hero */}
      <section className="pt-20 w-full flex flex-col items-center justify-center min-h-[40vh] px-8 text-center border-b border-[#2C2A28]/8">
        <div ref={heroRef} className="flex flex-col items-center gap-5 py-20 md:py-28">
          <span className="font-sans text-[9px] uppercase tracking-[0.38em] text-[#2C2A28]/40">
            Una guía de experiencias
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-[#2C2A28] leading-[1.1] text-balance max-w-3xl">
            Un universo curato di architettura, profumo e cultura del vivere.
          </h1>
          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#2C2A28]/35 mt-2">
            Arquitectura · Fragancias · Cafés
          </p>
        </div>
      </section>

      {/* Sections */}
      <main>
        {sections.map((section, i) => (
          <Link
            key={section.id}
            to={section.link}
            className="group relative w-full flex items-end overflow-hidden block"
            style={{ height: section.id === 'chat' ? '55vh' : '90vh' }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[5s] ease-out group-hover:scale-[1.04] pointer-events-none"
              style={{ backgroundImage: `url(${section.image})` }}
            />
            {/* Overlay — lighter on the chat section to feel more functional */}
            <div
              className="absolute inset-0 pointer-events-none transition-colors duration-1000"
              style={{
                background: section.id === 'chat'
                  ? 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 60%, transparent 100%)'
                  : 'linear-gradient(to top, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.08) 50%, transparent 100%)'
              }}
            />

            <span className="absolute top-10 right-10 font-sans text-[9px] tracking-[0.3em] uppercase text-white/25">
              {section.num}
            </span>

            {/* Chat badge */}
            {section.id === 'chat' && (
              <span className="absolute top-10 left-10 font-sans text-[8px] uppercase tracking-[0.25em] text-white/50 border border-white/20 px-3 py-1">
                Asistente con IA
              </span>
            )}

            <div className="relative z-10 w-full flex flex-col md:flex-row md:items-end md:justify-between px-8 md:px-16 pb-12 md:pb-16 gap-5">
              <div className="flex flex-col gap-3 max-w-xl">
                <span className="font-sans text-[9px] uppercase tracking-[0.28em] text-white/55">
                  {section.label}
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-light text-white leading-[1.15] text-balance">
                  {section.title}
                </h2>
                <p className="font-sans text-[10px] text-white/45 tracking-wider font-light">
                  {section.sub}
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="font-sans text-[9px] uppercase tracking-[0.28em] text-white/50 transition-all duration-500 group-hover:text-white">
                  {section.id === 'chat' ? 'Consultar' : 'Explorar'}
                </span>
                <span className="block w-8 h-px bg-white/25 transition-all duration-700 group-hover:w-16 group-hover:bg-white/65" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 h-px w-0 bg-white/30 transition-all duration-700 group-hover:w-full pointer-events-none" />
          </Link>
        ))}
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#F9F8F6] border-t border-[#2C2A28]/10 px-8 md:px-16 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex flex-col gap-2">
          <span className="font-serif text-[11px] tracking-[0.38em] uppercase text-[#2C2A28]">Casa Banega</span>
          <p className="font-sans text-[10px] text-[#2C2A28]/35 tracking-widest uppercase">
            Arquitectura · Fragancias · Cafés
          </p>
        </div>
        <p className="font-serif text-sm italic text-[#2C2A28]/35 max-w-xs text-balance">
          "Il lusso vero non si vede — si sente."
        </p>
        <div className="flex flex-col gap-2 items-start md:items-end">
          <a
            href="https://lucasbanega.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#2C2A28]/35 hover:text-[#2C2A28] transition-colors duration-500 border-b border-[#2C2A28]/15 pb-0.5"
          >
            Maison Lucas Banega ↗
          </a>
          <span className="font-sans text-[9px] uppercase tracking-widest text-[#2C2A28]/20">
            Buenos Aires
          </span>
        </div>
      </footer>
    </div>
  );
}
