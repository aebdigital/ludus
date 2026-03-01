'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

interface GalleryNavProps {
    activeCategory: 'divadlo' | 'skola' | 'academy' | 'tabor';
}

export default function GalleryNav({ activeCategory }: GalleryNavProps) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const links = [
        { id: 'skola', label: 'Škola Ludus', href: '/skola-ludus/galeria' },
        { id: 'academy', label: 'Ludus Academy', href: '/ludus-academy/galeria' },
        { id: 'tabor', label: 'Denný Tábor', href: '/ludus-tabor/galeria' },
    ];

    const activeLink = links.find((l) => l.id === activeCategory);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <>
            {/* Desktop */}
            <div className="hidden md:flex justify-center flex-wrap gap-4 mt-4 mb-4 px-4">
                {links.map((link) => (
                    <Link
                        key={link.id}
                        href={link.href}
                        className={`px-8 py-2 rounded-full text-base font-bold uppercase tracking-wider transition-all duration-300 border-2 ${activeCategory === link.id
                            ? 'bg-black text-white border-black'
                            : 'bg-white text-black border-gray-200 hover:border-black'
                            }`}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            {/* Mobile dropdown */}
            <div className="md:hidden w-[90%] mx-auto mt-4 mb-4 relative" ref={dropdownRef}>
                <button
                    onClick={() => setOpen(!open)}
                    className="w-full px-6 py-3 rounded-full text-base font-bold uppercase tracking-wider bg-black text-white border-2 border-black flex items-center justify-between"
                >
                    <span>{activeLink?.label}</span>
                    <svg
                        className={`w-5 h-5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                {open && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden z-50">
                        {links
                            .filter((l) => l.id !== activeCategory)
                            .map((link) => (
                                <Link
                                    key={link.id}
                                    href={link.href}
                                    className="block px-6 py-3 text-base font-bold uppercase tracking-wider text-black hover:bg-gray-50 transition-colors no-underline"
                                    onClick={() => setOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                    </div>
                )}
            </div>
        </>
    );
}
