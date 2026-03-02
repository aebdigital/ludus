import { Metadata } from 'next';
import KnihaClient from './KnihaClient';

export const metadata: Metadata = {
    title: "Kniha Tvorím, teda som | LUDUS Academy",
    description: "Praktická príručka pre pedagógov a rodičov. 200 hier a cvičení na rozvoj kreatívneho potenciálu. Stiahnite si náš e-book zdarma.",
};

export default function KnihaPage() {
    return (
        <div className="pb-0">
            {/* Hero */}
            <section
                className="h-[40vh] max-md:h-[20vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20 max-md:mt-13 "
                style={{ backgroundImage: "url('/images/kniha/kniha-hero.webp')" }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <h1
                    className="relative text-white text-[6rem] z-10 text-center max-md:text-[3rem]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Kniha a E-book
                </h1>
            </section>

            <KnihaClient />
        </div>
    );
}

