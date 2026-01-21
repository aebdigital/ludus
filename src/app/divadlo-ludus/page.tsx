import Image from 'next/image';
import Button from '@/components/Button';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';

const programItems = [
  { date: '20. 12.', title: 'Snehová kráľovná', time: '18:00', venue: 'BlackBox' },
  { date: '22. 12.', title: 'Vianočná rozprávka', time: '17:00', venue: 'BlackBox' },
  { date: '10. 01.', title: 'Improvizačný večer', time: '19:00', venue: 'BlackBox' },
  { date: '15. 01.', title: 'Absolventské predstavenie', time: '18:00', venue: 'BlackBox' },
  { date: '25. 01.', title: 'Hosťujúce divadlo', time: '19:00', venue: 'BlackBox' },
  { date: '05. 02.', title: 'Detské predstavenie', time: '10:00', venue: 'BlackBox' }
];

export default function DivadloLudusPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
        style={{ backgroundImage: "url('/images/divadlo-main.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1
          className="relative text-white text-[6rem] z-10 text-center max-md:text-[3rem]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Divadlo Ludus
        </h1>
      </section>

      <div className="w-[95%] mx-auto py-8">
        <div className="flex gap-16 items-start max-xl:flex-col mb-16">

          {/* Main Content Column */}
          <main className="flex-1 min-w-0 flex flex-col gap-16">

            {/* Intro Section */}
            <div className="grid grid-cols-2 gap-16 items-center max-md:grid-cols-1">
              <div>
                <h2 className="leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  O divadle
                </h2>
                <p className="text-[#444]">
                  Divadlo Ludus je profesionálna divadelná scéna zameraná na autorské a experimentálne divadlo.
                  Naše predstavenia kombinujú tradičné divadelné postupy s modernými formami. Ponúkame
                  priestory na prenájom pre kultúrne podujatia, workshopy a firemné akcie.
                </p>
              </div>
              <Image
                src="/images/divadlo-main.jpg"
                alt="Divadlo Ludus"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover rounded-xl shadow-lg max-md:order-first"
              />
            </div>

            {/* Program Section */}
            <div className="bg-black text-white rounded-xl p-12">
              <h2
                className="text-[3rem] mb-8 text-white text-center"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Divadelný Program
              </h2>
              <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
                {programItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-6 p-6 bg-white/10 rounded-xl transition-colors duration-300 hover:bg-white/15"
                  >
                    <span
                      className="text-[2rem] font-bold min-w-[80px] text-[#ffd37c]"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {item.date}
                    </span>
                    <div>
                      <h4 className="text-[1.3rem] text-white m-0" style={{ fontFamily: 'var(--font-body)' }}>
                        {item.title}
                      </h4>
                      <p className="text-base mt-1 mb-0 opacity-70 text-white">
                        {item.time} | {item.venue}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-3 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1">
              {[
                {
                  title: 'História',
                  description: 'História divadla Ludus',
                  href: '/divadlo-ludus/historia',
                  icon: '📜'
                },
                {
                  title: 'Repertoár',
                  description: 'Aktuálna ponuka predstavení',
                  href: '/divadlo-ludus/repertoar',
                  icon: '🎭'
                },
                {
                  title: 'Aktivity',
                  description: 'Divadelné aktivity a projekty',
                  href: '/divadlo-ludus/aktivity',
                  icon: '🎭'
                },
                {
                  title: 'Naše priestory',
                  description: 'BlackBox a ďalšie priestory',
                  href: '/divadlo-ludus/priestory',
                  icon: '🏛️'
                },
                {
                  title: 'Galéria',
                  description: 'Fotografie z predstavení',
                  href: '/divadlo-ludus/galeria',
                  icon: '📸'
                }
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="bg-white p-10 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.05)] text-center transition-all duration-300 border border-transparent hover:-translate-y-1 hover:border-[#ffd37c] no-underline"
                >
                  <span className="text-5xl mb-4 block">{item.icon}</span>
                  <h3
                    className="text-[1.8rem] mb-2 text-black"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-base text-[#666] m-0">{item.description}</p>
                </Link>
              ))}
            </div>

            {/* Reservation Info */}
            <div className="bg-white p-12 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <h2
                className="text-[2.5rem] mb-8 text-center"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Rezervácia vstupeniek
              </h2>
              <div className="grid grid-cols-2 gap-12 items-center max-md:grid-cols-1">
                <div>
                  <p className="text-[1.1rem] text-[#444] mb-6">
                    Vstupenky si môžete rezervovať telefonicky, emailom alebo osobne v pokladni divadla.
                    Online rezervácie sú k dispozícii pre vybrané predstavenia.
                  </p>
                  <ul className="list-none p-0">
                    {[
                      { label: 'Email', value: 'rezervacie@skolaludus.sk' },
                      { label: 'Telefón', value: '0905 543 282' },
                      { label: 'Pokladňa', value: 'Po-Pi: 14:00 - 18:00' }
                    ].map((item) => (
                      <li key={item.label} className="mb-3 text-[1.1rem]">
                        <strong>{item.label}:</strong> {item.value}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <Button href="/kontakt" className="text-xl px-12 py-4">
                    Rezervovať
                  </Button>
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
                  '/images/divadlo-main.jpg',
                  '/images/sculpture.jpg',
                  '/images/painting.jpg'
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
                <Button href="/divadlo-ludus/galeria">Zobraziť celú galériu</Button>
              </div>
            </div>

          </main>

          {/* Sidebar */}
          <Sidebar category="divadlo-ludus" />

        </div>
      </div>
    </>
  );
}
