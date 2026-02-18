import AcademySubpageSidebar from '@/components/AcademySubpageSidebar';
import Button from '@/components/Button';

export default function WorkshopUciteliaPage() {
    return (
        <div className="bg-white">
            <section
                className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
                style={{ backgroundImage: "url('/images/academy/IMG_9026.webp')" }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <h1
                    className="relative text-white text-[5rem] z-10 text-center max-md:text-[3rem] px-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Workshop pre učiteľov
                </h1>
            </section>

            <div className="w-[95%] mx-auto py-16">
                <div className="flex gap-16 items-start max-xl:flex-col">
                    <AcademySubpageSidebar />

                    <main className="flex-1 min-w-0">
                        <div>
                            <h2 className="text-[3rem] mb-2 text-black leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                                RADOSŤ <span className="text-[#ffd37c]">SA</span> UČIŤ
                            </h2>
                            <div className="text-[#ffd37c] font-bold text-[1.2rem] mb-12 uppercase tracking-widest leading-tight">
                                HROU KU KREATÍVNEJ VÝUČBE
                            </div>

                            <div className="bg-gray-50 p-12 rounded-3xl border border-gray-100 mb-12 relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-black text-white px-6 py-2 font-bold uppercase tracking-widest text-xs">
                                    PRIPRAVUJEME
                                </div>

                                <div className="text-[1.2rem] text-[#000] space-y-8 leading-relaxed">
                                    <p className="font-medium text-black text-[1.4rem]">
                                        Tento workshop pre vás práve pripravujeme.
                                    </p>
                                    <p>
                                        Na medzinárodnej úrovni a vďaka ERASMU+, uvedieme začiatkom roka 2023 zaujímavú kreatívnu metódu <strong className="text-black">IMPROLINGUA</strong>, ktorá učiteľom Anglického jazyka prinesie množstvo inovatívnych hier k výučbe.
                                    </p>
                                    <p className="italic border-l-4 border-[#ffd37c] pl-6 py-2 text-black font-bold">
                                        Prostredníctvom hry - k lepšej konverzácii.
                                    </p>
                                </div>

                                <div className="mt-12 bg-black text-white p-12 rounded-2xl text-center shadow-2xl relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#ffd37c]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                    <h3 className="text-[2.2rem] mb-6 leading-tight relative z-10">
                                        Máte záujem?
                                    </h3>
                                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10 text-[1.1rem]">
                                        Kontaktujte nás emailom alebo telefonicky.
                                    </p>
                                    <div className="flex gap-4 justify-center relative z-10 max-sm:flex-col max-sm:items-center">
                                        <Button href="mailto:info@ludusacademy.sk" className="px-10 py-4 text-lg">
                                            info@ludusacademy.sk
                                        </Button>
                                        <Button href="tel:+421947942125" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-10 py-4 text-lg">
                                            0947 942 125
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-50 grayscale">
                                <div className="p-8 border border-gray-100 rounded-2xl">
                                    <h4 className="font-bold mb-2">Inovatívne metódy</h4>
                                    <p className="text-sm">Moderné prístupy k výučbe jazykov cez dramatickú výchovu.</p>
                                </div>
                                <div className="p-8 border border-gray-100 rounded-2xl">
                                    <h4 className="font-bold mb-2">Materiály k výučbe</h4>
                                    <p className="text-sm">Súbor hier a aktivít priamo využiteľných na hodinách AJ.</p>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
