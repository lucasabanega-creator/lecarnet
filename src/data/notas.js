export const NOTAS = [
  {
    slug:"richemont-crecer-y-conservar-margen", titulo:"Crecer y conservar el margen", categoria:"Estrategia", fecha:"4 de noviembre de 2026", fechaISO:"2026-11-04",
    bajada:"Los resultados de Richemont muestran por qué las ventas y la rentabilidad necesitan leerse juntas.",
    cuerpo:[
      "Richemont cerró su ejercicio a marzo de 2026 con un margen operativo del 30,5% en sus maisons de joyería. Las ventas del segmento crecieron un 8% a tipos de cambio corrientes y un 14% a tipos constantes.",
      "El margen, sin embargo, bajó desde el 31,9% del ejercicio anterior. El grupo señala el encarecimiento del oro y el efecto de las divisas entre las presiones sobre el resultado. Crecimiento y presión sobre la rentabilidad convivieron.",
      "La lectura de Casa Banega es que la cifra de ventas necesita contexto. Un margen alto aporta información sobre el negocio, pero no demuestra por sí solo poder de marca: también intervienen costos, mezcla de productos y estructura de distribución.",
      "Para evaluar una decisión comercial conviene seguir ambas variables en el tiempo. Vender más y conservar el valor capturado son objetivos relacionados, con resultados que deben comprobarse por separado."
    ],
    fuentes:[{nombre:"Richemont · Resultados del ejercicio cerrado el 31 de marzo de 2026",url:"https://www.richemont.com/news-media/press-releases-news/richemont-delivers-strong-sales-growth-and-solid-results-for-the-year-ended-31-march-2026/"}]
  },
  {
    slug:"hermes-vitrina-como-relato", titulo:"La vitrina como relato", categoria:"Espacios", fecha:"4 de noviembre de 2026", fechaISO:"2026-11-04",
    bajada:"El trabajo de Leïla Menchari en Hermès permite pensar el espacio comercial como una forma de narración.",
    cuerpo:[
      "Leïla Menchari se incorporó al equipo de decoración de Hermès en 1961. Desde 1978 estuvo a cargo de las vitrinas del Faubourg Saint-Honoré, una labor que continuó hasta 2013, según la historia publicada por la casa.",
      "Hermès recuerda esas composiciones por su capacidad de despertar curiosidad y abrir mundos imaginarios. En 2017, una exposición en el Grand Palais llevó su trabajo a un público más amplio que el de la tienda.",
      "La lectura de Casa Banega parte de esa continuidad: un espacio puede dar forma al universo de una marca antes de que el visitante examine un producto. Materiales, color y composición construyen una expectativa.",
      "El criterio para evaluar una vitrina debería incluir qué relato sostiene y cómo se relaciona con la experiencia interior. Una escenografía llamativa puede atraer atención; su contribución a la marca depende de la coherencia con lo que sucede después."
    ],
    fuentes:[{nombre:"Hermès · Seis generaciones de artesanos",url:"https://www.hermes.com/be/fr/content/235056-six-generations-d-artisan/"},{nombre:"Hermès · Comunicado sobre Leïla Menchari, 5 de abril de 2020",url:"https://assets-finance.hermes.com/s3fs-public/node/pdf_file/2020-06/hermes_20200405_lmenchari_en.pdf"}]
  },
  {
    slug:"bvlgari-del-hotel-al-objeto", titulo:"Del hotel al objeto", categoria:"Experiencia de marca", fecha:"4 de noviembre de 2026", fechaISO:"2026-11-04",
    bajada:"Thé Impérial conecta una experiencia de hospitalidad con un producto que puede continuar fuera de ella.", imagen:"/perfumes/bvlgari-the-imperial-banner.jpg",
    cuerpo:[
      "Thé Impérial fue creado por Jacques Cavallier en 2017 para Bvlgari Hotels & Resorts. En 2026 se incorporó a la colección Eau Parfumée, según la presentación oficial de la marca.",
      "El cambio permite observar una decisión de extensión de marca: una fragancia ligada a la hospitalidad pasa a formar parte de una colección disponible fuera de los hoteles. Su historia anterior acompaña al producto.",
      "La interpretación de Casa Banega es que ese origen ofrece un contexto de uso reconocible. Para quien conoce el hotel, el perfume puede remitir a una experiencia; para quien no lo conoce, la relación necesita ser explicada.",
      "La lección aplicable es considerar qué parte de una experiencia puede trasladarse a otro formato conservando su sentido. Esa continuidad debe construirse en el producto y en su presentación, además de contarse."
    ],
    fuentes:[{nombre:"Bvlgari · Eau Parfumée Thé Impérial",url:"https://www.bulgari.com/en-us/product/EAU-PARFUMEE-THE-IMPERIAL"}],
    relacionado:"/perfumes/eau-parfumee-the-imperial"
  }
];
export const notaPorSlug=slug=>NOTAS.find(n=>n.slug===slug);
