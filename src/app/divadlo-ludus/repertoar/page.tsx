import Image from 'next/image';
import Link from 'next/link';
import { getRepertoar, getImageUrl } from '@/lib/api';

export const revalidate = 60;

const categoryLabels: Record<string, string> = {
  'divadlo-ludus': 'Divadlo Ludus',
  'skola-ludus': 'Škola Ludus',
  'ludus-academy': 'Ludus Academy',
};

export default async function RepertoarPage() {
  const items = await getRepertoar();

  return (
    <>
      <section
        className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
        style={{ backgroundImage: "url('/images/divadlo-main.webp')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1
          className="relative text-white text-[6rem] z-10 text-center max-md:text-[3rem]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Repertoár
        </h1>
      </section>

      <div className="w-[95%] mx-auto py-16">
        {items.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            Repertoár sa pripravuje.
          </p>
        ) : (
          <div className="space-y-20">
            {items.map((item) => {
              const photos = item.gallery_paths && item.gallery_paths.length > 0
                ? item.gallery_paths
                : [item.image_path || ''];

              return (
                <Link
                  key={item.id}
                  href={`/program/${item.slug}`}
                  className="block no-underline"
                >
                  <div className="mb-6">
                    <div className="flex items-center gap-4 flex-wrap">
                      <h2
                        className="text-[2.5rem] md:text-[3.5rem] text-black m-0 leading-tight"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {item.program_title}
                      </h2>
                      {item.category && (
                        <span className="bg-white text-gray-600 text-xs uppercase tracking-wide font-semibold px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                          {categoryLabels[item.category] || item.category}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 mt-2 flex-wrap">
                      {item.subtitle && (
                        <p className="text-gray-500 text-lg m-0">{item.subtitle}</p>
                      )}
                      {(item.year || item.venue) && (
                        <p className="text-gray-400 text-sm m-0">
                          {[item.year, item.venue].filter(Boolean).join(' · ')}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {photos.map((photo, i) => (
                      <div key={i} className="group/photo relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer">
                        <Image
                          src={photo ? getImageUrl(photo) : '/images/divadlo-main.webp'}
                          alt={`${item.program_title} ${i + 1}`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover/photo:scale-105"
                          sizes="(max-width: 768px) 50vw, 20vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover/photo:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                          <span className="text-white font-semibold opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300">
                            Viac o programe →
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
