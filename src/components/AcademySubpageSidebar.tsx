'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { academyCategories } from '@/data/navigation';
import { Aktualita } from '@/lib/api';

export default function AcademySubpageSidebar() {
    const pathname = usePathname();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Find the currently active link name for the mobile dropdown button
    let activeLinkName = "Vyberte si kategóriu";
    for (const category of academyCategories) {
        const activeLink = category.links.find(link => pathname === link.url);
        if (activeLink) {
            activeLinkName = activeLink.name;
            break;
        }
    }

    return (
        <aside className="lg:sticky lg:top-[100px] w-full lg:max-w-[300px] bg-white lg:p-8 lg:rounded-xl lg:shadow-[0_10px_30px_rgba(0,0,0,0.05)] lg:border lg:border-gray-100 h-fit mb-8 lg:mb-0 relative z-50">
            {/* Mobile Dropdown Button */}
            <button
                className="lg:hidden w-full flex items-center justify-between p-4 bg-white border border-[#f47f44] text-[#f47f44] rounded-xl shadow-md cursor-pointer font-bold text-lg"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                style={{ fontFamily: 'var(--font-heading)' }}
            >
                <span>{activeLinkName}</span>
                <span className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>

            {/* Navigation Lists (Desktop always visible, Mobile hidden unless open) */}
            <div className={`mt-4 lg:mt-0 bg-white lg:bg-transparent p-6 lg:p-0 rounded-xl shadow-lg lg:shadow-none border border-gray-100 lg:border-none absolute lg:static w-full left-0 transition-all duration-300 origin-top lg:block ${isDropdownOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible lg:scale-y-100 lg:opacity-100 lg:visible'}`}>
                <div className="flex flex-col gap-8">
                    {academyCategories.map((category) => (
                        <div key={category.title}>
                            <h3
                                className="text-[1.2rem] mb-4 pb-2 border-b-2 border-[#f47f44] text-black font-bold uppercase tracking-wider"
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                {category.title}
                            </h3>
                            <nav className="flex flex-col gap-3">
                                {category.links.map((link) => {
                                    const isActive = pathname === link.url;
                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.url}
                                            onClick={() => setIsDropdownOpen(false)}
                                            className={`text-[0.95rem] font-medium transition-all duration-200 hover:text-[#f47f44] block w-fit ${isActive ? 'text-[#f47f44] font-bold underline decoration-2 underline-offset-4' : 'text-gray-600'
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
}
