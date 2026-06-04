import React, { useEffect, useRef } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { GuideContent } from '../data/guides';

export default function Guide({ content }: { content: GuideContent }) {
  if (!content) return <Navigate to="/" />;

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    const t = setTimeout(() => {
      el.style.transition = 'opacity 1.4s ease, transform 1.4s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F8F6] font-sans text-[#2C2A28] selection:bg-[#EAE6DF]">

      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-[#F9F8F6]/95 backdrop-blur-sm border-b border-[#2C2A28]/8 flex items-center h-20 px-8 md:px-16">
        <Link
          to="/"
          className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#2C2A28]/50 hover:text-[#2C2A28] transition-colors duration-500"
        >
          <ArrowLeft size={13} strokeWidth={1.5} />
          Casa Banega
        </Link>
        <div className="absolute left-1/2 -translate-x-1/2">
          <span className="font-serif text-[11px] tracking-[0.38em] uppercase text-[#2C2A28]/70">
            {content.tagline}
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="relative w-full overflow-hidden" style={{ height: '72vh' }}>
        <div
          className="absolute inset-0 bg-cover bg-center scale-[1.04]"
          style={{ backgroundImage: `url(${content.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/30 to-black/55" />
        <div ref={heroRef} className="absolute inset-0 flex flex-col items-center justify-end pb-16 md:pb-24 px-8 text-center text-white">
          <span className="font-sans text-[9px] uppercase tracking-[0.35em] text-white/55 mb-5">
            {content.tagline}
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-balance max-w-3xl">
            {content.title}
          </h1>
          {content.intro && (
            <p className="font-serif text-base md:text-lg font-light text-white/60 mt-6 max-w-xl text-balance leading-relaxed">
              {content.intro}
            </p>
          )}
        </div>
      </section>

      {/* Divider */}
      <div className="w-full border-b border-[#2C2A28]/10" />

      {/* Content feed */}
      <main className="max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-36">
        {content.items.map((item, index) => (
          <article
            key={item.id}
            className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-20 items-center mb-28 md:mb-40 last:mb-0`}
          >
            {/* Image */}
            <div className="w-full md:w-[48%] group overflow-hidden shrink-0">
              <div className="aspect-[3/4] overflow-hidden bg-[#EAE6DF]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[5s] ease-out group-hover:scale-[1.04]"
                />
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-[52%] flex flex-col items-start gap-5">
              {item.subtitle && (
                <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#2C2A28]/40">
                  {item.subtitle}
                </span>
              )}
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light leading-[1.2] text-[#2C2A28]">
                {item.title}
              </h2>
              <div className="w-8 h-px bg-[#2C2A28]/20" />
              <p className="font-serif font-light text-base md:text-lg leading-[1.75] text-[#2C2A28]/70 text-balance">
                {item.description}
              </p>
              {item.note && (
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#2C2A28]/35 mt-2">
                  {item.note}
                </p>
              )}
            </div>
          </article>
        ))}
      </main>

      {/* Footer within guide */}
      <div className="border-t border-[#2C2A28]/10 px-8 md:px-16 py-10 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#2C2A28]/40 hover:text-[#2C2A28] transition-colors duration-500"
        >
          <ArrowLeft size={12} strokeWidth={1.5} />
          Todas las guías
        </Link>
        <span className="font-serif text-xs italic text-[#2C2A28]/30">Casa Banega</span>
      </div>
    </div>
  );
}
