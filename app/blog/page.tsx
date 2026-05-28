"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "./data";

export default function BlogPage() {
  return (
    <div className="pt-0 min-h-screen bg-white text-slate-900 selection:bg-orange-600 selection:text-white">
      {/* Page Header */}
      <section className="bg-slate-950 py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full opacity-10">
          <Image src="/blog.jpeg" alt="Background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-black font-outfit leading-tight mt-10"
          >
            Insights & <span className="text-orange-500">Updates</span>
          </motion.h1>
          <p className="mt-4 text-slate-400 max-w-2xl font-medium text-sm md:text-base leading-relaxed">
            Stay updated with the latest trends, guides, and news from the world of logistics and relocation.
          </p>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-2xl transition-all duration-500 border border-slate-100 group flex flex-col h-full"
              >
                <div className="h-64 relative overflow-hidden">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 px-4 py-1.5 bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                    {post.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-orange-500" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User size={12} className="text-orange-500" />
                      {post.author}
                    </div>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 line-clamp-2 font-outfit group-hover:text-orange-600 transition-colors leading-snug">
                    {post.title}
                  </h4>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6 line-clamp-3 font-semibold">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-6 border-t border-slate-50">
                    <Link
                      href={`/${post.slug}`}
                      className="text-sm font-bold text-slate-900 flex items-center justify-between group/btn"
                    >
                      Read More
                      <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover/btn:bg-orange-600 group-hover/btn:text-white transition-all">
                        <ArrowRight size={14} />
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="pb-20 bg-white">
        <div className="container mx-auto px-4 flex justify-center gap-2">
          <button className="w-10 h-10 rounded-xl bg-orange-600 text-white font-bold flex items-center justify-center shadow-lg shadow-orange-600/25">1</button>
          <button className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 font-bold flex items-center justify-center hover:bg-slate-100 transition-all border border-slate-200">2</button>
          <button className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 font-bold flex items-center justify-center hover:bg-slate-100 transition-all border border-slate-200">
            <ChevronRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
