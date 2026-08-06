"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
// import { Car, Bike, Home, Building2 } from "lucide-react";
import { 
  ClipboardCheck, 
  PackageCheck, 
  Truck, 
  Boxes, 
  Home,
  Building2,
  Car,
  Bike,
  ShieldCheck,
  Clock,
  Headphones
} from "lucide-react";



export default function PricePage() {

    
  return (
    <>
      {/* Page Header */}
    <section className="bg-slate-950 pt-32 pb-16 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                <Image src="/home.png"  alt="Background" fill className="object-cover" />
            </div>
             <div className="container mx-auto px-4 relative z-10">
            <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-black font-outfit max-w-4xl" >
            Packers and Movers Charges in Jalandhar 2026 
            {" "}
            <span className="text-orange-500">
             Jalandhar 2026
            </span>
            </motion.h1>
            
            <p className="mt-5 text-slate-400 max-w-3xl font-medium text-lg">
            Complete 2026 Price Guide
            </p>
         </div>
    </section>



    {/* Intro Section */}

        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                     {/* Left Side Image */}
                      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                         viewport={{ once: true }} className="w-full lg:w-1/2">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50 w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
                             <Image  src="/s.jpg"  alt="Who We Are"  fill 
                                 className="object-cover object-top"  />
                             <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                         </div>
                      </motion.div>

                      {/* Right Side Content */}
                      <motion.div  initial={{ opacity: 0, x: 30 }}  whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} className="w-full lg:w-1/2" >

                        <h2 className="text-xs font-black text-orange-600 tracking-[0.2em] uppercase mb-3">
                            Updated August 2026 | By Omni Logistics Packers and Movers
                         </h2>

                        <h3 className="text-3xl font-black text-slate-900 mb-6 font-outfit">
                             Packers and Movers Charges in Jalandhar: Complete 2026 Price Guide
                        </h3>
                        <div className="space-y-6 text-slate-600 leading-relaxed text-sm font-medium">
                             <p>
                                Planning a move to or from Jalandhar? Knowing the real cost of packers and movers services upfront helps you budget accurately and avoid surprise charges on moving day. This guide covers Omni Logistics' estimated pricing for household shifting, car and bike transportation, and office relocation—broken down by distance and home size—along with what's included and how final quotes are calculated.
                            </p>
                            <p>
                                 If you want to cross-check any mover's credibility before booking, banks and relocating employees often refer to the IBA-approved packers and movers list maintained by the Indian Banks' Association.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>


             { /* Charges Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                 {/* Heading */}
                   <div className="text-center max-w-3xl mx-auto mb-14">
                      <span className="text-orange-600 font-black text-xs uppercase tracking-[0.2em]">
                            Pricing Details
                       </span>

                     <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-3 font-outfit">
                         Packers and Movers Charges in Jalandhar
                    </h2>

                    <p className="mt-4 text-slate-600">
                        Get transparent estimated moving charges based on distance, home size,
                        vehicle type and relocation requirements.
                    </p>
                  </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {/* Household */}
                 <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-4 sm:p-6">
                    <div className="flex items-center gap-3 mb-5">
                         <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600">
                             <Home size={22}/>
                         </div>

                        <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-slate-900">
                            Household Shifting Charges
                        </h3>
                    </div>
                        <p className="text-slate-600 text-sm mb-6">
                        Household shifting costs scale with both home size and distance travelled.
                        </p>
                    <div className="overflow-x-auto rounded-xl border border-slate-200">
                        <table className="w-full text-xs sm:text-sm">
                         <thead>
                        <tr className="bg-slate-900 text-white">
                           <th className="px-2 py-3 text-left"> Distance </th>
                           <th className="px-2 py-3">   1 BHK</th>
                           <th className="px-2 py-3">   2 BHK</th>
                           <th className="px-2 py-3">   3 BHK</th>
                         </tr> 
                         </thead>
                     <tbody>
                         {[
                            [
                            "Up to 460 KM",
                            "₹11,800 – ₹28,500",
                            "₹16,000 – ₹25,800",
                            "₹19,200 – ₹34,100"
                            ],
                            [
                            "460–910 KM",
                            "₹15,500 – ₹30,600",
                            "₹19,000 – ₹35,800",
                            "₹22,400 – ₹39,300"
                            ],
                            [
                            "920–1512 KM",
                            "₹16,700 – ₹38,200",
                            "₹22,000 – ₹40,500",
                            "₹25,600 – ₹49,500"
                            ]

                        ].map((row,i)=>(
                    <tr  key={i} className="border-b last:border-0 hover:bg-orange-50" >
                     {row.map((item,j)=>(
                    <td key={j} className="px-2 py-3 text-slate-700 whitespace-nowrap">
                      {item}
                    </td>
                    ))}
                </tr>
                ))}
                </tbody>
              </table>
            </div>
           </div>





      {/* Car */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-4 sm:p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600">
            <Car size={22}/>
          </div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-slate-900">
            Car Transportation Charges
          </h3>
        </div>
        <SimpleTable
          rows={[
            ["Up to 460 KM","₹6,500 – ₹11,500"],
            ["460–910 KM","₹9,500 – ₹26,800"],
            ["920–1512 KM","₹12,000 – ₹28,500"],
            ["1540–2100 KM","₹15,500 – ₹35,000"],
          ]}
        />
      </div>

      {/* Bike */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-4 sm:p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600">
            <Bike size={22}/>
          </div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-slate-900">
            Bike Transportation Charges
          </h3>
        </div>

        <SimpleTable
          rows={[
            ["Up to 460 KM","₹3,100 – ₹5,700"],
            ["460–910 KM","₹3,700 – ₹7,900"],
            ["920–1512 KM","₹4,600 – ₹8,800"],
            ["1540–2100 KM","₹6,800 – ₹11,600"],
          ]}
        />
      </div>

      {/* Office */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-4 sm:p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600">
            <Building2 size={22}/>
          </div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-slate-900">
            Small Office Shifting Charges
          </h3>
        </div>

        <SimpleTable
          rows={[
            ["Up to 460 KM","₹12,300 – ₹29,200"],
            ["460–910 KM","₹25,400 – ₹42,400"],
            ["920–1512 KM","₹32,700 – ₹51,500"],
            ["1540–2100 KM","₹36,500 – ₹62,800"],
          ]}
        />

      </div>
    </div>
  </div>
</section>


{/* What's Included Section */}
<section className="py-16 bg-slate-50">
  <div className="container mx-auto px-4">
    <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6 sm:p-8 lg:p-10">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl  md:text-4xl font-black text-slate-900 font-outfit">
          What's Included in Our 
          <span className="text-orange-600"> Moving Charges?</span>
        </h2>

        <p className="mt-3 text-slate-600 max-w-3xl">
          Our moving packages include complete relocation support with safe
          packing, transportation, and professional assistance.
        </p>
      </div>

      {/* Points */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

        {[
          "Free moving consultation",
          "High-quality packing materials",
          "Bubble wrap & corrugated sheet protection",
          "Loading & unloading by trained staff",
          "Door-to-door transportation",
          "Household goods relocation",
          "Office relocation services",
          "Car & bike transportation",
          "Safe & secure delivery",
          "Timely pickup & delivery",
          "Professional customer support"

        ].map((item,index)=>(

          <div
            key={index}
            className="flex items-center gap-3 bg-slate-50 rounded-2xl p-4 border border-slate-100 hover:border-orange-200 hover:shadow-md transition-all"
          >
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
              <CheckCircle2 
                size={18} 
                className="text-orange-600"
              />
            </div>
            <span className="text-sm font-bold text-slate-800">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* Factors That Affect Your Final Quote */}
<motion.div
  initial={{opacity:0,y:30}}
  whileInView={{opacity:1,y:0}}
  viewport={{once:true}}
  className="w-full"
>
  <div className="max-w-7xl mx-auto bg-slate-950 rounded-[2.5rem] p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
    {/* Decorative Background */}
    <div className="absolute top-0 right-0 w-52 h-52 bg-orange-600/20 rounded-full blur-3xl"></div>
    <div className="relative z-10">
      <h2 className="text-3xl md:text-4xl font-black text-white font-outfit mb-6 text-center">
        Why Choose Omni Logistics Packers and Movers?
      </h2>
      <p className="text-slate-300 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
        The prices above are estimates meant to give a general idea of moving costs.
        Your final quotation may vary based on:
      </p>
      <div className="grid sm:grid-cols-2 gap-5">

        {[
            "Transparent pricing, no hidden charges",
            "Affordable relocation packages",
            "Experienced packers & movers",
            "Safe packing & transportation",
            "Door-to-door service",
            "Household & office relocation experts",
            "Car & bike transport specialists",
            "Local and all-India shifting services",
            "Trusted packers and movers in Jalandhar with a proven client track record"

        ].map((item,index)=>(

          <div
            key={index}
            className="flex gap-3 items-start bg-white/5 rounded-xl p-4"
          >
            <CheckCircle2
              size={20}
              className="text-orange-500 mt-1 shrink-0"
            />
            <p className="text-slate-200 font-medium">
              {item}
            </p>
          </div>
        ))}
      </div>

      {/* <div className="mt-8 pt-6 border-t border-slate-700">
        <p className="text-slate-300 leading-relaxed text-center">
          For guidance on your rights when hiring any relocation service, see the 
          Consumer Affairs Department, Government of India. For accurate route and 
          distance planning, the Ministry of Road Transport and Highways publishes 
          updated national highway data.
        </p>
      </div> */}
    </div>
  </div>
</motion.div>

{/* Why Choose & Factors Section */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 space-y-20">

    {/* Why Choose Omni */}
    <div className="flex flex-col lg:flex-row items-center gap-12">
      {/* Left Content */}
      <motion.div
        initial={{opacity:0,x:-30}}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}
        className="w-full lg:w-1/2"
      >
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 font-outfit mb-6">
          Why Choose Omni Logistics Packers and Movers?
        </h2>
        <div className="space-y-4">

          {[
            
          "Distance between pickup and destination",
          "Volume of household or office goods",
          "Packing material requirements",
          "Number of floors and lift availability",
          "Vehicle type required",
          "Labor requirements",
          "Additional services such as unpacking, storage, or insurance"
          ].map((item,index)=>(
            <div 
              key={index}
              className="flex gap-3 items-start"
            >
              <CheckCircle2 
                size={20}
                className="text-orange-600 mt-1 shrink-0"
              />
              <p className="text-slate-700 font-medium leading-relaxed">
                {item}
              </p>
            </div>

            
          ))}
           <div className="mt-8 pt-6 border-t border-black-700">
        <p className="text-black-300 leading-relaxed text-left">
          For guidance on your rights when hiring any relocation service, see the 
          Consumer Affairs Department, Government of India. For accurate route and 
          distance planning, the Ministry of Road Transport and Highways publishes 
          updated national highway data.
        </p>
      </div>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{opacity:0,scale:0.95}}
        whileInView={{opacity:1,scale:1}}
        viewport={{once:true}}
        className="w-full lg:w-1/2">
        <div className="relative h-[300px] sm:h-[380px] rounded-3xl overflow-hidden shadow-xl border-8 border-slate-50">
          <Image
            src="/home.png"
            alt="Why Choose Omni Logistics Packers and Movers"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
    </div>

    {/* Factors Affect Quote */}
    <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
    </div>
  </div>
</section>


          {/* FAQ Section */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-5xl">
    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-xs font-black text-orange-600 tracking-[0.2em] uppercase mb-3">
        FAQ
      </h2>
      <h3 className="text-3xl md:text-4xl font-black text-slate-900 font-outfit">
        Frequently Asked Questions
      </h3>
    </div>
    <div className="space-y-4">
      {[
        {
          question:"How much does 1 BHK shifting cost from Jalandhar?",
          answer:"1 BHK shifting starts from ₹11,800 for distances up to 460 KM and can go up to ₹42,900 for distances between 1540–2100 KM, depending on volume of goods."
        },

        {
          question:"How much does it cost to transport a car from Jalandhar?",
          answer:"Car transportation starts at ₹6,500 for short distances (up to 460 KM) and can go up to ₹35,000 for longer routes (1540–2100 KM)."
        },

        {
          question:"Can I book bike transport separately from household shifting?",
          answer:"Yes, standalone bike transport is available starting from ₹3,100 depending on distance."
        },

        {
          question:"Do you offer office relocation services?",
          answer:"Yes, small office shifting is available starting from ₹12,300, with pricing scaling based on distance and volume of equipment/furniture."
        },

        {
          question:"Are packing materials included in the price?",
          answer:"Yes, high-quality packing materials including bubble wrap and corrugated sheet protection are included as standard."
        },

        {
          question:"Is there a free consultation before booking?",
          answer:"Yes, Omni Logistics offers a free moving consultation and site survey before providing your final quote."
        }

      ].map((faq,index)=>{
        const [open,setOpen] = useState(false);
        return(
          <div
            key={index}
            className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm"
          >

            {/* Question */}
            <button
              onClick={()=>setOpen(!open)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left"
            >
              <span className="text-base sm:text-lg font-bold text-slate-900">
                {faq.question}
              </span>
              <ChevronDown
                size={22}
                className={`text-orange-600 transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
            {/* Answer */}
            <div
              className={`px-5 overflow-hidden transition-all duration-300 ${
                open 
                ? "max-h-40 pb-5 opacity-100" 
                : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {faq.answer}
              </p>
            </div>
          </div>
        )
      })}
    </div>
    </div>
</section>



{/* Free Quote CTA Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">

    <div
      className="relative max-w-5xl mx-auto overflow-hidden rounded-[2.5rem] border border-slate-800 p-6 sm:p-10 lg:p-12 shadow-2xl"
      style={{
        backgroundColor: "#020618",
      }}
    >

      {/* Orange Glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(245,73,0,0.45) 0%, rgba(245,73,0,0.22) 22%, rgba(2,6,24,0) 65%)",
        }}
      />

      {/* Top Right Glow */}
      <div
        className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl"
        style={{
          background: "rgba(245,73,0,0.18)",
        }}
      />

      {/* Bottom Left Glow */}
      <div
        className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full blur-3xl"
        style={{
          background: "rgba(245,73,0,0.12)",
        }}
      />

      <div className="relative z-10 text-center">

        <h2 className="text-3xl md:text-4xl font-black text-white font-outfit mb-5">
          Get a Free, Accurate Quote
        </h2>

        <p className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed text-slate-300">
          The prices above are estimates — your exact quotation depends on
          distance, volume, floor access, and any add-on services you need.
          For a customized, no-hidden-cost estimate, contact our team through
          the contact page or browse our full range of services.
        </p>

        <div className="mt-8">
          <a
            href="tel:7015665848"
            className="inline-flex items-center gap-3 rounded-2xl bg-[#f54900] px-8 py-4 text-white font-bold shadow-xl transition-all duration-300 hover:scale-105 hover:bg-orange-600"
          >
            
            <span>Call Now: 70156 65848</span>
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-sm text-slate-400 leading-relaxed">
            Prices listed are estimated charges as of August 2026 and are
            subject to change based on a physical or virtual survey of your
            goods.
          </p>
        </div>

      </div>

    </div>

  </div>
</section>
    </>
  );
}

function PriceCard({icon,title,description,children}:any){

return(
<div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 md:p-8 mb-10">

<div className="flex items-center gap-4 mb-4">

<div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
{icon}
</div>

<h3 className="text-2xl font-black text-slate-900">
{title}
</h3>

</div>
<p className="text-slate-600 mb-8">
{description}
</p>


{children}

</div>
)

}
function SimpleTable({rows}:any){

return(
<div className="overflow-x-auto">
<table className="w-full text-sm">
<thead>
<tr className="bg-slate-900 text-white">
<th className="p-4 text-left">Distance</th>
<th className="p-4 text-left">Estimated Charges</th>
</tr>
</thead>
<tbody>
{rows.map((row:any,i:number)=>(
<tr key={i} className="border-b hover:bg-orange-50">
<td className="p-4 font-semibold text-slate-700">
{row[0]}
</td>
<td className="p-4 text-slate-700">
{row[1]}
</td>
</tr>))}
</tbody>
</table>
</div>)}



