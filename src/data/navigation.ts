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
    title: "Ludus Academy",
    url: "/ludus-academy",
    image: "/images/logo-academy-main.jpeg",
    links: [
      { name: "O nás", url: "/ludus-academy", image: "/images/sculpture.jpg" },
      { name: "Kniha", url: "/ludus-academy/kniha", image: "/images/kniha/ukazka1.png" },
      { name: "Kurzy", url: "/ludus-academy/herecky-kurz", image: "/images/painting.jpg" },
      { name: "Workshopy", url: "/ludus-academy/workshopy-skoly", image: "/images/kniha/kniha-hero.jpeg" },
      { name: "Tréningy pre firmy", url: "/ludus-academy/treningy-firmy", image: "/images/logo.jpg" },
      { name: "Pedagógovia", url: "/ludus-academy/pedagogovia", image: "/images/academy/IMG_1128.jpeg" },
      { name: "Blog", url: "/ludus-academy/blog", image: "/images/academy/IMG_9005.jpeg" },
      { name: "Galéria", url: "/ludus-academy/galeria", image: "/images/academy/IMG_1318.jpeg" }
    ]
  },
  {
    title: "Škola Ludus",
    url: "/skola-ludus",
    image: "/images/painting.jpg",
    links: [
      { name: "História", url: "/skola-ludus/historia", image: "/images/kniha/ukazka2.png" },
      { name: "Prihláška do SZUŠ", url: "/skola-ludus/prihlaska", image: "/images/kniha/kniha-hero.jpeg" },
      { name: "Školné", url: "/skola-ludus/skolne", image: "/images/sculpture.jpg" },
      { name: "Pedagógovia", url: "/skola-ludus/pedagogovia", image: "/images/o-nas/katarina-baranova.jpg" },
      { name: "Výučba", url: "/skola-ludus/vyucba", image: "/images/painting.jpg" },
      { name: "Galéria", url: "/skola-ludus/galeria", image: "/images/kniha/ukazka3.png" }
    ]
  },
  {
    title: "Divadlo Ludus",
    url: "/divadlo-ludus",
    image: "/images/divadlo-main.jpg",
    links: [
      { name: "História", url: "/divadlo-ludus/historia", image: "/images/kniha/ukazka1.png" },
      { name: "Repertoár", url: "/divadlo-ludus/repertoar", image: "/images/painting.jpg" },
      { name: "Aktivity", url: "/divadlo-ludus/aktivity", image: "/images/sculpture.jpg" },
      { name: "Naše priestory", url: "/divadlo-ludus/priestory", image: "/images/divadlo-main.jpg" },
      { name: "Galéria", url: "/divadlo-ludus/galeria", image: "/images/logo.jpg" }
    ]
  },
  {
    title: "Ludus Tábor",
    url: "/ludus-tabor",
    image: "/images/tabor-main.jpg",
    links: [
      { name: "O tábore", url: "/ludus-tabor", image: "/images/kniha/ukazka2.png" },
      { name: "Cena a prihlásanie", url: "/ludus-tabor", image: "/images/sculpture.jpg" },
      { name: "Galéria", url: "/ludus-tabor/galeria", image: "/images/tabor/IMG_5438.jpeg" }
    ]
  },
  {
    title: "Program",
    url: "/program",
    image: "/images/painting.jpg",
    links: [
      { name: "Škola Ludus", url: "/program?category=skola-ludus", image: "/images/skola-main.jpeg" },
      { name: "Ludus Academy", url: "/program?category=ludus-academy", image: "/images/academy-main-new.jpeg" },
      { name: "Divadlo Ludus", url: "/program?category=divadlo-ludus", image: "/images/divadlo-main.jpg" }
    ]
  }
];

export const academyLinks = [
  { name: "O nás", url: "/ludus-academy" },
  { name: "Kniha", url: "/ludus-academy/kniha" },
  { name: "Kurzy", url: "/ludus-academy/herecky-kurz" },
  { name: "Workshopy", url: "/ludus-academy/workshopy-skoly" },
  { name: "Tréningy pre firmy", url: "/ludus-academy/treningy-firmy" },
  { name: "Pedagógovia", url: "/ludus-academy/pedagogovia" },
  { name: "Blog", url: "/ludus-academy/blog" },
  { name: "Galéria", url: "/ludus-academy/galeria" }
];

export const schoolLinks = [
  { name: "História", url: "/skola-ludus/historia" },
  { name: "Prihláška do SZUŠ", url: "/skola-ludus/prihlaska" },
  { name: "Školné", url: "/skola-ludus/skolne" },
  { name: "Pedagógovia", url: "/skola-ludus/pedagogovia" },
  { name: "Výučba", url: "/skola-ludus/vyucba" },
  { name: "Galéria", url: "/skola-ludus/galeria" }
];

export const theaterLinks = [
  { name: "História", url: "/divadlo-ludus/historia" },
  { name: "Repertoár", url: "/divadlo-ludus/repertoar" },
  { name: "Aktivity", url: "/divadlo-ludus/aktivity" },
  { name: "Naše priestory", url: "/divadlo-ludus/priestory" },
  { name: "Galéria", url: "/divadlo-ludus/galeria" }
];

export const campLinks = [
  { name: "O tábore", url: "/ludus-tabor" },
  { name: "Cena a prihlásanie", url: "/ludus-tabor" },
  { name: "Galéria", url: "/ludus-tabor/galeria" }
];
