"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Phone, MapPin, Package } from "lucide-react";
import { useModal } from "../context/ModalContext";

export default function EnquiryModal() {
  const { isOpen, closeModal } = useModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    fromCity: "",
    toCity: "",
    shiftType: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      if (!res.ok) throw new Error("Failed to send enquiry");
      
      setIsSuccess(true);
      setFormData({ name: "", phone: "", fromCity: "", toCity: "", shiftType: "" });
      
      // Reset after success
      setTimeout(() => {
        setIsSuccess(false);
        closeModal();
      }, 3000);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[200] cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-[500px] bg-white rounded-3xl shadow-2xl z-[201] overflow-hidden"
          >
            {/* Header */}
            <div className="relative h-32 bg-orange-600 flex items-center justify-center overflow-hidden">
               {/* Pattern overlay */}
               <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 L100 0 L100 100 Z" fill="white" />
                  </svg>
               </div>
               
               <div className="relative text-center">
                  <h2 className="text-2xl font-black text-white tracking-tight uppercase">Get a Free Quote</h2>
                  <p className="text-orange-100 text-sm font-medium">Safe & Reliable Moving Services</p>
               </div>

               <button 
                 onClick={closeModal}
                 className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors"
               >
                 <X size={20} />
               </button>
            </div>

            {/* Form */}
            <div className="p-6 md:p-8">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-black text-slate-400 uppercase tracking-wider ml-1">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your Name"
                          className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm font-medium"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-black text-slate-400 uppercase tracking-wider ml-1">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="Mobile Number"
                          className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm font-medium"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Locations */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-black text-slate-400 uppercase tracking-wider ml-1">From (City)</label>
                      <div className="relative">
                        <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input 
                          type="text" 
                          name="fromCity"
                          value={formData.fromCity}
                          onChange={handleChange}
                          required
                          placeholder="Origin"
                          className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm font-medium"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-black text-slate-400 uppercase tracking-wider ml-1">To (City)</label>
                      <div className="relative">
                        <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input 
                          type="text" 
                          name="toCity"
                          value={formData.toCity}
                          onChange={handleChange}
                          required
                          placeholder="Destination"
                          className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm font-medium"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Shifting Type */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-wider ml-1">What are you moving?</label>
                    <div className="relative">
                      <Package className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <select 
                        name="shiftType"
                        value={formData.shiftType}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm font-medium appearance-none"
                      >
                        <option value="">Select Shifting Type</option>
                        <option value="house">House Shifting</option>
                        <option value="office">Office Shifting</option>
                        <option value="car">Car/Bike Transport</option>
                        <option value="storage">Storage/Warehousing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black py-4 rounded-xl shadow-lg shadow-orange-600/20 flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-70 mt-2"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={18} />
                        SEND ENQUIRY NOW
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">Enquiry Sent!</h3>
                  <p className="text-slate-500 font-medium">Our team will contact you within 15 minutes. Thank you for choosing Omni Logistics!</p>
                </motion.div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[2px]">Trusted by 10,000+ Happy Customers</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
