export interface NavLink {
  name: string;
  url: string;
  image: string;
}

export interface NavCategory {
  title: string;
  url: string;
  image: string;
  links: NavLink[];
}

export const menuData: NavCategory[] = [
  {
    title: "Škola Ludus",
    url: "/skola-ludus",
    image: "/images/skola-main.webp",
    links: [
      { name: "O nás", url: "/skola-ludus", image: "/images/skola-main.webp" },
      { name: "História", url: "/historia", image: "/images/skola/IMG_2993.webp" },
      { name: "Program", url: "/program?category=skola-ludus", image: "/images/skola/IMG_1821.webp" },
      { name: "Prihláška", url: "/skola-ludus/prihlaska", image: "/images/skola/IMG_9976.webp" },
      { name: "Školné", url: "/skola-ludus/skolne", image: "/images/skola/IMG_1875.webp" },
      { name: "Pedagógovia", url: "/skola-ludus/pedagogovia", image: "/images/o-nas/katarina-baranova.webp" },
      { name: "Výučba", url: "/skola-ludus/vyucba", image: "/images/skola/IMG_3487.webp" },
      { name: "2% z dane", url: "/skola-ludus/2-percenta", image: "/images/skola/IMG_4346.webp" },
      { name: "Galéria", url: "/skola-ludus/galeria", image: "/images/skola/IMG_4346.webp" }
    ]
  },
  {
    title: "Divadlo Ludus",
    url: "/divadlo-ludus",
    image: "/images/divadlo-main.webp",
    links: [
      { name: "O nás", url: "/divadlo-ludus", image: "/images/divadlo-main.webp" },
      { name: "História", url: "/historia", image: "/images/divadlo-main.webp" },
      { name: "Program", url: "/program?category=divadlo-ludus", image: "/images/divadlo-main.webp" },
      { name: "Repertoár", url: "/divadlo-ludus/repertoar", image: "/images/divadlo-main.webp" },
      { name: "Aktivity", url: "/divadlo-ludus/aktivity", image: "/images/divadlo-main.webp" },
      { name: "Naše priestory", url: "/divadlo-ludus/priestory", image: "/images/divadlo-main.webp" },
      { name: "2% z dane", url: "/divadlo-ludus/2-percenta", image: "/images/divadlo-main.webp" },
      { name: "Galéria", url: "/divadlo-ludus/galeria", image: "/images/divadlo-main.webp" }
    ]
  },
  {
    title: "Ludus Academy",
    url: "/ludus-academy",
    image: "/images/academy-main-new.webp",
    links: [
      { name: "O nás", url: "/ludus-academy", image: "/images/academy-main-new.webp" },
      { name: "Kniha a Ebook", url: "/ludus-academy/kniha", image: "/images/kniha/kniha-main left.webp" },
      { name: "Program", url: "/program?category=ludus-academy", image: "/images/academy/IMG_4194.webp" },
      { name: "Kurzy", url: "/ludus-academy/herecky-kurz", image: "/images/academy/IMG_3649.webp" },
      { name: "Workshopy", url: "/ludus-academy/workshopy-skoly", image: "/images/academy/IMG_9005.webp" },
      { name: "Workshopy pre firmy", url: "/ludus-academy/firemny-timbilding", image: "/images/academy/IMG_4216.webp" },
      { name: "Lektori", url: "/ludus-academy/lektori", image: "/images/academy/IMG_1128.webp" },
      { name: "Blog", url: "/ludus-academy/blog", image: "/images/academy/IMG_9026.webp" },
      { name: "Galéria", url: "/ludus-academy/galeria", image: "/images/academy/IMG_1318.webp" }
    ]
  },
  {
    title: "Ludus Tábor",
    url: "/ludus-tabor",
    image: "/images/tabor/IMG_5438.webp",
    links: [
      { name: "O tábore", url: "/ludus-tabor", image: "/images/tabor/IMG_5438.webp" },
      { name: "Galéria", url: "/ludus-tabor/galeria", image: "/images/tabor/IMG_5330.webp" }
    ]
  },
  {
    title: "Program",
    url: "/program",
    image: "/images/painting.webp",
    links: [
      { name: "Škola Ludus", url: "/program?category=skola-ludus", image: "/images/skola-main.webp" },
      { name: "Divadlo Ludus", url: "/program?category=divadlo-ludus", image: "/images/divadlo-main.webp" },
      { name: "Ludus Academy", url: "/program?category=ludus-academy", image: "/images/academy-main-new.webp" }
    ]
  }
];

export const academyLinks = [
  { name: "O nás", url: "/ludus-academy" },
  { name: "Kniha a Ebook", url: "/ludus-academy/kniha" },
  { name: "Program", url: "/program?category=ludus-academy" },
  { name: "Kurzy", url: "/ludus-academy/herecky-kurz" },
  { name: "Workshopy", url: "/ludus-academy/workshopy-skoly" },
  { name: "Workshopy pre firmy", url: "/ludus-academy/firemny-timbilding" },
  { name: "Lektori", url: "/ludus-academy/lektori" },
  { name: "Blog", url: "/ludus-academy/blog" },
  { name: "Galéria", url: "/ludus-academy/galeria" }
];

export const schoolLinks = [
  { name: "O nás", url: "/skola-ludus" },
  { name: "História", url: "/historia" },
  { name: "Program", url: "/program?category=skola-ludus" },
  { name: "Prihláška", url: "/skola-ludus/prihlaska" },
  { name: "Školné", url: "/skola-ludus/skolne" },
  { name: "Pedagógovia", url: "/skola-ludus/pedagogovia" },
  { name: "Výučba", url: "/skola-ludus/vyucba" },
  { name: "2% z dane", url: "/skola-ludus/2-percenta" },
  { name: "Kontakt", url: "/skola-ludus/kontakt" },
  { name: "Galéria", url: "/skola-ludus/galeria" }
];

export const theaterLinks = [
  { name: "O nás", url: "/divadlo-ludus" },
  { name: "História", url: "/historia" },
  { name: "Program", url: "/program?category=divadlo-ludus" },
  { name: "Repertoár", url: "/divadlo-ludus/repertoar" },
  { name: "Aktivity", url: "/divadlo-ludus/aktivity" },
  { name: "Naše priestory", url: "/divadlo-ludus/priestory" },
  { name: "2% z dane", url: "/divadlo-ludus/2-percenta" },
  { name: "Galéria", url: "/divadlo-ludus/galeria" }
];

export const campLinks = [
  { name: "O tábore", url: "/ludus-tabor" },
  { name: "Galéria", url: "/ludus-tabor/galeria" }
];

export const academyCategories = [
  {
    title: "Kurzy",
    links: [
      { name: "Herecký kurz", url: "/ludus-academy/herecky-kurz" },
      { name: "Improvizácia", url: "/ludus-academy/improvizacia" },
      { name: "Divadelé Laboratórium", url: "/ludus-academy/divadelne-laboratorium" },
      { name: "Kurz tvorivého písania", url: "/ludus-academy/tvorive-pisanie" }
    ]
  },
  {
    title: "Workshopy",
    links: [
      { name: "Workshopy pre školy", url: "/ludus-academy/workshopy-skoly" },
      { name: "Workshop pre učiteľov", url: "/ludus-academy/workshop-ucitelia" },
      { name: "Workshop kreatívneho myslenia", url: "/ludus-academy/workshop-kreativita" }
    ]
  },
  {
    title: "Workshopy pre firmy",
    links: [
      { name: "Kreatívny tímbilding", url: "/ludus-academy/firemny-timbilding" },
      { name: "Individuálne tréningy", url: "/ludus-academy/individualne-treningy" },
      { name: "Firemné workshopy", url: "/ludus-academy/firemny-workshop" }
    ]
  }
];
