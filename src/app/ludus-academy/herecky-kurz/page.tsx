import Image from 'next/image';
import Button from '@/components/Button';

export default function HereckyKurzPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
        style={{ backgroundImage: "url('/images/academy/IMG_1128.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1
          className="relative text-white text-[6rem] z-10 text-center max-md:text-[3rem]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Herecký kurz
        </h1>
      </section>

      <div className="w-[95%] mx-auto py-8">
        <div className="grid grid-cols-[1fr_350px] gap-12 items-start max-lg:grid-cols-1">
          {/* Main Content */}
          <div>
            {/* Intro */}
            <div className="grid grid-cols-2 gap-16 items-center mb-16 max-md:grid-cols-1">
              <div>
                <h2 className="leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  O kurze
                </h2>
                <p className="text-[#444]">
                  Herecký kurz je určený pre začiatočníkov aj mierne pokročilých záujemcov o herectvo.
                  Počas kurzu sa naučíte základy hereckého umenia, prácu s telom, hlasom a emóciami.
                  Kurz vedie skúsený pedagóg s dlhoročnou praxou v profesionálnom divadle.
                </p>
              </div>
              <Image
                src="/images/academy/IMG_1323.jpeg"
                alt="Herecký kurz"
                width={500}
                height={350}
                className="w-full h-[350px] object-cover rounded-xl shadow-lg max-md:order-first"
              />
            </div>

            {/* Course Details */}
            <div className="bg-white p-12 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] mb-12">
              <h3
                className="text-[2rem] mb-6 border-b-2 border-[#ffd37c] pb-2 inline-block"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Čo sa naučíte
              </h3>
              <ul className="list-none p-0 grid grid-cols-2 gap-4 max-md:grid-cols-1">
                {[
                  'Základy herecký techniky',
                  'Práca s hlasom a dikciou',
                  'Pohybové a fyzické divadlo',
                  'Improvizačné techniky',
                  'Práca s textom',
                  'Budovanie postavy',
                  'Práca s emóciami',
                  'Javiskový prejav'
                ].map((item) => (
                  <li
                    key={item}
                    className="relative pl-8 text-[1.1rem] text-[#444] before:content-['•'] before:text-[#ffd37c] before:font-bold before:text-xl before:absolute before:left-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
              <div className="bg-white p-8 rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.05)]">
                <h3
                  className="text-[2rem] mb-4 border-b-2 border-[#ffd37c] pb-2 inline-block"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Termíny
                </h3>
                <p className="text-[1.1rem] text-[#555] mb-2">
                  <strong>Deň:</strong> Každý utorok
                </p>
                <p className="text-[1.1rem] text-[#555] mb-2">
                  <strong>Čas:</strong> 18:00 - 20:30
                </p>
                <p className="text-[1.1rem] text-[#555]">
                  <strong>Trvanie:</strong> 10 týždňov
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.05)]">
                <h3
                  className="text-[2rem] mb-4 border-b-2 border-[#ffd37c] pb-2 inline-block"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Cena
                </h3>
                <span
                  className="text-[2.5rem] text-[#ffd37c] font-extrabold block my-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  250€
                </span>
                <p className="text-[1.1rem] text-[#555]">
                  Cena zahŕňa všetky materiály a prístup na záverečné predstavenie.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="sticky top-[100px] bg-white rounded-xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <h3
              className="text-[1.5rem] mb-4 pb-3 border-b-2 border-[#ffd37c]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Kurzy
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                { name: 'Herecký kurz', href: '/ludus-academy/herecky-kurz', active: true },
                { name: 'Herecký kurz - Pokročilí', href: '/ludus-academy/herecky-kurz-pokrocili', active: false },
                { name: 'Improvizácia', href: '/ludus-academy/improvizacia', active: false },
                { name: 'Divadelné laboratórium', href: '/ludus-academy/divadelne-laboratorium', active: false },
                { name: 'Tvorivé písanie', href: '/ludus-academy/tvorive-pisanie', active: false },
                { name: 'Prezentačný tréning', href: '/ludus-academy/prezentacny-trening', active: false },
                { name: 'Audio kurz', href: '/ludus-academy/audio-kurz', active: false }
              ].map((course) => (
                <a
                  key={course.name}
                  href={course.href}
                  className={`py-2 px-3 rounded-lg transition-colors ${
                    course.active
                      ? 'bg-[#ffd37c] text-black font-bold'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {course.name}
                </a>
              ))}
            </nav>

            <h3
              className="text-[1.5rem] mt-8 mb-4 pb-3 border-b-2 border-[#ffd37c]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Workshopy
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                { name: 'Workshopy pre školy', href: '/ludus-academy/workshopy-skoly' },
                { name: 'Workshop pre učiteľov', href: '/ludus-academy/workshop-ucitelia' },
                { name: 'Workshop kreativita', href: '/ludus-academy/workshop-kreativita' }
              ].map((workshop) => (
                <a
                  key={workshop.name}
                  href={workshop.href}
                  className="py-2 px-3 rounded-lg transition-colors hover:bg-gray-100"
                >
                  {workshop.name}
                </a>
              ))}
            </nav>

            <Button href="/kontakt" className="w-full mt-8">
              Prihlásiť sa
            </Button>
          </aside>
        </div>
      </div>
    </>
  );
}
