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
      className="flex-1 relative transition-all duration-500 cursor-pointer overflow-hidden no-underline block rounded-xl m-0 group hover:flex-[1.3]"
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 transition-all duration-300 z-[1] group-hover:bg-black/20" />

      {/* Content */}
      <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 text-center w-full px-5 transition-all duration-500 group-hover:translate-y-[40%]">
        {/* Logo */}
        <Image
          src={logo}
          alt={logoAlt}
          width={150}
          height={100}
          className="block max-w-[150px] max-h-[100px] mx-auto mb-4 object-contain transition-transform duration-500 drop-shadow-lg bg-white py-2.5 px-4 rounded-xl"
        />

        {/* Title */}
        <h2
          className="text-[4rem] font-bold mb-2 text-white uppercase text-center"
          style={{
            fontFamily: 'var(--font-heading)',
            textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
          }}
        >
          {title}
        </h2>

        {/* Description - hidden by default, shown on hover */}
        <p className="text-[1.2rem] text-gray-100 opacity-0 translate-y-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          {description}
        </p>
      </div>
    </Link>
  );
}
