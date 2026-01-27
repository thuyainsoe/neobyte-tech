"use client";

import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image"; // Image optimization အတွက်

// Language Data
const languages = [
  {
    code: "en",
    label: "EN",
    flag: "https://flagcdn.com/w40/us.png",
    name: "English",
  },
  {
    code: "mm",
    label: "MM",
    flag: "https://flagcdn.com/w40/mm.png",
    name: "Myanmar",
  },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Language State
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
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
              Neo<span className="text-neobyte-teal">byte</span>.
            </Link>
          </div>

          {/* --- Desktop Menu --- */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-neobyte-navy transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neobyte-teal transition-all group-hover:w-full"></span>
              </Link>
            ))}

            {/* --- Desktop Language Switcher --- */}
            <div className="relative" ref={langDropdownRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 hover:border-neobyte-teal transition-colors bg-white/50 backdrop-blur-sm"
              >
                <img
                  src={currentLang.flag}
                  alt={currentLang.label}
                  className="w-5 h-5 rounded-full object-cover"
                />
                <span className="text-xs font-bold text-neobyte-navy">
                  {currentLang.label}
                </span>
                <ChevronDown
                  className={`w-3 h-3 text-slate-500 transition-transform ${isLangOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown Menu */}
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang);
                        setIsLangOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-slate-50 transition-colors ${
                        currentLang.code === lang.code
                          ? "bg-slate-50 text-neobyte-teal font-semibold"
                          : "text-slate-600"
                      }`}
                    >
                      <img
                        src={lang.flag}
                        alt={lang.label}
                        className="w-5 h-5 rounded-full object-cover"
                      />
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-neobyte-navy text-white text-sm font-semibold rounded-full hover:bg-neobyte-teal hover:text-neobyte-navy transition-all duration-300 shadow-md flex items-center gap-2 group"
            >
              Let's Talk{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* --- Mobile Menu Toggle Button --- */}
          <div className="md:hidden flex items-center gap-4">
            {/* Optional: Mobile Language Switcher (Visible on bar OR inside menu - I put it inside menu below, but you can put it here too) */}

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
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-bold text-neobyte-navy hover:text-neobyte-teal transition-colors tracking-tight"
              >
                {link.name}
              </Link>
            ))}

            <hr className="w-full border-gray-100 my-2" />

            {/* Mobile Language Switcher */}
            <div className="flex flex-col gap-3">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                Select Language
              </span>
              <div className="flex gap-4">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setCurrentLang(lang)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                      currentLang.code === lang.code
                        ? "border-neobyte-teal bg-neobyte-teal/10 text-neobyte-navy font-bold shadow-sm"
                        : "border-gray-200 text-slate-500 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={lang.flag}
                      alt={lang.label}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span className="text-sm">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>

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
