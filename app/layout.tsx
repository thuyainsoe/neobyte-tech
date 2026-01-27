import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/context/Providers";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import CookieConsent from "@/components/CookieConsent";
import ChatBot from "@/components/ChatBot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neobyte - IT Software Services",
  description:
    "Transforming your digital presence with innovative strategies that spotlight your brand in the digital world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-neobyte-teal/30">
            <Navbar />
            {children}
            <Footer />
            <CookieConsent />
            <ChatBot />
          </div>
        </Providers>
      </body>
    </html>
  );
}
