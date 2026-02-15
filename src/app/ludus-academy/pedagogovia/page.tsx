'use client';

import { useState } from 'react';
import Image from 'next/image';
import Sidebar from '@/components/Sidebar';
import { staffData, StaffMember } from '@/data/staffData';
import StaffMemberModal from '@/components/StaffMemberModal';

const staff = [
  {
    name: 'Mgr. art Katarína Baranová ArtD',
    role: 'Lektor',
    image: '/pedagogovia/KATARÍNA BARANOVA.webp'
  },
  {
    name: 'Mgr. art Michal Rovňák',
    role: 'Lektor',
    image: '/pedagogovia/MICHAL ROVŇÁK.webp'
  },
  {
    name: 'Mgr. art Lenka Libjaková',
    role: 'Lektor',
    image: '/pedagogovia/LENKA LIBJAKOVÁ.webp'
  },
  {
    name: 'Mgr. art Jakub Rek',
    role: 'Lektor',
    image: '/pedagogovia/JAKUB REK.webp'
  },
  {
    name: 'Mgr. art Janko Mikuš',
    role: 'Lektor',
    image: '/pedagogovia/JANKO MIKUŠ.webp'
  },
  {
    name: 'Mgr. art Noro Šáro',
    role: 'Lektor',
    image: '/pedagogovia/NORO ŠARO.webp'
  },
  {
    name: 'Mgr. art Mirka Durná ArtD',
    role: 'Lektor',
    image: '/pedagogovia/MIRKA DURNÁ.webp'
  },
  {
    name: 'Mgr. art Katarína Gurová',
    role: 'Lektor',
    image: '/pedagogovia/KATARÍNA GUROVÁ.webp'
  },
  {
    name: 'Mgr. art Edita Koprivčevič Borsová',
    role: 'Lektor',
    image: '/pedagogovia/EDITA BORSOVÁ.webp'
  },
  {
    name: 'Mgr. art Jozef Jurčišin Kukľa',
    role: 'Lektor',
    image: '/pedagogovia/JOŽKO JURČIŠIN KUKLA.webp'
  },
  {
    name: 'Bc. Rišo Labuda',
    role: 'Lektor',
    image: '/pedagogovia/RICHARD LABUDA.webp'
  },
  {
    name: 'Mgr. art Jakub Ružička',
    role: 'Lektor',
    image: '/pedagogovia/JAKUB RUŽIČKA.webp'
  },
  {
    name: 'Mgr. art Laco Ladomirjak',
    role: 'Lektor',
    image: '/pedagogovia/LADISLAV LADOMIRJAK.webp'
  }
];

const getStaffData = (name: string) => {
  if (staffData[name]) return staffData[name];

  const cleanName = name
    .replace(/^(Mgr\. art |Bc\. |MgA\. |Mgr\.art )/, '')
    .replace(/ ArtD\.?$/, '')
    .trim();

  if (staffData[cleanName]) return staffData[cleanName];

  const variations: Record<string, string> = {
    "Noro Šáro": "Norman Šáro",
    "Jožko Jurčišin Kukľa": "Jozef Jurčišin-Kukľa",
    "Jozef Jurčišin Kukľa": "Jozef Jurčišin-Kukľa",
    "Laco Ladomirjak": "Ladislav Ladomirjak",
    "Rišo Labuda": "Richard Labuda"
  };

  if (variations[cleanName] && staffData[variations[cleanName]]) {
    return staffData[variations[cleanName]];
  }

  return null;
};

export default function LudusAcademyPedagogoviaPage() {
  const [selectedMember, setSelectedMember] = useState<StaffMember | null>(null);

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
    <>
      <StaffMemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />

      {/* Hero */}
      <section
        className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
        style={{ backgroundImage: "url('/images/academy/IMG_1128.webp')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1
          className="relative text-white text-[6rem] z-10 text-center max-md:text-[3rem] uppercase font-bold"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Lektori Ludus Academy
        </h1>
      </section>

      <div className="w-[95%] mx-auto py-16">
        <div className="flex gap-16 items-start max-xl:flex-col">

          {/* Main Content Column */}
          <main className="flex-1 min-w-0">
            <p className="text-[1.2rem] text-[#000] mb-12 max-w-[800px]">
              Náš tím tvoria profesionálni herci, režiséri a pedagógovia s bohatými skúsenosťami v oblasti divadla a vzdelávania.
              Každý z nich prináša jedinečný pohľad a prístup k výučbe dramatického umenia.
            </p>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8">
              {staff.map((member) => {
                const canOpen = !!getStaffData(member.name);
                return (
                  <div
                    key={member.name}
                    className={`bg-white rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 ${canOpen ? 'cursor-pointer hover:shadow-xl ring-2 ring-transparent hover:ring-[#ffd37c]/50' : ''}`}
                    onClick={() => canOpen && handleMemberClick(member)}
                  >
                    <div className="aspect-[3/4] relative bg-gray-100">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-300">
                          <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                          </svg>
                        </div>
                      )}

                      {/* Status Indicator */}
                      {canOpen && (
                        <div className="absolute top-3 right-3 z-10 bg-green-500 text-white rounded-full p-1 shadow-md" title="Obsah k dispozícii">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}

                      {/* Overlay indicator for clickable items */}
                      {canOpen && (
                        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
                          <span className="bg-white/90 text-black px-3 py-1 rounded-full text-xs font-bold shadow-md transform scale-95 hover:scale-105 transition-transform">
                            Viac info
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-[1.2rem] mb-1 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>{member.name}</h3>
                      <p className="text-[#ffd37c] font-bold text-sm uppercase tracking-wider">{member.role}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </main>

          {/* Sidebar Column */}
          <Sidebar category="ludus-academy" />
        </div>
      </div>
    </>
  );
}
