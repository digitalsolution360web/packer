"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Truck, Home as HomeIcon, Package, Users, ShieldCheck, Clock, MapPin, ArrowRight, Star, ChevronRight, Phone } from "lucide-react";
import { blogPosts } from "./blog/data";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

export default function Home() {
  return (
    <div className="flex flex-col relative overflow-x-hidden">
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919855452352" 
        className="fixed bottom-6 right-6 z-[100] bg-green-500 text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95 group"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.223-3.081c1.517.898 3.088 1.374 4.717 1.375 5.433 0 9.851-4.416 9.853-9.852.001-2.631-1.023-5.102-2.883-6.964-1.859-1.862-4.33-2.887-6.963-2.888-5.433 0-9.851 4.417-9.854 9.853-.001 1.834.508 3.626 1.47 5.197l-1.033 3.771 3.899-1.022c-1.127.698-1.127.698-1.127.698l-.001-.001zM17.471 14.397c-.301-.151-1.782-.879-2.057-.979-.275-.1-.475-.151-.675.151-.199.302-.776 1.002-.95 1.229-.175.226-.35.251-.65.1-.301-.151-1.27-.468-2.42-1.493-.894-.798-1.496-1.783-1.672-2.084-.175-.302-.019-.465.132-.614.135-.135.302-.351.451-.527.05-.058.084-.117.117-.167.101-.151.15-.251.225-.426.075-.175.038-.327-.018-.477-.056-.151-.475-1.15-.65-1.577-.171-.412-.343-.356-.475-.356-.124 0-.275-.01-.425-.01-.15 0-.375.056-.575.276-.2.221-.75.733-.75 1.786 0 1.054.766 2.073.871 2.213.106.14 1.503 2.296 3.642 3.22.508.22 1.057.411 1.41.52.508.158.97.135 1.336.08.406-.06 1.782-.729 2.032-1.433.251-.703.251-1.306.175-1.433-.075-.127-.276-.201-.577-.352z"/></svg>
      </a>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20 lg:pt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner.jpg"
            alt="Omni Logistics Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/20 border border-orange-600/30 text-orange-500 font-bold text-xs mb-6">
                <Star size={12} fill="currentColor" />
                Trusted Packers and Movers in Jalandhar
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight font-outfit">
                Best Movers and <br />
                <span className="text-orange-500">Packers in Jalandhar</span>
              </h1>
              <p className="mt-6 text-base md:text-lg text-slate-300 leading-relaxed max-w-xl">
                Experience the art of stress-free relocation with Omni Logistics. We organize your belongings, pack them safely, and transport them with transparency.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-orange-600 text-white rounded-xl font-bold text-base hover:bg-orange-700 transition-all shadow-lg flex items-center gap-2 group"
                >
                  Get Started
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/services" 
                  className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl font-bold text-base hover:bg-white/20 transition-all"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-8 relative z-20 -mt-8 mx-4 lg:mx-20 rounded-2xl shadow-xl border border-slate-100">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: "Years Experience", value: "10+" },
              { label: "Happy Clients", value: "5000+" },
              { label: "Safe Delivery", value: "100%" },
              { label: "24/7 Support", value: "Online" },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="text-center md:border-r last:border-0 border-slate-100">
                <div className="text-3xl font-black text-orange-600 font-outfit">{stat.value}</div>
                <div className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="about" className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/home.png"
                  alt="Omni Logistics Team"
                  width={550}
                  height={350}
                  className="w-full h-auto object-cover max-h-[400px]"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-orange-600 p-5 rounded-xl shadow-xl z-20 hidden md:flex items-center gap-3">
                <ShieldCheck size={24} className="text-white" />
                <div className="text-white">
                  <div className="font-bold text-sm leading-none">Reliable & Cheap</div>
                  <div className="text-[10px] opacity-80 font-bold uppercase">Packers Jalandhar</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-xs font-black text-orange-600 tracking-[0.2em] uppercase mb-3">Who We Are</h2>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 font-outfit leading-tight">
                Best Packers and Movers in Jalandhar – <span className="text-orange-600">Omni Logistics</span>
              </h3>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base font-medium">
                <p>
                  At Omni Logistics, we have spent years perfecting the art of relocation. 
                  Only the best packers and movers in Jalandhar know how to handle different clients efficiently.
                </p>
                <p>
                  We don't worry about the price at all. Our team takes care of everything without compromising quality. 
                  In short, you get yourself reliable & <span className="text-orange-600 font-bold underline decoration-orange-200">Cheap packers and movers in Jalandhar</span>.
                </p>
                <div className="pt-4 border-l-4 border-orange-500 pl-6 italic font-bold text-slate-950 text-base bg-orange-50/50 py-4 rounded-r-2xl">
                  "Seasoned experts who prioritize your satisfaction above all else."
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-xs font-black text-orange-600 tracking-[0.2em] uppercase mb-2">Our Services</h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-950 font-outfit">Relocation Solutions</h3>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { 
                title: "Home Shifting", 
                desc: "Efficient and trustworthy residential house shifting services without any delay.",
                icon: <HomeIcon size={24} />,
                color: "bg-orange-600"
              },
              { 
                title: "Office Relocation", 
                desc: "Capable force that can do the office relocation job elegantly for IT and banking.",
                icon: <Truck size={24} />,
                color: "bg-blue-600"
              },
              { 
                title: "Packing Services", 
                desc: "High-grade packaging materials like bubble wrap and sturdy boxes for zero breakage.",
                icon: <Package size={24} />,
                color: "bg-slate-900"
              },
              { 
                title: "Loading/Unloading", 
                desc: "Professional loading techniques prioritized to ensure no damage to items.",
                icon: <Users size={24} />,
                color: "bg-orange-500"
              }
            ].map((service, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover={{ y: -8 }}
              >
                <Link href="/services" className="block bg-white p-8 rounded-2xl shadow-sm border border-slate-100 group transition-all h-full">
                  <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-6 text-white shadow-lg`}>
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3 font-outfit">{service.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {service.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-5/12">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-xs font-black text-orange-600 tracking-[0.2em] uppercase mb-2">Presence</h2>
                <h3 className="text-3xl font-black text-slate-950 mb-6 font-outfit">Service Locations</h3>
                <div className="space-y-3">
                  {[
                    { city: "Jalandhar Cantt", zone: "Timely Relocation" },
                    { city: "Kapurthala", zone: "Local Experts" },
                    { city: "Hoshiarpur", zone: "Car Carrier Services" },
                    { city: "Aadampur", zone: "Affordable Shifting" },
                    { city: "Beas", zone: "Logistics Support" },
                  ].map((area, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-orange-600 hover:text-white transition-all group">
                      <span className="font-bold text-sm font-outfit">{area.city}</span>
                      <span className="text-[10px] font-black uppercase opacity-40 group-hover:opacity-100">{area.zone}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="lg:w-7/12 grid grid-cols-2 gap-4 h-[400px]">
              <div className="h-full pt-10">
                <div className="h-full rounded-2xl overflow-hidden relative shadow-lg">
                  <Image src="/home1.jpg" alt="Relocation" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white text-sm font-bold">Safe Packing</div>
                </div>
              </div>
              <div className="h-full pb-10">
                <div className="h-full rounded-2xl overflow-hidden relative shadow-lg">
                  <Image src="/home2.jpg" alt="Logistics" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white text-sm font-bold">Fast Moving</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-950 text-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-xs font-black text-orange-500 tracking-[0.2em] uppercase mb-2">Why Omni?</h2>
              <h3 className="text-3xl md:text-4xl font-black mb-8 font-outfit">Key Advantages</h3>
              <div className="grid gap-6">
                {[
                  { title: "Relocation Professionals", desc: "Known for amazing skills and efficiency." },
                  { title: "High-Quality Materials", desc: "Premium packaging is always our priority." },
                  { title: "Affordable Moving", desc: "Budget will never be an obstacle." },
                  { title: "On-time Pickup", desc: "Maintain punctuality with team effort." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center shrink-0">
                      <ChevronRight size={18} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold mb-1 font-outfit">{item.title}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10"
            >
              <h4 className="text-2xl font-black mb-6 font-outfit text-center">Get a Free Quote</h4>
              <form id="contact" className="space-y-4">
                <input type="text" placeholder="Name" className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:border-orange-500 text-sm" />
                <input type="tel" placeholder="Phone" className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:border-orange-500 text-sm" />
                <select className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:border-orange-500 text-sm text-slate-400">
                  <option className="bg-slate-900">Service Type</option>
                  <option className="bg-slate-900">Home Shifting</option>
                  <option className="bg-slate-900">Office Shifting</option>
                </select>
                <button className="w-full py-4 bg-orange-600 text-white rounded-xl font-black text-base hover:bg-orange-700 transition-all shadow-lg">
                  Submit Now
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-xs font-black text-orange-600 tracking-[0.2em] uppercase mb-2">Insights</h2>
              <h3 className="text-3xl font-black text-slate-950 font-outfit">Latest Updates</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post, i) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <article>
                  <div className="h-48 relative rounded-2xl overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-all">
                    <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="text-[10px] font-bold text-orange-600 uppercase mb-2">{post.date}</div>
                  <h4 className="text-lg font-bold text-slate-900 font-outfit group-hover:text-orange-600 transition-colors line-clamp-2">{post.title}</h4>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-orange-600 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h3 className="text-3xl md:text-5xl font-black mb-6 font-outfit">Ready to Move?</h3>
          <p className="text-base text-orange-100 mb-8 max-w-xl mx-auto font-medium">
            Book your appointment now! Call packers and movers in Jalandhar who value your time and property.
          </p>
          <a href="tel:+919855452352" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-950 rounded-full font-black text-xl hover:bg-slate-100 transition-all shadow-xl">
            <Phone size={24} className="rotate-90 text-orange-600" />
            +91 9855452352
          </a>
        </div>
      </section>
    </div>
  );
}
