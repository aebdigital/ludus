'use client';

import Link from 'next/link';
import Button from '@/components/Button';
import MapSection from '@/components/MapSection';
import { useState } from 'react';
import Image from 'next/image';


export default function SkolaKontaktPage() {
    return (
        <>
            <section
                className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
                style={{ backgroundImage: "url('/images/skola/IMG_2993.webp')" }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <h1
                    className="relative text-white text-[6rem] z-10 text-center max-md:text-[3rem]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Kontakt
                </h1>
            </section>

            <div className="w-[95%] mx-auto py-12">
                <div className="flex gap-16 items-start max-xl:flex-col -mt-32 relative z-10">
                    <main className="flex-1 min-w-0 w-full">


                        <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1">
                            {/* Left: Contact Form */}
                            <div className="bg-white p-8 rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.05)] border border-gray-100 h-fit">
                                <h2
                                    className="text-[2rem] mb-6"
                                    style={{ fontFamily: 'var(--font-heading)' }}
                                >
                                    Napíšte nám
                                </h2>
                                <ContactForm />
                            </div>

                            {/* Right: Contact Info */}
                            <div className="bg-white p-8 rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.05)] border border-gray-100 h-fit">
                                <h2 className="text-[2rem] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                                    Kontaktné údaje
                                </h2>
                                <div className="grid grid-cols-2 gap-8 max-sm:grid-cols-1">
                                    {/* Sub-Left: Address & Billing */}
                                    <div className="space-y-8">
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">Adresa</h3>
                                            <p className="text-[1.1rem] text-[#000]">
                                                Palackého 22<br />
                                                811 02, Bratislava
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">Fakturačné údaje</h3>
                                            <p className="text-[1.1rem] text-[#000]">
                                                <strong>IČO:</strong> 30849331<br />
                                                <strong>DIČ:</strong> 2021878100
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">Zriaďovateľ</h3>
                                            <p className="text-[1.1rem] text-[#000]">
                                                Mgr.art. Peter Kuba<br />
                                                0905 218 088
                                            </p>
                                        </div>
                                    </div>

                                    {/* Sub-Right: Staff */}
                                    <div className="space-y-8">
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">Riaditeľka</h3>
                                            <p className="text-[1.1rem] text-[#000]">
                                                Mgr. art Katarína Baranová ArtD.<br />
                                                <a href="tel:0905543282" className="hover:text-[#ffd37c]">0905 543 282</a><br />
                                                <a href="mailto:info@skolaludus.sk" className="hover:text-[#ffd37c]">info@skolaludus.sk</a>
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">Zástupca riaditeľa</h3>
                                            <p className="text-[1.1rem] text-[#000]">
                                                Jakub Ružička<br />
                                                <a href="tel:0905126296" className="hover:text-[#ffd37c]">0905 126 296</a><br />
                                                <a href="mailto:jakubludus@gmail.com" className="hover:text-[#ffd37c]">jakubludus@gmail.com</a>
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">Organizačný manager</h3>
                                            <p className="text-[1.1rem] text-[#000]">
                                                Mgr.art Michal Rovňák<br />
                                                <a href="tel:0905462342" className="hover:text-[#ffd37c]">0905 462 342</a><br />
                                                <a href="mailto:rovnakludus@gmail.com" className="hover:text-[#ffd37c]">rovnakludus@gmail.com</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 grid grid-cols-2 gap-4">
                                    <Image
                                        src="/fotky priestorov/vchod do školy/vchod_1.webp"
                                        alt="Vchod do školy 1"
                                        width={400}
                                        height={300}
                                        className="w-full h-[200px] object-cover rounded-xl shadow-sm"
                                    />
                                    <Image
                                        src="/fotky priestorov/vchod do školy/vchod_2.webp"
                                        alt="Vchod do školy 2"
                                        width={400}
                                        height={300}
                                        className="w-full h-[200px] object-cover rounded-xl shadow-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <MapSection />
            </div>
        </>
    );
}


function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'success' | 'error' | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            subject: formData.get('subject') || 'skola-ludus', // Default to school if not selected or if fixed
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div className="form-group">
                <label htmlFor="name" className="block text-sm font-bold mb-1">Meno a priezvisko</label>
                <input type="text" id="name" name="name" required disabled={loading} className="w-full p-3 rounded border border-gray-200 focus:border-[#ffd37c] outline-none transition-colors" />
            </div>
            <div className="form-group">
                <label htmlFor="email" className="block text-sm font-bold mb-1">Email</label>
                <input type="email" id="email" name="email" required disabled={loading} className="w-full p-3 rounded border border-gray-200 focus:border-[#ffd37c] outline-none transition-colors" />
            </div>
            <div className="form-group">
                <label htmlFor="phone" className="block text-sm font-bold mb-1">Telefón</label>
                <input type="tel" id="phone" name="phone" disabled={loading} className="w-full p-3 rounded border border-gray-200 focus:border-[#ffd37c] outline-none transition-colors" />
            </div>
            <div className="form-group">
                <label htmlFor="subject" className="block text-sm font-bold mb-1">Predmet</label>
                <select id="subject" name="subject" disabled={loading} className="w-full p-3 rounded border border-gray-200 focus:border-[#ffd37c] outline-none transition-colors">
                    <option value="skola-ludus">Prihláška do SZUŠ</option>
                    <option value="skola-ludus">Iné</option>
                </select>
                {/* Note: In the design, 'Ine' usually means generic. If 'skola-ludus' is the recipient for 'Iné' in this context, the value is fine. 
                    However, earlier 'Iné' was just 'ine' which might not route correctly if not handled in API. 
                    The API handles 'skola-ludus', 'ludus-academy', etc. 
                    If the user wants 'Iné' to go to school, value='skola-ludus' works. */}
            </div>
            <div className="form-group">
                <label htmlFor="message" className="block text-sm font-bold mb-1">Správa</label>
                <textarea id="message" name="message" rows={5} required disabled={loading} className="w-full p-3 rounded border border-gray-200 focus:border-[#ffd37c] outline-none transition-colors" />
            </div>

            {status === 'success' && (
                <div className="bg-green-100 text-green-700 p-3 rounded mb-2">
                    Správa bola úspešne odoslaná.
                </div>
            )}

            {status === 'error' && (
                <div className="bg-red-100 text-red-700 p-3 rounded mb-2">
                    Chyba pri odosielaní.
                </div>
            )}

            <Button type="submit" className="w-full justify-center" disabled={loading}>
                {loading ? 'Odosielam...' : 'Odoslať'}
            </Button>
        </form>
    );
}
