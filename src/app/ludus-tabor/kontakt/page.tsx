'use client';

import Button from '@/components/Button';
import MapSection from '@/components/MapSection';
import { useState } from 'react';
import Image from 'next/image';

export default function TaborKontaktPage() {
    return (
        <>
            <section
                className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
                style={{ backgroundImage: "url('/images/tabor-main.jpg')" }} // Using tabor image
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
                                <div className="space-y-8">
                                    {/* Contact Person */}
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Kontaktná osoba</h3>
                                        <p className="text-[1.1rem] text-[#000]">
                                            Jakub Ružička
                                        </p>
                                    </div>

                                    {/* Contact Details */}
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Email</h3>
                                        <p className="text-[1.1rem] text-[#000]">
                                            <a href="mailto:ludustabor@gmail.com" className="hover:text-[#ffd37c]">ludustabor@gmail.com</a>
                                        </p>
                                    </div>
                                    <div className="mt-8 grid grid-cols-2 gap-4">
                                        <Image
                                            src="/fotky priestorov/vchod do školy/vchod_1.jpg"
                                            alt="Vchod do školy 1"
                                            width={400}
                                            height={300}
                                            className="w-full h-[200px] object-cover rounded-xl shadow-sm"
                                        />
                                        <Image
                                            src="/fotky priestorov/vchod do školy/vchod_2.jpg"
                                            alt="Vchod do školy 2"
                                            width={400}
                                            height={300}
                                            className="w-full h-[200px] object-cover rounded-xl shadow-sm"
                                        />
                                    </div>
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
            subject: 'ludus-tabor',
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
            <div className="form-group hidden">
                <input type="hidden" name="subject" value="ludus-tabor" />
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
