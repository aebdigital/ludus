import AcademySubpageSidebar from '@/components/AcademySubpageSidebar';
import Button from '@/components/Button';
import Image from 'next/image';

export default async function WorkshopUciteliaPage() {

    return (
        <div className="bg-white">
            <section
                className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
                style={{ backgroundImage: "url('/images/academy/IMG_9026.webp')" }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <h1
                    className="relative text-white text-[5.5rem] z-10 text-center max-md:text-[2.2rem]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Workshop pre učiteľov
                </h1>
            </section>

            <section className="w-[95%] mx-auto mt-12 mb-[-2rem]">
                <Image
                    src="/GRAFIKA NA WEB KURZOV/workshop-pre-ucitelov.jpg"
                    alt="Workshop pre učiteľov program"
                    width={1400}
                    height={600}
                    className="w-full h-auto rounded-xl shadow-lg border border-gray-100"
                />
            </section>

            <div className="w-[95%] mx-auto py-16">
                <div className="flex gap-16 items-start max-xl:flex-col">
                    <AcademySubpageSidebar />

                    <main className="flex-1 min-w-0">
                        <div className="mb-24">
                            <h2 className="text-[3rem] mb-2 text-black leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                                RADOSŤ <span className="text-[#f47f44]">sa</span> UČIŤ zážitkom
                            </h2>
                            <div className="text-[#f47f44] font-bold text-[1.2rem] mb-12 uppercase tracking-widest leading-tight">
                                PRIPRAVUJEME PRE VÁS NOVÉ OBSAHY
                            </div>

                            <div className="bg-black text-white p-20 rounded-3xl text-center shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-64 h-64 bg-[#f47f44]/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                                <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#f47f44]/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

                                <div className="relative z-10">
                                    <div className="text-[#f47f44] text-[4rem] font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                                        PRIPRAVUJEME
                                    </div>
                                    <p className="text-[1.5rem] text-gray-300 max-w-2xl mx-auto leading-relaxed italic">
                                        "Tieto workshopy pre pedagógov a lektorov práve cizelujeme do finálnej podoby. Čoskoro tu nájdete kompletné info o termínoch, obsahu a lektoroch."
                                    </p>

                                    <div className="mt-12 flex flex-col items-center gap-6">
                                        <div className="w-16 h-1 bg-[#f47f44]"></div>
                                        <p className="text-gray-400 uppercase tracking-[0.3em] text-sm">Ludus Academy</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24">
                                <div className="p-10 bg-gray-50 rounded-2xl border border-gray-100 opacity-60">
                                    <h3 className="text-[1.5rem] mb-4 text-black font-bold uppercase" style={{ fontFamily: 'var(--font-heading)' }}>Na čo sa môžete tešiť?</h3>
                                    <ul className="space-y-4">
                                        <li className="flex gap-3"><span className="text-[#f47f44] font-bold">•</span> Kreatívne metódy učenia</li>
                                        <li className="flex gap-3"><span className="text-[#f47f44] font-bold">•</span> Práca s hlasom a prejavom pedagóga</li>
                                        <li className="flex gap-3"><span className="text-[#f47f44] font-bold">•</span> Zážitková pedagogika v praxi</li>
                                        <li className="flex gap-3"><span className="text-[#f47f44] font-bold">•</span> Ako zaujať a udržať pozornosť</li>
                                    </ul>
                                </div>
                                <div className="p-10 bg-white rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center text-center">
                                    <p className="text-gray-400 italic">
                                        Obsah priebežne dopĺňame. <br />
                                        Sledujte nás pre aktualizácie.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
