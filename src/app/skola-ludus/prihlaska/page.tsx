'use client';

import Button from '@/components/Button';

export default function PrihlaskaPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
        style={{ backgroundImage: "url('/images/skola/IMG_4742.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1
          className="relative text-white text-[6rem] z-10 text-center max-md:text-[3rem]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Prihláška
        </h1>
      </section>

      <div className="w-[95%] mx-auto py-12">
        <div className="grid grid-cols-2 gap-16 max-lg:grid-cols-1">
          {/* Form */}
          <div className="bg-white p-12 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] max-md:p-8">
            <h2
              className="text-[2.5rem] mb-8"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Prihláška do SZUŠ LUDUS
            </h2>
            <form className="flex flex-col gap-4">
              <div className="form-group">
                <label htmlFor="childName">Meno a priezvisko dieťaťa *</label>
                <input type="text" id="childName" name="childName" required />
              </div>
              <div className="form-group">
                <label htmlFor="birthDate">Dátum narodenia *</label>
                <input type="date" id="birthDate" name="birthDate" required />
              </div>
              <div className="form-group">
                <label htmlFor="parentName">Meno a priezvisko rodiča/zákonného zástupcu *</label>
                <input type="text" id="parentName" name="parentName" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Telefón *</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="address">Adresa trvalého bydliska</label>
                <input type="text" id="address" name="address" />
              </div>
              <div className="form-group">
                <label htmlFor="level">Stupeň štúdia *</label>
                <select id="level" name="level" required>
                  <option value="">Vyberte stupeň</option>
                  <option value="pripravka">Prípravné štúdium (5-6 rokov)</option>
                  <option value="stupen1">Základné štúdium I. stupeň (7-14 rokov)</option>
                  <option value="stupen2">Základné štúdium II. stupeň (14-18 rokov)</option>
                  <option value="dospeli">Štúdium pre dospelých (18+)</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="note">Poznámka</label>
                <textarea id="note" name="note" rows={4} />
              </div>
              <Button type="submit" className="mt-4">
                Odoslať prihlášku
              </Button>
            </form>
          </div>

          {/* Info */}
          <div>
            <div className="bg-white p-12 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] mb-8 max-md:p-8">
              <h2
                className="text-[2rem] mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Postup prihlásenia
              </h2>
              <ol className="list-decimal pl-6 space-y-4">
                <li className="text-[1.1rem] text-[#444]">
                  Vyplňte online prihlášku alebo navštívte kanceláriu školy.
                </li>
                <li className="text-[1.1rem] text-[#444]">
                  Budeme vás kontaktovať ohľadom termínu prijímacieho pohovoru.
                </li>
                <li className="text-[1.1rem] text-[#444]">
                  Po úspešnom pohovore dostanete rozhodnutie o prijatí.
                </li>
                <li className="text-[1.1rem] text-[#444]">
                  Uhraďte školné a zúčastnite sa prvej hodiny.
                </li>
              </ol>
            </div>

            <div className="bg-[#ffd37c] p-12 rounded-xl max-md:p-8">
              <h2
                className="text-[2rem] mb-6 text-black"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Dôležité termíny
              </h2>
              <ul className="list-none p-0 space-y-4">
                <li className="text-[1.1rem]">
                  <strong>Zápis na nový školský rok:</strong><br />
                  Apríl - Jún
                </li>
                <li className="text-[1.1rem]">
                  <strong>Prijímacie pohovory:</strong><br />
                  Máj - Jún
                </li>
                <li className="text-[1.1rem]">
                  <strong>Začiatok školského roka:</strong><br />
                  September
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
