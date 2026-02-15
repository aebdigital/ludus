'use client';

import { useState } from 'react';
import Image from 'next/image';
import Sidebar from '@/components/Sidebar';
import { staffData, StaffMember } from '@/data/staffData';
import StaffMemberModal from '@/components/StaffMemberModal';

const staff = [
  {
    name: 'Mgr. art Katarína Baranová ArtD.',
    role: 'Pedagóg',
    image: '/pedagogovia/KATARÍNA BARANOVA.webp'
  },
  {
    name: 'Katarína Gurová',
    role: 'Pedagóg',
    image: '/pedagogovia/KATARÍNA GUROVÁ.webp'
  },
  {
    name: 'Mgr. art Mirka Durná',
    role: 'Pedagóg',
    image: '/pedagogovia/MIRKA DURNÁ.webp'
  },
  {
    name: 'Mgr. art Lenka Libjaková',
    role: 'Pedagóg',
    image: '/pedagogovia/LENKA LIBJAKOVÁ.webp'
  },
  {
    name: 'Mgr. art Michal Rovňák',
    role: 'Pedagóg',
    image: '/pedagogovia/MICHAL ROVŇÁK.webp'
  },
  {
    name: 'Mgr. art Jakub Rek',
    role: 'Pedagóg',
    image: '/pedagogovia/JAKUB REK.webp'
  },
  {
    name: 'Mgr. art Jakub Ružička',
    role: 'Pedagóg',
    image: '/pedagogovia/JAKUB RUŽIČKA.webp'
  },
  {
    name: 'Mgr. art Janko Mikuš',
    role: 'Pedagóg',
    image: '/pedagogovia/JANKO MIKUŠ.webp'
  },
  {
    name: 'Noro Šáro',
    role: 'Pedagóg',
    image: '/pedagogovia/NORO ŠARO.webp'
  },
  {
    name: 'Mgr. art Kamil Kollárik',
    role: 'Pedagóg',
    image: '/pedagogovia/KAMIL KOLÁRIK.webp'
  },
  {
    name: 'Mgr. art Jozef Jurčišin Kukľa',
    role: 'Pedagóg',
    image: '/pedagogovia/JOŽKO JURČIŠIN KUKLA.webp'
  },
  {
    name: 'Richard Labuda',
    role: 'Pedagóg',
    image: '/pedagogovia/RICHARD LABUDA.webp'
  },
  {
    name: 'Daniel Zwach',
    role: 'Pedagóg',
    image: '/pedagogovia/DANIEL ZWACH.webp'
  },
  {
    name: 'Bc. Simon Fico',
    role: 'Pedagóg',
    image: '/pedagogovia/SIMON FICO.webp'
  },
  {
    name: 'Ada Juhásová',
    role: 'Pedagóg',
    image: '/pedagogovia/ADA JUHASOVÁ.webp'
  },
  {
    name: 'Naďa Gášeková',
    role: 'Pedagóg',
    image: '/pedagogovia/NAĎA GÁŠEKOVÁ.webp'
  },
  {
    name: 'Ria Benkovská',
    role: 'Pedagóg',
    image: '/pedagogovia/RIA BENKOVSKÁ.webp'
  },
  {
    name: 'Viktória Šuplatová',
    role: 'Pedagóg',
    image: '/pedagogovia/VIKTÓRIA ŠUPLATOVÁ.webp'
  },
  {
    name: 'Bc. David Kakaš',
    role: 'Pedagóg',
    image: '/pedagogovia/DAVID KAKAŠ.webp'
  },
  {
    name: 'Soňa Borušovičová',
    role: 'Pedagóg',
    image: '/pedagogovia/SOŇA BORUŠOVIČOVÁ.webp'
  },
  {
    name: 'Mgr. art Edita Koprivčevič Borsová',
    role: 'Pedagóg',
    image: '/pedagogovia/EDITA BORSOVÁ.webp'
  },
  {
    name: 'Laura Jankurová',
    role: 'Pedagóg',
    image: '/pedagogovia/LAURA JANKUROVÁ.webp'
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
    "Laco Ladomirjak": "Ladislav Ladomirjak",
    "Rišo Labuda": "Richard Labuda"
  };

  if (variations[cleanName] && staffData[variations[cleanName]]) {
    return staffData[variations[cleanName]];
  }

  return null;
};

export default function SkolaLudusPedagogoviaPage() {
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
        style={{ backgroundImage: "url('/images/skola/IMG_2915.webp')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1
          className="relative text-white text-[6rem] z-10 text-center max-md:text-[3rem]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Pedagógovia
        </h1>
      </section>

      <div className="w-[95%] mx-auto py-16">
        <div className="flex gap-16 items-start max-xl:flex-col">

          {/* Main Content Column */}
          <main className="flex-1 min-w-0">
            <p className="text-[1.2rem] text-[#000] mb-12 max-w-[800px]">
              Náš tím tvoria profesionálni pedagógovia s bohatými skúsenosťami v oblasti divadla a vzdelávania.
              Každý z nich prináša jedinečný pohľad a prístup k výučbe dramatického umenia.
            </p>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8">
              {staff.map((member) => {
                const data = getStaffData(member.name);
                const canOpen = !!data;
                return (
                  <div
                    key={member.name}
                    className={`bg-white rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 ${canOpen ? 'cursor-pointer hover:shadow-xl ring-2 ring-transparent hover:ring-[#ffd37c]/50 group' : ''}`}
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

                      {/* Status Indicator */}
                      {canOpen && (
                        <div className="absolute top-3 right-3 z-10 bg-green-500 text-white rounded-full p-1 shadow-md" title="Obsah k dispozícii">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}

                      {/* Overlay indicator */}
                      {canOpen && (
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
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
          <Sidebar category="skola-ludus" />
        </div>
      </div>
    </>
  );
}
