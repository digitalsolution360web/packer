"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, User, ArrowLeft, Share2, Tag, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { blogPosts } from "../blog/data";

interface FAQItem {
  question: string;
  answer: string;
  list?: string[];
}

// All headings across ALL blog posts - exact match after trim
const HEADINGS = new Set([
  // Bike blog
  "Secure Your Ride: The Ultimate Guide to Bike Transport Service in Jalandhar",
  "The Omni Logistics Advantage: Safe Bike Relocation Protocols",
  "Preparing Your Vehicle for a Smooth Shifting Experience",
  // Hidden charges blog
  "Hidden Charges in Packers and Movers in Jalandhar Explained: How to Protect Your Budget",
  "The Anatomy of Transparency: Understanding Moving Cost Jalandhar",
  "Insurance and Protection: Understanding the \"Handling Fee\" Myth",
  "Timing Your Move: How Peak Days Affect Shifting Expenses",
  // Kapurthala blog
  "The Gold Standard of Packers and Movers in Kapurthala",
  "Seamless Transitions with Movers in Hoshiarpur",
  "Efficient Bike and Car Transport Service in Beas",
  // Jalandhar Cantt blog
  "Introduction",
  "Premium Local Moving Solutions in Jalandhar Cantt",
  "Why Pick Omni as Your Trusted Movers and Packers Jalandhar Cantt?",
  // Jalandhar Packers and Movers blog
  "Ultimate Guide to Choosing Jalandhar Packers and Movers",
  "Stress-Free House Shifting Services in Jalandhar",
  "Efficient Office Shifting Services in Jalandhar",
  "Reliable Local Packers and Movers Jalandhar",
  "Seamless Domestic Relocation Services Jalandhar",
  "Premium Vehicle and Household Shifting Services Jalandhar",
  "Why Trust Professional Movers and Packers Jalandhar?",
  // Car transport blog
  "Best Car Transport Service in Jalandhar – Safe Vehicle Relocation Guide",
  "Understanding Our Specialized Car Carrier Service in Jalandhar",
  "The Convenience of Door-to-Door Car Carrier Jalandhar Services",
  "Why Omni is the Most Reliable Car Transport Company in Jalandhar",
  // House shifting blog
  "Complete Guide to House Shifting in Jalandhar – Costs, Tips & Process",
  "Your Roadmap to a Seamless Shift",
  "1. Cost of House Shifting in Jalandhar",
  "2. How to Shift Home Safely in Jalandhar: Expert Tips",
  "Why Omini is the Right Packers And Movers in Jalandhar",
  // Shared across all blogs
  "Conclusion",
  "FAQs",
]);

export default function BlogDetailPage() {
  const params = useParams();
  const post = blogPosts.find(p => p.slug === params.slug);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!post) {
    return (
      <div className="pt-32 pb-20 container mx-auto px-4 text-center bg-white min-h-screen">
        <h1 className="text-2xl font-bold text-slate-900">Post not found</h1>
        <Link href="/blog" className="text-orange-600 mt-4 inline-block font-bold">← Back to Blog</Link>
      </div>
    );
  }

  // Split by blank lines (handles template literal indentation whitespace on blank lines)
  const rawParagraphs = post.content
    .split(/\n[ \t]*\n/)
    .map(p => p.trim())
    .filter(p => p.length > 1);

  // Split article body from FAQ section
  const faqStartIndex = rawParagraphs.findIndex(p => p.trim() === "FAQs");
  const articleParagraphs = faqStartIndex !== -1 ? rawParagraphs.slice(0, faqStartIndex) : rawParagraphs;
  const faqRaw = faqStartIndex !== -1 ? rawParagraphs.slice(faqStartIndex + 1) : [];

  // Parse FAQ blocks: each FAQ is a question paragraph followed by an answer paragraph (and optionally a list)
  const faqs: FAQItem[] = [];
  let i = 0;
  while (i < faqRaw.length) {
    const current = faqRaw[i].trim();
    
    // Check if Q and A are in the same block (separated by newline instead of blank line)
    const lines = current.split("\n").map(l => l.trim()).filter(Boolean);
    if (lines.length >= 2 && lines[0].endsWith("?")) {
      const question = lines[0];
      const answer = lines.slice(1).join("<br/>");
      faqs.push({ question, answer });
      i++;
      continue;
    }

    if (current.endsWith("?") || (current.includes("?") && current.split("\n").length === 1)) {
      const question = current;
      const next = faqRaw[i + 1] ? faqRaw[i + 1].trim() : "";
      const afterNext = faqRaw[i + 2] ? faqRaw[i + 2].trim() : "";

      // Check if the paragraph after the answer is a list block
      const isListBlock = afterNext && !afterNext.endsWith("?") && !afterNext.includes("?") &&
        (afterNext.includes("\n") || afterNext.startsWith("-") || afterNext.startsWith("•"));

      if (isListBlock) {
        const list = afterNext.split("\n").map(l => l.trim().replace(/^[-•]\s*/, "")).filter(Boolean);
        faqs.push({ question, answer: next, list });
        i += 3;
      } else {
        faqs.push({ question, answer: next });
        i += 2;
      }
    } else {
      i++;
    }
  }

  const renderArticleBody = (items: string[]) => {
    return items.map((para, idx) => {
      const trimmed = para.trim();

      // Bold headings — exact match from the HEADINGS set
      if (HEADINGS.has(trimmed)) {
        return (
          <h2 key={idx} className="text-xl md:text-2xl font-extrabold text-slate-900 mt-10 mb-4 font-outfit leading-tight">
            {trimmed}
          </h2>
        );
      }

      // Bullet/dash list blocks — multiple lines
      const lines = trimmed.split("\n").map(l => l.trim()).filter(Boolean);
      const isList = lines.length >= 2 && lines.every(l => l.startsWith("•") || l.startsWith("-") || /^\d+\./.test(l));
      if (isList) {
        return (
          <div key={idx} className="my-5 pl-4 border-l-2 border-slate-200 space-y-2">
            {lines.map((line, li) => (
              <p key={li} className="text-slate-700 text-sm md:text-base font-semibold leading-relaxed" dangerouslySetInnerHTML={{ __html: line.replace(/^[-•]\s*/, "").replace(/^\d+\.\s*/, "") }} />
            ))}
          </div>
        );
      }

      // Multi-line non-list block (also render line by line)
      if (lines.length >= 2) {
        return (
          <div key={idx} className="my-5 space-y-2">
            {lines.map((line, li) => (
              <p key={li} className="text-slate-600 text-sm md:text-base font-semibold leading-relaxed" dangerouslySetInnerHTML={{ __html: line }} />
            ))}
          </div>
        );
      }

      // Regular paragraph
      return (
        <p key={idx} className="text-slate-600 text-sm md:text-base font-semibold leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: trimmed }} />
      );
    });
  };

  return (
    <div className="pt-24 min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end py-16 bg-slate-900">
        <div className="container mx-auto px-4 relative z-10 text-white">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-orange-400 mb-6 hover:text-orange-300 transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-black font-outfit leading-tight mb-6">{post.title}</h1>
            <div className="flex flex-wrap gap-6 text-slate-300 text-xs font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2"><Calendar size={13} className="text-orange-400" />{post.date}</span>
              <span className="flex items-center gap-2"><User size={13} className="text-orange-400" />{post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-14">

            {/* Main Article */}
            <div className="lg:w-8/12">
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-10 shadow-lg border border-slate-100">
                <Image src={post.img} alt={post.title} fill className="object-cover" />
              </div>
              {/* Body */}
              <div className="space-y-2">
                {renderArticleBody(articleParagraphs)}
              </div>

              {/* FAQ Accordion */}
              {faqs.length > 0 && (
                <div className="mt-14 pt-10 border-t border-slate-100">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8 font-outfit">
                    Frequently Asked Questions (FAQs)
                  </h2>
                  <div className="space-y-3">
                    {faqs.map((faq, index) => {
                      const isOpen = openFaqIndex === index;
                      return (
                        <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden">
                          <button
                            onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                            className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left bg-slate-50 hover:bg-slate-100 transition-colors"
                          >
                            <span className="flex items-start gap-2.5 font-bold text-slate-900 text-sm md:text-base leading-snug">
                              <span className="text-orange-600 font-black shrink-0">Q.</span>
                              {faq.question}
                            </span>
                            <span className={`w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                              <ChevronDown size={16} className={isOpen ? "text-orange-600" : "text-slate-500"} />
                            </span>
                          </button>

                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                key="content"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 py-5 bg-white border-t border-slate-100">
                                  <p className="text-slate-600 text-sm md:text-base font-semibold leading-relaxed pl-6" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                  {faq.list && faq.list.length > 0 && (
                                    <ul className="mt-3 pl-8 space-y-2">
                                      {faq.list.map((item, li) => (
                                        <li key={li} className="flex items-center gap-2 text-slate-700 text-sm font-semibold">
                                          <span className="w-1.5 h-1.5 rounded-full bg-orange-600 shrink-0" />
                                          {item}
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Tags & Share */}
              <div className="mt-14 pt-8 border-t border-slate-100 flex justify-between items-center">
                <div className="flex gap-2 flex-wrap">
                  {[post.category, "Jalandhar"].map(tag => (
                    <span key={tag} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                      <Tag size={11} /> {tag}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-slate-600 font-bold text-sm hover:text-orange-600 transition-colors">
                  <Share2 size={16} /> Share
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-4/12 space-y-10">
              {/* Recent Posts */}
              <div className="bg-slate-50 p-7 rounded-3xl border border-slate-100">
                <h4 className="text-lg font-black text-slate-900 mb-6 font-outfit">Recent Posts</h4>
                <div className="space-y-5">
                  {blogPosts.filter(p => p.slug !== post.slug).slice(0, 4).map(recent => (
                    <Link key={recent.slug} href={`/${recent.slug}`} className="flex gap-4 group">
                      <div className="w-18 h-16 relative rounded-xl overflow-hidden shrink-0 border border-slate-100" style={{ width: 64 }}>
                        <Image src={recent.img} alt={recent.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 line-clamp-2 group-hover:text-orange-600 transition-colors text-sm font-outfit leading-snug">
                          {recent.title}
                        </p>
                        <p className="text-[10px] font-bold text-slate-400 mt-1.5 uppercase tracking-widest">{recent.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-orange-600 p-7 rounded-3xl text-white shadow-xl shadow-orange-600/20">
                <h4 className="text-xl font-black mb-3 font-outfit leading-tight">Need Help Moving?</h4>
                <p className="text-orange-100 text-sm mb-6 font-medium leading-relaxed">
                  Get a free quote from Omni Logistics — the most trusted packers and movers in Jalandhar.
                </p>
                <Link
                  href="/contact"
                  className="block text-center py-3 bg-white text-orange-600 rounded-xl font-black text-sm hover:bg-slate-100 transition-all shadow-md"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
