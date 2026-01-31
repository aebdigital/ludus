'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryImage {
    id: string | number;
    url: string;
    alt_text?: string | null;
}

interface GalleryGridProps {
    images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedIdx !== null) {
            setSelectedIdx((selectedIdx + 1) % images.length);
        }
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedIdx !== null) {
            setSelectedIdx((selectedIdx - 1 + images.length) % images.length);
        }
    };

    if (!images || images.length === 0) {
        return <p className="text-center text-black col-span-full py-12">Žiadne fotografie v galérii</p>;
    }

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {images.map((img, idx) => (
                    <motion.div
                        key={img.id}
                        layoutId={`img-${img.id}`}
                        className="relative aspect-square cursor-pointer group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                        onClick={() => setSelectedIdx(idx)}
                    >
                        <Image
                            src={img.url}
                            alt={img.alt_text || 'Galéria'}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="bg-white/90 backdrop-blur-sm text-black px-6 py-2 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Zväčšiť</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedIdx !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[3000] flex items-center justify-center p-4 sm:p-12 bg-black/95 backdrop-blur-md"
                        onClick={() => setSelectedIdx(null)}
                    >
                        <motion.div
                            key={selectedIdx}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="relative w-full max-w-7xl h-full flex flex-col items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                className="absolute top-0 right-0 sm:-top-12 sm:-right-12 text-white text-5xl font-extralight hover:text-[#ffd37c] transition-colors p-4 z-[3100]"
                                onClick={() => setSelectedIdx(null)}
                            >
                                ✕
                            </button>

                            {/* Navigation Buttons */}
                            <button
                                className="absolute left-0 sm:-left-20 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/20 text-white w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-4xl transition-all z-[3100] group backdrop-blur-sm"
                                onClick={prevImage}
                            >
                                <span className="group-hover:-translate-x-1 transition-transform">←</span>
                            </button>
                            <button
                                className="absolute right-0 sm:-right-20 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/20 text-white w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-4xl transition-all z-[3100] group backdrop-blur-sm"
                                onClick={nextImage}
                            >
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>

                            <div className="relative w-full h-full">
                                <Image
                                    src={images[selectedIdx].url}
                                    alt={images[selectedIdx].alt_text || 'Galéria'}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            {/* Info Overlay */}
                            <div className="absolute bottom-[-60px] left-0 right-0 text-center flex flex-col gap-2">
                                <span className="text-white/40 font-medium tracking-widest uppercase text-sm">
                                    Fotografia {selectedIdx + 1} z {images.length}
                                </span>
                                {images[selectedIdx].alt_text && (
                                    <span className="text-white text-lg font-light tracking-wide">{images[selectedIdx].alt_text}</span>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
