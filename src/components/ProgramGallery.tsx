'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const ChevronLeftIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
);

const ChevronRightIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
);

interface ProgramGalleryProps {
    images: string[];
    title: string;
}

export default function ProgramGallery({ images, title }: ProgramGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        let newIndex = currentIndex + newDirection;
        if (newIndex < 0) newIndex = images.length - 1;
        if (newIndex >= images.length) newIndex = 0;
        setCurrentIndex(newIndex);
    };

    const setPage = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    if (!images || images.length === 0) return null;

    if (images.length === 1) {
        return (
            <div className="w-full h-full relative">
                <Image
                    src={images[0]}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        );
    }

    return (
        <div className="w-full h-full relative overflow-hidden group bg-gray-200">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                    className="absolute w-full h-full"
                >
                    <Image
                        src={images[currentIndex]}
                        alt={`${title} - image ${currentIndex + 1}`}
                        fill
                        className="object-cover"
                        priority={currentIndex === 0}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none z-10">
                <button
                    onClick={(e) => { e.stopPropagation(); paginate(-1); }}
                    className="p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors pointer-events-auto shadow-lg backdrop-blur-sm transform hover:scale-110 active:scale-95"
                    aria-label="Previous image"
                >
                    <ChevronLeftIcon className="w-8 h-8" />
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); paginate(1); }}
                    className="p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors pointer-events-auto shadow-lg backdrop-blur-sm transform hover:scale-110 active:scale-95"
                    aria-label="Next image"
                >
                    <ChevronRightIcon className="w-8 h-8" />
                </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 pointer-events-none z-10">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setPage(idx)}
                        className={`w-3 h-3 rounded-full transition-all pointer-events-auto shadow-md backdrop-blur-sm border border-black/10 ${idx === currentIndex
                            ? 'bg-white scale-125 ring-2 ring-black/10'
                            : 'bg-white/60 hover:bg-white/90'
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
