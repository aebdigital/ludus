import AcademySubpageSidebar from '@/components/AcademySubpageSidebar';
import Button from '@/components/Button';
import Image from 'next/image';

export default async function WorkshopySkolyPage() {

 return (
 <div className="bg-white">
 <section
 className="h-[40vh] max-md:h-[20vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20 max-md:mt-13 "
 style={{ backgroundImage: "url('/skola.jpeg')" }}
 >
 <div className="absolute inset-0 bg-black/40" />
 <h1
 className="relative text-white text-[5.5rem] z-10 text-center max-md:text-[2.2rem] px-4"
 style={{ fontFamily: 'var(--font-heading)' }}
 >
 Workshopy pre školy
 </h1>
 </section>



 <div className="w-[95%] mx-auto py-16 max-md:pt-5">
 <div className="flex gap-16 items-start max-xl:flex-col max-md:gap-4">
 <AcademySubpageSidebar />

 <main className="flex-1 min-w-0">
 <div className="mb-24">
 <h2 className="text-[3rem] mb-2 text-black leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
 RADOSŤ <span className="text-[#f47f44]">SA</span> SPOZNÁVAŤ
 </h2>
 <div className="text-[#f47f44] font-bold text-[1.2rem] mb-8 uppercase tracking-widest leading-tight">
 SPOZNAŤ SA A SPLOUPRACOVAŤ JE RADOSŤ
 </div>

 <div className="flex gap-12 max-lg:flex-col mb-12">
 <div className="flex-[0.7] text-[1.1rem] text-[#000] space-y-6 leading-relaxed">
 <p>
 Každý učiteľ bude azda súhlasiť s tým, že učiť triedu žiakov, kde funguje komunikácia, priateľské vzťahy a kde je medzi žiakmi a učiteľom vytvorená dôvera je úspech. Každý učiteľ chce mať v triede dobrú atmosféru. Nie vždy je to však jednoduché dosiahnuť.
 </p>
 <p className="italic font-light text-black border-l-4 border-[#f47f44] pl-6 py-2">
 Práve preto sme vytvorili workshopy pre žiakov a učiteľov, ktorých cieľom je lepšie sa navzájom spoznať, nájsť cestu ako spolupracovať, spoločne niečo vytvoriť, naučiť sa myslieť tímovo a rešpektovať sa navzájom.
 </p>
 <p>
 Zároveň môžete spolu s vašou triedou zistiť ako funguje kreatívne a improvizačné myslenie.
 Všetky workshopy sú postavené na učení prostredníctvom hry a vychádzajú z metód tvorivej dramatiky. Práve s týmito metódami máme viac ako 50 ročnú skúsenosť v škole LUDUS. Vy máte možnosť vybrať si, aký typ workshopu vám vyhovuje a čo práve vaša trieda potrebuje.
 </p>
 </div>
 <div className="flex-[0.3] min-w-[300px]">
 <Image
 src="/GRAFIKA NA WEB KURZOV/workshop-pre-skoly.jpg"
 alt="Workshopy pre školy program"
 width={600}
 height={800}
 className="w-full h-auto rounded-xl shadow-lg border border-gray-100"
 />
 <Image
 src="/skoly2.jpeg"
 alt="Workshopy pre školy"
 width={600}
 height={800}
 className="w-full h-auto rounded-xl shadow-lg border border-gray-100 mt-8"
 />
 </div>
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
 <span className="text-[#f47f44] font-bold">✓</span>
 {item}
 </li>
 ))}
 </ul>
 </div>
 <div className="bg-white p-8 rounded-2xl border-2 border-[#f47f44]/30">
 <h3 className="text-[1.5rem] mb-4 text-black font-bold uppercase" style={{ fontFamily: 'var(--font-heading)' }}>Možnosť výberu:</h3>
 <p className="text-sm text-black mb-6">Vyberte si typ workshopu pre vašu triedu, dĺžku workshopu a miesto, kde sa workshop bude konať.</p>
 <div className="space-y-4">
 <div className="flex items-center gap-4">
 <div className="w-10 h-10 rounded-full bg-black text-[#f47f44] flex items-center justify-center font-bold">1</div>
 <p className="font-medium text-black">4 typy workshopov</p>
 </div>
 <div className="flex items-center gap-4">
 <div className="w-10 h-10 rounded-full bg-black text-[#f47f44] flex items-center justify-center font-bold">2</div>
 <p className="font-medium text-black">2 hod. (120 min) alebo 3 hod. (180 min)</p>
 </div>
 <div className="flex items-center gap-4">
 <div className="w-10 h-10 rounded-full bg-black text-[#f47f44] flex items-center justify-center font-bold">3</div>
 <p className="font-medium text-black">V LUDUSe alebo priamo u vás v škole</p>
 </div>
 </div>
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
 <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 flex">
 <video src="/videos/workshopy-skoly-1.mp4" controls className="w-full aspect-video object-cover" />
 </div>
 <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 flex">
 <video src="/videos/workshopy-skoly-2.mp4" controls className="w-full aspect-video object-cover" />
 </div>
 </div>

 <div className="bg-black text-white p-10 rounded-2xl mb-24 shadow-xl">
 <div className="text-[#f47f44] font-bold uppercase tracking-widest mb-2 text-sm text-center">Cena workshopu</div>
 <h3 className="text-[1.8rem] mb-8 text-center leading-tight">
 Cena sa odvíja od počtu tried. Množstevnú zľavu si dohodnete telefonicky alebo emailom.
 </h3>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
 <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center">
 <p className="text-white text-sm mb-1 uppercase tracking-wider font-bold">120 minútový workshop</p>
 <p className="text-[#f47f44] text-[2.5rem] font-bold">130 EUR</p>
 <p className="text-white/40 text-xs">pre jednu triedu</p>
 </div>
 <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center">
 <p className="text-white text-sm mb-1 uppercase tracking-wider font-bold">180 minútový workshop</p>
 <p className="text-[#f47f44] text-[2.5rem] font-bold">160 EUR</p>
 <p className="text-white/40 text-xs">pre jednu triedu</p>
 </div>
 </div>
 </div>

 <h3 className="text-[2.5rem] mb-12 text-black text-center" style={{ fontFamily: 'var(--font-heading)' }}>Typy workshopov</h3>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 {/* RADOSŤ SPOLU PRACOVAŤ */}
 <div className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
 <div className="text-[#f47f44] font-bold mb-2 uppercase tracking-tighter">RADOSŤ SPOLU PRACOVAŤ</div>
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
 <div className="text-[#f47f44] font-bold mb-2 uppercase tracking-tighter">RADOSŤ ĽAHŠIE ŠTUDOVAŤ</div>
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
 <div className="text-[#f47f44] font-bold mb-2 uppercase tracking-tighter">RADOSŤ SPOLU TVORIŤ</div>
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
 <div className="text-[#f47f44] font-bold mb-2 uppercase tracking-tighter">RADOSŤ SPOLU IMPROVIZOVAŤ</div>
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

 <div className="mt-24 bg-black text-white p-12 rounded-2xl text-center shadow-2xl relative overflow-hidden group">
 <div className="absolute inset-0 bg-gradient-to-r from-[#f47f44]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
 <h3 className="text-[2.2rem] mb-6 leading-tight relative z-10">
 Máte záujem?
 </h3>
 <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10 text-[1.1rem]">
 Kontaktujte nás emailom alebo telefonicky.
 </p>
 <div className="flex gap-4 justify-center relative z-10 max-sm:flex-col max-sm:items-center">
 <Button
 href="mailto:info@ludusacademy.sk"
 className="px-10 py-4 text-lg !bg-white !text-black hover:!bg-gray-200"
 >
 info@ludusacademy.sk
 </Button>
 <Button
 href="tel:+421947942125"
 className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-10 py-4 text-lg"
 >
 0947 942 125
 </Button>
 </div>
 </div>
 </div>
 </main>
 </div>
 </div>
 </div>
 );
}
