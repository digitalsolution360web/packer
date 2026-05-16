"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Globe, MessageCircle, Send } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-slate-950 py-16 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <Image src="/banner.jpg" alt="Background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center lg:text-left">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-black font-outfit"
          >
            Contact <span className="text-orange-500">Us</span>
          </motion.h1>
          <p className="mt-4 text-slate-400 max-w-2xl font-medium mx-auto lg:mx-0">
            Reach out to us for a seamless relocation experience. Our experts are here to assist you 24/7.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Form Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:w-7/12"
            >
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_10px_50px_rgba(0,0,0,0.03)] border border-slate-100">
                <h2 className="text-2xl font-black text-slate-900 mb-2 font-outfit">Contact Form</h2>
                <p className="text-slate-500 mb-10 text-sm font-medium">Fill the form below to reach us. We will get back to you as soon as possible.</p>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">First Name<span className="text-orange-500">*</span></label>
                      <input type="text" placeholder="Your first name" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-orange-500 transition-colors placeholder:text-slate-400 text-sm font-medium" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Last Name<span className="text-orange-500">*</span></label>
                      <input type="text" placeholder="Your last name" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-orange-500 transition-colors placeholder:text-slate-400 text-sm font-medium" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Contact Number<span className="text-orange-500">*</span></label>
                      <input type="tel" placeholder="Your contact number" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-orange-500 transition-colors placeholder:text-slate-400 text-sm font-medium" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address<span className="text-orange-500">*</span></label>
                      <input type="email" placeholder="Your email address" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-orange-500 transition-colors placeholder:text-slate-400 text-sm font-medium" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Message<span className="text-orange-500">*</span></label>
                    <textarea rows={5} placeholder="Enter your message" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-orange-500 transition-colors placeholder:text-slate-400 text-sm font-medium resize-none"></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-slate-100 px-4 py-3 rounded-xl font-black text-slate-400 tracking-widest italic select-none">T A P N Q</div>
                      <input type="text" placeholder="Captcha" className="w-32 px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-orange-500 text-sm" />
                    </div>
                    <button className="flex-1 w-full sm:w-auto py-4 px-10 bg-slate-950 text-white rounded-2xl font-black text-lg hover:bg-orange-600 transition-all shadow-xl flex items-center justify-center gap-3 group">
                      Submit <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Info Cards Section */}
            <div className="lg:w-5/12 space-y-6">
              {[
                {
                  title: "Contact Number",
                  values: ["+91-9855452352", "+91 7015665848"],
                  icon: <Phone size={24} className="text-orange-600" />,
                  href: "tel:+919855452352"
                },
                {
                  title: "Email Address",
                  values: ["info@packersandmoversjalandhar.com"],
                  icon: <Mail size={24} className="text-orange-600" />,
                  href: "mailto:info@packersandmoversjalandhar.com"
                },
                {
                  title: "Office Address",
                  values: [
                    "150/2 Banda Bahadur Nagar, Near Ram Mandir, Sangat Colony, Jalandhar Punjab 144001",
                    "H-283, Near DAV College, Hathi Gate, Katra Ahluwalia, Amritsar - 143001"
                  ],
                  icon: <MapPin size={24} className="text-orange-600" />,
                  href: "#"
                },
                {
                  title: "Website",
                  values: ["www.packersandmoversjalandhar.com"],
                  icon: <Globe size={24} className="text-orange-600" />,
                  href: "https://www.packersandmoversjalandhar.com"
                }
              ].map((card, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex gap-6 hover:shadow-md transition-shadow group"
                >
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-orange-50 transition-colors">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">{card.title}</h4>
                    <div className="space-y-2">
                      {card.values.map((val, idx) => (
                        <a key={idx} href={card.href} className="block text-slate-800 font-bold hover:text-orange-600 transition-colors leading-relaxed">
                          {val}
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="pt-6">
                <a 
                  href="https://wa.me/919855452352" 
                  className="w-full flex items-center justify-center gap-4 py-5 bg-green-500 text-white rounded-3xl font-black text-xl hover:bg-green-600 transition-all shadow-xl shadow-green-500/20"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={28} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="pb-20 px-4">
        <div className="container mx-auto h-[400px] rounded-[3rem] overflow-hidden border-8 border-slate-50 shadow-2xl relative grayscale hover:grayscale-0 transition-all duration-700">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109066.4011409395!2d75.503378!3d31.326015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a5747a703b5%3A0x2b3ff994d4c85172!2sJalandhar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1715780000000!5m2!1sen!2sin" 
            className="w-full h-full border-0" 
            allowFullScreen={true} 
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
