import Link from 'next/link';
import { blogData } from '@/data/blog';
import { notFound } from 'next/navigation';
import Button from '@/components/Button';

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return blogData.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = blogData.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  const recommendedPosts = blogData.filter((p) => p.id !== id).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section
        className="h-[40vh] bg-cover bg-center flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20"
        style={{ backgroundImage: `url('${post.image}')` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1
          className="relative text-white text-[4rem] z-10 text-center px-8 max-md:text-[2rem]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {post.title}
        </h1>
      </section>

      <div className="w-[95%] mx-auto py-12">
        <div className="flex gap-16 items-start max-lg:flex-col">
          {/* Main Content */}
          <article className="flex-[2]">
            <div className="bg-white p-12 rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.05)] max-md:p-6">
              <header className="mb-8 border-b border-gray-200 pb-4">
                <span className="text-base text-black font-bold">{post.date}</span>
              </header>

              <div
                className="text-[1.15rem] text-[#000] [&_p]:mb-6 [&_ul]:mb-6 [&_ul]:pl-6 [&_li]:mb-2"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <footer className="mt-12 pt-8 border-t border-gray-200">
                <Button href="/ludus-academy/blog" variant="secondary">
                  ← Späť na blog
                </Button>
              </footer>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="flex-1 sticky top-[100px] max-lg:static max-lg:w-full">
            <div className="bg-white p-8 rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.05)]">
              <h3
                className="text-[1.5rem] mb-6 border-b-2 border-[#ffd37c] pb-2 inline-block"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Odporúčané články
              </h3>
              <div className="flex flex-col gap-6">
                {recommendedPosts.map((recPost) => (
                  <Link
                    key={recPost.id}
                    href={`/ludus-academy/blog/${recPost.id}`}
                    className="flex flex-col no-underline text-inherit transition-transform hover:-translate-y-1"
                  >
                    <div
                      className="w-full h-[120px] bg-cover bg-center rounded-xl mb-2"
                      style={{ backgroundImage: `url('${recPost.image}')` }}
                    />
                    <span
                      className="font-bold text-[1.1rem] leading-tight mb-1"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {recPost.title}
                    </span>
                    <span className="text-[0.8rem] text-black">{recPost.date}</span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
