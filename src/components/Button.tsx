'use client';

import Link from 'next/link';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
  target?: string;
  rel?: string;
  download?: boolean | string;
}

export default function Button({
  href,
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
  target,
  rel,
  download
}: ButtonProps) {
  const baseClasses = variant === 'primary'
    ? 'btn-cta'
    : 'inline-block px-5 py-2.5 bg-gray-100 text-gray-800 no-underline rounded-xl font-bold transition-colors duration-300 hover:bg-gray-200';

  const content = variant === 'primary' ? (
    <span className="btn-text-container">
      <span className="btn-text btn-text-visible">{children}</span>
      <span className="btn-text btn-text-hidden">{children}</span>
    </span>
  ) : (
    children
  );

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`} target={target} rel={rel} download={download}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${className} ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
    >
      {content}
    </button>
  );
}
