import Image from 'next/image';

export default function HistoriaPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
        style={{ backgroundImage: "url('/images/skola/IMG_3491.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1
          className="relative text-white text-[6rem] z-10 text-center max-md:text-[3rem]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          História
        </h1>
      </section>

      <div className="w-[95%] mx-auto py-12">
        {/* History Content */}
        <div className="grid grid-cols-1 gap-20 mb-16">
          {/* Founders */}
          <div className="bg-white p-12 rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.05)]">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-12 max-md:grid-cols-1">
              <div className="text-left p-8 border border-[#f1f8e9] rounded-xl">
                <h3
                  className="text-[2.5rem] mb-4 text-black"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Katarína Baranová
                </h3>
                <p className="italic text-[#666] mb-4 text-[1.1rem]">Zakladateľka a riaditeľka</p>
                <p className="text-[1.1rem] text-[#444]">
                  Katarína Baranová založila SZUŠ LUDUS v roku 1990. Je absolventkou VŠMU v Bratislave
                  a má bohaté skúsenosti z profesionálneho divadla. Pod jej vedením sa škola stala
                  jednou z najuznávanejších umeleckých škôl na Slovensku.
                </p>
              </div>
              <div className="text-left p-8 border border-[#f1f8e9] rounded-xl">
                <h3
                  className="text-[2.5rem] mb-4 text-black"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Milan Barány
                </h3>
                <p className="italic text-[#666] mb-4 text-[1.1rem]">Spoluzakladateľ</p>
                <p className="text-[1.1rem] text-[#444]">
                  Milan Barány je spoluzakladateľom školy a významnou osobnosťou slovenského divadla.
                  Jeho vízia a oddanosť umeniu pomohli formovať jedinečný charakter SZUŠ LUDUS.
                </p>
              </div>
            </div>
          </div>

          {/* Text Block */}
          <div className="text-[1.3rem] text-left">
            <h2
              className="text-[3rem] mb-8"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Naša história
            </h2>
            <p className="mb-6 text-[#444]">
              Súkromná základná umelecká škola LUDUS bola založená v roku 1990 ako jedna z prvých
              súkromných umeleckých škôl na Slovensku. Od svojho vzniku sa zameriava na komplexný
              rozvoj osobnosti prostredníctvom dramatického umenia.
            </p>
            <p className="mb-6 text-[#444]">
              Za viac ako 30 rokov existencie prešlo bránami školy tisíce žiakov, z ktorých mnohí
              pokračovali v štúdiu na vysokých umeleckých školách a dnes pôsobia v profesionálnych
              divadlách na Slovensku i v zahraničí.
            </p>
            <p className="text-[#444]">
              Škola získala mnohé ocenenia a jej žiaci pravidelne reprezentujú Slovensko na
              medzinárodných festivaloch a súťažiach.
            </p>
          </div>

          {/* Manifesto */}
          <div className="bg-white text-black p-20 text-left my-20 rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.05)] border-2 border-[#ffd37c] max-md:p-8">
            <h3
              className="mb-12 text-[4rem] text-black max-md:text-[2.5rem]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Náš manifest
            </h3>
            <ul className="list-none max-w-full m-0">
              {[
                'Veríme v silu divadla meniť životy.',
                'Každý človek má v sebe tvorivý potenciál.',
                'Umenie nie je luxus, ale nevyhnutnosť.',
                'Výchova umením je výchovou k slobode.',
                'Divadlo je zrkadlom spoločnosti.'
              ].map((item) => (
                <li key={item} className="mb-6 text-[1.5rem] italic max-md:text-[1.2rem]">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Group Teaching */}
          <div className="bg-white p-16 rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.05)] max-md:p-8">
            <h2
              className="text-[3rem] mb-8"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Skupinová výučba
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-12 mt-12">
              {[
                { title: 'Prípravka', desc: 'Pre deti 5-6 rokov. Hravé objavovanie divadla.' },
                { title: 'I. stupeň', desc: 'Pre deti 7-14 rokov. Základy dramatického umenia.' },
                { title: 'II. stupeň', desc: 'Pre mládež 14-18 rokov. Pokročilé techniky.' },
                { title: 'Dospelí', desc: 'Pre dospelých 18+. Kurzy a workshopy.' }
              ].map((item) => (
                <div key={item.title} className="bg-[#f1f8e9] p-8 rounded-xl">
                  <h4
                    className="text-black mb-4 text-[2rem]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-[1.1rem] text-[#444]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
