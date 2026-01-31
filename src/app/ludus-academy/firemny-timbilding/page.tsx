import AcademySubpageSidebar from '@/components/AcademySubpageSidebar';

export default function FiremnyTimbildingPage() {
    return (
        <div>
            <section
                className="h-[30vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
                style={{ backgroundImage: "url('/images/academy/IMG_4216.jpeg')" }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <h1
                    className="relative text-white text-[5rem] z-10 text-center max-md:text-[3rem]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Firemný tímbilding
                </h1>
            </section>

            <div className="w-[95%] mx-auto py-16">
                <div className="flex gap-16 items-start max-xl:flex-col">
                    <AcademySubpageSidebar />
                    <main className="flex-1 min-w-0">
                        <h2 className="text-[2.5rem] mb-6 text-black" style={{ fontFamily: 'var(--font-heading)' }}>
                            Radosť <span className="text-[#ffd37c]">spolu</span> pracovať
                        </h2>
                        <div className="text-[1.1rem] text-[#000] space-y-4">
                            <p>
                                Posilnite váš tím prostredníctvom divadelných techník. Naše tímbildingy sú zamerané na spoluprácu,
                                komunikáciu a spoločný zážitok, ktorý prenesie radosť z hry aj do vášho pracovného prostredia.
                            </p>
                            <p>
                                Ponuku na mieru vypracujeme na požiadanie.
                            </p>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
