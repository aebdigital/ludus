'use client';

import { useState } from 'react';
import AcademySubpageSidebar from '@/components/AcademySubpageSidebar';
import Button from '@/components/Button';
import Image from 'next/image';
import { staffData, StaffMember } from '@/data/staffData';
import StaffMemberModal from '@/components/StaffMemberModal';

export default function WorkshopKreativitaPage() {
 const [selectedMember, setSelectedMember] = useState<StaffMember | null>(null);

 const lectors = [
 {
 name: 'Mgr. art Katarína Baranová ArtD.',
 role: 'Pedagóg',
 image: '/pedagogovia/KATARÍNA BARANOVA.webp'
 }
 ];

 const getStaffData = (name: string) => {
 if (staffData[name]) return staffData[name];
 const cleanName = name
 .replace(/^(Mgr\. art |Bc\. |MgA\. |Mgr\.art )/i, '')
 .replace(/ ArtD\.?$/i, '')
 .trim();
 if (staffData[cleanName]) return staffData[cleanName];
 return null;
 };

 const handleMemberClick = (member: { name: string; role: string; image: string }) => {
 const data = getStaffData(member.name);
 if (data) {
 setSelectedMember({
 ...data,
 role: member.role
 });
 }
 };

 return (
 <div className="bg-white">
 <StaffMemberModal
 member={selectedMember}
 onClose={() => setSelectedMember(null)}
 />

 <section
 className="h-[40vh] max-md:h-[20vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20 max-md:mt-13 "
 style={{ backgroundImage: "url('/images/academy/IMG_9087.webp')" }}
 >
 <div className="absolute inset-0 bg-black/40" />
 <h1
 className="relative text-white text-[5.5rem] z-10 text-center max-md:text-[2.2rem] px-4"
 style={{ fontFamily: 'var(--font-heading)' }}
 >
 Workshop kreatívneho myslenia
 </h1>
 </section>

 <div className="w-[95%] mx-auto py-16 max-md:pt-5">
 <div className="flex gap-16 items-start max-xl:flex-col max-md:gap-4">
 <AcademySubpageSidebar />

 <main className="flex-1 min-w-0">
 <div className="mb-24">
 <h2 className="text-[3rem] mb-2 text-black leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
 RADOSŤ <span className="text-[#f47f44]">si</span> TVORIŤ
 </h2>
 <div className="text-[#f47f44] font-bold text-[1.2rem] mb-8 uppercase tracking-widest leading-tight">
 KAŽDÝ Z NÁS VIE A MÔŽE BYŤ KREATÍVNY
 </div>

 <div className="flex gap-12 max-lg:flex-col mb-12">
 <div className="flex-[0.7] text-[1.1rem] text-[#000] space-y-6 leading-relaxed">
 <p className="italic font-light text-black border-l-4 border-[#f47f44] pl-6 py-2">
 Naša predstavivosť a kreativita majú neobmedzené možnosti.
 </p>
 <p>
 Nie je to len výsada „umelcov". Kreatívni vieme byť takmer pri každej činnosti, ktorú každodenne robíme. Kreativita je proces objavovania – a najlepším spôsobom, ako ju rozvíjať, je nebáť sa skúšať, tvoriť a nechať sa unášať vlastnou zvedavovosťou. Poďme spolu zažiť „Kreatívne flow".
 </p>
 </div>
 <div className="flex-[0.3] min-w-[300px]">
 <Image
 src="/GRAFIKA NA WEB KURZOV/workshop-kreativneho-myslenia.webp"
 alt="Workshop kreatívneho myslenia program"
 width={600}
 height={800}
 className="w-full h-auto rounded-xl shadow-lg border border-gray-100"
 />
 </div>
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
 Workshop je praktický and interaktívny. Budeme sa aktívne hrať, experimentovať and objavovať nové prístupy k mysleniu.
 Pretože to vedie k radostným prekvapeniam and novým nápadom. A je to najlepší spôsob, ako vieme odhaliť to, čo je v nás.
 </p>

 <div className="mt-12">
 <h3 className="text-[1.8rem] mb-8 text-black" style={{ fontFamily: 'var(--font-heading)' }}>Čo si z workshopu odnesiete?</h3>
 <div className="bg-gray-50 border border-gray-100 p-8 rounded-xl space-y-4">
 <p className="flex gap-3"><span className="text-[#f47f44] font-bold">•</span> Po absolvovaní workshopu budete kreatívnejší and schopnejší riešiť problémy originálnejším spôsobom.</p>
 <p className="flex gap-3"><span className="text-[#f47f44] font-bold">•</span> Naučíte sa, ako rozvíjať svoju tvorivosť v každodennom živote, práci aj medziľudských vzťahoch.</p>
 <p className="flex gap-3"><span className="text-[#f47f44] font-bold">•</span> Získate praktické nástroje and techniky, ktoré vám pomôžu rozvíjať kreativitu aj po skončení workshopu.</p>
 <p className="flex gap-3"><span className="text-[#f47f44] font-bold">•</span> Stačí sa odvážiť skúšať, hrať sa and objavovať!</p>
 <p className="flex gap-3"><span className="text-[#f47f44] font-bold">•</span> Zistíte, kde sú vaše silné stránky, kde máte limity and čo s nimi môžete robiť.</p>
 <p className="flex gap-3 font-bold text-black"><span className="text-[#f47f44]">•</span> Posuniete svoje kreatívne myslenie na vyššiu úroveň and naučíte sa pracovať so svojím potenciálom.</p>
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
 'Objavíte v sebe viac fanatzie.',
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
 <div className="mb-24">
 <h3 className="text-[2.5rem] mb-12 text-black" style={{ fontFamily: 'var(--font-heading)' }}>Kto sa vám bude venovať?</h3>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
 {lectors.map((member) => {
 const data = getStaffData(member.name);
 const canOpen = !!data;
 return (
 <div
 key={member.name}
 className={`bg-white rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 ${canOpen ? 'cursor-pointer hover:shadow-xl ring-2 ring-transparent hover:ring-[#f47f44]/50 group' : ''}`}
 onClick={() => canOpen && handleMemberClick(member)}
 >
 <div className="aspect-[3/4] relative bg-gray-100 overflow-hidden">
 <Image
 src={member.image}
 alt={member.name}
 fill
 className="object-cover transition-transform duration-500 group-hover:scale-105"
 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
 />
 <div className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-gradient-to-t from-black/70 to-transparent">
 <h3 className="text-white text-[1.1rem] mb-0.5 leading-tight drop-shadow-lg" style={{ fontFamily: 'var(--font-heading)' }}>{member.name}</h3>
 <p className="text-[#f47f44] font-bold text-xs uppercase tracking-wider drop-shadow-lg">{member.role}</p>
 </div>
 {canOpen && (
 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
 <span className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
 Viac info
 </span>
 </div>
 )}
 </div>
 </div>
 );
 })}
 </div>
 </div>

 {/* Terms and Waiting List */}
 <div className="bg-black text-white border border-gray-800 p-10 rounded-2xl mb-12 relative overflow-hidden text-center shadow-xl">
 <h4 className="text-[2rem] font-bold text-white mb-4 uppercase" style={{ fontFamily: 'var(--font-heading)' }}>TERMÍN: WAITING LIST</h4>
 <p className="text-[1.2rem] text-white font-bold mb-4 uppercase tracking-tighter">NAPÍŠTE NÁM A MY VÁS PRIDÁME</p>
 <div className="flex flex-col gap-2 mb-8 max-w-md mx-auto text-gray-300">
 <div className="flex justify-between border-b border-gray-800 pb-2"><span>Čas:</span> <strong>09:30 - 16:30</strong></div>
 <div className="flex justify-between border-b border-gray-800 pb-2"><span>Obedná pauza:</span> <strong>12:30 - 13:30</strong></div>
 </div>
 <div className="flex gap-4 justify-center max-sm:flex-col max-sm:items-center">
 <Button
 href="mailto:info@ludusacademy.sk"
 className="!bg-white !text-black hover:!bg-gray-200"
 >
 info@ludusacademy.sk
 </Button>
 <Button
 href="tel:+421947942125"
 className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black"
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
