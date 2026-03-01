import AcademySubpageSidebar from '@/components/AcademySubpageSidebar';
import Button from '@/components/Button';
import Image from 'next/image';

export default async function IndividualneTreningyPage() {

 return (
 <div className="bg-white">
 <section
 className="h-[40vh] max-md:h-[20vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20 max-md:mt-13 "
 style={{ backgroundImage: "url('/images/academy/IMG_9073.webp')" }}
 >
 <div className="absolute inset-0 bg-black/40" />
 <h1
 className="relative text-white text-[5rem] z-10 text-center max-md:text-[2.2rem]"
 style={{ fontFamily: 'var(--font-heading)' }}
 >
 Individuálny tréning
 </h1>
 </section>



 <div className="w-[95%] mx-auto py-16 max-md:pt-5">
 <div className="flex gap-16 items-start max-xl:flex-col max-md:gap-4">
 <AcademySubpageSidebar />

 <main className="flex-1 min-w-0">
 <div className="mb-24">
 <h2 className="text-[3rem] mb-8 text-black leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
 Radosť <span className="text-[#066831]">sa</span> rozvíjať
 </h2>

 <div className="flex gap-12 max-lg:flex-col mb-16">
 <div className="flex-[0.7] text-[1.15rem] text-[#000] space-y-6 leading-relaxed flex flex-col justify-center">
 <p className="italic font-light text-black border-l-4 border-[#066831] pl-6 py-2">
 Hovoriť pred ľuďmi alebo kamerou nie je talent, ale zručnosť. Na individuálnom tréningu v Ludus Academy si ju môžete bezpečne natrénovať.
 </p>
 <p>
 Rozhovor v médiách, moderovanie podujatia, prezentácia pred publikom, pracovný pohovor či moment, keď sa od vás čaká rýchla reakcia a jasná myšlienka.
 Individuálny tréning v Ludus Academy sú prakticky zamerané stretnutia pre jednotlivcov, ktorí chcú vystupovať istejšie, zrozumiteľnejšie a prirodzenejšie. Nejde o teóriu ani poučky. Trénujeme priamo situácie, v ktorých sa potrebujete vedieť oprieť sami o seba.
 </p>
 <p className="text-[1.3rem] font-bold text-black border-l-4 border-[#066831] pl-6 py-2">
 Pripravíme vás na rozhovory, prezentácie aj nečakané situácie tak, aby ste vedeli reagovať pokojne, jasne a prirodzene. Niektoré situácie totiž neprichádzajú s druhým pokusom.
 </p>
 </div>
 <div className="flex-[0.3] min-w-[300px]">
 <Image
 src="/GRAFIKA NA WEB KURZOV/individualny-trening.webp"
 alt="Individuálny tréning program"
 width={600}
 height={800}
 className="w-full h-auto rounded-xl shadow-lg border border-gray-100"
 />
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
 <div className="bg-white p-10 max-md:p-4 rounded-2xl border-2 border-gray-50 flex flex-col justify-center">
 <h3 className="text-[1.8rem] mb-6 text-black" style={{ fontFamily: 'var(--font-heading)' }}>
 Pre koho je tréning určený
 </h3>
 <ul className="space-y-3">
 {[
 'Ľudí, ktorí komunikujú s médiami alebo sa na to pripravujú',
 'Moderátorov a začínajúcich hostiteľov podujatí',
 'Lektorov, pedagógov a vedúcich tímov',
 'Manažérov a podnikateľov prezentujúcich projekty či produkty',
 'Každého, kto chce hovoriť istejšie pred ľuďmi'
 ].map((item, i) => (
 <li key={i} className="flex gap-3 items-start text-[#000]">
 <span className="text-[#066831] mt-1 font-bold">•</span>
 {item}
 </li>
 ))}
 </ul>
 <p className="mt-6 text-sm italic text-gray-500">
 Nie je potrebná predchádzajúca skúsenosť. Tréning sa prispôsobuje konkrétnemu človeku a jeho situáciám.
 </p>
 </div>
 <div className="bg-gray-50 p-10 max-md:p-4 rounded-2xl border border-gray-100">
 <h3 className="text-[1.8rem] mb-6 text-black" style={{ fontFamily: 'var(--font-heading)' }}>
 Cieľ tréningu
 </h3>
 <div className="space-y-4 text-[#000]">
 <p>
 Cieľom je, aby ste vedeli komunikovať pokojne a zrozumiteľne aj pod tlakom.
 Naučíte sa formulovať myšlienky, reagovať pohotovo a pôsobiť autenticky bez naučených fráz alebo strojenosti.
 </p>
 <p>
 Pracujeme s hlasom, tempom reči, štruktúrou vyjadrovania aj s tým, čo robiť, keď vás niečo zaskočí.
 Postupne si vytvoríte vlastný spôsob vystupovania, ktorý je funkčný a zároveň prirodzený.
 </p>
 <p className="font-bold text-black pt-2">
 Je na vás koľko hodín sa rozhodnete trénovať.
 </p>
 </div>
 </div>
 </div>

 <div className="bg-[#066831]/5 border border-[#066831]/20 p-10 max-md:p-4 rounded-2xl mb-16">
 <h3 className="text-[2rem] mb-8 text-black text-center" style={{ fontFamily: 'var(--font-heading)' }}>
 Čo môžete získať
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {[
 'Schopnosť jasne a stručne formulovať myšlienky',
 'Väčší pokoj pri vystupovaní pred kamerou alebo publikom',
 'Pohotovosť v nečakaných otázkach a situáciách',
 'Prácu s hlasom, tempom a artikuláciou',
 'Prirodzený prejav bez zbytočného stresu',
 'Istotu v moderovaní a vedení rozhovoru',
 'Väčšiu sebadôveru pri prezentáciách',
 'Kreativitu a flexibilitu v komunikácii'
 ].map((benefit, i) => (
 <div key={i} className="flex gap-3 items-center bg-white p-4 rounded-xl shadow-sm border border-[#066831]/10">
 <span className="w-6 h-6 rounded-full bg-[#066831] flex items-center justify-center text-black text-xs font-bold">✓</span>
 <span className="text-[1rem] font-medium text-black">{benefit}</span>
 </div>
 ))}
 </div>
 <p className="mt-8 text-center text-gray-600 italic">
 Každé stretnutie obsahuje konkrétne cvičenia, modelové situácie a spätnú väzbu. Tréning tak nie je len prípravou na jedno vystúpenie, ale zručnosťou, ktorú viete používať dlhodobo.
 </p>
 </div>

 <div className="bg-[#d66420] text-white p-12 max-md:p-5 rounded-2xl text-center shadow-2xl relative overflow-hidden group">
 <div className="absolute inset-0 bg-gradient-to-r from-[#066831]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
 <h3 className="text-[2.2rem] mb-6 leading-tight relative z-10">
 Máte záujem?
 </h3>
 <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10 text-[1.1rem]">
 Kontaktujte nás emailom alebo telefonicky.
 </p>
 <div className="flex gap-4 justify-center relative z-10 max-sm:flex-col max-sm:items-center">
 <Button
 href="mailto:info@ludusacademy.sk"
 className="!bg-white !text-black hover:!bg-gray-200 px-10 py-4 text-lg"
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
