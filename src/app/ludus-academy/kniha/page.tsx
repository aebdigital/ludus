import Image from 'next/image';
import Button from '@/components/Button';

export default function KnihaPage() {
    return (
        <div className="pb-20">
            {/* Hero */}
            <section
                className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
                style={{ backgroundImage: "url('/images/kniha/kniha-hero.jpeg')" }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <h1
                    className="relative text-white text-[6rem] z-10 text-center max-md:text-[3rem]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Kniha
                </h1>
            </section>

            <main className="w-[95%] mx-auto py-16">

                {/* Book Intro */}
                <div className="grid grid-cols-[350px_1fr] gap-16 items-start mb-24 max-lg:grid-cols-1">
                    <div className="relative">
                        <Image
                            src="/images/kniha/kniha-main left.jpeg"
                            alt="Tvorím, teda som - Kniha"
                            width={500}
                            height={700}
                            className="w-full h-auto rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
                        />
                    </div>
                    <div className="flex flex-col justify-center h-full">
                        <h2 className="text-[2.5rem] mb-2 font-light text-black" style={{ fontFamily: 'var(--font-body)' }}>
                            Katarína Baranová
                        </h2>
                        <h2 className="text-[4rem] font-bold leading-tight mb-4 text-black" style={{ fontFamily: 'var(--font-body)', fontWeight: 900 }}>
                            Tvorím, teda som
                        </h2>
                        <p className="text-[1.5rem] mb-8 text-[#666] italic font-medium">
                            200 hier a cvičení na rozvoj kreatívneho potenciálu
                        </p>

                        <p className="text-[1.15rem] leading-relaxed mb-6 text-[#444]">
                            Kniha <strong>Tvorím, teda som</strong> je praktickou príručkou pre pedagógov a lektorov, ktorých zaujímajú kreatívne metódy učenia.
                        </p>
                        <p className="text-[1.15rem] leading-relaxed mb-6 text-[#444]">
                            Kniha je zároveň určená aj pre rodičov, ktorí chcú so svojimi deťmi a tínedžermi kreatívne využiť spoločne strávený čas.
                        </p>
                        <p className="text-[1.15rem] leading-relaxed mb-8 text-[#444]">
                            Inšpiráciu tu nájdu aj všetci ktorí, radi skúšajú nové a nevyšliapané cesty, spoznávajú radi nové kreatívne hry a chcú sa učiť prostredníctvom zážitku.
                        </p>

                        <div className="mt-4">
                            <Button href="/kontakt" className="bg-[#ffd37c] text-black px-10 py-4 text-xl">
                                Objednať knihu
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Why the book was created */}
                <div className="grid grid-cols-2 gap-16 items-center mb-24 max-lg:grid-cols-1">
                    <div>
                        <h3 className="text-[2.5rem] mb-6 text-black border-b-4 border-[#ffd37c] pb-2 inline-block" style={{ fontFamily: 'var(--font-heading)' }}>
                            Prečo vznikla kniha?
                        </h3>
                        <p className="text-[1.1rem] leading-relaxed mb-6 text-[#444]">
                            Volám sa Katarína Baranová a som zakladateľka Ludus Academy a som autorkou knihy Tvorím, teda som. Počas svojej umeleckej a pedagogickej praxe som sa stretla s rôznymi cieľovými a vekovými skupinami ľudí. Učila som tvorivú dramatiku v MŠ, na ZŠ, viedla som skupiny učiteľov, umelcov a aj ľudí z rôznych pracovných oblastí a utvrdila som sa v tom, že kreativita, hra a radosť z tvorby je všadeprítomná. Je jedno či ste dieťa alebo dospelý. Preto vznikla kniha Tvorím, teda som.
                        </p>
                        <p className="text-[1.1rem] leading-relaxed mb-6 text-[#444]">
                            Prostredníctvom knižky vám chcem dať inšpiráciu a tipy, ktoré som za roky plné skúseností získala, praxou overila a rada sa s nimi podelím. Rozdelila som ich do jednotlivých oblastí, ktoré považujem za kľúčové pri trénovaní kreatívneho myslenia.
                        </p>
                        <p className="text-[1.1rem] leading-relaxed mb-6 text-[#444]">
                            Chcem vám na jednom mieste ponúknuť 200 praktických hier a cvičení, ktoré považujem za kreatívne, podnetné, zábavné, efektívne a dôležité pri formovaní kreativity a predstavivosti.
                        </p>
                        <p className="text-[1.1rem] leading-relaxed italic text-[#666] border-l-4 border-[#ffd37c] pl-6 py-2 bg-gray-50 rounded-r-lg">
                            "Milujem rôznorodosť, slobodu, herectvo, humor, tvorivosť a vzdelávanie sa v nových oblastiach, ktoré ma bavia. Rada vymýšľam nové veci. Práve preto vznikla aj táto kniha a ja sa v nej rada s vami podelím o skúsenosti a praktické tipy, ktoré mi pomáhajú v tom, aby som stále bola v takzvanom KREATÍVNOM FLOW."
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <div className="relative w-[70%] aspect-[4/3]">
                            <Image
                                src="/images/1.png"
                                alt="Katarína Baranová pri práci"
                                fill
                                className="object-cover rounded-xl shadow-lg"
                            />
                        </div>
                        <div className="relative w-[70%] aspect-[4/3]">
                            <Image
                                src="/images/2.png"
                                alt="Workshop s knihou"
                                fill
                                className="object-cover rounded-xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* Who am I */}
                <div className="grid grid-cols-[400px_1fr] gap-16 items-center mb-24 max-lg:grid-cols-1">
                    <div className="relative aspect-[3/4] max-lg:order-2">
                        <Image
                            src="/images/kniha/kto-som-section.jpeg"
                            alt="Katarína Baranová"
                            fill
                            className="object-cover rounded-xl shadow-lg"
                        />
                    </div>
                    <div className="max-lg:order-1">
                        <h3 className="text-[2.5rem] mb-6 text-black border-b-4 border-[#ffd37c] pb-2 inline-block" style={{ fontFamily: 'var(--font-heading)' }}>
                            KTO SOM?
                        </h3>
                        <p className="text-[1.1rem] leading-relaxed mb-6 text-[#444]">
                            Volám sa Katarína Baranová a som herečka, pedagogička tvorivej dramatiky s 26 ročnou praxou. Zároveň som riaditeľkou SZUŠ LUDUS.
                        </p>
                        <p className="text-[1.1rem] leading-relaxed text-[#444]">
                            Pôsobím ako zdravotný klaun v OZ Červený nos Clowndoctors a posledné roky vediem rôzne umelecké a klaunské workshopy a kurzy. Učila som didaktiku tvorivej dramatiky na VŠMU a v súčasnosti ju učím na SŠ pedagogickej.
                        </p>
                    </div>
                </div>

                {/* Quote Box */}
                <div className="bg-[#ffd37c] p-12 rounded-xl text-center mb-24 shadow-lg transform rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
                    <p className="text-[1.5rem] font-bold uppercase tracking-wide text-black leading-relaxed" style={{ fontFamily: 'var(--font-heading)' }}>
                        POVEDZ MI TO A JA TO ZABUDNEM. UKÁŽ MI TO A JA SI TO ZAPAMÄTÁM. DOVOĽ MI TO UROBIŤ A JA TO POCHOPÍM NA ZVYŠOK SVOJHO ŽIVOTA.
                    </p>
                </div>

                {/* Gallery */}
                <div className="text-center mb-16 mt-20">
                    <p className="text-[1.2rem] max-w-3xl mx-auto mb-4 text-[#444]">
                        Kreatívni vieme byť takmer pri každej činnosti, ktorú každodenne robíme. Je to schopnosť, ktorú vieme rozvíjať.
                    </p>
                    <h3 className="text-[3.5rem] text-black" style={{ fontFamily: 'var(--font-heading)' }}>
                        Ukážky z knihy
                    </h3>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-24 max-md:grid-cols-1">
                    {[1, 2, 3].map((num) => (
                        <div key={num} className="relative aspect-[3/4] group overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
                            <Image
                                src={`/images/kniha/ukazka${num}.png`}
                                alt={`Ukážka z knihy ${num}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>

                {/* Video */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/aX3M2ALTmxY"
                        title="Kniha TVORÍM, TEDA SOM"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>

            </main>
        </div>
    );
}
