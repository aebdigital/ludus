'use client';

import { useState } from 'react';
import Image from 'next/image';
import { staffData, StaffMember } from '@/data/staffData';
import StaffMemberModal from '@/components/StaffMemberModal';

interface Lektor {
 name: string;
 role?: string;
 image: string;
}

const getStaffData = (name: string): StaffMember | null => {
 if (staffData[name]) return staffData[name];

 const cleanName = name
  .replace(/^(Mgr\. art\.? |Bc\. |MgA\. )/i, '')
  .replace(/ ArtD\.?$/i, '')
  .trim();

 if (staffData[cleanName]) return staffData[cleanName];

 const variations: Record<string, string> = {
  "Noro Šáro": "Norman Šáro",
  "Jožko Jurčišin Kukľa": "Jozef Jurčišin-Kukľa",
  "Jozef Jurčišin Kukľa": "Jozef Jurčišin-Kukľa",
  "Jozef Jurčišin-Kukľa": "Jozef Jurčišin-Kukľa",
  "Laco Ladomirjak": "Ladislav Ladomirjak",
  "Ladislav Ladomirjak": "Ladislav Ladomirjak",
  "Rišo Labuda": "Richard Labuda",
  "Michal Rovňák": "Michal Rovňák",
  "Miroslava Durná ArtD.": "Mirka Durná",
  "Miroslava Durná": "Mirka Durná",
  "Mirka Durná": "Mirka Durná",
  "Janko Mikuš": "Janko Mikuš",
  "Ján Mikuš": "Janko Mikuš"
 };

 if (variations[cleanName] && staffData[variations[cleanName]]) {
  return staffData[variations[cleanName]];
 }

 return null;
};

export default function LektorCards({ lektori }: { lektori: Lektor[] }) {
 const [selectedMember, setSelectedMember] = useState<StaffMember | null>(null);

 const handleClick = (lektor: Lektor) => {
  const data = getStaffData(lektor.name);
  if (data) {
   setSelectedMember({
    ...data,
    role: lektor.role || 'Lektor'
   });
  }
 };

 return (
  <>
   <StaffMemberModal
    member={selectedMember}
    onClose={() => setSelectedMember(null)}
   />
   <div className="flex gap-3 mt-2">
    {lektori.map((lektor) => {
     const canOpen = !!getStaffData(lektor.name);
     return (
      <div
       key={lektor.name}
       className={`flex items-center gap-3 ${canOpen ? 'cursor-pointer group' : ''}`}
       onClick={() => canOpen && handleClick(lektor)}
      >
       <div className="w-12 h-12 rounded-full overflow-hidden relative shrink-0 border-2 border-gray-200 group-hover:border-[#f47f44] transition-colors">
        <Image
         src={lektor.image}
         alt={lektor.name}
         fill
         className="object-cover"
         sizes="48px"
        />
       </div>
       <div className="min-w-0">
        <p className="text-black font-medium text-sm leading-tight group-hover:text-[#f47f44] transition-colors">{lektor.name}</p>
        {canOpen && <p className="text-xs text-gray-400 italic">viac info</p>}
       </div>
      </div>
     );
    })}
   </div>
  </>
 );
}
