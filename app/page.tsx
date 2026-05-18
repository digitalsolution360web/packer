"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Truck,
  Home as HomeIcon,
  Package,
  Users,
  ShieldCheck,
  Clock,
  MapPin,
  ArrowRight,
  Star,
  ChevronRight,
  Phone,
  Settings,
  Warehouse,
  Briefcase,
  Boxes,
  Shield,
  Calendar,
  Sparkles,
  Quote
} from "lucide-react";
import { blogPosts } from "./blog/data";

const fadeInUp = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } },
  viewport: { once: true }
};

export default function Home() {
  const [activeLocation, setActiveLocation] = useState(0);

  const locations = [
    {
      city: "Jalandhar Cantt",
      tagline: "Timely Relocation",
      desc: "There is no discrimination at Omni Packers and Movers. We treat all customers equally, and they get specialized services whenever the situation demands. We are the right choice among the other Packers and movers in Jalandhar Cantt that ensures timely relocation within or from the cant region."
    },
    {
      city: "Kapurthala",
      tagline: "Local Experts & Expertise",
      desc: "Omni understands the requirements and treats everyone equally. If you are in search of the right Movers and packers in Kapurthala near me, then we are the best choice. We have the local experts and their expertise to handle the transition from your old to your new place. As a trusted Packers and movers in Kapurthala, we handle every operation effortlessly."
    },
    {
      city: "Hoshiarpur",
      tagline: "Car Carrier Services",
      desc: "The right service always draws attention from customers. That’s how Omin Packers and movers in Hoshiarpur operate. We keep your vehicle clean and scratch-free during transportation. That’s why we become the best at providing Car carrier services in Hoshiarpur."
    },
    {
      city: "Aadampur",
      tagline: "Affordable Home Shifting",
      desc: "If you are making plans to move from your old place or office, then go with Omni Packers and movers in Aadampur. We are the one that sets the trend to provide affordable home shifting in Aadampur."
    },
    {
      city: "Beas",
      tagline: "First-Class Logistics",
      desc: "As a trusted Packers and movers in Beas, omni is providing first-class logistics support to everyone in Beas. There are no words to say that we are the best, but we achieve success with our efforts. Let’s get the Best packers and movers in Beas with the contact number now!"
    }
  ];

  const services = [
    {
      title: "Home Shifting Services in Jalandhar",
      icon: <HomeIcon className="w-7 h-7 text-orange-500" />,
      paragraphs: [
        "Our home shifting services Jalandhar are efficient and trustworthy for all types of home or office-related relocations. We ensure that clients get specialized and customized Residential house shifting services Jalandhar without any delay from our end.",
        "Also, Omni Packers & Movers ensures every transition is under control. We never go beyond our regulations that may affect our clients’ trust."
      ],
      color: "border-orange-500/20 hover:border-orange-500/80"
    },
    {
      title: "Office Relocation Movers in Jalandhar",
      icon: <Briefcase className="w-7 h-7 text-blue-500" />,
      paragraphs: [
        "There is no way we will give you the headache of transportation. The team is capable enough to handle the office relocation tasks. We have the elite force that can do the job elegantly. Our service for office relocation movers in Jalandhar isn’t a choice, but a commitment to quality.",
        "Whether you own an IT office or offer banking services, the transportation will be easier and effortless with Omni Packers & Movers."
      ],
      color: "border-blue-500/20 hover:border-blue-500/80"
    },
    {
      title: "Packing and Unpacking Services",
      icon: <Package className="w-7 h-7 text-emerald-500" />,
      paragraphs: [
        "Without professionalism, it is impossible to run a successful packing and moving service in Jalandhar. No one can offer the best packing services in Jalandhar as we do.",
        "The reasons are connected with our activities as we use high-grade packaging materials, such as bubble wrap, sturdy boxes, and corrugated sheets. So, users don’t have to worry about the breakage or mishandling of their precious packaged items anymore."
      ],
      color: "border-emerald-500/20 hover:border-emerald-500/80"
    },
    {
      title: "Loading and Unloading Services",
      icon: <Truck className="w-7 h-7 text-purple-500" />,
      paragraphs: [
        "There is no chance of heavy lifting or handling of heavier packaged products without professionalism. Omni prioritizes professional loading techniques and unloading processes. We take care of everything without damaging the internal packaged items."
      ],
      color: "border-purple-500/20 hover:border-purple-500/80"
    }
  ];

  const provisions = [
    { title: "Loading", desc: "Expert staff handling items with maximum safety.", icon: <ArrowRight className="w-5 h-5 text-orange-500" /> },
    { title: "Moving Locally", desc: "Fast and reliable transit within your local region.", icon: <MapPin className="w-5 h-5 text-orange-500" /> },
    { title: "Storage", desc: "Safe, secure, and monitored units for temporary holds.", icon: <Boxes className="w-5 h-5 text-orange-500" /> },
    { title: "Commercial Relocation", desc: "Systematic shifting designed for large & small enterprises.", icon: <Briefcase className="w-5 h-5 text-orange-500" /> },
    { title: "Packaging", desc: "Multi-layered protective materials for high-value items.", icon: <Package className="w-5 h-5 text-orange-500" /> },
    { title: "Ware Housing", desc: "Spacious and clean warehousing with complete surveillance.", icon: <Warehouse className="w-5 h-5 text-orange-500" /> },
  ];

  return (
    <div className="flex flex-col relative overflow-x-hidden font-sans">

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-24 lg:pt-32 pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner.jpg"
            alt="Omni Logistics Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/50" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 font-bold text-xs mb-6 backdrop-blur-sm">
                <Sparkles size={12} fill="currentColor" className="animate-pulse" />
                Trusted & Affordable Logistics Services
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight font-outfit tracking-tight">
                Omni Logistics Packers <br className="hidden sm:inline" />
                and Movers <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">in Jalandhar</span>
              </h1>

              <div className="mt-8 space-y-5 text-slate-200 text-base md:text-lg leading-relaxed max-w-2xl font-medium">
                <p className="border-l-4 border-orange-500 pl-4 bg-white/5 py-2 pr-2 rounded-r-lg backdrop-blur-sm">
                  In this busy world, it's hard to trust any random packers or logistics service providers. However, going with Omni Packers & Movers is a game-changing option. We are best not just by words but by our efforts and success rate. As the Best packers and movers in Jalandhar, there is no way clients get disappointed here.
                </p>
                <p className="text-slate-300">
                  We organize your belongings, pack them safely, and transport them to their desired place by maintaining transparency. That's why many house owners and businessmen choose our office and home shifting services in Jalandhar.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-bold text-base hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg shadow-orange-500/20 flex items-center gap-2 group active:scale-95"
                >
                  Get Started
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-xl font-bold text-base transition-all active:scale-95"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-10 relative z-20 -mt-10 mx-4 lg:mx-20 rounded-2xl shadow-xl border border-slate-100">
        <div className="container mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: "Years Experience", value: "10+" },
              { label: "Happy Clients", value: "5000+" },
              { label: "Safe Delivery", value: "100%" },
              { label: "24/7 Support", value: "Online" },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="text-center md:border-r last:border-0 border-slate-100 py-2">
                <div className="text-3xl md:text-4xl font-black text-orange-500 font-outfit">{stat.value}</div>
                <div className="text-slate-500 font-bold text-[11px] uppercase tracking-widest mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/home.png"
                  alt="Omni Logistics Professional Moving Team Jalandhar"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover max-h-[450px]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-500 to-amber-600 p-6 rounded-xl shadow-xl z-20 hidden md:flex items-center gap-4 border border-orange-400/20">
                <ShieldCheck size={28} className="text-white" />
                <div className="text-white">
                  <div className="font-bold text-base leading-none">Reliable & Cheap</div>
                  <div className="text-[10px] opacity-90 font-black uppercase tracking-wider mt-1">Packers Jalandhar</div>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-100 rounded-full -z-10 blur-xl opacity-80" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 font-black text-xs uppercase tracking-[0.2em] rounded-md mb-4">
                Who We Are
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 font-outfit leading-tight">
                Best Packers and Movers in Jalandhar – <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Omni Logistics</span>
              </h2>

              <div className="space-y-6 text-slate-600 leading-relaxed text-base font-medium">
                <p>
                  At Omni Logistics, we have spent years perfecting the art of relocation. Only the best packers and movers in Jalandhar know how to handle different clients efficiently.
                </p>
                <p>
                  Sometimes, a budget may come to a client’s mind. However, Omni has the perfect solution. Here, we don’t worry about the price at all. Our team takes care of everything without compromising quality.
                </p>
                <p className="border-l-4 border-orange-500 pl-4 py-1.5 bg-slate-50 rounded-r-lg font-bold text-slate-800">
                  Our movers packers Jalandhar team is composed of the finest personnel and trained professionals who use advanced techniques to secure your items. In short, you get yourself reliable & Cheap packers and movers in Jalandhar.
                </p>
                <p>
                  With Omni Logistics, you get the peace of mind that comes from hiring seasoned experts who prioritize your satisfaction above all else.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-block px-3 py-1 bg-orange-500/10 text-orange-400 font-black text-xs uppercase tracking-[0.2em] rounded-md mb-3 border border-orange-500/20">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 font-outfit">How We Work</h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">
              We are backed by a well-defined, managed and integrated process. The entire process is done in front of you, it normally involves step-wise division, which is as follows:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-orange-500/20 via-orange-500/40 to-orange-500/20 -translate-y-8 -z-10" />

            {[
              { num: "1", title: "Book Your Order", desc: "Easily set up and confirm your booking online or via call." },
              { num: "2", title: "Pack Your Things", desc: "High-grade packing materials secure your goods completely." },
              { num: "3", title: "Safe Loading", desc: "Heavy lifting handled by professional loaders & tools." },
              { num: "4", title: "Safe Delivery", desc: "Punctual delivery directly at your doorstep without damages." }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 relative text-center group hover:bg-white/10 transition-all hover:border-orange-500/30"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold mb-3 font-outfit text-white">{step.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 font-black text-xs uppercase tracking-[0.2em] rounded-md mb-3">
              Comprehensive Services
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 font-outfit mb-4">
              Our Packers and Movers Services in Jalandhar
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed font-semibold">
              We offer a comprehensive suite of services designed to cover every aspect of your move.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-white p-8 md:p-10 rounded-2xl shadow-sm border ${service.color} transition-all group duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-6 font-outfit">
                    {service.title}
                  </h3>
                  <div className="space-y-4 text-slate-600 text-sm leading-relaxed font-medium">
                    {service.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                  <Link href="/services" className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 hover:text-orange-700">
                    Learn More
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Provide Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 font-black text-xs uppercase tracking-[0.2em] rounded-md mb-3">
              What We Provide
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 font-outfit mb-4">
              Core Amenities & Logistics Offerings
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
              We ensure that our systematic process helps us to achieve utmost customer satisfaction. Our well-organized process makes it easy to deliver with ease.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {provisions.map((prov, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4 transition-all hover:bg-white hover:shadow-md hover:border-orange-500/20 group"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                  {prov.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base font-outfit mb-1 group-hover:text-orange-600 transition-colors">
                    {prov.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium">
                    {prov.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas Section (Our Presence) */}
      <section className="py-24 bg-slate-950 text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(249,115,22,0.08),transparent_50%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-block px-3 py-1 bg-orange-500/10 text-orange-400 font-black text-xs uppercase tracking-[0.2em] rounded-md mb-3 border border-orange-500/20">
                  Presence
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-4 font-outfit">Locations We Serve</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">
                  We are deeply rooted in the local communities, operating with fully tailored services to meet localized neighborhood regulations and shifting needs. Select a location below to view our comprehensive localized approach:
                </p>

                <div className="space-y-4">
                  {locations.map((area, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveLocation(i)}
                      className={`w-full text-left flex items-center justify-between p-5 rounded-xl transition-all duration-300 border ${activeLocation === i
                        ? "bg-gradient-to-r from-orange-500 to-amber-600 text-white border-transparent shadow-lg shadow-orange-500/10"
                        : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <MapPin size={18} className={activeLocation === i ? "text-white" : "text-orange-500"} />
                        <span className="font-bold text-sm font-outfit">{area.city}</span>
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-wider ${activeLocation === i ? "text-white opacity-85" : "text-slate-500"}`}>
                        {area.tagline}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="relative min-h-[380px] bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl flex flex-col justify-between">
                <div className="absolute top-0 right-0 p-6 opacity-5">
                  <MapPin size={160} className="text-white" />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeLocation}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping" />
                      <span className="text-xs text-orange-400 font-bold uppercase tracking-widest font-outfit">Active Location Details</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-white font-outfit mb-6">
                      Packers and Movers in {locations[activeLocation].city}
                    </h3>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium">
                      {locations[activeLocation].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="pt-8 border-t border-white/10 mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                      <Phone size={16} className="text-orange-400" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Direct Hotline</div>
                      <a href="tel:+917015665848" className="text-sm font-bold text-white hover:text-orange-400 transition-colors">
                        +91 70156 65848
                      </a>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="px-5 py-3 bg-white text-slate-950 font-bold text-xs rounded-xl hover:bg-slate-100 transition-all text-center"
                  >
                    Request Call Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 font-black text-xs uppercase tracking-[0.2em] rounded-md mb-4">
                Why Choose Us?
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 font-outfit">
                Why Choose Omni Logistics Packers and Movers
              </h2>

              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                {[
                  { title: "Experienced relocation professionals", desc: "Known for their amazing skills and efficiency." },
                  { title: "High-quality packing materials", desc: "Premium packaging is always our priority." },
                  { title: "Affordable moving services", desc: "Budget will never be an obstacle during logistics transportation." },
                  { title: "On-time pickup and delivery", desc: "Maintain punctuality with a continuous team effort and monitoring." },
                  { title: "Residential & commercial relocation", desc: "Access every region effortlessly." },
                  { title: "Trusted local movers in Jalandhar", desc: "Become the trusted player in logistics and transportation." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-orange-500/20 transition-all">
                    <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <ChevronRight size={14} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 font-outfit mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed font-semibold">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 bg-orange-50/50 border-l-4 border-orange-500 rounded-r-xl">
                <p className="text-slate-700 text-sm font-bold leading-relaxed">
                  We are thriving as Local Jalandhar movers and packers rated with positive feedback from our clients. It’s time not to think but to hire the Best movers and movers in Jalandhar.
                </p>
              </div>
            </motion.div>

            {/* Quick Quote Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-2xl relative text-white"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Truck size={100} />
              </div>
              <h3 className="text-2xl font-black mb-2 font-outfit">Get a Free Instant Quote</h3>
              <p className="text-slate-400 text-xs mb-6 font-medium">No hidden fees. Absolute transparency guaranteed.</p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1.5 tracking-wider">Your Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-orange-500 text-sm text-white transition-all" required />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1.5 tracking-wider">Phone Number</label>
                  <input type="tel" placeholder="+91 70156 65848" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-orange-500 text-sm text-white transition-all" required />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1.5 tracking-wider">Type of Service</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-slate-850 border border-white/10 focus:outline-none focus:border-orange-500 text-sm text-slate-300 transition-all">
                    <option className="bg-slate-900 text-white">Home Shifting Services</option>
                    <option className="bg-slate-900 text-white">Office Relocation Movers</option>
                    <option className="bg-slate-900 text-white">Packing & Unpacking Services</option>
                    <option className="bg-slate-900 text-white">Loading & Unloading Services</option>
                  </select>
                </div>
                <button type="submit" className="w-full py-4 mt-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-black text-base hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg shadow-orange-500/20 active:scale-95">
                  Submit Request Now
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Testimonials Section */}
      <section className="py-24 bg-slate-50 border-t border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 font-black text-xs uppercase tracking-[0.2em] rounded-md mb-3">
              Our Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 font-outfit mb-4">
              What Our Valued Clients Say
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed font-semibold">
              Read authentic feedback from home owners and office managers who chose Omni Logistics.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "I used Omnimovers service from Jalandhar to Amritsar and was extremely impressed with their outstanding service. They have done entire move with great care. Best thing is that they are courteous and professional. Great job guys.",
                name: "Gurwinder Singh",
                role: "Residential Shifting Client",
                stars: 5
              },
              {
                quote: "I find the service charges are very nominal. I am satisfied with their service. I used the service to shift my office space. They have done a great job.",
                name: "Karan Sharma",
                role: "Office Relocation Client",
                stars: 5
              }
            ].map((test, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-5">
                    {[...Array(test.stars)].map((_, sIdx) => (
                      <Star key={sIdx} size={16} className="text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-orange-200 mb-4" />
                  <p className="text-slate-600 text-sm leading-relaxed font-semibold italic">
                    "{test.quote}"
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <h4 className="font-bold text-slate-900 font-outfit text-sm">{test.name}</h4>
                  <p className="text-slate-500 text-xs mt-0.5">{test.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}

      {/* Conclusion Section */}
      <section className="py-16 bg-slate-900 border-t border-slate-800 text-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl md:text-2xl font-black mb-4 font-outfit text-orange-500">
              Conclusion
            </h3>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-semibold">
              Transportation of your vehicles, products, and other precision amenities won’t be that hard anymore. With Omni Logistics Packers and Movers, you get professional-grade transportation services more safely and affordably. Book your slot now!
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA / Call Section */}
      <section className="py-20 bg-orange-600 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-amber-600" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 font-outfit tracking-tight">
            24/7 Packers and Movers Jalandhar – Call Omni Logistics Today
          </h2>

          <div className="text-base text-orange-100 mb-10 max-w-2xl mx-auto font-bold space-y-4">
            <p>
              Wait no more & book your appointment now! Call packers and movers in Jalandhar who value your time and property. Join the Best relocation services in Jalandhar call today!
            </p>
            <p className="text-white text-lg">
              Want to reach out to us? Get our Jalandhar moving services phone number here!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+917015665848"
              className="inline-flex items-center gap-3 px-8 py-5 bg-slate-950 text-white rounded-xl font-black text-xl hover:bg-slate-900 transition-all shadow-xl active:scale-95"
            >
              <Phone size={22} className="rotate-90 text-orange-500 animate-bounce" />
              +91 70156 65848
            </a>
            <Link
              href="/contact"
              className="px-8 py-5 bg-white text-slate-950 rounded-xl font-bold text-base hover:bg-slate-100 transition-all active:scale-95"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
