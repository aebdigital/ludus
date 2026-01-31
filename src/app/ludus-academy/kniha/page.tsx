'use client';

import Image from 'next/image';
import Button from '@/components/Button';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const previewImages = [
    '/images/kniha/ukazka1.png',
    '/images/kniha/ukazka2.png',
    '/images/kniha/ukazka3.png'
];

export default function KnihaPage() {
    const [showDownloadModal, setShowDownloadModal] = useState(false);
    const [previewIndex, setPreviewIndex] = useState<number | null>(null);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowDownloadModal(true);
    };

    const nextSlide = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (previewIndex !== null) {
            setPreviewIndex((previewIndex + 1) % previewImages.length);
        }
    };

    const prevSlide = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (previewIndex !== null) {
            setPreviewIndex((previewIndex - 1 + previewImages.length) % previewImages.length);
        }
    };

    return (
        <div className="pb-0">
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
                    Kniha a E-book
                </h1>
            </section>

            <main className="w-[95%] mx-auto py-16">

                {/* Book Intro */}
                <div className="grid grid-cols-[500px_1fr] gap-20 items-stretch mb-24 max-lg:grid-cols-1">
                    <div className="relative min-h-[700px]">
                        <Image
                            src="/images/kniha/kto-som-section.jpeg"
                            alt="Katarína Baranová"
                            fill
                            className="object-cover rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
                            priority
                        />
                    </div>
                    <div className="flex flex-col justify-center h-full">
                        <h2 className="text-[2.5rem] mb-2 font-light text-black" style={{ fontFamily: 'var(--font-body)' }}>
                            Katarína Baranová
                        </h2>
                        <h2 className="text-[4rem] font-bold leading-tight mb-4 text-black" style={{ fontFamily: 'var(--font-body)', fontWeight: 900 }}>
                            Tvorím, teda som
                        </h2>
                        <p className="text-[1.5rem] mb-8 text-[#000] italic font-medium">
                            200 hier a cvičení na rozvoj kreatívneho potenciálu
                        </p>

                        <p className="text-[1.15rem] leading-relaxed mb-6 text-[#000]">
                            Kniha <strong>Tvorím, teda som</strong> je praktickou príručkou pre pedagógov a lektorov, ktorých zaujímajú kreatívne metódy učenia.
                        </p>
                        <p className="text-[1.15rem] leading-relaxed mb-6 text-[#000]">
                            Kniha je zároveň určená aj pre rodičov, ktorí chcú so svojimi deťmi a tínedžermi kreatívne využiť spoločne strávený čas.
                        </p>
                        <p className="text-[1.15rem] leading-relaxed mb-8 text-[#000]">
                            Inšpiráciu tu nájdu aj všetci ktorí, radi skúšavy nové a nevyšliapané cesty, spoznávajú radi nové kreatívne hry a chcú sa učiť prostredníctvom zážitku.
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
                        <p className="text-[1.1rem] leading-relaxed mb-6 text-[#000]">
                            Volám sa Katarína Baranová a som zakladateľka Ludus Academy a som autorkou knihy Tvorím, teda som. Počas svojej umeleckej a pedagogickej praxe som sa stretla s rôznymi cieľovými a vekovými skupinami ľudí. Učila som tvorivú dramatiku v MŠ, na ZŠ, viedla som skupiny učiteľov, umelcov a aj ľudí z rôznych pracovných oblastí a utvrdila som sa v tom, že kreativita, hra a radosť z tvorby je všadeprítomná. Je jedno či ste dieťa alebo dospelý. Preto vznikla kniha Tvorím, teda som.
                        </p>
                        <p className="text-[1.1rem] leading-relaxed mb-6 text-[#000]">
                            Prostredníctvom knižky vám chcem dať inšpiráciu a tipy, ktoré som za roky plné skúseností získala, praxou overila a rada sa s nimi podelím. Rozdelila som ich do jednotlivých oblastí, ktoré považujem za kľúčové pri trénovaní kreatívneho myslenia.
                        </p>
                        <p className="text-[1.1rem] leading-relaxed mb-6 text-[#000]">
                            Chcem vám na jednom mieste ponúknuť 200 praktických hier a cvičení, ktoré považujem za kreatívne, podnetné, zábavné, efektívne a dôležité pri formovaní kreativity a predstavivosti.
                        </p>
                        <p className="text-[1.1rem] leading-relaxed italic text-[#000] border-l-4 border-[#ffd37c] pl-6 py-2 bg-gray-50 rounded-r-lg">
                            "Milujem rôznorodosť, slobodu, herectvo, humor, tvorivosť a vzdelávanie sa v nových oblastiach, ktoré ma bavia. Rada vymýšľam nové veci. Práve preto vznikla aj táto kniha a ja sa v nej rada s vami podelím o skúsenosti a praktické tipy, ktoré mi pomáhajú v tom, aby som stále bola v takzvanom KREATÍVNOM FLOW."
                        </p>
                    </div>
                    <div className="flex flex-col gap-6 items-center">
                        <div className="relative w-[50%] aspect-square overflow-hidden">
                            <Image
                                src="/images/1.png"
                                alt="Katarína Baranová pri práci"
                                fill
                                className="object-contain p-4"
                            />
                        </div>
                        <div className="relative w-[50%] aspect-square overflow-hidden">
                            <Image
                                src="/images/2.png"
                                alt="Workshop s knihou"
                                fill
                                className="object-contain p-4"
                            />
                        </div>
                    </div>
                </div>

                {/* Who am I with Video */}
                <div className="grid grid-cols-2 gap-16 items-center mb-24 max-lg:grid-cols-1">
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-black max-lg:order-2">
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
                    <div className="max-lg:order-1">
                        <h3 className="text-[2.5rem] mb-6 text-black border-b-4 border-[#ffd37c] pb-2 inline-block" style={{ fontFamily: 'var(--font-heading)' }}>
                            KTO SOM?
                        </h3>
                        <p className="text-[1.1rem] leading-relaxed mb-6 text-[#000]">
                            Volám sa Katarína Baranová a som herečka, pedagogička tvorivej dramatiky s 26 ročnou praxou. Zároveň som riaditeľkou SZUŠ LUDUS.
                        </p>
                        <p className="text-[1.1rem] leading-relaxed text-[#000]">
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
                <div className="bg-gray-50 p-12 rounded-xl text-center mb-8 mt-24 shadow-lg transform rotate-[1deg] hover:rotate-0 transition-transform duration-300 max-w-5xl mx-auto border border-gray-100">
                    <p className="text-[1.5rem] font-bold uppercase tracking-wide max-w-3xl mx-auto text-[#000] leading-relaxed" style={{ fontFamily: 'var(--font-heading)' }}>
                        KREATÍVNI VIEME BYŤ TAKMER PRI KAŽDEJ ČINNOSTI, KTORÚ KAŽDODENNE ROBÍME. JE TO SCHOPNOSŤ, KTORÚ VIEME ROZVÍJAŤ.
                    </p>
                </div>
                <div className="text-center mb-16">
                    <h3 className="text-[3.5rem] text-black" style={{ fontFamily: 'var(--font-heading)' }}>
                        Ukážky z knihy
                    </h3>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-24 max-md:grid-cols-1">
                    {previewImages.map((img, index) => (
                        <div
                            key={index}
                            className="relative aspect-[3/4] group overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                            onClick={() => setPreviewIndex(index)}
                        >
                            <Image
                                src={img}
                                alt={`Ukážka z knihy ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="bg-white/90 text-black px-6 py-2 rounded-full font-bold shadow-lg">Zväčšiť</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* E-BOOK Section - MOVED TO BOTTOM */}
                <div className="bg-[#1a1a1a] text-white p-12 rounded-xl shadow-2xl mb-8 grid grid-cols-[1fr_300px_400px] gap-8 items-center max-xl:grid-cols-1">
                    <div>
                        <p className="text-[#5bc0de] font-bold uppercase tracking-wider mb-2">E-BOOK AUTOR: KATARÍNA BARANOVÁ</p>
                        <h2 className="text-[2.5rem] font-bold mb-6 leading-tight">
                            AKO ROZPRÚDIŤ SVOJE KREATÍVNE "JA"
                        </h2>
                        <ul className="space-y-2 mb-8 text-black">
                            <li className="flex items-center gap-2"><span className="text-white">•</span> 8 TIPOV</li>
                            <li className="flex items-center gap-2"><span className="text-white">•</span> 16 PRAKTICKÝCH CVIČENÍ</li>
                            <li className="flex items-center gap-2"><span className="text-white">•</span> NA KAŽDODENNÝ TRÉNING KREATIVITY</li>
                        </ul>
                        <p className="mb-0">
                            Bežná cena: <span className="line-through text-black">4.80 EUR</span>, <span className="text-[#a3d76e] font-bold">TERAZ: Zdarma</span>
                        </p>
                    </div>

                    <div className="relative aspect-[3/4] max-xl:w-[300px] max-xl:mx-auto">
                        <Image
                            src="/ebook.jpeg"
                            alt="E-book Cover"
                            fill
                            className="object-cover rounded-lg shadow-xl"
                        />
                    </div>

                    <div className="bg-[#2a2a2a] p-8 rounded-xl">
                        <h3 className="text-xl font-bold mb-4">DARČEK PRE VÁS: Stiahnite si E-book ZDARMA</h3>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="ebook-email" className="block text-sm mb-1 text-black">*Váš email:</label>
                                <input
                                    type="email"
                                    id="ebook-email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Napíšte svoj e-mail"
                                    className="w-full p-3 rounded bg-white text-black border-none focus:ring-2 focus:ring-[#6f42c1]"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="ebook-name" className="block text-sm mb-1 text-black">*Meno:</label>
                                <input
                                    type="text"
                                    id="ebook-name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full p-3 rounded bg-white text-black border-none focus:ring-2 focus:ring-[#6f42c1]"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#6f42c1] hover:bg-[#5a32a3] text-white font-bold py-3 px-6 rounded transition-colors uppercase"
                            >
                                CHCEM E-BOOK ZDARMA
                            </button>
                        </form>
                    </div>
                </div>

            </main>

            {/* Book Preview Modal with Slides */}
            <AnimatePresence mode="wait">
                {previewIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[3000] flex items-center justify-center p-4 sm:p-12 bg-black/95 backdrop-blur-sm"
                        onClick={() => setPreviewIndex(null)}
                    >
                        <motion.div
                            key={previewIndex}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="relative w-full max-w-5xl h-[85vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                className="absolute -top-12 right-0 text-white text-4xl font-light hover:text-[#ffd37c] transition-colors p-2 z-[3100]"
                                onClick={() => setPreviewIndex(null)}
                            >
                                ✕
                            </button>

                            {/* Navigation Buttons */}
                            <button
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl transition-all z-[3100] group"
                                onClick={prevSlide}
                            >
                                <span className="group-hover:-translate-x-1 transition-transform">←</span>
                            </button>
                            <button
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl transition-all z-[3100] group"
                                onClick={nextSlide}
                            >
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>

                            <div className="relative w-full h-full">
                                <Image
                                    src={previewImages[previewIndex]}
                                    alt="Ukážka z knihy"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Counter */}
                            <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-white/60 font-medium">
                                {previewIndex + 1} / {previewImages.length}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Success Download Modal */}
            <AnimatePresence>
                {showDownloadModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[3200] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
                        onClick={() => setShowDownloadModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-white w-full max-md:rounded-2xl rounded-3xl p-12 text-center relative shadow-2xl max-w-md"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-6 right-6 text-2xl font-light hover:text-[#6f42c1] transition-colors"
                                onClick={() => setShowDownloadModal(false)}
                            >
                                ✕
                            </button>

                            <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 rounded-full text-4xl">
                                ✓
                            </div>

                            <h2 className="text-3xl font-bold mb-4 text-black" style={{ fontFamily: 'var(--font-heading)' }}>
                                Ďakujeme!
                            </h2>
                            <p className="text-black mb-8 text-lg">
                                Váš E-book je pripravený na stiahnutie. Kliknite na tlačidlo nižšie.
                            </p>

                            <a
                                href="/e-book_Ludus Academy (1).pdf"
                                download
                                className="inline-block w-full bg-[#6f42c1] hover:bg-[#5a32a3] text-white font-bold py-4 px-8 rounded-xl transition-all text-xl shadow-lg hover:shadow-xl hover:-translate-y-1"
                                onClick={() => setShowDownloadModal(false)}
                            >
                                STIAHNUŤ E-BOOK
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
