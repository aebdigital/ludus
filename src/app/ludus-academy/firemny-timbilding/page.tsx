import AcademySubpageSidebar from '@/components/AcademySubpageSidebar';
import Button from '@/components/Button';
import Image from 'next/image';

export default function FiremnyTimbildingPage() {
    return (
        <div className="bg-white">
            <section
                className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
                style={{ backgroundImage: "url('/images/academy/IMG_4216.webp')" }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <h1
                    className="relative text-white text-[5rem] z-10 text-center max-md:text-[3rem] px-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Kreatívny tímbilding pre firmy
                </h1>
            </section>

            <div className="w-[95%] mx-auto py-16">
                <div className="flex gap-16 items-start max-xl:flex-col">
                    <AcademySubpageSidebar />

                    <main className="flex-1 min-w-0">
                        <div className="mb-24">
                            <h2 className="text-[3rem] mb-8 text-black leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                                Keď sa <span className="text-[#ffd37c]">z tímu</span> stáva celok
                            </h2>

                            <div className="bg-black text-white p-12 rounded-2xl mb-12 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffd37c]/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                                <div className="relative z-10 space-y-6 text-[1.2rem] md:text-[1.4rem] leading-relaxed font-medium italic">
                                    <p>Tímbilding v Ludus Academy je priestor, kde sa na chvíľu stlmí pracovný šum a pozornosť sa presunie na to podstatné. Na ľudí. Na vzťahy. Na spoločný pohyb v jednom príbehu.</p>
                                    <p>V bezpečnom a hravom prostredí lektori LUDUS ACADEMY zapoja účastníkov do kreatívnych úloh, improvizačných hier a tímových výziev, ktoré podporujú spoluprácu, komunikáciu a vzájomné spoznávanie.</p>
                                    <p className="not-italic font-bold text-[#ffd37c]">
                                        Počas 3–4 hodín sa tím ocitne mimo bežných firemných vzorcov. Bez tlaku na výkon, bez hodnotenia. Len hra, tvorenie, objavovanie a spoločný zážitok, ktorý prirodzene prepája ľudí.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                                <div className="bg-white p-10 rounded-2xl border-2 border-gray-50 flex flex-col justify-center">
                                    <h3 className="text-[1.8rem] mb-6 text-black" style={{ fontFamily: 'var(--font-heading)' }}>
                                        Pre koho je určený
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            'pre tímy, ktoré spolu „hrajú“ každý deň, ale chcú si lepšie porozumieť',
                                            'pre kolektívy, ktoré hľadajú zmysluplný a kreatívny formát tímbildingu',
                                            'pre firmy, ktoré chcú posilniť spoluprácu bez tlaku na výkon',
                                            'pre kolektívy, ktoré spolu pracujú, ale málo sa naozaj poznajú',
                                            'pre firmy, ktoré chcú podporiť kreativitu, otvorenú komunikáciu a spoluprácu'
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-3 items-start text-[#000]">
                                                <span className="text-[#ffd37c] mt-1 font-bold">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="mt-6 text-sm italic text-gray-500">
                                        Nie je potrebná žiadna umelecká skúsenosť. Program je prispôsobený tak, aby účastníci mali z neho radosť. Radosť spolu pracovať.
                                    </p>
                                </div>

                                <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 flex flex-col justify-center">
                                    <h3 className="text-[1.8rem] mb-6 text-black font-bold uppercase tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                                        DĹŽKA TÍMBILDINGU
                                    </h3>
                                    <div className="space-y-4 text-[#000] text-[1.1rem]">
                                        <p>
                                            Navrhovaný čas workshopu je minimálne <span className="font-bold underline decoration-[#ffd37c] decoration-2">3-4 hodiny</span>.
                                        </p>
                                        <p>
                                            Podľa dohody vieme prispôsobiť dĺžku potrebám firmy.
                                        </p>
                                        <hr className="border-gray-200 my-4" />
                                        <p className="font-medium">
                                            Cenovú ponuku vám pošleme na základe vašich požiadaviek.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-24">
                                <h3 className="text-[2.2rem] mb-8 text-black" style={{ fontFamily: 'var(--font-heading)' }}>
                                    Ako tímbilding prebieha
                                </h3>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                                    <div className="space-y-6 text-[1.15rem] leading-relaxed text-black">
                                        <p>
                                            Účastníci sa zapájajú do interaktívnych cvičení a hier z oblasti tvorivosti, improvizácie a tímových hier. Vznikajú malé situácie, krátke „scény“, v ktorých sa ukazuje, ako tím komunikuje, spolupracuje a reaguje na zmenu.
                                        </p>
                                        <p className="font-bold border-l-4 border-[#ffd37c] pl-6 py-2 text-[1.3rem]">
                                            Dôležitý nie je výsledok, ale proces. Nie výkon, ale prítomnosť.
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                        <h4 className="text-[1.4rem] mb-6 font-bold text-black uppercase tracking-wider">Aktivity sú navrhnuté tak, aby:</h4>
                                        <ul className="space-y-4">
                                            {[
                                                'podporovali spoluprácu namiesto súťaženia',
                                                'vytvárali priestor na autentickú komunikáciu',
                                                'otvárali nové pohľady na kolegov aj na seba',
                                                'prirodzene zapájali kreativitu a hravosť'
                                            ].map((item, i) => (
                                                <li key={i} className="flex gap-4 items-center">
                                                    <div className="w-2 h-2 rounded-full bg-[#ffd37c]"></div>
                                                    <span className="text-[1.1rem] text-black">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                                <div className="bg-black text-white p-10 rounded-2xl shadow-xl">
                                    <h3 className="text-[1.8rem] mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
                                        Cieľ tímbildingu
                                    </h3>
                                    <ul className="space-y-4">
                                        {[
                                            'vytvoriť priestor na skutočné stretnutie ľudí',
                                            'posilniť dôveru a vnímavosť v tíme',
                                            'podporiť schopnosť počúvať, reagovať a spolu tvoriť',
                                            'prebudiť kreativitu ako prirodzenú súčasť spolupráce'
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-4 items-start">
                                                <span className="text-[#ffd37c] font-bold">✓</span>
                                                <span className="text-gray-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-[#ffd37c] text-black p-10 rounded-2xl shadow-xl">
                                    <h3 className="text-[1.8rem] mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
                                        Čo si účastníci odnesú
                                    </h3>
                                    <ul className="space-y-4">
                                        {[
                                            'lepšie porozumenie kolegom a tímovej dynamike',
                                            'spoločný zážitok, ktorý má presah',
                                            'nové pohľady na kolegov aj na seba',
                                            'väčšiu ľahkosť v komunikácii',
                                            'skúsenosť spolupráce bez hierarchie rolí',
                                            'pocit, že „sme v tom spolu“'
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-4 items-start">
                                                <span className="font-bold">•</span>
                                                <span className="font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-black text-white p-12 rounded-2xl text-center shadow-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#ffd37c]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <h3 className="text-[2.2rem] mb-6 leading-tight relative z-10">
                                    Máte záujem o kreatívny tímbilding?
                                </h3>
                                <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10 text-[1.1rem]">
                                    Napíšte nám čo by ste potrebovali a my vám zašleme cenovú ponuku.
                                </p>
                                <div className="flex gap-4 justify-center relative z-10 max-sm:flex-col max-sm:items-center">
                                    <Button href="/ludus-academy/kontakt" className="px-10 py-4 text-lg">
                                        VYŽIADAŤ CENOVÚ PONUKU
                                    </Button>
                                    <Button href="tel:+421903424174" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-10 py-4 text-lg">
                                        ZAVOLAŤ NÁM
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
