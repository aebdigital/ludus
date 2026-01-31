import { getGalleryImages, getImageUrl } from '@/lib/api';
import GalleryGrid from '@/components/GalleryGrid';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function TaborGalériaPage() {
  const images = await getGalleryImages('ludus-tabor');

  const processedImages = images.map(img => ({
    id: img.id,
    url: getImageUrl(img.image_path),
    alt_text: img.alt_text
  }));

  return (
    <>
      {/* Hero */}
      <section
        className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
        style={{ backgroundImage: "url('/images/tabor/IMG_5438.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1
          className="relative text-white text-[6rem] z-10 text-center max-md:text-[3rem]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Galéria
        </h1>
      </section>

      <div className="w-[95%] mx-auto py-12">
        <h2
          className="text-center text-[3rem] mb-12"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Ludus Tábor
        </h2>
        <GalleryGrid images={processedImages} />
      </div>
    </>
  );
}
