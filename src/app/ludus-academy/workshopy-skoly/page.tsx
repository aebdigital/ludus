import AcademySubpageSidebar from '@/components/AcademySubpageSidebar';
import Button from '@/components/Button';
import Image from 'next/image';

export default function WorkshopySkolyPage() {
    return (
        <div className="bg-white">
            <section
                className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
                style={{ backgroundImage: "url('/images/academy/IMG_9005.webp')" }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <h1
                    className="relative text-white text-[5rem] z-10 text-center max-md:text-[3rem] px-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Workshopy pre školy
                </h1>
            </section>

            <div className="w-[95%] mx-auto py-16">
                <div className="flex gap-16 items-start max-xl:flex-col">
                    <AcademySubpageSidebar />

                    <main className="flex-1 min-w-0">
                        <div className="mb-24">
                            <h2 className="text-[3rem] mb-2 text-black leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                                RADOSŤ <span className="text-[#ffd37c]">SA</span> SPOZNÁVAŤ
                            </h2>
                            <div className="text-[#ffd37c] font-bold text-[1.2rem] mb-8 uppercase tracking-widest leading-tight">
                                SPOZNAŤ SA A SPLOUPRACOVAŤ JE RADOSŤ
                            </div>

                            <div className="text-[1.1rem] text-[#000] space-y-6 mb-12 leading-relaxed">
                                <p>
                                    Každý učiteľ bude azda súhlasiť s tým, že učiť triedu žiakov, kde funguje komunikácia, priateľské vzťahy a kde je medzi žiakmi a učiteľom vytvorená dôvera je úspech. Každý učiteľ chce mať v triede dobrú atmosféru. Nie vždy je to však jednoduché dosiahnuť.
                                </p>
                                <p className="italic font-medium text-black border-l-4 border-[#ffd37c] pl-6 py-2">
                                    Práve preto sme vytvorili workshopy pre žiakov a učiteľov, ktorých cieľom je lepšie sa navzájom spoznať, nájsť cestu ako spolupracovať, spoločne niečo vytvoriť, naučiť sa myslieť tímovo a rešpektovať sa navzájom.
                                </p>
                                <p>
                                    Zároveň môžete spolu s vašou triedou zistiť ako funguje kreatívne a improvizačné myslenie.
                                    Všetky workshopy sú postavené na učení prostredníctvom hry a vychádzajú z metód tvorivej dramatiky. Práve s týmito metódami máme viac ako 50 ročnú skúsenosť v škole LUDUS. Vy máte možnosť vybrať si, aký typ workshopu vám vyhovuje a čo práve vaša trieda potrebuje.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                    <h3 className="text-[1.5rem] mb-6 text-black font-bold uppercase" style={{ fontFamily: 'var(--font-heading)' }}>Čo workshopmi môžete získať:</h3>
                                    <ul className="space-y-3">
                                        {[
                                            'priateľskejšiu atmosféru v triede',
                                            'tvorivejšie mysliacich žiakov',
                                            'zlepšenie spolupráce medzi žiakmi',
                                            'prehĺbenie vzťahu medzi učiteľom a žiakmi',
                                            'informácie o študijných typoch a tipy ako sa efektívnejšie učiť.'
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-3 items-start text-[#000]">
                                                <span className="text-[#ffd37c] font-bold">✓</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-white p-8 rounded-2xl border-2 border-[#ffd37c]/30">
                                    <h3 className="text-[1.5rem] mb-4 text-black font-bold uppercase" style={{ fontFamily: 'var(--font-heading)' }}>Možnosť výberu:</h3>
                                    <p className="text-sm text-black mb-6">Vyberte si typ workshopu pre vašu triedu, dĺžku workshopu a miesto, kde sa workshop bude konať.</p>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-black text-[#ffd37c] flex items-center justify-center font-bold">1</div>
                                            <p className="font-medium text-black">4 typy workshopov</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-black text-[#ffd37c] flex items-center justify-center font-bold">2</div>
                                            <p className="font-medium text-black">2 hod. (120 min) alebo 3 hod. (180 min)</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-black text-[#ffd37c] flex items-center justify-center font-bold">3</div>
                                            <p className="font-medium text-black">V LUDUSe alebo priamo u vás v škole</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                                    <video src="/videos/workshopy-skoly-1.mp4" controls className="w-full h-auto" />
                                </div>
                                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                                    <video src="/videos/workshopy-skoly-2.mp4" controls className="w-full h-auto" />
                                </div>
                            </div>

                            <div className="bg-black text-white p-10 rounded-2xl mb-24 shadow-xl">
                                <div className="text-[#ffd37c] font-bold uppercase tracking-widest mb-2 text-sm text-center">Cena workshopu</div>
                                <h3 className="text-[1.8rem] mb-8 text-center leading-tight">
                                    Cena sa odvíja od počtu tried. Množstevnú zľavu si dohodnete telefonicky alebo emailom.
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                                    <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center">
                                        <p className="text-black text-sm mb-1 uppercase tracking-wider font-bold">120 minútový workshop</p>
                                        <p className="text-[#ffd37c] text-[2.5rem] font-bold">130 EUR</p>
                                        <p className="text-white/40 text-xs">pre jednu triedu</p>
                                    </div>
                                    <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center">
                                        <p className="text-black text-sm mb-1 uppercase tracking-wider font-bold">180 minútový workshop</p>
                                        <p className="text-[#ffd37c] text-[2.5rem] font-bold">160 EUR</p>
                                        <p className="text-white/40 text-xs">pre jednu triedu</p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-[2.5rem] mb-12 text-black text-center" style={{ fontFamily: 'var(--font-heading)' }}>Typy workshopov</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* RADOSŤ SPOLU PRACOVAŤ */}
                                <div className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                                    <div className="text-[#ffd37c] font-bold mb-2 uppercase tracking-tighter">RADOSŤ SPOLU PRACOVAŤ</div>
                                    <h4 className="text-[1.8rem] mb-4 text-black leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>Spolupráca a tímový duch</h4>
                                    <p className="text-[#000] mb-6 leading-relaxed">
                                        Spolupráca medzi spolužiakmi, tímový duch, všimavosť a vnímavosť sú hlavné témy tohto workshopu. Všetci žiaci spolu s učiteľom sú interaktívne vtiahnutí do hry a prostredníctvom hry majú možnosť sa lepšie spoznať. Vytvorí sa tým základ pre vzájomný rešpekt a dôveru.
                                    </p>
                                    <div className="mt-auto pt-6 border-t border-gray-50 text-sm font-bold text-black">
                                        Vhodný od 5.triedy ZŠ a pre SŠ
                                    </div>
                                </div>

                                {/* RADOSŤ ĽAHŠIE ŠTUDOVAŤ */}
                                <div className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                                    <div className="text-[#ffd37c] font-bold mb-2 uppercase tracking-tighter">RADOSŤ ĽAHŠIE ŠTUDOVAŤ</div>
                                    <h4 className="text-[1.8rem] mb-4 text-black leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>Efektívne učenie</h4>
                                    <p className="text-[#000] mb-6 leading-relaxed">
                                        Ako sa ľahšie učiť? Aké postupy a metódy sú pre mňa vhodné? Ako fungujú pamäťové háčiky? Ako sa učiť prostredníctvom myšlienkových máp? To sú otázky, ktoré si často študenti kladú. Tento workshop im umožní spoznať, ako sa efektívnejšie učiť.
                                    </p>
                                    <div className="mt-auto pt-6 border-t border-gray-50 text-sm font-bold text-black">
                                        Vhodný od 9.triedy ZŠ a pre SŠ
                                    </div>
                                </div>

                                {/* RADOSŤ SPOLU TVORIŤ */}
                                <div className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                                    <div className="text-[#ffd37c] font-bold mb-2 uppercase tracking-tighter">RADOSŤ SPOLU TVORIŤ</div>
                                    <h4 className="text-[1.8rem] mb-4 text-black leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>Kreatívne riešenia</h4>
                                    <p className="text-[#000] mb-6 leading-relaxed">
                                        Kreativny spôsob riešenia situácii, vzájomná spolupráca a spoločná tvorba sú hlavným cieľom workshopu. To ako funguje kreatívna myseľ a ako rozvíjať kreatívneho ducha, majú možnosť zažiť žiaci spolu s učiteľom práve na tomto workshope.
                                    </p>
                                    <div className="mt-auto pt-6 border-t border-gray-50 text-sm font-bold text-black">
                                        Vhodný od 5.triedy ZŠ a pre SŠ
                                    </div>
                                </div>

                                {/* RADOSŤ SPOLU IMPROVIZOVAŤ */}
                                <div className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                                    <div className="text-[#ffd37c] font-bold mb-2 uppercase tracking-tighter">RADOSŤ SPOLU IMPROVIZOVAŤ</div>
                                    <h4 className="text-[1.8rem] mb-4 text-black leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>Flexibilita a nápady</h4>
                                    <p className="text-[#000] mb-6 leading-relaxed">
                                        Ako rýchlejšie generovať nápady, ako vedieť flexibilne reagovať a vedieť pracovať s asociáciami sa môžu žiaci naučiť na tomto workshope. Zároveň si môžu vyskúšať a naučiť sa základy improvizačného myslenia prostredníctvom divadelných techník.
                                    </p>
                                    <div className="mt-auto pt-6 border-t border-gray-50 text-sm font-bold text-black">
                                        Vhodný od 6.triedy ZŠ a pre SŠ
                                    </div>
                                </div>
                            </div>

                            <div className="py-16">
                                <h3 className="text-[2.5rem] mb-12 text-center text-black" style={{ fontFamily: 'var(--font-heading)' }}>
                                    Skúsenosti zo škôl
                                </h3>
                                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                                    {[
                                        'Snímka obrazovky 2026-01-30 o 11.11.23.webp',
                                        'Snímka obrazovky 2026-01-30 o 11.12.39.webp',
                                        'Snímka obrazovky 2026-01-30 o 11.18.05.webp'
                                    ].map((img, i) => (
                                        <div key={i} className="break-inside-avoid">
                                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                                                <img
                                                    src={`/images/reviews/${img}`}
                                                    alt={`Recenzia ${i + 1}`}
                                                    className="w-full h-auto block"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-24 text-center p-12 bg-gray-50 rounded-3xl border border-gray-100">
                                <h3 className="text-[2rem] mb-4 text-black" style={{ fontFamily: 'var(--font-heading)' }}>Chcete zorganizovať workshop?</h3>
                                <p className="text-black mb-8 max-w-xl mx-auto">Deň a čas workshopu si dohodneme telefonicky alebo emailom. Sme pripravení prísť k vám alebo vás privítať u nás.</p>
                                <Button href="/ludus-academy/kontakt">Kontaktujte nás pre termín</Button>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
