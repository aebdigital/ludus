import Link from 'next/link';
import { BlogPost } from '@/data/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col h-full hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
      <Link
        href={`/ludus-academy/blog/${post.id}`}
        className="no-underline text-inherit flex flex-col h-full"
      >
        <div
          className="w-full h-[200px] bg-gray-200 bg-cover bg-center"
          style={{ backgroundImage: `url('${post.image}')` }}
        />
        <div className="p-6 flex-1 flex flex-col">
          <span className="text-[0.85rem] text-gray-500 mb-2 font-bold">
            {post.date}
          </span>
          <h3
            className="text-[1.5rem] mb-4 text-black leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {post.title}
          </h3>
          <p className="text-base text-gray-600 mb-6 flex-grow">
            {post.preview}
          </p>
          <span className="font-bold text-[#d4a017] uppercase tracking-wider text-[0.9rem] mt-auto">
            Čítať ďalej
          </span>
        </div>
      </Link>
    </div>
  );
}
