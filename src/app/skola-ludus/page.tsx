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
            {/* Intro Section - O NÁS */}
            <div className="grid grid-cols-2 gap-12 items-start mb-16 max-md:grid-cols-1">
              <div className="flex flex-col justify-center">
                <h2 className="leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  O nás
                </h2>
                <div className="text-[#000] text-left space-y-4">
                  <p>
                    V roku 2025 oslávila divadelná škola Ludus svoju 55-ročnú existenciu.
                    Vďaka jej zakladateľom Petrovi Kubovi a Xénii Gracovej-Kubovej a ich
                    vytrvalosti a odhodlaniu môžeme v súčasnosti povedať, že škola
                    LUDUS je v našom umeleckom divadelnom obore silnou značkou,
                    ktorá sa budovala postupnými krôčikmi a vierou, že to, čo robíme má
                    zmysel a hlbšie poslanie.
                  </p>
                  <p>
                    Ludus bol odjakživa miestom, kde sa ľudia cítili slobodne, kde si našli
                    priateľov na celý život, odkiaľ si odniesli množstvo zážitkov a kde sa
                    naučili množstvo kreatívnych zručností formou <strong className="font-extrabold text-black uppercase">HRY</strong>, takže nemali ani
                    pocit, že sa niečo učia.
                  </p>
                </div>
              </div>
              <Image
                src="/images/skola/IMG_2993.jpeg"
                alt="Škola Ludus"
                width={600}
                height={400}
                className="w-full h-[450px] object-cover rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.1)] max-md:order-first"
              />
            </div>

            {/* Premium HTML Manifest */}
            <section className="mb-24 py-12 px-8 bg-[#0a0a0a] rounded-[2.5rem] text-center shadow-3xl relative overflow-hidden group border border-white/5">
              {/* Decorative background glows */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffd37c]/10 rounded-full -mr-48 -mt-48 blur-[100px] group-hover:bg-[#ffd37c]/20 transition-colors duration-1000" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ffd37c]/5 rounded-full -ml-48 -mb-48 blur-[100px] group-hover:bg-[#ffd37c]/15 transition-colors duration-1000" />

              <div className="relative z-10 space-y-6 max-w-5xl mx-auto">
                {[
                  "ako základné umelecko – pedagogické východisko.",
                  "ako krídla slobodného človeka.",
                  "ako krídla fantázie.",
                  "oslobodzujúca od všednosti, konvencie a nepravdy.",
                  "ako kľúč k svetu a životu.",
                  "ako prapodstata umeleckého prejavu a tvorby vôbec."
                ].map((text, index) => (
                  <div key={index} className="group/item">
                    <p className="text-white/90 text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight leading-tight">
                      <span
                        className="text-[#ffd37c] font-black uppercase tracking-[0.2em] mr-4 inline-block transform transition-transform duration-500 group-hover/item:scale-110"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        HRA
                      </span>
                      <span className="inline-block">{text}</span>
                    </p>
                    {index < 5 && (
                      <div className="flex justify-center mt-6">
                        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#ffd37c]/40 to-transparent" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Corner Accents */}
              <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-[#ffd37c]/30 rounded-tl-xl" />
              <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-[#ffd37c]/30 rounded-br-xl" />
            </section>

            {/* Alumni Section */}
            <div className="bg-white p-12 rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.05)] mb-16">
              <h2 className="text-[2rem] mb-6 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
                Naši absolventi
              </h2>
              <div className="mb-8 text-center text-[#000] space-y-4">
                <p>
                  Zo školy Ludus za tie roky vyšlo množstvo absolventov, ktorí sa
                  uplatňujú v divadelnom, filmovom svete, ale aj mimo umeleckej sféry.
                  To, čo ich spája, je hlavne kreatívny spôsob myslenia.
                </p>
                <p className="font-bold text-black">
                  Aj tieto osobnosti sú bývalými žiakmi školy Ludus a pôsobia alebo pôsobili v umeleckej sfére:
                </p>
              </div>
              <div className="bg-gray-50/50 p-8 rounded-xl text-sm leading-relaxed text-[#555] columns-2 md:columns-3 lg:columns-4 gap-8">
                {[
                  'Peter Sklár', 'Oľga Belešová', 'Roman Luknár', 'Ady Hajdu', 'Zuzana Vačková', 'Eňa Podzámska',
                  'Jana Nagyová', 'Oľga Belešová', 'Miro Noga', 'Rasťo Sokol', 'Andy Kraus', 'Juraj Predmerský',
                  'Jeanette Anzigale Švoňavská', 'Deana Jakubisková', 'Darina Abrahámová', 'Štefan Kožka',
                  'Ivo Hlaváček', 'Zuzana Frenglová', 'Dagmar Bruckmyerová', 'Vlado Kittler', 'Róber Beňo',
                  'Martin Nikodým', 'Laco Kočan', 'Monika Haasová', 'Zuzka Haasová', 'Beata Kráľová',
                  'Vanda Ružičková', 'Igor Adamec', 'Tomáš Sloboda', 'Laco Kerata', 'Karol Vosátko',
                  'Mišo Gučík', 'Karin Haydu', 'Robo Laurinec', 'Milan Chalmovský', 'Eman Hason',
                  'Igor Krempaský', 'Maťo Oravec', 'Andrej Kováč', 'Andrej Palko', 'Miro Dacho',
                  'Michal Vyskočány', 'Dano Heriban', 'René Jankovič', 'Ivan Buraj', 'Marián Chalány',
                  'Simona Hrušovská', 'Jakub Viktorín', 'Oliver Oswald', 'Šimon Ferstl', 'Kamil Kollárik',
                  'Edita Koprivčevič Borsová', 'Rišo Labuda', 'a mnoho ďalších'
                ].map((name, index) => (
                  <p key={`${name}-${index}`} className="mb-2 hover:text-[#ffd37c] transition-colors">{name}</p>
                ))}
              </div>
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
                      className="relative pl-8 mb-4 text-[1.1rem] text-[#000] before:content-['•'] before:text-[#ffd37c] before:font-bold before:text-xl before:absolute before:left-0"
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
                <p className="text-[1.1rem] text-[#000] mb-4">
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
                      className="relative pl-8 mb-4 text-[1.1rem] text-[#000] before:content-['•'] before:text-[#ffd37c] before:font-bold before:text-xl before:absolute before:left-0"
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
                  <Link key={i} href="/skola-ludus/galeria" className="group">
                    <Image
                      src={img}
                      alt={`Galéria ${i + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-[300px] object-cover rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </Link>
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

    </>
  );
}
