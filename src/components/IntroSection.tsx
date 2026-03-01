'use client';

import Link from 'next/link';
import Image from 'next/image';

interface IntroSectionProps {
  href: string;
  title: React.ReactNode;
  description: string;
  backgroundImage: string;
  logo: string;
  logoAlt: string;
}

export default function IntroSection({
  href,
  title,
  description,
  backgroundImage,
  logo,
  logoAlt
}: IntroSectionProps) {
  return (
    <Link
      href={href}
      className="flex-1 relative transition-all duration-500 cursor-pointer overflow-hidden no-underline block rounded-xl m-0 group hover:flex-[1.3] max-md:min-h-[140px]"
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 transition-all duration-300 z-[1] group-hover:bg-black/20" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center w-full px-5 transition-all duration-500 group-hover:bg-black/20">
        {/* Logo */}
        <Image
          src={logo}
          alt={logoAlt}
          width={150}
          height={100}
          className="block max-w-[120px] max-md:max-w-[100px] max-h-[80px] mx-auto mb-4 max-md:mb-2 object-contain transition-transform duration-500 drop-shadow-lg bg-white py-2 px-4 rounded-xl"
        />

        {/* Title */}
        <h2
          className="text-[3rem] max-md:text-[2rem] font-bold mb-2 max-md:mb-0 text-white uppercase text-center leading-tight"
          style={{
            fontFamily: 'var(--font-heading)',
            textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
          }}
        >
          {title}
        </h2>

        {/* Description - hidden on mobile, shown on desktop hover */}
        <p className="text-[1.1rem] text-gray-100 opacity-0 h-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 max-md:hidden">
          {description}
        </p>
      </div>
    </Link>
  );
}
