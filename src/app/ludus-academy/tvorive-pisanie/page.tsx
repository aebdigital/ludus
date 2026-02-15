import AcademySubpageSidebar from '@/components/AcademySubpageSidebar';
import Button from '@/components/Button';
import Image from 'next/image';

export default function TvorivePisaniePage() {
    return (
        <div className="bg-white">
            <section
                className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
                style={{ backgroundImage: "url('/images/academy/IMG_4766.webp')" }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <h1
                    className="relative text-white text-[5rem] z-10 text-center max-md:text-[3rem] px-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Kurz tvorivého písania
                </h1>
            </section>

            <div className="w-[95%] mx-auto py-16">
                <div className="flex gap-16 items-start max-xl:flex-col">
                    <AcademySubpageSidebar />

                    <main className="flex-1 min-w-0">
                        <div className="mb-24">
                            <h2 className="text-[3rem] mb-2 text-black leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                                RADOSŤ <span className="text-[#ffd37c]">vedieť</span> PÍSAŤ
                            </h2>
                            <div className="text-[#ffd37c] font-bold text-[1.2rem] mb-8 uppercase tracking-widest leading-tight">
                                NIEKEDY JE LEPŠIE PÍSAŤ. IBA PÍSAŤ.
                            </div>

                            <div className="text-[1.1rem] text-[#000] space-y-6 mb-12 leading-relaxed">
                                <p className="italic font-medium text-black border-l-4 border-[#ffd37c] pl-6 py-2">
                                    Nie všetko sa dá povedať nahlas. Niekedy je lepšie písať. Písanie umožňuje človeku usporiadať si myšlienky a vyjadriť oveľa viac emócii zo zákutí vlastného ja, než rozprávanie.
                                </p>
                                <p>
                                    Pomáha vám, ak svoje pocity vyjadríte písaným slovom? Je papier a pero vašim priateľom v ťažkých chvíľach? Prináša vám písanie radosť a uspokojenie? Cítite radosť, ak sa vám podarí napísať niečo úprimné? Chcete objaviť nové možnosti, ako sa vyjadriť pomocou písaného slova? Máte chuť zistiť rozdiel medzi textom a "textom"? Chcete spoznať možnosti, ako váš text urobiť pôsobivejším? Chcete vedieť, ako sa vyhnúť klišé a objaviť spôsoby, ako byť originálny? Tento kurz prinesie do vášho života nové impulzy a nový uhol pohľadu na písaný text.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 mb-12 shadow-sm">
                                <h3 className="text-[1.8rem] mb-8 text-black" style={{ fontFamily: 'var(--font-heading)' }}>
                                    Aké zmeny prinesie KURZ do vášho života?
                                </h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                    {[
                                        'Naučíte sa ako prostredníctvom písania uchopiť tému, námet a príbeh.',
                                        'Zistíte ako dať textu správnu štruktúru, ako zvoliť správny žáner.',
                                        'Dozviete sa ako sa vyhnúť alogizmom, klišé a frázam.',
                                        'Naučíte sa vytvárať atmosféru, ktorá vtiahne čitateľa.',
                                        'Vysvetlíte si, ako vybudovať živú postavu, vzťahy a motivácie postáv.',
                                        'Budete vedieť preniesť do textu emóciu, dramatickú situáciu a živý dialóg.',
                                        'Dozviete sa, v čom tkvie úspech písania vtipných textov.',
                                        'Naučíte sa princípy písania poviedky, divadelného či filmového scenára.',
                                        'Bude Vás učiť profesionálny dlhoročný lektor.',
                                        'Strávite svoj čas zmysluplne a netradične.',
                                        'Spoznáte viac sám seba.',
                                        'Zlepšíte sa v slovnej zásobe.'
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 items-start text-[#000]">
                                            <span className="text-[#ffd37c] mt-1 font-bold">✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-black text-white p-10 rounded-2xl mb-12 shadow-xl">
                                <div className="text-[#ffd37c] font-bold uppercase tracking-widest mb-2 text-sm">Investícia</div>
                                <h3 className="text-[2rem] mb-6 leading-tight">
                                    NEKUPUJETE SI KURZ, INVESTUJETE DO SVOJHO ROZVOJA: <span className="text-[#ffd37c]">308 EUR</span>
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-gray-300">
                                    <ul className="space-y-3 font-medium">
                                        <li className="flex justify-between border-b border-white/10 pb-2">
                                            <span>Trvanie kurzu:</span>
                                            <span className="text-white font-bold">9 týždňov</span>
                                        </li>
                                        <li className="flex justify-between border-b border-white/10 pb-2">
                                            <span>Počet hodín:</span>
                                            <span className="text-white font-bold">22,5 hodín</span>
                                        </li>
                                        <li className="flex justify-between border-b border-white/10 pb-2">
                                            <span>Dĺžka lekcie:</span>
                                            <span className="text-white font-bold">2,5 hodiny</span>
                                        </li>
                                    </ul>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex gap-2 items-center"><span className="text-[#ffd37c]">•</span> Profesionálny lektor so skúsenosťami</li>
                                        <li className="flex gap-2 items-center"><span className="text-[#ffd37c]">•</span> Individuálny prístup</li>
                                        <li className="flex gap-2 items-center"><span className="text-[#ffd37c]">•</span> Rôzne tvorivé metódy písania</li>
                                        <li className="flex gap-2 items-center"><span className="text-[#ffd37c]">•</span> Káva a čaj počas kurzu</li>
                                        <li className="flex gap-2 items-center"><span className="text-[#ffd37c]">•</span> Certifikát</li>
                                    </ul>
                                </div>
                                <div className="mt-8 pt-6 border-t border-white/10 text-sm italic opacity-70">
                                    PODMIENKA ÚČASTI: vek minimálne 18 rokov a ukončené stredoškolské vzdelanie
                                </div>
                            </div>

                            {/* Lector Section */}
                            <div className="bg-white border border-gray-100 p-10 rounded-2xl mb-12 shadow-sm">
                                <h3 className="text-[1.8rem] mb-8 text-black" style={{ fontFamily: 'var(--font-heading)' }}>Kto sa vám bude venovať?</h3>

                                {/* Michal Rovňák */}
                                <div className="flex gap-8 items-start max-md:flex-col mb-16">
                                    <div className="w-[180px] h-[180px] rounded-full overflow-hidden flex-shrink-0 border-4 border-[#ffd37c] relative">
                                        <Image
                                            src="/pedagogovia/MICHAL ROVŇÁK.webp"
                                            alt="Mgr. art. Michal Rovňák"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-[1.5rem] font-bold text-black mb-4">Mgr. art. Michal Rovňák</h4>
                                        <div className="text-[#000] space-y-4 text-[0.95rem] leading-relaxed">
                                            <p>Je absolventom katedry herectva na VŠMU, ale vo svojej profesnej kariére sa dlhoročne a vo veľkej miere venuje autorskej práci s textom.</p>
                                            <p>Pracoval ako scenárista pre všetky slovenské plnoformátové televízie. Je autorom množstva senárov k seriálom a reláciám zábavného typu. Celé desaťročia spolupracuje na vývoji, príprave a realizácii množstva obľúbených formátov. (Knižkotipy, Horná Dolná, Bez servítky, Tomu neuveríš, Uhádni môj vek, Kakao)</p>
                                            <p>Bol copywriterom (textárom) v niekoľkých reklamných agentúrach a na kreatívnom oddelení televízie Markíza. Je autorom množstva článkov pre webové stránky, scenárista relácie Ťažký týždeň a autor divadelných hier pre mladú generáciu. Zároveň dlhé roky pracoval ako prekladateľ a úpravca dialógov (napríklad Dr. House) a je autorom textov piesní.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Ján Mikuš */}
                                <div className="flex gap-8 items-start max-md:flex-col pt-8 border-t border-gray-50">
                                    <div className="w-[180px] h-[180px] rounded-full overflow-hidden flex-shrink-0 border-4 border-gray-100 relative">
                                        <Image
                                            src="/pedagogovia/JANKO MIKUŠ.webp"
                                            alt="MgA. Ján Mikuš"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-[1.5rem] font-bold text-black mb-4">MgA. Ján Mikuš</h4>
                                        <div className="text-[#000] space-y-4 text-[0.95rem] leading-relaxed">
                                            <p>Janko vyštudoval réžiu na JAMU v Brne. Režíroval v Divadle Husa na provázku, Hadivadle, Divadle Polárka i v Národnom divadle v Košiciach.</p>
                                            <p>V súčasnosti je pedagógom Ateliéru Fyzické divadlo na JAMU v Brne a tiež pedagógom v SZUŠ LUDUS. Dlhodobo spolupracuje s Rádiom Devín ako autor a režisér rozhlasových hier a venuje sa nezávislému autorskému filmu.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Requirements Section */}
                            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 mb-12">
                                <h3 className="text-[1.8rem] mb-6 text-black" style={{ fontFamily: 'var(--font-heading)' }}>Čo je potrebné priniesť na kurz:</h3>
                                <p className="text-[#000] leading-relaxed">
                                    Ideálne je na hodinách písať do laptopu, aby ste vedeli flexibilne a rýchlo texty upraviť a prepísať. Je teda vhodné, keby ste si na lekcie nosili svoj laptop. Ak žiadny nemáte, vieme vám požičať, prípadne ak preferujete písať rukou, môžete, avšak ku koncu kurzu by bolo vhodné texty prepísať do elektronickej podoby.
                                </p>
                            </div>

                            <div className="space-y-12 mb-12">
                                {/* Success Story Section */}
                                <div className="bg-[#ffd37c]/5 p-12 rounded-3xl border border-[#ffd37c]/20">
                                    <div className="flex gap-12 items-center max-md:flex-col mb-12">
                                        <div className="flex-1">
                                            <h3 className="text-[2.5rem] mb-6 leading-tight font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                                                Vaša tvorba nás inšpiruje
                                            </h3>
                                            <p className="text-xl text-black leading-relaxed mb-8">
                                                Náš kurz tvorivého písania nakopol účastníčku **Ivetku** k napísaniu svojej prvej knihy. Sme radi, že vás inšpirujeme a sme súčasťou vašej kreatívnej cesty.
                                            </p>
                                            <div className="relative h-[250px] w-2/3 max-md:w-full">
                                                <Image
                                                    src="/images/reviews/writing-ivetka-2.webp"
                                                    alt="Ivetkina kniha"
                                                    fill
                                                    className="object-cover rounded-xl shadow-lg rotate-[2deg]"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-1/3 max-md:w-full">
                                            <div className="relative h-[550px] w-full">
                                                <Image
                                                    src="/images/reviews/writing-ivetka-1.webp"
                                                    alt="Ivetka - autorka"
                                                    fill
                                                    className="object-cover rounded-2xl shadow-2xl rotate-[-1deg]"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Poems Section */}
                                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-12">
                                        <h4 className="text-[1.8rem] mb-8 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
                                            Ukážky prác našich absolventov
                                        </h4>
                                        <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
                                            <div className="relative h-[450px] bg-gray-50 rounded-xl overflow-hidden group border border-gray-100 p-2">
                                                <Image
                                                    src="/images/reviews/poem-1.webp"
                                                    alt="Báseň absolventa 1"
                                                    fill
                                                    className="object-contain transition-transform group-hover:scale-[1.05]"
                                                />
                                            </div>
                                            <div className="relative h-[450px] bg-gray-50 rounded-xl overflow-hidden group border border-gray-100 p-2">
                                                <Image
                                                    src="/images/reviews/poem-2.webp"
                                                    alt="Báseň absolventa 2"
                                                    fill
                                                    className="object-contain transition-transform group-hover:scale-[1.05]"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* General Reviews */}
                                    <div className="py-8">
                                        <h4 className="text-[2rem] mb-10 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
                                            Spätná väzba od vás
                                        </h4>
                                        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                                            {[
                                                'Snímka obrazovky 2026-01-30 o 11.08.54.webp',
                                                'Snímka obrazovky 2026-01-30 o 11.10.04.webp',
                                                'Snímka obrazovky 2026-01-30 o 11.10.38.webp'
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
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                    <div className="bg-white border-2 border-[#ffd37c] p-10 rounded-2xl relative overflow-hidden flex flex-col">
                                        <div className="absolute top-0 right-0 bg-[#ffd37c] text-black px-6 py-2 font-bold uppercase tracking-widest">TERMÍN</div>
                                        <h4 className="text-[1.8rem] font-bold text-black mb-2 uppercase" style={{ fontFamily: 'var(--font-heading)' }}>14.4 - 9.6.2026</h4>
                                        <p className="font-bold text-black text-[1.5rem] mb-6 uppercase tracking-tight">Každý UTOROK od 18:00 - 20:30</p>
                                        <div className="flex flex-col gap-2 p-6 bg-gray-50 rounded-xl mb-8">
                                            <span className="text-xs uppercase text-black font-bold tracking-widest">Váš Lektor</span>
                                            <p className="text-black font-bold text-xl">Mgr. art. Michal Rovňák</p>
                                            <p className="text-sm text-black italic">(viac o lektoroch v sekcii O NÁS alebo vyššie)</p>
                                        </div>
                                        <div className="mt-auto">
                                            <Button
                                                href="https://form.fapi.cz/?id=a1d7c8a7-ff33-48e8-8ac1-4eb1c6a8019b"
                                                className="w-full justify-center py-4 text-xl"
                                                target="_blank"
                                            >
                                                PRIHLÁSIŤ SA NA KURZ
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="bg-[#ffd37c]/10 border border-[#ffd37c] p-10 rounded-2xl text-center flex flex-col justify-center">
                                        <h4 className="text-[1.8rem] font-bold text-black mb-4 uppercase" style={{ fontFamily: 'var(--font-heading)' }}>
                                            ĎALŠÍ CYKLUS KURZOV SPUSTÍME V SEPTEMBRI 2026
                                        </h4>
                                        <p className="text-[#000] mb-8 max-w-2xl mx-auto">
                                            V prípade, že máte o tento kurz záujem, tak nám pokojne napíšte a my Vás zaradíme na "WAITING LIST". Akonáhle budeme mať naplánované termíny kurzov, tak Vás budeme medzi prvými informovať aby ste sa mohli prihlásiť.
                                        </p>
                                        <Button href="/ludus-academy/kontakt" className="w-full justify-center">Mám záujem o waiting list</Button>
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
