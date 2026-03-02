import { Metadata } from 'next';
import PedagogoviaClient from './PedagogoviaClient';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
    title: "Naši pedagógovia | Škola LUDUS",
    description: "Spoznajte náš tím profesionálnych pedagógov a hercov. V SZUŠ LUDUS učíme deti a mladých divadelnému umeniu s radosťou a odborným prístupom.",
};

export default function SkolaLudusPedagogoviaPage() {
    return (
        <>
            {/* Hero */}
            <section
                className="h-[40vh] max-md:h-[20vh] bg-cover flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20 max-md:mt-13 "
                style={{
                    backgroundImage: "url('/images/skola/IMG_2915.webp')",
                    backgroundPosition: 'center 15%'
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <h1
                    className="relative text-white text-[6rem] z-10 text-center max-md:text-[3rem]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Pedagógovia
                </h1>
            </section>

            <div className="w-[95%] mx-auto py-16">
                <div className="flex gap-16 items-start max-xl:flex-col max-md:gap-4">
                    {/* Main Content Column */}
                    <main className="flex-1 min-w-0">
                        <PedagogoviaClient />
                    </main>
                    {/* Sidebar Column */}
                    <Sidebar category="skola-ludus" />
                </div>
            </div>
        </>
    );
}
