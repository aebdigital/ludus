import { Metadata } from 'next';
import PriestorySkolyClient from './PriestorySkolyClient';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
    title: "Priestory školy | Škola LUDUS",
    description: "Pozrite si priestory našej umeleckej školy na Palackého 22 v Bratislave. Moderné triedy a zázemie pre výučbu divadelného umenia.",
};

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
                        <PriestorySkolyClient />
                    </main>
                    <Sidebar category="skola-ludus" />
                </div>
            </div>
        </div>
    );
}

