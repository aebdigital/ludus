'use client';

import { useState } from 'react';

export default function MapSection() {
    const [isInteractive, setIsInteractive] = useState(false);

    return (
        <div
            className="mt-16 rounded-xl h-[400px] relative overflow-hidden shadow-lg group"
            onClick={() => setIsInteractive(true)}
            onMouseLeave={() => setIsInteractive(false)}
        >
            <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?q=Palack%C3%A9ho+22,+811+02+Bratislava&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className={`w-full h-full transition-opacity duration-300 ${isInteractive ? 'pointer-events-auto' : 'pointer-events-none'}`}
                title="Mapa - Palackého 22, Bratislava"
            ></iframe>

            {!isInteractive && (
                <div className="absolute inset-0 bg-transparent flex items-center justify-center cursor-pointer">
                    <span className="bg-black/70 text-white px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm transition-transform transform group-hover:scale-105">
                        Kliknite pre interakciu s mapou
                    </span>
                </div>
            )}
        </div>
    );
}
