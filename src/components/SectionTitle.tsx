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
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{title}</h2>
          {subtitle && <p className="text-gray-600 text-sm md:text-base leading-relaxed">{subtitle}</p>}
        </div>
        {moreLink && (
          <a
            href={moreLink.href}
            className="text-blue-600 hover:text-blue-700 font-semibold transition-colors text-sm md:text-base flex items-center gap-1 hover:gap-2 transition-all"
          >
            {moreLink.text}
            <span className="text-lg">→</span>
          </a>
        )}
      </div>
    </div>
  );
}