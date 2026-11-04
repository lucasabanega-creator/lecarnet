import { useEffect, useRef, useState } from "react";
export default function HeroFilm(){
  const ref=useRef(null),[playing,setPlaying]=useState(false);
  useEffect(()=>{const preference=window.matchMedia("(prefers-reduced-motion: reduce)");const update=()=>{if(preference.matches)ref.current?.pause();else ref.current?.play().catch(()=>setPlaying(false));};update();preference.addEventListener("change",update);return()=>preference.removeEventListener("change",update);},[]);
  return <><video ref={ref} className="hero-film" muted loop playsInline preload="none" poster="/covers/experiencias.jpg" aria-hidden="true" onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)}><source src="/hero.mp4" type="video/mp4"/></video><button type="button" className="film-control" onClick={()=>playing ? ref.current.pause() : ref.current.play().catch(()=>setPlaying(false))}>{playing ? "Pausar video" : "Reproducir video"}</button></>;
}
