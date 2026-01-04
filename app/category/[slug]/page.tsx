import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../../../components/Sidebar";

// Zapytanie filtrujące po kategorii
const CATEGORY_POSTS_QUERY = `*[_type == "post" && $slug in categories[]->slug.current] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  "categoryName": categories[0]->title
}`;

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const posts = await client.fetch(CATEGORY_POSTS_QUERY, { slug: params.slug });

  return (
    <div className="bg-[#f1f1f1] min-h-screen">
      <div className="container mx-auto max-w-[1200px] py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3 bg-white p-6 shadow-sm border border-gray-200">
            <div className="mb-8 border-b-2 border-orange-600 pb-2">
              <h2 className="text-sm font-black uppercase tracking-widest text-white bg-black px-4 py-2 inline-block">
                Category: {params.slug}
              </h2>
            </div>
            
            <div className="space-y-8">
              {posts.length > 0 ? (
                posts.map((post: any) => (
                  <article key={post._id} className="flex flex-col md:flex-row gap-5 border-b border-gray-100 pb-8">
                    {post.mainImage && (
                      <div className="md:w-1/3 flex-shrink-0 relative h-[180px]">
                        <Image src={urlFor(post.mainImage).url()} alt={post.title} fill className="object-cover" />
                      </div>
                    )}
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-bold mb-2 hover:text-orange-600">
                        <Link href={`/post/${post.slug.current}`}>{post.title}</Link>
                      </h3>
                      <p className="text-gray-500 text-sm line-clamp-2 italic">Detailed analysis on {params.slug} market trends.</p>
                    </div>
                  </article>
                ))
              ) : (
                <p className="py-10 text-center font-bold text-gray-400 uppercase">No posts found in this category yet.</p>
              )}
            </div>
          </div>
          <div className="lg:w-1/3"><Sidebar /></div>
        </div>
      </div>
    </div>
  );
}