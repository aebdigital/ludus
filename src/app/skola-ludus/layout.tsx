'use client';

import Button from '@/components/Button';
import { usePathname } from 'next/navigation';

export default function SkolaLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isContactPage = pathname === '/skola-ludus/kontakt';

    return (
        <div className="flex flex-col min-h-screen">
            {children}

            {/* Unified CTA for Skola Ludus - Hidden on Contact Page */}
            {!isContactPage && (
                <section className="bg-black p-10 text-center mt-auto">
                    <h2 className="text-center mb-4 text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                        Máte záujem?
                    </h2>
                    <p className="mb-8 opacity-80 text-white">
                        Kontaktujte nás pre viac informácií o štúdiu.
                    </p>
                    <Button href="/skola-ludus/kontakt" className="bg-white text-black hover:bg-gray-100">
                        Kontaktovať
                    </Button>
                </section>
            )}
        </div>
    );
}
