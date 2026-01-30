"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Active Link စစ်ဖို့အတွက်

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Active Path Detection
  const pathname = usePathname();

  // Mock Cart Count (Temporarily Disabled)
  // const cartCount = 3;

  // Body Scroll Lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Scroll Detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/our-work" },
    { name: "Blogs", href: "/blogs" },
    // { name: "Store", href: "/store" }, // Temporarily disabled
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg py-3 border-b border-gray-100"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative z-50">
          {/* --- Logo --- */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tighter text-neobyte-navy"
              onClick={() => setIsOpen(false)}
            >
              Neo<span className="text-neobyte-teal">Byte</span>.
            </Link>
          </div>

          {/* --- Desktop Menu --- */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative group ${
                    isActive
                      ? "text-neobyte-teal font-bold"
                      : "text-slate-600 hover:text-neobyte-navy"
                  }`}
                >
                  {link.name}
                  {/* Active Indicator Underline */}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-neobyte-teal transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  ></span>
                </Link>
              );
            })}

            {/* Divider */}
            {/* <div className="h-6 w-px bg-gray-200 mx-2"></div> */}

            {/* --- Cart Icon (Temporarily Disabled) --- */}
            {/* <Link
              href="/cart"
              className="relative p-2 text-slate-600 hover:text-neobyte-teal transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full font-bold shadow-sm animate-in zoom-in">
                  {cartCount}
                </span>
              )}
            </Link> */}

            {/* CTA Button */}
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-neobyte-navy text-white text-sm font-semibold rounded-full hover:bg-neobyte-teal hover:text-neobyte-navy transition-all duration-300 shadow-md flex items-center gap-2 group"
            >
              Let's Talk{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* --- Mobile Menu Toggle & Cart --- */}
          <div className="md:hidden flex items-center gap-3">
            {/* Mobile Cart Icon (Temporarily Disabled) */}
            {/* <Link
              href="/cart"
              className="relative p-2 text-neobyte-navy hover:text-neobyte-teal transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full font-bold shadow-sm">
                  {cartCount}
                </span>
              )}
            </Link> */}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neobyte-navy focus:outline-none p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              {isOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu Overlay --- */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col justify-center md:hidden overflow-hidden h-screen w-screen">
          {/* Decorative Background Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <span className="text-[25vh] font-black opacity-10 text-neobyte-navy/5 -rotate-12 whitespace-nowrap transform scale-150 origin-center">
              NEOBYTE
            </span>
          </div>

          {/* Menu Items Container */}
          <div className="relative z-10 flex flex-col items-start gap-6 w-full px-8 sm:px-12 pt-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-3xl font-bold transition-colors tracking-tight ${
                    isActive
                      ? "text-neobyte-teal"
                      : "text-neobyte-navy hover:text-neobyte-teal"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="mt-6 w-full">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full justify-center px-8 py-4 bg-neobyte-navy text-white text-base font-bold rounded-full hover:bg-neobyte-teal hover:text-neobyte-navy transition-all duration-300 shadow-xl flex items-center gap-3"
              >
                Let's Talk <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
