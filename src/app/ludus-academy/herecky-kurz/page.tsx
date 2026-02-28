import AcademySubpageSidebar from '@/components/AcademySubpageSidebar';
import Button from '@/components/Button';

export default async function HereckyKurzPage() {

    return (
        <div className="bg-white">
            <section
                className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
                style={{ backgroundImage: "url('/images/academy/IMG_1128.webp')" }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <h1
                    className="relative text-white text-[5rem] z-10 text-center max-md:text-[3rem] px-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Herecký kurz
                </h1>
            </section>

            <div className="w-[95%] mx-auto py-16">
                <div className="flex gap-16 items-start max-xl:flex-col">
                    <AcademySubpageSidebar />

                    <main className="flex-1 min-w-0">
                        {/* Basic Course Section */}
                        <div className="mb-24">
                            <h2 className="text-[3rem] mb-2 text-black leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                                RADOSŤ <span className="text-[#f47f44]">SA</span> HRAŤ
                            </h2>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-[#f47f44] font-bold text-[1.2rem] mb-8 uppercase tracking-widest">
                                <span>CEZ HRANIE</span>
                                <span>•</span>
                                <span>K RADOSTI</span>
                                <span>•</span>
                                <span>CEZ RADOSŤ</span>
                                <span>•</span>
                                <span>K ZRUČNOSTIAM</span>
                            </div>

                            <div className="flex gap-12 max-lg:flex-col mb-12">
                                <div className="flex-[0.7] text-[1.1rem] text-[#000] space-y-6 leading-relaxed">
                                    <p className="italic font-medium text-black">
                                        Mávate niekedy pocit, že by ste radi viac spoznali sami seba? Keď vidíte hercov vo filmoch, seriáloch alebo reklamách, rozmyšlate ako by ste to zvládli na ich mieste? Stáva sa Vám, že keď sa počúvate pri komunikácii, rozmýšľate ako by ste ju mohli vylepšit? Mávate niekedy strach z vystupovania na verejnosti, alebo práve naopak radi ste stredobodom pozornosti? Túžite niekedy tráviť svoje voľné chvíle v divadelnom prostredí s príjemnými ľudmi? Chcete sa hrať a cítiť sa pri tom slobodne?
                                    </p>
                                    <p>
                                        To všetko a ešte oveľa viac si viete splniť s hereckým kurzom pod vedením profesionálnych pedagógov a hercov. Uvedú Vás do tajov divadla, odkryjú vaše emócie o ktorých ste možno ani netušili, naučia Vás ako pracovať na svojich hereckých zručnostiach a poodkryjú vám cestu ako pôsobíť prirodzene a presvedčivo. Prostredníctvom divadelných techník, bude rásť aj vaša osobnosť.
                                    </p>
                                    <p className="text-[1.3rem] font-bold text-black border-l-4 border-[#f47f44] pl-6 py-2">
                                        Sny sa plnia ľudom, ktorí idu do AKCIE. Staneš sa jeden z nich?
                                    </p>
                                </div>
                                <div className="flex-[0.3] min-w-[300px]">
                                    <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-gray-100">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src="https://www.youtube.com/embed/C4M9udb7C8c?start=32"
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 mb-12">
                                <h3 className="text-[1.8rem] mb-8 text-black" style={{ fontFamily: 'var(--font-heading)' }}>
                                    Aké zmeny prinesie KURZ do vášho života?
                                </h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        'Preniknete do divadelného prostredia.',
                                        'Stanete sa súčasťou umeleckej komunity.',
                                        'Načerpáte skúsenosti od profesionálnych hercov.',
                                        'Budú Vás učiť profesionálni dlhoroční lektori zo SZUŠ LUDUS.',
                                        'Strávite svoj čas zmysluplne a netradične.',
                                        'Spoznáte viac sám seba.',
                                        'Naučíte sa pracovať so svojími emóciami na javisku.',
                                        'Stanete sa uveriteľným v hereckom prejave.',
                                        'Zistíte, ako sa pohybovať na javisku prirodzene a s ľahkosťou.'
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 items-start text-[#000]">
                                            <span className="text-[#f47f44] mt-1 font-bold">✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-black text-white p-10 rounded-2xl mb-12 shadow-xl">
                                <div className="text-[#f47f44] font-bold uppercase tracking-widest mb-2 text-sm">Investícia</div>
                                <h3 className="text-[2rem] mb-6 leading-tight">
                                    NEKUPUJETE SI KURZ, INVESTUJETE DO SVOJHO ROZVOJA: <span className="text-[#f47f44]">348 EUR</span>
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-gray-300">
                                    <ul className="space-y-3">
                                        <li className="flex justify-between border-b border-white/10 pb-2">
                                            <span>Trvanie kurzu:</span>
                                            <span className="text-white font-bold">11 týždňov</span>
                                        </li>
                                        <li className="flex justify-between border-b border-white/10 pb-2">
                                            <span>Počet hodín:</span>
                                            <span className="text-white font-bold">27,5 hodín</span>
                                        </li>
                                        <li className="flex justify-between border-b border-white/10 pb-2">
                                            <span>Dĺžka lekcie:</span>
                                            <span className="text-white font-bold">2,5 hodiny</span>
                                        </li>
                                    </ul>
                                    <ul className="space-y-2">
                                        <li className="flex gap-2 items-center"><span className="text-[#f47f44]">•</span> 27,5 hodín intenzívnej výučby + záverečné vystúpenie</li>
                                        <li className="flex gap-2 items-center"><span className="text-[#f47f44]">•</span> Individuálny prístup</li>
                                        <li className="flex gap-2 items-center"><span className="text-[#f47f44]">•</span> Herecké cvičenia a techniky</li>
                                        <li className="flex gap-2 items-center"><span className="text-[#f47f44]">•</span> Profesionálni lektori</li>
                                        <li className="flex gap-2 items-center"><span className="text-[#f47f44]">•</span> Záverečné vystúpenie v divadelnom štúdiu</li>
                                        <li className="flex gap-2 items-center"><span className="text-[#f47f44]">•</span> Certifikát</li>
                                    </ul>
                                </div>
                                <div className="mt-8 pt-6 border-t border-white/10 text-sm italic opacity-70">
                                    PODMIENKA ÚČASTI: vek minimálne 18 rokov a ukončené stredoškolské vzdelanie
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                <div className="bg-white border-2 border-[#f47f44] p-8 rounded-2xl relative overflow-hidden flex flex-col">
                                    <div className="absolute top-0 right-0 bg-[#f47f44] text-black px-4 py-1 font-bold text-xs uppercase">HERECKÝ KURZ - TEAMBUILDING</div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="bg-[#f47f44] text-black px-2 py-0.5 rounded text-[0.7rem] font-bold">TERMÍN</span>
                                        <h4 className="text-[1.5rem] font-bold text-black">2.3. - 18.5.2026</h4>
                                    </div>
                                    <p className="text-black mb-4">(hodina nebude: 6.4.2026)</p>
                                    <p className="font-bold text-black text-lg mb-4 uppercase tracking-tighter">každý PONDELOK od 18:00 do 20:30</p>
                                    <div className="flex flex-col gap-1 mb-8">
                                        <span className="text-sm uppercase text-black font-bold">Lektori</span>
                                        <p className="text-black font-medium">Mgr. art Michal Rovňák, Mgr. art Miroslava Durná ArtD.</p>
                                        <p className="text-xs text-black italic">
                                            <a href="/ludus-academy/lektori" className="hover:underline">(viac o lektoroch)</a>
                                        </p>
                                    </div>
                                    <div className="mt-auto">
                                        <Button
                                            href="https://form.fapi.cz/?id=8a85a30a-6cd8-4bfd-8844-b468ad175c8f"
                                            className="w-full justify-center !bg-black !text-white hover:!bg-gray-800"
                                            target="_blank"
                                        >
                                            PRIHLÁSIŤ SA NA KURZ
                                        </Button>
                                    </div>
                                </div>

                                <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl relative overflow-hidden flex flex-col">
                                    <div className="absolute top-0 right-0 bg-gray-100 text-black px-4 py-1 font-bold text-xs uppercase">HERECKÝ KURZ - DVERE</div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="bg-gray-200 text-black px-2 py-0.5 rounded text-[0.7rem] font-bold">TERMÍN</span>
                                        <h4 className="text-[1.5rem] font-bold text-black">12.4. - 28.6.2026</h4>
                                    </div>
                                    <p className="text-black mb-4">(hodina nebude: 14.6.2026)</p>
                                    <p className="font-bold text-black text-lg mb-4 uppercase tracking-tighter">každú NEDEĽU od 18:00 do 20:30</p>
                                    <div className="flex flex-col gap-1 mb-8">
                                        <span className="text-sm uppercase text-black font-bold">Lektori</span>
                                        <p className="text-black font-medium">Mgr. art Jozef Jurčišin-Kukľa, Bc. Richard Labuda</p>
                                        <p className="text-xs text-black italic">
                                            <a href="/ludus-academy/lektori" className="hover:underline">(viac o lektoroch)</a>
                                        </p>
                                    </div>
                                    <div className="mt-auto">
                                        <Button
                                            href="https://form.fapi.cz/?id=84c249ad-4bcc-4b91-92e1-93837f500d59"
                                            className="w-full justify-center !bg-black !text-white hover:!bg-gray-800"
                                            target="_blank"
                                        >
                                            PRIHLÁSIŤ SA NA KURZ
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#f47f44]/10 border border-[#f47f44] p-10 rounded-2xl text-center">
                                <h4 className="text-[1.8rem] font-bold text-black mb-4 uppercase" style={{ fontFamily: 'var(--font-heading)' }}>
                                    ZAUJALI VÁS TIETO KURZY?
                                </h4>
                                <p className="text-[#000] mb-8 max-w-2xl mx-auto">
                                    V prípade, že máte o tento kurz záujem, tak sa neváhajte prihlásiť. Ak máte akékoľvek otázky, tak nám pokojne napíšte.
                                </p>
                                <Button href="/ludus-academy/kontakt" className="!bg-black !text-white hover:!bg-gray-800">Mám otázku</Button>
                            </div>

                            {/* Reviews Section */}
                            <div className="py-16">
                                <h3 className="text-[2.5rem] mb-12 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
                                    Čo o nás hovoria účastníci
                                </h3>
                                <div className="columns-1 md:columns-2 gap-8 space-y-8">
                                    {[
                                        'Snímka obrazovky 2026-01-30 o 11.10.04.webp',
                                        'Snímka obrazovky 2026-01-30 o 11.10.38.webp',
                                        'Snímka obrazovky 2026-01-30 o 11.13.23.webp',
                                        'Snímka obrazovky 2026-01-30 o 11.14.04.webp',
                                        'Snímka obrazovky 2026-01-30 o 11.15.25.webp',
                                        'Snímka obrazovky 2026-01-30 o 11.16.32.webp',
                                        'Snímka obrazovky 2026-01-30 o 11.18.42.webp',
                                        'Snímka obrazovky 2026-01-30 o 11.19.11.webp'
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

                        <hr className="my-24 border-gray-100" />

                        {/* Advanced Course Section */}
                        <div>
                            <h2 className="text-[3rem] mb-2 text-black leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                                Herecký kurz pre pokročilých: RADOSŤ <span className="text-[#f47f44]">SA</span> HRAŤ
                            </h2>
                            <div className="text-[#f47f44] font-bold text-[1.2rem] mb-8 uppercase tracking-widest leading-tight">
                                ŽIVOT, V KTOROM (sa) HRÁTE, JE FASCINUJÚCI.
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                                {[
                                    'Máte už za sebou nejakú divadelnú skúsenosť?',
                                    'Absolvovali ste v minulosti už nejaký herecký kurz pre dospelých?',
                                    'Prešli ste hereckým kurzom u nás v LUDUS ACADEMY?',
                                    'Navštevovali ste ako deti alebo tínedžeri dramatický krúžok?',
                                    'Chodili ste v minulosti do divadelného súboru?',
                                    'Máte za sebou už nejakú menšiu hereckú skúsenosť v divadle alebo v televízii?'
                                ].map((question, i) => (
                                    <div key={i} className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-4 group hover:bg-white hover:shadow-md transition-all">
                                        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center font-bold text-[#f47f44] shrink-0">?</div>
                                        <p className="text-[0.95rem] font-medium text-[#000]">{question}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-12 max-lg:flex-col mb-12">
                                <div className="flex-[0.7] text-[1.1rem] text-[#000] space-y-6 leading-relaxed">
                                    <p className="text-[1.3rem] font-bold text-black">
                                        Ak ste odpovedali aspoň na jednu otázku ÁNO, tento kurz je práve pre vás.
                                    </p>
                                    <p>
                                        Pridajte sa k nám do pokročilejšej skupiny a vnorte sa s nami hlbšie do divadelného umenia, hereckých cvičení a hier a zažite 10 týždňov tvorivej atmosféry spolu s nami.
                                    </p>
                                </div>
                                <div className="flex-[0.3] min-w-[300px]">
                                    <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-gray-100">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src="https://www.youtube.com/embed/UXHlIWBnUpE"
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 mb-12">
                                <h3 className="text-[1.8rem] mb-8 text-black" style={{ fontFamily: 'var(--font-heading)' }}>
                                    AKÉ ZMENY PRINESIE KURZ DO VÁŠHO ŽIVOTA?
                                </h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        'Budete mať kontakt s divadelným prostredím.',
                                        'Stanete sa súčasťou umeleckej komunity.',
                                        'Načerpáte ďalšie skúsenosti od profesionálnych hercov.',
                                        'Budú Vás učiť profesionálni dlhoroční lektori zo SZUŠ LUDUS.',
                                        'Strávite svoj čas zmysluplne a netradične.',
                                        'Spoznáte viac sám seba.',
                                        'Zlepšíte prácu so svojími emóciami na javisku.',
                                        'Stanete sa uveriteľným v hereckom prejave.',
                                        'Zdokonalíte pohyb na javisku.',
                                        'Prehĺbite svoje zručnosti.'
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 items-start text-[#000]">
                                            <span className="text-[#f47f44] mt-1 font-bold">✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-black text-white p-10 rounded-2xl mb-12 shadow-xl">
                                <div className="text-[#f47f44] font-bold uppercase tracking-widest mb-2 text-sm">Investícia</div>
                                <h3 className="text-[2rem] mb-6 leading-tight">
                                    NEKUPUJETE SI KURZ, INVESTUJETE DO SVOJHO ROZVOJA: <span className="text-[#f47f44]">348 EUR</span>
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-gray-300">
                                    <ul className="space-y-3">
                                        <li className="flex justify-between border-b border-white/10 pb-2">
                                            <span>Trvanie kurzu:</span>
                                            <span className="text-white font-bold">11 týždňov</span>
                                        </li>
                                        <li className="flex justify-between border-b border-white/10 pb-2">
                                            <span>Počet hodín:</span>
                                            <span className="text-white font-bold">27,5 hodín</span>
                                        </li>
                                        <li className="flex justify-between border-b border-white/10 pb-2">
                                            <span>Dĺžka lekcie:</span>
                                            <span className="text-white font-bold">2,5 hodiny</span>
                                        </li>
                                    </ul>
                                    <ul className="space-y-2">
                                        <li className="flex gap-2 items-center"><span className="text-[#f47f44]">•</span> 27,5 hodín intenzívnej výučby + záverečné vystúpenie</li>
                                        <li className="flex gap-2 items-center"><span className="text-[#f47f44]">•</span> Individuálny prístup</li>
                                        <li className="flex gap-2 items-center"><span className="text-[#f47f44]">•</span> Herecké cvičenia a techniky, práca na dialógoch</li>
                                        <li className="flex gap-2 items-center"><span className="text-[#f47f44]">•</span> Profesionálni lektori</li>
                                        <li className="flex gap-2 items-center"><span className="text-[#f47f44]">•</span> Záverečné vystúpenie v divadelnom štúdiu</li>
                                        <li className="flex gap-2 items-center"><span className="text-[#f47f44]">•</span> Certifikát</li>
                                    </ul>
                                </div>
                                <div className="mt-8 pt-6 border-t border-white/10 text-sm italic opacity-70 mb-10">
                                    PODMIENKA ÚČASTI: vek minimálne 18 rokov a ukončené stredoškolské vzdelanie
                                </div>
                                <div className="flex justify-center">
                                    <Button href="/ludus-academy/kontakt" className="!bg-black !text-white hover:!bg-gray-800">Mám záujem o kurz pre pokročilých</Button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div >
        </div >
    );
}
