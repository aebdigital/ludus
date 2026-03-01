import BlogCard from '@/components/BlogCard';
import { blogData } from '@/data/blog';

export default function BlogPage() {
 return (
 <>
 {/* Hero */}
 <section
 className="h-[40vh] max-md:h-[20vh] bg-cover flex items-center justify-center relative rounded-b-xl overflow-hidden mt-20 max-md:mt-13 "
 style={{ backgroundImage: "url('/images/academy/IMG_9026.webp')", backgroundPosition: 'center 35%' }}
 >
 <div className="absolute inset-0 bg-black/40" />
 <h1
 className="relative text-white text-[6rem] z-10 text-center max-md:text-[3rem]"
 style={{ fontFamily: 'var(--font-heading)' }}
 >
 Blog
 </h1>
 </section>

 <div className="w-[95%] mx-auto py-12">
 <p className="text-center max-w-[800px] mx-auto mb-12 text-[#555]">
 Čítajte naše články o divadle, improvizácii a tvorivom myslení. Zdieľame s vami tipy,
 inšpirácie a skúsenosti z našej praxe.
 </p>

 <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-12 mt-8">
 {blogData.map((post) => (
 <BlogCard key={post.id} post={post} />
 ))}
 </div>
 </div>
 </>
 );
}
