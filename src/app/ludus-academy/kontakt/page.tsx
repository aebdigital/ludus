'use client';

import Button from '@/components/Button';
import MapSection from '@/components/MapSection';
import { useState } from 'react';
import Image from 'next/image';

export default function AcademyKontaktPage() {
    return (
        <>
            <section
                className="h-[40vh] max-md:h-[20vh] bg-[#f47f44] bg-contain bg-center bg-no-repeat flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20 max-md:mt-14"
                style={{ backgroundImage: "url('/images/loga-4/logo-main.webp')" }}
            >
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
                                    {/* Entity Info */}
                                    <div>
                                        <p className="text-[1.1rem] text-[#000] font-bold mb-2">
                                            Ludus Academy s.r.o
                                        </p>
                                        <p className="text-[1.1rem] text-[#000]">
                                            Šustekova 7, 85104, Bratislava<br />
                                            Slovenský republika<br />
                                        </p>
                                        <div className="mt-4">
                                            <p className="text-[1.1rem] text-[#000]">
                                                <strong>IČO:</strong> 53272226<br />
                                                <strong>DIČ:</strong> 2121358789
                                            </p>
                                        </div>
                                    </div>

                                    {/* Contact Person */}
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Kontaktná osoba</h3>
                                        <p className="text-[1.1rem] text-[#000]">
                                            Mgr. art Jozef Jurčišin Kukľa
                                        </p>
                                    </div>

                                    {/* Contact Details */}
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Kontakt</h3>
                                        <p className="text-[1.1rem] text-[#000]">
                                            <a href="mailto:info@ludusacademy.sk" className="hover:text-[#f47f44] block">info@ludusacademy.sk</a>
                                            <a href="tel:0947942125" className="hover:text-[#f47f44] block">0947 942 125</a>
                                        </p>
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
            course_type: formData.get('course_type'),
            subject: 'ludus-academy',
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
                <input type="text" id="name" name="name" required disabled={loading} className="w-full p-3 rounded border border-gray-200 focus:border-[#f47f44] outline-none transition-colors" />
            </div>
            <div className="form-group">
                <label htmlFor="email" className="block text-sm font-bold mb-1">Email</label>
                <input type="email" id="email" name="email" required disabled={loading} className="w-full p-3 rounded border border-gray-200 focus:border-[#f47f44] outline-none transition-colors" />
            </div>
            <div className="form-group">
                <label htmlFor="phone" className="block text-sm font-bold mb-1">Telefón</label>
                <input type="tel" id="phone" name="phone" disabled={loading} className="w-full p-3 rounded border border-gray-200 focus:border-[#f47f44] outline-none transition-colors" />
            </div>
            <div className="form-group">
                <label htmlFor="course_type" className="block text-sm font-bold mb-1">Mám záujem o</label>
                <select
                    id="course_type"
                    name="course_type"
                    required
                    disabled={loading}
                    className="w-full p-3 rounded border border-gray-200 focus:border-[#f47f44] outline-none transition-colors bg-white"
                >
                    <option value="">Vyberte možnosť...</option>
                    <option value="Herecké kurzy">Herecké kurzy</option>
                    <option value="Improvizačné kurzy">Improvizačné kurzy</option>
                    <option value="Kurz tvorivého písania">Kurz tvorivého písania</option>
                    <option value="Workshopy">Workshopy</option>
                    <option value="Tréningy pre firmy">Tréningy pre firmy</option>
                    <option value="Iné">Iné</option>
                </select>
            </div>
            <div className="form-group hidden">
                <input type="hidden" name="subject" value="ludus-academy" />
            </div>
            <div className="form-group">
                <label htmlFor="message" className="block text-sm font-bold mb-1">Správa</label>
                <textarea id="message" name="message" rows={5} required disabled={loading} className="w-full p-3 rounded border border-gray-200 focus:border-[#f47f44] outline-none transition-colors" />
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

            <Button type="submit" className="w-full justify-center !bg-black !text-white hover:!bg-gray-800" disabled={loading}>
                {loading ? 'Odosielam...' : 'Odoslať'}
            </Button>
        </form>
    );
}
