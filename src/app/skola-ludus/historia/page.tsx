'use client';

import Image from 'next/image';
import Button from '@/components/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface Founder {
  name: string;
  description: string;
  image: string;
  details: string[];
  pastRoles: string[];
}

const founders: Founder[] = [
  {
    name: "Mgr. art PETER KUBA",
    description: "Spoluzakladateľ divadla a školy LUDUS, zriaďovateľ SZUŠ LUDUS",
    image: "/images/skola/eb61223e-a3d6-4b29-990e-8cc94452d20f.webp",
    details: [
      "Štúdium na VŠMU odbor herectvo",
      "Dlhoročný umelecký šéf a režisér Divadla Ludus kreatívneho centra mladých"
    ],
    pastRoles: [
      "pedagóg doplňujúceho pedagogického štúdia na VŠMU",
      "pedagóg na konzervatóriu v Bratislave",
      "umelecký šéf detskej dramatickej družiny Československého rozhlasu",
      "člen Divadla pre deti a mládež Trnava",
      "moderátor detskej relácie „Poďte s nami“ pre STV"
    ]
  },
  {
    name: "XÉNIA KUBOVÁ - GRACOVÁ",
    description: "Spoluzakladateľka školy LUDUS, bývalý dlhoročný pedagóg",
    image: "/images/skola/IMG_9980.webp",
    details: [
      "Štúdium na štátnom konzervatórium v Bratlavě",
      "Dlhoročný pedagóg v škole LUDUS a autorka učebných osnov a metodiky pre ĽŠU – literárno dramatický odbor"
    ],
    pastRoles: [
      "členka dedinského divadla a herečka Žilinského divadla",
      "Spoluzakladateľka súboru LUDUS",
      "Vedúca odboru LŠU, zástupca riaditeľa",
      "Porotkyňa prednesu na rôznych súťažiach",
      "pedagóg v rozhlasovej dramatickej družine"
    ]
  }
];

export default function HistoriaPage() {
  const [selectedFounder, setSelectedFounder] = useState<Founder | null>(null);
  const [showAllYouth, setShowAllYouth] = useState(false);
  const [showAllChildren, setShowAllChildren] = useState(false);

  return (
    <div className="bg-[#fcfcfc] min-h-screen">
      {/* Hero */}
      <section
        className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
        style={{ backgroundImage: "url('/images/skola/IMG_3491.webp')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1
          className="relative text-white text-[5rem] z-10 text-center max-md:text-[3rem]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          História
        </h1>
      </section>

      <div className="w-[95%] max-w-7xl mx-auto py-20">
        {/* Founders Grid */}
        <div className="grid grid-cols-2 gap-8 mb-24 max-md:grid-cols-1">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="group relative h-[600px] cursor-pointer overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl"
              onClick={() => setSelectedFounder(founder)}
            >
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-10 left-10 right-10 z-10">
                <h3
                  className="text-white text-[2.5rem] leading-none mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {founder.name}
                </h3>
                <p className="text-[#ffd37c] font-bold text-lg leading-snug max-w-[80%]">
                  {founder.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-white/80 font-medium text-left">
                  <span>Viac o zakladateľovi</span>
                  <span className="text-xl">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Videos Section */}
        <div className="mb-32 text-center">
          <h2
            className="text-[3rem] mb-12"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Filmy a Dokumenty
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {/* TA3 Video */}
            <div className="flex flex-col gap-4">
              <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/0a_zzfrhF1Y"
                  title="Portrét TA3"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h4 className="text-xl font-bold">Portrét TA3</h4>
            </div>

            {/* 40 Year Video */}
            <div className="flex flex-col gap-4">
              <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/JAS_srYKw90"
                  title="Ludus 40 ročný"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h4 className="text-xl font-bold">Ludus 40 ročný</h4>
            </div>

            {/* STVR Documentary Link */}
            <a
              href="https://www.stvr.sk/televizia/program/18117"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-4 group"
            >
              <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg bg-black relative flex items-center justify-center p-8 text-center transition-all group-hover:bg-[#ffd37c]/10">
                <div className="border border-white/20 p-8 rounded-lg w-full h-full flex flex-col items-center justify-center gap-4">
                  <p className="text-white font-heading text-2xl group-hover:text-[#ffd37c]">Dokument Fenomén LUDUS</p>
                  <span className="text-white/60 text-sm">Pozrieť v archíve STVR</span>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-[#ffd37c] text-black px-6 py-2 rounded-full font-bold">Otvoriť archív →</span>
                </div>
              </div>
              <h4 className="text-xl font-bold">Dokument Fenomén LUDUS (STVR)</h4>
            </a>
          </div>
        </div>

        {/* History Content */}
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Block 1 */}
          <div className="grid grid-cols-[1fr_450px] gap-12 items-center max-lg:grid-cols-1">
            <div className="bg-white p-12 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 italic">
              <p className="mb-8 text-[1.2rem] leading-relaxed text-[#000]">
                Peter Kuba sa spolu so Xéniou začali v roku 1970 venovať mladým ľuďom, ktorí milujú divadlo.
                Vznikol nápad poňať bežný literárno-dramatický odbor Ľudovej školy umenia ako divadelné zoskupenie. A tak
                spolu s Jurajom Bindzárom založili LUDUS. Jeho ciele definovali vo svojom manifeste:
              </p>

              <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1 bg-[#ffd37c]/5 p-8 rounded-xl border-l-8 border-[#ffd37c] mb-8 not-italic">
                <ul className="space-y-3 font-semibold text-black italic">
                  <li>Hra ako základné umelecko – pedagogické východisko</li>
                  <li>Hra ako krídla slobodného človeka</li>
                  <li>Hra ako krídla fantázie</li>
                </ul>
                <ul className="space-y-3 font-semibold text-black italic">
                  <li>Hra oslobodzujúca od všednosti, konvencie a nepravdy</li>
                  <li>Hra ako kľúč k svetu a životu</li>
                  <li>Hra as prapodstata umeleckého prejavu a tvorby vôbec</li>
                </ul>
              </div>

              <p className="text-[1.2rem] leading-relaxed text-[#000]">
                Tieto princípy sa ukázali ako veľmi nadčasové a týchto zásad sa Ludus držal celé desaťročia a platia až doteraz.
                Ludus sa stal miestom, kde deti a mladí ľudia našli miesto, kde sa cítili slobodne. Našli svoju vnútornú slobodu.
                Hrali sa. A vďaka hre sa učili... To je stále základný princíp Ludusu. Hra, ako cesta.
              </p>
            </div>
            <Image
              src="/images/skola/IMG_1821.webp"
              alt="Ludus História"
              width={600}
              height={800}
              className="w-full h-[600px] object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* Block 2 */}
          <div className="grid grid-cols-[450px_1fr] gap-12 items-center max-lg:grid-cols-1">
            <Image
              src="/images/skola/IMG_8911.webp"
              alt="Ludus História"
              width={600}
              height={800}
              className="w-full h-[600px] object-cover rounded-2xl shadow-xl max-lg:order-first"
            />
            <div className="space-y-8 text-[1.2rem] leading-relaxed text-[#000]">
              <p>
                Z Ludusu sa postupne stala mimoriadne úspešná škola pre deti a mladých, ktorých životom bolo divadlo.
                Vysoké renomé školy sa začalo prejavovať aj v počte úspešných uchádzačov o štúdium herectva.
                Začiatkom 80tych rokov získal Ludus veľkorysé priestory na Rezedovej ulici – s vlastnou divadelnou sálou.
                Úroveň predstavení sa tým posunula na ešte vyššiu úroveň. Inscenácie, ktorých interpretmi boli žiaci Ludusu,
                už pripomínali tvorbu profesionálnych divadiel.
              </p>

              <div className="bg-white p-12 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 italic text-center">
                "Postupne vznikla potreba premostenia Ludusu medzi detskou a profesionálnou úrovňou.
                Z amatérskeho krúžku sa Ludus stal centrom, ktoré bolo priekopníkom divadla hraného mladými pre mladých."
              </div>
            </div>
          </div>

          {/* Block 3 */}
          <div className="grid grid-cols-[1fr_450px] gap-12 items-start max-lg:grid-cols-1">
            <div className="space-y-8">
              <p className="text-[1.2rem] leading-relaxed text-[#000]">
                Od roku 1990 funguje Ludus v dvoch líniách. Jednou je Škola Ludus (SZUŠ LUDUS) – vtedy ako literárno-dramatický odbor,
                v ktorom sa vzdelávajú deti a mladí. Druhou líniou bolo Profesionálne divadlo Ludus (ako divadlo v pôsobnosti BSK).
                Ktoré však vždy úzko spolupracovalo so školou a dalo možnosť absolventom hrať v profesionálnych podmienkach a s profesionálmi.
              </p>

              <div className="bg-black text-white p-12 rounded-2xl text-center shadow-xl">
                <h3 className="text-[#ffd37c] text-[2.5rem] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  Súčasnosť
                </h3>
                <p className="text-xl opacity-90 leading-relaxed">
                  V súčasnosti pôsobíme pod jednou strechou na Palackého 22, v novom komornom priestore BLACKBOX.
                  Sme rodinnou školou a divadlom, kde sa stretávajú generácie a odovzdávajú si svoje skúsenosti.
                  Formou hry sa navzájom učia. Pretože v každom z nás je Homo ludens –&thinsp;„&thinsp;Človek hravý&thinsp;".
                </p>
              </div>
            </div>
            <Image
              src="/images/skola/IMG_4346.webp"
              alt="Ludus Súčasnosť"
              width={600}
              height={800}
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Projects History - 5 per row - FULL WIDTH CONTAINER */}
      <div className="w-[95%] max-w-[1600px] mx-auto pb-32">
        <div className="mt-16">
          <h2 className="text-[3rem] mb-16 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
            Divadelná produkcia
          </h2>

          <div className="space-y-24">
            {/* Youth Projects */}
            {(() => {
              const youthPlays = [
                "1974 - I. Demovič / P. Kuba: Tonic klub",
                "1975 – W. Shakespeare / J. Bindzár: Zimná rozprávka",
                "1977 - N. V. Gogoľ / J. Bindzár: Nos",
                "1978 – Ľ. Feldek: Zlatúšik",
                "1979 – O. Šulaj / B. Uhlár: Frontové divadlo",
                "1980 – B. Brecht: Malomeštiakova svadba",
                "1980 – Č. Ajtmatov / P. Kuba: Biela loď",
                "1983 – Turba / Fuksa / Mokoš / Kuba: Šanca, alebo Klauniády",
                "1984, 1988 – F. Wedekind: Jarné prebudenie",
                "1985 – F. Buzassy: Rozprávka",
                "1987 – P. Kuba: Bez pravidiel",
                "1989 – P. Kuba: Gebuliaci",
                "1991 – M. Ramløse: Štvrté prikázanie",
                "1991 – J. Mahen: Klaun Čokoláda",
                "1992 – A. Jelicoe: Bezva finta",
                "1993 – Ľ. Andrejev: Život človeka",
                "1994 – S. Canev: Druhá smrť Johanky z Arcu",
                "1996 - J. Benčík / I. Ištoková / Z. Šebestová: Ticho prosím!",
                "1996, 2000, 2006 – P. Kuba / j. Letenay / Ľ. Jarjabka: Ne/mám rád I.",
                "1996 – j. Cocteau: Svadobčania z Eiffelovky",
                "1997, 2006 –P. Kuba / J. Letenay / Ľ. Jarjabka: Nemám rád II.",
                "1998, 2001 - P. Kuba: Prvé lásky",
                `1999 – P. Kuba, V. Shulzová: Stačí povedať \u201Enie!\u201C`,
                "1999 - P. Scherhaufer: Geometria mŕtvych bodov",
                "2000 - P. Turrini: Lov na krysy",
                "2001 - I. Horovitz: Čiara, alebo každý chce byť prvý",
                "2002 – A. de Saint-Exupéry: Malý princ",
                "2006 – M. Dacho: For sale",
                "2007 – K. Žiška: Čiernobiele srdce Charlieho Chaplina",
                "2007 - J. Záborský & comp.:Dva dni v Chujave",
                "2008 – M. Hudec / K. Kollárik / P. Kuba: Objav roka",
                "2008 – F. Rabelaise / K. Žiška: Gargantua a Pantagruel",
                "2009 – K. Žiška / M. Dacho / P. Kuba: Velipsespilev",
                "2009 – N. V. Gogoľ / P. Kuba: Acta psychopata",
                "2010 – L. Kerata: Fantázia (Fascikliáda)",
                "2010 – C. Confortés: Maratón",
                "2012 – K. Žiška / M. Dacho / M. Uhliarik: ...Tvoj Ludevít",
                "2013 – T. Rózewicz: Folder",
                "2014 – J. Šebesta / J Mikitková: Pozor, dobrý pes!",
                "2014 – j. Kladijev: Poďme, čaká nás auto",
                "2014 – A. P. Čechov: Medveď & Pytačky",
                "2015 – I. Lausund: Hystericon",
                "2016 – R. Kipling / D. a V. Martinovci: Džungľa",
                "2018- Eugene Ionesco: Plešivá speváčka",
                "2019- Maurice Maeterlinck: Modrý vták"
              ];
              const visibleYouth = showAllYouth ? youthPlays : youthPlays.slice(0, 10);
              return (
                <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
                  <div className="bg-black py-6 px-10 rounded-2xl mb-12 shadow-lg">
                    <h3 className="text-[#ffd37c] text-3xl font-bold uppercase tracking-widest m-0 text-left">
                      Úspešné projekty pre mládež
                    </h3>
                  </div>
                  <div className="relative">
                    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-4 text-base text-left ${!showAllYouth ? 'overflow-hidden' : ''}`}>
                      {visibleYouth.map((play, i) => (
                        <div key={i} className="flex items-start gap-2 hover:text-[#ffd37c] transition-colors leading-tight">
                          <span className="text-[#ffd37c]">•</span>
                          <span>{play}</span>
                        </div>
                      ))}
                    </div>
                    {!showAllYouth && (
                      <div className="flex justify-center mt-8">
                        <button
                          onClick={() => setShowAllYouth(true)}
                          className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-[#ffd37c] hover:text-black transition-all duration-300 font-bold text-sm uppercase tracking-wider"
                        >
                          <span>Zobraziť všetky ({youthPlays.length})</span>
                          <span className="text-xl leading-none">+</span>
                        </button>
                      </div>
                    )}
                    {showAllYouth && (
                      <div className="flex justify-center mt-8">
                        <button
                          onClick={() => setShowAllYouth(false)}
                          className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-black rounded-full hover:bg-gray-300 transition-all duration-300 font-bold text-sm uppercase tracking-wider"
                        >
                          <span>Skryť</span>
                          <span className="text-xl leading-none">−</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })()}

            {/* Children Projects */}
            {(() => {
              const childrenPlays = [
                "1971 – S. Maršák: Mačkin dom",
                "1972 – S. Michalkov: Veselý sen",
                "1973 – M. Maeterlinck: Modrý vták",
                "1975 – A. Platonv / J. Bindzár: Krava",
                "1976 – A. Nosov / P. Kuba: Nevedko",
                "1978 – J. Brzechwa / J. Bindzár: Skaza akadémie",
                "1979 – Ľ. Podjavorinská: Žabiatko",
                "1982 – D. Defoe / J. Bindzár: Robinson",
                "1990 – R. Kipling: Džungľa",
                "1991 – J. Chlebíková: Šípková Ruženka",
                "1992 - J. Benčík: Dlhý, Široký, Bystrozraký",
                "1992 - P. Kuba: Kráľ Strach",
                "1993 (SRN), 2003 J. Bindzár: Robinson",
                "1993 – V. Macek, j. Pražmári: O psíškovi a mačičke",
                "1993 – J. Čepoveckij: Môj strýčko klaun",
                "1994 – O. Hoffmannová: Čarodejnica Ivica",
                "1995 – J. C. Hronský: Budkáčik a Dubkáčik",
                "1996 – O. Hoffmannová: Letí, letí...",
                "1997 – P. Kuba: Kontajnerstory",
                "1998 – J. Pražmári a kol.: Najstaršia rozprávka",
                "1998 – J. Čapoun: Strakatá rozprávka",
                "1999 – M. Ďuríčková: Bratislavské povesti",
                "2000 – D. Hevier: Hugo, Frigo, Bublina",
                "2001 – K. Kubová: Sedmokráska",
                "2001- M. Ende: Čárymáry fučpunč priania",
                "2002 – R. Bachratý: Vyšla hviezda nad Betlehemom",
                "2004 - A. Pachinger: Doktor Johanes Faust",
                "2005 – J. Bindzár: Skaza akadémie",
                "2006 – DF. Dušek: Pištáčikovo pestvo",
                "2006 – J. Synková: Malá čarodejnica",
                "2007 – P. Garajová-Jarjabková: Do dávnych čias mesta",
                "2008 – J. Mokoš: Hasprčko a Mrcúlik",
                "2009 – M. Beňová: Strašiak",
                "2009 – Kolektív: Vlk, neklam!",
                "2010 – A. Lingrenová: Popletená punčocha",
                "2011 – J. Mikitková: Abeceda zjedla teba",
                "2011 – M. Ende: Čárymáry fučpunč priania",
                "2012 – Fontaine, Krylov, Ezop: 3 bájky",
                "2013 – P. Kuba: Pod perinou"
              ];
              const visibleChildren = showAllChildren ? childrenPlays : childrenPlays.slice(0, 10);
              return (
                <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
                  <div className="bg-black py-6 px-10 rounded-2xl mb-12 shadow-lg">
                    <h3 className="text-[#ffd37c] text-3xl font-bold uppercase tracking-widest m-0 text-left">
                      Projekty pre deti
                    </h3>
                  </div>
                  <div className="relative">
                    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-4 text-base text-left ${!showAllChildren ? 'overflow-hidden' : ''}`}>
                      {visibleChildren.map((play, i) => (
                        <div key={i} className="flex items-start gap-2 hover:text-[#ffd37c] transition-colors leading-tight text-left">
                          <span className="text-[#ffd37c]">•</span>
                          <span>{play}</span>
                        </div>
                      ))}
                    </div>
                    {!showAllChildren && (
                      <div className="flex justify-center mt-8">
                        <button
                          onClick={() => setShowAllChildren(true)}
                          className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-[#ffd37c] hover:text-black transition-all duration-300 font-bold text-sm uppercase tracking-wider"
                        >
                          <span>Zobraziť všetky ({childrenPlays.length})</span>
                          <span className="text-xl leading-none">+</span>
                        </button>
                      </div>
                    )}
                    {showAllChildren && (
                      <div className="flex justify-center mt-8">
                        <button
                          onClick={() => setShowAllChildren(false)}
                          className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-black rounded-full hover:bg-gray-300 transition-all duration-300 font-bold text-sm uppercase tracking-wider"
                        >
                          <span>Skryť</span>
                          <span className="text-xl leading-none">−</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>

      {/* Modal for Founder Details */}
      <AnimatePresence>
        {selectedFounder && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center p-6 sm:p-12 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedFounder(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl p-10 md:p-16 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-6 right-6 text-3xl font-light hover:text-[#ffd37c] transition-colors p-2"
                onClick={() => setSelectedFounder(null)}
              >
                ✕
              </button>

              <div className="flex flex-col md:flex-row gap-12 items-stretch text-left">
                <div className="w-full md:w-[450px] relative rounded-2xl overflow-hidden shadow-xl shrink-0 min-h-[500px]">
                  <Image
                    src={selectedFounder.image}
                    alt={selectedFounder.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2
                    className="text-[3rem] leading-none mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {selectedFounder.name}
                  </h2>
                  <p className="text-xl font-bold text-[#ffd37c] mb-8 uppercase tracking-wide">
                    {selectedFounder.description}
                  </p>

                  <div className="space-y-8 text-lg">
                    <div>
                      <ul className="space-y-2 list-none p-0">
                        {selectedFounder.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-[#ffd37c] text-xl mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-black mb-4">V minulosti pôsobil(a) ako:</h4>
                      <ul className="space-y-3 list-none p-0">
                        {selectedFounder.pastRoles.map((role, idx) => (
                          <li key={idx} className="flex items-start gap-3 pl-4 border-l-2 border-gray-100">
                            <span>{role}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
