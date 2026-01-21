interface HeroProps {
  title: string;
  backgroundImage: string;
  height?: 'small' | 'medium' | 'large';
}

export default function Hero({ title, backgroundImage, height = 'small' }: HeroProps) {
  const heightClasses = {
    small: 'h-[40vh]',
    medium: 'h-[50vh]',
    large: 'h-[60vh]'
  };

  return (
    <section
      className={`${heightClasses[height]} bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <h1
        className="relative text-white text-[6rem] z-10 text-center md:text-[4rem] sm:text-[3rem]"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {title}
      </h1>
    </section>
  );
}
