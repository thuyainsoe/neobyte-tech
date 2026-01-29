"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiStrapi,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiVercel,
  SiDocker,
  SiFramer,
} from "react-icons/si";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Users,
  Code,
  Database,
  BarChart3,
  Cpu,
  Cloud,
  Layers,
  Zap,
  Globe,
} from "lucide-react";
import api from "@/lib/axios";
import { useLanguage } from "@/context/LanguageContext";

// ============================================
// 1. HERO SECTION (City Theme)
// ============================================
// ============================================
// REVISED HERO COMPONENT (2-Column & Rich Background)
// ============================================
interface HeroProps {
  data?: any;
  loading?: boolean;
}

const Hero: React.FC<HeroProps> = ({ data, loading }) => {
  return (
    <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-50">
      {/* 1. Dynamic Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Gradient Blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-neobyte-teal/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-bold text-neobyte-navy mb-6">
              <span className="flex h-2 w-2 rounded-full bg-neobyte-teal animate-pulse"></span>
              {data?.hero_badge || "DIGITAL INNOVATION HUB!"}
            </div>

            <h1 className="text-5xl lg:text-6xl font-black text-neobyte-navy leading-[1.1] mb-6">
              {data?.hero_title_start || "Building the"} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neobyte-teal to-blue-600 relative">
                {data?.hero_title_mid || "Digital City"}
                {/* Underline Decoration */}
                <svg
                  className="absolute w-full h-3 -bottom-2 left-0 text-neobyte-teal opacity-60"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                  />
                </svg>
              </span>{" "}
              {data?.hero_title_end || "of Tomorrow."}
            </h1>

            <p className="text-base text-slate-600 mb-8 leading-relaxed pr-0 lg:pr-10">
              {data?.hero_description ||
                "We construct high-performance digital infrastructure. From skyline-shaping strategies to pixel-perfect designs, we make your business visible in the modern world."}
            </p>

            <div className="flex flex-wrap gap-2 md:gap-4 justify-center sm:justify-start">
              {/* Button 1: Start a Project */}
              <button className="px-6 py-3 md:px-8 md:py-4 text-sm md:text-base bg-neobyte-navy text-white font-bold rounded-xl hover:bg-neobyte-teal hover:text-neobyte-navy transition-all shadow-lg hover:shadow-neobyte-teal/30 flex items-center justify-center gap-2 group w-full sm:w-auto text-nowrap">
                {data?.buttons[0]?.label || "Start a Project"}
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Button 2: View Showreel */}
              <button className="px-6 py-3 md:px-8 md:py-4 text-sm md:text-base bg-white text-neobyte-navy font-bold rounded-xl border border-gray-200 hover:border-neobyte-teal hover:text-neobyte-teal transition-all shadow-sm flex items-center justify-center gap-2 group w-full sm:w-auto text-nowrap">
                <Play className="w-3 h-3 md:w-4 md:h-4 fill-current group-hover:scale-110 transition-transform" />
                {data?.buttons[1]?.label || "View Showreel"}
              </button>
            </div>

            {/* Social Proof / Trust Mini-section */}
            <div className="lg:mt-5 pt-8 border-t border-gray-200 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <Image
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white"
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="User"
                    width={40}
                    height={40}
                  />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-slate-600">
                  +2k
                </div>
              </div>
              <div>
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
                <p className="text-xs font-bold text-slate-500">
                  {data?.trust_text ||
                    "Rated 5 Stars by 2,000+ clients worldwide"}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual / Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-full sm:min-h-[400px] lg:min-h-[600px] flex items-center justify-center lg:justify-end"
          >
            {/* Main Image Container with Abstract Shapes */}
            <div className="relative w-full max-w-lg">
              {/* Decorative Back Shape */}
              <div className="absolute -top-10 -right-10 w-full h-full bg-gradient-to-br from-gray-200 to-slate-100 rounded-[2rem] transform rotate-6 -z-10 border border-white hidden sm:block"></div>

              {/* Main Visual Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src={
                    data?.hero_image?.url
                      ? data.hero_image.url
                      : "/images/hero.png"
                  }
                  alt={data?.hero_image?.alternativeText || "Hero Image"}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover opacity-90"
                  priority
                />
                <div className="absolute inset-0 bg-neobyte-navy/20 mix-blend-multiply"></div>
              </div>

              {/* Floating Card 1: Stats (Growth) */}
              <div
                // Mobile: left-2 top-4 scale-90 (အတွင်းဘက်ကပ်)
                // Desktop: lg:-left-12 lg:top-10 lg:scale-100 (အပြင်ဘက်ထုတ်)
                className="absolute left-2 top-4 scale-90 origin-top-left lg:-left-12 lg:top-10 lg:scale-100 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/50 max-w-[160px] lg:max-w-[180px] z-20"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                    <BarChart3 className="w-4 h-4 lg:w-5 lg:h-5" />
                  </div>
                  <span className="font-bold text-neobyte-navy text-xs lg:text-sm">
                    {data?.hero_stats[0]?.label || "User Engagement"}
                  </span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-[100%]"></div>
                </div>
                <p className="text-[10px] lg:text-xs text-slate-500 mt-2">
                  {data?.hero_stats[0]?.value || "85% Increase in 6 Months"}
                </p>
              </div>

              {/* Floating Card 2: Status */}
              <div
                // Mobile: right-2 bottom-4 scale-90 (အတွင်းဘက်ကပ်)
                // Desktop: lg:-right-8 lg:bottom-20 lg:scale-100 (အပြင်ဘက်ထုတ်)
                className="absolute right-2 bottom-4 scale-90 origin-bottom-right lg:-right-8 lg:bottom-20 lg:scale-100 bg-neobyte-navy p-4 rounded-xl shadow-2xl border border-gray-700 text-white flex items-center gap-4 z-20"
              >
                <div className="relative">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-ping absolute top-0 right-0"></div>
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <Globe className="w-4 h-4 lg:w-5 lg:h-5 text-neobyte-teal" />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] lg:text-xs text-gray-400">
                    {data?.hero_stats[1]?.label || "User Engagement"}
                  </p>
                  <p className="font-bold text-xs lg:text-sm">
                    {data?.hero_stats[1]?.value || "Operational"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// CLIENT TRUST (Infinite Marquee - Faster Speed)
// ============================================
const ClientTrust: React.FC = () => {
  const clients = [
    "TechCorp",
    "GlobalBank",
    "FastRetail",
    "EduSmart",
    "HealthPlus",
    "LogiChain",
    "CyberSys",
    "NetScale",
  ];

  // Create seamless loop
  const marqueeClients = [...clients, ...clients, ...clients];

  return (
    <div className="bg-white py-12 border-b border-gray-100 overflow-hidden group">
      {/* Added 'group' class for hover detection */}

      <div className="max-w-7xl mx-auto px-4 text-center mb-8">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
          Trusted by Industry Leaders
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Left Gradient Mask */}
        <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        {/* Right Gradient Mask */}
        <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Track */}
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: "-33.33%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 10, // <--- Speed up here (Lower number = Faster)
          }}
          // Optional: Pause on hover if you want
          // style={{ cursor: "grab" }}
          // whileHover={{ animationPlayState: "paused" }} // Note: Framer motion handles pause differently, simpler to keep it running or use useAnimation controls.
          // For simple CSS-like pause, we can use a class or just keep it moving.
          // Usually fast marquees look better moving constantly.
        >
          {marqueeClients.map((client, i) => (
            <div
              key={i}
              className="inline-flex items-center mx-6 md:mx-12" // Reduced mobile gap slightly for better flow
            >
              <span className="text-2xl md:text-3xl font-black text-slate-300 hover:text-neobyte-navy transition-colors cursor-default select-none">
                {client}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const TechStackTicker: React.FC = ({ data }: any) => {
  const technologies = [
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "hover:text-black", // Next.js is black
    },
    {
      name: "React",
      icon: SiReact,
      color: "hover:text-[#61DAFB]", // React Blue
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "hover:text-[#3178C6]", // TS Blue
    },
    {
      name: "Strapi",
      icon: SiStrapi,
      color: "hover:text-[#4945FF]", // Strapi Purple
    },
    {
      name: "Tailwind",
      icon: SiTailwindcss,
      color: "hover:text-[#06B6D4]", // Tailwind Cyan
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "hover:text-[#339933]", // Node Green
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      color: "hover:text-[#4169E1]", // Postgres Blue
    },
    {
      name: "Vercel",
      icon: SiVercel,
      color: "hover:text-black", // Vercel Black
    },
    {
      name: "Docker",
      icon: SiDocker,
      color: "hover:text-[#2496ED]", // Docker Blue
    },
    {
      name: "Framer",
      icon: SiFramer,
      color: "hover:text-[#0055FF]", // Framer Blue
    },
  ];

  // Create seamless loop (3 sets)
  const marqueeTech = [
    ...technologies,
    ...technologies,
    ...technologies,
    ...technologies,
    ...technologies,
    ...technologies,
  ];

  return (
    <div className="bg-white py-16 border-b border-gray-100 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 text-center mb-10">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-neobyte-teal animate-pulse"></span>
          Powered by Modern Technologies
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradients for smooth fade effect */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Track */}
        <motion.div
          className="flex items-center"
          initial={{ x: 0 }}
          animate={{ x: "-33.33%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 10, // Adjust speed here
          }}
        >
          {marqueeTech.map((tech, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center mx-8 md:mx-12 group cursor-default"
            >
              {/* ICON AREA */}
              <div
                className={`text-4xl md:text-5xl text-slate-300 transition-colors duration-300 ${tech.color} mb-3`}
              >
                <tech.icon />
              </div>

              {/* TEXT AREA */}
              <span className="text-sm font-semibold text-slate-300 group-hover:text-neobyte-navy transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// ============================================
// 3. ABOUT / AGENCY INTRO
// ============================================
const AboutAgency = ({ data }: any) => {
  return (
    <section
      id="about"
      // Added 'relative' here to act as anchor for the decorative circle
      className="relative py-12 md:py-18 lg:py-24 bg-white overflow-hidden"
    >
      {/* ========================================= */}
      {/* DECORATIVE CIRCLE (Top Right)             */}
      {/* ========================================= */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-neobyte-teal/10 rounded-full pointer-events-none mix-blend-multiply" />

      {/* Optional: Add a second smaller ring for more detail if you like, otherwise remove this line */}
      <div className="absolute -top-10 -right-10 w-60 h-60 border-[20px] border-neobyte-navy/5 rounded-full pointer-events-none" />

      {/* Main Content Container - Added 'relative z-10' to ensure text stays above the circle */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-16 items-center">
          {/* Text Content */}
          <div>
            <span className="text-neobyte-teal font-bold tracking-wider uppercase text-sm">
              {data?.badge || "Who We Are"}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-neobyte-navy mt-4 mb-6 leading-tight">
              {data?.title || "We Are The Best Digital"} <br />{" "}
              {data?.title2 || "Creative Consulting Agency"}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {data?.description ||
                `Neobyte isn't just a development shop; we are your strategic
              partners. We blend creative vision with technical precision to
              solve complex business problems. Our team of experts is dedicated
              to delivering excellence in every pixel and line of code.`}
            </p>

            {/* Stats within text */}
            <div className="grid grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-3xl font-bold text-neobyte-navy">
                  {data?.stats[0]?.label || "250+"}
                </h3>
                <p className="text-slate-500 mt-1">
                  {data?.stats[0]?.value || "Projects Completed"}
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-neobyte-navy">
                  {data?.stats[1]?.label || "15+"}
                </h3>
                <p className="text-slate-500 mt-1">
                  {data?.stats[1]?.value || "Years Experience"}
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="text-neobyte-navy font-bold border-b-2 border-neobyte-teal pb-1 inline-flex items-center gap-2 hover:gap-4 transition-all"
            >
              {data?.button?.label || "Read Our Story"}{" "}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gray-100 rounded-3xl -z-10 transform translate-x-10 -translate-y-10"></div>

            <Image
              src={
                data?.image?.url ? data.image.url : "/images/about-agency.png"
              }
              alt="Office Team"
              width={600}
              height={500}
              className="rounded-2xl shadow-xl w-full object-cover h-[500px]"
            />

            {/* Floating Badge */}
            <div className="absolute bottom-10 -left-10 bg-neobyte-navy text-white p-6 rounded-xl shadow-2xl max-w-xs hidden md:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-neobyte-teal rounded-full text-neobyte-navy">
                  <Users className="w-5 h-5" />
                </div>
                <span className="font-bold text-lg">
                  {data?.stats[2]?.label || "Top Rated"}
                </span>
              </div>
              <p className="text-sm text-gray-300">
                {data?.stats[2]?.value ||
                  "Consistently voted as the top digital agency for startup growth."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
// ============================================
// 4. SERVICES OVERVIEW (Clean Typographic)
// ============================================
const ServicesList = ({ data }: any) => {
  const services = data?.service_cards?.map((service: any, index: any) => ({
    id: `0${index + 1}`,
    title: service.title,
    desc: service.description,
  })) || [
    {
      id: "01",
      title: "Web Design & UI/UX",
      desc: "User-centric interfaces that drive conversion.",
    },
    {
      id: "02",
      title: "E-Commerce Solutions",
      desc: "Scalable stores built on Shopify, Woo, or Custom.",
    },
    {
      id: "03",
      title: "Digital Marketing",
      desc: "SEO, SEM, and content strategies to grow visibility.",
    },
    {
      id: "04",
      title: "Custom Development",
      desc: "Tailored software solutions for unique needs.",
    },
  ];

  return (
    <section
      id="services"
      className="py-12 md:py-18 lg:py-20 bg-neobyte-light/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold text-neobyte-navy">
            {data?.title || "Our Core Services"}
          </h2>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-neobyte-teal font-bold hover:underline"
          >
            {data?.view_all_button?.label || "View All Services"}{" "}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-6">
          {services.map((s: any, idx: any) => (
            <div
              key={idx}
              // Added 'group', 'relative', and 'overflow-hidden'
              className="bg-white p-6 lg:p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
            >
              {/* --- DECORATIVE SHAPE START --- */}
              {/* Top-Right positioning with rotation and teal color */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-neobyte-teal opacity-[0.03] rounded-[2rem] rotate-12 pointer-events-none transition-all duration-500 group-hover:rotate-45 group-hover:scale-110 group-hover:opacity-10"></div>
              {/* --- DECORATIVE SHAPE END --- */}

              {/* Wrapped content in relative z-10 to sit above the shape */}
              <div className="relative z-10">
                <span className="text-4xl font-light text-gray-200 group-hover:text-neobyte-teal transition-colors mb-4 block">
                  {s.id}
                </span>
                <h3 className="text-xl font-bold text-neobyte-navy mb-3 group-hover:translate-x-1 transition-transform">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {s.desc}
                </p>
                <div className="mt-6 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-neobyte-navy group-hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Project Data တွေကို ပုံ ၃ ပုံနဲ့ ကိုက်ညီအောင် ပြင်ဆင်ထားပါတယ်
// const projects = [
//   {
//     id: 1,
//     title: "JBL Audio Experience", // Screenshot 1
//     description:
//       "Immersive e-commerce platform with high-fidelity audio visualization. Designed to showcase product sound quality visually through a modern, dark-themed UI.",
//     stats: [
//       "Custom Audio Visualization",
//       "Seamless Checkout Flow",
//       "Interactive 3D Product View",
//     ],
//     // Deep Indigo/Purple background to match JBL vibe
//     color: "bg-[#1a0b2e]",
//     accent: "bg-orange-500", // Orange glow
//     image: "/images/projects/jbl.png", // ပုံထည့်ရန်
//   },
//   {
//     id: 2,
//     title: "Fototapety Interiors", // Screenshot 2
//     description:
//       "A sophisticated interior design catalog featuring diverse wallpaper collections. Focuses on elegant filtering, mood-based categorization, and inspirational galleries.",
//     stats: [
//       "Advanced Filtering System",
//       "High-Res Gallery Optimization",
//       "CMS Integration",
//     ],
//     // Warm Dark Stone background (White text ပေါ်အောင် Dark Stone သုံးထားပါတယ်)
//     color: "bg-stone-900",
//     accent: "bg-emerald-500", // Green/Nature glow
//     image: "/images/projects/fototapety.png", // ပုံထည့်ရန်
//   },
//   {
//     id: 3,
//     title: "Ethan Carter Portfolio", // Screenshot 3
//     description:
//       "A futuristic personal portfolio for a Senior Web Developer. Built with a cyberpunk aesthetic to demonstrate mastery in React, TypeScript, and modern scalable frameworks.",
//     stats: [
//       "Cyberpunk UI/UX Design",
//       "SEO & Performance Optimized",
//       "React & TypeScript Architecture",
//     ],
//     // Deep Slate/Cyber Blue background
//     color: "bg-slate-950",
//     accent: "bg-cyan-400", // Cyber Blue glow
//     image: "/images/projects/ethancarter.png", // ပုံထည့်ရန်
//   },
// ];

const FeaturedCaseStudy = ({ data }: any) => {
  // 1. Data Transformation
  const projects = useMemo(() => {
    if (!data?.projects || !Array.isArray(data.projects)) return [];

    return data.projects.map((project: any) => ({
      id: project.id,
      title: project.title,
      description: project.description,
      stats: project.stats?.map((el: any) => el?.label) || [],
      color: project.color || "bg-slate-900",
      accent: project.accent || "bg-emerald-500",
      image: project.image?.url || "",
    }));
  }, [data]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // UX Improvement: Pause state

  // 2. Auto Loop Logic with Pause Feature
  useEffect(() => {
    // Projects မရှိရင် သို့မဟုတ် Mouse တင်ထားရင် (isPaused) timer အလုပ်မလုပ်ပါ
    if (projects.length === 0 || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000); // 4000 အစား 5000 (၅ စက္ကန့်) သို့ ပြောင်းထားပါတယ်

    return () => clearInterval(timer);
  }, [projects.length, isPaused]); // isPaused ပြောင်းလဲမှုကိုပါ နားထောင်ပါမယ်

  // Manual Click on Dot
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  // 3. Guard Clause
  if (projects.length === 0) {
    return null;
  }

  const currentProject = projects[currentIndex];

  return (
    <section
      // UX Improvement: Mouse တင်ရင် ရပ်မယ်၊ ဖယ်ရင် ပြန်သွားမယ်
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className={`py-12 md:py-18 lg:py-24 relative overflow-hidden text-white transition-colors duration-700 ease-in-out ${currentProject?.color}`}
    >
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            {/* Left Content */}
            <div>
              <div className="inline-block px-3 py-1 border border-white/30 rounded-full text-xs font-bold tracking-wider mb-6">
                FEATURED PROJECT
              </div>
              <h2 className="text-4xl lg:text-5xl font-black mb-6">
                {currentProject?.title}
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-md min-h-[80px]">
                {currentProject?.description}
              </p>

              <ul className="space-y-3 mb-10">
                {currentProject?.stats.map((stat: any, idx: number) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                    {typeof stat === "string" ? stat : stat?.name || "Feature"}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image Content */}
            <div className="relative mt-10 lg:mt-0">
              <div className="relative z-10 transform lg:rotate-[-5deg] hover:rotate-0 transition-transform duration-700 ease-out">
                {currentProject?.image && (
                  <Image
                    src={currentProject.image}
                    alt={currentProject.title}
                    width={600}
                    height={400}
                    className="rounded-xl shadow-2xl border-4 border-white/10 w-full h-auto object-cover max-h-[400px]"
                  />
                )}
              </div>
              <div
                className={`absolute -bottom-10 -right-10 w-64 h-64 rounded-full blur-3xl -z-0 transition-colors duration-500 opacity-60 ${currentProject?.accent}`}
              ></div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Vertical Dot Pagination */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
          {projects.map((_: any, index: number) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 border border-white ${
                index === currentIndex
                  ? "bg-white scale-125"
                  : "bg-white/20 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// 6. VIDEO / EXPLANATION
// ============================================
// ============================================
// 6. VIDEO / EXPLANATION (2-Column Layout)
// ============================================

const VideoIntro: React.FC<{ data: any }> = ({ data }) => {
  return (
    <section className="relative py-12 md:py-18 lg:py-24 overflow-hidden min-h-[600px] flex items-center">
      {/* --- BACKGROUND VIDEO SECTION START --- */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* 1. Video Element with Blur */}
        {/* blur-[2px] ထည့်လိုက်တာက စာဖတ်ရပိုရှင်းစေပြီး Modern look ရစေပါတယ် */}
        <video
          className="w-full h-full object-cover blur-[2px] scale-105"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/images/video.mp4" type="video/mp4" />
        </video>

        {/* 2. Gradient Overlay (The Magic Fix) */}
        {/* ဘယ်ဘက် (စာရှိတဲ့ဘက်) ကို အမဲ 90% ထားပြီး ညာဘက်ကို 80% လောက်လျှော့ထားပါတယ် */}
        {/* mix-blend-multiply ကိုဖြုတ်ပြီး Normal Gradient သုံးတာက စာအတွက် ပိုစိတ်ချရပါတယ် */}
        <div className="absolute inset-0 bg-gradient-to-r from-neobyte-navy via-neobyte-navy/95 to-neobyte-navy/90 z-10"></div>

        {/* Optional: Dot Pattern Overlay for Texture (Tech Vibe ပိုရအောင်ပါ) */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] z-10"></div>
      </div>
      {/* --- BACKGROUND VIDEO SECTION END --- */}

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* ======================= LEFT COLUMN ======================= */}
          <div className="text-left">
            <span className="text-neobyte-teal font-bold tracking-wider uppercase text-sm mb-2 block [text-shadow:_0_2px_8px_rgb(0_0_0_/_60%)]">
              {/* Behind the Scenes */}
              {data?.sub_title || "Behind the Scenes"}
            </span>

            {/* Drop Shadow ထည့်ထားပါတယ် */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight [text-shadow:_0_4px_12px_rgb(0_0_0_/_60%)]">
              {/* How do we build <br /> your digital product? */}
              {data?.title || "How do we build your digital product?"}
            </h2>

            <p className="text-white/90 text-lg mb-8 leading-relaxed [text-shadow:_0_2px_8px_rgb(0_0_0_/_50%)]">
              {/* It's not just about writing code; it's about understanding your
              vision. See our transparent process of transforming rough concepts
              into functioning, scalable digital products. */}
              {data?.description ||
                "It's not just about writing code; it's about understanding your vision. See our transparent process of transforming rough concepts into functioning, scalable digital products."}
            </p>

            {/* Bullet points */}
            <div className="space-y-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neobyte-teal/20 border border-neobyte-teal/50 flex items-center justify-center text-neobyte-teal backdrop-blur-md">
                  <span className="font-bold text-white text-sm">01</span>
                </div>
                <p className="font-medium text-white [text-shadow:_0_2px_8px_rgb(0_0_0_/_50%)]">
                  {/* Strategic Planning */}
                  {data?.lists[0]?.label || "Strategic Planning"}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neobyte-teal/20 border border-neobyte-teal/50 flex items-center justify-center text-neobyte-teal backdrop-blur-md">
                  <span className="font-bold text-white text-sm">02</span>
                </div>
                <p className="font-medium text-white [text-shadow:_0_2px_8px_rgb(0_0_0_/_50%)]">
                  {/* Agile Development */}
                  {data?.lists[1]?.label || "Agile Development"}
                </p>
              </div>
            </div>
          </div>

          {/* ======================= RIGHT COLUMN (Tech Viz) ======================= */}
          <div className="relative h-[400px] flex items-center justify-center">
            {/* 1. Central Glowing Core */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-32 h-32 bg-neobyte-teal rounded-full blur-[60px] z-0"
            />

            {/* 2. Inner Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-48 h-48 border border-neobyte-teal/30 rounded-full z-10 flex items-center justify-center"
            >
              <div className="absolute top-0 -mt-1.5 w-3 h-3 bg-neobyte-teal rounded-full shadow-[0_0_10px_rgba(20,184,166,0.8)]"></div>
            </motion.div>

            {/* 3. Outer Rotating Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-72 h-72 border border-white/10 rounded-full z-10 flex items-center justify-center border-dashed"
            >
              <div className="absolute bottom-0 -mb-2 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.6)]"></div>
              <div className="absolute top-1/2 right-0 -mr-2 w-2 h-2 bg-neobyte-teal rounded-full"></div>
            </motion.div>

            {/* 4. Center Icon */}
            <div className="relative z-20 bg-neobyte-navy/50 p-6 rounded-2xl border border-neobyte-teal/30 backdrop-blur-md shadow-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-12 h-12 text-neobyte-teal"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
          </div>
          {/* ======================= END RIGHT COLUMN ======================= */}
        </div>
      </div>
    </section>
  );
};

// ============================================
// 7. DEVELOPMENT PROCESS (Timeline)
// ============================================
const DevelopmentProcess = ({ data }: { data: any }) => {
  const steps = useMemo(() => {
    return (
      data?.cards?.map((el: any, index: any) => ({
        num: `0${index + 1}`,
        title: el.label,
        text: el.value,
      })) ||
      ([
        {
          num: "01",
          title: "Discovery",
          text: "We analyze requirements and market gaps.",
        },
        {
          num: "02",
          title: "Design",
          text: "Wireframing and high-fidelity prototyping.",
        },
        {
          num: "03",
          title: "Development",
          text: "Coding with clean, scalable architecture.",
        },
        {
          num: "04",
          title: "Launch",
          text: "Testing, deployment and post-launch support.",
        },
      ] as any)
    );
  }, [data]);

  // const steps = [
  //   {
  //     num: "01",
  //     title: "Discovery",
  //     text: "We analyze requirements and market gaps.",
  //   },
  //   {
  //     num: "02",
  //     title: "Design",
  //     text: "Wireframing and high-fidelity prototyping.",
  //   },
  //   {
  //     num: "03",
  //     title: "Development",
  //     text: "Coding with clean, scalable architecture.",
  //   },
  //   {
  //     num: "04",
  //     title: "Launch",
  //     text: "Testing, deployment and post-launch support.",
  //   },
  // ];

  return (
    <section id="process" className="py-12 md:py-18 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-14 lg:mb-16 text-center">
          <span className="text-neobyte-teal font-bold tracking-wider uppercase">
            {/* Workflow */}
            {data?.sub_title || "Workflow"}
          </span>
          <h2 className="text-3xl font-bold text-neobyte-navy mt-2">
            {/* Simple 4-Step Process */}
            {data?.title || "Simple 4-Step Process"}
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 relative z-10">
            {steps.map((step: any, i: any) => (
              <div
                key={i}
                // 'group' class added here for hover effects
                // 'relative' and 'overflow-hidden' added to contain the background shape
                className="group bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                {/* --- DECORATIVE BACKGROUND SHAPE START --- */}
                <div
                  className="absolute -bottom-8 -right-8 w-40 h-40 bg-neobyte-navy opacity-5 rotate-[120deg] rounded-3xl pointer-events-none transition-transform duration-500 group-hover:rotate-[135deg] group-hover:scale-110"
                  aria-hidden="true"
                ></div>
                {/* --- DECORATIVE BACKGROUND SHAPE END --- */}

                {/* Content Wrapper with relative z-10 to stay above the background shape */}
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-neobyte-navy text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto lg:mx-0 ring-8 ring-slate-50 transition-transform duration-300 group-hover:scale-105">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-neobyte-navy mb-2 text-center lg:text-left">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-center lg:text-left text-sm">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// 8. TECHNOLOGY STACK
// ============================================
const TechStack: React.FC = () => {
  const techs = [
    { icon: Cpu, name: "React" },
    { icon: Code, name: "Next.js" },
    { icon: Database, name: "Node.js" },
    { icon: Cloud, name: "AWS" },
    { icon: Zap, name: "Flutter" },
    { icon: Layers, name: "Python" },
  ];

  return (
    <section className="py-14 md:py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/3">
          <h3 className="text-2xl font-bold text-neobyte-navy">
            Technologies we use
          </h3>
          <p className="text-slate-500 text-sm mt-2">
            We work with the most advanced tools to ensure security and
            scalability.
          </p>
        </div>
        <div className="md:w-2/3 flex flex-wrap justify-center md:justify-end gap-6">
          {techs.map((t, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 p-4 min-w-[100px] hover:bg-gray-50 rounded-lg transition-colors cursor-default"
            >
              <t.icon className="w-8 h-8 text-neobyte-teal" />
              <span className="text-xs font-bold text-slate-700">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// 9. BLOG / INSIGHTS
// ============================================
const Blog: React.FC = () => {
  const posts = [
    {
      title: "The Future of Web 3.0",
      date: "Jan 20, 2024",
      img: "https://picsum.photos/400/250?random=1",
    },
    {
      title: "Optimizing UX for Mobile",
      date: "Jan 15, 2024",
      img: "https://picsum.photos/400/250?random=2",
    },
    {
      title: "Why SEO matters in 2024",
      date: "Jan 10, 2024",
      img: "https://picsum.photos/400/250?random=3",
    },
  ];

  return (
    <section
      id="insight"
      className="py-12 md:py-18 lg:py-24 bg-neobyte-light/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-neobyte-navy">
            Latest Insights
          </h2>
          <a
            href="#"
            className="hidden md:block text-neobyte-navy font-semibold hover:text-neobyte-teal transition-colors"
          >
            View Blog
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="overflow-hidden h-48 relative">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-neobyte-teal uppercase">
                  {post.date}
                </span>
                <h3 className="text-lg font-bold text-neobyte-navy mt-2 mb-4 group-hover:text-neobyte-teal transition-colors">
                  {post.title}
                </h3>
                <a
                  href="#"
                  className="text-sm font-semibold text-slate-500 flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Read More <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// MAIN HOME COMPONENT
// ============================================
const Home: React.FC = () => {
  const [data, setData] = useState<any>(undefined);
  const [loading, setLoading] = useState(true);
  const { locale } = useLanguage();

  const fetchHomePageData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get(
        // ...HomeProjectsSection][populate]=* ပြီးရင် & ခံဖို့လိုပါတယ်
        // & .... =*
        `/api/home-page?populate[herosection][populate]=*&populate[HomeWhoWeAre][populate]=*&populate[HomeCoreServices][populate]=*&populate[HomeProjectsSection][populate][projects][populate]=*&populate[HomeWorkFlow][populate]=*&populate[HomeBehindTheScene][populate]=*&locale=${locale}`,
      );

      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching home page data:", error);
      // Use default/fallback data on error
      setData(undefined);
    } finally {
      setLoading(false);
    }
  }, [locale]);

  useEffect(() => {
    fetchHomePageData();
  }, [fetchHomePageData]);

  return (
    <main>
      <Hero data={data?.herosection} loading={loading} />
      <TechStackTicker />
      <AboutAgency data={data?.HomeWhoWeAre} />
      <ServicesList data={data?.HomeCoreServices} />
      <FeaturedCaseStudy data={data?.HomeProjectsSection} />
      <DevelopmentProcess data={data?.HomeWorkFlow} />
      <VideoIntro data={data?.HomeBehindTheScene} />
      {/* <TechStack /> */}
      <Blog />
    </main>
  );
};

export default Home;
