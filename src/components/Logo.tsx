import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const mainColor = variant === 'light' ? 'text-sky-500' : 'text-sky-500';
  const subColor = variant === 'light' ? 'text-rose-400' : 'text-rose-400';

  return (
    <Link to="/" className={`inline-flex flex-col items-center leading-none ${className}`}>
      <span className={`font-serif text-2xl md:text-3xl font-medium tracking-wide ${mainColor}`}>
        Little Wonders
      </span>
      <span className={`font-script text-lg md:text-xl mt-1 ${subColor}`}>
        Babysitting &amp; Events Service
      </span>
    </Link>
  );
}
