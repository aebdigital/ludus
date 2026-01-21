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
            <p className="mb-2 flex items-center gap-2">
              <Image
                src="/images/icons/email.svg"
                alt="Email"
                width={18}
                height={18}
                className="flex-shrink-0"
              />
              <a href="mailto:info@skolaludus.sk" className="underline leading-none">
                info@skolaludus.sk
              </a>
            </p>
            <p className="mb-2 flex items-center gap-2">
              <Image
                src="/images/icons/phone.svg"
                alt="Tel"
                width={18}
                height={18}
                className="flex-shrink-0"
              />
              <a href="tel:+421905543282" className="underline leading-none">
                0905 543 282
              </a>
            </p>
            <p className="mb-2 text-base font-semibold">
              Palackého 22,<br /> 811 02 Bratislava
            </p>
            <p className="mb-2 text-base font-semibold">IČO: 30849331</p>
            <p className="mb-4 text-base font-semibold">DIČ: 2021878100</p>

            <h4 className="text-base font-bold uppercase mb-2 mt-6" style={{ fontFamily: 'var(--font-body)' }}>
              Sledujte nás
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/skolaludus"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:scale-115 transition-transform duration-300"
              >
                <Image
                  src="/images/icons/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:scale-115 transition-transform duration-300"
              >
                <Image
                  src="/images/icons/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
            </div>
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
