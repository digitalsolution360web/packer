"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "BLOG", href: "/blog" },
    { name: "GALLERY", href: "/gallery" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-white border-b border-slate-100 ${
        scrolled ? "py-2 shadow-lg" : "py-3 shadow-sm"
      }`}
    >
      <nav className="max-w-[1440px] mx-auto px-4 lg:px-10">
        <div className="flex items-center justify-between">
          {/* Logo on Left */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/Logo.png"
                alt="Omni Logistics"
                width={180}
                height={60}
                className="h-10 lg:h-14 w-auto object-contain transition-transform hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Links and Button grouped on the RIGHT */}
          <div className="flex items-center gap-8">
            {/* Nav Links - Right Aligned */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    className={`px-4 py-2 text-[13px] font-black tracking-tight transition-all rounded-full border-2 ${
                      isActive 
                        ? "border-slate-900 text-slate-900 bg-slate-50" 
                        : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Action Button */}
            <div className="flex items-center gap-4">
              <a 
                href="tel:+917015665848" 
                className="hidden sm:flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-xl text-[12px] font-black uppercase tracking-widest shadow-lg shadow-orange-600/20 hover:bg-orange-700 transition-all active:scale-95"
              >
                <Phone size={14} fill="currentColor" />
                BOOK NOW
              </a>

              {/* Mobile Toggle */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 text-slate-900 bg-slate-50 rounded-xl border border-slate-200"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden shadow-2xl"
          >
            <div className="p-6 space-y-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-6 py-4 text-sm font-black text-slate-900 hover:bg-slate-50 rounded-xl"
                >
                  {link.name}
                </Link>
              ))}
              <div className="p-4 pt-2">
                <a 
                  href="tel:+917015665848" 
                  className="w-full flex items-center justify-center gap-3 py-4 bg-orange-600 text-white rounded-xl font-black text-sm"
                >
                  <Phone size={18} fill="currentColor" />
                  CALL NOW
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
