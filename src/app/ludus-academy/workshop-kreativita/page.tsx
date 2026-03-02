import { Metadata } from 'next';
import WorkshopKreativitaClient from './WorkshopKreativitaClient';
import AcademySubpageSidebar from '@/components/AcademySubpageSidebar';

export const metadata: Metadata = {
    title: "Workshop kreatívneho myslenia Bratislava",
    description: "Objavte svoju kreativitu a naučte sa myslieť inak. Praktický workshop zameraný na rozvoj tvorivého potenciálu pod vedením MgA. Baranovej.",
};

export default function WorkshopKreativitaPage() {
    return (
        <div className="bg-white">
            <section
                className="h-[40vh] max-md:h-[20vh] bg-cover flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20 max-md:mt-13 "
                style={{
                    backgroundImage: "url('/images/academy/IMG_9087.webp')",
                    backgroundPosition: 'center 30%'
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <h1
                    className="relative text-white text-[5.5rem] z-10 text-center max-md:text-[2.2rem] px-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Workshop kreatívneho myslenia
                </h1>
            </section>

            <div className="w-[95%] mx-auto py-16 max-md:pt-5">
                <div className="flex gap-16 items-start max-xl:flex-col max-md:gap-4">
                    <AcademySubpageSidebar />
                    <WorkshopKreativitaClient />
                </div>
            </div>
        </div>
    );
}

