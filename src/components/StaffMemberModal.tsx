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
            const scrollY = window.scrollY;
            document.addEventListener('keydown', handleEscape);
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.left = '0';
            document.body.style.right = '0';
            document.body.style.overflow = 'hidden';

            return () => {
                document.removeEventListener('keydown', handleEscape);
                document.removeEventListener('mousedown', handleClickOutside);
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.left = '';
                document.body.style.right = '';
                document.body.style.overflow = '';
                window.scrollTo(0, scrollY);
            };
        }
    }, [member, onClose]);

    if (!member) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300 overscroll-none"
            onTouchMove={e => {
                if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                    e.preventDefault();
                }
            }}
        >
            <div
                ref={modalRef}
                className="bg-white rounded-2xl w-full max-w-6xl h-[70vh] overflow-hidden shadow-2xl flex flex-col md:flex-row relative animate-in fade-in zoom-in-95 duration-200"
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

                <div className="w-full md:w-1/2 relative h-[250px] md:h-auto shrink-0">
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col bg-white min-h-0">
                    <h2 className="text-[2rem] leading-tight mb-2 text-black shrink-0" style={{ fontFamily: 'var(--font-heading)' }}>
                        {member.name}
                    </h2>
                    {member.role && (
                        <p className="text-[#ffd37c] font-bold text-sm uppercase tracking-wider mb-8 shrink-0">
                            {member.role}
                        </p>
                    )}

                    <div className="text-gray-700 leading-relaxed text-[0.8rem] space-y-3 pr-2 custom-scrollbar overflow-y-auto overscroll-contain min-h-0 flex-1">
                        {member.bio}
                    </div>
                </div>
            </div>
        </div>
    );
}
