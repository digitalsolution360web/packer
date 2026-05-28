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
