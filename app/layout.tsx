"use client";

import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navy gradient background that follows navbar */}
        <div className={`fixed left-0 right-0 hero-navy-gradient z-40 transition-all duration-300 ${isScrolled ? 'top-0 h-20' : 'top-6 h-32'
          }`}></div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
