import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import MobileStickyContact from "./components/MobileStickyContact";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Packers and Movers in Jalandhar | Omni Logistics",
  description: "Looking for reliable house shifting services in Jalandhar? Omni Logistics offers insured packing, loading, and moving services. Get a free quote today!",
  icons: {
    icon: "/favicon.webp",
  },
  openGraph: {
    title: "Best Packers and Movers in Jalandhar | Omni Logistics",
    description: "Looking for reliable house shifting services in Jalandhar? Omni Logistics offers insured packing, loading, and moving services. Get a free quote today!",
    images: [
      {
        url: "/home1.jpg",
        width: 1200,
        height: 630,
        alt: "Omni Logistics Banner",
      },
    ],
  },
};

import { ModalProvider } from "./context/ModalContext";
import EnquiryModal from "./components/EnquiryModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   const schema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "name": "Packers and Movers Jalandhar",
  "url": "https://www.packersandmoversjalandhar.com/",
  "telephone": "+91-9855452352",
  "alternateName": "Movers & Packers",
  "email": "info@packersandmoversjalandhar.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "150/2 Banda Bahadur Nagar, Near Ram Mandir, Sangat Colony",
    "addressLocality": "Jalandhar",
    "addressRegion": "Punjab",
    "postalCode": "144001",
    "addressCountry": "IN"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "08:00",
    "closes": "22:00"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Jalandhar"
    },
    {
      "@type": "City",
      "name": "Amritsar"
    }
  ],
  "description": "Professional packing, moving, loading, unloading, household shifting, office relocation and transportation services in Jalandhar and nearby areas."
}
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      </head>
      <body className="antialiased bg-white text-slate-900 font-sans p-0 m-0 pb-16 lg:pb-0">
        <ModalProvider>
          <Navbar />
          {children}
          <Footer />
          <FloatingWhatsApp />
          <MobileStickyContact />
          <EnquiryModal />
        </ModalProvider>
      </body>
    </html>
  );
}
