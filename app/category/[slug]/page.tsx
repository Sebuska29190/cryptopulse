import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../../../components/Sidebar";
import { Metadata } from "next";

// WYMUSZENIE ODŚWIEŻANIA DANYCH BEZ DEPLOYU
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Zapytanie filtrujące po kategorii - zoptymalizowane pod Sanity
const CATEGORY_POSTS_QUERY = `*[_type == "post" && $slug in categories[]->slug.current] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  "categoryName": categories[0]->title
}`;

type Props = {
  params: { slug: string };
};

// PROFESJONALNE SEO DLA KATEGORII (Zgodnie z Twoimi instrukcjami)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categoryTitle = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
  return {
    title: `${categoryTitle} Analysis & Regulatory Updates | Crypto Pulse Now`,
    description: `Detailed analysis and legal insights regarding ${categoryTitle} within the digital asset market. Grounded in judicial standards and market intelligence.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  // Dodanie cache: 'no-store' gwarantuje, że po kliknięciu "Publish" w Sanity, post tu trafi natychmiast
  const posts = await client.fetch(CATEGORY_POSTS_QUERY, { slug: params.slug }, { cache: 'no-store' });

  return (
    <div className="bg-[#f1f1f1] min-h-screen">
      <div className="container mx-auto max-w-[1200px] py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3 bg-white p-6 shadow-sm border border-gray-200">
            <header className="mb-8 border-b-2 border-orange-600 pb-2">
              <h2 className="text-sm font-black uppercase tracking-widest text-white bg-black px-4 py-2 inline-block">
                Category Archive: {params.slug.replace('-', ' ')}
              </h2>
            </header>
            
            <div className="space-y-8">
              {posts.length > 0 ? (
                posts.map((post: any) => (
                  <article key={post._id} className="flex flex-col md:flex-row gap-5 border-b border-gray-100 pb-8 last:border-0 transition-opacity hover:opacity-90">
                    {post.mainImage && (
                      <div className="md:w-1/3 flex-shrink-0 relative h-[180px] overflow-hidden rounded-sm">
                        <Link href={`/post/${post.slug.current}`}>
                          <Image 
                            src={urlFor(post.mainImage).url()} 
                            alt={post.title} 
                            fill 
                            className="object-cover hover:scale-105 transition-transform duration-500" 
                          />
                        </Link>
                      </div>
                    )}
                    <div className="md:w-2/3 flex flex-col justify-center">
                      <h3 className="text-2xl font-black mb-3 leading-tight tracking-tight hover:text-orange-600 transition-colors">
                        <Link href={`/post/${post.slug.current}`}>{post.title}</Link>
                      </h3>
                      <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400 uppercase mb-3">
<span>
  {post?.publishedAt 
    ? new Date(post.publishedAt).toLocaleDateString('en-US') 
    : 'Pending Publication'}
</span>                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 italic">
                        In-depth regulatory and market breakdown of {post.title}. Professional intelligence for the crypto industry.
                      </p>
                    </div>
                  </article>
                ))
              ) : (
                <div className="py-20 text-center">
                  <p className="text-gray-400 font-black uppercase tracking-widest">No expert analysis found in this category yet.</p>
                  <Link href="/" className="text-orange-600 font-bold mt-4 inline-block hover:underline italic">Return to Main Intelligence Feed</Link>
                </div>
              )}
            </div>
          </div>
          <div className="lg:w-1/3"><Sidebar /></div>
        </div>
      </div>
    </div>
  );
}