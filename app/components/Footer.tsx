"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Clock, ArrowUp, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#020617] text-white pt-24 pb-12 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <Image src="/Logo.png" alt="Logo" width={180} height={60} className="brightness-0 invert h-12 w-auto" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-medium">
              At Omni Logistics, we provide hassle-free shifting services using premium materials. Your trust is our priority.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
                { icon: <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg> },
                { icon: <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.012 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.012 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.012-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
              ].map((social, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-orange-600 hover:-translate-y-1 transition-all">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-black mb-8 font-outfit uppercase tracking-widest text-orange-500">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Latest Blog", href: "/blog" },
                { name: "Contact Us", href: "/contact" },
                { name: "Privacy Policy", href: "#" },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-all flex items-center gap-2 group text-sm font-medium">
                    <span className="w-1.5 h-1.5 bg-orange-600 rounded-full transition-all group-hover:w-4"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services Column */}
          <div>
            <h4 className="text-lg font-black mb-8 font-outfit uppercase tracking-widest text-orange-500">Our Services</h4>
            <ul className="space-y-4">
              {["Home Shifting", "Office Relocation", "Warehousing", "Car Transportation", "Bike Shifting"].map((service, i) => (
                <li key={i} className="text-slate-400 hover:text-white transition-colors cursor-pointer text-sm font-medium flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-orange-600" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h4 className="text-lg font-black mb-8 font-outfit uppercase tracking-widest text-orange-500">Contact Us</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-600/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-orange-500" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-500 mb-1">Phone Number</p>
                  <a href="tel:+917015665848" className="text-slate-200 font-bold hover:text-orange-500 transition-colors">
                    +91 70156 65848
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-600/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-orange-500" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-500 mb-1">Email Support</p>
                  <a href="mailto:info@packersandmoversjalandhar.com" className="text-slate-200 font-bold hover:text-orange-500 transition-colors text-xs break-all">
                    info@packersandmoversjalandhar.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-medium">
            © 2026 <span className="text-white">Omni Logistics</span>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8">
            <span className="text-slate-500 text-xs flex items-center gap-2">
              <Clock size={14} className="text-orange-600" />
              Available 24/7
            </span>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-orange-600 transition-all group"
            >
              <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
