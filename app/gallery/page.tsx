import Image from "next/image";
import { ArrowRight, ImageIcon } from "lucide-react";
import Link from "next/link";

export default function GalleryPage() {
  const galleryImages = [
    { src: "/banner.jpg", alt: "Logistics Fleet", category: "Transport" },
    { src: "/home.png", alt: "Packaging Process", category: "Packaging" },
    { src: "/home1.jpg", alt: "Warehouse Storage", category: "Warehouse" },
    { src: "/home2.jpg", alt: "Loading Truck", category: "Loading" },
    { src: "/s.jpg", alt: "Office Relocation", category: "Relocation" },
    { src: "/s1.jpg", alt: "Secure Transport", category: "Transport" },
    { src: "/s3.jpg", alt: "Home Shifting", category: "Shifting" },
    { src: "/s4.jpg", alt: "Careful Handling", category: "Packaging" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-[#020617] text-white py-24 lg:py-32 overflow-hidden">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-orange-500 text-sm font-medium mb-6">
            <ImageIcon size={16} />
            <span>Our Gallery</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 font-outfit uppercase tracking-tight">
            Glimpse of Our <span className="text-orange-500">Excellence</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Explore our premium logistics, packing, and moving services in action. We handle your belongings with utmost care and professionalism.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-end p-6">
                  <span className="text-orange-500 text-xs font-bold uppercase tracking-wider mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {image.category}
                  </span>
                  <h3 className="text-white text-lg font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {image.alt}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 py-20 text-white text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-6 font-outfit uppercase">
            Ready to experience hassle-free moving?
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">
            Get in touch with us today for a seamless and secure relocation experience.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors group"
          >
            Get a Free Quote
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
