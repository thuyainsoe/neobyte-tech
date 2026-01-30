"use client";

import React from "react";
import { motion } from "framer-motion"; // Used only for initial Hero entrance
import {
  ArrowRight,
  Code,
  Smartphone,
  Palette,
  Database,
  Search,
  Layout,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

// --- DECORATIVE SHAPES COMPONENTS (Static/CSS only) ---
const FloatingTriangle = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={`absolute pointer-events-none opacity-20 ${className}`}
  >
    <path
      d="M50 15 L85 85 L15 85 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const FloatingDonut = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={`absolute pointer-events-none opacity-20 ${className}`}
  >
    <circle
      cx="50"
      cy="50"
      r="35"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
    />
  </svg>
);

const DotGrid = () => (
  <div
    className="absolute inset-0 z-0 pointer-events-none opacity-[0.4]"
    style={{
      backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
      backgroundSize: "30px 30px",
    }}
  />
);

// ============================================
// 1. SERVICE HERO SECTION (Optimized)
// ============================================
const ServiceHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-slate-50">
      {/* --- BACKGROUND DECORATION START --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Noise & Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Colorful Blobs (Static) */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neobyte-teal/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />

        {/* Geometric Shapes (Static or CSS Rotation only) */}
        <div className="absolute top-20 left-[10%]">
          {/* Removed JS Animation loop */}
          <FloatingTriangle className="w-24 h-24 text-neobyte-teal rotate-12" />
        </div>

        <div className="absolute bottom-20 right-[5%]">
          <FloatingDonut className="w-32 h-32 text-blue-400 -rotate-12" />
        </div>

        {/* Stripe Pattern */}
        <div className="absolute top-1/2 left-0 w-24 h-64 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#e2e8f0_10px,#e2e8f0_11px)] opacity-50 -translate-y-1/2"></div>
      </div>
      {/* --- BACKGROUND DECORATION END --- */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Simple Entrance Animation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }} // Faster duration
          >
            <span className="inline-block py-1 px-3 rounded-full bg-neobyte-teal/10 text-neobyte-teal font-bold tracking-wider uppercase text-xs mb-6">
              Our Expertise
            </span>
            <h1 className="text-4xl lg:text-6xl font-black text-neobyte-navy leading-[1.1] mb-6">
              Services that <br />
              <span className="relative">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-neobyte-teal to-blue-600">
                  Scale With You.
                </span>
                {/* Text Underline Decoration */}
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-neobyte-teal/30 -z-10"
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
              </span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              We provide comprehensive digital solutions tailored to your
              business goals. From high-performance websites to complex
              enterprise software.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-neobyte-navy text-white font-bold rounded-xl hover:bg-neobyte-teal hover:text-neobyte-navy transition-all shadow-lg flex items-center gap-2">
                View Solutions
              </button>
            </div>
          </motion.div>

          {/* "Bob" Character Illustration Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Background Shape behind Bob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-tr from-blue-100 to-neobyte-teal/20 rounded-full blur-2xl -z-10"></div>

            {/* Decorative Ring - Reduced Animation speed for performance */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] border border-dashed border-neobyte-teal/30 rounded-full -z-10 animate-[spin_20s_linear_infinite]"></div>

            <div className="relative w-[350px] md:w-[450px]">
              <img
                src="/images/hero.png"
                alt="Developer Illustration"
                className="w-full h-auto drop-shadow-2xl"
                loading="eager"
              />

              {/* Static Tech Icons (No floating animation) */}
              <div className="absolute -left-8 top-20 bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 rotate-[-5deg] hover:rotate-0 transition-transform">
                <Code className="w-8 h-8 text-blue-500" />
              </div>

              <div className="absolute -right-4 bottom-24 bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 rotate-[5deg] hover:rotate-0 transition-transform">
                <Database className="w-8 h-8 text-neobyte-teal" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// 2. DETAILED SERVICES GRID (CSS Transitions Only)
// ============================================
const AllServices: React.FC = () => {
  const services = [
    {
      icon: Layout,
      title: "Web Development",
      desc: "High-performance websites built with React, Next.js, and modern frameworks.",
      tags: ["React", "Next.js", "Tailwind"],
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      desc: "Native and Cross-platform mobile apps for iOS and Android devices.",
      tags: ["Flutter", "React Native", "Kotlin"],
      color: "bg-green-50 text-green-600",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      desc: "Creating intuitive, user-centric designs that drive engagement and conversion.",
      tags: ["Figma", "Prototyping"],
      color: "bg-purple-50 text-purple-600",
    },
    {
      icon: Database,
      title: "Backend & API",
      desc: "Robust server-side architecture and API development for scalable applications.",
      tags: ["Node.js", "Python", "GraphQL"],
      color: "bg-orange-50 text-orange-600",
    },
    {
      icon: Search,
      title: "SEO & Marketing",
      desc: "Data-driven strategies to increase your visibility and rank higher on search engines.",
      tags: ["SEO", "Content Strategy"],
      color: "bg-pink-50 text-pink-600",
    },
    {
      icon: ShieldCheck,
      title: "Cyber Security",
      desc: "Protecting your digital assets with advanced security audits and implementation.",
      tags: ["Pen Testing", "Audits"],
      color: "bg-cyan-50 text-cyan-600",
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-white overflow-hidden">
      <DotGrid />

      {/* Decorative Blob - Reduced size/blur for performance */}
      <div className="absolute top-1/3 -left-20 w-64 h-64 bg-neobyte-teal/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 -right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-neobyte-navy mb-4">
            Comprehensive Solutions
          </h2>
          <p className="text-slate-600">
            We don't just build software; we build the digital infrastructure
            for your business to thrive.
          </p>
        </div>

        {/* Removed motion.div stagger/viewport animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gray-50 to-transparent rounded-tr-2xl -z-10 group-hover:from-neobyte-teal/5 transition-colors"></div>

              <div
                className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm`}
              >
                <service.icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold text-neobyte-navy mb-3 group-hover:text-neobyte-teal transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 mb-6 text-sm leading-relaxed min-h-[60px]">
                {service.desc}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-50">
                {service.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-bold uppercase tracking-wider bg-slate-50 text-slate-500 px-2 py-1 rounded-md border border-slate-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// 3. PROCESS (With Dark Tech Pattern - Static)
// ============================================
const WorkingProcess: React.FC = () => {
  return (
    <section className="relative py-24 bg-neobyte-navy text-white overflow-hidden">
      {/* --- BACKGROUND DECORATION --- */}
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Large Glowing Shapes - Static */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neobyte-teal/10 rounded-full blur-[80px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[80px] pointer-events-none -translate-x-1/2 translate-y-1/2" />

      {/* Floating Triangle (Rotated - Static) */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border-2 border-white/5 rotate-45 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Left Content */}
          <div className="md:w-1/3 sticky top-24">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/10 text-neobyte-teal font-bold tracking-wider uppercase text-xs mb-6">
              How We Work
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6 leading-tight">
              Agile & Transparent <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neobyte-teal to-white">
                Methodology
              </span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
              We follow a strict yet flexible process to ensure your project is
              delivered on time, within budget, and above expectations.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-neobyte-teal font-bold hover:text-white transition-colors"
            >
              Start a Project
              <span className="bg-neobyte-teal/20 p-2 rounded-full group-hover:bg-neobyte-teal group-hover:text-neobyte-navy transition-all">
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </div>

          {/* Right Grid (Process Steps) */}
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                id: "01",
                title: "Discovery",
                desc: "We dive deep into your business requirements to understand the core problem.",
              },
              {
                id: "02",
                title: "Design & Prototype",
                desc: "Visualizing the solution with high-fidelity mockups and interactive prototypes.",
              },
              {
                id: "03",
                title: "Development",
                desc: "Clean, scalable coding using the latest technologies and best practices.",
              },
              {
                id: "04",
                title: "Launch & Scale",
                desc: "Deploying your product and monitoring performance for future growth.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="group relative bg-white/[0.03] border border-white/10 p-8 rounded-2xl hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300"
              >
                {/* Number Watermark */}
                <span className="absolute top-4 right-4 text-5xl font-black text-white/[0.03] group-hover:text-white/[0.1] transition-colors pointer-events-none">
                  {step.id}
                </span>

                <div className="w-10 h-10 rounded-full bg-neobyte-teal/20 flex items-center justify-center mb-6 group-hover:bg-neobyte-teal group-hover:text-neobyte-navy transition-all">
                  <CheckCircle2 className="w-5 h-5 text-neobyte-teal group-hover:text-neobyte-navy" />
                </div>

                <h4 className="text-xl font-bold mb-3 text-white group-hover:text-neobyte-teal transition-colors">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// 4. CTA SECTION (Static Geometric Background)
// ============================================
const ServiceCTA: React.FC = () => {
  return (
    <section className="relative py-24 bg-slate-50 border-t border-gray-200 overflow-hidden">
      {/* Decorative Circles/Rings */}
      <div className="absolute top-0 left-0 w-64 h-64 border-[20px] border-slate-100 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neobyte-teal/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      {/* Floating Plus Signs */}
      <div className="absolute top-20 right-20 text-slate-200 text-4xl font-black select-none pointer-events-none">
        +
      </div>
      <div className="absolute bottom-20 left-20 text-slate-200 text-4xl font-black select-none pointer-events-none">
        +
      </div>

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-black text-neobyte-navy mb-6 tracking-tight">
          Have a project in mind?
        </h2>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Let's discuss how we can help you achieve your business goals with our
          custom digital solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-neobyte-navy text-white font-bold rounded-xl hover:bg-neobyte-teal hover:text-neobyte-navy transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
            Get a Free Quote
          </button>
          <button className="px-8 py-4 bg-white text-neobyte-navy font-bold rounded-xl border border-gray-200 hover:border-neobyte-navy hover:bg-gray-50 transition-all shadow-sm">
            Schedule a Call
          </button>
        </div>
      </div>
    </section>
  );
};

// ============================================
// MAIN SERVICES PAGE COMPONENT
// ============================================
const Services: React.FC = () => {
  return (
    <main>
      <ServiceHero />
      <AllServices />
      <WorkingProcess />
      <ServiceCTA />
    </main>
  );
};

export default Services;
