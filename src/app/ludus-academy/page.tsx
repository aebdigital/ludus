import Image from 'next/image';
import CourseCard from '@/components/CourseCard';
import Button from '@/components/Button';
import Sidebar from '@/components/Sidebar';

const courses = [
  {
    title: "Herecký kurz",
    description: "Základy hereckého umenia",
    href: "/ludus-academy/herecky-kurz",
    backgroundImage: "/images/academy/IMG_1128.jpeg"
  },
  {
    title: "Herecký kurz - Pokročilí",
    description: "Pre skúsených hercov",
    href: "/ludus-academy/herecky-kurz-pokrocili",
    backgroundImage: "/images/academy/IMG_1323.jpeg"
  },
  {
    title: "Improvizácia",
    description: "Radosť si improvizovať",
    href: "/ludus-academy/improvizacia",
    backgroundImage: "/images/academy/IMG_3649.jpeg"
  },
  {
    title: "Divadelné laboratórium",
    description: "Experimentálne divadlo",
    href: "/ludus-academy/divadelne-laboratorium",
    backgroundImage: "/images/academy/IMG_4194.jpeg"
  },
  {
    title: "Tvorivé písanie",
    description: "Umenie písaného slova",
    href: "/ludus-academy/tvorive-pisanie",
    backgroundImage: "/images/academy/IMG_4766.jpeg"
  }
];

const workshops = [
  {
    title: "Workshopy pre školy",
    description: "Program pre študentov",
    href: "/ludus-academy/workshopy-skoly",
    backgroundImage: "/images/academy/IMG_9005.jpeg"
  },
  {
    title: "Workshop pre učiteľov",
    description: "Dramatická výchova",
    href: "/ludus-academy/workshop-ucitelia",
    backgroundImage: "/images/academy/IMG_9026.jpeg"
  },
  {
    title: "Workshop kreativita",
    description: "Tvorivé myslenie",
    href: "/ludus-academy/workshop-kreativita",
    backgroundImage: "/images/academy/IMG_9087.jpeg"
  }
];

export default function LudusAcademyPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
        style={{ backgroundImage: "url('/images/academy-main-new.jpeg')" }}
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

            {/* Intro Section */}
            <div className="grid grid-cols-2 gap-12 items-center mb-16 max-md:grid-cols-1">
              <div className="flex flex-col justify-center">
                <h2 className="leading-tight mb-6 text-black" style={{ fontFamily: 'var(--font-heading)' }}>
                  O nás
                </h2>
                <p className="text-[#444] text-left">
                  Ludus Academy je vzdelávací program pre dospelých a pokročilých záujemcov o divadlo.
                  Ponúkame profesionálne vedené kurzy herectva, improvizácie, tvorivého písania a ďalších
                  divadelných disciplín. Naším cieľom je rozvíjať kreativitu a umelecký potenciál každého účastníka.
                </p>
              </div>
              <Image
                src="/images/academy/IMG_1318.jpeg"
                alt="Ludus Academy"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.1)] max-md:order-first"
              />
            </div>

            {/* Courses Section */}
            <h2
              className="text-center text-[3.5rem] mt-16 mb-8 text-black"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Kurzy
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
              Workshopy
            </h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 mb-16">
              {workshops.map((workshop) => (
                <CourseCard key={workshop.title} {...workshop} />
              ))}
            </div>

            {/* Mission Section */}
            <div className="bg-white p-12 rounded-xl mt-16 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 max-md:p-8">
              <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-16">
                <div>
                  <h3
                    className="text-[2.5rem] mb-6 text-black relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[60px] after:h-1 after:bg-[#ffd37c]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Naše poslanie
                  </h3>
                  <p className="text-[1.1rem] text-[#444] mb-4">
                    Veríme, že divadlo je mocný nástroj osobného rozvoja. Naše kurzy sú navrhnuté tak,
                    aby účastníci získali nielen herecké zručnosti, ale aj sebavedomie, kreativitu a
                    schopnosť komunikovať.
                  </p>
                  <p className="text-[1.1rem] text-[#444] mb-4">
                    Každý kurz vedú skúsení profesionáli s dlhoročnými skúsenosťami z divadelnej praxe.
                  </p>
                </div>
                <div>
                  <h3
                    className="text-[2.5rem] mb-6 text-black relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[60px] after:h-1 after:bg-[#ffd37c]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Naše hodnoty
                  </h3>
                  <ul className="list-none p-0">
                    {['Kreativita', 'Profesionalita', 'Otvorenosť', 'Tímová spolupráca', 'Radosť z tvorby'].map((value) => (
                      <li
                        key={value}
                        className="relative pl-8 mb-4 text-[1.1rem] text-[#444] before:content-['•'] before:text-[#ffd37c] before:font-bold before:text-[1.5rem] before:absolute before:left-0 before:-top-1"
                      >
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Gallery Preview */}
            <div className="mt-16">
              <h2
                className="text-center text-[3.5rem] mb-8"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Galéria
              </h2>
              <div className="grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
                {[
                  '/images/academy/IMG_3649.jpeg',
                  '/images/academy/IMG_4216.jpeg',
                  '/images/academy/IMG_9073.jpeg'
                ].map((img, i) => (
                  <Image
                    key={i}
                    src={img}
                    alt={`Galéria ${i + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-[300px] object-cover rounded-xl transition-transform duration-300 hover:scale-[1.02]"
                  />
                ))}
              </div>
              <div className="text-center mt-8">
                <Button href="/ludus-academy/galeria">Zobraziť celú galériu</Button>
              </div>
            </div>

          </main>

          {/* Sidebar Column */}
          <Sidebar category="ludus-academy" />
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-black p-10 text-center rounded-t-xl">
        <h2 className="text-center mb-4 !text-white" style={{ fontFamily: 'var(--font-heading)' }}>
          Máte záujem?
        </h2>
        <p className="mb-8 opacity-80 text-white">
          Kontaktujte nás pre viac informácií o kurzoch a termínoch.
        </p>
        <Button href="/kontakt" className="bg-white text-black hover:bg-gray-100">
          Kontaktovať
        </Button>
      </section>
    </div>
  );
}
