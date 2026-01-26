"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  Play,
  CheckCircle2,
  Users,
  Code,
  Database,
  Shield,
  BarChart3,
  Send,
  Mail,
  MapPin,
  Phone,
  Cpu,
  Cloud,
  Layers,
  Zap,
  PenTool,
  MoveRight,
  Globe,
} from "lucide-react";

// ============================================
// 1. HERO SECTION (City Theme)
// ============================================
// ============================================
// REVISED HERO COMPONENT (2-Column & Rich Background)
// ============================================
const Hero: React.FC = () => {
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
              DIGITAL INNOVATION HUB
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-neobyte-navy leading-[1.1] mb-6">
              Building the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neobyte-teal to-blue-600 relative">
                Digital City
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
              of Tomorrow.
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed pr-0 lg:pr-10">
              We construct high-performance digital infrastructure. From
              skyline-shaping strategies to pixel-perfect designs, we make your
              business visible in the modern world.
            </p>

            <div className="flex flex-wrap gap-2 md:gap-4 justify-center sm:justify-start">
              {/* Button 1: Start a Project */}
              <button className="px-6 py-3 md:px-8 md:py-4 text-sm md:text-base bg-neobyte-navy text-white font-bold rounded-xl hover:bg-neobyte-teal hover:text-neobyte-navy transition-all shadow-lg hover:shadow-neobyte-teal/30 flex items-center justify-center gap-2 group w-full sm:w-auto text-nowrap">
                Start a Project
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Button 2: View Showreel */}
              <button className="px-6 py-3 md:px-8 md:py-4 text-sm md:text-base bg-white text-neobyte-navy font-bold rounded-xl border border-gray-200 hover:border-neobyte-teal hover:text-neobyte-teal transition-all shadow-sm flex items-center justify-center gap-2 group w-full sm:w-auto text-nowrap">
                <Play className="w-3 h-3 md:w-4 md:h-4 fill-current group-hover:scale-110 transition-transform" />
                View Showreel
              </button>
            </div>

            {/* Social Proof / Trust Mini-section */}
            <div className="lg:mt-5 pt-8 border-t border-gray-200 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white"
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="User"
                  />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-slate-600">
                  +2k
                </div>
              </div>
              <div>
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
                <p className="text-xs font-bold text-slate-500">
                  Trusted by global brands
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
                <img
                  src="/images/hero.png"
                  alt="City Architecture"
                  className="w-full h-auto object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-neobyte-navy/20 mix-blend-multiply"></div>
              </div>

              {/* Floating Card 1: Stats (Growth) */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                // Mobile: left-2 top-4 scale-90 (အတွင်းဘက်ကပ်)
                // Desktop: lg:-left-12 lg:top-10 lg:scale-100 (အပြင်ဘက်ထုတ်)
                className="absolute left-2 top-4 scale-90 origin-top-left lg:-left-12 lg:top-10 lg:scale-100 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/50 max-w-[160px] lg:max-w-[180px] z-20"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                    <BarChart3 className="w-4 h-4 lg:w-5 lg:h-5" />
                  </div>
                  <span className="font-bold text-neobyte-navy text-xs lg:text-sm">
                    Growth
                  </span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-[85%]"></div>
                </div>
                <p className="text-[10px] lg:text-xs text-slate-500 mt-2">
                  +124% Engagement
                </p>
              </motion.div>

              {/* Floating Card 2: Status */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                  delay: 1,
                }}
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
                    System Status
                  </p>
                  <p className="font-bold text-xs lg:text-sm">Operational</p>
                </div>
              </motion.div>
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

// ============================================
// 3. ABOUT / AGENCY INTRO
// ============================================
const AboutAgency: React.FC = () => {
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
              Who We Are
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-neobyte-navy mt-4 mb-6 leading-tight">
              We Are The Best Digital <br /> Creative Consulting Agency
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Neobyte isn't just a development shop; we are your strategic
              partners. We blend creative vision with technical precision to
              solve complex business problems. Our team of experts is dedicated
              to delivering excellence in every pixel and line of code.
            </p>

            {/* Stats within text */}
            <div className="grid grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-3xl font-bold text-neobyte-navy">250+</h3>
                <p className="text-slate-500 mt-1">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-neobyte-navy">15+</h3>
                <p className="text-slate-500 mt-1">Years Experience</p>
              </div>
            </div>

            <a
              href="#contact"
              className="text-neobyte-navy font-bold border-b-2 border-neobyte-teal pb-1 inline-flex items-center gap-2 hover:gap-4 transition-all"
            >
              Read Our Story <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gray-100 rounded-3xl -z-10 transform translate-x-10 -translate-y-10"></div>

            <img
              src="/images/about-agency.png"
              alt="Office Team"
              className="rounded-2xl shadow-xl w-full object-cover h-[500px]"
            />

            {/* Floating Badge */}
            <div className="absolute bottom-10 -left-10 bg-neobyte-navy text-white p-6 rounded-xl shadow-2xl max-w-xs hidden md:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-neobyte-teal rounded-full text-neobyte-navy">
                  <Users className="w-5 h-5" />
                </div>
                <span className="font-bold text-lg">Top Rated</span>
              </div>
              <p className="text-sm text-gray-300">
                Consistently voted as the top digital agency for startup growth.
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
const ServicesList: React.FC = () => {
  const services = [
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
            Our Core Services
          </h2>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-neobyte-teal font-bold hover:underline"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-6">
          {services.map((s, idx) => (
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

// 1. Data Setup - Project ၃ ခုစာ Data တွေ ဒီမှာပြင်ပါ
const projects = [
  {
    id: 1,
    title: "SATS HK",
    description:
      "A revolutionary logistics platform connecting Hong Kong's busiest trade routes with AI-driven route optimization.",
    stats: [
      "40% Increase in Efficiency",
      "Real-time Tracking System",
      "Seamless Mobile Experience",
    ],
    image: "/images/projects/project-2.png",
    color: "bg-rose-600", // Background color
    btnColor: "text-rose-600", // Button text color
    accent: "bg-rose-500", // Decorative blob color
  },
  {
    id: 2,
    title: "FinTech Pro",
    description:
      "Empowering banking institutions with blockchain security and lightning-fast transaction processing.",
    stats: [
      "2M+ Daily Transactions",
      "Zero Security Breaches",
      "Integrated Crypto Wallet",
    ],
    image: "/images/projects/project-1.png",
    color: "bg-blue-900", // Navy Blue
    btnColor: "text-blue-900",
    accent: "bg-blue-700",
  },
  {
    id: 3,
    title: "EcoGrow App",
    description:
      "Smart agriculture solution using IoT sensors to monitor crop health and automate irrigation systems.",
    stats: [
      "30% Water Saved",
      "Remote Farm Monitoring",
      "AI Harvest Prediction",
    ],
    image: "/images/projects/project-3.png",
    color: "bg-emerald-600", // Green
    btnColor: "text-emerald-600",
    accent: "bg-emerald-500",
  },
];

const FeaturedCaseStudy: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 2. Auto Loop Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000); // Bro လိုချင်တဲ့ 2sec ဆိုရင် ဒီမှာ 2000 ပြောင်းပါ (UX အရ 4000-5000 လောက်ထားတာ ပိုကောင်းပါတယ်)

    return () => clearInterval(timer);
  }, []);

  // Manual Click on Dot
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    // Background Color Transition wrapper
    <section
      className={`py-12 md:py-18 lg:py-24 relative overflow-hidden text-white transition-colors duration-700 ease-in-out ${projects[currentIndex].color}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* AnimatePresence for Fade In/Out Effect */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex} // Key change triggers animation
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
                {projects[currentIndex].title}
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-md h-24">
                {projects[currentIndex].description}
              </p>

              <ul className="space-y-3 mb-10">
                {projects[currentIndex].stats.map((stat, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                    {stat}
                  </li>
                ))}
              </ul>

              <button
                className={`px-8 py-4 bg-white font-bold rounded-lg hover:opacity-90 transition-all shadow-lg ${projects[currentIndex].btnColor}`}
              >
                View Case Study
              </button>
            </div>

            {/* Right Image Content */}
            <div className="relative mt-10 lg:mt-0">
              {/* Device Mockup */}
              <div className="relative z-10 transform lg:rotate-[-5deg] hover:rotate-0 transition-transform duration-700 ease-out">
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="rounded-xl shadow-2xl border-4 border-white/10 w-full h-auto object-cover max-h-[400px]"
                />
              </div>
              {/* Decorative Circle that changes color */}
              <div
                className={`absolute -bottom-10 -right-10 w-64 h-64 rounded-full blur-3xl -z-0 transition-colors duration-500 ${projects[currentIndex].accent}`}
              ></div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 3. Vertical Dot Pagination (Right Side) */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
          {projects.map((_, index) => (
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

const VideoIntro: React.FC = () => {
  return (
    <section className="py-12 md:py-18 lg:py-24 bg-white relative overflow-hidden">
      {/* --- SECTION BACKGROUND DECORATION START --- */}

      {/* 1. Top-Left Large Faint Square */}
      <div
        className="absolute -top-20 -left-20 w-96 h-96 bg-neobyte-teal opacity-[0.03] rounded-[3rem] rotate-12 pointer-events-none"
        aria-hidden="true"
      ></div>

      {/* 2. Bottom-Right Outlined Square */}
      <div
        className="absolute -bottom-32 -right-20 w-[30rem] h-[30rem] border-2 border-neobyte-navy opacity-[0.05] rounded-[4rem] -rotate-12 pointer-events-none"
        aria-hidden="true"
      ></div>

      {/* 3. Small Floating Square (Center-Left) */}
      <div
        className="absolute top-1/2 left-10 w-16 h-16 bg-neobyte-navy opacity-[0.04] rounded-xl rotate-45 pointer-events-none"
        aria-hidden="true"
      ></div>

      {/* --- SECTION BACKGROUND DECORATION END --- */}

      {/* Main Content Container - Added relative and z-10 to stay above background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Left Column: Text Content */}
          <div className="text-left">
            <span className="text-neobyte-teal font-bold tracking-wider uppercase text-sm mb-2 block">
              Behind the Scenes
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neobyte-navy mb-6 leading-tight">
              How do we build <br /> your digital product?
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              It's not just about writing code; it's about understanding your
              vision. See our transparent process of transforming rough concepts
              into functioning, scalable digital products.
            </p>

            {/* Optional: Simple Bullet points to fill space nicely */}
            <div className="space-y-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-neobyte-teal">
                  <span className="font-bold">01</span>
                </div>
                <p className="font-medium text-neobyte-navy">
                  Strategic Planning
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-neobyte-teal">
                  <span className="font-bold">02</span>
                </div>
                <p className="font-medium text-neobyte-navy">
                  Agile Development
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Video Thumbnail */}
          <div className="relative">
            {/* Local Decor Blobs for Video (Kept these as they are nice) */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-neobyte-teal/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group cursor-pointer border-4 border-white">
              <div className="absolute inset-0 bg-neobyte-navy/20 group-hover:bg-neobyte-navy/10 transition-colors z-10"></div>

              <img
                src="https://picsum.photos/1200/675?random=15"
                alt="Video Thumbnail"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-neobyte-navy fill-current ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// 7. DEVELOPMENT PROCESS (Timeline)
// ============================================
const DevelopmentProcess: React.FC = () => {
  const steps = [
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
  ];

  return (
    <section id="process" className="py-12 md:py-18 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-14 lg:mb-16 text-center">
          <span className="text-neobyte-teal font-bold tracking-wider uppercase">
            Workflow
          </span>
          <h2 className="text-3xl font-bold text-neobyte-navy mt-2">
            Simple 4-Step Process
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 relative z-10">
            {steps.map((step, i) => (
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
              <div className="overflow-hidden h-48">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
  return (
    <main>
      <Hero />
      <ClientTrust />
      <AboutAgency />
      <ServicesList />
      <FeaturedCaseStudy />
      <VideoIntro />
      <DevelopmentProcess />
      <TechStack />
      <Blog />
    </main>
  );
};

export default Home;
