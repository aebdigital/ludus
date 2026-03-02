import { Metadata } from 'next';
import AcademyKontaktClient from './AcademyKontaktClient';
import MapSection from '@/components/MapSection';

export const metadata: Metadata = {
    title: "Kontakt | LUDUS Academy",
    description: "Máte záujem o herecké kurzy, improvizáciu alebo firemné workshopy? Kontaktujte LUDUS Academy v Bratislave.",
};

export default function AcademyKontaktPage() {
    return (
        <>
            <section
                className="h-[40vh] max-md:h-[20vh] bg-[#f47f44] bg-contain bg-center bg-no-repeat flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20 max-md:mt-13 "
                style={{ backgroundImage: "url('/images/loga-4/logo-main.webp')" }}
            >
                <h1
                    className="relative text-white text-[6rem] z-10 text-center max-md:text-[3rem]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Kontakt
                </h1>
            </section>

            <div className="w-[95%] mx-auto py-12">
                <div className="flex gap-16 items-start max-xl:flex-col -mt-32 max-md:-mt-12 relative z-10">
                    <main className="flex-1 min-w-0 w-full">
                        <AcademyKontaktClient />
                    </main>
                </div>
                <MapSection />
            </div>
        </>
    );
}

