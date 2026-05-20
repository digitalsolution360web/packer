"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Globe, MessageCircle, Send } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setFormData({ firstName: "", lastName: "", phone: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

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
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">First Name<span className="text-orange-500">*</span></label>
                      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="Your first name" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-orange-500 transition-colors placeholder:text-slate-400 text-sm font-medium" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Last Name<span className="text-orange-500">*</span></label>
                      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Your last name" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-orange-500 transition-colors placeholder:text-slate-400 text-sm font-medium" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Contact Number<span className="text-orange-500">*</span></label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Your contact number" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-orange-500 transition-colors placeholder:text-slate-400 text-sm font-medium" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address<span className="text-orange-500">*</span></label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email address" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-orange-500 transition-colors placeholder:text-slate-400 text-sm font-medium" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Message<span className="text-orange-500">*</span></label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Enter your message" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-orange-500 transition-colors placeholder:text-slate-400 text-sm font-medium resize-none"></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                    <button type="submit" disabled={status === "loading"} className="w-full sm:w-auto py-4 px-10 bg-slate-950 text-white rounded-2xl font-black text-lg hover:bg-orange-600 transition-all shadow-xl flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed">
                      {status === "loading" ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>Submit <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                      )}
                    </button>
                  </div>
                  
                  {/* Status Messages */}
                  <AnimatePresence>
                    {status === "success" && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-6 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <p className="text-green-800 font-bold text-sm leading-relaxed">Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                      </motion.div>
                    )}
                    {status === "error" && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shrink-0">
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </div>
                        <p className="text-red-800 font-bold text-sm leading-relaxed">Oops! Something went wrong. Please try again or contact us directly.</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </motion.div>

            {/* Info Cards Section */}
            <div className="lg:w-5/12 space-y-6">
              {[
                {
                  title: "Contact Number",
                  items: [
                    { val: "+91 70156 65848", href: "tel:+917015665848" },
                    { val: "+91 98554 52352", href: "tel:+919855452352" }
                  ],
                  icon: <Phone size={24} className="text-orange-600" />,
                },
                {
                  title: "Email Address",
                  items: [
                    { val: "info@packersandmoversjalandhar.com", href: "mailto:info@packersandmoversjalandhar.com" }
                  ],
                  icon: <Mail size={24} className="text-orange-600" />,
                },
                {
                  title: "Head Office",
                  items: [
                    { val: "150/2 Banda Bahadur Nagar, Near Ram Mandir, Sangat Colony, Jalandhar Punjab 144001", href: "#" }
                  ],
                  icon: <MapPin size={24} className="text-orange-600" />,
                },
                {
                  title: "Branch Office",
                  items: [
                    { val: "H-283, Near DAV College, Hathi Gate, Katra Ahluwalia, Amritsar - 143001", href: "#" }
                  ],
                  icon: <MapPin size={24} className="text-orange-600" />,
                },
                {
                  title: "Website",
                  items: [
                    { val: "www.packersandmoversjalandhar.com", href: "https://www.packersandmoversjalandhar.com" }
                  ],
                  icon: <Globe size={24} className="text-orange-600" />,
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
                      {card.items.map((item, idx) => (
                        <a key={idx} href={item.href} className="block text-slate-800 font-bold hover:text-orange-600 transition-colors leading-relaxed">
                          {item.val}
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="pt-6">
                <a 
                  href="https://wa.me/917015665848" 
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
        <div className="container mx-auto h-[450px] rounded-[3rem] overflow-hidden border-8 border-slate-50 shadow-2xl relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.7678757624853!2d75.56423649999999!3d31.3377831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5b756eeb65bd%3A0xa345020f721f7614!2sOmni%20Logistics%20Packers%20and%20Movers%20Jalandhar%20%7C%20Best%20Packers%20and%20Movers%20in%20Jalandhar%20%7C%20Movers%20and%20Packers%20In%20Jalandhar!5e0!3m2!1sen!2sin!4v1779096472373!5m2!1sen!2sin" 
            className="w-full h-full border-0" 
            allowFullScreen={true} 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
