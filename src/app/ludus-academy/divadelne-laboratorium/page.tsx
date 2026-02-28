import AcademySubpageSidebar from '@/components/AcademySubpageSidebar';
import Button from '@/components/Button';
import { getCategoryAktuality } from '@/lib/api';
import Image from 'next/image';

export default async function DivadelneLaboratoriumPage() {
    const news = await getCategoryAktuality('ludus-academy');

    return (
        <div className="bg-white">
            <section
                className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
                style={{ backgroundImage: "url('/images/academy/IMG_4194.webp')" }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <h1
                    className="relative text-white text-[5rem] z-10 text-center max-md:text-[3rem] px-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Divadelné laboratórium
                </h1>
            </section>

            <div className="w-[95%] mx-auto py-16">
                <div className="flex gap-16 items-start max-xl:flex-col">
                    <AcademySubpageSidebar news={news} />

                    <main className="flex-1 min-w-0">
                        <div className="mb-24">
                            <h2 className="text-[3rem] mb-2 text-black leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                                RADOSŤ <span className="text-[#f47f44]">sa</span> umelecky REALIZOVAŤ
                            </h2>
                            <div className="text-[#f47f44] font-bold text-[1.2rem] mb-8 uppercase tracking-widest leading-tight">
                                TVORÍM AUTENTICKY, ŽIJEM SLOBODNE
                            </div>

                            <div className="text-[1.1rem] text-[#000] space-y-6 mb-12 leading-relaxed">
                                <p className="text-[1.3rem] font-bold text-black border-l-4 border-[#f47f44] pl-6 py-2">
                                    Divadelné laboratórium: kurz autorskej tvorby a improvizácie
                                </p>
                                <p>
                                    Divadelné laboratórium je kurz autorskej tvorby a improvizácie pre dospelých, v ktorom prepojíte oblasť herectva, scenáristiky a improvizácie do prevahy k modernému celku.
                                </p>
                                <p className="italic font-medium text-black">
                                    Chceli by ste vedieť ako sa dá prepojiť herectvo, improvizácia a autorská tvorba? Chceli byť ste byť súčasťou tohto umeleckého procesu a zistiť ako všetko so všetkým súvísí?
                                </p>
                                <p>
                                    Okrem hereckej časti, tento kurz totiž ponúka ambicióznejší vhľad do problematiky výstavby a realizácie umeleckého diela. Kurz je príležitosťou objaviť a rozvíjať svoje herecké a kreatívne schopnosti v prostredí, ktoré podporuje slobodu, zvedavosť a spoločnú tvorbu. Čaká vás zážitok, ktorý vám otvorí nové perspektívy a ponúkne možnosť realizovať sa umelecky. Poďte s nami do divadelného laboratória.
                                </p>
                                <p className="font-bold text-black text-center text-[1.2rem] py-4 bg-gray-50 rounded-xl">
                                    Divadelné laboratórium - bezpečný tvorivý priestor na umeleckú realizáciu.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                    <h3 className="text-[1.5rem] mb-4 text-black font-bold uppercase" style={{ fontFamily: 'var(--font-heading)' }}>Aké skúsenosti sú potrebné?</h3>
                                    <p className="text-[#000]">Bez ohľadu na to, či máte skúsenosti s herectvom, tvorivým písaním alebo improvizáciou, ak máte chuť otvoriť sa novým podnetom a výzvam, ste na správnom mieste.</p>
                                </div>
                                <div className="p-8 bg-black text-white rounded-2xl shadow-xl">
                                    <h3 className="text-[1.5rem] mb-4 text-[#f47f44] font-bold uppercase" style={{ fontFamily: 'var(--font-heading)' }}>Pre koho je určený?</h3>
                                    <ul className="space-y-4 text-gray-300">
                                        <li className="flex gap-2"><span className="text-[#f47f44] font-bold">•</span> Záujemcom ktorých zaujíma tvorivé písanie a scenáristika.</li>
                                        <li className="flex gap-2"><span className="text-[#f47f44] font-bold">•</span> Tým, ktorých zaujíma herectvo.</li>
                                        <li className="flex gap-2"><span className="text-[#f47f44] font-bold">•</span> Záujemcom, ktorých láka improvizácia a improvizované divadlo.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 mb-12">
                                <h3 className="text-[1.8rem] mb-8 text-black" style={{ fontFamily: 'var(--font-heading)' }}>Kurz sa zameriava na:</h3>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-bold text-black mb-1">Autentický herecký prejav</h4>
                                        <p className="text-[#000]">Naučíte sa pracovať so svojím telom a hlasom, rozvíjať svoju kreativitu a schopnosť reagovať na podnety zo svojho okolia i vnútra. Prevedieme vás jednoduchými hereckými cvičeniami, ktoré vychádzajú z rôznych hereckých metód. Zistíte ako funguje filmové herectvo.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-black mb-1">Improvizácia</h4>
                                        <p className="text-[#000]">Spoznáte, ako sa uvoľniť, nechať sa viesť prítomným momentom a vytvárať zmysluplné improvizácie. Prevedieme vás rôznymi improvizačnými metódami, ktoré vám pomôžu pri tvorbe improvizovaného divadla.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-black mb-1">Autorská tvorba</h4>
                                        <p className="text-[#000]">Ponoríte sa do procesu výstavby dramatických príbehov a scenárov. Počas kurzu sa zoznámime aj s výstavbou dramatickej fabuly a úvodom k divadelnej, či filmovej scenáristike. Zistíte ako môže vzniknúť jedna z foriem autorského divadla.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-black mb-1">Skúmanie hraníc a limitov</h4>
                                        <p className="text-[#000]">Zistíte, aké nečakané možnosti vám ponúkajú vaše vlastné limity a ako sa otvoriť podnetom vnútorného i vonkajšieho sveta a ako funguje spoluprežívanie na javisku.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-10 rounded-2xl border-2 border-[#f47f44]/30 mb-12">
                                <h3 className="text-[1.8rem] mb-8 text-black" style={{ fontFamily: 'var(--font-heading)' }}>AKÉ ZMENY PRINESIE KURZ DO VÁŠHO ŽIVOTA?</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                                    {[
                                        'Objavíte a prehĺbite svoju kreativitu',
                                        'Rozviniete pohotovosť a flexibilitu.',
                                        'Odkryjete svoju humornú stránku.',
                                        'Naučíte sa rýchlejšie generovať nápady.',
                                        'Nadobudnete sebavedomie nielen na javisku.',
                                        'Zdokonalíte svoje improvizačné zručnosti.',
                                        'Získate väčšiu otvorenosť voči podnetom.',
                                        'Zbavíte sa stresu z verejného vystupovania.',
                                        'Získate herecké základy.',
                                        'Nadobudnete zručnosti filmového herectva.',
                                        'Naučíte sa, ako vytvoriť dramatickú fabulu.',
                                        'Nazriete do sveta scenáristiky.',
                                        'Získate nové priateľstvá a zážitky.'
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 items-start text-[#000]">
                                            <span className="text-[#f47f44] mt-1 font-bold">✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                                <div className="bg-black text-white p-10 rounded-2xl shadow-xl h-full flex flex-col justify-between">
                                    <div>
                                        <div className="text-[#f47f44] font-bold uppercase tracking-widest mb-2 text-sm">Investícia</div>
                                        <h3 className="text-[2rem] mb-6 leading-tight">
                                            NEKUPUJETE SI KURZ, INVESTUJETE DO SVOJHO ROZVOJA: <span className="text-[#f47f44]">378 EUR</span>
                                        </h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-gray-300">
                                            <ul className="space-y-3">
                                                <li className="flex justify-between border-b border-white/10 pb-2">
                                                    <span>Počet hodín:</span>
                                                    <span className="text-white font-bold">30 hodín</span>
                                                </li>
                                                <li className="flex justify-between border-b border-white/10 pb-2">
                                                    <span>Počet modulov:</span>
                                                    <span className="text-white font-bold">4 moduly</span>
                                                </li>
                                                <li className="flex justify-between border-b border-white/10 pb-2">
                                                    <span>Skupina:</span>
                                                    <span className="text-white font-bold">max. 10 ľudí</span>
                                                </li>
                                            </ul>
                                            <ul className="space-y-2 text-sm">
                                                <li className="flex gap-2 items-center"><span className="text-[#f47f44]">•</span> Herecké a improvizačné cvičenia</li>
                                                <li className="flex gap-2 items-center"><span className="text-[#f47f44]">•</span> Praktický tréning</li>
                                                <li className="flex gap-2 items-center"><span className="text-[#f47f44]">•</span> Malé občerstvenie</li>
                                                <li className="flex gap-2 items-center"><span className="text-[#f47f44]">•</span> Záverečné vystúpenie pre divákov</li>
                                                <li className="flex gap-2 items-center"><span className="text-[#f47f44]">•</span> Certifikát</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-white/10 text-sm italic opacity-70">
                                        PODMIENKA ÚČASTI: vek od 18 rokov a ukončené stredoškolské vzdelanie
                                    </div>
                                </div>

                                <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm h-full flex flex-col">
                                    <h3 className="text-[1.8rem] mb-6 text-black" style={{ fontFamily: 'var(--font-heading)' }}>Slovami účastníkov</h3>
                                    <div className="rounded-xl overflow-hidden shadow-lg border-4 border-black flex-grow relative">
                                        <div className="absolute inset-0">
                                            <video src="/videos/divadelne-laboratorium.mp4" controls className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Lector Section */}
                            <div className="bg-white border border-gray-100 p-10 rounded-2xl mb-12 shadow-sm">
                                <h3 className="text-[1.8rem] mb-8 text-black" style={{ fontFamily: 'var(--font-heading)' }}>Kto sa vám bude venovať?</h3>
                                <div className="flex gap-8 items-start max-md:flex-col">
                                    <div className="w-[180px] h-[180px] rounded-full overflow-hidden flex-shrink-0 border-4 border-[#f47f44] relative">
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
                                            <p>V súčasnosti je pedagógom Ateliéru Fyzické divadlo na JAMU v Brne a tiež pedagógom v SZUŠ LUDUS, kde učí tínedžerov.</p>
                                            <p>Dlhodobo spolupracuje s Rádiom Devín ako autor a režisér rozhlasových hier. Spoluzaložil Kultúrne centrum Diera do sveta v Liptovskom Mikuláši.</p>
                                            <p>Pracuje ako zdravotný klaun pre OZ Červený nos Clowndoctors. V poslednom tvorivom období sa venuje prevažne nezávislému autorskému filmu.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="bg-[#f47f44]/10 border border-[#f47f44] p-10 rounded-2xl text-center">
                                <h4 className="text-[1.8rem] font-bold text-black mb-4 uppercase" style={{ fontFamily: 'var(--font-heading)' }}>
                                    ĎALŠÍ CYKLUS KURZOV SPUSTÍME V SEPTEMBRI 2026
                                </h4>
                                <p className="text-[#000] mb-8 max-w-2xl mx-auto">
                                    V prípade, že máte o tento kurz záujem, tak nám pokojne napíšte a my Vás zaradíme na "WAITING LIST". Akonáhle budeme mať naplánované termíny kurzov, tak Vás budeme medzi prvými informovať aby ste sa mohli prihlásiť.
                                </p>
                                <Button
                                    href="/ludus-academy/kontakt"
                                    className="!bg-black !text-white hover:!bg-gray-800 px-10 py-4 text-lg"
                                >
                                    Mám záujem o waiting list
                                </Button>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
