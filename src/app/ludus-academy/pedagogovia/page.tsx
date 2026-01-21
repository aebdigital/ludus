import Image from 'next/image';
import Sidebar from '@/components/Sidebar';

const staff = [
  {
    name: 'Mgr. art Katarína Baranová ArtD',
    role: 'Lektor',
    image: '/images/o-nas/katarina-baranova.jpg'
  },
  {
    name: 'Mgr. art Michal Rovňák',
    role: 'Lektor',
    image: '/images/o-nas/michal-rovnak.png'
  },
  {
    name: 'Mgr. art Lenka Libjaková',
    role: 'Lektor',
    image: '/images/o-nas/lenka libjakova.png'
  },
  {
    name: 'Mgr. art Jakub Rek',
    role: 'Lektor',
    image: '/images/o-nas/jakub-rek.jpg'
  },
  {
    name: 'Mgr. art Janko Mikuš',
    role: 'Lektor',
    image: '/images/o-nas/Jan-mikus.png'
  },
  {
    name: 'Mgr. art Noro Šáro',
    role: 'Lektor',
    image: '/images/o-nas/Norman-saro.png'
  },
  {
    name: 'Mgr. art Mirka Durná ArtD',
    role: 'Lektor',
    image: '/images/o-nas/miroslava-durna.png'
  },
  {
    name: 'Mgr. art Katarína Gurová',
    role: 'Lektor',
    image: '/images/o-nas/katarina gurova.jpeg'
  },
  {
    name: 'Mgr. art Edita Koprivčevič Borsová',
    role: 'Lektor',
    image: '/images/o-nas/edita-borsova.png'
  },
  {
    name: 'Mgr. art Jozef Jurčišin Kukľa',
    role: 'Lektor',
    image: '/images/o-nas/jozef-jurcistin.png'
  },
  {
    name: 'Bc. Rišo Labuda',
    role: 'Lektor',
    image: null
  },
  {
    name: 'Mgr. art Jakub Ružička',
    role: 'Lektor',
    image: '/images/o-nas/jakub-ruzicka.png'
  },
  {
    name: 'Mgr. art Laco Ladomirjak',
    role: 'Lektor',
    image: '/images/o-nas/Ladislavk-ladomirjak.jpg'
  }
];

export default function LudusAcademyPedagogoviaPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
        style={{ backgroundImage: "url('/images/academy/IMG_1128.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1
          className="relative text-white text-[5rem] z-10 text-center max-md:text-[3rem] uppercase font-bold"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Pedagógovia Ludus Academy
        </h1>
      </section>

      <div className="w-[95%] mx-auto py-16">
        <div className="flex gap-16 items-start max-xl:flex-col">

          {/* Main Content Column */}
          <main className="flex-1 min-w-0">
            <p className="text-[1.2rem] text-[#444] mb-12 max-w-[800px]">
              Náš tím tvoria profesionálni herci, režiséri a pedagógovia s bohatými skúsenosťami v oblasti divadla a vzdelávania.
              Každý z nich prináša jedinečný pohľad a prístup k výučbe dramatického umenia.
            </p>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8">
              {staff.map((member) => (
                <div
                  key={member.name}
                  className="bg-white rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="aspect-[3/4] relative bg-gray-100">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-300">
                        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-[1.2rem] mb-1 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>{member.name}</h3>
                    <p className="text-[#ffd37c] font-bold text-sm uppercase tracking-wider">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </main>

          {/* Sidebar Column */}
          <Sidebar />
        </div>
      </div>
    </>
  );
}
