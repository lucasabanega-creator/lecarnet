import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUp } from 'lucide-react';

type Message = {
  role: 'user' | 'model';
  parts: { text: string }[];
};

const WELCOME_MESSAGE = `Benvenuto.

Estoy aquí para ayudarte a encontrar el café indicado — ya sea para trabajar en silencio, para una reunión tranquila, o simplemente para un espresso sin apuros.

¿En qué zona o barrio estás?`;

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', parts: [{ text: WELCOME_MESSAGE }] }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setCharCount(e.target.value.length);
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', parts: [{ text: input.trim() }] };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setCharCount(0);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });
      if (!response.ok) throw new Error('Network error');
      const data = await response.json();
      setMessages(prev => [...prev, { role: 'model', parts: [{ text: data.text }] }]);
    } catch {
      setMessages(prev => [...prev, {
        role: 'model',
        parts: [{ text: 'En este momento no puedo procesar tu consulta. Por favor, intenta nuevamente en unos instantes.' }]
      }]);
    } finally {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] font-sans text-[#2C2A28] flex flex-col selection:bg-[#EAE6DF]">

      {/* Header — identical grammar to Guide.tsx */}
      <header className="fixed top-0 z-50 w-full bg-[#F9F8F6]/95 backdrop-blur-sm border-b border-[#2C2A28]/8 flex items-center h-20 px-8 md:px-16">
        <Link
          to="/"
          className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#2C2A28]/50 hover:text-[#2C2A28] transition-colors duration-500"
        >
          <ArrowLeft size={13} strokeWidth={1.5} />
          Casa Banega
        </Link>
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5">
          <span className="font-serif text-[11px] tracking-[0.38em] uppercase text-[#2C2A28]/70">
            Cultura del Caffè
          </span>
        </div>
      </header>

      {/* Intro band — visible only before first user message */}
      {messages.length === 1 && (
        <div className="pt-20 w-full border-b border-[#2C2A28]/8">
          <div className="max-w-2xl mx-auto px-8 py-16 md:py-20 text-center flex flex-col items-center gap-4">
            <span className="font-sans text-[9px] uppercase tracking-[0.38em] text-[#2C2A28]/35">
              Guía de cafés
            </span>
            <h1 className="font-serif text-3xl md:text-4xl font-light text-[#2C2A28] leading-[1.2]">
              Encontrá el café indicado<br />para el momento que tenés en mente.
            </h1>
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#2C2A28]/35 mt-2">
              Café de especialidad · Buenos Aires y el mundo
            </p>
          </div>
        </div>
      )}

      {/* Messages */}
      <main
        ref={containerRef}
        className="flex-1 overflow-y-auto px-4 py-10 flex flex-col items-center"
        style={{ paddingTop: messages.length === 1 ? '2.5rem' : '5.5rem' }}
      >
        <div className="w-full max-w-2xl flex flex-col gap-12">
          {messages.map((msg, i) => (
            <div
              key={i}
              className="flex flex-col chat-message"
              style={{
                alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start',
                animationDelay: `${i * 0.04}s`
              }}
            >
              {msg.role === 'model' && (
                <span className="font-sans text-[8px] uppercase tracking-[0.3em] text-[#2C2A28]/30 mb-3 ml-0.5">
                  Casa Banega
                </span>
              )}
              <div
                className={
                  msg.role === 'user'
                    ? 'font-serif font-light text-base md:text-lg text-right text-[#2C2A28]/60 max-w-[75%]'
                    : 'font-serif font-light text-base md:text-lg text-left text-[#2C2A28] max-w-[90%] chat-prose'
                }
              >
                {msg.role === 'user' ? (
                  msg.parts[0].text
                ) : (
                  <ReactMarkdown>{msg.parts[0].text}</ReactMarkdown>
                )}
              </div>
            </div>
          ))}

          {/* Loading indicator — three slow pulses */}
          {isLoading && (
            <div className="flex flex-col items-start chat-message">
              <span className="font-sans text-[8px] uppercase tracking-[0.3em] text-[#2C2A28]/30 mb-3 ml-0.5">
                Casa Banega
              </span>
              <div className="flex items-center gap-2 h-6">
                {[0, 1, 2].map(n => (
                  <span
                    key={n}
                    className="w-1 h-1 rounded-full bg-[#2C2A28]/30"
                    style={{ animation: `pulse-dot 1.4s ease-in-out ${n * 0.22}s infinite` }}
                  />
                ))}
              </div>
            </div>
          )}

          <div ref={messagesEndRef} className="h-4" />
        </div>
      </main>

      {/* Input — anchored to bottom */}
      <footer className="w-full bg-[#F9F8F6] border-t border-[#2C2A28]/8 px-4 pt-4 pb-8 md:pb-10 flex justify-center">
        <div className="w-full max-w-2xl flex flex-col gap-2">
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-4 border-b border-[#2C2A28]/20 pb-3 focus-within:border-[#2C2A28]/50 transition-colors duration-500"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              placeholder="¿En qué zona estás?"
              disabled={isLoading}
              className="flex-1 bg-transparent border-none outline-none font-serif font-light text-base md:text-lg text-[#2C2A28] placeholder:text-[#2C2A28]/25 disabled:opacity-40"
              maxLength={400}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="w-8 h-8 flex items-center justify-center border border-[#2C2A28]/20 hover:border-[#2C2A28]/60 hover:bg-[#2C2A28] hover:text-[#F9F8F6] transition-all duration-500 disabled:opacity-20 disabled:cursor-not-allowed shrink-0"
              aria-label="Enviar"
            >
              <ArrowUp size={14} strokeWidth={1.5} />
            </button>
          </form>

          <div className="flex items-center justify-between">
            <span className="font-sans text-[8px] uppercase tracking-[0.25em] text-[#2C2A28]/25">
              Asistente experimental · Verificar antes de visitar
            </span>
            {charCount > 0 && (
              <span className="font-sans text-[9px] text-[#2C2A28]/20">
                {charCount}/400
              </span>
            )}
          </div>
        </div>
      </footer>

      <style>{`
        .chat-message {
          animation: rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes rise {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-dot {
          0%, 80%, 100% { opacity: 0.2; transform: scale(0.85); }
          40% { opacity: 0.9; transform: scale(1.15); }
        }
        .chat-prose p { margin-bottom: 0.65em; }
        .chat-prose p:last-child { margin-bottom: 0; }
        .chat-prose strong { font-weight: 500; }
        .chat-prose ul { list-style: none; padding: 0; margin: 0.5em 0 0.75em; }
        .chat-prose li {
          position: relative;
          padding-left: 1.2rem;
          margin-bottom: 0.9em;
          line-height: 1.65;
        }
        .chat-prose li::before {
          content: "—";
          position: absolute;
          left: 0;
          opacity: 0.35;
        }
        .chat-prose h1, .chat-prose h2, .chat-prose h3 {
          font-family: "Inter", sans-serif;
          font-size: 9px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          opacity: 0.45;
          margin: 1.6em 0 0.5em;
        }
      `}</style>
    </div>
  );
}
