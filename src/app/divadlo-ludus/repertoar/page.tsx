import Image from 'next/image';
import Link from 'next/link';
import { getRepertoar, getImageUrl } from '@/lib/api';
import type { ProgramCategory } from '@/lib/api';

export const revalidate = 60;

const categoryLabels: Record<ProgramCategory, string> = {
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
                ? item.gallery_paths.slice(0, 4)
                : [item.image_path || ''];

              return (
                <Link
                  key={item.slug}
                  href={`/program/${item.slug}`}
                  className="block no-underline"
                >
                  <div className="mb-6">
                    <div className="flex items-center gap-4">
                      <h2
                        className="text-[2.5rem] md:text-[3.5rem] text-black m-0 leading-tight"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {item.title}
                      </h2>
                      {item.age_badge && (
                        <span className="bg-[#ffd37c] text-black text-sm font-bold px-3 py-1 rounded-full">
                          {item.age_badge}
                        </span>
                      )}
                      <span className="bg-white text-gray-600 text-xs uppercase tracking-wide font-semibold px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                        {categoryLabels[item.category]}
                      </span>
                    </div>
                    {item.subtitle && (
                      <p className="text-gray-500 text-lg mt-2 mb-0">{item.subtitle}</p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {photos.map((photo, i) => (
                      <div key={i} className="group/photo relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer">
                        <Image
                          src={photo ? getImageUrl(photo) : '/images/divadlo-main.webp'}
                          alt={`${item.title} ${i + 1}`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover/photo:scale-105"
                          sizes="(max-width: 768px) 50vw, 25vw"
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
