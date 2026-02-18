import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import { getGalleryImages, getImageUrl } from '@/lib/api';
import type { GalleryCategory } from '@/lib/api';

interface GalleryPreviewProps {
  category: GalleryCategory;
  href: string;
  limit?: number;
}

export default async function GalleryPreview({ category, href, limit = 6 }: GalleryPreviewProps) {
  const images = await getGalleryImages(category);
  const previewImages = images.slice(0, limit);

  if (previewImages.length === 0) return null;

  return (
    <div className="mt-16">
      <h2
        className="text-center text-[3.5rem] mb-8"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Galéria
      </h2>
      <div className="grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
        {previewImages.map((img) => (
          <Link key={img.id} href={href} className="group">
            <Image
              src={getImageUrl(img.image_path)}
              alt={img.alt_text || 'Galéria'}
              width={400}
              height={300}
              className="w-full h-[300px] object-cover rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button href={href}>Zobraziť celú galériu</Button>
      </div>
    </div>
  );
}
