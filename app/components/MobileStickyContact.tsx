"use client";

import { PhoneCall } from "lucide-react";
import { useModal } from "../context/ModalContext";

export default function MobileStickyContact() {
  const { openModal } = useModal();
  
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 h-16 bg-white border-t border-slate-100 flex items-stretch shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">
      {/* 1. Enquiry Now Button - Re-themed with Website's Corporate Orange */}
      <button 
        onClick={openModal} 
        className="w-[50%] bg-orange-600 hover:bg-orange-700 text-white font-extrabold flex items-center justify-center text-sm tracking-wider transition-colors uppercase font-outfit px-2 cursor-pointer"
      >
        Enquiry Now
      </button>

      {/* 2. WhatsApp Direct Contact - Renders FontAwesome Brand Icon */}
      <a 
        href="https://wa.me/917015665848" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-[25%] bg-white hover:bg-slate-50 border-r border-slate-100 flex items-center justify-center transition-colors group"
      >
        <div className="w-10 h-10 rounded-full border border-green-500/30 flex items-center justify-center group-hover:border-green-500 transition-colors">
          {/* Exact FontAwesome WhatsApp brand icon class provided by you */}
          <i className="fa-brands fa-whatsapp text-2xl text-green-500 group-hover:scale-110 transition-transform"></i>
        </div>
      </a>

      {/* 3. Phone Direct Contact - Re-themed with Website's Corporate Orange */}
      <a 
        href="tel:+917015665848" 
        className="w-[25%] bg-white hover:bg-slate-50 flex items-center justify-center transition-colors group"
      >
        <div className="w-10 h-10 rounded-full border border-orange-600/30 flex items-center justify-center group-hover:border-orange-600 transition-colors">
          <PhoneCall size={18} className="text-orange-600 group-hover:scale-110 transition-transform" />
        </div>
      </a>
    </div>
  );
}
