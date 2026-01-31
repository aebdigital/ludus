'use client';

import Sidebar from '@/components/Sidebar';
import GalleryGrid from '@/components/GalleryGrid';

const labImages = [
  { id: 1, url: '/fotky priestorov/LUDUS LAB/IMG_5446.jpg', alt_text: 'LUDUS LAB 1' },
  { id: 2, url: '/fotky priestorov/LUDUS LAB/IMG_5447.jpg', alt_text: 'LUDUS LAB 2' },
  { id: 3, url: '/fotky priestorov/LUDUS LAB/IMG_5448.jpg', alt_text: 'LUDUS LAB 3' },
  { id: 4, url: '/fotky priestorov/LUDUS LAB/IMG_5449.jpg', alt_text: 'LUDUS LAB 4' },
  { id: 5, url: '/fotky priestorov/LUDUS LAB/IMG_5450.jpg', alt_text: 'LUDUS LAB 5' },
];

const boxImages = [
  { id: 6, url: '/fotky priestorov/blackbox/IMG_5455.jpg', alt_text: 'BLACKBOX 1' },
  { id: 7, url: '/fotky priestorov/blackbox/IMG_5458.jpg', alt_text: 'BLACKBOX 2' },
  { id: 8, url: '/fotky priestorov/blackbox/IMG_5459.jpg', alt_text: 'BLACKBOX 3' },
];

export default function PriestoryPage() {
  return (
    <div className="bg-white">
      <section
        className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
        style={{ backgroundImage: "url('/images/divadlo-main.jpg')" }}
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
                Divadlo Ludus hrá pre vás v týchto priestoroch.
              </h2>


              <div className="space-y-32">
                {/* Blackbox Section */}
                <section>
                  <div className="flex items-center gap-6 mb-8">
                    <h3 className="text-[2.5rem] m-0" style={{ fontFamily: 'var(--font-heading)' }}>BLACKBOX</h3>
                    <div className="h-px flex-1 bg-gray-100" />
                  </div>
                  <p className="text-lg text-black mb-8 leading-relaxed max-w-4xl">
                    Náš komorný divadelný priestor na Palackého 22, kde sa divák ocitá v bezprostrednej blízkosti herca.
                    Ideálne miesto pre intímne predstavenia a silné umelecké zážitky.
                  </p>
                  <GalleryGrid images={boxImages} />
                </section>

                {/* LUDUS LAB Section */}
                <section>
                  <div className="flex items-center gap-6 mb-8">
                    <h3 className="text-[2.5rem] m-0" style={{ fontFamily: 'var(--font-heading)' }}>LUDUS LAB</h3>
                    <div className="h-px flex-1 bg-gray-100" />
                  </div>
                  <p className="text-lg text-black mb-8 leading-relaxed max-w-4xl">
                    Kreatívne laboratórium a skúšobňa, v ktorej vznikajú nové nápady a kde prebieha proces
                    hľadania a tvorby.
                  </p>
                  <GalleryGrid images={labImages} />
                </section>
              </div>
            </div>
          </main>

          <Sidebar category="divadlo-ludus" />
        </div>
      </div>
    </div>
  );
}
