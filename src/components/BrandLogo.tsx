import Image from 'next/image';
import Link from 'next/link';

interface BrandLogoProps {
  href?: string;
  className?: string;
  priority?: boolean;
  compact?: boolean;
  prominent?: boolean;
}

export default function BrandLogo({
  href = '/',
  className = '',
  priority = false,
  compact = false,
  prominent = false,
}: BrandLogoProps) {
  const dimensions = compact
    ? 'h-11 w-[126px]'
    : prominent
      ? 'h-[60px] w-[178px] md:h-[72px] md:w-[212px]'
      : 'h-14 w-[166px] md:h-16 md:w-[190px]';

  const logo = (
    <div
      className={`group relative inline-flex items-center rounded-[26px] border border-[rgba(0,212,255,0.16)] bg-[linear-gradient(135deg,rgba(0,212,255,0.11),rgba(255,255,255,0.03))] px-3 py-2.5 shadow-[0_0_0_1px_rgba(0,212,255,0.08),0_16px_34px_rgba(0,0,0,0.32)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[26px] bg-[radial-gradient(circle_at_22%_28%,rgba(255,0,0,0.18),transparent_22%),radial-gradient(circle_at_72%_50%,rgba(0,212,255,0.22),transparent_38%)] opacity-90" />
      <div className="pointer-events-none absolute -inset-2 rounded-[30px] bg-[radial-gradient(circle_at_70%_46%,rgba(0,123,255,0.18),transparent_35%)] blur-xl opacity-90" />
      <div className="pointer-events-none absolute -inset-[1px] rounded-[26px] shadow-[0_0_24px_rgba(0,123,255,0.22)] transition-opacity group-hover:opacity-100" />
      <div className={`relative ${dimensions}`}>
        <Image
          src="/images/brand/pokerush-brasil-logo.png"
          alt="PokeRush Brasil"
          fill
          priority={priority}
          className="object-contain drop-shadow-[0_0_22px_rgba(0,212,255,0.28)]"
          sizes={compact ? '126px' : prominent ? '(max-width: 768px) 178px, 212px' : '(max-width: 768px) 166px, 190px'}
        />
      </div>
    </div>
  );

  return href ? <Link href={href}>{logo}</Link> : logo;
}
