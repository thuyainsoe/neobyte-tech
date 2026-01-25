"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "#work" },
    { name: "Process", href: "#process" },
    { name: "Insight", href: "#insight" },
  ];

  // Animation variants for menu items
  const menuVariants = {
    closed: { opacity: 0, x: -20 }, // Changed from y to x for side slide feel
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

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
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="/"
              className="text-2xl font-extrabold tracking-tighter text-neobyte-navy"
            >
              Neo<span className="text-neobyte-teal">byte</span>.
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-neobyte-navy transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neobyte-teal transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 bg-neobyte-navy text-white text-sm font-semibold rounded-full hover:bg-neobyte-teal hover:text-neobyte-navy transition-all duration-300 shadow-md flex items-center gap-2 group"
            >
              Let's Talk{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
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

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-white z-40 flex flex-col justify-center md:hidden overflow-hidden"
          >
            {/* Decorative Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
              <span className="text-[25vh] font-black text-neobyte-navy/5 opacity-10 -rotate-12 whitespace-nowrap transform scale-150 origin-center">
                NEOBYTE
              </span>
            </div>

            {/* Menu Items Container - ALIGNED LEFT */}
            <div className="relative z-10 flex flex-col items-start gap-6 w-full px-8 sm:px-12">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  custom={i}
                  // @ts-ignore
                  variants={menuVariants}
                  initial="closed"
                  animate="open"
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  // FONT SIZE REDUCED to text-3xl (was 4xl), LEFT ALIGNED
                  className="text-3xl font-bold text-neobyte-navy hover:text-neobyte-teal transition-colors tracking-tight"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                custom={navLinks.length}
                // @ts-ignore
                variants={menuVariants}
                initial="closed"
                animate="open"
                className="mt-6"
              >
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-3 bg-neobyte-navy text-white text-base font-bold rounded-full hover:bg-neobyte-teal hover:text-neobyte-navy transition-all duration-300 shadow-xl flex items-center gap-3"
                >
                  Let's Talk <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
