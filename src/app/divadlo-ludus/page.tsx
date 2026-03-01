import Image from 'next/image';
import Button from '@/components/Button';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import { getProgramEvents } from '@/lib/api';

export const revalidate = 60;

function formatEventDate(dateStr: string): string {
  const date = new Date(dateStr);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  return `${day}. ${month}.`;
}

export default async function DivadloLudusPage() {
  const events = await getProgramEvents('divadlo-ludus', true);
  return (
    <>
      {/* Hero */}
      <section
        className="h-[40vh] max-md:h-[20vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
        style={{ backgroundImage: "url('/images/divadlo-main.webp')" }}
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

            {/* Intro Section - O NÁS */}
            <div className="grid grid-cols-2 gap-12 items-start max-md:grid-cols-1">
              <div className="flex flex-col justify-center">
                <h2 className="leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  O nás
                </h2>
                <div className="text-[#000] text-left space-y-4">
                  <p>
                    V roku 2025 zaniklo profesionálne divadlo LUDUS v pôsobnosti BSK a spolu s ním aj názov "Divadlo LUDUS".
                  </p>
                  <p>
                    V roku 2026 vzniká občianske združenie Divadlo LUDUS, ktoré je v úzkom prepojení so školou Ludus.
                    Jeho prvým cieľom je obnoviť činnosť divadla pod zaužívaným názvom. Vraciame sa tým k pôvodnej
                    myšlienke zakladateľov, že divadlo a škola tvoria jeden živý celok, v ktorom mladí tvoria pre mladých.
                  </p>
                  <p>
                    Sú v spojené nádoby, kde sa mladí ľudia inšpirujú od profesionálov a naopak. Prichádza tak k iniciačnému
                    momentu, ktorý vždy bol a stále je pre LUDUS dôležitý.
                  </p>
                </div>
              </div>
              <Image
                src="/images/divadlo-main.webp"
                alt="Divadlo Ludus"
                width={600}
                height={400}
                className="w-full h-[450px] object-cover rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.1)] max-md:order-first"
              />
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] font-bold text-center text-xl text-black">
              História Ludusu sa nekončí. Naopak - pokračuje ďalej v novej podobe.
            </div>


            {/* Program Section */}
            {events.length > 0 && (
              <div className="bg-black text-white rounded-xl p-12">
                <h2
                  className="text-[3rem] mb-8 text-white text-center"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Divadelný Program
                </h2>
                <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
                  {events.map((event) => (
                    <Link
                      key={event.id}
                      href={`/program/${event.slug}`}
                      className="flex items-center gap-6 p-6 bg-white/10 rounded-xl transition-colors duration-300 hover:bg-white/15 no-underline"
                    >
                      <span
                        className="text-[2rem] font-bold min-w-[80px] text-[#f47f44]"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {formatEventDate(event.event_date)}
                      </span>
                      <div>
                        <h4 className="text-[1.3rem] text-white m-0" style={{ fontFamily: 'var(--font-body)' }}>
                          {event.title}
                        </h4>
                        <p className="text-base mt-1 mb-0 opacity-70 text-white">
                          {event.time} | {event.venue}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Link href="/program?category=divadlo-ludus" className="text-[#f47f44] font-bold hover:underline no-underline">
                    Zobraziť celý program →
                  </Link>
                </div>
              </div>
            )}

            {/* Quick Links */}
            <div className="grid grid-cols-4 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1">
              {[
                {
                  title: 'História',
                  description: 'História divadla Ludus',
                  href: '/historia',
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
                }
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="bg-white p-10 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.05)] text-center transition-all duration-300 border border-transparent hover:-translate-y-1 hover:border-[#f47f44] no-underline"
                >
                  <span className="text-5xl mb-4 block">{item.icon}</span>
                  <h3
                    className="text-[1.8rem] mb-2 text-black"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-base text-[#000] m-0">{item.description}</p>
                </Link>
              ))}
            </div>

          </main>

          {/* Sidebar */}
          <Sidebar category="divadlo-ludus" />

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
        <Button href="/divadlo-ludus/kontakt" className="!bg-black !text-white hover:!bg-gray-800">
          Kontaktovať
        </Button>
      </section>
    </>
  );
}
