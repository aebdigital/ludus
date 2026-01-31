'use client';

import { useState, useEffect, use } from 'react';
import { notFound } from 'next/navigation';
import { getProgramEventBySlug, ProgramEvent } from '@/lib/api';

export default function SchoolReservationPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const [event, setEvent] = useState<ProgramEvent | null>(null);
    const [loading, setLoading] = useState(true);
    const [submitted, setSubmitted] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        school_name: '',
        school_address: '',
        contact_person: '',
        email: '',
        phone: '',
        students_count: 5,
        teachers_count: 1,
        grades: '',
        message: '',
        captcha: '',
        gdpr: false
    });

    useEffect(() => {
        getProgramEventBySlug(slug).then(data => {
            if (!data) notFound();
            setEvent(data);
            setLoading(false);
        });
    }, [slug]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.captcha !== '8') {
            alert('Nesprávna odpoveď na kontrolnú otázku.');
            return;
        }

        if (!formData.gdpr) {
            alert('Musíte súhlasiť so spracovaním osobných údajov.');
            return;
        }

        // Simulate submission
        console.log('Form Submitted', formData);
        setSubmitted(true);
    };

    if (loading) return <div className="min-h-screen pt-40 text-center">Načítavam...</div>;
    if (!event) return null;

    if (submitted) {
        return (
            <div className="min-h-screen pt-40 px-6 max-w-3xl mx-auto text-center">
                <div className="bg-green-50 p-10 rounded-2xl border border-green-200">
                    <h1 className="text-3xl font-bold text-green-800 mb-4 font-heading">Ďakujeme za rezerváciu</h1>
                    <p className="text-lg text-green-700">Vaša objednávka bola úspešne odoslaná. Budeme Vás kontaktovať.</p>
                    <a href="/" className="inline-block mt-8 text-black underline font-medium">Návrat na domovskú stránku</a>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen pt-32 pb-20 px-6 bg-gray-50">
            <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 font-heading text-center" style={{ fontFamily: 'var(--font-heading)' }}>
                    Hromadná objednávka
                </h1>

                <div className="mb-8 p-6 bg-purple-50 rounded-xl border border-purple-100">
                    <h2 className="font-bold text-lg text-purple-900 mb-2">Objednávka predstavenia</h2>
                    <p className="text-2xl font-bold mb-1">{event.title}</p>
                    <div className="flex gap-4 text-sm text-purple-800 opacity-80">
                        <span>{new Date(event.event_date).toLocaleDateString('sk-SK')}</span>
                        <span>{event.time}</span>
                        <span>{event.venue}</span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* School Info */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold mb-1">Názov školy (povinné)</label>
                            <input
                                type="text"
                                name="school_name"
                                required
                                value={formData.school_name}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-1">Adresa školy (povinné)</label>
                            <input
                                type="text"
                                name="school_address"
                                required
                                value={formData.school_address}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold mb-1">Meno a priezvisko kontaktnej osoby (povinné)</label>
                            <input
                                type="text"
                                name="contact_person"
                                required
                                value={formData.contact_person}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-1">Email (povinné)</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-1">Telefónne číslo</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                    </div>

                    {/* Counts */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold mb-1">Počet žiakov (povinné)</label>
                            <input
                                type="number"
                                name="students_count"
                                required
                                min="1"
                                value={formData.students_count}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-1">Počet učiteľov (zdarma)</label>
                            <input
                                type="number"
                                name="teachers_count"
                                min="0"
                                value={formData.teachers_count}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold mb-1">Ročníky, ktoré prídu na predstavenie</label>
                        <input
                            type="text"
                            name="grades"
                            value={formData.grades}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold mb-1">Vaša správa</label>
                        <textarea
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    {/* Captcha */}
                    <div>
                        <label className="block text-sm font-bold mb-1">Kontrolná otázka: 6+2=?</label>
                        <input
                            type="text"
                            name="captcha"
                            required
                            value={formData.captcha}
                            onChange={handleChange}
                            className="w-20 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-center"
                        />
                    </div>

                    {/* GDPR */}
                    <div className="flex items-start gap-3 pt-4 border-t">
                        <input
                            type="checkbox"
                            name="gdpr"
                            id="gdpr"
                            required
                            checked={formData.gdpr}
                            onChange={handleChange}
                            className="mt-1 w-5 h-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                        />
                        <label htmlFor="gdpr" className="text-xs text-black leading-relaxed">
                            <span className="font-bold block mb-1 text-black">Súhlasím so spracovaním osobných údajov</span>
                            V súlade s ustanovením § 13 ods. 1. Písm. a) zákona č.18/2018 Z. z. o ochrane osobných údajov a o zmene a doplnení niektorých zákonov a v súlade s čl. 28 ods. 3 nariadenia Európskeho parlamentu a Rady EÚ č. 2016/679 o ochrane fyzických osôb pri spracúvaní osobných údajov a o voľnom pohybe takýchto údajov, ktorým sa ruší smernica č. 95/46/ES (všeobecné nariadenie o ochrane údajov, ďalej len GDPR) a § 34 ods. 3 zákona č. 3../2017 Z. z. o ochrane osobných údajov si dovoľujeme si informovať dotknuté osoby že ich OÚ sú nami spracovávané v rozsahu a súlade s daným zákonom
                        </label>
                    </div>

                    <div className="pt-6">
                        <button
                            type="submit"
                            className="w-full bg-black text-white font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            Odoslať rezerváciu
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}
