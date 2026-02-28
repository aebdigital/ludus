'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { getImageUrl } from '@/lib/api';

interface RepertoarGalleryProps {
  photos: string[];
  title: string;
}

export default function RepertoarGallery({ photos, title }: RepertoarGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visiblePhotos = photos.slice(0, 4);
  const remainingCount = photos.length - 4;

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % photos.length : null));
  }, [photos.length]);
  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + photos.length) % photos.length : null));
  }, [photos.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {visiblePhotos.map((photo, i) => (
          <div
            key={i}
            className="group/photo relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
            onClick={() => setLightboxIndex(i)}
          >
            <Image
              src={photo ? getImageUrl(photo) : '/images/divadlo-main.webp'}
              alt={`${title} ${i + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover/photo:scale-105"
              sizes="(max-width: 768px) 50vw, 20vw"
            />
          </div>
        ))}

        {/* "+X fotografií" tile */}
        {remainingCount > 0 && photos[4] && (
          <div
            className="group/photo relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
            onClick={() => setLightboxIndex(4)}
          >
            <Image
              src={getImageUrl(photos[4])}
              alt={`${title} ďalšie`}
              fill
              className="object-cover brightness-50 transition-transform duration-300 group-hover/photo:scale-105"
              sizes="(max-width: 768px) 50vw, 20vw"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold text-xl" style={{ fontFamily: 'var(--font-heading)' }}>
                +{remainingCount} fotografií
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white text-4xl font-light hover:text-gray-300 transition-colors z-10 cursor-pointer"
          >
            ✕
          </button>

          {/* Counter */}
          <div className="absolute top-6 left-6 text-white/70 text-sm font-semibold">
            {lightboxIndex + 1} / {photos.length}
          </div>

          {/* Previous */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl font-light hover:text-gray-300 transition-colors z-10 cursor-pointer"
          >
            ‹
          </button>

          {/* Image */}
          <div
            className="relative w-[90vw] h-[80vh] max-w-[1200px]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={getImageUrl(photos[lightboxIndex])}
              alt={`${title} ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl font-light hover:text-gray-300 transition-colors z-10 cursor-pointer"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
