import Link from 'next/link';

interface GuideCardProps {
  title: string;
  excerpt: string;
  category: string;
  link: string;
}

export default function GuideCard({ title, excerpt, category, link }: GuideCardProps) {
  return (
    <Link href={link} className="group block h-full">
      <article className="esports-card flex h-full flex-col">
        <div className="esports-card-content flex-1">
          <span className="esports-tag w-fit">{category}</span>
          <h3 className="esports-card-title text-xl group-hover:text-[#7fe8ff] transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="esports-card-subtitle text-sm line-clamp-3">
            {excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}
