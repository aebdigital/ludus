import Link from 'next/link';

interface GalleryNavProps {
    activeCategory: 'divadlo' | 'skola' | 'academy' | 'tabor';
}

export default function GalleryNav({ activeCategory }: GalleryNavProps) {
    const links = [
        { id: 'divadlo', label: 'Divadlo Ludus', href: '/divadlo-ludus/galeria' },
        { id: 'skola', label: 'Škola Ludus', href: '/skola-ludus/galeria' },
        { id: 'academy', label: 'Ludus Academy', href: '/ludus-academy/galeria' },
        { id: 'tabor', label: 'Denný Tábor', href: '/ludus-tabor/galeria' },
    ];

    return (
        <div className="flex justify-center flex-wrap gap-4 mt-4 mb-4 px-4">
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
    );
}
