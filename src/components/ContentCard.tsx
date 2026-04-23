import Image from 'next/image';
import Link from 'next/link';

interface ContentCardProps {
  title: string;
  description: string;
  image?: string;
  tag?: string;
  link: string;
}

export default function ContentCard({ title, description, image, tag, link }: ContentCardProps) {
  return (
    <Link href={link} className="group block h-full">
      <article className="esports-card flex h-full flex-col">
        {image && (
          <div className="relative h-52 overflow-hidden border-b border-[rgba(0,212,255,0.1)]">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[rgba(11,15,26,0.84)] via-[rgba(11,15,26,0.12)] to-transparent" />
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
            />
          </div>
        )}
        <div className="esports-card-content flex-1">
          {tag && <span className="esports-tag w-fit">{tag}</span>}
          <h3 className="esports-card-title text-xl group-hover:text-[#7fe8ff] transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="esports-card-subtitle text-sm line-clamp-3">
            {description}
          </p>
        </div>
      </article>
    </Link>
  );
}
