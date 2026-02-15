'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CollapsibleListProps {
    items: string[];
}

export default function CollapsibleList({ items }: CollapsibleListProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const initialCount = 10;
    const visibleItems = isExpanded ? items : items.slice(0, initialCount);

    return (
        <div className="relative">
            <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-4 text-base text-left overflow-hidden"
                layout
            >
                <AnimatePresence initial={false} mode="popLayout">
                    {visibleItems.map((play, i) => (
                        <motion.div
                            key={`${play}-${i}`}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-start gap-2 hover:text-[#ffd37c] transition-colors leading-tight"
                        >
                            <span className="text-[#ffd37c]">•</span>
                            <span>{play}</span>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {!isExpanded && items.length > initialCount && (
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white via-white/80 to-transparent flex items-end justify-center pb-0 pointer-events-none mb-16">
                </div>
            )}

            {items.length > initialCount && (
                <div className="mt-8 text-center relative z-10">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-[#ffd37c] hover:text-black transition-all duration-300 font-bold uppercase tracking-wider text-sm shadow-md"
                    >
                        {isExpanded ? (
                            <>
                                <span>Zobraziť menej</span>
                                <span className="text-xl leading-none">−</span>
                            </>
                        ) : (
                            <>
                                <span>Zobraziť všetko</span>
                                <span className="text-xl leading-none">+</span>
                            </>
                        )}
                    </button>
                </div>
            )}
        </div>
    );
}
