import AcademySubpageSidebar from '@/components/AcademySubpageSidebar';
import Button from '@/components/Button';
import Image from 'next/image';

export default function ImprovizaciaPage() {
    return (
        <div className="bg-white">
            <section
                className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
                style={{ backgroundImage: "url('/images/academy/IMG_3649.webp')" }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <h1
                    className="relative text-white text-[5rem] z-10 text-center max-md:text-[3rem] px-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Herecký kurz improvizácie
                </h1>
            </section>

            <div className="w-[95%] mx-auto py-16">
                <div className="flex gap-16 items-start max-xl:flex-col">
                    <AcademySubpageSidebar />

                    <main className="flex-1 min-w-0">
                        <div className="mb-24">
                            <h2 className="text-[3rem] mb-2 text-black leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                                RADOSŤ <span className="text-[#ffd37c]">SI</span> IMPROVIZOVAŤ
                            </h2>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-[#ffd37c] font-bold text-[1.2rem] mb-8 uppercase tracking-widest">
                                <span>IMPROVIZÁCIA</span>
                                <span>•</span>
                                <span>PRINÁŠA RADOSŤ</span>
                                <span>•</span>
                                <span>KOMUNIKOVAŤ!</span>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
                                <div className="lg:col-span-2 text-[1.1rem] text-[#000] space-y-6 leading-relaxed">
                                    <div className="space-y-4 italic font-medium text-black border-l-4 border-[#ffd37c] pl-6 py-2">
                                        <p>Stáva sa Vám, že sa v určitých situáciach cítite zatlačený do kúta?</p>
                                        <p>Príde na vás neistota a jednoducho Vám začínajú dochádzať slová?</p>
                                        <p>Potrebujete z daného momentu alebo komunikácie rýchlo vykorčulovať a neviete ako na to?</p>
                                        <p>Spomeňte si koľko krát ste boli v podobných situáciach.</p>
                                    </div>
                                    <p>
                                        Dobrá správa je, že na to existuje jednoduché riešenie.
                                        Po absolvovaní kurzu divadelnej improvizácie budete mať viditeľné výsledky a už Vás nič nezaskočí. Dokonca budete schopní improvizovať na javisku pred divákmi a mať z toho radosť.
                                        Stante sa pánom situácie a uchopte komunikáciu do svojich rúk. Poďte s nami improvizovať a popri tom sa zabaviť a odreagovať.
                                    </p>
                                    <p>
                                        Prostrednítvom divadelných improvizačných hier a techník narastie vaša sloboda prejavu. Divadelné improvizácie sú v ČR úspešné už niekoľko rokov a my ich teraz prinášame aj na Slovensko pre verejnosť. Ak si kladiete otázku, čo asi na tomto kurze môžete robiť, tak pre lepšie uchopenie si predstavte dlhoročný TV projekt "Partička".
                                    </p>
                                </div>
                                <div className="lg:col-span-1 space-y-4">
                                    {[
                                        "FeAV8Z_55rI",
                                        "ZGeBKba0faU",
                                        "oOXcZaUoWG0"
                                    ].map((id) => (
                                        <div key={id} className="relative w-full pb-[56.25%] rounded-xl overflow-hidden shadow-lg bg-black">
                                            <iframe
                                                src={`https://www.youtube.com/embed/${id}`}
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="absolute top-0 left-0 w-full h-full"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <h3 className="text-[1.8rem] mb-8 text-black" style={{ fontFamily: 'var(--font-heading)' }}>
                                Aké zmeny prinesie KURZ do vášho života?
                            </h3>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                                <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100">
                                    <ul className="space-y-4">
                                        {[
                                            'Posuniete svoje vyjadrovacie schopnosti na novú úroveň.',
                                            'Rozšírite si slovnú zásobu a zlepšíte verbálny prejav.',
                                            'Prekonáte strach z komunikácie.',
                                            'Dodáte si viac sebavedomia a sebadôvery.',
                                            'Odbúrate bloky z neznámych situácii.',
                                            'Dostanete väčšiu istotu v neistote.',
                                            'Podnietite svoje kreatívne myslenie.',
                                            'Rozviniete pohotovosť a flexibilitu.',
                                            'Odkryjete svoju humornú stránku.',
                                            'Naučíte sa rýchlo generovať nápady.',
                                            'Zlepšíte si výslovnosť a prácu s vlastným hlasom.',
                                            'Získate prezentačné zručnosti',
                                            'Zdokonalíte spoluprácu a podporíte svoje líderstvo.',
                                            'Dodáte si energiu do života.',
                                            'Budete mať radosť z komunikácie.'
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-3 items-start text-[#000]">
                                                <span className="text-[#ffd37c] mt-1 font-bold">✓</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="rounded-2xl overflow-hidden shadow-xl h-fit sticky top-24">
                                    <video
                                        src="/videos/improvizacia.mp4"
                                        controls
                                        poster="/images/academy/IMG_3649.webp"
                                        className="w-full aspect-video object-cover"
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>

                            <div className="bg-black text-white p-10 rounded-2xl mb-12 shadow-xl">
                                <div className="text-[#ffd37c] font-bold uppercase tracking-widest mb-2 text-sm">Investícia</div>
                                <h3 className="text-[2rem] mb-6 leading-tight">
                                    NEKUPUJETE SI KURZ, INVESTUJETE DO SVOJHO ROZVOJA: <span className="text-[#ffd37c]">308 EUR</span>
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-gray-300">
                                    <ul className="space-y-3">
                                        <li className="flex justify-between border-b border-white/10 pb-2">
                                            <span>Trvanie kurzu:</span>
                                            <span className="text-white font-bold">9 týždňov</span>
                                        </li>
                                        <li className="flex justify-between border-b border-white/10 pb-2">
                                            <span>Týždenne:</span>
                                            <span className="text-white font-bold">2,5 hodiny</span>
                                        </li>
                                        <li className="flex justify-between border-b border-white/10 pb-2">
                                            <span>Celkovo:</span>
                                            <span className="text-white font-bold">22,5 hodín</span>
                                        </li>
                                    </ul>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex gap-2 items-center"><span className="text-[#ffd37c]">•</span> 22,5 hodín intenzívnej výučby + divadelná impro show</li>
                                        <li className="flex gap-2 items-center"><span className="text-[#ffd37c]">•</span> Improvizačné cvičenia a techniky</li>
                                        <li className="flex gap-2 items-center"><span className="text-[#ffd37c]">•</span> Praktický tréning</li>
                                        <li className="flex gap-2 items-center"><span className="text-[#ffd37c]">•</span> Profesionálni lektori</li>
                                        <li className="flex gap-2 items-center"><span className="text-[#ffd37c]">•</span> Záverečná impro show pre divákov</li>
                                        <li className="flex gap-2 items-center"><span className="text-[#ffd37c]">•</span> Certifikát</li>
                                    </ul>
                                </div>
                                <div className="mt-8 pt-6 border-t border-white/10 text-sm italic">
                                    <p className="opacity-70">PODMIENKA ÚČASTI: vek minimálne 18 rokov a ukončené stredoškolské vzdelanie</p>
                                    <p className="text-[#ffd37c] font-bold mt-2 uppercase tracking-widest">Každý SA VIE NAUČIŤ</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {/* Silné Reči Section */}
                                <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 flex gap-12 items-center max-md:flex-col">
                                    <div className="flex-1">
                                        <h3 className="text-[2rem] mb-6 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                                            Aj profesionáli sa u nás vzdelávajú
                                        </h3>
                                        <p className="text-xl text-black leading-relaxed">
                                            Sme hrdí na to, že aj **stand-up komici zo Silných rečí** sa u nás vzdelávajú v improvizáciách, aby posunuli svoje pohotové reakcie na novú úroveň.
                                        </p>
                                    </div>
                                    <div className="w-1/3 max-md:w-full relative h-[300px]">
                                        <Image
                                            src="/images/reviews/improv-standup.webp"
                                            alt="Improvizácia v Ludus Academy"
                                            fill
                                            className="object-cover rounded-xl shadow-lg"
                                        />
                                    </div>
                                </div>

                                {/* Other Reviews */}
                                <div className="py-12">
                                    <h3 className="text-[2.5rem] mb-12 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
                                        Čo o nás hovoria účastníci
                                    </h3>
                                    <div className="columns-1 md:columns-2 gap-8 space-y-8">
                                        {[
                                            'Snímka obrazovky 2026-01-30 o 11.11.59.webp',
                                            'Snímka obrazovky 2026-01-30 o 11.16.57.webp',
                                            'Snímka obrazovky 2026-01-30 o 11.17.36.webp',
                                            'Snímka obrazovky 2026-01-30 o 11.19.42.webp',
                                            'Snímka obrazovky 2026-01-30 o 11.20.22.webp'
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

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white border-2 border-[#ffd37c] p-8 rounded-2xl relative overflow-hidden flex flex-col">
                                        <div className="absolute top-0 right-0 bg-[#ffd37c] text-black px-4 py-1 font-bold text-xs uppercase">1 VOĽNÉ MIESTO</div>
                                        <h4 className="text-[1.5rem] font-bold text-black mb-2">23.1. - 27.3.2026</h4>
                                        <p className="text-black mb-4">(hodina nebude: 20.2.2026)</p>
                                        <p className="font-bold text-black text-lg mb-4 uppercase tracking-tighter">každý PIATOK od 17:30 do 20:00</p>
                                        <div className="flex flex-col gap-1 mb-8">
                                            <span className="text-sm uppercase text-black font-bold">Lektori</span>
                                            <p className="text-black font-medium">Mgr. art Lenka Libjaková, Mgr.art Katarína Gurová</p>
                                            <p className="text-xs text-black italic">(viac o lektoroch v sekcii O NÁS)</p>
                                        </div>
                                        <div className="mt-auto">
                                            <Button
                                                href="https://form.fapi.cz/?id=379a5104-4a64-47a3-b0a1-f6969514e15b"
                                                className="w-full justify-center"
                                                target="_blank"
                                            >
                                                PRIHLÁSIŤ SA NA KURZ
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl relative overflow-hidden flex flex-col">
                                        <h4 className="text-[1.5rem] font-bold text-black mb-2">12.4. - 7.6.2026</h4>
                                        <p className="font-bold text-black text-lg mb-4 uppercase tracking-tighter">každú NEDEĽU od 15:00 do 17:30</p>
                                        <div className="flex flex-col gap-1 mb-8">
                                            <span className="text-sm uppercase text-black font-bold">Lektor</span>
                                            <p className="text-black font-medium">Mgr. art Jozef Jurčišin-Kukľa</p>
                                            <p className="text-xs text-black italic">(viac o lektoroch v sekcii O NÁS)</p>
                                        </div>
                                        <div className="mt-auto">
                                            <Button
                                                href="https://form.fapi.cz/?id=379a5104-4a64-47a3-b0a1-f6969514e15b"
                                                className="w-full justify-center"
                                                target="_blank"
                                            >
                                                PRIHLÁSIŤ SA NA KURZ
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl relative overflow-hidden flex flex-col">
                                        <div className="absolute top-0 right-0 bg-black text-white px-4 py-1 font-bold text-xs uppercase">3 VOĽNÉ MIESTA</div>
                                        <h4 className="text-[1.5rem] font-bold text-black mb-2">14.4 - 9.6.2026</h4>
                                        <p className="font-bold text-black text-lg mb-4 uppercase tracking-tighter">každý UTOROK od 18:00 do 20:30</p>
                                        <div className="flex flex-col gap-1 mb-6">
                                            <span className="text-sm uppercase text-black font-bold">Lektori</span>
                                            <p className="text-black font-medium">Mgr. art Ladislav Ladomirjak, Mgr. art Jozef Jurčišin-Kukľa</p>
                                            <p className="text-xs text-black italic">(viac o lektoroch v sekcii O NÁS)</p>
                                        </div>
                                        <p className="text-sm text-[#ffd37c] font-bold italic mb-8">Ide o skupinu, ktorá už spolu absolvovala jeden Improvizačný kurz</p>
                                        <div className="mt-auto">
                                            <Button
                                                href="https://form.fapi.cz/?id=379a5104-4a64-47a3-b0a1-f6969514e15b"
                                                className="w-full justify-center"
                                                target="_blank"
                                            >
                                                PRIHLÁSIŤ SA NA KURZ
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="bg-[#ffd37c]/10 border border-[#ffd37c] p-8 rounded-2xl text-center flex flex-col justify-center">
                                        <h4 className="text-[1.5rem] font-bold text-black mb-4 uppercase" style={{ fontFamily: 'var(--font-heading)' }}>
                                            ĎALŠÍ CYKLUS KURZOV SPUSTÍME V SEPTEMBRI 2026
                                        </h4>
                                        <p className="text-[#000] text-sm mb-6">
                                            V prípade, že máte o tento kurz záujem, tak nám pokojne napíšte a my Vás zaradíme na "WAITING LIST".
                                        </p>
                                        <div className="space-y-4">
                                            <h5 className="text-[1.2rem] font-bold text-black uppercase tracking-widest">STAČÍ SA LEN ROZHODNÚŤ</h5>
                                            <p className="text-black text-sm italic">Zábava a rovnako dobre naladení ľudia sú zaručení.</p>
                                            <Button href="/ludus-academy/kontakt" className="w-full justify-center">Mám záujem o waiting list</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
