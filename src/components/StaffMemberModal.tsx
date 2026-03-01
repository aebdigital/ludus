'use client';

import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { StaffMember } from '@/data/staffData';

interface StaffMemberModalProps {
    member: StaffMember | null;
    onClose: () => void;
}

export default function StaffMemberModal({ member, onClose }: StaffMemberModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Intercept wheel events at the document level
    const handleWheel = useCallback((e: WheelEvent) => {
        const scrollEl = scrollContainerRef.current;
        if (!scrollEl) return;

        // Check if the wheel event target is inside the scroll container
        if (scrollEl.contains(e.target as Node)) {
            // Allow native scroll inside, but prevent it from propagating to Lenis
            e.stopPropagation();
            // Manually scroll the container
            scrollEl.scrollTop += e.deltaY;
            e.preventDefault();
        } else {
            // Block scroll on backdrop/outside
            e.preventDefault();
            e.stopPropagation();
        }
    }, []);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        const handleClickOutside = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                onClose();
            }
        };

        if (member) {
            document.addEventListener('keydown', handleEscape);
            document.addEventListener('mousedown', handleClickOutside);
            // Capture phase to intercept before Lenis gets it
            document.addEventListener('wheel', handleWheel, { capture: true, passive: false });

            return () => {
                document.removeEventListener('keydown', handleEscape);
                document.removeEventListener('mousedown', handleClickOutside);
                document.removeEventListener('wheel', handleWheel, { capture: true } as EventListenerOptions);
            };
        }
    }, [member, onClose, handleWheel]);

    if (!member) return null;

    return (
        <div
            className="fixed inset-0 z-[2000] flex items-center justify-center p-4 max-md:p-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        >
            <div
                ref={modalRef}
                className="bg-white rounded-2xl max-md:rounded-none w-full max-w-7xl max-h-[85vh] max-md:max-h-full max-md:h-full shadow-2xl flex flex-col md:flex-row relative animate-in fade-in zoom-in-95 duration-200 overflow-hidden max-md:overflow-y-auto"
            >
                <button
                    onClick={onClose}
                    className="absolute md:absolute top-4 right-4 z-[2010] p-2 bg-white/80 rounded-full hover:bg-gray-100 transition-colors max-md:fixed"
                    aria-label="Close"
                >
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="w-full md:w-1/3 relative h-[450px] md:min-h-[85vh] shrink-0 overflow-hidden rounded-tl-2xl rounded-bl-2xl max-md:rounded-none">
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                </div>

                <div
                    ref={scrollContainerRef}
                    className="w-full md:w-2/3 p-8 md:p-12 bg-white rounded-r-2xl max-md:rounded-none overflow-y-auto max-md:overflow-visible overscroll-contain max-h-[85vh] max-md:max-h-none flex-1"
                >
                    <h2 className="text-[2rem] leading-tight mb-2 text-black" style={{ fontFamily: 'var(--font-heading)' }}>
                        {member.name}
                    </h2>
                    {member.role && (
                        <p className="text-[#f47f44] font-bold text-sm uppercase tracking-wider mb-8">
                            {member.role}
                        </p>
                    )}

                    <div className="text-gray-700 leading-relaxed text-[0.7rem] space-y-3">
                        {member.bio}
                    </div>
                </div>
            </div>
        </div>
    );
}
