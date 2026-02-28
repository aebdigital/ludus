'use client';

import { useEffect, useState } from 'react';
import { getCategoryAktuality, type Aktualita, type GalleryCategory } from '@/lib/api';

interface SidebarProps {
    category: GalleryCategory;
}

export default function Sidebar({ category }: SidebarProps) {
    const [aktuality, setAktuality] = useState<Aktualita[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchAktuality() {
            setLoading(true);
            const data = await getCategoryAktuality(category);
            setAktuality(data);
            setLoading(false);
        }
        fetchAktuality();
    }, [category]);

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('sk-SK', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    return (
        <aside className="max-xl:order-first sticky top-[100px] w-full max-w-[320px] bg-[#1eabb0] p-8 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] h-fit max-lg:max-w-none max-lg:static max-lg:mb-8">
            <h3
                className="text-[1.5rem] mb-6 pb-3 border-b-2 border-white/30 text-white"
                style={{ fontFamily: 'var(--font-heading)' }}
            >
                Aktuality
            </h3>
            <div className="flex flex-col gap-4">
                {loading ? (
                    <p className="text-white/70 text-sm">Nacitavam...</p>
                ) : aktuality.length > 0 ? (
                    aktuality.map((item) => {
                        const inner = (
                            <div
                                className={`pb-4 border-b border-white/20 last:border-b-0 last:pb-0 ${item.link ? 'group/sidebar-item' : ''}`}
                            >
                                <span className="text-[0.8rem] text-white/70 font-bold uppercase tracking-wider block mb-1">
                                    {formatDate(item.date)}
                                </span>
                                <h4
                                    className={`text-[1.1rem] font-bold uppercase text-white mb-1 leading-tight ${item.link ? 'group-hover/sidebar-item:text-white/80 transition-colors duration-200' : ''}`}
                                    style={{ fontFamily: 'var(--font-body)' }}
                                >
                                    {item.title}
                                    {item.link && <span className="inline-block ml-1 text-[0.8rem] opacity-0 group-hover/sidebar-item:opacity-100 transition-opacity duration-200">→</span>}
                                </h4>
                                <p className="text-[0.9rem] text-white/80 m-0">
                                    {item.description}
                                </p>
                            </div>
                        );

                        if (item.link) {
                            return (
                                <a key={item.id} href={item.link} className="block no-underline text-inherit">
                                    {inner}
                                </a>
                            );
                        }
                        return <div key={item.id}>{inner}</div>;
                    })
                ) : (
                    <p className="text-white/70 text-sm">Ziadne aktuality</p>
                )}
            </div>
        </aside>
    );
}
