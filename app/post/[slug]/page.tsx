import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Sidebar from "../../../components/Sidebar";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  mainImage,
  publishedAt,
  body,
  "category": categories[0]->title
}`;

const components = {
  block: {
    h2: ({children}: any) => <h2 className="text-2xl font-black mt-8 mb-4 uppercase tracking-tight text-black border-l-4 border-orange-600 pl-4">{children}</h2>,
    normal: ({children}: any) => <p className="text-[17px] leading-[1.8] mb-6 text-gray-800">{children}</p>,
    blockquote: ({children}: any) => (
      <blockquote className="border-l-4 border-black bg-gray-50 px-6 py-4 my-8 italic text-lg text-gray-700 shadow-sm">{children}</blockquote>
    ),
  },
  types: {
    image: ({value}: any) => (
      <div className="my-10 relative w-full h-[300px] md:h-[450px] overflow-hidden rounded-sm border border-gray-100">
        <Image src={urlFor(value).url()} alt="Crypto Analysis" fill className="object-cover" />
      </div>
    ),
  },
};

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await client.fetch(POST_QUERY, { slug: params.slug });

  if (!post) return <div className="p-10 text-center font-bold">Article not found.</div>;

  return (
    <div className="bg-[#f1f1f1] min-h-screen">
      <div className="container mx-auto max-w-[1200px] py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <article className="lg:w-2/3 bg-white p-6 md:p-10 shadow-sm border border-gray-200">
            <header className="mb-8 border-b border-gray-100 pb-8">
              <div className="mb-4">
                <span className="text-[10px] font-black uppercase text-white bg-orange-600 px-3 py-1 tracking-widest">{post.category || "Crypto"}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black leading-tight text-black mb-6 tracking-tighter">{post.title}</h1>
              <div className="flex items-center gap-6 text-[12px] text-gray-400 font-bold uppercase tracking-wide">
                <span>BY ADMIN</span>
                <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'JAN 4, 2026'}</span>
              </div>
            </header>
            {post.mainImage && (
              <div className="relative h-[250px] md:h-[450px] w-full mb-10 overflow-hidden shadow-inner bg-gray-50">
                <Image src={urlFor(post.mainImage).url()} alt={post.title} fill className="object-cover" priority />
              </div>
            )}
            <div className="content-area">
              <PortableText value={post.body} components={components} />
            </div>
          </article>
          <div className="lg:w-1/3">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}