import Button from '@/components/Button';

export default function Divadlo2PercentaPage() {
    return (
        <>
            <section
                className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
                style={{ backgroundImage: "url('/images/divadlo-main.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <h1
                    className="relative text-white text-[6rem] z-10 text-center max-md:text-[3rem]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    2% z dane
                </h1>
            </section>

            <div className="w-[95%] max-w-6xl mx-auto py-16">
                <div className="grid grid-cols-[1.5fr_1fr] gap-12 items-start max-lg:grid-cols-1 mb-16">
                    {/* Left Column: Text */}
                    <div className="bg-white p-12 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 h-full">
                        <h2 className="text-[2.5rem] mb-6 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                            Podporte ochotnícke divadelné umenie - Divadlo Ludus
                        </h2>
                        <div className="text-[#000] space-y-6 text-[1.1rem] leading-relaxed">
                            <p>
                                Venovanie 2% (alebo 3%) z vašej dane z príjmu Občianskemu združeniu Divadlo LUDUS nám umožňuje tvoriť nové predstavenia, podporovať mladých hercov a prinášať kvalitné divadelné zážitky pre širokú verejnosť.
                            </p>
                            <p>
                                Váš príspevok investujeme priamo do umeleckej tvorby - do kostýmov, scény, osvetlenia a do všetkých tých detailov, ktoré robia divadlo magickým miestom. Vďaka vašej podpore môžeme pokračovať v tradícii autorského divadla, ktoré má v Bratislave svoje nezastupiteľné miesto.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Documents */}
                    <div className="bg-white p-12 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100">
                        <h3 className="text-[2rem] text-center mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
                            Dokumenty na stiahnutie
                        </h3>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
                                <div className="flex items-center gap-4">
                                    <span className="text-2xl">📄</span>
                                    <div>
                                        <p className="font-bold text-gray-800 leading-tight">Vyhlásenie o poukázaní sumy</p>
                                        <p className="text-sm text-black">Formát RTF</p>
                                    </div>
                                </div>
                                <Button
                                    href="/vyhlasenie_o_poukazani_sumy-2-z-dane1.rtf"
                                    download
                                    className="py-2 px-6 text-sm w-full text-center"
                                >
                                    Stiahnuť
                                </Button>
                            </div>

                            <div className="flex flex-col gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
                                <div className="flex items-center gap-4">
                                    <span className="text-2xl">📄</span>
                                    <div>
                                        <p className="font-bold text-gray-800 leading-tight">Potvrdenie o zaplatení dane</p>
                                        <p className="text-sm text-black">Formát DOC</p>
                                    </div>
                                </div>
                                <Button
                                    href="/Potvrdenie_o_zaplateni_dane_z_prijmov1.doc"
                                    download
                                    className="py-2 px-6 text-sm w-full text-center"
                                >
                                    Stiahnuť
                                </Button>
                            </div>

                            <div className="flex flex-col gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
                                <div className="flex items-center gap-4">
                                    <span className="text-2xl">📄</span>
                                    <div>
                                        <p className="font-bold text-gray-800 leading-tight">Poučenie na vyplnenie vyhlásenia</p>
                                        <p className="text-sm text-black">Formát DOCX</p>
                                    </div>
                                </div>
                                <Button
                                    href="/Poučenie-na-vyplnenie-vyhlásenia-o-poukázaní-sumy-do-výšky-22.docx"
                                    download
                                    className="py-2 px-6 text-sm w-full text-center"
                                >
                                    Stiahnuť
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-black italic text-[1.1rem]">
                        Ďakujeme za vašu priazeň a podporu divadelnej tvorby!
                    </p>
                </div>
            </div>
        </>
    );
}
