'use client';

import Link from 'next/link';

export default function OchranaOsobnychUdajovPage() {
    return (
        <>
            <section className="pt-32 pb-16 bg-[#f47f44]">
                <div className="w-[95%] mx-auto text-center">
                    <h1
                        className="text-[3rem] md:text-[5rem] text-black mb-4"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        Ochrana osobných údajov
                    </h1>
                </div>
            </section>

            <section className="py-16 bg-white text-black">
                <div className="w-[95%] md:w-[80%] mx-auto text-lg leading-relaxed space-y-8">

                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                        <p className="font-bold mb-2">Prevádzkovateľ:</p>
                        <p className="text-xl font-semibold mb-4">Občianske združenie LUDUS</p>
                        <p><strong>IČO:</strong> 30849331</p>
                        <p><strong>Adresa:</strong> Palackého 22, 811 02 Bratislava</p>
                        <p><strong>E-mail:</strong> <a href="mailto:info@skolaludus.sk" className="underline hover:text-[#f47f44]">info@skolaludus.sk</a></p>
                        <p><strong>Tel.:</strong> <a href="tel:+421905543282" className="underline hover:text-[#f47f44]">+421 905 543 282</a></p>
                    </div>

                    <div>
                        <p className="mb-4">
                            Tieto Zásady ochrany osobných údajov (ďalej len „Zásady") popisujú, aké osobné údaje spracúvame v súvislosti s používaním našej webovej stránky a kontaktných formulárov.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>I. Kontaktný formulár</h2>
                        <p>
                            Na stránke www.skolaludus.sk prevádzkujeme kontaktný formulár, ktorého účelom je umožniť vám:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Položiť otázku k našim produktom a službám (kurzy, tábory, predstavenia)</li>
                            <li>Požiadať o informácie alebo cenovú ponuku</li>
                        </ul>

                        <p className="font-semibold mt-4">Rozsah spracúvaných údajov:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Meno a priezvisko</li>
                            <li>E-mailová adresa</li>
                            <li>Telefónne číslo</li>
                            <li>Predmet a text správy</li>
                        </ul>

                        <p className="font-semibold mt-4">Účel spracovania:</p>
                        <p>Spracúvame uvedené údaje, aby sme vás mohli kontaktovať a reagovať na váš dopyt.</p>

                        <p className="font-semibold mt-4">Právny základ:</p>
                        <p>Článok 6 ods. 1 písm. b) GDPR – plnenie opatrení pred uzavretím zmluvy na žiadosť dotknutej osoby.</p>

                        <p className="font-semibold mt-4">Doba uchovávania:</p>
                        <p>Osobné údaje budeme uchovávať maximálne 10 rokov od odozvy na váš dopyt, pokiaľ nevznikne ďalší zmluvný vzťah.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>II. Súbory cookies</h2>
                        <p>
                            Na našej webovej stránke používame cookies výlučne na nasledujúce účely:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Nevyhnutné cookies</strong> – zabezpečujú základnú funkčnosť stránky (napr. ukladanie relácie, nastavení prehliadača).</li>
                            <li><strong>Štatistické (analytické) cookies</strong> – pomáhajú nám pochopiť, ako návštevníci stránku používajú (nasadzujeme ich len so súhlasom používateľa).</li>
                        </ul>

                        <p className="font-semibold mt-4">Správa súhlasov:</p>
                        <p>
                            Používateľ môže kedykoľvek odvolať súhlas s využívaním štatistických cookies prostredníctvom{' '}
                            <button onClick={() => window.openCookieSettings?.()} className="underline hover:text-[#f47f44] font-semibold">
                                nastavení cookie lišty
                            </button>
                            {' '}alebo priamo v prehliadači.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>III. Práva dotknutej osoby</h2>
                        <p>Podľa nariadenia GDPR máte nasledujúce práva:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Prístup k osobným údajom, ktoré spracúvame</li>
                            <li>Oprava nepresných alebo neúplných údajov</li>
                            <li>Vymazanie („právo zabudnutia"), ak na spracovanie už nie je právny základ</li>
                            <li>Obmedzenie spracovania</li>
                            <li>Prenosnosť údajov</li>
                            <li>Odvolanie súhlasu – stane sa účinným dňom odvolania</li>
                            <li>Podanie sťažnosti u Úradu na ochranu osobných údajov SR (Hraničná 12, 820 07 Bratislava, <a href="https://www.dataprotection.gov.sk" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#f47f44]">www.dataprotection.gov.sk</a>)</li>
                        </ul>
                        <p className="mt-4">
                            V prípade otázok alebo uplatnenia Vašich práv nás môžete kontaktovať na{' '}
                            <a href="mailto:info@skolaludus.sk" className="underline hover:text-[#f47f44]">info@skolaludus.sk</a>
                            {' '}alebo telefónnom čísle{' '}
                            <a href="tel:+421905543282" className="underline hover:text-[#f47f44]">+421 905 543 282</a>.
                        </p>
                    </div>

                    <div className="pt-8 border-t border-gray-200">
                        <p className="text-black">
                            Tieto Zásady nadobúdajú účinnosť dňom 25. 4. 2025.
                        </p>
                    </div>

                </div>
            </section>
        </>
    );
}
