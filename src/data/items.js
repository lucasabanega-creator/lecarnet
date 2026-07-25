export const CATEGORIAS = {
  experiencias: {
    slug: "experiencias",
    nombre: "Experiencias",
    singular: "Una experiencia",
    eyebrow: "Hospitalidad y viaje",
    intro:
      "Hoteles, refugios y lugares que entendieron que la mejor forma de recibir a alguien es no interrumpirlo.",
  },
  cafes: {
    slug: "cafes",
    nombre: "Cafés",
    singular: "Un café",
    eyebrow: "Salones, pastelerías y barras",
    intro:
      "Cafés que sostienen la misma receta y el mismo ritmo desde hace décadas, sin necesidad de reinventarse cada temporada.",
  },
  perfumes: {
    slug: "perfumes",
    nombre: "Perfumes",
    singular: "Un perfume",
    eyebrow: "Casas de perfumería",
    intro:
      "Fragancias verificadas, con su historia y su pirámide olfativa documentadas — sin relatos inventados.",
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
    tono: "#E9E9E7",
    imagen: "/perfumes/bvlgari-the-imperial.png",
    estiloImagen: "producto",
  },
];

export const destacadoPorCategoria = (catSlug) =>
  OBJETOS.find((o) => o.cat === catSlug);

export const itemPorSlug = (catSlug, itemSlug) =>
  OBJETOS.find((o) => o.cat === catSlug && o.slug === itemSlug);
