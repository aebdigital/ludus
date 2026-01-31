'use client';

import Link from 'next/link';
import Image from 'next/image';
import { academyLinks, schoolLinks, theaterLinks, campLinks } from '@/data/navigation';

export default function Footer() {
  return (
    <footer className="bg-[#ffd37c] text-black py-16 text-center">
      <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-left">
        {/* Logo & Contact Info */}
        <div>
          <Image
            src="/images/loga-4/logo-main.png"
            alt="LUDUS Logo"
            width={100}
            height={50}
            className="max-h-[50px] w-auto mb-4"
          />
          <div className="mt-4 text-[0.95rem]">
            <p className="mb-2 text-base font-semibold">
              Palackého 22,<br /> 811 02 Bratislava
            </p>
          </div>
        </div>

        {/* Škola Ludus */}
        <div>
          <h3 className="mb-4 text-[2rem]" style={{ fontFamily: 'var(--font-heading)' }}>
            Škola Ludus
          </h3>
          {schoolLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              className="block w-fit mb-2 text-[1.1rem] font-semibold relative hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-black after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:scale-110 transition-transform"><Image src="/images/icons/instagram.svg" alt="IG" width={24} height={24} /></a>
            <a href="#" className="hover:scale-110 transition-transform"><Image src="/images/icons/facebook.svg" alt="FB" width={24} height={24} /></a>
          </div>
        </div>

        {/* Divadlo Ludus */}
        <div>
          <h3 className="mb-4 text-[2rem]" style={{ fontFamily: 'var(--font-heading)' }}>
            Divadlo Ludus
          </h3>
          {theaterLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              className="block w-fit mb-2 text-[1.1rem] font-semibold relative hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-black after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:scale-110 transition-transform"><Image src="/images/icons/instagram.svg" alt="IG" width={24} height={24} /></a>
            <a href="#" className="hover:scale-110 transition-transform"><Image src="/images/icons/facebook.svg" alt="FB" width={24} height={24} /></a>
          </div>
        </div>

        {/* Ludus Academy */}
        <div>
          <h3 className="mb-4 text-[2rem]" style={{ fontFamily: 'var(--font-heading)' }}>
            Ludus Academy
          </h3>
          {academyLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              className="block w-fit mb-2 text-[1.1rem] font-semibold relative hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-black after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:scale-110 transition-transform"><Image src="/images/icons/instagram.svg" alt="IG" width={24} height={24} /></a>
            <a href="#" className="hover:scale-110 transition-transform"><Image src="/images/icons/facebook.svg" alt="FB" width={24} height={24} /></a>
          </div>
        </div>

        {/* Ludus Tábor */}
        <div>
          <h3 className="mb-4 text-[2rem]" style={{ fontFamily: 'var(--font-heading)' }}>
            Ludus Tábor
          </h3>
          {campLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              className="block w-fit mb-2 text-[1.1rem] font-semibold relative hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-black after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center mt-8 border-t border-gray-800 pt-4">
        <p className="text-[0.9rem]">&copy; 2025 LUDUS. All rights reserved.</p>
        <p className="text-[0.85rem] mt-2">
          Tvorba stránky -{' '}
          <a
            href="https://aebdigital.sk"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            AEB Digital
          </a>
          <span className="mx-2">|</span>
          <Link href="/ochrana-osobnych-udajov" className="underline hover:text-gray-600 transition-colors">
            Ochrana osobných údajov
          </Link>
          <span className="mx-2">|</span>
          <button
            onClick={() => window.openCookieSettings?.()}
            className="underline hover:text-gray-600 transition-colors"
          >
            Cookies
          </button>
        </p>
      </div>
    </footer>
  );
}
