'use client';

import Image from 'next/image';
import Button from '@/components/Button';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import CollapsibleList from '@/components/CollapsibleList';
import GalleryPreview from '@/components/GalleryPreview';

export default function SkolaLudusClient() {
    return (
        <>
            {/* Hero */}
            <section
                className="h-[40vh] max-md:h-[20vh] bg-cover flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20 max-md:mt-13 "
                style={{ backgroundImage: "url('/images/skola-main.webp')", backgroundPosition: 'center 35%' }}
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
                <div className="flex gap-16 items-start max-xl:flex-col max-md:gap-4">
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
                                src="/images/skola/54330fa8-0400-428d-a97f-d2fe7193c6a8.webp"
                                alt="Škola Ludus"
                                width={600}
                                height={400}
                                className="w-full h-[450px] max-md:h-[225px] object-cover rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.1)] max-md:order-first"
                            />
                        </div>

                        {/* Two Column Layout: Manifesto & Warning */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
                            {/* Premium HTML Manifest */}
                            <section className="p-6 md:p-8 bg-[#f47f46] rounded-[2rem] text-center shadow-xl relative overflow-hidden group border border-white/5 flex flex-col justify-center">

                                <div className="relative z-10 space-y-3 max-w-2xl mx-auto w-full py-4">
                                    {[
                                        "ako základné umelecko – pedagogické východisko.",
                                        "ako krídla slobodného človeka.",
                                        "ako krídla fantázie.",
                                        "oslobodzujúca od všednosti, konvencie a nepravdy.",
                                        "ako kľúč k svetu a životu.",
                                        "ako prapodstata umeleckého prejavu a tvorby vôbec."
                                    ].map((text, index) => (
                                        <div key={index} className="group/item">
                                            <p className="text-white text-lg md:text-xl font-medium tracking-tight leading-snug">
                                                <span
                                                    className="text-black font-black uppercase tracking-[0.2em] mr-3 inline-block transform transition-transform duration-500 group-hover/item:scale-110 text-lg md:text-xl"
                                                    style={{ fontFamily: 'var(--font-heading)' }}
                                                >
                                                    HRA
                                                </span>
                                                <span>{text}</span>
                                            </p>
                                            {index < 5 && (
                                                <div className="flex justify-center mt-3">
                                                    <div className="w-12 h-[1px] bg-white/30" />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Warning Box */}
                            <section className="bg-[#ffd37c] border-4 border-black rounded-[2rem] p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center relative overflow-hidden group">
                                {/* Diagonal Warning Stripes Background */}
                                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 10px, transparent 10px, transparent 20px)' }}></div>

                                <div className="relative z-10 text-center transform transition-transform duration-500 hover:scale-105 py-8">
                                    <div className="inline-block border-4 border-black rounded-full p-3 mb-4 bg-[#f47f44]">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-[2rem] md:text-[2.5rem] leading-[1.1] font-black uppercase text-black max-w-sm mx-auto" style={{ fontFamily: 'var(--font-heading)' }}>
                                        Hra spôsobuje <span className="text-white bg-black px-2 py-1 mx-1 transform -rotate-2 inline-block shadow-lg">závislosť</span>
                                        <br />a vážne ohrozuje tvoju priemernosť.
                                    </h3>
                                </div>
                            </section>
                        </div>

                        {/* Alumni Section */}
                        <div className="bg-white p-6 md:p-12 rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.05)] mb-16">
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
                            <div className="bg-gray-50/50 p-4 md:p-8 rounded-xl text-sm leading-relaxed text-[#555]">
                                <CollapsibleList
                                    items={[
                                        'Peter Sklár', 'Oľga Belešová', 'Roman Luknár', 'Ady Hajdu', 'Zuzana Vačková', 'Eňa Podzámska',
                                        'Jana Nagyová', 'Miro Noga', 'Rasťo Sokol', 'Andy Kraus', 'Juraj Predmerský',
                                        'Jeanette Anzigale Švoňavská', 'Deana Jakubisková', 'Darina Abrahámová', 'Štefan Kožka',
                                        'Ivo Hlaváček', 'Zuzana Frenglová', 'Dagmar Bruckmyerová', 'Vlado Kittler', 'Róber Beňo',
                                        'Martin Nikodým', 'Laco Kočan', 'Monika Haasová', 'Zuzka Haasová', 'Beata Kráľová',
                                        'Vanda Ružičková', 'Igor Adamec', 'Tomáš Sloboda', 'Laco Kerata', 'Karol Vosátko',
                                        'Mišo Gučík', 'Karin Haydu', 'Robo Laurinec', 'Milan Chalmovský', 'Eman Hason',
                                        'Igor Krempaský', 'Maťo Oravec', 'Andrej Kováč', 'Andrej Palko', 'Miro Dacho',
                                        'Michal Vyskočány', 'Dano Heriban', 'René Jankovič', 'Ivan Buraj', 'Marián Chalány',
                                        'Simona Hrušovská', 'Jakub Viktorín', 'Oliver Oswald', 'Šimon Ferstl', 'Kamil Kollárik',
                                        'Edita Koprivčevič Borsová', 'Rišo Labuda', 'a mnoho ďalších'
                                    ]}
                                />
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="grid grid-cols-5 gap-8 mb-16 max-md:grid-cols-2">
                            {[
                                { title: 'História', href: '/historia', image: '/images/skola/IMG_2993.webp' },
                                { title: 'Prihláška', href: '/skola-ludus/prihlaska', image: '/images/skola/IMG_4742.webp' },
                                { title: 'Školné', href: '/skola-ludus/skolne', image: '/images/skola/IMG_2915.webp' },
                                { title: 'Výučba', href: '/skola-ludus/vyucba', image: '/images/skola/IMG_1789.webp' },
                                { title: 'Priestory', href: '/skola-ludus/priestory-skoly', image: '/fotky priestorov/triedy/IMG_5436.webp' }
                            ].map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="relative rounded-xl overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.1)] text-center transition-all duration-300 hover:-translate-y-1 no-underline h-[200px] max-md:h-[140px] flex items-center justify-center bg-cover bg-center"
                                    style={{ backgroundImage: `url('${item.image}')` }}
                                >
                                    <div className="absolute inset-0 bg-black/50" />
                                    <h3
                                        className="relative z-10 text-[1.5rem] max-md:text-[1.1rem] mb-0 text-white"
                                        style={{ fontFamily: 'var(--font-heading)' }}
                                    >
                                        {item.title}
                                    </h3>
                                </Link>
                            ))}
                        </div>

                        {/* Info Grid */}
                        <div className="grid grid-cols-2 gap-16 max-md:grid-cols-1">
                            <div className="bg-[#1a6b8a] p-12 max-md:p-6 rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.05)]">
                                <h3
                                    className="text-[2rem] mb-6 border-b-2 border-[#f47f44] pb-2 inline-block text-white"
                                    style={{ fontFamily: 'var(--font-heading)' }}
                                >
                                    Čo ponúkame
                                </h3>
                                <ul className="list-none p-0">
                                    {[
                                        'Literárno dramatický odbor pre deti a mládež',
                                        'Tvorivé písanie',
                                        'Profesionálnych pedagógov',
                                        'Moderné priestory',
                                        'Divadelné priestory na vystúpenia',
                                        'Skvelú komunitu',
                                        'Priestor na rozvíjanie osobnosti a kreativity'
                                    ].map((item) => (
                                        <li
                                            key={item}
                                            className="relative pl-8 mb-4 text-[1.1rem] text-white before:content-['•'] before:text-[#f47f44] before:font-bold before:text-xl before:absolute before:left-0"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white p-12 max-md:p-6 rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.05)]">
                                <h3
                                    className="text-[2rem] mb-6 border-b-2 border-[#f47f44] pb-2 inline-block"
                                    style={{ fontFamily: 'var(--font-heading)' }}
                                >
                                    Pre koho je škola určená
                                </h3>
                                <p className="text-[1.1rem] text-[#000] mb-4 font-bold uppercase">
                                    Naša škola prijíma žiakov od 8 rokov, alebo druhej triedy ZŠ. Vek najstarších žiakov ktorých prijímame je 16 rokov.
                                </p>
                                <p className="text-[1.1rem] text-[#000] mb-4">
                                    Na výber máte dve možnosti v prihláške, ktoré sa odvíjajú podľa veku dieťaťa. Iné odbory prosím nevypĺňajte.
                                </p>
                                <ul className="list-none p-0 mb-4">
                                    {[
                                        'Ak má vaše dieťa do 15 rokov vyplňte: Dramatické a slovesné oddelenie do 15 rokov',
                                        'Ak má vaše dieťa nad 15 rokov vyplňte: Dramatické oddelenie – záujmová umelecká činnosť nad 15 rokov'
                                    ].map((item) => (
                                        <li
                                            key={item}
                                            className="relative pl-8 mb-4 text-[1.1rem] text-[#000] before:content-['•'] before:text-[#f47f44] before:font-bold before:text-xl before:absolute before:left-0"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-[1rem] text-[#555] italic">
                                    Ak máte záujem iba o tvorivé písanie kontaktujte nás emailom na{' '}
                                    <a href="mailto:jakubludus@gmail.com" className="text-black font-bold underline hover:text-[#f47f44] transition-colors">
                                        jakubludus@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Gallery Preview */}
                        <GalleryPreview category="skola-ludus" href="/skola-ludus/galeria" limit={3} />
                    </main>

                    <Sidebar category="skola-ludus" />
                </div >
            </div >
        </>
    );
}
