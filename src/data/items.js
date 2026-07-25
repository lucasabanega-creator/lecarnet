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
      "Casas de fragancias que tratan el perfume como autoría y no como campaña — se reconocen de cerca, no a la distancia.",
  },
};

export const OBJETOS = [
  // Experiencias
  {
    cat: "experiencias",
    nombre: "Fasano Las Piedras",
    lugar: "José Ignacio, Uruguay",
    desc: "Un hotel de campo sin cartel en el camino, y así lo prefieren.",
    nota: "El camino de tierra no tiene ningún cartel que indique que ahí hay un hotel. Se lo pregunté al recepcionista y me dijo que es a propósito: quien tiene que llegar, ya sabe cómo llegar. No hay televisión en las habitaciones ni wifi en el restaurante — solo el campo, las sierras a lo lejos y una piscina que nadie apura a usar.",
    tono: "#EDEAE3",
  },
  {
    cat: "experiencias",
    nombre: "Aman Venice",
    lugar: "Venecia, Italia",
    desc: "Un palazzo del siglo XVI sobre el Gran Canal que no tiene cartel en la puerta.",
    nota: "Se llega en lancha privada por un canal lateral, no por la entrada de agua principal donde pasan los turistas. En la puerta no hay ningún cartel con el nombre del hotel — si no sabés que estás en el lugar correcto, es porque no tenías que saberlo. Adentro, los frescos del techo son del siglo XVI y nadie te apura a mirarlos.",
    tono: "#E3DFD5",
  },
  {
    cat: "experiencias",
    nombre: "Awasi Patagonia",
    lugar: "Torres del Paine, Chile",
    desc: "Cada suite tiene su propio guía y su propio itinerario, sin nada compartido.",
    nota: "No hay una sola actividad grupal en todo el lodge. Cada villa tiene asignado un guía y un vehículo propio, así que tu día nunca se cruza con el de otro huésped a menos que quieras. La primera tarde pensé que era un exceso; para la tercera entendí que es la forma más honesta de hospitalidad: adaptarse a vos, no al grupo.",
    tono: "#E8E5DC",
  },
  {
    cat: "experiencias",
    nombre: "Chablé Yucatán",
    lugar: "Chocholá, México",
    desc: "Villas construidas alrededor de un cenote de diez mil años.",
    nota: "El spa está construido alrededor de un cenote real, con miles de años de agua quieta debajo. No hay música ambiente ni aromatizantes — el silencio del agua subterránea es, literalmente, el tratamiento. Fue la primera vez que entendí el lujo como ausencia de estímulo, no como acumulación de él.",
    tono: "#DFDBCF",
  },

  // Cafés
  {
    cat: "cafes",
    nombre: "Sant Ambroeus",
    lugar: "Milán / Nueva York",
    desc: "Una pasticceria milanesa de 1936 que en Nueva York sirve el mismo cappuccino.",
    nota: "Abrió en Milán en 1936 y cuando llegó a Nueva York décadas después no cambió una sola receta para adaptarse al público local. Piden el cappuccino en italiano aunque el mozo sea de Manhattan. Ese tipo de terquedad — negarse a traducirse — es la que más respeto en un lugar.",
    tono: "#F1EFE9",
  },
  {
    cat: "cafes",
    nombre: "Ralph's Coffee",
    lugar: "Dentro de las tiendas Ralph Lauren",
    desc: "Un café adentro de una tienda de ropa que nunca se siente una tienda de ropa.",
    nota: "Está dentro de la tienda insignia, pero cruzás una puerta y el ruido de la venta desaparece. Maderas oscuras, mozos de saco verde, una taza sin ningún logo visible salvo el escudo bordado en el delantal. Entendí ahí que el mejor branding es el que se nota solo si ya lo conocías de antes.",
    tono: "#EBE7DD",
  },
  {
    cat: "cafes",
    nombre: "Angelina",
    lugar: "Rue de Rivoli, París",
    desc: "El chocolate caliente que sirven desde 1903, en el mismo salón.",
    nota: "Piden el 'Chocolat l'Africain' desde hace más de cien años y la receta no cambió. Las mesas de mármol, los espejos, el mozo que no apura la cuenta — nada de eso está pensado para una foto, aunque termine en una igual. Es un lugar que existía antes de que alguien necesitara demostrar que estuvo ahí.",
    tono: "#E6E2D6",
  },
  {
    cat: "cafes",
    nombre: "Café Tortoni",
    lugar: "Avenida de Mayo, Buenos Aires",
    desc: "El café más antiguo de Buenos Aires, donde nadie interrumpe a nadie.",
    nota: "Abrió en 1858 y todavía tiene el mismo piso de madera crujiendo bajo las mesas de billar del fondo. Ahí se sentaba Borges, entre otros, a escribir sin que nadie le pidiera una foto. Volví varias veces solo a tomar un café con medialunas y a mirar cómo el lugar se sostiene sin necesitar reinventarse cada temporada.",
    tono: "#DEDACD",
  },

  // Perfumes
  {
    cat: "perfumes",
    nombre: "Santa Maria Novella",
    lugar: "Florencia, Italia",
    desc: "La misma fórmula desde el siglo XVII, en la farmacia que la inventó.",
    nota: "La farmacia de los frailes dominicos de Florencia sigue vendiendo las mismas aguas que formulaban en el siglo XVII para la corte de los Médici. No hay reformulación de temporada ni campaña de relanzamiento. El lujo silencioso, acá, es simplemente negarse a cambiar algo que ya funciona.",
    tono: "#EAE6DA",
  },
  {
    cat: "perfumes",
    nombre: "Frédéric Malle",
    lugar: "Editions de Parfums, París",
    desc: "Un frasco negro con el nombre del perfumista, no el de una marca.",
    nota: "En la etiqueta no dice el nombre de una casa de moda — dice el nombre del perfumista que lo creó, como si fuera un libro y no un producto. Fue de los primeros en tratar la perfumería como autoría individual en vez de identidad de marca. Elegir un perfume ahí se siente más parecido a elegir un autor que a elegir una fragancia.",
    tono: "#E1DDD0",
  },
  {
    cat: "perfumes",
    nombre: "Le Labo",
    lugar: "Nueva York",
    desc: "Un frasco que se prepara frente tuyo y sale con una etiqueta escrita a mano.",
    nota: "Piden el perfume y lo mezclan ahí mismo, frente al mostrador, y después pegan una etiqueta con la fecha y la ciudad donde se preparó. El frasco sale intencionalmente con un aspecto de laboratorio, sin ningún brillo. Es una manera de decir que lo que estás comprando es un proceso, no un empaque.",
    tono: "#EEEBE3",
  },
  {
    cat: "perfumes",
    nombre: "Diptyque",
    lugar: "Boulevard Saint-Germain, París",
    desc: "Un local en el Boulevard Saint-Germain que sigue siendo del tamaño de un local.",
    nota: "El primer local sigue en el mismo lugar del Boulevard Saint-Germain donde abrió en 1961, y el óvalo del logo es tan chico que hay que acercarse para leerlo. No hicieron falta vidrieras enormes ni una fachada nueva para convertirse en referencia. A veces el crecimiento más elegante es el que no se nota desde la vereda.",
    tono: "#E4E0D3",
  },
];

export const destacadoPorCategoria = (catSlug) =>
  OBJETOS.find((o) => o.cat === catSlug);
