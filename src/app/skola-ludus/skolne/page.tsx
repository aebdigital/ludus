import PriceCard from '@/components/PriceCard';

export default function SkolnePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
        style={{ backgroundImage: "url('/images/skola/IMG_2915.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1
          className="relative text-white text-[6rem] z-10 text-center max-md:text-[3rem]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Školné
        </h1>
      </section>

      <div className="w-[95%] mx-auto py-12">
        <p className="text-center max-w-[800px] mx-auto mb-16 text-[1.2rem] text-[#555]">
          Prehľad poplatkov za štúdium v SZUŠ LUDUS. Školné je možné uhradiť jednorazovo alebo v dvoch splátkach.
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-12 mb-16">
          <PriceCard
            title="Prípravné štúdium"
            price="45€"
            period="/ mesiac"
            href="/skola-ludus/prihlaska"
          />
          <PriceCard
            title="Základné štúdium I. stupeň"
            price="50€"
            period="/ mesiac"
            href="/skola-ludus/prihlaska"
          />
          <PriceCard
            title="Základné štúdium II. stupeň"
            price="55€"
            period="/ mesiac"
            href="/skola-ludus/prihlaska"
          />
          <PriceCard
            title="Štúdium pre dospelých"
            price="65€"
            period="/ mesiac"
            href="/skola-ludus/prihlaska"
          />
        </div>

        {/* Additional Info */}
        <div className="bg-white p-12 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
          <h2
            className="text-[2.5rem] mb-8 text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Dôležité informácie
          </h2>
          <div className="grid grid-cols-2 gap-12 max-md:grid-cols-1">
            <div>
              <h3
                className="text-[1.8rem] mb-4 text-black relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[60px] after:h-1 after:bg-[#ffd37c]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Spôsob platby
              </h3>
              <ul className="list-none p-0">
                {[
                  'Prevodom na účet školy',
                  'Jednorazová platba na celý školský rok',
                  'Platba v dvoch splátkach (september, február)',
                  'Mesačné platby po dohode'
                ].map((item) => (
                  <li
                    key={item}
                    className="relative pl-8 mb-3 text-[1.1rem] text-[#444] before:content-['•'] before:text-[#ffd37c] before:font-bold before:text-xl before:absolute before:left-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3
                className="text-[1.8rem] mb-4 text-black relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[60px] after:h-1 after:bg-[#ffd37c]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Čo je zahrnuté
              </h3>
              <ul className="list-none p-0">
                {[
                  'Skupinová výučba',
                  'Účasť na školských predstaveniach',
                  'Materiály na vyučovanie',
                  'Prístup do priestorov školy',
                  'Odborné vedenie pedagógov'
                ].map((item) => (
                  <li
                    key={item}
                    className="relative pl-8 mb-3 text-[1.1rem] text-[#444] before:content-['•'] before:text-[#ffd37c] before:font-bold before:text-xl before:absolute before:left-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
