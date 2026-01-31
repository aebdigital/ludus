'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { menuData } from '@/data/navigation';

export default function Header() {
  const pathname = usePathname();
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const getActiveCategory = () => {
    const categoryMap: { [key: string]: number } = {
      'skola-ludus': 0,
      'divadlo-ludus': 1,
      'ludus-academy': 2,
      'ludus-tabor': 3,
      'program': 4
    };

    for (const [folder, index] of Object.entries(categoryMap)) {
      if (pathname.includes(`/${folder}`)) {
        return index;
      }
    }
    return -1;
  };

  const currentCategory = getActiveCategory();

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md z-[1000] py-3 flex justify-center shadow-[0_2px_20px_rgba(0,0,0,0.05)]">
      <div className="w-[95%] grid grid-cols-[auto_1fr_auto] items-center gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center cursor-pointer">
          <Image
            src="/images/loga-4/logo-main.png"
            alt="LUDUS Logo"
            width={120}
            height={60}
            className="h-[60px] w-auto object-contain"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex justify-center relative">
          <ul className="flex list-none gap-12">
            {menuData.map((item, index) => (
              <li
                key={item.title}
                className={`relative group ${currentCategory === index ? 'active-category' : ''}`}
                onMouseEnter={() => setActiveCategory(index)}
                onMouseLeave={() => {
                  setActiveCategory(null);
                  setHoveredImage(null);
                }}
              >
                <Link
                  href={item.url}
                  className={`relative text-black uppercase font-heading text-[1.4rem] tracking-wider transition-all duration-300 inline-block hover:text-gray-600 hover:scale-105 ${currentCategory === index ? 'before:absolute before:-top-2 before:-left-4 before:-right-4 before:-bottom-2 before:bg-[#ffd37c] before:rounded-[45%_55%_60%_40%/55%_45%_55%_45%] before:-z-10 before:-rotate-2' : ''
                    }`}
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {item.title}
                </Link>

                {/* Mega Menu - fixed position centered under nav */}
                {item.title !== 'Program' && (
                  <div className="fixed top-[76px] left-1/2 -translate-x-1/2 bg-white/[0.98] backdrop-blur-md w-[60vw] min-w-[800px] z-[1100] rounded-b-xl max-h-0 overflow-hidden p-0 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:max-h-[500px]">
                    <div className="flex justify-between gap-0 min-h-[400px]">
                      <div className="flex-[2] p-12">
                        <ul className="list-none p-0 m-0 columns-2 gap-12">
                          {item.links.map((link) => (
                            <li key={link.name} className="mb-2 break-inside-avoid">
                              <Link
                                href={link.url}
                                className="block text-black text-[2.2rem] font-medium no-underline transition-all duration-200 py-1 leading-tight relative w-fit max-w-full hover:translate-x-1 group/link"
                                style={{ fontFamily: 'var(--font-heading)' }}
                                onMouseEnter={() => setHoveredImage(link.image)}
                                onMouseLeave={() => setHoveredImage(null)}
                              >
                                {link.name}
                                <span className="absolute left-0 bottom-0 w-full h-3 bg-[url('data:image/svg+xml,%3Csvg%20width=%22100%22%20height=%2212%22%20viewBox=%220%200%20100%2012%22%20xmlns=%22http://www.w3.org/2000/svg%22%20preserveAspectRatio=%22none%22%3E%3Cpath%20d=%22M0,8%20Q50,0%20100,8%22%20stroke=%22%23ffd37c%22%20stroke-width=%223%22%20fill=%22none%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20vector-effect=%22non-scaling-stroke%22%20opacity=%221%22/%3E%3C/svg%3E')] bg-[length:100%_100%] bg-no-repeat opacity-0 scale-x-0 origin-left transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] -z-10 pointer-events-none group-hover/link:opacity-100 group-hover/link:scale-x-100" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div
                        className="flex-[0_0_400px] w-[400px] h-[350px] bg-cover bg-center rounded-xl self-center mr-4 relative overflow-hidden transition-all duration-300"
                        style={{
                          backgroundImage: `url('${hoveredImage || item.image}')`
                        }}
                      >
                        <div className="absolute inset-0 bg-black/10" />
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Group - Social + Contact */}
        <div className="flex items-center gap-4">

          <Link href="/kontakt" className="btn-cta">
            <span className="btn-text-container">
              <span className="btn-text btn-text-visible">Kontakt</span>
              <span className="btn-text btn-text-hidden">Kontakt</span>
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
