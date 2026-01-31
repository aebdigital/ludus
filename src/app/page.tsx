import IntroSection from '@/components/IntroSection';
import Button from '@/components/Button';
import { getHomepageAktuality, getProgramEvents } from '@/lib/api';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  const aktuality = await getHomepageAktuality();

  // Fetch upcoming events
  const allEvents = await getProgramEvents();
  const today = new Date().toISOString().split('T')[0];
  const upcomingEvents = allEvents
    .filter(e => e.event_date >= today)
    .slice(0, 4);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('sk-SK', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  const formatEventDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('sk-SK', { day: '2-digit', month: '2-digit' });
  };

  return (
    <>
      {/* Intro Container - 4 Main Sections */}
      <main className="flex h-[50vh] w-[calc(100%-2rem)] mx-auto mt-20 p-4 gap-4 max-md:flex-col max-md:h-auto">
        <IntroSection
          href="/skola-ludus"
          title="Škola Ludus"
          description="SZUŠ s tvorivou dramatikou pre deti a tínedžerov"
          backgroundImage="/images/skola-main.jpeg"
          logo="/images/loga-4/logo-skola.png"
          logoAlt="Logo Skola Ludus"
        />

        <IntroSection
          href="/divadlo-ludus"
          title="DIVADLO LUDUS"
          description="divadelná tvorba pre mladých"
          backgroundImage="/images/divadlo-main.jpg"
          logo="/images/loga-4/logo-divadlo.jpg"
          logoAlt="Logo Ludus Divadlo"
        />

        <IntroSection
          href="/ludus-academy"
          title="Ludus Academy"
          description="Divadelné kurzy a workshopy pre dospelých"
          backgroundImage="/images/academy-main-new.jpeg"
          logo="/images/loga-4/logo-academy.png"
          logoAlt="Logo Ludus Academy"
        />

        <IntroSection
          href="/ludus-tabor"
          title="Ludus Tabor"
          description="Denný letný divadelný tábor pre deti a tínedžerov"
          backgroundImage="/images/tabor/IMG_5438.jpeg"
          logo="/images/loga-4/logo-tabor.png"
          logoAlt="Logo Ludus Tabor"
        />
      </main>

      {/* Aktuality & Program Section */}
      <section className="p-4 w-[calc(100%-2rem)] mx-auto">
        <div className="grid grid-cols-[60%_calc(40%-1rem)] gap-4 max-lg:grid-cols-1">
          {/* Aktuality Box */}
          <div className="bg-white rounded-xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <h2 className="text-[3rem] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Aktuality
            </h2>
            <div className="flex flex-col gap-6">
              {aktuality.length > 0 ? (
                aktuality.map((item, index) => {
                  const getCategoryStyle = (cat: string) => {
                    switch (cat) {
                      case 'divadlo-ludus': return { label: 'DIVADLO', className: 'bg-black text-white' };
                      case 'skola-ludus': return { label: 'ŠKOLA', className: 'bg-blue-600 text-white' };
                      case 'ludus-academy': return { label: 'ACADEMY', className: 'bg-[#ffd37c] text-black' };
                      case 'ludus-tabor': return { label: 'TÁBOR', className: 'bg-green-600 text-white' };
                      default: return { label: 'NOVINKA', className: 'bg-gray-200 text-gray-800' };
                    }
                  };
                  const badge = getCategoryStyle(item.category);

                  return (
                    <article key={item.id} className={index < aktuality.length - 1 ? "pb-6 border-b border-gray-100" : "pb-0"}>
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-[0.7rem] font-bold px-2 py-1 rounded ${badge.className}`}>
                          {badge.label}
                        </span>
                        <span className="text-[0.85rem] text-black font-semibold uppercase tracking-wider">
                          {formatDate(item.date)}
                        </span>
                      </div>
                      <h3 className="text-[1.4rem] font-bold mt-0 mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                        {item.title}
                      </h3>
                      <p className="text-base text-black m-0">
                        {item.description}
                      </p>
                    </article>
                  );
                })
              ) : (
                <p className="text-black">Ziadne aktuality</p>
              )}
            </div>
          </div>

          {/* Program Box */}
          <div className="bg-black text-white rounded-xl p-8">
            <h2 className="text-[2.5rem] mb-6 text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              Divadelný program
            </h2>
            <div className="flex flex-col gap-4">
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((evt) => (
                  <a
                    key={evt.id}
                    href={`/program/${evt.slug}`}
                    className="flex items-center gap-4 p-4 bg-white/10 rounded-xl transition-all duration-300 hover:bg-white/15 hover:translate-x-1"
                  >
                    <span className="text-[1.5rem] font-bold min-w-[70px] text-[#ffd37c]" style={{ fontFamily: 'var(--font-heading)' }}>
                      {formatEventDate(evt.event_date)}
                    </span>
                    <div>
                      <h4 className="text-[1.1rem] text-white m-0 normal-case" style={{ fontFamily: 'var(--font-body)' }}>
                        {evt.title}
                      </h4>
                      <p className="text-[0.9rem] mt-1 mb-0 opacity-70 text-white">
                        {evt.time} | {evt.venue}
                      </p>
                    </div>
                  </a>
                ))
              ) : (
                <p className="text-white/50 italic">Pripravujeme program...</p>
              )}
            </div>

            <Button href="/divadlo-ludus" className="mt-6">
              Celý program
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
