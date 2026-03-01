import AcademySubpageSidebar from '@/components/AcademySubpageSidebar';
import Button from '@/components/Button';
import Image from 'next/image';

export default async function ImprovizaciaPage() {

 return (
 <div className="bg-white">
 <section
 className="h-[40vh] max-md:h-[20vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20 max-md:mt-13 "
 style={{ backgroundImage: "url('/impro-main.webp')" }}
 >
 <div className="absolute inset-0 bg-black/40" />
 <h1
 className="relative text-white text-[6rem] z-10 text-center max-md:text-[2.2rem]"
 style={{ fontFamily: 'var(--font-heading)' }}
 >
 Improvizačný kurz
 </h1>
 </section>



 <div className="w-[95%] mx-auto py-16 max-md:pt-5">
 <div className="flex gap-16 items-start max-xl:flex-col max-md:gap-4">
 <AcademySubpageSidebar />

 <main className="flex-1 min-w-0">
 <div className="mb-24">
 <h2 className="text-[3rem] mb-2 text-black leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
 RADOSŤ <span className="text-[#269fab]">SI</span> IMPROVIZOVAŤ
 </h2>
 <div className="flex flex-wrap gap-x-4 gap-y-1 text-[#269fab] font-bold text-[1.2rem] mb-8 uppercase tracking-widest">
 <span>IMPROVIZÁCIA</span>
 <span>•</span>
 <span>PRINÁŠA RADOSŤ</span>
 <span>•</span>
 <span>KOMUNIKOVAŤ!</span>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
 <div className="lg:col-span-2 text-[1.1rem] text-[#000] space-y-6 leading-relaxed">
 <div className="italic font-light text-black border-l-4 border-[#269fab] pl-6 py-2 leading-relaxed">
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
 Prostrednítvom divadelných improvizačných hrier a techník narastie vaša sloboda prejavu. Divadelné improvizácie sú v ČR úspešné už niekoľko rokov a my ich teraz prinášame aj na Slovensko pre verejnosť. Ak si kladiete otázku, čo asi na tomto kurze môžete robiť, tak pre lepšie uchopenie si predstavte dlhoročný TV projekt "Partička".
 </p>
 </div>
 <div className="lg:col-span-1">
 <Image
 src="/GRAFIKA NA WEB KURZOV/improvizacny-kurz.webp"
 alt="Improvizačný kurz program"
 width={600}
 height={800}
 className="w-full h-auto rounded-xl shadow-lg border border-gray-100"
 />
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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
 className="absolute top-0 left-0 w-full h-full border-0"
 />
 </div>
 ))}
 </div>

 <h3 className="text-[1.8rem] mb-8 text-black" style={{ fontFamily: 'var(--font-heading)' }}>
 Aké zmeny prinesie KURZ do vášho života?
 </h3>
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
 <div className="bg-[#269fab] p-10 max-md:p-4 rounded-2xl shadow-xl">
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
 <li key={i} className="flex gap-3 items-start text-white">
 <span className="text-[#e79b2c] mt-1 font-bold">✓</span>
 {item}
 </li>
 ))}
 </ul>
 </div>

 <div className="space-y-6 h-fit sticky top-24">
 <div className="rounded-2xl overflow-hidden shadow-xl">
 <video
 src="/videos/improvizacia.mp4"
 controls
 preload="metadata"
 className="w-full aspect-video object-cover"
 >
 Your browser does not support the video tag.
 </video>
 </div>
 <Image
 src="/impro-main.webp"
 alt="Improvizačný kurz"
 width={800}
 height={500}
 className="w-full rounded-2xl shadow-xl object-cover"
 />
 </div>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
 <div className="bg-[#d66420] text-white p-10 max-md:p-4 rounded-2xl shadow-xl h-fit">
 <div className="text-black font-bold uppercase tracking-widest mb-2 text-sm">Investícia</div>
 <h3 className="text-[2rem] mb-6 leading-tight">
 NEKUPUJETE SI KURZ, INVESTUJETE DO SVOJHO ROZVOJA: <span className="text-black">308 EUR</span>
 </h3>

 <div className="text-white">
 <ul className="space-y-3 mb-6">
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
 <li className="flex gap-2 items-center"><span className="text-[#269fab]">•</span> 22,5 hodín intenzívnej výučby + divadelná impro show</li>
 <li className="flex gap-2 items-center"><span className="text-[#269fab]">•</span> Improvizačné cvičenia a techniky</li>
 <li className="flex gap-2 items-center"><span className="text-[#269fab]">•</span> Praktický tréning</li>
 <li className="flex gap-2 items-center"><span className="text-[#269fab]">•</span> Profesionálni lektori</li>
 <li className="flex gap-2 items-center"><span className="text-[#269fab]">•</span> Záverečná impro show pre divákov</li>
 <li className="flex gap-2 items-center"><span className="text-[#269fab]">•</span> Certifikát</li>
 </ul>
 </div>
 <div className="mt-8 pt-6 border-t border-white/10 text-sm italic">
 <p className="opacity-70">PODMIENKA ÚČASTI: vek minimálne 18 rokov a ukončené stredoškolské vzdelanie</p>
 <p className="text-black font-bold mt-2 uppercase tracking-widest">Každý SA VIE NAUČIŤ</p>
 </div>
 </div>
 <div className="rounded-2xl overflow-hidden shadow-xl h-full flex">
 <Image
 src="/somewhere.webp"
 alt="Kurz improvizácie Ludus"
 width={800}
 height={600}
 className="w-full h-full object-cover -scale-x-100"
 />
 </div>
 </div>

 <div className="space-y-6">
 {/* Silné Reči Section */}
 <div className="bg-gray-50 p-10 max-md:p-4 rounded-2xl border border-gray-100 flex gap-12 items-center max-md:flex-col">
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
 <div className="bg-white border-2 border-[#269fab] p-8 max-md:p-3 rounded-2xl relative overflow-hidden flex flex-col">
 <div className="absolute top-0 right-0 bg-[#269fab] text-black px-4 py-1 font-bold text-xs uppercase">TERMÍN</div>
 <h4 className="text-[1.5rem] font-bold text-black mb-2">12.4. - 7.6.2026</h4>
 <p className="font-bold text-black text-lg mb-4 uppercase tracking-tighter">každú NEDEĽU od 15:00 do 17:30</p>
 <div className="flex flex-col gap-1 mb-8">
 <span className="text-sm uppercase text-black font-bold">Lektori</span>
 <p className="text-black font-medium">Mgr. art Jozef Jurčišin-Kukľa, Bc. Richard Labuda</p>
 <p className="text-xs text-black italic">
 <a href="/ludus-academy/lektori" className="hover:underline">(viac o lektoroch)</a>
 </p>
 </div>
 <div className="mt-auto">
 <Button
 href="https://form.fapi.cz/?id=379a5104-4a64-47a3-b0a1-f6969514e15b"
 className="w-full justify-center !bg-[#d66420] !text-white hover:!bg-[#b5531a]"
 target="_blank"
 >
 PRIHLÁSIŤ SA
 </Button>
 </div>
 </div>

 <div className="bg-white border-2 border-gray-100 p-8 max-md:p-3 rounded-2xl relative overflow-hidden flex flex-col">
 <div className="absolute top-0 right-0 bg-gray-100 text-black px-4 py-1 font-bold text-xs uppercase">TERMÍN</div>
 <h4 className="text-[1.5rem] font-bold text-black mb-2">14.4 - 9.6.2026</h4>
 <p className="font-bold text-black text-lg mb-4 uppercase tracking-tighter">každý UTOROK od 18:00 do 20:30</p>
 <div className="flex flex-col gap-1 mb-8">
 <span className="text-sm uppercase text-black font-bold">Lektori</span>
 <p className="text-black font-medium">Mgr. art Ladislav Ladomirjak, Mgr. art Jozef Jurčišin-Kukľa</p>
 <p className="text-xs text-black italic">
 <a href="/ludus-academy/lektori" className="hover:underline">(viac o lektoroch)</a>
 </p>
 <p className="text-xs text-[#269fab] font-bold mt-2 italic">Ide o skupinu, ktorá už spolu absolvovala jeden Improvizačný kurz</p>
 </div>
 <div className="mt-auto">
 <Button
 href="https://form.fapi.cz/?id=c1471aa4-75ac-44fb-99e1-e5cd045be8c5"
 className="w-full justify-center !bg-[#d66420] !text-white hover:!bg-[#b5531a]"
 target="_blank"
 >
 PRIHLÁSIŤ SA
 </Button>
 </div>
 </div>

 <div className="md:col-span-2 bg-[#d66420] p-8 max-md:p-3 rounded-2xl text-center flex flex-col justify-center shadow-xl">
 <h4 className="text-[1.5rem] font-bold text-white mb-4 uppercase" style={{ fontFamily: 'var(--font-heading)' }}>
 ĎALŠÍ CYKLUS KURZOV SPUSTÍME V SEPTEMBRI 2026
 </h4>
 <p className="text-white text-sm mb-6">
 V prípade, že máte o tento kurz záujem, tak nám pokojne napíšte a my Vás zaradíme na "WAITING LIST". Akonáhle budeme mať naplánované termíny kurzov, tak Vás budeme medzi prvými informovať aby ste sa mohli prihlásiť.
 </p>
 <div className="space-y-4 mt-auto">
 <h5 className="text-[1.2rem] font-bold text-white uppercase tracking-widest">STAČÍ SA LEN ROZHODNÚŤ</h5>
 <p className="text-white text-sm italic mb-4">Zábava a rovnako dobre naladení ľudia sú zaručení.</p>
 <Button href="/ludus-academy/kontakt" className="w-full justify-center !bg-white !text-black hover:!bg-gray-200 py-4 text-lg">Mám záujem</Button>
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
