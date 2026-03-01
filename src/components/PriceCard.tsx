import Button from './Button';

interface PriceCardProps {
  title: string;
  price: string;
  period?: string;
  note?: string;
  href?: string;
  buttonText?: string;
}

export default function PriceCard({
  title,
  price,
  period,
  note,
  href,
  buttonText = 'Prihlásiť sa'
}: PriceCardProps) {
  return (
    <div className="bg-white p-12 max-md:p-6 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-center flex flex-col justify-between transition-all duration-300 border border-transparent hover:-translate-y-1 hover:border-[#f47f44]">
      <div>
        <h3
          className="text-[1.8rem] text-black mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {title}
        </h3>
        <span
          className="text-[3.5rem] font-extrabold text-black block my-4"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {price}
        </span>
        {period && (
          <span className="text-[1.2rem] text-gray-400 font-normal">{period}</span>
        )}
        {note && (
          <p className="text-sm text-gray-500 mt-3">{note}</p>
        )}
      </div>
      {href && (
        <Button href={href} className="mt-8 w-full">
          {buttonText}
        </Button>
      )}
    </div>
  );
}
