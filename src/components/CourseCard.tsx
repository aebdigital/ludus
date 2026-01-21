import Link from 'next/link';

interface CourseCardProps {
  title: string;
  description: string;
  href: string;
  backgroundImage: string;
}

export default function CourseCard({ title, description, href, backgroundImage }: CourseCardProps) {
  return (
    <Link
      href={href}
      className="relative p-8 border-none transition-all duration-300 flex flex-col justify-center items-center rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] h-[350px] overflow-hidden no-underline bg-cover bg-center hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group w-full"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Overlay - Darker for better contrast */}
      <div className="absolute inset-0 bg-black/50 transition-all duration-300 group-hover:bg-black/40 z-[1]" />

      {/* Content */}
      <div className="relative z-[2] text-center w-full">
        <h3
          className="mb-4 text-white text-[2rem] uppercase leading-tight text-center drop-shadow-md"
          style={{
            fontFamily: 'var(--font-heading)',
          }}
        >
          {title}
        </h3>
        <p
          className="text-gray-200 text-[1.1rem] font-medium drop-shadow-sm px-4"
        >
          {description}
        </p>
      </div>
    </Link>
  );
}
