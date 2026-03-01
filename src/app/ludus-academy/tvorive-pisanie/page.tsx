'use client';

import { useState } from 'react';
import AcademySubpageSidebar from '@/components/AcademySubpageSidebar';
import Button from '@/components/Button';
import Image from 'next/image';
import { staffData, StaffMember } from '@/data/staffData';
import StaffMemberModal from '@/components/StaffMemberModal';

export default function TvorivePisaniePage() {
 const [selectedMember, setSelectedMember] = useState<StaffMember | null>(null);

 const lectors = [
 {
 name: 'Mgr. art Michal Rovňák',
 role: 'Pedagóg',
 image: '/pedagogovia/MICHAL ROVŇÁK.webp'
 },
 {
 name: 'Mgr. art Janko Mikuš',
 role: 'Pedagóg',
 image: '/pedagogovia/JANKO MIKUŠ.webp'
 }
 ];

 const getStaffData = (name: string) => {
 if (staffData[name]) return staffData[name];
 const cleanName = name
 .replace(/^(Mgr\. art |Bc\. |MgA\. |Mgr\.art )/i, '')
 .replace(/ ArtD\.?$/i, '')
 .trim();

 if (staffData[cleanName]) return staffData[cleanName];

 const variations: Record<string, string> = {
 "Michal Rovňák": "Michal Rovňák",
 "Ján Mikuš": "Janko Mikuš",
 "Janko Mikuš": "Janko Mikuš"
 };
 if (variations[cleanName] && staffData[variations[cleanName]]) {
 return staffData[variations[cleanName]];
 }
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
 style={{ backgroundImage: "url('/images/academy/IMG_4766.webp')" }}
 >
 <div className="absolute inset-0 bg-black/40" />
 <h1
 className="relative text-white text-[6rem] z-10 text-center max-md:text-[2.2rem]"
 style={{ fontFamily: 'var(--font-heading)' }}
 >
 Kurz tvorivého písania
 </h1>
 </section>

 <div className="w-[95%] mx-auto py-16 max-md:pt-5">
 <div className="flex gap-16 items-start max-xl:flex-col max-md:gap-4">
 <AcademySubpageSidebar />

 <main className="flex-1 min-w-0">
 <div className="mb-24">
 <h2 className="text-[3rem] mb-2 text-black leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
 RADOSŤ <span className="text-[#f47f44]">vedieť</span> PÍSAŤ
 </h2>
 <div className="text-[#f47f44] font-bold text-[1.2rem] mb-8 uppercase tracking-widest leading-tight">
 NIEKEDY JE LEPŠIE PÍSAŤ. IBA PÍSAŤ.
 </div>

 <div className="flex gap-12 max-lg:flex-col mb-12">
 <div className="flex-[0.7] text-[1.1rem] text-[#000] space-y-6 leading-relaxed">
 <p className="italic font-light text-black border-l-4 border-[#f47f44] pl-6 py-2">
 Nie všetko sa dá povedať nahlas. Niekedy je lepšie písať. Písanie umožňuje človeku usporiadať si myšlienky and vyjadriť oveľa viac emócii zo zákutí vlastného ja, než rozprávanie.
 </p>
 <p>
 Pomáha vám, ak svoje pocity vyjadríte písaným slovom? Je papier and pero vašim priateľom v ťažkých chvíľach? Prináša vám písanie radosť and uspokojenie? Cítite radosť, ak sa vám podarí napísať niečo úprimné? Chcete objaviť nové možnosti, ako sa vyjadriť pomocou písaného slova? Máte chuť zistiť rozdiel medzi textom and "textom"? Chcete spoznať možnosti, ako váš text urobiť pôsobivejším? Chcete vedieť, ako sa vyhnúť klišé and objaviť spôsoby, ako byť originálny? Tento kurz prinesie do vášho života nové impulzy and nový uhol pohľadu na písaný text.
 </p>
 </div>
 <div className="flex-[0.3] min-w-[300px]">
 <Image
 src="/GRAFIKA NA WEB KURZOV/kurz-tvoriveho-pisania.webp"
 alt="Kurz tvorivého písania program"
 width={600}
 height={800}
 className="w-full h-auto rounded-xl shadow-lg border border-gray-100"
 />
 </div>
 </div>

 <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 mb-12 shadow-sm">
 <h3 className="text-[1.8rem] mb-8 text-black" style={{ fontFamily: 'var(--font-heading)' }}>
 Aké zmeny prinesie KURZ do vášho života?
 </h3>
 <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
 {[
 'Naučíte sa ako prostredníctvom písania uchopiť tému, námet and príbeh.',
 'Zistíte ako dať textu správnu štruktúru, ako zvoliť správny žáner.',
 'Dozviete sa ako sa vyhnúť alogizmom, klišé and frázam.',
 'Naučíte sa vytvárať atmosféru, ktorá vtiahne čitateľa.',
 'Vysvetlíte si, ako vybudovať živú postavu, vzťahy and motivácie postáv.',
 'Budete vedieť preniesť do textu emóciu, dramatickú situáciu and živý dialóg.',
 'Dozviete sa, v čom tkvie úspech písania vtipných textov.',
 'Naučíte sa princípy písania poviedky, divadelného či filmového scenára.',
 'Bude Vás učiť profesionálny dlhoročný lektor.',
 'Strávite svoj čas zmysluplne and netradične.',
 'Spoznáte viac sám seba.',
 'Zlepšíte sa v slovnej zásobe.'
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
 NEKUPUJETE SI KURZ, INVESTUJETE DO SVOJHO ROZVOJA: <span className="text-[#f47f44]">308 EUR</span>
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
 <li className="flex gap-2 items-center"><span className="text-[#f47f44]">•</span> Profesionálny lektor so skúsenosťami</li>
 <li className="flex gap-2 items-center"><span className="text-[#f47f44]">•</span> Individuálny prístup</li>
 <li className="flex gap-2 items-center"><span className="text-[#f47f44]">•</span> Rôzne tvorivé metódy písania</li>
 <li className="flex gap-2 items-center"><span className="text-[#f47f44]">•</span> Káva and čaj počas kurzu</li>
 <li className="flex gap-2 items-center"><span className="text-[#f47f44]">•</span> Certifikát</li>
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

 {/* Requirements Section */}
 <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 mb-12">
 <h3 className="text-[1.8rem] mb-6 text-black" style={{ fontFamily: 'var(--font-heading)' }}>Čo je potrebné priniesť na kurz:</h3>
 <p className="text-[#000] leading-relaxed">
 Ideálne je na hodinách písať do laptopu, aby ste vedeli flexibilne and rýchlo texty upraviť and prepísať. Je teda vhodné, keby ste si na lekcie nosili svoj laptop. Ak žiadny nemáte, vieme vám požičať, prípadne ak preferujete písať rukou, môžete, avšak ku koncu kurzu by bolo vhodné texty prepísať do elektronickej podoby.
 </p>
 </div>

 <div className="space-y-12 mb-12">
 {/* Success Story Section */}
 <div className="bg-[#f47f44]/5 p-12 rounded-3xl border border-[#f47f44]/20">
 <div className="flex gap-12 items-center max-md:flex-col mb-12">
 <div className="flex-1">
 <h3 className="text-[2.5rem] mb-6 leading-tight font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
 Vaša tvorba nás inšpiruje
 </h3>
 <p className="text-xl text-black leading-relaxed mb-8">
 Náš kurz tvorivého písania nakopol účastníčku **Ivetku** k napísaniu svojej prvej knihy. Sme radi, že vás inšpirujeme and sme súčasťou vašej kreatívnej cesty.
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
 <div className="bg-white border-2 border-[#f47f44] p-10 rounded-2xl relative overflow-hidden flex flex-col">
 <div className="absolute top-0 right-0 bg-[#f47f44] text-black px-6 py-2 font-bold uppercase tracking-widest">TERMÍN</div>
 <h4 className="text-[1.8rem] font-bold text-black mb-2 uppercase" style={{ fontFamily: 'var(--font-heading)' }}>14.4 - 9.6.2026</h4>
 <p className="font-bold text-black text-[1.5rem] mb-6 uppercase tracking-tight">Každý UTOROK od 18:00 - 20:30</p>
 <div className="flex flex-col gap-2 p-6 bg-gray-50 rounded-xl mb-8">
 <span className="text-xs uppercase text-black font-bold tracking-widest">Váš Lektor</span>
 <p className="text-black font-bold text-xl">Mgr. art. Michal Rovňák</p>
 <p className="text-xs text-black italic">
 <a href="/ludus-academy/lektori" className="hover:underline">(viac o lektoroch)</a>
 </p>
 </div>
 <div className="mt-auto">
 <Button
 href="https://form.fapi.cz/?id=a1d7c8a7-ff33-48e8-8ac1-4eb1c6a8019b"
 className="w-full justify-center py-4 text-xl !bg-black !text-white hover:!bg-gray-800"
 target="_blank"
 >
 PRIHLÁSIŤ SA
 </Button>
 </div>
 </div>

 <div className="bg-black border border-gray-800 p-10 rounded-2xl text-center flex flex-col justify-center shadow-xl">
 <h4 className="text-[1.8rem] font-bold text-white mb-4 uppercase" style={{ fontFamily: 'var(--font-heading)' }}>
 ĎALŠÍ CYKLUS KURZOV SPUSTÍME V SEPTEMBRI 2026
 </h4>
 <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
 V prípade, že máte o tento kurz záujem, tak nám pokojne napíšte and my Vás zaradíme na "WAITING LIST". Akonáhle budeme mať naplánované termíny kurzov, tak Vás budeme medzi prvými informovať aby ste sa mohli prihlásiť.
 </p>
 <Button href="/ludus-academy/kontakt" className="!bg-white !text-black hover:!bg-gray-200 px-10 py-4 text-lg">Mám záujem</Button>
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
