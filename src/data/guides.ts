export interface GuideItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  note?: string;
}

export interface GuideContent {
  title: string;
  tagline: string;
  intro?: string;
  heroImage: string;
  items: GuideItem[];
}

export const architectureData: GuideContent = {
  title: 'Lugares que permanecen en la memoria',
  tagline: 'Arquitectura y Espacios',
  intro: 'Espacios donde la forma, la luz y el silencio se vuelven experiencia sensorial.',
  heroImage: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1600&auto=format&fit=crop',
  items: [
    {
      id: '1',
      title: 'Pabellón Mies van der Rohe',
      subtitle: 'Barcelona, España — 1929',
      description: 'Una obra maestra de la arquitectura moderna. La pureza de su geometría y el uso minimalista de materiales —cristal, acero y distintos tipos de mármol— crean un espacio de contemplación pura, donde el vacío se vuelve protagonista. Visitarlo es entender que menos, verdaderamente, puede ser más.',
      imageUrl: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=1200&auto=format&fit=crop',
      note: 'Arquitectura moderna · Mies van der Rohe',
    },
    {
      id: '2',
      title: 'Termas de Vals',
      subtitle: 'Graubünden, Suiza — 1996',
      description: 'Diseñadas por Peter Zumthor, estas termas emergen de la montaña como si siempre hubiesen estado allí. Una experiencia sensorial donde la piedra cuarcita, el agua, la luz y el sonido transforman el baño en un ritual arcaico. Zumthor llama a este proceso "el pensamiento con los materiales".',
      imageUrl: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop',
      note: 'Brutalismo suizo · Peter Zumthor',
    },
    {
      id: '3',
      title: 'Galería Nacional de Arte Moderno',
      subtitle: 'Roma, Italia — Viale delle Belle Arti',
      description: 'La GNAM es una de las colecciones más importantes de arte moderno en Italia. Su arquitectura neoclásica de principios del siglo XX contrasta con la modernidad de las obras que alberga —De Chirico, Klimt, Cézanne— creando una tensión productiva entre continente y contenido.',
      imageUrl: 'https://images.unsplash.com/photo-1532635241-17e820acc59f?q=80&w=1200&auto=format&fit=crop',
      note: 'Museo · Roma, Italia',
    },
    {
      id: '4',
      title: 'Casa Cavia',
      subtitle: 'Palermo, Buenos Aires',
      description: 'Una casa de principios del siglo XX convertida en espacio de cultura gastronómica y editorial. Su restaurante, librería y jardín interior proponen un modo de habitar el tiempo lento. Quizás el espacio más próximo al concepto de quiet luxury en Buenos Aires.',
      imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop',
      note: 'Buenos Aires · Cultura gastronómica',
    },
  ],
};

export const fragrancesData: GuideContent = {
  title: 'La arquitectura invisible de la presencia',
  tagline: 'Firma Olfattiva',
  intro: 'Perfumes que no se ven, pero que definen la atmósfera de un momento.',
  heroImage: 'https://images.unsplash.com/photo-1541643600914-78b084683702?q=80&w=1600&auto=format&fit=crop',
  items: [
    {
      id: '1',
      title: 'Terre d\'Hermès Parfum',
      subtitle: 'Hermès Paris — Jean-Claude Ellena',
      description: 'Una meditación sobre la tierra y el horizonte. La versión Parfum concentra la fougère mineral original en algo más oscuro y terroso: vetiver haitiano, benzoin, piel seca bajo el sol. Es un perfume que no anuncia su presencia —la instala.',
      imageUrl: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop',
      note: 'Fougère mineral · Hermès · 2009',
    },
    {
      id: '2',
      title: 'Brunello Cucinelli pour Homme',
      subtitle: 'Brunello Cucinelli — Alberto Morillas',
      description: 'El perfume que huele a la marca que lo porta: maderas nobles, cuero suave, lavanda discreta. Tiene la misma gramática visual de un jersey de cachemira en color topo. No intenta seducir —simplemente existe, con una seguridad callada que es la forma más alta de elegancia.',
      imageUrl: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=1200&auto=format&fit=crop',
      note: 'Quiet luxury olfativo · Alberto Morillas',
    },
    {
      id: '3',
      title: 'Xerjoff Naxos',
      subtitle: 'Xerjoff — Federico Unnia',
      description: 'Bautizado en honor a la isla griega de Naxos, es un oriental gourmand construido sobre miel, tabaco, lavanda y tonka que huele a mediterráneo cálido y refinado. Una firma olfativa que combina hedonismo italiano con rigor de composición. Deliberadamente irresistible.',
      imageUrl: 'https://images.unsplash.com/photo-1583467875263-d50c8e9f1f5c?q=80&w=1200&auto=format&fit=crop',
      note: 'Oriental gourmand · Xerjoff',
    },
    {
      id: '4',
      title: 'Hermès Oud Alezan',
      subtitle: 'Hermès Parfums — Christine Nagel',
      description: 'Del universo Hermessences, Oud Alezan reinterpreta el oud árabe con mirada francesa. El nombre alude al color del caballo castaño dorado —una textura visual que se vuelve olfativa. Un oud seco, amaderado, sin exceso de dulzor oriental. Austero y precioso a la vez.',
      imageUrl: 'https://images.unsplash.com/photo-1560570803-7b5b5e5b5c6e?q=80&w=1200&auto=format&fit=crop',
      note: 'Hermessences · Christine Nagel',
    },
  ],
};

export const cafesData: GuideContent = {
  title: 'Un ritual destilado en un solo momento',
  tagline: 'Cultura del Caffè',
  intro: 'Cafés y espacios para el pensamiento lento, la conversación sin prisa y el espresso sin concesiones.',
  heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1600&auto=format&fit=crop',
  items: [
    {
      id: '1',
      title: 'Lattente',
      subtitle: 'Recoleta, Buenos Aires',
      description: 'Pioneros del café de especialidad en Buenos Aires. Su enfoque purista invita a disfrutar del café sin distracciones. El blend de la casa, tostado meticulosamente, garantiza una taza brillante y equilibrada. El espacio —blanco, limpio, casi clínico— es él mismo una declaración de intenciones.',
      imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop',
      note: 'Café de especialidad · Recoleta',
    },
    {
      id: '2',
      title: 'Cuervo Café',
      subtitle: 'Palermo, Buenos Aires',
      description: 'Un refugio para amantes del café de especialidad con diseño interior que equilibra lo rústico y lo contemporáneo. Una de las mejores extracciones de la ciudad, acompañada de pastelería artesanal que entiende la proporción. La luz entra bien por las mañanas.',
      imageUrl: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1200&auto=format&fit=crop',
      note: 'Café de especialidad · Palermo',
    },
    {
      id: '3',
      title: 'Caffè Florian',
      subtitle: 'Piazza San Marco, Venezia — 1720',
      description: 'El café más antiguo de Italia y uno de los primeros del mundo. Fundado en 1720 bajo los arcos de la Procuratie Nuove, sus salones de espejos dorados y frescos al óleo son un monumento viviente. El cappuccino a nueve euros no es el punto —es la experiencia de sentarse donde lo hizo Casanova.',
      imageUrl: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1200&auto=format&fit=crop',
      note: 'Histórico · Venezia · Desde 1720',
    },
    {
      id: '4',
      title: 'Bar Basso',
      subtitle: 'Milano, Italia — Via Plinio',
      description: 'El bar milanés donde nació el Negroni Sbagliato —con prosecco en lugar de gin— y donde durante el Salone del Mobile se concentra la parte más interesante del mundo del diseño. De día, un bar de barrio perfecto. De noche, un salón de encuentros con la autenticidad que el lujo fabricado no puede comprar.',
      imageUrl: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1200&auto=format&fit=crop',
      note: 'Bar histórico · Milano · Negroni Sbagliato',
    },
  ],
};
