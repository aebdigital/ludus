import Button from '@/components/Button';
import RepertoarGallery from '@/components/RepertoarGallery';
import { getRepertoar } from '@/lib/api';

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
        className="h-[40vh] bg-cover bg-[center_30%] flex items-center justify-center relative overflow-hidden mt-20"
        style={{ backgroundImage: "url('/images/repertoar-hero.webp')" }}
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
                <div key={item.id}>
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

                  <RepertoarGallery photos={photos} title={item.program_title} />

                  <div className="mt-6 text-center">
                    <Button href={`/program/${item.slug}`} className="!bg-black !text-white hover:!bg-gray-800">
                      Najbližšie predstavenie
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
