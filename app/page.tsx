import { client } from "../sanity/lib/client";
import { urlFor } from "../sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../components/Sidebar";

// KROK 1: Naprawa odświeżania. To sprawi, że strona sprawdzi nowe posty przy każdym wejściu użytkownika.
export const dynamic = 'force-dynamic';
export const revalidate = 0; 

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  "categoryName": categories[0]->title,
  "categorySlug": categories[0]->slug.current
}`;

export default async function IndexPage() {
  // Dodajemy opcję cache: 'no-store', aby na pewno pobierało nowe dane bez deployu
  const posts = await client.fetch(POSTS_QUERY, {}, { cache: 'no-store' });

  return (
    <div className="bg-[#f1f1f1] min-h-screen font-sans">
      <div className="container mx-auto max-w-[1200px] py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="lg:w-2/3 bg-white p-6 shadow-sm border border-gray-200">
            <div className="mb-8 border-b-2 border-black pb-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-white bg-black px-4 py-2 inline-block">
                Latest News
              </h2>
            </div>
            
            <div className="space-y-8">
              {posts?.length > 0 ? (
                posts.map((post: any) => (
                  <article key={post._id} className="flex flex-col md:flex-row gap-5 border-b border-gray-100 pb-8 last:border-0">
                    {post.mainImage && (
                      <div className="md:w-1/3 flex-shrink-0">
                        <Link href={`/post/${post.slug?.current}`}>
                          <div className="relative h-[200px] w-full overflow-hidden rounded-sm">
                            <Image 
                              src={urlFor(post.mainImage).url()} 
                              alt={post.title}
                              fill
                              className="object-cover hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        </Link>
                      </div>
                    )}

                    <div className="md:w-2/3 flex flex-col">
                      <div className="mb-2">
                        {/* Poprawiony link do kategorii - upewnij się, że masz plik app/category/[slug]/page.tsx */}
                        <Link href={`/category/${post.categorySlug || 'news'}`}>
                          <span className="text-[10px] font-bold uppercase text-white bg-orange-600 px-2 py-0.5 hover:bg-black transition-colors cursor-pointer">
                            {post.categoryName || "Crypto"}
                          </span>
                        </Link>
                      </div>
                      <Link href={`/post/${post.slug?.current}`}>
                        <h3 className="text-xl font-bold leading-tight text-gray-900 hover:text-orange-600 transition-colors mb-3 tracking-tight">
                          {post.title}
                        </h3>
                      </Link>
                      <div className="flex items-center gap-4 text-[11px] text-gray-400 mb-4 font-bold uppercase tracking-wide">
                        <span>BY ADMIN</span>
                        <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US') : 'JAN 4, 2026'}</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 italic">
                        Professional analysis of the latest movements in the {post.categoryName || 'crypto'} market. Grounded in legal standards and market intelligence.
                      </p>
                    </div>
                  </article>
                ))
              ) : (
                <p className="text-center py-10 font-bold text-gray-500">No posts found. Add some in Sanity Studio!</p>
              )}
            </div>
          </div>

          <div className="lg:w-1/3">
            <Sidebar />
          </div>
          
        </div>
      </div>
    </div>
  );
}