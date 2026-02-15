'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { StaffMember } from '@/data/staffData';

interface StaffMemberModalProps {
    member: StaffMember | null;
    onClose: () => void;
}

export default function StaffMemberModal({ member, onClose }: StaffMemberModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

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
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [member, onClose]);

    if (!member) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
            <div
                ref={modalRef}
                className="bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row relative animate-in fade-in zoom-in-95 duration-200"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Close"
                >
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[500px]">
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
                    <h2 className="text-[2rem] leading-tight mb-2 text-black" style={{ fontFamily: 'var(--font-heading)' }}>
                        {member.name}
                    </h2>
                    {member.role && (
                        <p className="text-[#ffd37c] font-bold text-sm uppercase tracking-wider mb-8">
                            {member.role}
                        </p>
                    )}

                    <div className="text-gray-700 leading-relaxed text-[0.9rem] space-y-4 overflow-y-auto max-h-[60vh] pr-2 custom-scrollbar">
                        {member.bio}
                    </div>
                </div>
            </div>
        </div>
    );
}
