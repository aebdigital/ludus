'use client';

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

export default function PriestorySkolyClient() {
    return (
        <div className="mb-24">
            <h2 className="text-[3rem] mb-4 text-black leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                Priestory Školy Ludus
            </h2>
            <div className="space-y-32">
                <section>
                    <p className="text-lg text-black mb-8 leading-relaxed max-w-4xl">
                        Priestory našej umeleckej školy, v ktorých prebieha výučba literárno-dramatického odboru a kurzov Ludus Academy.
                    </p>
                    <GalleryGrid images={triedyImages} />
                </section>
            </div>
        </div>
    );
}

