"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Home, Truck, Box, Car } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function ServicesPage() {
  const services = [
    {
      id: "home-moving",
      title: "Home Moving",
      desc: "Omni Movers offer quick and affordable shifting services to families and individuals to relieve them from the burden of moving involved in relocation.",
      longDesc: "Omni Movers offer quick and affordable shifting services to families and individuals to relieve them from the burden of moving involved in relocation. Every relocation move from simple to most demanding requires experts to handle the service effectively. For this reason, the complete packing process is done under the supervision of experts. Our staff members work tirelessly to ensure that the items are perfectly packed and don’t get damaged during transportation.\n\nHousehold relocation services require an entire package of goods including initial inspection to the final settings at the new location. In order to maintain safety of the goods, we make sure to use superior quality packaging materials such as cartons, papers, lamination, tape, wooden boxes etc.\n\nWe provide tailored services as per the customer’s needs. Partial packing is offered in case the client feels that he can pack everything on his own except for a few articles. Also, we provide the option to select between door to door or door to terminal service. However, the conditions must be clearly specified beforehand.",
      icon: <Home size={28} />,
      img: "/s.jpg",
      points: ["Supervised Packing", "Superior Materials", "Initial Inspection", "Tailored Services"]
    },
    {
      id: "office-moving",
      title: "Office Moving/Shifting",
      desc: "Omni Movers offer quick and affordable shifting services to families and individuals to relieve them from the burden of moving involved in relocation.",
      longDesc: "Omni Movers offer quick and affordable shifting services to families and individuals to relieve them from the burden of moving involved in relocation. Every relocation move from simple to most demanding requires experts to handle the service effectively. For this reason, the complete packing process is done under the supervision of experts. Our staff members work tirelessly to ensure that the items are perfectly packed and don’t get damaged during transportation.\n\nHousehold relocation services require an entire package of goods including initial inspection to the final settings at the new location. In order to maintain safety of the goods, we make sure to use superior quality packaging materials such as cartons, papers, lamination, tape, wooden boxes etc.\n\nWe provide tailored services as per the customer’s needs. Partial packing is offered in case the client feels that he can pack everything on his own except for a few articles. Also, we provide the option to select between door to door or door to terminal service. However, the conditions must be clearly specified beforehand.",
      icon: <Truck size={28} />,
      img: "/s1.jpg",
      points: ["Expert Corporate Move", "Dedicated Moving Team", "Superior Packing", "Tailored Shifting Plans"]
    },
    {
      id: "warehousing",
      title: "Warehousing",
      desc: "We are one of the reliable warehousing and storage service providers. We have adequate space for storage of all types of stuff.",
      longDesc: "We are one of the reliable warehousing and storage service providers. We have adequate space for storage of all types of stuff. We understand the importance of your things and thus our endeavours are focused on keeping them with utmost security. Things are kept safely and delivered to desired destinations while taking all the safety measures.\n\nOur trained team of professionals ensure that the freight is delivered to you with ultra-care. We have expertise in handling distinct types of items. We provide space to store nearly anything from official documents to your precious household items. Our warehouse is located at the safe place, and offers most advanced warehousing and storage services. We render round the clock security service thus ensuring that there is no chance of damage, scratch or loss on your items. We are accountable for all your things.",
      icon: <Box size={28} />,
      img: "/s3.jpg",
      points: ["Utmost Security Storage", "24/7 Surveillance", "Adequate Storage Space", "Accountable Protection"]
    },
    {
      id: "car-shifting",
      title: "Car Shifting",
      desc: "Omni Movers offer quick and affordable shifting services to families and individuals to relieve them from the burden of moving involved in relocation.",
      longDesc: "Omni Movers offer quick and affordable shifting services to families and individuals to relieve them from the burden of moving involved in relocation. Every relocation move from simple to most demanding requires experts to handle the service effectively. For this reason, the complete packing process is done under the supervision of experts. Our staff members work tirelessly to ensure that the items are perfectly packed and don’t get damaged during transportation.\n\nHousehold relocation services require an entire package of goods including initial inspection to the final settings at the new location. In order to maintain safety of the goods, we make sure to use superior quality packaging materials such as cartons, papers, lamination, tape, wooden boxes etc.\n\nWe provide tailored services as per the customer’s needs. Partial packing is offered in case the client feels that he can pack everything on his own except for a few articles. Also, we provide the option to select between door to door or door to terminal service. However, the conditions must be clearly specified beforehand.",
      icon: <Car size={28} />,
      img: "/s4.jpg",
      points: ["Expert Vehicle Transit", "Premium Quality Covers", "Scratch-free Protection", "Door to Door Service"]
    }
  ];

  return (
    <div className="pt-0 min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-slate-950 pt-32 pb-16 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <Image src="/banner.jpg" alt="Background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-black font-outfit"
          >
            Our Professional <span className="text-orange-500">Services</span>
          </motion.h1>
          <p className="mt-4 text-slate-400 max-w-2xl font-medium">
            Tailored relocation and storage solutions designed to meet your specific needs with precision and care.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
              >
                <div className="lg:w-1/2 relative">
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-slate-50 group">
                    <Image 
                      src={service.img} 
                      alt={service.title} 
                      width={600} 
                      height={400} 
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                  </div>
                  <div className={`absolute -bottom-6 ${index % 2 === 1 ? '-left-6' : '-right-6'} w-24 h-24 bg-orange-600 rounded-3xl hidden md:flex items-center justify-center text-white shadow-xl z-20`}>
                    {service.icon}
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <div className="inline-block px-3 py-1 bg-orange-50 text-orange-600 rounded-lg text-[10px] font-black uppercase tracking-widest mb-4">
                    Reliable Solution
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 font-outfit leading-tight">
                    {service.title}
                  </h2>
                  <div className="space-y-6">
                    <p className="text-slate-600 leading-relaxed text-sm whitespace-pre-line font-medium">
                      {service.longDesc}
                    </p>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      {service.points.map((point, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-orange-600 shrink-0" />
                          <span className="text-xs font-bold text-slate-800">{point}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-6">
                      <Link 
                        href="/contact" 
                        className="inline-flex items-center gap-2 text-orange-600 font-black text-sm uppercase tracking-wider group"
                      >
                        Request Service <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-3xl md:text-4xl font-black mb-6 font-outfit">Ready to Move Your World?</h3>
          <p className="mb-10 text-slate-400 max-w-xl mx-auto text-sm font-medium">
            Contact us today for a personalized consultation and a free, no-obligation quote.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 px-10 py-4 bg-orange-600 text-white rounded-full font-black text-lg hover:bg-orange-700 transition-all shadow-2xl"
          >
            Get Expert Help <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
