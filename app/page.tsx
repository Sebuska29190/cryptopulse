import { client } from "../sanity/lib/client";
import { urlFor } from "../sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../components/Sidebar";

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  "categoryName": categories[0]->title
}`;

export default async function IndexPage() {
  const posts = await client.fetch(POSTS_QUERY);

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
              {posts?.map((post: any) => (
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
                      <span className="text-[10px] font-bold uppercase text-white bg-orange-600 px-2 py-0.5">
                        {post.categoryName || "Crypto"}
                      </span>
                    </div>
                    <Link href={`/post/${post.slug?.current}`}>
                      <h3 className="text-xl font-bold leading-tight text-gray-900 hover:text-orange-600 transition-colors mb-3 tracking-tight">
                        {post.title}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-4 text-[11px] text-gray-400 mb-4 font-bold uppercase tracking-wide">
                      <span>BY ADMIN</span>
                      <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'JAN 4, 2026'}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 italic">
                      Analysis of the latest movements in the {post.categoryName || 'crypto'} market. Detailed breakdown of trends.
                    </p>
                  </div>
                </article>
              ))}
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