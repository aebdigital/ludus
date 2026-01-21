'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import CookieSettingsModal from './CookieSettingsModal';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('ludus_cookie_consent');
        if (!consent) {
            setIsVisible(true);
        }

        // Expose functionality to open settings from footer
        window.openCookieSettings = () => setIsModalOpen(true);

        return () => {
            window.openCookieSettings = undefined;
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('ludus_cookie_consent', 'true');
        setIsVisible(false);
    };

    const handleSettings = () => {
        setIsModalOpen(true);
    };

    return (
        <>
            <div
                className={`fixed bottom-0 left-0 w-full bg-black text-white p-6 z-[2000] flex justify-between items-center max-md:flex-col max-md:gap-4 max-md:text-center transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
            >
                <p className="text-[0.95rem] max-w-[60%] max-md:max-w-full">
                    Používame cookies, aby sme vám poskytli čo najlepší zážitok z našej webovej stránky. Viac informácií nájdete v{' '}
                    <Link href="/ochrana-osobnych-udajov" className="underline hover:text-gray-300">
                        Zásadách ochrany osobných údajov
                    </Link>.
                </p>
                <div className="flex gap-4">
                    <button
                        onClick={handleSettings}
                        className="text-white underline text-[0.95rem] hover:text-gray-300 transition-colors"
                    >
                        Nastavenia
                    </button>
                    <button
                        onClick={handleAccept}
                        className="bg-white text-black px-6 py-2 rounded-full font-bold uppercase text-[0.9rem] hover:scale-105 transition-transform"
                    >
                        Súhlasím
                    </button>
                </div>
            </div>

            <CookieSettingsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={() => {
                    setIsVisible(false);
                    localStorage.setItem('ludus_cookie_consent', 'true');
                }}
            />
        </>
    );
}

declare global {
    interface Window {
        openCookieSettings?: () => void;
    }
}
