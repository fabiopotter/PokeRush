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
    <Link href={link} className="block group">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300 overflow-hidden">
        {image && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-6">
          {tag && (
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              {tag}
            </span>
          )}
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}