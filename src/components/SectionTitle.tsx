interface SectionTitleProps {
  title: string;
  subtitle?: string;
  moreLink?: {
    href: string;
    text: string;
  };
}

export default function SectionTitle({ title, subtitle, moreLink }: SectionTitleProps) {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">{title}</h2>
          {subtitle && <p className="text-[#A0AEC0] text-sm md:text-base leading-7 max-w-2xl">{subtitle}</p>}
        </div>
        {moreLink && (
          <a
            href={moreLink.href}
            className="hidden sm:inline-flex items-center gap-2 text-[#00D4FF] hover:text-white font-semibold text-sm md:text-base"
          >
            {moreLink.text}
            <span className="text-lg">→</span>
          </a>
        )}
      </div>
    </div>
  );
}
