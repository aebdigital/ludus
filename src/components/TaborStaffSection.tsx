'use client';

import { useState } from 'react';
import Image from 'next/image';
import { staffData, StaffMember } from '@/data/staffData';
import StaffMemberModal from '@/components/StaffMemberModal';

const staff = [
  { name: 'Jakub Ružička', role: 'Pedagóg', image: '/pedagogovia/JAKUB RUŽIČKA.webp' },
  { name: 'Mgr. art Michal Rovňák', role: 'Pedagóg', image: '/pedagogovia/MICHAL ROVŇÁK.webp' },
  { name: 'Mgr. art Lenka Libjaková', role: 'Pedagóg', image: '/pedagogovia/LENKA LIBJAKOVÁ.webp' },
  { name: 'Mgr. art Mirka Durná ArtD.', role: 'Pedagóg', image: '/pedagogovia/MIRKA DURNÁ.webp' },
  { name: 'Mgr. art Viktória Šuplatová', role: 'Pedagóg', image: '/pedagogovia/VIKTÓRIA ŠUPLATOVÁ.webp' },
  { name: 'Mgr. art Katarína Gurová', role: 'Pedagóg', image: '/pedagogovia/KATARÍNA GUROVÁ.webp' },
  { name: 'Bc. Rišo Labuda', role: 'Pedagóg', image: '/pedagogovia/RICHARD LABUDA.webp' },
  { name: 'Bc. Naďa Gášeková', role: 'Pedagóg', image: '/pedagogovia/NAĎA GÁŠEKOVÁ.webp' },
  { name: 'Mgr. art Laura Jankurová', role: 'Pedagóg', image: '/pedagogovia/jankurova.webp' },
  { name: 'Mgr. art Ada Juhásová', role: 'Pedagóg', image: '/pedagogovia/ADA JUHASOVÁ.webp' },
  { name: 'Mgr. art Jozef Jurčišin Kukľa', role: 'Pedagóg', image: '/pedagogovia/JOŽKO JURČIŠIN KUKLA.webp' },
  { name: 'Mgr. art Edita Koprivčevič Borsová', role: 'Pedagóg', image: '/pedagogovia/EDITA BORSOVÁ.webp' }
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
    "Rišo Labuda": "Richard Labuda",
    "Dano Zwach": "Daniel Zwach",
    "Mišo Rovňák": "Michal Rovňák",
    "Kaťuša Gurová": "Katarína Gurová",
    "Viki Šuplatová": "Viktória Šuplatová",
    "Ada Juhasová": "Ada Juhásová"
  };

  if (variations[cleanName] && staffData[variations[cleanName]]) {
    return staffData[variations[cleanName]];
  }

  return null;
};

export default function TaborStaffSection() {
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

      <div className="bg-[#f8f7f1] py-10 rounded-xl">
        <h3 className="text-[2rem] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
          Náš tím
        </h3>
        <p className="text-lg text-black mb-6">
          Venovať sa vám budú profesionálni herci a pedagógovia:
        </p>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8">
          {staff.map((member) => {
            const canOpen = !!getStaffData(member.name);
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

                  {/* Name bubble overlay */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-white text-[1.1rem] mb-0.5 leading-tight drop-shadow-lg" style={{ fontFamily: 'var(--font-heading)' }}>{member.name}</h3>
                    <p className="text-[#f47f44] font-bold text-xs uppercase tracking-wider drop-shadow-lg">{member.role}</p>
                  </div>

                  {/* Overlay indicator */}
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
    </>
  );
}
