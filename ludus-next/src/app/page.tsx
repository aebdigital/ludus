import IntroSection from '@/components/IntroSection';
import Button from '@/components/Button';
import { getHomepageAktuality } from '@/lib/api';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
    const aktuality = await getHomepageAktuality();

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('sk-SK', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    return (
        <>
            {/* Intro Container - 4 Main Sections */}
            <main className="flex h-[50vh] w-[calc(100%-2rem)] mx-auto mt-20 p-4 gap-4 max-md:flex-col max-md:h-auto">
                <IntroSection
                    href="/ludus-academy"
                    title="Ludus Academy"
                    description="Kurzy pre pokrocilych a dospelych"
                    backgroundImage="/images/academy-main-new.jpeg"
                    logo="/images/loga-4/logo-academy.png"
                    logoAlt="Logo Ludus Academy"
                />

                <IntroSection
                    href="/skola-ludus"
                    title="Skola Ludus"
                    description="Objavte svet divadla a umenia"
                    backgroundImage="/images/skola-main.jpeg"
                    logo="/images/loga-4/logo-skola.png"
                    logoAlt="Logo Skola Ludus"
                />

                <IntroSection
                    href="/divadlo-ludus"
                    title="Ludus Divadlo"
                    description="Profesionalna divadelna tvorba"
                    backgroundImage="/images/divadlo-main.jpg"
                    logo="/images/loga-4/logo-divadlo.jpg"
                    logoAlt="Logo Ludus Divadlo"
                />

                <IntroSection
                    href="/ludus-tabor"
                    title="Ludus Tabor"
                    description="Letne divadelne tabory"
                    backgroundImage="/images/tabor/IMG_5438.jpeg"
                    logo="/images/loga-4/logo-tabor.png"
                    logoAlt="Logo Ludus Tabor"
                />
            </main>

            {/* Aktuality & Program Section */}
            <section className="p-4 w-[calc(100%-2rem)] mx-auto">
                <div className="grid grid-cols-[60%_calc(40%-1rem)] gap-4 max-lg:grid-cols-1">
                    {/* Aktuality Box */}
                    <div className="bg-white rounded-xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                        <h2 className="text-[3rem] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                            Aktuality
                        </h2>
                        <div className="flex flex-col gap-6">
                            {aktuality.length > 0 ? (
                                aktuality.map((item, index) => (
                                    <article key={item.id} className={index < aktuality.length - 1 ? "pb-6 border-b border-gray-100" : "pb-0"}>
                                        <span className="text-[0.85rem] text-gray-500 font-semibold uppercase tracking-wider">
                                            {formatDate(item.date)}
                                        </span>
                                        <h3 className="text-[1.4rem] font-bold mt-2 mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                                            {item.title}
                                        </h3>
                                        <p className="text-base text-gray-600 m-0">
                                            {item.description}
                                        </p>
                                    </article>
                                ))
                            ) : (
                                <p className="text-gray-500">Ziadne aktuality</p>
                            )}
                        </div>
                    </div>

                    {/* Program Box */}
                    <div className="bg-black text-white rounded-xl p-8">
                        <h2 className="text-[2.5rem] mb-6 text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                            Divadelny Program
                        </h2>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl transition-colors duration-300 hover:bg-white/15">
                                <span className="text-[1.5rem] font-bold min-w-[70px] text-[#ffd37c]" style={{ fontFamily: 'var(--font-heading)' }}>
                                    20. 12.
                                </span>
                                <div>
                                    <h4 className="text-[1.1rem] text-white m-0 normal-case" style={{ fontFamily: 'var(--font-body)' }}>
                                        Snehova kralovna
                                    </h4>
                                    <p className="text-[0.9rem] mt-1 mb-0 opacity-70 text-white">
                                        18:00 | BlackBox
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl transition-colors duration-300 hover:bg-white/15">
                                <span className="text-[1.5rem] font-bold min-w-[70px] text-[#ffd37c]" style={{ fontFamily: 'var(--font-heading)' }}>
                                    22. 12.
                                </span>
                                <div>
                                    <h4 className="text-[1.1rem] text-white m-0 normal-case" style={{ fontFamily: 'var(--font-body)' }}>
                                        Vianocna rozpravka
                                    </h4>
                                    <p className="text-[0.9rem] mt-1 mb-0 opacity-70 text-white">
                                        17:00 | BlackBox
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl transition-colors duration-300 hover:bg-white/15">
                                <span className="text-[1.5rem] font-bold min-w-[70px] text-[#ffd37c]" style={{ fontFamily: 'var(--font-heading)' }}>
                                    10. 01.
                                </span>
                                <div>
                                    <h4 className="text-[1.1rem] text-white m-0 normal-case" style={{ fontFamily: 'var(--font-body)' }}>
                                        Improvizacny vecer
                                    </h4>
                                    <p className="text-[0.9rem] mt-1 mb-0 opacity-70 text-white">
                                        19:00 | BlackBox
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl transition-colors duration-300 hover:bg-white/15">
                                <span className="text-[1.5rem] font-bold min-w-[70px] text-[#ffd37c]" style={{ fontFamily: 'var(--font-heading)' }}>
                                    15. 01.
                                </span>
                                <div>
                                    <h4 className="text-[1.1rem] text-white m-0 normal-case" style={{ fontFamily: 'var(--font-body)' }}>
                                        Absolventske predstavenie
                                    </h4>
                                    <p className="text-[0.9rem] mt-1 mb-0 opacity-70 text-white">
                                        18:00 | BlackBox
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Button href="/divadlo-ludus" className="mt-6">
                            Cely program
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
