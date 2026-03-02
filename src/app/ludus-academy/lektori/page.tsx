import { Metadata } from 'next';
import LektoriAcademyClient from './LektoriAcademyClient';

export const metadata: Metadata = {
    title: "Lektori | LUDUS Academy",
    description: "Spoznajte našich lektorov. Profesionálni herci, režiséri a pedagógovia s bohatými skúsenosťami, ktorí vás prevedú svetom dramatického umenia.",
};

export default function LudusAcademyPedagogoviaPage() {
    return (
        <>
            {/* Hero */}
            <section
                className="h-[40vh] max-md:h-[20vh] bg-cover flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20 max-md:mt-13 "
                style={{ backgroundImage: "url('/images/academy/IMG_1128.webp')", backgroundPosition: 'center 30%' }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <h1
                    className="relative text-white text-[6rem] z-10 text-center max-md:text-[3rem] uppercase font-bold"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Lektori
                </h1>
            </section>

            <div className="w-[95%] mx-auto py-16">
                <LektoriAcademyClient />
            </div>
        </>
    );
}

