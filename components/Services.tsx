"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Smartphone,
  Palette,
  Database,
  Search,
  Layout,
  ShieldCheck,
} from "lucide-react";

// ============================================
// 1. SERVICE HERO SECTION (With "Bob")
// ============================================
const ServiceHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neobyte-teal/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-neobyte-teal font-bold tracking-wider uppercase text-sm mb-4 block">
              Our Expertise
            </span>
            <h1 className="text-4xl lg:text-6xl font-black text-neobyte-navy leading-[1.1] mb-6">
              Services that <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neobyte-teal to-blue-600">
                Scale With You.
              </span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              We provide comprehensive digital solutions tailored to your
              business goals. From high-performance websites to complex
              enterprise software, "Bob" and our team have got you covered.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-neobyte-navy text-white font-bold rounded-xl hover:bg-neobyte-teal hover:text-neobyte-navy transition-all shadow-lg flex items-center gap-2">
                View Solutions
              </button>
            </div>
          </motion.div>

          {/* "Bob" Character Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Abstract Background Blob behind Bob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-blue-100 to-neobyte-teal/20 rounded-full blur-3xl -z-10"></div>

            {/* Bob Container with Float Animation */}
            <div
              // animate={{ y: [0, -20, 0] }}
              // transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative w-[350px] md:w-[450px]"
            >
              {/* This represents "Bob" - A 3D Character */}
              <img
                src="/images/hero.png"
                // Alternatively use a URL like: "https://static.vecteezy.com/system/resources/previews/010/871/619/original/3d-avatar-character-business-man-working-on-laptop-png.png"
                alt="Bob the Developer"
                className="w-full h-auto drop-shadow-2xl"
              />

              {/* Floating Tech Icons around Bob */}
              <div
                // animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
                // transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
                className="absolute -left-4 top-20 bg-white p-3 rounded-xl shadow-lg border border-gray-100"
              >
                <Code className="w-6 h-6 text-blue-500" />
              </div>

              <div
                // animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
                // transition={{ repeat: Infinity, duration: 6, delay: 1 }}
                className="absolute -right-4 bottom-32 bg-white p-3 rounded-xl shadow-lg border border-gray-100"
              >
                <Database className="w-6 h-6 text-neobyte-teal" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// 2. DETAILED SERVICES GRID
// ============================================
const AllServices: React.FC = () => {
  const services = [
    {
      icon: Layout,
      title: "Web Development",
      desc: "High-performance websites built with React, Next.js, and modern frameworks.",
      tags: ["React", "Next.js", "Tailwind", "Node.js"],
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      desc: "Native and Cross-platform mobile apps for iOS and Android devices.",
      tags: ["Flutter", "React Native", "Swift", "Kotlin"],
      color: "bg-green-50 text-green-600",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      desc: "Creating intuitive, user-centric designs that drive engagement and conversion.",
      tags: ["Figma", "Prototyping", "User Research", "Wireframing"],
      color: "bg-purple-50 text-purple-600",
    },
    {
      icon: Database,
      title: "Backend & API",
      desc: "Robust server-side architecture and API development for scalable applications.",
      tags: ["Node.js", "Python", "GraphQL", "PostgreSQL"],
      color: "bg-orange-50 text-orange-600",
    },
    {
      icon: Search,
      title: "SEO & Marketing",
      desc: "Data-driven strategies to increase your visibility and rank higher on search engines.",
      tags: ["SEO", "Content Strategy", "Analytics", "Ads"],
      color: "bg-pink-50 text-pink-600",
    },
    {
      icon: ShieldCheck,
      title: "Cyber Security",
      desc: "Protecting your digital assets with advanced security audits and implementation.",
      tags: ["Pen Testing", "Audits", "Encryption", "Compliance"],
      color: "bg-cyan-50 text-cyan-600",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-neobyte-navy mb-4">
            Comprehensive Solutions
          </h2>
          <p className="text-slate-600">
            We don't just build software; we build the digital infrastructure
            for your business to thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div
                className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <service.icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold text-neobyte-navy mb-3">
                {service.title}
              </h3>
              <p className="text-slate-500 mb-6 text-sm leading-relaxed min-h-[60px]">
                {service.desc}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-50">
                {service.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-bold uppercase tracking-wider bg-gray-50 text-slate-500 px-2 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// 3. PROCESS / HOW WE WORK
// ============================================
const WorkingProcess: React.FC = () => {
  return (
    <section className="py-24 bg-neobyte-navy text-white relative overflow-hidden">
      {/* Decor */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-neobyte-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3">
            <span className="text-neobyte-teal font-bold tracking-wider uppercase text-sm">
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Agile & Transparent Methodology
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              We follow a strict yet flexible process to ensure your project is
              delivered on time, within budget, and above expectations.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-neobyte-teal font-bold hover:gap-4 transition-all"
            >
              Start a Project <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
              <span className="text-4xl font-black text-white/20 mb-4 block">
                01
              </span>
              <h4 className="text-xl font-bold mb-2 text-white">Discovery</h4>
              <p className="text-sm text-gray-400">
                We dive deep into your business requirements to understand the
                core problem.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
              <span className="text-4xl font-black text-white/20 mb-4 block">
                02
              </span>
              <h4 className="text-xl font-bold mb-2 text-white">
                Design & Prototype
              </h4>
              <p className="text-sm text-gray-400">
                Visualizing the solution with high-fidelity mockups and
                interactive prototypes.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
              <span className="text-4xl font-black text-white/20 mb-4 block">
                03
              </span>
              <h4 className="text-xl font-bold mb-2 text-white">Development</h4>
              <p className="text-sm text-gray-400">
                Clean, scalable coding using the latest technologies and best
                practices.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
              <span className="text-4xl font-black text-white/20 mb-4 block">
                04
              </span>
              <h4 className="text-xl font-bold mb-2 text-white">
                Launch & Scale
              </h4>
              <p className="text-sm text-gray-400">
                Deploying your product and monitoring performance for future
                growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// 4. CTA SECTION
// ============================================
const ServiceCTA: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-neobyte-navy mb-6">
          Have a project in mind?
        </h2>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Let's discuss how we can help you achieve your business goals with our
          custom digital solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-neobyte-navy text-white font-bold rounded-xl hover:bg-neobyte-teal hover:text-neobyte-navy transition-all shadow-xl hover:shadow-2xl">
            Get a Free Quote
          </button>
          <button className="px-8 py-4 bg-white text-neobyte-navy font-bold rounded-xl border border-gray-200 hover:border-neobyte-navy transition-all shadow-sm">
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
