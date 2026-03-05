"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationPopup from "@/components/ConsultationPopup";
import { PopupProvider } from "@/components/PopupContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PopupProvider>
          <Navbar />
          {children}
          <Footer />
          <ConsultationPopup />
        </PopupProvider>
      </body>
    </html>
  );
}
