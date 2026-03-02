'use client';

import Image from 'next/image';
import Button from '@/components/Button';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';

export default function LudusTaborClient() {
    return (
        <>
            {/* Hero */}
            <section
                className="h-[40vh] max-md:h-[20vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20 max-md:mt-13 "
                style={{ backgroundImage: "url('/images/tabor-hero.webp')" }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <h1
                    className="relative text-white text-[6rem] z-10 text-center max-md:text-[3rem]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Ludus Tábor
                </h1>
            </section>

            <div className="w-[95%] mx-auto py-8">
                <div className="flex gap-16 items-start max-xl:flex-col mb-16 max-md:gap-4">

                    <main className="flex-1 min-w-0 flex flex-col gap-16">
                        {/* Intro Section - O NÁS */}
                        <div className="grid grid-cols-2 gap-12 items-start max-md:grid-cols-1">
                            <div className="flex flex-col justify-center">
                                <h2 className="leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                                    O tábore
                                </h2>
                                <div className="text-[#000] text-left space-y-4">
                                    <p>
                                        Letné denné divadelné tábory Ludus majú v Bratislave dlhoročnú tradíciu.
                                        Sú určené pre deti a mládež, ktoré chcú zmysluplne stráviť leto,
                                        nájsť si nových priateľov a spoznať čaro divadelného sveta.
                                    </p>
                                    <p>
                                        Pod vedením skúsených pedagógov a hercov si deti vyskúšajú základy
                                        herectva, prácu s hlasom, pohyb a prípravu krátkeho divadelného
                                        predstavenia, ktoré na konci týždňa odohrajú pred svojimi rodičmi a blízkymi.
                                    </p>
                                    <p>
                                        Naším cieľom nie je len výchova budúcich hercov, ale hlavne rozvoj
                                        kreativity, sebavedomia a schopnosti spolupracovať v tíme.
                                    </p>
                                </div>
                            </div>
                            <Image
                                src="/images/tabor-onas.webp"
                                alt="Ludus Tábor"
                                width={600}
                                height={400}
                                className="w-full h-[450px] max-md:h-[225px] object-cover rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.1)] max-md:order-first"
                            />
                        </div>

                        {/* Details Grid */}
                        <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-2xl mb-4 font-bold" style={{ fontFamily: 'var(--font-heading)' }}>Praktické informácie</h3>
                                <ul className="space-y-3 list-none p-0">
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#f47f44] font-bold">•</span>
                                        <span>Pondelok — Piatok, 8:00 — 16:30</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#f47f44] font-bold">•</span>
                                        <span>Vek: 8 — 15 rokov</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#f47f44] font-bold">•</span>
                                        <span>Lokalita: Priestory Ludusu v Bratislave</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#f47f44] font-bold">•</span>
                                        <span>V cene: Strava (desiata, obed, olovrant), pitný režim, pedagogický dozor, materiál na tvorbu</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-[#1a6b8a] p-8 rounded-xl shadow-sm text-white">
                                <h3 className="text-2xl mb-4 font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>Program tábora</h3>
                                <ul className="space-y-3 list-none p-0">
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#f47f44] font-bold">•</span>
                                        <span>Herecké rozcvičky a hry</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#f47f44] font-bold">•</span>
                                        <span>Tvorba postáv a príbehov</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#f47f44] font-bold">•</span>
                                        <span>Výroba rekvisit a scény</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#f47f44] font-bold">•</span>
                                        <span>Záverečné predstavenie pre rodičov</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="bg-[#f47f44] p-12 rounded-2xl text-center text-white">
                            <h2 className="text-3xl mb-4 text-white font-bold" style={{ fontFamily: 'var(--font-heading)' }}>Rezervujte si miesto už teraz</h2>
                            <p className="text-xl mb-8 opacity-90">Kapacita termínov je obmedzená, preto odporúčame zaslať prihlášku čo najskôr.</p>
                            <Button href="/ludus-tabor/kontakt" className="!bg-black !text-white !px-12 !py-4 !text-lg shadow-xl hover:scale-105 transition-transform">
                                Zaslať dopyt na termíny
                            </Button>
                        </div>
                    </main>

                    <Sidebar category="ludus-tabor" />
                </div>
            </div>
        </>
    );
}
