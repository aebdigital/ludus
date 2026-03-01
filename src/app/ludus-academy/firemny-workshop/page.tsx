import AcademySubpageSidebar from '@/components/AcademySubpageSidebar';
import Button from '@/components/Button';
import Image from 'next/image';

export default async function FiremnyWorkshopPage() {

    return (
        <div className="bg-white">
            <section
                className="h-[40vh] max-md:h-[20vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20 max-md:mt-14"
                style={{ backgroundImage: "url('/images/academy/IMG_3649.webp')" }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <h1
                    className="relative text-white text-[5rem] z-10 text-center max-md:text-[2.5rem]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Firemný workshop
                </h1>
            </section>



            <div className="w-[95%] mx-auto py-16">
                <div className="flex gap-16 items-start max-xl:flex-col">
                    <AcademySubpageSidebar />

                    <main className="flex-1 min-w-0">
                        <div className="mb-24">
                            <h2 className="text-[3rem] mb-8 text-black leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                                Radosť <span className="text-[#f47f44]">spolu</span> objavovať
                            </h2>

                            <div className="flex gap-12 max-lg:flex-col mb-16">
                                <div className="flex-[0.7] text-[1.15rem] text-[#000] space-y-6 leading-relaxed flex flex-col justify-center">
                                    <p className="italic font-light text-black border-l-4 border-[#f47f44] pl-6 py-2">
                                        Každá organizácia komunikuje. Otázka je, či pôsobí presvedčivo, zrozumiteľne a jednotne. Dobré nápady nestačia, ak sa stratia v podaní.
                                    </p>
                                    <p>
                                        Skupinové workshopy v Ludus Academy sú prakticky orientované tréningy pre tímy, ktoré chcú zlepšiť vystupovanie, spoluprácu a komunikáciu navonok aj vo vnútri organizácie. Program pripravujeme na mieru podľa potrieb klienta – od prezentácií a mediálnych výstupov až po moderovanie či vystupovanie pred kamerou.
                                    </p>
                                    <p className="text-[1.3rem] font-bold text-black border-l-4 border-[#f47f44] pl-6 py-2">
                                        Pripravíme váš tím na situácie, v ktorých na slovách záleží. Workshopy môžu mať formu poldňového alebo celodenného tréningu.
                                    </p>
                                </div>
                                <div className="flex-[0.3] min-w-[300px]">
                                    <Image
                                        src="/GRAFIKA NA WEB KURZOV/firemny-workshop.jpg"
                                        alt="Firemný workshop program"
                                        width={600}
                                        height={800}
                                        className="w-full h-auto rounded-xl shadow-lg border border-gray-100"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100">
                                    <h3 className="text-[1.8rem] mb-6 text-black" style={{ fontFamily: 'var(--font-heading)' }}>
                                        Cieľ workshopu
                                    </h3>
                                    <div className="space-y-4 text-[#000]">
                                        <p>
                                            Cieľom je, aby členovia tímu vedeli komunikovať jasne, pokojne a profesionálne aj v situáciách, ktoré prinášajú tlak alebo neistotu.
                                        </p>
                                        <p>
                                            Účastníci si osvoja praktické postupy, ako formulovať myšlienky, reagovať pohotovo, pracovať s hlasom a pôsobiť prirodzene pred publikom, klientom alebo kamerou.
                                        </p>
                                        <p>
                                            Dôležitou súčasťou je aj zosúladenie tímu – aby organizácia navonok nepôsobila ako jednotlivci s rôznymi štýlmi, ale ako jeden čitateľný a dôveryhodný celok.
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-white p-10 rounded-2xl border-2 border-gray-50 flex flex-col justify-center">
                                    <h3 className="text-[1.8rem] mb-6 text-black" style={{ fontFamily: 'var(--font-heading)' }}>
                                        Pre koho je určený
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            'Firmy komunikujúce s klientmi alebo partnermi',
                                            'Tímy pripravujúce prezentácie a verejné vystúpenia',
                                            'Organizácie poskytujúce rozhovory médiám',
                                            'Manažérov a vedúcich pracovníkov',
                                            'Hovorcov, projektových manažérov a obchodníkov',
                                            'Odborníkov, ktorí potrebujú zrozumiteľne vysvetľovať svoju prácu'
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-3 items-start text-[#000]">
                                                <span className="text-[#f47f44] mt-1 font-bold">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="mt-6 text-sm italic text-gray-500">
                                        Nie sú potrebné herecké skúsenosti. Tréning je praktický a prispôsobený konkrétnemu prostrediu organizácie.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#f47f44]/5 border border-[#f47f44]/20 p-10 rounded-2xl mb-16">
                                <h3 className="text-[2rem] mb-6 text-black text-center" style={{ fontFamily: 'var(--font-heading)' }}>
                                    Čo účastníci získajú
                                </h3>
                                <p className="mb-8 text-center text-[1.1rem] text-black">
                                    Počas workshopu účastníci pracujú na reálnych situáciách z ich praxe. Podľa vašich preferencií môžu účastníci získať najmä:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {[
                                        'Istotu pri prezentáciách a poradách',
                                        'Jasnejšie formulovanie myšlienkov',
                                        'Pohotovosť v otázkach a diskusiách',
                                        'Lepšiu spoluprácu pri spoločných vystúpeniach',
                                        'Prirodzený prejav bez strojenosti',
                                        'Prácu s hlasom, tempom a artikuláciou',
                                        'Základy vystupovania pred kamerou a mikrofónom',
                                        'Zvládanie trémy a stresových situácií',
                                        'Schopnosť viesť rozhovor alebo moderovať stretnutie'
                                    ].map((benefit, i) => (
                                        <div key={i} className="flex gap-3 items-center bg-white p-4 rounded-xl shadow-sm border border-[#f47f44]/10">
                                            <span className="w-6 h-6 rounded-full bg-[#f47f44] flex items-center justify-center text-black text-xs font-bold">✓</span>
                                            <span className="text-[1rem] font-medium text-black">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-8 text-center text-gray-600 italic">
                                    Počas workshopu účastníci pracujú na reálnych situáciách z ich praxe.
                                </p>
                            </div>

                            <div className="mb-16">
                                <h3 className="text-[2rem] mb-6 text-black" style={{ fontFamily: 'var(--font-heading)' }}>
                                    Ako workshop prebieha
                                </h3>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                    <div className="text-[1.1rem] text-[#000] space-y-4">
                                        <p>
                                            Workshopy sú interaktívne a založené na praktických cvičeniach, modelových situáciách a okamžitej spätnej väzbe. Účastníci si skúšajú konkrétne situácie, ktoré sa im v práci reálne stávajú – prezentácia projektu, mediálny rozhovor, porada, moderovanie podujatia či reakcia na nečakanú otázku.
                                        </p>
                                        <p>
                                            Program vždy pripravujeme individuálne po dohode s klientom podľa typu organizácie a cieľa, ktorý chce dosiahnuť.
                                        </p>
                                    </div>
                                    <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-2xl">
                                        <Image
                                            src="/images/academy/IMG_4216.webp"
                                            alt="Workshop v Ludus"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-12 mb-16">
                                <div className="max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                                    <video src="/videos/firemny-workshop.mp4" controls className="w-full aspect-video object-cover" />
                                </div>

                                <div className="bg-black text-white p-10 rounded-2xl text-center shadow-2xl relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#f47f44]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                    <h3 className="text-[2.2rem] mb-6 leading-tight relative z-10">
                                        Máte záujem?
                                    </h3>
                                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10 text-[1.1rem]">
                                        Kontaktujte nás emailom alebo telefonicky.
                                    </p>
                                    <div className="flex gap-4 justify-center relative z-10 max-xl:flex-col max-xl:items-center">
                                        <Button
                                            href="mailto:info@ludusacademy.sk"
                                            className="!bg-white !text-black hover:!bg-gray-200 px-8 py-3 text-base w-fit justify-center min-w-[200px]"
                                        >
                                            info@ludusacademy.sk
                                        </Button>
                                        <Button
                                            href="tel:+421947942125"
                                            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 text-base w-fit justify-center min-w-[200px]"
                                        >
                                            0947 942 125
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
