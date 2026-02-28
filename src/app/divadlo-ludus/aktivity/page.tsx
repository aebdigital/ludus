import Image from 'next/image';
import Sidebar from '@/components/Sidebar';

export default function AktivityPage() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section
                className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
                style={{ backgroundImage: "url('/images/divadlo-main.webp')" }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <h1
                    className="relative text-white text-[6rem] z-10 text-center max-md:text-[3rem]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Aktivity
                </h1>
            </section>

            <div className="w-[95%] mx-auto py-16">
                <div className="flex gap-16 items-start max-xl:flex-col">
                    {/* Main Content Column */}
                    <main className="flex-1 min-w-0">
                        <div className="bg-gray-50 rounded-xl p-12 text-center border-2 border-dashed border-gray-200">
                            <h2 className="text-[2rem] text-gray-400 font-bold uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>
                                Obsah sa pripravuje
                            </h2>
                        </div>
                    </main>

                    <Sidebar category="divadlo-ludus" />
                </div>
            </div>
        </div>
    );
}
