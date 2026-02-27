import Image from 'next/image';
import Button from '@/components/Button';
import Sidebar from '@/components/Sidebar';
import TaborStaffSection from '@/components/TaborStaffSection';
import GalleryPreview from '@/components/GalleryPreview';

export const revalidate = 60;

const workshops = [
  'Herecký',
  'Pohybový',
  'Video',
  'Hudobný',
  'Improvizačný',
  'Tvorivé písanie'
];

export default function LudusTaborPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
        style={{ backgroundImage: "url('/images/tabor-main.webp')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1
          className="relative text-white text-[6rem] z-10 text-center max-md:text-[3rem]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          DENNÝ LUDUS TÁBOR 2026
        </h1>
      </section>

      <div className="w-[95%] mx-auto py-8">

        {/* Main Content Layout */}
        <div className="flex gap-16 items-start max-xl:flex-col mb-16">
          {/* Main Column */}
          <main className="flex-1 min-w-0 flex flex-col gap-12">

            {/* Intro Section - O NÁS */}
            <div className="grid grid-cols-2 gap-12 items-start max-md:grid-cols-1">
              <div className="flex flex-col justify-center">
                <h2 className="leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  O tábore
                </h2>
                <div className="text-[#000] text-left space-y-4">
                  <p>
                    Tábor je určený pre deti a teenagerov od <strong>9-16 rokov</strong>.
                  </p>
                  <p>
                    Všetky deti a tínedžeri sú zaradení v tábore do skupín podľa veku tak, aby boli s rovesníkmi.
                  </p>
                  <p>
                    V skupinách rovnakej, alebo podobnej vekovej kategórie ako ste vy, vás čaká tvorba divadelného vystúpenia, ktoré vyvrcholí v piatok na javisku.
                  </p>
                </div>
              </div>
              <Image
                src="/images/tabor/IMG_5330.webp"
                alt="Ludus Tábor"
                width={600}
                height={400}
                className="w-full h-[450px] object-cover rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.1)] max-md:order-first"
              />
            </div>

            {/* Price and Dates Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Price section */}
              <div className="bg-white p-10 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.05)] border-l-4 border-[#ffd37c] h-full flex flex-col">
                <h3 className="text-[2rem] mb-6 inline-block" style={{ fontFamily: 'var(--font-heading)' }}>
                  Cena a platba
                </h3>
                <div className="flex items-center gap-6 mb-6">
                  <span className="text-[3rem] text-[#ffd37c] font-black leading-none" style={{ fontFamily: 'var(--font-heading)' }}>
                    255 EUR
                  </span>
                  <span className="text-black uppercase tracking-wide font-bold text-sm bg-gray-100 px-3 py-1 rounded-full">
                    / turnus
                  </span>
                </div>

                <div className="mb-6">
                  <strong className="block mb-2 text-lg">V cene je zahrnuté:</strong>
                  <p className="text-[#555] text-base">
                    všetky aktivity, rekvizity, desiata, obed, olovrant, zdravotník, darček a záverečné vystúpenie v divadelnom štúdiu BlackBox.
                  </p>
                </div>

                <div className="bg-[#f9f9f9] p-6 rounded-lg">
                  <strong className="block mb-3 text-lg leading-tight text-black">Platby sú rozložené na dve čiastky:</strong>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#ffd37c] mt-2 shrink-0"></span>
                      <span className="text-black">Záloha: <strong>70,- €</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#ffd37c] mt-2 shrink-0"></span>
                      <span className="text-black">Doplatok: <strong>185,- €</strong> <br /><span className="text-sm opacity-70">(budeme posielať v priebehu mája a je splatná najneskôr 30 dní pred táborom)</span></span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Turnusy */}
              <div id="terminy" className="bg-black text-white p-10 rounded-xl shadow-xl h-full flex flex-col scroll-mt-28">
                <h3 className="text-[2rem] mb-6 text-[#ffd37c]" style={{ fontFamily: 'var(--font-heading)' }}>
                  Termíny 2026
                </h3>

                <div className="space-y-6 flex-1">
                  <div className="bg-white/10 p-6 rounded-lg border border-white/10">
                    <div className="flex flex-col gap-1 mb-4">
                      <span className="text-2xl font-bold text-[#ffd37c]">1. Turnus</span>
                      <span className="text-lg font-medium">6.7. - 10.7. 2026</span>
                      <span className="text-sm text-gray-300">255 € / turnus</span>
                    </div>
                    <Button href="https://form.fapi.cz/?id=6d899098-ce0d-4184-82de-90b29d27b099" className="w-full text-center justify-center py-3 bg-white text-black hover:bg-[#ffd37c] text-sm uppercase font-bold">
                      Prihlásiť sa na 1. turnus
                    </Button>
                  </div>

                  <div className="bg-white/10 p-6 rounded-lg border border-white/10">
                    <div className="flex flex-col gap-1 mb-4">
                      <span className="text-2xl font-bold text-[#ffd37c]">2. Turnus</span>
                      <span className="text-lg font-medium">13.7. - 17.7. 2026</span>
                      <span className="text-sm text-gray-300">255 € / turnus</span>
                    </div>
                    <Button href="https://form.fapi.cz/?id=96498f09-72d0-4039-a918-96343e26cf0d" className="w-full text-center justify-center py-3 bg-white text-black hover:bg-[#ffd37c] text-sm uppercase font-bold">
                      Prihlásiť sa na 2. turnus
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Program & Workshops */}
            <div className="bg-white p-10 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.05)]">
              <h3 className="text-[2rem] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Tento rok vás čakajú tematické workshopy
              </h3>
              <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-2">
                {workshops.map(workshop => (
                  <div key={workshop} className="bg-gray-50 px-4 py-3 rounded-lg text-center font-bold text-gray-700 hover:bg-[#ffd37c] hover:text-black transition-colors duration-300">
                    {workshop}
                  </div>
                ))}
              </div>
            </div>

            {/* Important Details */}
            <div className="bg-white p-10 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.05)]">
              <div className="grid grid-cols-2 gap-8 max-sm:grid-cols-1">
                <div>
                  <h4 className="font-bold uppercase text-black text-sm mb-2 tracking-wider">Miesto konania</h4>
                  <p className="text-xl font-bold">SZUŠ Ludus, Palackého 22</p>
                </div>
                <div>
                  <h4 className="font-bold uppercase text-black text-sm mb-2 tracking-wider">Harmonogram</h4>
                  <p className="text-xl font-bold">8:30 - 16:00</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-bold uppercase text-black text-sm mb-2 tracking-wider">Záverečné vystúpenie</h4>
                <p className="text-gray-700">
                  Pre rodičov, ako slávnostné ukončenie tábora bude v <strong>piatok v poobedných hodinách</strong>. O presnom čase vystúpenia vás budeme včas informovať.
                </p>
              </div>
            </div>

            {/* Staff */}
            <TaborStaffSection />

            {/* Tabor Poster Image */}
            <div className="my-16 flex justify-center">
              <Image
                src="/plagat2.jpg"
                alt="Ludus Tábor 2026 Plagát"
                width={1200}
                height={1600}
                className="w-full max-w-4xl h-auto rounded-xl shadow-2xl"
                priority
              />
            </div>

            {/* Gallery Preview */}
            <GalleryPreview category="ludus-tabor" href="/ludus-tabor/galeria" />

          </main>

          <Sidebar category="ludus-tabor" />
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
        <Button href="/ludus-tabor/kontakt" className="bg-white text-black hover:bg-gray-100">
          Kontaktovať
        </Button>
      </section>
    </>
  );
}
