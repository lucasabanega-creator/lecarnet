export const SITE = {
  name: "Casa Banega",
  description: "Una publicación de Lucas Banega sobre cultura del lujo, objetos y las decisiones que construyen valor de marca. Desde Buenos Aires.",
  url: (import.meta.env.VITE_SITE_URL || "https://casabanega.com").replace(/\/$/, ""),
  image: "/social-card.png",
};
export function absoluteUrl(path, origin = SITE.url) { return origin ? new URL(path, origin).href : path; }
export function canonicalPath(path) { const clean=path.split(/[?#]/)[0]; return clean === "/" ? "/" : clean.replace(/\/+$/, "") + "/"; }
