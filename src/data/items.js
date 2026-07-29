export const CATEGORIAS = {
  experiencias: {
    slug: "experiencias",
    nombre: "Experiencias",
    singular: "Una experiencia",
    eyebrow: "Hospitalidad y viaje",
    intro:
      "Hoteles, refugios y lugares que entendieron que la mejor forma de recibir a alguien es no interrumpirlo.",
    imagenPortada: "/covers/experiencias.jpg",
  },
  gastronomia: {
    slug: "gastronomia",
    nombre: "Gastronomía",
    singular: "Un lugar",
    eyebrow: "Cafés, cenas y salones",
    intro:
      "Cafés, restaurantes y cenas que sostienen la misma receta y el mismo ritmo desde hace décadas, sin necesidad de reinventarse cada temporada.",
    imagenPortada: "/covers/gastronomia.jpg",
    filtroPor: "cocina",
  },
  perfumes: {
    slug: "perfumes",
    nombre: "Perfumes",
    singular: "Un perfume",
    eyebrow: "Casas de perfumería",
    intro:
      "Fragancias verificadas, con su historia y su pirámide olfativa documentadas — sin relatos inventados.",
    imagenPortada: "/covers/perfumes.jpg",
    filtroPor: "marca",
  },
};

// Contenido en curaduría. Solo se publica lo que está verificado con fuentes reales.
export const OBJETOS = [
  {
    cat: "perfumes",
    slug: "eau-parfumee-the-imperial",
    nombre: "Eau Parfumée Thé Impérial",
    marca: "Bvlgari",
    lugar: "Bvlgari, Roma",
    tipo: "Eau de Toilette",
    desc: "El aroma de firma de los hoteles Bvlgari, embotellado para el público por primera vez.",
    historia:
      "Thé Impérial nació en 2017 como la fragancia de firma de Bvlgari Hotels & Resorts, creada por el perfumista Jacques Cavallier en exclusiva para los huéspedes de sus hoteles. Durante casi una década existió solo ahí — en las habitaciones y los espacios comunes —, sin estar a la venta. En 2026 Bvlgari lo incorporó a su colección Eau Parfumée y lo hizo público por primera vez. La composición retoma el intercambio entre Oriente y Occidente en la era de las rutas imperiales: el té negro de Sri Lanka y los cítricos italianos, dos materias primas que alguna vez fueron símbolo de poder y prestigio.",
    piramide: {
      salida: "Cítricos italianos",
      corazon: "Té negro de Sri Lanka",
      fondo: "Almizcle",
    },
    fuente: ["bulgari.com", "fragrantica.com", "nstperfume.com", "scentadvice.com"],
    enlaceOficial: "https://www.bulgari.com/en-us/42504.html",
    curador: "Lucas Banega",
    verificado: "27 de julio de 2026",
    verificadoISO: "2026-07-27",
    tono: "#E9E9E7",
    imagen: "/perfumes/bvlgari-the-imperial.png",
    imagenBanner: "/perfumes/bvlgari-the-imperial-banner.jpg",
    estiloImagen: "producto",
  },
  {
    cat: "gastronomia",
    slug: "nano-cafe",
    nombre: "Nano Café",
    lugar: "Recoleta, Buenos Aires",
    tipo: "Café de especialidad",
    cocina: "Café de especialidad",
    desc: "Café de especialidad en Recoleta, con bebidas de autor y pastelería propia.",
    historia:
      "Nano Café tiene su local de Recoleta en Parera 173 (además de un segundo local en Arcos 1514, Belgrano). La carta no se limita al espresso: conviven bebidas de autor —como el naranjo otoñal, espresso con leche, naranja y cardamomo— con opciones sin café, sin gluten y sin lácteos, todas señalizadas en el menú. El espacio es minimalista e industrial: acero inoxidable, estanterías con los mismos granos que venden para llevar, y una barra de filtrados a la vista.",
    datosTecnicos: [
      { label: "Tipo", valor: "Café de especialidad" },
      { label: "Barrio", valor: "Recoleta" },
      { label: "Imprescindible", valor: "Flat white y croissant" },
    ],
    fuente: ["instagram.com/nano.feca"],
    enlaceOficial: "https://www.instagram.com/nano.feca/",
    enlaceMenu: "https://drive.google.com/drive/folders/14eb9AZrmZkBXUPp-8jwyxMf7PPw5lY0n",
    curador: "Lucas Banega",
    verificado: "29 de julio de 2026",
    verificadoISO: "2026-07-29",
    tono: "#D9D3C8",
    imagen: "/gastronomia/nano-cafe-croissant.jpg",
    imagenBanner: "/gastronomia/nano-cafe-croissant.jpg",
    galeria: [
      "/gastronomia/nano-cafe-barra.jpg",
      "/gastronomia/nano-cafe-estanteria.jpg",
    ],
  },
];

export const destacadoPorCategoria = (catSlug) =>
  OBJETOS.find((o) => o.cat === catSlug);

export const itemPorSlug = (catSlug, itemSlug) =>
  OBJETOS.find((o) => o.cat === catSlug && o.slug === itemSlug);
