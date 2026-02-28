'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { academyCategories } from '@/data/navigation';
import { Aktualita } from '@/lib/api';

interface AcademySubpageSidebarProps {
    news?: Aktualita[];
}

export default function AcademySubpageSidebar({ news }: AcademySubpageSidebarProps) {
    const pathname = usePathname();

    return (
        <aside className="sticky top-[100px] w-full max-w-[300px] bg-white p-8 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 h-fit max-lg:max-w-none max-lg:static max-lg:mb-8">
            <div className="flex flex-col gap-8">
                {/* News Section */}
                {news && news.length > 0 && (
                    <div>
                        <h3
                            className="text-[1.2rem] mb-4 pb-2 border-b-2 border-black text-black font-bold uppercase tracking-wider flex items-center gap-2"
                            style={{ fontFamily: 'var(--font-heading)' }}
                        >
                            <span className="w-2 h-2 bg-[#f47f44] rounded-full animate-pulse"></span>
                            AKTUALITY
                        </h3>
                        <nav className="flex flex-col gap-4">
                            {news.map((item) => (
                                <Link
                                    key={item.id}
                                    href={item.link || '#'}
                                    className="group flex flex-col gap-1 p-3 rounded-lg hover:bg-gray-50 transition-colors border-l-2 border-transparent hover:border-[#f47f44]"
                                >
                                    <span className="text-[0.75rem] text-[#f47f44] font-bold uppercase tracking-wider">
                                        {new Date(item.date).toLocaleDateString('sk-SK')}
                                    </span>
                                    <span className="text-[0.95rem] font-bold text-black leading-tight group-hover:text-[#f47f44] transition-colors">
                                        {item.title}
                                    </span>
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}

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
                                        className={`text-[0.95rem] font-medium transition-all duration-200 hover:text-[#f47f44] ${isActive ? 'text-[#f47f44] font-bold underline decoration-2 underline-offset-4' : 'text-gray-600'
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
