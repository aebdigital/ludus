import { Metadata } from 'next';
import TvorivePisanieClient from './TvorivePisanieClient';
import AcademySubpageSidebar from '@/components/AcademySubpageSidebar';

export const metadata: Metadata = {
    title: "Kurz tvorivého písania Bratislava",
    description: "Naučte sa písať pútavé texty, poviedky a scenáre. Kurz tvorivého písania pod vedením profesionálnych lektorov v LUDUS Academy.",
};

export default function TvorivePisaniePage() {
    return (
        <div className="bg-white">
            <section
                className="h-[40vh] max-md:h-[20vh] bg-cover flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20 max-md:mt-13 "
                style={{
                    backgroundImage: "url('/images/academy/IMG_4766.webp')",
                    backgroundPosition: 'center 30%'
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <h1
                    className="relative text-white text-[6rem] z-10 text-center max-md:text-[2.2rem]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Kurz tvorivého písania
                </h1>
            </section>

            <div className="w-[95%] mx-auto py-16 max-md:pt-5">
                <div className="flex gap-16 items-start max-xl:flex-col max-md:gap-4">
                    <AcademySubpageSidebar />
                    <TvorivePisanieClient />
                </div>
            </div>
        </div>
    );
}

