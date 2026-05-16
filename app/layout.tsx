import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, X, Menu, Globe, MessageCircle, ArrowUp, CheckCircle2 } from "lucide-react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Omni Logistics - Best Packers and Movers in Jalandhar",
  description: "Omni Logistics offers professional home shifting, office relocation, and packing services in Jalandhar, Kapurthala, Hoshiarpur, and nearby areas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="antialiased bg-white text-slate-900 font-sans p-0 m-0">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
