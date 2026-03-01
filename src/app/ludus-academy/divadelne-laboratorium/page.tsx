'use client';

import { useState } from 'react';
import AcademySubpageSidebar from '@/components/AcademySubpageSidebar';
import Button from '@/components/Button';
import Image from 'next/image';
import { staffData, StaffMember } from '@/data/staffData';
import StaffMemberModal from '@/components/StaffMemberModal';

export default function DivadelneLaboratoriumPage() {
    const [selectedMember, setSelectedMember] = useState<StaffMember | null>(null);

    const lectors = [
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
                className="h-[40vh] max-md:h-[20vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20 max-md:mt-14"
                style={{ backgroundImage: "url('/images/academy/IMG_4194.webp')" }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <h1
                    className="relative text-white text-[5rem] z-10 text-center max-md:text-[2.5rem]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Divadelné laboratórium
                </h1>
            </section>

            <div className="w-[95%] mx-auto py-16">
                <div className="flex gap-16 items-start max-xl:flex-col">
                    <AcademySubpageSidebar />

                    <main className="flex-1 min-w-0">
                        <div className="mb-24">
                            <h2 className="text-[3rem] mb-2 text-black leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                                RADOSŤ <span className="text-[#f47f44]">sa</span> umelecky REALIZOVAŤ
                            </h2>
                            <div className="text-[#f47f44] font-bold text-[1.2rem] mb-8 uppercase tracking-widest leading-tight">
                                TVORÍM AUTENTICKY, ŽIJEM SLOBODNE
                            </div>

                            <div className="flex gap-12 max-lg:flex-col mb-12">
                                <div className="flex-[0.7] text-[1.1rem] text-[#000] space-y-6 leading-relaxed">
                                    <p>
                                        Divadelné laboratórium je kurz autorskej tvorby a improvizácie pre dospelých, v ktorom prepojíte oblasť herectva, scenáristiky a improvizácie do prevahy k modernému celku.
                                    </p>
                                    <p className="italic font-light text-black border-l-4 border-[#f47f44] pl-6 py-2">
                                        Chceli by ste vedieť ako sa dá prepojiť herectvo, improvizácia a autorská tvorba? Chceli byť ste byť súčasťou tohto umeleckého procesu a zistiť ako všetko so všetkým súvísí?
                                    </p>
                                    <p>
                                        Okrem hereckej časti, tento kurz totiž ponúka ambicióznejší vhľad do problematiky výstavby a realizácie umeleckého diela. Kurz je príležitosťou objaviť a rozvíjať svoje herecké a kreatívne schopnosti v prostredí, ktoré podporuje slobodu, zvedavosť a spoločnú tvorbu. Čaká vás zážitok, ktorý vám otvorí nové perspektívy a ponúkne možnosť realizovať sa umelecky. Poďte s nami do divadelného laboratória.
                                    </p>
                                    <p className="font-bold text-black text-center text-[1.2rem] py-4 bg-gray-50 rounded-xl">
                                        Divadelné laboratórium - bezpečný tvorivý priestor na umeleckú realizáciu.
                                    </p>
                                </div>
                                <div className="flex-[0.3] min-w-[300px]">
                                    <Image
                                        src="/GRAFIKA NA WEB KURZOV/divadelne-laboratorium.jpg"
                                        alt="Divadelné laboratórium program"
                                        width={600}
                                        height={800}
                                        className="w-full h-auto rounded-xl shadow-lg border border-gray-100"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                    <h3 className="text-[1.5rem] mb-4 text-black font-bold uppercase" style={{ fontFamily: 'var(--font-heading)' }}>Aké skúsenosti sú potrebné?</h3>
                                    <p className="text-[#000]">Bez ohľadu na to, či máte skúsenosti s herectvom, tvorivým písaním alebo improvizáciou, ak máte chuť otvoriť sa novým podnetom a výzvam, ste na správnom mieste.</p>
                                </div>
                                <div className="p-8 bg-black text-white rounded-2xl shadow-xl">
                                    <h3 className="text-[1.5rem] mb-4 text-[#f47f44] font-bold uppercase" style={{ fontFamily: 'var(--font-heading)' }}>Pre koho je určený?</h3>
                                    <ul className="space-y-4 text-gray-300">
                                        <li className="flex gap-2"><span className="text-[#f47f44] font-bold">•</span> Záujemcom ktorých zaujíma tvorivé písanie and scenáristika.</li>
                                        <li className="flex gap-2"><span className="text-[#f47f44] font-bold">•</span> Tým, ktorých zaujíma herectvo.</li>
                                        <li className="flex gap-2"><span className="text-[#f47f44] font-bold">•</span> Záujemcom, ktorých láka improvizácia and improvizované divadlo.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 mb-12">
                                <h3 className="text-[1.8rem] mb-8 text-black" style={{ fontFamily: 'var(--font-heading)' }}>Kurz sa zameriava na:</h3>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-bold text-black mb-1">Autentický herecký prejav</h4>
                                        <p className="text-[#000]">Naučíte sa pracovať so svojím telom and hlasom, rozvíjať svoju kreativitu and schopnosť reagovať na podnety zo svojho okolia i vnútra. Prevedieme vás jednoduchými hereckými cvičeniami, ktoré vychádzajú z rôznych hereckých metód. Zistíte ako funguje filmové herectvo.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-black mb-1">Improvizácia</h4>
                                        <p className="text-[#000]">Spoznáte, ako sa uvoľniť, nechať sa viesť prítomným momentom and vytvárať zmysluplné improvizácie. Prevedieme vás rôznymi improvizačnými metódami, ktoré vám pomôžu pri tvorbe improvizovaného divadla.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-black mb-1">Autorská tvorba</h4>
                                        <p className="text-[#000]">Ponoríte sa do procesu výstavby dramatických príbehov and scenárov. Počas kurzu sa zoznámime aj s výstavbou dramatickej fabuly and úvodom k divadelnej, či filmovej scenáristike. Zistíte ako môže vzniknúť jedna z foriem autorského divadla.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-black mb-1">Skúmanie hraníc and limitov</h4>
                                        <p className="text-[#000]">Zistíte, aké nečakané možnosti vám ponúkajú vaše vlastné limity and ako sa otvoriť podnetom vnútorného i vonkajšieho sveta and ako funguje spoluprežívanie na javisku.</p>
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
                                                <li className="flex gap-2 items-center"><span className="text-[#f47f44]">•</span> Herecké and improvizačné cvičenia</li>
                                                <li className="flex gap-2 items-center"><span className="text-[#f47f44]">•</span> Praktický tréning</li>
                                                <li className="flex gap-2 items-center"><span className="text-[#f47f44]">•</span> Malé občerstvenie</li>
                                                <li className="flex gap-2 items-center"><span className="text-[#f47f44]">•</span> Záverečné vystúpenie pre divákov</li>
                                                <li className="flex gap-2 items-center"><span className="text-[#f47f44]">•</span> Certifikát</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-white/10 text-sm italic opacity-70">
                                        PODMIENKA ÚČASTI: vek od 18 rokov and ukončené stredoškolské vzdelanie
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

                            <div className="bg-black text-white p-10 rounded-2xl text-center shadow-xl">
                                <h4 className="text-[1.8rem] font-bold text-white mb-4 uppercase" style={{ fontFamily: 'var(--font-heading)' }}>
                                    ĎALŠÍ CYKLUS KURZOV SPUSTÍME V SEPTEMBRI 2026
                                </h4>
                                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                                    V prípade, že máte o tento kurz záujem, tak nám pokojne napíšte and my Vás zaradíme na "WAITING LIST". Akonáhle budeme mať naplánované termíny kurzov, tak Vás budeme medzi prvými informovať aby ste sa mohli prihlásiť.
                                </p>
                                <Button
                                    href="/ludus-academy/kontakt"
                                    className="!bg-white !text-black hover:!bg-gray-200 px-10 py-4 text-lg"
                                >
                                    Mám záujem
                                </Button>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
