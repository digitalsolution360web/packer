"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Award, Users, CheckCircle2, ArrowRight, Truck, Package } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-slate-950 py-16 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <Image src="/home.png" alt="Background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-black font-outfit"
          >
            About <span className="text-orange-500">Us</span>
          </motion.h1>
          <p className="mt-4 text-slate-400 max-w-2xl font-medium">
            Discover our journey and why we are the most trusted name in packers and movers in Jalandhar.
          </p>
        </div>
      </section>

      {/* Main Content (Who We Are) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50">
                <Image src="/home.png" alt="Who We Are" width={600} height={450} className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-xs font-black text-orange-600 tracking-[0.2em] uppercase mb-3">Who We Are</h2>
              <h3 className="text-3xl font-black text-slate-900 mb-6 font-outfit">Welcome To Movers & Packers</h3>
              <div className="space-y-6 text-slate-600 leading-relaxed text-sm font-medium">
                <p>
                  We provide hassle-free shifting services and use the best packaging material. We strive to surpass the customer expectations in delivering the service. Loading and unloading services are provided by a highly dedicated team of professionals.
                </p>
                <p>
                  Our primary concern is customer satisfaction and rendering the best services. It is all possible due to our dedicated team of professionals who make the shifting simpler and convenient. Our skilled staff members ensure that the goods are packed and moved meticulously. Till date we have managed to successfully handle many residential and commercial relocations.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-100">
                {[
                  "Extensive years of experience",
                  "Round the clock support service",
                  "Trusted service providers",
                  "Trusted service providers"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-orange-600 shrink-0" />
                    <span className="text-sm font-bold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-black text-orange-600 tracking-[0.2em] uppercase mb-2">Our Strengths</h2>
            <h3 className="text-3xl font-black text-slate-950 font-outfit">Why Choose us</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "The door to door shifting service",
                desc: "We understand the importance of the door to door shifting service for a long distance location. Thus our professionals ensure that all of your stuff is picked up from your doorstep and delivered safely to your new place.",
                icon: <Truck className="text-white" size={24} />,
                color: "bg-orange-600"
              },
              {
                title: "High quality packing material",
                desc: "One of the critical things in shifting is the packing material. To deliver a quality service we bring our own high-quality packing material and use multiple layers to protect the goods during the transport.",
                icon: <Package className="text-white" size={24} />,
                color: "bg-slate-900"
              },
              {
                title: "We render complete solution",
                desc: "We have a highly skilled workforce who have extensive experience in handling heavy loads and delicate stuff. This may include a TV unit, double door fridge, glass door cupboards, crockery etc.",
                icon: <Award className="text-white" size={24} />,
                color: "bg-orange-500"
              },
              {
                title: "24/7 Support",
                desc: "We have a highly skilled workforce who have extensive experience in handling heavy loads and delicate stuff. This may include a TV unit, double door fridge, glass door cupboards, crockery etc.",
                icon: <Clock className="text-white" size={24} />,
                color: "bg-blue-600"
              },
              {
                title: "Affordable Service",
                desc: "We have a highly skilled workforce who have extensive experience in handling heavy loads and delicate stuff. This may include a TV unit, double door fridge, glass door cupboards, crockery etc.",
                icon: <Users className="text-white" size={24} />,
                color: "bg-purple-600"
              },
              {
                title: "Fast & Safe Service",
                desc: "We have a highly skilled workforce who have extensive experience in handling heavy loads and delicate stuff. This may include a TV unit, double door fridge, glass door cupboards, crockery etc.",
                icon: <ShieldCheck className="text-white" size={24} />,
                color: "bg-green-600"
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
              >
                <div className={`w-12 h-12 ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 font-outfit">{feature.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-semibold">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-black mb-6 font-outfit">Experience a Stress-Free Move</h3>
          <p className="mb-10 text-orange-50/80 max-w-xl mx-auto text-sm font-medium">
            Our team is ready to help you with your next relocation. Get a professional quote today.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-950 text-white rounded-full font-black text-base hover:bg-black transition-all shadow-2xl"
          >
            Get Free Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
