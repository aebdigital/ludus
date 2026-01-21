import Image from 'next/image';
import Button from '@/components/Button';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';

export default function SkolaLudusPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
        style={{ backgroundImage: "url('/images/skola-main.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1
          className="relative text-white text-[6rem] z-10 text-center max-md:text-[3rem]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Škola Ludus
        </h1>
      </section>

      <div className="w-[95%] mx-auto py-8">
        <div className="flex gap-16 items-start max-xl:flex-col">
          <main className="flex-1 min-w-0">
            {/* Intro Section */}
            <div className="grid grid-cols-2 gap-16 items-center mb-16 max-md:grid-cols-1">
              <div>
                <h2 className="leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  O škole
                </h2>
                <p className="text-[#444]">
                  Súkromná základná umelecká škola LUDUS ponúka kvalitné umelecké vzdelávanie v oblasti
                  dramatického umenia. Naša škola vychováva mladých umelcov od roku 1990 a je akreditovaná
                  Ministerstvom školstva SR. Poskytujeme individuálny prístup a profesionálne vedenie.
                </p>
              </div>
              <Image
                src="/images/skola/IMG_2993.jpeg"
                alt="Škola Ludus"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover rounded-xl shadow-lg max-md:order-first"
              />
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-4 gap-8 mb-16 max-md:grid-cols-2 max-sm:grid-cols-1">
              {[
                { title: 'História', href: '/skola-ludus/historia', icon: '📜' },
                { title: 'Prihláška', href: '/skola-ludus/prihlaska', icon: '📝' },
                { title: 'Školné', href: '/skola-ludus/skolne', icon: '💰' },
                { title: 'Výučba', href: '/skola-ludus/vyucba', icon: '🎭' }
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="bg-white p-8 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.05)] text-center transition-all duration-300 border border-transparent hover:-translate-y-1 hover:border-[#ffd37c] no-underline"
                >
                  <span className="text-4xl mb-4 block">{item.icon}</span>
                  <h3
                    className="text-[1.5rem] mb-0 text-black"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {item.title}
                  </h3>
                </Link>
              ))}
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-16 max-md:grid-cols-1">
              <div className="bg-white p-12 rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.05)]">
                <h3
                  className="text-[2rem] mb-6 border-b-2 border-[#ffd37c] pb-2 inline-block"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Čo ponúkame
                </h3>
                <ul className="list-none p-0">
                  {[
                    'Dramatický odbor pre deti a mládež',
                    'Individuálny prístup',
                    'Profesionálni pedagógovia',
                    'Moderné priestory',
                    'Vystúpenia a súťaže',
                    'Medzinárodné projekty'
                  ].map((item) => (
                    <li
                      key={item}
                      className="relative pl-8 mb-4 text-[1.1rem] text-[#444] before:content-['•'] before:text-[#ffd37c] before:font-bold before:text-xl before:absolute before:left-0"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-12 rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.05)]">
                <h3
                  className="text-[2rem] mb-6 border-b-2 border-[#ffd37c] pb-2 inline-block"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Pre koho je škola určená
                </h3>
                <p className="text-[1.1rem] text-[#444] mb-4">
                  Naša škola prijíma žiakov od 5 rokov. Vyučujeme:
                </p>
                <ul className="list-none p-0">
                  {[
                    'Prípravné štúdium (5-6 rokov)',
                    'Základné štúdium I. stupeň (7-14 rokov)',
                    'Základné štúdium II. stupeň (14-18 rokov)',
                    'Štúdium pre dospelých (18+ rokov)'
                  ].map((item) => (
                    <li
                      key={item}
                      className="relative pl-8 mb-4 text-[1.1rem] text-[#444] before:content-['•'] before:text-[#ffd37c] before:font-bold before:text-xl before:absolute before:left-0"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
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
                  '/images/skola/IMG_0013.jpeg',
                  '/images/skola/IMG_1789.jpeg',
                  '/images/skola/IMG_1875.jpeg'
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
                <Button href="/skola-ludus/galeria">Zobraziť celú galériu</Button>
              </div>
            </div>
          </main>

          <Sidebar category="skola-ludus" />
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-black py-10 text-center mt-16">
        <h2 className="text-center mb-4 text-white" style={{ fontFamily: 'var(--font-heading)' }}>
          Prihláste sa
        </h2>
        <p className="mb-8 opacity-80 text-white">
          Otvárame zápis na nový školský rok. Neváhajte a prihláste sa ešte dnes!
        </p>
        <Button href="/skola-ludus/prihlaska" className="bg-white text-black hover:bg-gray-100">
          Prihláška
        </Button>
      </section>
    </>
  );
}
