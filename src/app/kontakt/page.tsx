'use client';

import Button from '@/components/Button';
import MapSection from '@/components/MapSection';
import { useState } from 'react';
import Image from 'next/image';

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="h-[40vh] max-md:h-[20vh] bg-[#f47f44] bg-contain bg-center bg-no-repeat flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
        style={{ backgroundImage: "url('/images/loga-4/logo-main.webp')" }}
      >
        <h1
          className="relative text-white text-[6rem] z-10 text-center max-md:text-[3rem]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Kontakt
        </h1>
      </section>

      <div className="w-[95%] mx-auto py-8">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-16 -mt-12 relative z-10">
          {/* Contact Form */}
          <div className="bg-white p-16 shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-xl max-md:p-8 h-fit">
            <h2
              className="text-[2.5rem] mb-8"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Napíšte nám
            </h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="bg-white p-16 shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-xl max-md:p-8">
            <h2
              className="text-[2.5rem] mb-8"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Kontaktné údaje
            </h2>
            <div className="space-y-6">
              {/* Adresa prevádzok */}
              <div>
                <h3
                  className="text-[1.5rem] mb-2 text-black"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Adresa prevádzok
                </h3>
                <p className="text-[1.1rem] text-[#000]">
                  Palackého 22<br />
                  811 02, Bratislava
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1 mt-6">
                {/* SZUŠ LUDUS */}
                <div className="bg-[#1eabb0] rounded-xl p-6 text-black">
                  <h3
                    className="text-[1.5rem] mb-4 text-black"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    SZUŠ LUDUS
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-[1.1rem]">
                        <strong>Zástupca riaditeľa</strong><br />
                        Jakub Ružička<br />
                        <a href="tel:0905126296" className="hover:opacity-70">0905 126 296</a><br />
                        <a href="mailto:jakubludus@gmail.com" className="hover:opacity-70">jakubludus@gmail.com</a>
                      </p>
                    </div>
                    <div>
                      <p className="text-[1.1rem]">
                        <strong>Zriaďovateľ</strong><br />
                        Mgr.art. Peter Kuba<br />
                        <a href="tel:0905218088" className="hover:opacity-70">0905 218 088</a>
                      </p>
                    </div>
                    <div>
                      <p className="text-[1.1rem]">
                        <strong>Riaditeľka</strong><br />
                        Mgr. art Katarína Baranová ArtD.<br />
                        <a href="tel:0905543282" className="hover:opacity-70">0905 543 282</a><br />
                        <a href="mailto:info@skolaludus.sk" className="hover:opacity-70">info@skolaludus.sk</a>
                      </p>
                    </div>
                    <div>
                      <p className="text-[1.1rem]">
                        <strong>Organizačný manager</strong><br />
                        Mgr.art Michal Rovňák<br />
                        <a href="tel:0905462342" className="hover:opacity-70">0905 462 342</a><br />
                        <a href="mailto:rovnakludus@gmail.com" className="hover:opacity-70">rovnakludus@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right column: Divadlo + Academy + Tábor stacked */}
                <div className="flex flex-col gap-4">
                  {/* Divadlo LUDUS */}
                  <div className="bg-[#ffd37c] rounded-xl p-6 text-black">
                    <h3
                      className="text-[1.5rem] mb-4 text-black"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      Divadlo LUDUS
                    </h3>
                    <p className="text-[1.1rem]">
                      <strong>Kontakt:</strong> <a href="mailto:info@divadloludus.sk" className="hover:opacity-70">info@divadloludus.sk</a>
                    </p>
                  </div>

                  {/* LUDUS ACADEMY */}
                  <div className="bg-[#f47f44] rounded-xl p-6 text-black">
                    <h3
                      className="text-[1.5rem] mb-4 text-black"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      LUDUS ACADEMY
                    </h3>
                    <div className="space-y-2">
                      <p className="text-[1.1rem]"><strong>Kontaktná osoba</strong><br />Mgr. art Jozef Jurčišin Kukľa</p>
                      <p className="text-[1.1rem]"><strong>Email:</strong> <a href="mailto:info@ludusacademy.sk" className="hover:opacity-70">info@ludusacademy.sk</a></p>
                      <p className="text-[1.1rem]"><strong>Telefón:</strong> <a href="tel:0947942125" className="hover:opacity-70">0947 942 125</a></p>
                    </div>
                  </div>

                  {/* LUDUS TÁBOR */}
                  <div className="bg-green-600 rounded-xl p-6 text-black">
                    <h3
                      className="text-[1.5rem] mb-4 text-black"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      LUDUS TÁBOR
                    </h3>
                    <div className="space-y-2">
                      <p className="text-[1.1rem]"><strong>Kontaktná osoba</strong><br />Jakub Ružička</p>
                      <p className="text-[1.1rem]"><strong>Email:</strong> <a href="mailto:ludustabor@gmail.com" className="hover:opacity-70">ludustabor@gmail.com</a></p>
                    </div>
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
        </div>

        {/* Map Section */}
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
      subject: formData.get('subject'),
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
        <label htmlFor="name">Meno a priezvisko</label>
        <input type="text" id="name" name="name" required disabled={loading} className="w-full p-2 border rounded" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required disabled={loading} className="w-full p-2 border rounded" />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Telefón</label>
        <input type="tel" id="phone" name="phone" disabled={loading} className="w-full p-2 border rounded" />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Predmet</label>
        <select id="subject" name="subject" disabled={loading} className="w-full p-2 border rounded">
          <option value="">Vyberte predmet</option>
          <option value="skola-ludus">ŠKOLA LUDUS</option>
          <option value="ludus-academy">LUDUS ACADEMY</option>
          <option value="divadlo-ludus">DIVADLO LUDUS</option>
          <option value="ludus-tabor">LUDUS TÁBOR</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Správa</label>
        <textarea id="message" name="message" rows={5} required disabled={loading} className="w-full p-2 border rounded" />
      </div>

      {status === 'success' && (
        <div className="bg-green-100 text-green-700 p-3 rounded mb-2">
          Správa bola úspešne odoslaná. Ďakujeme!
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-2">
          Chyba pri odosielaní. Skúste to prosím neskôr.
        </div>
      )}

      <Button type="submit" disabled={loading} className="!bg-black !text-white hover:!bg-gray-800">
        {loading ? 'Odosielam...' : 'Odoslať'}
      </Button>
    </form>
  );
}
