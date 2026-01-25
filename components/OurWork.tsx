"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, Filter } from "lucide-react";

// ============================================
// 1. WORK HERO SECTION
// ============================================
const WorkHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Background Elements */}
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
          <span className="text-neobyte-teal font-bold tracking-wider uppercase text-sm mb-4 block">
            Our Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-neobyte-navy mb-6 leading-tight">
            Selected works that made <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neobyte-teal to-blue-600">
              Differences.
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
// 2. PORTFOLIO GALLERY (With Filters)
// ============================================
const PortfolioGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web App", "Mobile App", "Website", "Branding"];

  const projects = [
    {
      id: 1,
      title: "FinTrack Pro",
      category: "Web App",
      image: "https://picsum.photos/800/600?random=101",
      desc: "A comprehensive financial dashboard for SME businesses.",
      tags: ["React", "Node.js", "Fintech"],
    },
    {
      id: 2,
      title: "HealthMate",
      category: "Mobile App",
      image: "https://picsum.photos/800/600?random=102",
      desc: "Telemedicine platform connecting patients with doctors instantly.",
      tags: ["Flutter", "Firebase", "Healthcare"],
    },
    {
      id: 3,
      title: "Urban E-Com",
      category: "Website",
      image: "https://picsum.photos/800/600?random=103",
      desc: "Modern e-commerce storefront with AR product preview.",
      tags: ["Next.js", "Shopify", "Retail"],
    },
    {
      id: 4,
      title: "NeoBank Identity",
      category: "Branding",
      image: "https://picsum.photos/800/600?random=104",
      desc: "Complete visual identity rebrand for a digital banking startup.",
      tags: ["Design", "Identity", "UI/UX"],
    },
    {
      id: 5,
      title: "LogiChain",
      category: "Web App",
      image: "https://picsum.photos/800/600?random=105",
      desc: "AI-powered supply chain management system.",
      tags: ["Vue", "Python", "SaaS"],
    },
    {
      id: 6,
      title: "TravelGo",
      category: "Mobile App",
      image: "https://picsum.photos/800/600?random=106",
      desc: "Social travel planner and booking application.",
      tags: ["React Native", "Maps API", "Travel"],
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                activeFilter === filter
                  ? "bg-neobyte-navy text-white border-neobyte-navy shadow-lg"
                  : "bg-white text-slate-500 border-gray-200 hover:border-neobyte-teal hover:text-neobyte-teal"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-neobyte-navy/20 group-hover:bg-neobyte-navy/0 transition-colors duration-500 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl transform scale-50 group-hover:scale-100 transition-transform duration-300">
                      <ArrowUpRight className="w-6 h-6 text-neobyte-navy" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-neobyte-teal font-bold text-xs uppercase tracking-wider">
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-50 text-slate-400 text-[10px] rounded font-medium border border-gray-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-neobyte-navy mb-3 group-hover:text-neobyte-teal transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// 3. STATS STRIP
// ============================================
const WorkStats: React.FC = () => {
  return (
    <section className="py-20 bg-neobyte-navy text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          <div>
            <h3 className="text-4xl font-black text-neobyte-teal mb-2">250+</h3>
            <p className="text-sm text-gray-400">Projects Delivered</p>
          </div>
          <div>
            <h3 className="text-4xl font-black text-white mb-2">98%</h3>
            <p className="text-sm text-gray-400">Client Satisfaction</p>
          </div>
          <div>
            <h3 className="text-4xl font-black text-white mb-2">35+</h3>
            <p className="text-sm text-gray-400">Countries Served</p>
          </div>
          <div>
            <h3 className="text-4xl font-black text-neobyte-teal mb-2">15+</h3>
            <p className="text-sm text-gray-400">Industry Awards</p>
          </div>
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
