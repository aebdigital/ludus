'use client';

import Sidebar from '@/components/Sidebar';
import GalleryGrid from '@/components/GalleryGrid';

const triedyImages = [
 { id: 9, url: '/fotky priestorov/triedy/IMG_5434.webp', alt_text: 'TRIEDA 1' },
 { id: 10, url: '/fotky priestorov/triedy/IMG_5435.webp', alt_text: 'TRIEDA 2' },
 { id: 11, url: '/fotky priestorov/triedy/IMG_5436.webp', alt_text: 'TRIEDA 3' },
 { id: 12, url: '/fotky priestorov/triedy/IMG_5437.webp', alt_text: 'TRIEDA 4' },
 { id: 13, url: '/fotky priestorov/triedy/IMG_5438.webp', alt_text: 'TRIEDA 5' },
 { id: 14, url: '/fotky priestorov/triedy/IMG_5445.webp', alt_text: 'TRIEDA 6' },
 { id: 15, url: '/fotky priestorov/triedy/IMG_5451.webp', alt_text: 'TRIEDA 7' },
];

export default function PriestorySkolyPage() {
 return (
 <div className="bg-white">
 <section
 className="h-[40vh] max-md:h-[20vh] bg-cover flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20 max-md:mt-13 "
 style={{ backgroundImage: "url('/images/skola-main.webp')", backgroundPosition: 'center 35%' }}
 >
 <div className="absolute inset-0 bg-black/40" />
 <h1
 className="relative text-white text-[5rem] z-10 text-center max-md:text-[3rem]"
 style={{ fontFamily: 'var(--font-heading)' }}
 >
 Naše priestory
 </h1>
 </section>

 <div className="w-[95%] mx-auto py-16">
 <div className="flex gap-16 items-start max-xl:flex-col">
 <main className="flex-1 min-w-0">
 <div className="mb-24">
 <h2 className="text-[3rem] mb-4 text-black leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
 Priestory Školy Ludus
 </h2>


 <div className="space-y-32">
 {/* Triedy Section */}
 <section>
 <p className="text-lg text-black mb-8 leading-relaxed max-w-4xl">
 Priestory našej umeleckej školy, v ktorých prebieha výučba literárno-dramatického odboru a kurzov Ludus Academy.
 </p>
 <GalleryGrid images={triedyImages} />
 </section>
 </div>
 </div>
 </main>

 <Sidebar category="skola-ludus" />
 </div>
 </div>
 </div>
 );
}
