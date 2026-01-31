'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { academyCategories } from '@/data/navigation';

export default function AcademySubpageSidebar() {
    const pathname = usePathname();

    return (
        <aside className="sticky top-[100px] w-full max-w-[300px] bg-white p-8 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 h-fit max-lg:max-w-none max-lg:static max-lg:mb-8">
            <div className="flex flex-col gap-8">
                {academyCategories.map((category) => (
                    <div key={category.title}>
                        <h3
                            className="text-[1.2rem] mb-4 pb-2 border-b-2 border-[#ffd37c] text-black font-bold uppercase tracking-wider"
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
                                        className={`text-[0.95rem] font-medium transition-all duration-200 hover:text-[#ffd37c] ${isActive ? 'text-[#ffd37c] font-bold underline decoration-2 underline-offset-4' : 'text-gray-600'
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
        </aside>
    );
}
