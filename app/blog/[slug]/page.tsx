"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft, Share2, Tag } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { blogPosts } from "../data";

export default function BlogDetailPage() {
  const params = useParams();
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    return (
      <div className="pt-32 pb-20 container mx-auto px-4 text-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link href="/blog" className="text-orange-600 mt-4 inline-block">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Blog Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end py-16">
        <div className="absolute inset-0 z-0">
          <Image src={post.img} alt={post.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-orange-500 mb-6 hover:text-orange-400 transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Insights
          </Link>
          <div className="max-w-4xl">
            <div className="inline-block px-3 py-1 bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-4">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-black font-outfit leading-tight mb-8">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-slate-300 text-xs font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-orange-500" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <User size={14} className="text-orange-500" />
                {post.author}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-8/12">
              <div className="prose prose-slate prose-lg max-w-none">
                <div className="text-slate-600 leading-relaxed space-y-8 whitespace-pre-line">
                  {post.content}
                </div>
              </div>
              
              <div className="mt-16 pt-8 border-t border-slate-100 flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="px-4 py-2 bg-slate-50 rounded-xl text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <Tag size={12} /> Shifting
                  </div>
                  <div className="px-4 py-2 bg-slate-50 rounded-xl text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <Tag size={12} /> Jalandhar
                  </div>
                </div>
                <button className="flex items-center gap-2 text-slate-900 font-bold text-sm hover:text-orange-600 transition-colors">
                  <Share2 size={18} /> Share Post
                </button>
              </div>
            </div>

            <div className="lg:w-4/12 space-y-12">
              {/* Sidebar: Recent Posts */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h4 className="text-xl font-black text-slate-900 mb-8 font-outfit">Recent Updates</h4>
                <div className="space-y-6">
                  {blogPosts.filter(p => p.slug !== post.slug).slice(0, 3).map((recent) => (
                    <Link key={recent.slug} href={`/blog/${recent.slug}`} className="flex gap-4 group">
                      <div className="w-20 h-20 relative rounded-xl overflow-hidden shrink-0">
                        <Image src={recent.img} alt={recent.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-900 line-clamp-2 group-hover:text-orange-600 transition-colors text-sm font-outfit leading-snug">
                          {recent.title}
                        </h5>
                        <div className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-widest">{recent.date}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Sidebar: Newsletter */}
              <div className="bg-orange-600 p-8 rounded-3xl text-white shadow-xl shadow-orange-600/20">
                <h4 className="text-xl font-black mb-4 font-outfit leading-tight">Join Our Newsletter</h4>
                <p className="text-orange-100 text-sm mb-6 font-medium">Get the latest tips and updates delivered to your inbox.</p>
                <form className="space-y-3">
                  <input type="email" placeholder="Your email address" className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:border-white transition-colors placeholder:text-orange-200 text-sm" />
                  <button className="w-full py-3 bg-white text-orange-600 rounded-xl font-black text-sm hover:bg-slate-100 transition-all shadow-lg">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
