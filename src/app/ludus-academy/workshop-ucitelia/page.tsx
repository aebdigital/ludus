import { Metadata } from 'next';
import AcademySubpageSidebar from '@/components/AcademySubpageSidebar';
import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Workshop pre učiteľov Bratislava",
    description: "Pripravujeme inovatívne workshopy pre učiteľov. Objavte metódu IMPROLINGUA a inšpirujte sa hravým prístupom k výučbe cudzích jazykov.",
};

export default async function WorkshopUciteliaPage() {

    return (
        <div className="bg-white">
            <section
                className="h-[40vh] max-md:h-[20vh] bg-cover flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20 max-md:mt-13 "
                style={{
                    backgroundImage: "url('/images/academy/IMG_9026.webp')",
                    backgroundPosition: 'center 20%'
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <h1
                    className="relative text-white text-[5.5rem] z-10 text-center max-md:text-[2.2rem]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Workshop pre učiteľov
                </h1>
            </section>



            <div className="w-[95%] mx-auto py-16 max-md:pt-5">
                <div className="flex gap-16 items-start max-xl:flex-col max-md:gap-4">
                    <AcademySubpageSidebar />

                    <main className="flex-1 min-w-0">
                        <div className="mb-24">
                            <h2 className="text-[3rem] mb-2 text-black leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                                RADOSŤ <span className="text-[#e79b2c]">sa</span> UČIŤ
                            </h2>
                            <div className="text-[#e79b2c] font-bold text-[1.2rem] mb-12 uppercase tracking-widest leading-tight">
                                HROU KU KREATÍVNEJ VÝUČBE
                            </div>

                            <div className="flex gap-12 max-lg:flex-col">
                                <div className="flex-[0.7]">
                                    <div className="bg-[#1a6b8a] text-white p-16 max-md:p-5 rounded-3xl text-center shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
                                        <div className="absolute top-0 left-0 w-64 h-64 bg-[#e79b2c]/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#e79b2c]/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

                                        <div className="relative z-10">
                                            <div className="max-w-lg mx-auto space-y-4 text-white text-lg leading-relaxed">
                                                <p>Tento workshop pre vás práve pripravujeme. Na medzinárodnej úrovni a vďaka ERASMU+, uvedieme začiatkom roka 2023 zaujímavú kreatívnu metódu IMPROLINGUA, ktorá učiteľom Anglického jazyka prinesie množstvo inovatívnych hier k výučbe.</p>
                                                <p>Prostredníctvom hry - k lepšej konverzácii.</p>
                                                <p>Kontaktujte nás a my vám dáme info hneď, ako bude workshop pripravený.</p>
                                            </div>

                                            <Link href="/ludus-academy/kontakt" className="inline-block mt-8 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors rounded-lg no-underline">
                                                Kontaktovať
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-[0.3] min-w-[300px]">
                                    <Image
                                        src="/GRAFIKA NA WEB KURZOV/workshop-pre-ucitelov.webp"
                                        alt="Workshop pre učiteľov program"
                                        width={600}
                                        height={800}
                                        className="w-full h-auto rounded-xl shadow-lg border border-gray-100"
                                    />
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
