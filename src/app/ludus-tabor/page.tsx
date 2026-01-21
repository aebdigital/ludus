import Image from 'next/image';
import Button from '@/components/Button';
import Sidebar from '@/components/Sidebar';

const workshops = [
  'Herecký',
  'Pohybový',
  'Video',
  'Hudobný',
  'Improvizačný',
  'Tvorivé písanie'
];

const staff = [
  'Jakub Ružička', 'Mišo Rovňák', 'Lenka Libjaková', 'Mirka Durná',
  'Viki Šuplatova', 'Kaťuša Gurová', 'Rišo Labuda', 'Naďa Gášeková', 'Laura Jankurová'
];

export default function LudusTaborPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
        style={{ backgroundImage: "url('/images/tabor-main.jpg')" }}
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

            {/* Intro - Moved to Main Column */}
            <div className="text-left mb-4">
              <h2 className="leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                O tábore
              </h2>
              <p className="text-[#444] mb-4">
                Tábor je určený pre deti a teenagerov od <strong>9-17 rokov</strong>.
              </p>
              <p className="text-[#444] mb-4">
                Všetky deti a tínedžeri sú zaradení v tábore do skupín podľa veku tak, aby boli s rovesníkmi.
              </p>
              <p className="text-[#444]">
                V skupinách rovnakej, alebo podobnej vekovej kategórie ako ste vy, vás čaká tvorba divadelného vystúpenia, ktoré vyvrcholí v piatok na javisku.
              </p>
            </div>

            {/* Price section */}
            <div className="bg-white p-10 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.05)] border-l-4 border-[#ffd37c]">
              <h3 className="text-[2rem] mb-6 inline-block" style={{ fontFamily: 'var(--font-heading)' }}>
                Cena a platba
              </h3>
              <div className="flex items-center gap-6 mb-6">
                <span className="text-[3rem] text-[#ffd37c] font-black leading-none" style={{ fontFamily: 'var(--font-heading)' }}>
                  250 EUR
                </span>
                <span className="text-gray-500 uppercase tracking-wide font-bold text-sm bg-gray-100 px-3 py-1 rounded-full">
                  / turnus
                </span>
              </div>

              <div className="mb-6">
                <strong className="block mb-2 text-lg">V cene je zahrnuté:</strong>
                <p className="text-[#555]">
                  všetky aktivity, rekvizity, desiata, obed, olovrant, zdravotník, darček a záverečné vystúpenie v divadelnom štúdiu BlackBox.
                </p>
              </div>

              <div className="bg-[#f9f9f9] p-6 rounded-lg">
                <strong className="block mb-3 text-lg">Platby sú rozložené na dve čiastky:</strong>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#ffd37c]"></span>
                    <span>Zálohová faktúra: <strong>70,- €</strong></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#ffd37c]"></span>
                    <span>Doplatková faktúra: <strong>175,- €</strong> <span className="text-sm text-gray-500">(budeme posielať v priebehu mája a je splatná najneskôr 30 dní pred táborom)</span></span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Turnusy - Moved to Main from Sidebar */}
            <div className="bg-black text-white p-10 rounded-xl shadow-xl">
              <h3 className="text-[2rem] mb-6 text-[#ffd37c]" style={{ fontFamily: 'var(--font-heading)' }}>
                Termíny 2026
              </h3>

              <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
                <div className="bg-white/10 p-6 rounded-lg border border-white/10">
                  <div className="flex flex-col gap-2 mb-4">
                    <span className="text-2xl font-bold text-[#ffd37c]">1. Turnus</span>
                    <span className="text-lg font-medium">6.7. - 10.7. 2026</span>
                  </div>
                  <Button href="/kontakt" className="w-full text-center justify-center py-3 bg-white text-black hover:bg-[#ffd37c] mt-2 text-sm uppercase font-bold">
                    Prihláška na 1. turnus
                  </Button>
                </div>

                <div className="bg-white/10 p-6 rounded-lg border border-white/10">
                  <div className="flex flex-col gap-2 mb-4">
                    <span className="text-2xl font-bold text-[#ffd37c]">2. Turnus</span>
                    <span className="text-lg font-medium">13.7. - 17.7. 2026</span>
                  </div>
                  <Button href="/kontakt" className="w-full text-center justify-center py-3 bg-white text-black hover:bg-[#ffd37c] mt-2 text-sm uppercase font-bold">
                    Prihláška na 2. turnus
                  </Button>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-400 text-sm">
                  Prihlasovanie na leto 2026 práve prebieha.
                </p>
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
                  <h4 className="font-bold uppercase text-gray-400 text-sm mb-2 tracking-wider">Miesto konania</h4>
                  <p className="text-xl font-bold">SZUŠ Ludus, Palackého 22</p>
                </div>
                <div>
                  <h4 className="font-bold uppercase text-gray-400 text-sm mb-2 tracking-wider">Harmonogram</h4>
                  <p className="text-xl font-bold">8:30 - 16:00</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-bold uppercase text-gray-400 text-sm mb-2 tracking-wider">Záverečné vystúpenie</h4>
                <p className="text-gray-700">
                  Pre rodičov, ako slávnostné ukončenie tábora bude v <strong>piatok v poobedných hodinách</strong>. O presnom čase vystúpenia vás budeme včas informovať.
                </p>
              </div>
            </div>

            {/* Staff - Moved to Main from Sidebar */}
            <div className="bg-[#f1f8e9] p-10 rounded-xl">
              <h3 className="text-[2rem] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Náš tím
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Venovať sa vám budú profesionálni herci a pedagógovia:
              </p>
              <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
                {staff.map(person => (
                  <div key={person} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <span className="w-2 h-2 bg-[#ffd37c] rounded-full"></span>
                    <span className="font-bold">{person}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery Preview - INSIDE Main Column */}
            <h2
              className="text-center text-[3rem] mb-8"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Galéria
            </h2>
            <div className="grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
              {[
                '/images/tabor/IMG_5327.jpeg',
                '/images/tabor/IMG_5330.jpeg',
                '/images/tabor/IMG_5416.jpeg'
              ].map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={`Tábor galéria ${i + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-[300px] object-cover rounded-xl transition-transform duration-300 hover:scale-[1.02]"
                />
              ))}
            </div>
            <div className="text-center mt-8">
              <Button href="/ludus-tabor/galeria">Zobraziť celú galériu</Button>
            </div>

          </main>

          <Sidebar category="ludus-tabor" />
        </div>
      </div>
    </>
  );
}
