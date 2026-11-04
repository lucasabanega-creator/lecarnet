import { RESENAS } from "./reviews";

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
      "Cafés, mesas y espacios de hospitalidad leídos a través de su propuesta y sus detalles.",
    imagenPortada: "/covers/gastronomia.jpg",
    filtroPor: "cocina",
  },
  perfumes: {
    slug: "perfumes",
    nombre: "Perfumes",
    singular: "Un perfume",
    eyebrow: "Casas de perfumería",
    intro:
      "Fragancias elegidas por su historia y por la relación entre producto y experiencia de marca.",
    imagenPortada: "/covers/perfumes.jpg",
    filtroPor: "marca",
  },
};

// Contenido en curaduría. Solo se publica lo que está verificado con fuentes reales.
export const OBJETOS = [
  ...RESENAS,
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
    porQueElegido:
      "La relación entre una firma olfativa de hotel y una colección de perfumes permite observar cómo una experiencia puede continuar en un objeto. La elección responde a esa decisión de marca; no constituye una prueba olfativa personal.",
    fuente: [{nombre:"Bvlgari · Presentación oficial de Thé Impérial",url:"https://www.bulgari.com/en-us/product/EAU-PARFUMEE-THE-IMPERIAL"},{nombre:"Bvlgari · Colección Eau Parfumée",url:"https://www.bulgari.com/es-es/perfumes/eau-parfumee"}],
    enlaceOficial: "https://www.bulgari.com/en-us/product/EAU-PARFUMEE-THE-IMPERIAL",
    metodo: "Investigación documental sobre fuentes oficiales de Bvlgari. No incluye una prueba personal de la fragancia.",
    publicadoISO: "2026-07-27",
    curador: "Lucas Banega",
    verificado: "4 de noviembre de 2026",
    verificadoISO: "2026-11-04",
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
      "Nano Café tiene su local de Recoleta en Parera 173 (además de un segundo local en Arcos 1514, Belgrano). La ficha original registra una carta con bebidas de autor y pastelería. Las opciones disponibles deben confirmarse en el menú vigente. El espacio es minimalista e industrial: acero inoxidable, estanterías con los mismos granos que venden para llevar, y una barra de filtrados a la vista.",
    datosTecnicos: [
      { label: "Tipo", valor: "Café de especialidad" },
      { label: "Barrio", valor: "Recoleta" },
      { label: "Dirección", valor: "Parera 173, Recoleta" },
    ],
    porQueElegido:
      "La selección se centra en cómo la carta y el espacio presentan la propuesta de un café de especialidad. La claridad de la información es parte de la experiencia de marca. Las opciones y condiciones actuales deben consultarse con el local.",
    fuente: [{nombre:"Nano Café · Canal oficial",url:"https://www.instagram.com/nano.feca/"},{nombre:"Carta enlazada en la ficha original",url:"https://drive.google.com/drive/folders/14eb9AZrmZkBXUPp-8jwyxMf7PPw5lY0n"}],
    metodo: "Ficha documental del 29 de julio de 2026. La carta y los datos operativos pueden cambiar; consultá el canal oficial antes de ir. No se registra una visita personal en esta ficha.",
    publicadoISO: "2026-07-29",
    mapa: "https://www.google.com/maps/search/?api=1&query=Nano+Caf%C3%A9+Parera+173+Buenos+Aires",
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
