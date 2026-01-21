import Image from 'next/image';
import { getGalleryImages, getImageUrl } from '@/lib/api';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function DivadloGaleriaPage() {
  const images = await getGalleryImages('divadlo-ludus');

  return (
    <>
      {/* Hero */}
      <section
        className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
        style={{ backgroundImage: "url('/images/divadlo-main.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1
          className="relative text-white text-[6rem] z-10 text-center max-md:text-[3rem]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Galeria
        </h1>
      </section>

      <div className="w-[95%] mx-auto py-12">
        <h2
          className="text-center text-[3rem] mb-8"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Divadlo Ludus
        </h2>
        <div className="photo-gallery">
          {images.length > 0 ? (
            images.map((img) => (
              <Image
                key={img.id}
                src={getImageUrl(img.image_path)}
                alt={img.alt_text || 'Divadlo galeria'}
                width={400}
                height={300}
                className="w-full h-[300px] object-cover rounded-xl transition-transform duration-300 hover:scale-[1.02]"
              />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full py-12">Ziadne fotografie v galerii</p>
          )}
        </div>
      </div>
    </>
  );
}
