"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  LayoutGrid,
  Layers,
  Smartphone,
  Globe,
  ArrowRight,
} from "lucide-react";

// ============================================
// 1. WORK HERO SECTION
// ============================================
const WorkHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-neobyte-teal/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-neobyte-teal/10 border border-neobyte-teal/20 text-neobyte-teal font-bold tracking-wider uppercase text-xs mb-6">
            Our Masterpieces
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-neobyte-navy mb-6 leading-[1.1]">
            Selected works that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neobyte-teal to-blue-600">
              Made an Impact.
            </span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            We don't just build software; we craft digital experiences. Explore
            how we've helped startups and enterprises transform their ideas into
            reality.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// 2. PORTFOLIO GALLERY (OPTIMIZED 3-GRID)
// ============================================
const PortfolioGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    { label: "All", icon: LayoutGrid },
    { label: "Web App", icon: Layers },
    { label: "Mobile App", icon: Smartphone },
    { label: "Website", icon: Globe },
  ];

  const projects = [
    {
      id: 1,
      title: "FinTrack Pro",
      category: "Web App",
      image: "https://picsum.photos/800/600?random=101",
      desc: "A comprehensive financial dashboard for SME businesses.",
      tags: ["React", "Node.js"],
      bgClass: "bg-[#0f172a]", // Slate-900
      accentClass: "bg-blue-500",
      textClass: "text-blue-300",
    },
    {
      id: 2,
      title: "HealthMate",
      category: "Mobile App",
      image: "https://picsum.photos/800/600?random=102",
      desc: "Telemedicine platform connecting patients with doctors instantly.",
      tags: ["Flutter", "Firebase"],
      bgClass: "bg-[#059669]", // Emerald-600
      accentClass: "bg-emerald-300",
      textClass: "text-emerald-200",
    },
    {
      id: 3,
      title: "Urban E-Com",
      category: "Website",
      image: "https://picsum.photos/800/600?random=103",
      desc: "Modern e-commerce storefront with AR product preview.",
      tags: ["Next.js", "Shopify"],
      bgClass: "bg-[#7c3aed]", // Violet-600
      accentClass: "bg-purple-400",
      textClass: "text-purple-200",
    },
    {
      id: 4,
      title: "NeoBank Identity",
      category: "Branding",
      image: "https://picsum.photos/800/600?random=104",
      desc: "Complete visual identity rebrand for a digital banking startup.",
      tags: ["Design", "Identity"],
      bgClass: "bg-[#1e1b4b]", // Indigo-950
      accentClass: "bg-indigo-500",
      textClass: "text-indigo-300",
    },
    {
      id: 5,
      title: "LogiChain",
      category: "Web App",
      image: "https://picsum.photos/800/600?random=105",
      desc: "AI-powered supply chain management system.",
      tags: ["Vue", "Python"],
      bgClass: "bg-[#ea580c]", // Orange-600
      accentClass: "bg-orange-400",
      textClass: "text-orange-200",
    },
    {
      id: 6,
      title: "TravelGo",
      category: "Mobile App",
      image: "https://picsum.photos/800/600?random=106",
      desc: "Social travel planner and booking application.",
      tags: ["React Native", "Maps API"],
      bgClass: "bg-[#0e7490]", // Cyan-700
      accentClass: "bg-cyan-400",
      textClass: "text-cyan-200",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.label}
              onClick={() => setActiveFilter(filter.label)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                activeFilter === filter.label
                  ? "bg-neobyte-navy text-white border-neobyte-navy shadow-lg"
                  : "bg-slate-50 text-slate-500 border-slate-100 hover:border-neobyte-teal hover:text-neobyte-teal"
              }`}
            >
              <filter.icon className="w-4 h-4" />
              {filter.label}
            </button>
          ))}
        </div>

        {/* GRID UPDATE: 
            - Changed to lg:grid-cols-3 for 3 columns on desktop 
            - Reduced gaps for tighter layout
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout="position" // Minimal layout animation to prevent heavy glitches
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                // DESIGN UPDATE:
                // - Uses original 'bgClass' (Colorful cards)
                // - Changed h-[500px] to h-[420px] (Better for 3-grid)
                // - Changed rounded-[2.5rem] to rounded-2xl (Less rounded)
                className={`group relative h-[420px] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ${project.bgClass} text-white`}
              >
                {/* 1. Background Effects (Same as requested) */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay"></div>
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent pointer-events-none"></div>

                {/* 2. Top Content */}
                <div className="absolute top-0 left-0 p-6 z-20 w-full">
                  <div className="flex justify-between items-start mb-4">
                    <div
                      className={`inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-wider ${project.textClass}`}
                    >
                      {project.category}
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Title & Desc - Font sizes adjusted for 3-grid width */}
                  <h3 className="text-2xl font-black mb-2 leading-tight tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm max-w-xs leading-relaxed line-clamp-2">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-bold uppercase tracking-wider bg-black/20 text-white/90 px-2 py-1 rounded-md backdrop-blur-sm border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3. Image (Rotated & Floating) 
                    - Kept the rotated design
                    - Used CSS Transform instead of Framer Motion for better performance
                */}
                <div className="absolute bottom-0 right-0 w-[85%] h-[55%] z-10 transition-transform duration-500 ease-out translate-y-6 translate-x-6 group-hover:translate-y-3 group-hover:translate-x-3">
                  {/* Glowing Blob */}
                  <div
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full blur-[60px] opacity-60 ${project.accentClass}`}
                  ></div>

                  {/* Image with CSS Rotate */}
                  <div className="relative w-full h-full transform rotate-6 group-hover:rotate-0 transition-transform duration-500 ease-out origin-bottom-right">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover rounded-tl-xl shadow-[-10px_-10px_30px_rgba(0,0,0,0.3)] border-t-4 border-l-4 border-white/10"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-slate-100 text-neobyte-navy font-bold rounded-xl hover:bg-neobyte-navy hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg">
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

// ============================================
// 3. STATS STRIP
// ============================================
const WorkStats: React.FC = () => {
  return (
    <section className="py-20 bg-neobyte-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {[
            { label: "Projects Delivered", value: "250+" },
            { label: "Client Satisfaction", value: "98%" },
            { label: "Countries Served", value: "35+" },
            { label: "Industry Awards", value: "15+" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="relative pl-6 border-l-2 border-neobyte-teal/30"
            >
              <h3 className="text-4xl lg:text-5xl font-black text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-sm font-medium text-neobyte-teal uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// 4. CTA
// ============================================
const WorkCTA: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-neobyte-navy mb-6">
          Start your own success story
        </h2>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">
          Ready to build something amazing? Whether it's a mobile app, a
          website, or a complete brand overhaul, we're here to help.
        </p>
        <a
          href="#contact"
          className="inline-flex px-8 py-4 bg-neobyte-navy text-white font-bold rounded-lg hover:bg-neobyte-teal hover:text-neobyte-navy transition-all shadow-lg items-center gap-2 group"
        >
          Estimate Project{" "}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

// ============================================
// MAIN WORK PAGE COMPONENT
// ============================================
const Work: React.FC = () => {
  return (
    <main>
      <WorkHero />
      <PortfolioGallery />
      <WorkStats />
      <WorkCTA />
    </main>
  );
};

export default Work;
