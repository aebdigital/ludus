import AcademySubpageSidebar from '@/components/AcademySubpageSidebar';
import Button from '@/components/Button';
import Image from 'next/image';

export default async function WorkshopUciteliaPage() {

 return (
 <div className="bg-white">
 <section
 className="h-[40vh] max-md:h-[20vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20 max-md:mt-13 "
 style={{ backgroundImage: "url('/images/academy/IMG_9026.webp')" }}
 >
 <div className="absolute inset-0 bg-black/40" />
 <h1
 className="relative text-white text-[5.5rem] z-10 text-center max-md:text-[2.2rem]"
 style={{ fontFamily: 'var(--font-heading)' }}
 >
 Workshop pre učiteľov
 </h1>
 </section>



 <div className="w-[95%] mx-auto py-16 max-md:pt-5">
 <div className="flex gap-16 items-start max-xl:flex-col max-md:gap-4">
 <AcademySubpageSidebar />

 <main className="flex-1 min-w-0">
 <div className="mb-24">
 <h2 className="text-[3rem] mb-2 text-black leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
 RADOSŤ <span className="text-[#f47f44]">sa</span> UČIŤ
 </h2>
 <div className="text-[#f47f44] font-bold text-[1.2rem] mb-12 uppercase tracking-widest leading-tight">
 PRIPRAVUJEME PRE VÁS NOVÉ OBSAHY
 </div>

 <div className="flex gap-12 max-lg:flex-col">
 <div className="flex-[0.7]">
 <div className="bg-black text-white p-16 rounded-3xl text-center shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
 <div className="absolute top-0 left-0 w-64 h-64 bg-[#f47f44]/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
 <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#f47f44]/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

 <div className="relative z-10">
 <div className="text-[#f47f44] text-[3.5rem] font-bold mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
 PRIPRAVUJEME
 </div>

 <div className="max-w-md mx-auto text-left">
 <h3 className="text-[1.5rem] mb-6 text-white font-bold uppercase text-center" style={{ fontFamily: 'var(--font-heading)' }}>Na čo sa môžete tešiť?</h3>
 <ul className="space-y-4 text-gray-300">
 <li className="flex gap-3"><span className="text-[#f47f44] font-bold">•</span> Kreatívne metódy učenia</li>
 <li className="flex gap-3"><span className="text-[#f47f44] font-bold">•</span> Práca s hlasom a prejavom pedagóga</li>
 <li className="flex gap-3"><span className="text-[#f47f44] font-bold">•</span> Zážitková pedagogika v praxi</li>
 <li className="flex gap-3"><span className="text-[#f47f44] font-bold">•</span> Ako zaujať a udržať pozornosť</li>
 </ul>
 </div>

 <div className="mt-12 flex flex-col items-center gap-6">
 <div className="w-16 h-1 bg-[#f47f44]"></div>
 <p className="text-gray-400 uppercase tracking-[0.3em] text-sm">Ludus Academy</p>
 </div>
 </div>
 </div>
 </div>
 <div className="flex-[0.3] min-w-[300px]">
 <Image
 src="/GRAFIKA NA WEB KURZOV/workshop-pre-ucitelov.jpg"
 alt="Workshop pre učiteľov program"
 width={600}
 height={800}
 className="w-full h-auto rounded-xl shadow-lg border border-gray-100"
 />
 </div>
 </div>
 </div>
 </main>
 </div>
 </div>
 </div>
 );
}
