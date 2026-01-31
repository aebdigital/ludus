import AcademySubpageSidebar from '@/components/AcademySubpageSidebar';
import Button from '@/components/Button';

export default function WorkshopUciteliaPage() {
    return (
        <div className="bg-white">
            <section
                className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
                style={{ backgroundImage: "url('/images/academy/IMG_9026.jpeg')" }}
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
                        <div className="max-w-3xl">
                            <h2 className="text-[3rem] mb-2 text-black leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                                WORKSHOP pre učiteľov AJ: RADOSŤ SA UČIŤ
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
                                    <p>
                                        Vypíšte kontaktný formulár nižšie a my vám dáme info hneď, ako bude workshop pripravený.
                                    </p>
                                </div>

                                <div className="mt-12 pt-12 border-t border-gray-200">
                                    <Button href="/ludus-academy/kontakt">Mám záujem o viac info</Button>
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
