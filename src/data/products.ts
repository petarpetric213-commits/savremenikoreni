export interface Product {
  id: number
  name: string
  category: 'torbice' | 'pleteno'
  image: string
  gallery?: string[]
  description: string
  shortDescription: string
  price: number
  featured?: boolean
}

const products: Array<Product> = [
  {
    id: 1,
    name: 'Pletena torba "Zemlja"',
    category: 'torbice',
    image: '/images/image_1.png',
    description:
      'Ručno pletena torba od prirodnih vlakana, inspirisana bojama jesenje zemlje. Svaki čvor je pletena priča, svaki detalj — posveta tradiciji. Idealna za svaki dan, nosi u sebi toplinu doma i suvremeni stil.',
    shortDescription: 'Ručno pletena torba od prirodnih vlakana — elegancija svakodnevice.',
    price: 5800,
    featured: true,
  },
  {
    id: 2,
    name: 'Torbica "Roze Mašna"',
    category: 'torbice',
    image: '/images/torba_roze.png',
    description:
      'Živopisna fuksija torbica sa elegantnom mašnom napred — ručno pletena od T-shirt konca, sa zlatnim lancem koji naglašava njen karakter. Boji koja zaustavlja poglede, ovaj komad donosi radost i stil svakodnevici. Nosi se kao clutch ili na ramenu.',
    shortDescription: 'Pletena fuksija torbica sa mašnom i zlatnim lancem — ženstvenost u svakom detalju.',
    price: 4800,
    featured: true,
  },
  {
    id: 3,
    name: 'Pletena torbica "Zlatna nit"',
    category: 'torbice',
    image: '/images/image_3.png',
    description:
      'Mala pletena torbica tkana tankim zlatnim nitima — savršen pratilac za večernje izlaske. Ručni rad koji pleni pažnju i ostavlja utisak. Kombinovana s klasičnom haljinom ili modernim outfitom jednako blistavo izgleda.',
    shortDescription: 'Minijaturna pletena torbica sa zlatnim nitima za posebne prilike.',
    price: 4200,
    featured: true,
  },
  {
    id: 4,
    name: 'Torba "Ručni Rad"',
    category: 'torbice',
    image: '/images/image_4.png',
    description:
      'Raskošna torba načinjena u celosti ručno, s pažljivo odabranim materijalima koji traju godinama. "Ručni Rad" je više od torbice — to je izjava o tome koliko cenite originalnost i veštinu.',
    shortDescription: 'Luksuzna ručno rađena torba od dugotrajnih prirodnih materijala.',
    price: 9800,
    featured: false,
  },
  {
    id: 5,
    name: 'Pleteni kaiševi "Koren"',
    category: 'pleteno',
    image: '/images/image_5.png',
    description:
      'Pleteni kaiševi izrađeni od čiste merino vune — mekani poput prvog prolećnog sunca. Dostupni u zemaljskim tonovima koji savršeno prate svaki garderobni izbor. Ručno rađeni s ljubavlju prema detalju.',
    shortDescription: 'Ručno pleteni kaiševi od čiste merino vune u zemaljskim tonovima.',
    price: 2400,
    featured: false,
  },
  {
    id: 6,
    name: 'Makrame torba "Šuma"',
    category: 'torbice',
    image: '/images/image_1781510798201073336.png',
    description:
      'Inspirisana gustim šumskim tkivom, ova makrame torba rađena je tehnikom starih majstorica. Svaki čvor drži priču o strpljenju, prirodi i lepoti koja ne prolazi. Prostrana i lakonska, savršena za more, park ili gradsku šetnju.',
    shortDescription: 'Makrame torba rađena ručno — nosi u sebi mir šume.',
    price: 6500,
    featured: true,
  },
  {
    id: 7,
    name: 'Pletena torba "Jesen"',
    category: 'pleteno',
    image: '/images/image_1781510798275151752.png',
    description:
      'Torba koja miriše na dim, listove i tople boje jeseni. Pletena od deblje vune u uzorku koji asocira na antičke motive, "Jesen" je savršena za hladnije mesece. Prostrana unutrašnjost skriva sve vaše tajne.',
    shortDescription: 'Pletena torba od deblje vune — za hladne dane pune stila.',
    price: 7200,
    featured: false,
  },
  {
    id: 8,
    name: 'Clutch "Elegancija"',
    category: 'torbice',
    image: '/images/image_1781510798335036627.png',
    description:
      'Luksuzan clutch od natural rafije sa diskretnim zlatnim šavovima. Svaki detalj je promišljen, svaki stich — savršen. Nose ga žene koje znaju da pravi stil ne viče, već šapuće.',
    shortDescription: 'Rafija clutch sa zlatnim šavovima — tihi luksuz za posebne trenutke.',
    price: 3600,
    featured: false,
  },
  {
    id: 9,
    name: 'Torba "Zelena dolina"',
    category: 'torbice',
    image: '/images/torba_zelena.png',
    description:
      'Pletena torba u jarko zelenoj boji sa zlatnim lancem — izrađena od T-shirt konca koji joj daje posebnu strukturu i čvrstoću. Smela, moderna i unikatna, ova torba priča priču o prirodi i eleganciji u jednom dahu.',
    shortDescription: 'Pletena zelena torba sa zlatnim lancem — moderna i upečatljiva.',
    price: 5500,
    featured: true,
  },
  {
    id: 10,
    name: 'Torbica "Biserna"',
    category: 'torbice',
    image: '/images/torba_biserna.png',
    description:
      'Nežna krem torbica u makrame tehnici sa zlatnim lancem — suptilna lepota koja se nosi uz sve. Svetla nijansa i otvorena tekstura daju joj letnji, vazdušasti karakter, dok zlatni lanci dodaju dozu luksuza.',
    shortDescription: 'Makrame torbica u krem boji sa zlatnim lancem — lagana elegancija.',
    price: 4200,
    featured: false,
  },
  {
    id: 11,
    name: 'Torba "Crna noć"',
    category: 'torbice',
    image: '/images/torba_crna.png',
    description:
      'Crna pletena torba sa zlatnim lancem i kopčom — spoj snage i sofisticiranosti. Gusta tekstura T-shirt konca daje joj volumen i karakter, dok zlatni detalji naglašavaju njen premium izgled. Savršena za svaku priliku.',
    shortDescription: 'Crna pletena torba sa zlatnom kopčom i lancem — bezvremenski šik.',
    price: 6200,
    featured: false,
  },
  {
    id: 12,
    name: 'Torba "Čokolada"',
    category: 'torbice',
    image: '/images/torba_braon.png',
    description:
      'Torba u toploj braon nijansi, tkana u gustom uzorku koji podstiče na dodir. Zlatni kaiš i metalni detalji daju joj savršen balans između casual i elegantnog stila. Prostrana i praktična — za ženu u pokretu.',
    shortDescription: 'Pletena braon torba sa zlatnim kaišem — toplina i stil u jednom.',
    price: 5800,
    featured: false,
  },
]

export default products
