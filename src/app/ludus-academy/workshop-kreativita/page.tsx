import AcademySubpageSidebar from '@/components/AcademySubpageSidebar';
import Button from '@/components/Button';
import Image from 'next/image';

export default async function WorkshopKreativitaPage() {

    return (
        <div className="bg-white">
            <section
                className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
                style={{ backgroundImage: "url('/images/academy/IMG_9087.webp')" }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <h1
                    className="relative text-white text-[5rem] z-10 text-center max-md:text-[3rem] px-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Workshop kreatívneho myslenia
                </h1>
            </section>

            <div className="w-[95%] mx-auto py-16">
                <div className="flex gap-16 items-start max-xl:flex-col">
                    <AcademySubpageSidebar />

                    <main className="flex-1 min-w-0">
                        <div className="mb-24">
                            <h2 className="text-[3rem] mb-2 text-black leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                                RADOSŤ <span className="text-[#f47f44]">si</span> TVORIŤ
                            </h2>
                            <div className="text-[#f47f44] font-bold text-[1.2rem] mb-8 uppercase tracking-widest leading-tight">
                                KAŽDÝ Z NÁS VIE A MÔŽE BYŤ KREATÍVNY
                            </div>

                            <div className="text-[1.1rem] text-[#000] space-y-6 mb-12 leading-relaxed">
                                <p className="text-[1.3rem] font-bold text-black border-l-4 border-[#f47f44] pl-6 py-2">
                                    Naša predstavivosť a kreativita majú neobmedzené možnosti.
                                </p>
                                <p>
                                    Nie je to len výsada „umelcov“. Kreatívni vieme byť takmer pri každej činnosti, ktorú každodenne robíme. Kreativita je proces objavovania – a najlepším spôsobom, ako ju rozvíjať, je nebáť sa skúšať, tvoriť a nechať sa unášať vlastnou zvedavosťou. Poďme spolu zažiť „Kreatívne flow“.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <div className="p-8 bg-black text-white rounded-2xl shadow-xl">
                                    <h3 className="text-[1.5rem] mb-4 text-[#f47f44] font-bold uppercase" style={{ fontFamily: 'var(--font-heading)' }}>Pre koho je workshop určený?</h3>
                                    <div className="space-y-4 text-gray-300">
                                        <p>Workshop kreatívneho myslenia je určený pre všetkých, ktorí chcú objaviť alebo rozvíjať svoju kreativitu – bez ohľadu na vek, profesiu či skúsenosti.</p>
                                        <p>Je ideálny pre ľudí, ktorí sa chcú naučiť myslieť inak, hľadať nové riešenia, byť otvorenejší novým nápadom alebo prekonať obmedzujúce presvedčenia.</p>
                                        <p className="font-bold text-white">Ak cítite, že by ste chceli do svojho života vniesť viac hravosti, tvorivosti a spontánnosti, tento kurz je pre vás.</p>
                                    </div>
                                </div>
                                <div className="p-8 bg-gray-50 border border-gray-100 rounded-2xl shadow-sm">
                                    <h3 className="text-[1.5rem] mb-4 text-black font-bold uppercase" style={{ fontFamily: 'var(--font-heading)' }}>Zámer workshopu</h3>
                                    <div className="space-y-4 text-[#000]">
                                        <p>Cieľom workshopu je rozvíjať kreatívne myslenie a naučiť sa pozerať na veci z nových uhlov. Kreativita nie je len pre umelcov – je prirodzenou súčasťou každého z nás.</p>
                                        <p>Prostredníctvom rôznych techník and cvičení sa naučíme odbúravať bloky, ktoré nám bránia tvoriť, a posilníme schopnosť prichádzať s novými nápadmi a riešeniami.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white border border-[#f47f44]/20 p-10 rounded-2xl mb-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
                                <p className="mb-6 leading-relaxed text-[#000]">
                                    Zameriame sa na rozvoj konkrétnych zručností, ktoré podporujú tvorivé myslenie.
                                    Budeme pracovať s metódami ako <strong className="text-black">synektika, analógia, metafora, metóda šiestich mysliacich klobúkov, improvizácia, či zmyslové vnímanie</strong>.
                                    Pomocou asociácií a predstavivosti odhalíme nové spôsoby riešenia problémov a rozšírime hranice nášho vnímania.
                                </p>
                                <p className="mb-6 leading-relaxed text-[#000]">
                                    Workshop je praktický a interaktívny. Budeme sa aktívne hrať, experimentovať a objavovať nové prístupy k mysleniu.
                                    Pretože to vedie k radostným prekvapeniam a novým nápadom. A je to najlepší spôsob, ako vieme odhaliť to, čo je v nás.
                                </p>

                                <div className="mt-12">
                                    <h3 className="text-[1.8rem] mb-8 text-black" style={{ fontFamily: 'var(--font-heading)' }}>Čo si z workshopu odnesiete?</h3>
                                    <div className="bg-gray-50 border border-gray-100 p-8 rounded-xl space-y-4">
                                        <p className="flex gap-3"><span className="text-[#f47f44] font-bold">•</span> Po absolvovaní workshopu budete kreatívnejší a schopnejší riešiť problémy originálnejším spôsobom.</p>
                                        <p className="flex gap-3"><span className="text-[#f47f44] font-bold">•</span> Naučíte sa, ako rozvíjať svoju tvorivosť v každodennom živote, práci aj medziľudských vzťahoch.</p>
                                        <p className="flex gap-3"><span className="text-[#f47f44] font-bold">•</span> Získate praktické nástroje a techniky, ktoré vám pomôžu rozvíjať kreativitu aj po skončení workshopu.</p>
                                        <p className="flex gap-3"><span className="text-[#f47f44] font-bold">•</span> Stačí sa odvážiť skúšať, hrať sa a objavovať!</p>
                                        <p className="flex gap-3"><span className="text-[#f47f44] font-bold">•</span> Zistíte, kde sú vaše silné stránky, kde máte limity a čo s nimi môžete robiť.</p>
                                        <p className="flex gap-3 font-bold text-black"><span className="text-[#f47f44]">•</span> Posuniete svoje kreatívne myslenie na vyššiu úroveň a naučíte sa pracovať so svojím potenciálom.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-10 rounded-2xl border-2 border-black mb-12">
                                <h3 className="text-[1.8rem] mb-8 text-black uppercase" style={{ fontFamily: 'var(--font-heading)' }}>AKÉ ZMENY PRINESIE KURZ DO VÁŠHO ŽIVOTA?</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                                    {[
                                        'Zbavíte sa obmedzujúcich presvedčení.',
                                        'Získate nové pohľady na situácie.',
                                        'Budete flexibilnejší.',
                                        'Zvýšite si vnímavosť a všímavosť.',
                                        'Budete vedieť ako funguje asociačný proces.',
                                        'Schopnosť prichádzať s novými nápadmi.',
                                        'Objavíte v sebe viac fantázie.',
                                        'Naučíte sa myslieť flexibilnejšie.',
                                        'Prepájanie súvislostí novými očami.',
                                        'Zmena perspektívy na inovatívne výzvy.',
                                        'Lepšie zvládanie zmien a nepredvídateľnosti.',
                                        'Väčšia sebadôvera v tvorivom procese.'
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 items-start text-[#000]">
                                            <span className="text-[#f47f44] mt-1 font-bold">✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-black text-white p-10 rounded-2xl mb-12 shadow-xl">
                                <div className="text-[#f47f44] font-bold uppercase tracking-widest mb-2 text-sm text-center">Investícia</div>
                                <h3 className="text-[2rem] mb-8 text-center leading-tight">
                                    NEKUPUJETE SI WORKSHOP, INVESTUJETE DO SVOJHO ROZVOJA: <span className="text-[#f47f44]">119 EUR</span>
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-gray-300">
                                    <ul className="space-y-3 font-medium">
                                        <li className="flex justify-between border-b border-white/10 pb-2">
                                            <span>Trvanie kurzu:</span>
                                            <span className="text-white font-bold">6 hodín</span>
                                        </li>
                                        <li className="flex justify-between border-b border-white/10 pb-2">
                                            <span>Obedná pauza:</span>
                                            <span className="text-white">1 hodina (navyše)</span>
                                        </li>
                                        <li className="flex justify-between border-b border-white/10 pb-2">
                                            <span>Skupina:</span>
                                            <span className="text-white font-bold">max. 10 ľudí</span>
                                        </li>
                                    </ul>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex gap-2 items-center"><span className="text-[#f47f44]">•</span> Profesionálna lektorka MgA. Baranová</li>
                                        <li className="flex gap-2 items-center"><span className="text-[#f47f44]">•</span> Kreatívne metódy and techniky</li>
                                        <li className="flex gap-2 items-center"><span className="text-[#f47f44]">•</span> Občerstvenie: ovocie, káva, čaj</li>
                                        <li className="flex gap-2 items-center"><span className="text-[#f47f44]">•</span> Certifikát o absolvovaní</li>
                                    </ul>
                                </div>
                                <div className="mt-8 pt-6 border-t border-white/10 text-sm italic opacity-70">
                                    PODMIENKA ÚČASTI: vek minimálne 18 rokov and ukončené stredoškolské vzdelanie
                                </div>
                            </div>

                            {/* Lector Profile */}
                            <div className="bg-gray-50 border border-gray-100 p-10 rounded-2xl mb-12">
                                <h3 className="text-[1.8rem] mb-8 text-black" style={{ fontFamily: 'var(--font-heading)' }}>Kto sa vám bude venovať?</h3>
                                <div className="flex gap-10 items-start max-md:flex-col">
                                    <div className="w-[220px] h-[220px] rounded-full overflow-hidden flex-shrink-0 border-4 border-[#f47f44] relative">
                                        <Image
                                            src="/pedagogovia/KATARÍNA BARANOVA.webp"
                                            alt="Katarína Baranová"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-[1.8rem] font-bold text-black mb-4">Mgr.art Katarína Baranová ArtD.</h4>
                                        <div className="text-[#000] space-y-4 text-[1rem] leading-relaxed">
                                            <p>V divadle sa ocitla hádam ešte skôr, ako začala chodiť. Celý Katkin život je tak spätý s herectvom, dramatickou výchovou and kreativitou. Vyštudovala bábkoherectvo and od 19 rokov aktívne pôsobí ako pedagóg v škole LUDUS.</p>
                                            <p>Posledných 15 rokov Katka aktívne využíva svoju kreativitu v OZ Červený nos - Clowndoctors. Od roku 2010 je riaditeľkou SZUŠ LUDUS. Je autorkou viacerých vzdelávacích programov and knihy <strong className="text-black">TVORÍM, TEDA SOM</strong>.</p>
                                            <p className="italic font-bold text-black">"Ak ťa tento workshop zaujal, tak neváhaj and prihlás sa. Bude to pecka :D"</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Terms and Waiting List */}
                            <div className="bg-white border-2 border-[#f47f44] p-10 rounded-2xl mb-12 relative overflow-hidden text-center">
                                <h4 className="text-[2rem] font-bold text-black mb-4 uppercase" style={{ fontFamily: 'var(--font-heading)' }}>TERMÍN: WAITING LIST</h4>
                                <p className="text-[1.2rem] text-black font-bold mb-4 uppercase tracking-tighter">NAPÍŠTE NÁM A MY VÁS PRIDÁME</p>
                                <div className="flex flex-col gap-2 mb-8 max-w-md mx-auto">
                                    <div className="flex justify-between border-b pb-2"><span>Čas:</span> <strong>09:30 - 16:30</strong></div>
                                    <div className="flex justify-between border-b pb-2"><span>Obedná pauza:</span> <strong>12:30 - 13:30</strong></div>
                                </div>
                                <div className="flex gap-4 justify-center max-sm:flex-col max-sm:items-center">
                                    <Button
                                        href="mailto:info@ludusacademy.sk"
                                        className="!bg-black !text-white hover:!bg-gray-800"
                                    >
                                        info@ludusacademy.sk
                                    </Button>
                                    <Button
                                        href="tel:+421947942125"
                                        className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white"
                                    >
                                        0947 942 125
                                    </Button>
                                </div>
                            </div>

                            {/* Book Section */}
                            <div className="bg-gray-900 text-white p-12 rounded-3xl mt-24 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#f47f44]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                                <div className="flex gap-12 items-center max-md:flex-col">
                                    <div className="w-[200px] h-auto rounded shadow-2xl relative overflow-hidden flex-shrink-0">
                                        <Image
                                            src="/images/kniha/kniha-main left.webp"
                                            alt="Kniha Tvorím, teda som"
                                            width={200}
                                            height={267}
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-[#f47f44] font-bold uppercase tracking-widest text-sm mb-2">Katarína Baranová</div>
                                        <h3 className="text-[2.5rem] mb-4 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>Tvorím, teda som</h3>
                                        <p className="text-lg text-gray-300 mb-6">200 hier a cvičení na rozvoj kreatívneho potenciálu</p>
                                        <div className="space-y-4 text-white mb-8 max-w-xl">
                                            <p>Kniha je praktickou príručkou pre pedagógov a lektorov, ktorých zaujímajú kreatívne metódy učenia.</p>
                                            <p>Je zároveň určená pre rodičov a inšpiráciu tu nájdu aj všetci, ktorí chcú sa učiť prostredníctvom zážitku.</p>
                                        </div>
                                        <Button
                                            href="/ludus-academy/kniha"
                                            className="bg-[#f47f44] text-black border-none hover:bg-white !bg-[#f47f44]"
                                        >
                                            Viac o knihe
                                        </Button>
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
