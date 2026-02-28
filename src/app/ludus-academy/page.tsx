import Image from 'next/image';
import CourseCard from '@/components/CourseCard';
import Button from '@/components/Button';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import GalleryPreview from '@/components/GalleryPreview';

const courses = [
  {
    title: "HERECKÝ KURZ",
    description: <>Radosť <span className="text-[#f47f44]">sa</span> hrať.</>,
    href: "/ludus-academy/herecky-kurz",
    backgroundImage: "/images/academy/IMG_1128.webp"
  },
  {
    title: "IMPROVIZAČNÝ KURZ",
    description: <>Radosť <span className="text-[#f47f44]">si</span> improvizovať</>,
    href: "/ludus-academy/improvizacia",
    backgroundImage: "/images/academy/IMG_3649.webp"
  },
  {
    title: "DIVADELNÉ LABORATÓRIUM",
    description: <>Radosť <span className="text-[#f47f44]">sa</span> umelecky realizovať</>,
    href: "/ludus-academy/divadelne-laboratorium",
    backgroundImage: "/images/academy/IMG_4194.webp"
  },
  {
    title: "KURZ TVORIVÉHO PÍSANIA",
    description: <>Radosť <span className="text-[#f47f44]">vedieť</span> písať</>,
    href: "/ludus-academy/tvorive-pisanie",
    backgroundImage: "/images/academy/IMG_4766.webp"
  }
];

const workshops = [
  {
    title: "WORKSHOPY PRE ŠKOLY",
    description: <>Radosť <span className="text-[#f47f44]">sa</span> spoznávať</>,
    href: "/ludus-academy/workshopy-skoly",
    backgroundImage: "/images/academy/IMG_9005.webp"
  },
  {
    title: "WORKSHOP PRE UČITEĽOV",
    description: <>Radosť <span className="text-[#f47f44]">sa</span> učiť</>,
    href: "/ludus-academy/workshop-ucitelia",
    backgroundImage: "/images/academy/IMG_9026.webp"
  },
  {
    title: "WORKSHOP KREATÍVNEHO MYSLENIA",
    description: <>Radosť <span className="text-[#f47f44]">si</span> tvoriť</>,
    href: "/ludus-academy/workshop-kreativita",
    backgroundImage: "/images/academy/IMG_9087.webp"
  }
];

// Placeholder content for new workshops - using generic images for now
const corporateWorkshops = [
  {
    title: "KREATÍVNY TÍMBILDING",
    description: <>Radosť <span className="text-[#f47f44]">spolu</span> pracovať</>,
    href: "/ludus-academy/firemny-timbilding",
    backgroundImage: "/images/academy/IMG_4216.webp"
  },
  {
    title: "INDIVIDUÁLNE TRÉNINGY",
    description: <>Radosť <span className="text-[#f47f44]">sa</span> rozvíjať</>,
    href: "/ludus-academy/individualne-treningy",
    backgroundImage: "/images/academy/IMG_9073.webp"
  },
  {
    title: "FIREMNÉ WORKSHOPY",
    description: <>Radosť <span className="text-[#f47f44]">spolu</span> objavovať</>,
    href: "/ludus-academy/firemny-workshop",
    backgroundImage: "/images/academy/IMG_3649.webp"
  }
];

export default function LudusAcademyPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
        style={{ backgroundImage: "url('/images/academy-main-new.webp')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1
          className="relative text-white text-[6rem] z-10 text-center max-md:text-[3rem]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Ludus Academy
        </h1>
      </section>

      <div className="w-[95%] mx-auto py-16">
        <div className="flex gap-16 items-start max-xl:flex-col">

          {/* Main Content Column */}
          <main className="flex-1 min-w-0">

            {/* Intro Section - O NÁS */}
            <div className="grid grid-cols-2 gap-12 items-start mb-16 max-md:grid-cols-1">
              <div className="flex flex-col justify-center">
                <h2 className="leading-tight mb-6 text-black" style={{ fontFamily: 'var(--font-heading)' }}>
                  O nás
                </h2>
                <div className="text-[#000] text-left space-y-4">
                  <p>
                    Vďaka viac ako 55 ročnej histórii divadla a školy Ludus a postupnými krôčikmi a vierou, že to, <strong className="font-extrabold text-black">čo a ako</strong> robíme má zmysel a hlbšie poslanie, sme sa stali silnou značkou v našom obore. Ludus bol a je odjakživa miestom, kde sa ľudia cítili slobodne, kde si našli priateľov, odkiaľ si odniesli množstvo zážitkov a kde sa naučili množstvo kreatívnych zručností formou <strong className="font-extrabold text-black">HRY</strong>, takže nemali ani pocit, že sa niečo učia. Možnosť učiť sa prostredníctvom <strong className="font-extrabold text-black">HRY</strong> a mať radosť z tvorby prinášame teraz aj dospelým a širšej verejnosti v podobe LUDUS ACADEMY.
                  </p>
                  <p>
                    Bude nám potešením sprevádzať vás na ceste vášho nielen umeleckého rastu.
                    Sme pripravení odovzdať vám maximum našich znalostí, zručností a skúsenosti.
                  </p>
                </div>
              </div>
              <Image
                src="/images/academy/IMG_1318.webp"
                alt="Ludus Academy"
                width={600}
                height={400}
                className="w-full h-[450px] object-cover rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.1)] max-md:order-first"
              />
            </div>

            {/* Colored Box below O NÁS */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 mb-16 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
              <p className="text-[1.1rem] text-black leading-relaxed text-center font-medium italic">
                Či už Vás láka herecké a divadelné prostredie, túžite sa zlepšiť v improvizačnom myslení a kreativite, chcete zlepšiť svoje prezentačné schopnosti, alebo len zmysluplne tráviť čas a rozvijať svoje kreatívne zručnosti, neexistuje dôvod, prečo by ste to nemohli zrealizovať. Robiť v živote to, čo nás baví a napĺňa je ten najkrajší dar. Vy sa rozhodnite, ktorý z kurzov a workshopov je vášmu srdcu najbližší a my vám pomôžeme naplniť vaše sny, plány a ciele.
              </p>
            </div>

            {/* Courses Section */}
            <h2
              className="text-center text-[3.5rem] mt-16 mb-8 text-black"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              KURZY pre dospelých
            </h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 mb-16">
              {courses.map((course) => (
                <CourseCard key={course.title} {...course} />
              ))}
            </div>

            {/* Workshops Section */}
            <h2
              className="text-center text-[3.5rem] mt-16 mb-8 text-black"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              WORKSHOPY pre dospelých
            </h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 mb-8">
              {workshops.map((workshop) => (
                <CourseCard key={workshop.title} {...workshop} />
              ))}
            </div>

            {/* Corporate Workshops Section */}
            <h3
              className="text-center text-[2.5rem] mt-12 mb-8 text-black border-t border-gray-100 pt-12"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              WORKSHOPY pre firmy a jednotlivcov
            </h3>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 mb-16">
              {corporateWorkshops.map((workshop) => (
                <CourseCard key={workshop.title} {...workshop} />
              ))}
            </div>

            {/* Vision & Values Section */}
            <div className="bg-white p-12 rounded-xl mt-16 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 max-md:p-8">
              <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-16">
                <div>
                  <h3
                    className="text-[2.5rem] mb-6 text-black relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[60px] after:h-1 after:bg-[#f47f44]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    NAŠA VÍZIA
                  </h3>
                  <p className="text-[1.1rem] text-[#000] mb-4">
                    Názov LUDUS pochádza z latinského slova a znamená v preklade hra, škola, ihrisko. Chceme prostredníctvom hry a tvorivosti inšpirovať, podnecovať a dať priestor vnímať veci inak. Chceme v dospelých ľuďoch podporiť ich kreativitu, spontánnosť, úprimnosť a radosť z hry.
                  </p>
                  <p className="text-[1.1rem] text-[#000] mb-4">
                    V každom z nás je totiž HOMO LUDENS, teda človek hravý, schopný činnosti iba pre radosť z činnosti samej.
                  </p>
                </div>
                <div>
                  <h3
                    className="text-[2.5rem] mb-6 text-black relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[60px] after:h-1 after:bg-[#f47f44]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    NAŠE HODNOTY
                  </h3>
                  <ul className="list-none p-0">
                    {[
                      'HRA ako základné umelecko – pedagogické východisko.',
                      'HRA ako krídla slobodného človeka.',
                      'HRA ako krídla fantázie.',
                      'HRA oslobodzujúca od všednosti, konvencie a nepravdy.',
                      'HRA ako kľúč k svetu a životu.',
                      'HRA ako prapodstata umeleckého prejavu a tvorby vôbec.'
                    ].map((value, i) => (
                      <li
                        key={i}
                        className="relative pl-8 mb-4 text-[1.1rem] text-[#000] before:content-['•'] before:text-[#f47f44] before:font-bold before:text-[1.5rem] before:absolute before:left-0 before:-top-1"
                      >
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Gallery Preview */}
            <GalleryPreview category="ludus-academy" href="/ludus-academy/galeria" />

          </main>

          {/* Sidebar Column */}
          <Sidebar category="ludus-academy" />

        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-[#07793f] p-10 text-center rounded-t-xl">
        <h2 className="text-center mb-4 !text-white" style={{ fontFamily: 'var(--font-heading)' }}>
          Máte záujem?
        </h2>
        <p className="mb-8 opacity-80 text-white">
          Kontaktujte nás pre viac informácií o kurzoch a termínoch.
        </p>
        <Button href="/ludus-academy/kontakt" className="!bg-black !text-white hover:!bg-gray-800">
          Kontaktovať
        </Button>
      </section>
    </div>
  );
}
