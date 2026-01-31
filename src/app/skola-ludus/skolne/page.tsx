import PriceCard from '@/components/PriceCard';
import Button from '@/components/Button';

export default function SkolnePage() {
  return (
    <>
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
          Školné na mesiac sa odvíja od toho, či žiak dodá škole na začiatku školského roka čestné prehlásenie.
          Systém vygeneruje školné na celý rok, s možnosťou voľby frekvencie platieb.
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 mb-16">
          <PriceCard
            title="S čestným prehlásením"
            price="42€"
            period="/ mesiac"
            href="/skola-ludus/prihlaska"
          />
          <PriceCard
            title="Bez čestného prehlásenia"
            price="52€"
            period="/ mesiac"
            href="/skola-ludus/prihlaska"
          />
          <PriceCard
            title="Súrodenecké školné"
            price="35€"
            period="/ mesiac"
            href="/skola-ludus/prihlaska"
          />
          <PriceCard
            title="Tvorivé písanie"
            price="25€"
            period="/ mesiac"
            href="/skola-ludus/prihlaska"
          />
          <PriceCard
            title="Príprava na konzervatórium/VŠMU"
            price="100€"
            period=""
            href="#"
          />
        </div>

        <p className="text-center text-sm text-black mb-16 italic max-w-2xl mx-auto">
          * Súrodenecká zľava sa vzťahuje na oboch súrodencov v prípade, že obdržíme čestné prehlásenie od oboch žiakov.
        </p>



      </div>
    </>
  );
}
