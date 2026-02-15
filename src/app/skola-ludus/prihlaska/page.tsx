'use client';

import Button from '@/components/Button';

export default function PrihlaskaPage() {
  return (
    <>
      <section
        className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
        style={{ backgroundImage: "url('/images/skola/IMG_4742.webp')" }}
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
        <div className="grid grid-cols-[1.5fr_1fr] gap-12 max-lg:grid-cols-1">
          {/* Main Content */}
          <div>
            {/* Info Section */}
            <div className="bg-white p-12 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] mb-12">
              <h2
                className="text-[2rem] mb-8 border-b-2 border-[#ffd37c] pb-2 inline-block"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Často kladené otázky!
              </h2>
              <ul className="space-y-4 list-disc pl-5">
                {[
                  "Prihlášku si nemusíte tlačiť, ani nám posielať, my všetko pripravíme a nachystáme.",
                  "Podľa veku vášho dieťaťa vyplňate štúdium buď do 15 rokov alebo nad 15 rokov. ( Info nájdete pri prihláške)",
                  "Konkurz prebieha v malých skupinkách, hravou formou, takže nie je potrebné si nič chystať a ani sa špeciálne pripravovať.",
                  "Ďalší konkurz pravdepodobne nebude, pretože zo skúseností minulých rokov naplníme kapacity. Ak, tak v septembri bude iba dodatočný konkurz pre určité veky, ktoré budeme potrebovať ešte doplniť.",
                  "Mladších žiakov ako 8 rokov alebo 2. ročník ZŠ v školskom roku 2024/25 naša škola neprijíma. To, či otvoríme najmladší ročník s 8 ročnými deťmi závisí od počtu prihlásených a prijatých detí. Niekedy odporúčame ešte rok počkať."
                ].map((text, i) => (
                  <li key={i} className="text-[#555] leading-relaxed">
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Application Form Placeholder / Link */}
            <div className="bg-gray-50 p-12 rounded-xl border-2 border-dashed border-gray-300 text-center">
              <h3 className="text-xl font-bold mb-4">Elektronická prihláška</h3>
              <p className="mb-6 text-black">
                Prihláška prebieha cez externý systém iZUŠ. Budete presmerovaní.
              </p>
              <Button
                href="https://www.prihlaskadozus.cz/?zus=502"
                className="inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prejsť na prihlášku (iZUŠ)
              </Button>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            {/* Konkurz Info */}
            <div className="bg-[#ffd37c] p-8 rounded-xl text-black">
              <h2
                className="text-[2rem] mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Konkurz 2026/2027
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="font-bold uppercase text-sm opacity-70">Termín</p>
                  <p className="text-lg">5. júna 2026 (piatok)</p>
                </div>
                <div>
                  <p className="font-bold uppercase text-sm opacity-70">Vek žiakov</p>
                  <p className="text-lg">8 - 16 rokov (preferujeme od 9 r.)</p>
                </div>
                <div>
                  <p className="font-bold uppercase text-sm opacity-70">Miesto</p>
                  <p className="text-lg">SZUŠ Ludus, Palackého 22<br /><span className="text-sm">(vchod z terasy nad Merkantilom)</span></p>
                </div>
                <div>
                  <p className="font-bold uppercase text-sm opacity-70">Čas</p>
                  <p className="text-lg">14:30 - 19:00</p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-black/10">
                <p className="text-sm">Po prihlásení vás budeme kontaktovať s presným časom konkurzu, aby sme sa vyhli dlhému čakaniu.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
