import Link from 'next/link';

interface GuideCardProps {
  title: string;
  excerpt: string;
  category: string;
  link: string;
}

export default function GuideCard({ title, excerpt, category, link }: GuideCardProps) {
  return (
    <Link href={link} className="block group">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300 p-6 h-full">
        <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          {category}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {excerpt}
        </p>
      </div>
    </Link>
  );
}