'use client';

import Button from '@/components/Button';

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="h-[50vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
        style={{ backgroundImage: "url('/images/logo.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
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
          <div className="bg-white p-16 shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-xl max-md:p-8">
            <h2
              className="text-[2.5rem] mb-8"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Napíšte nám
            </h2>
            <form className="flex flex-col gap-6">
              <div className="form-group">
                <label htmlFor="name">Meno a priezvisko</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Telefón</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Predmet</label>
                <select id="subject" name="subject">
                  <option value="">Vyberte predmet</option>
                  <option value="kurzy">Kurzy a workshopy</option>
                  <option value="skola">Prihláška do SZUŠ</option>
                  <option value="divadlo">Rezervácia vstupeniek</option>
                  <option value="tabor">Letný tábor</option>
                  <option value="ine">Iné</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Správa</label>
                <textarea id="message" name="message" rows={5} required />
              </div>
              <Button type="submit">
                Odoslať
              </Button>
            </form>
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
              <div>
                <h3
                  className="text-[1.5rem] mb-2 text-black"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Adresa
                </h3>
                <p className="text-[1.1rem] text-[#444]">
                  Palackého 22<br />
                  811 02 Bratislava
                </p>
              </div>
              <div>
                <h3
                  className="text-[1.5rem] mb-2 text-black"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Email
                </h3>
                <a
                  href="mailto:info@skolaludus.sk"
                  className="text-[1.1rem] text-black underline font-bold hover:text-[#ffd37c]"
                >
                  info@skolaludus.sk
                </a>
              </div>
              <div>
                <h3
                  className="text-[1.5rem] mb-2 text-black"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Telefón
                </h3>
                <a
                  href="tel:+421905543282"
                  className="text-[1.1rem] text-black underline font-bold hover:text-[#ffd37c]"
                >
                  0905 543 282
                </a>
              </div>
              <div>
                <h3
                  className="text-[1.5rem] mb-2 text-black"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Úradné hodiny
                </h3>
                <p className="text-[1.1rem] text-[#444]">
                  Pondelok - Piatok: 9:00 - 17:00
                </p>
              </div>

              {/* Added Fakturačné údaje here */}
              <div className="pt-8 border-t border-gray-100 mt-8">
                <h3
                  className="text-[1.5rem] mb-4 text-black"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Fakturačné údaje
                </h3>
                <div className="space-y-2 text-[1.1rem] text-[#444]">
                  <p><strong>Názov:</strong> Občianske združenie LUDUS</p>
                  <p><strong>IČO:</strong> 30849331</p>
                  <p><strong>DIČ:</strong> 2021878100</p>
                  <p><strong>Adresa:</strong> Palackého 22, 811 02 Bratislava</p>
                  <p className="pt-2">
                    <strong>Bankové spojenie:</strong><br />
                    IBAN: SK00 0000 0000 0000 0000 0000
                  </p>
                </div>
              </div>
            </div>
          </div>


        </div>

        {/* Map placeholder */}
        <div className="mt-16 bg-gray-200 rounded-xl h-[400px] flex items-center justify-center">
          <p className="text-gray-500 text-xl">Mapa - Palackého 22, Bratislava</p>
        </div>
      </div>
    </>
  );
}
