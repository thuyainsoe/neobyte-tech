"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Award,
  Globe,
  Heart,
  Zap,
  Target,
  Smile,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";

// ============================================
// 1. ABOUT HERO SECTION
// ============================================
// ============================================
// REVISED ABOUT HERO (Matches Home Style)
// ============================================
const AboutHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-50">
      {/* 1. Dynamic Background Layer (Consistent with Home) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Gradient Blobs - Positioned slightly differently for variety */}
        <div className="absolute top-20 left-0 -ml-20 w-[600px] h-[600px] bg-neobyte-teal/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 -mr-20 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-bold text-neobyte-navy mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              EST. 2010
            </div>

            <h1 className="text-4xl lg:text-6xl font-black text-neobyte-navy leading-[1.1] mb-6">
              Architects of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-neobyte-teal relative">
                Digital Innovation.
                {/* Decorative Underline */}
                <svg
                  className="absolute w-full h-3 -bottom-2 left-0 text-neobyte-teal opacity-40"
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

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Founded on the belief that technology should be human-centric,
              Neobyte has grown from a small garage team to a global digital
              consultancy. We don't just write code; we write success stories
              for ambitious brands.
            </p>

            {/* Key Stats Row */}
            <div className="grid grid-cols-3 gap-6 border-t border-gray-200 pt-8">
              <div>
                <h3 className="text-3xl font-bold text-neobyte-navy">15+</h3>
                <p className="text-xs text-slate-500 font-bold uppercase mt-1">
                  Years Exp.
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-neobyte-navy">300+</h3>
                <p className="text-xs text-slate-500 font-bold uppercase mt-1">
                  Clients
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-neobyte-navy">50+</h3>
                <p className="text-xs text-slate-500 font-bold uppercase mt-1">
                  Experts
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-full flex items-center justify-center lg:justify-end"
          >
            {/* Image Container */}
            <div className="relative w-full max-w-lg">
              {/* Decorative Back Shape (Rotated) - Hidden on mobile to prevent overflow */}
              <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-bl from-neobyte-teal/20 to-blue-100 rounded-[2rem] transform rotate-3 -z-10 border border-white/50 hidden sm:block"></div>

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/images/about-meeting.png"
                  alt="Neobyte Team Meeting"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-neobyte-navy/10"></div>
              </div>

              {/* Floating Card 1: Awards/Recognition */}
              <div
                // animate={{ y: [0, -10, 0] }}
                // transition={{
                //   repeat: Infinity,
                //   duration: 5,
                //   ease: "easeInOut",
                // }}
                // Mobile: left-2 top-4 scale-90
                // Desktop: lg:-left-8 lg:top-12 lg:scale-100
                className="absolute left-2 top-4 scale-90 origin-top-left lg:-left-8 lg:top-12 lg:scale-100 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 max-w-[180px] lg:max-w-[200px] z-20"
              >
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                  <Award className="w-4 h-4 lg:w-5 lg:h-5" />
                </div>
                <div>
                  <p className="text-[10px] lg:text-xs text-slate-400 font-bold">
                    Award Winner
                  </p>
                  <p className="text-xs lg:text-sm font-bold text-neobyte-navy">
                    Best Tech Agency
                  </p>
                </div>
              </div>

              {/* Floating Card 2: Team Spirit */}
              <div
                // animate={{ y: [0, 10, 0] }}
                // transition={{
                //   repeat: Infinity,
                //   duration: 6,
                //   ease: "easeInOut",
                //   delay: 1,
                // }}
                // Mobile: right-2 bottom-4 scale-90
                // Desktop: lg:-right-4 lg:bottom-10 lg:scale-100
                className="absolute right-2 bottom-4 scale-90 origin-bottom-right lg:-right-4 lg:bottom-10 lg:scale-100 bg-neobyte-navy text-white p-4 rounded-xl shadow-xl flex items-center gap-3 z-20"
              >
                <div className="flex -space-x-3">
                  <img
                    className="w-8 h-8 rounded-full border-2 border-neobyte-navy"
                    src="https://i.pravatar.cc/100?img=1"
                    alt=""
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-neobyte-navy"
                    src="https://i.pravatar.cc/100?img=2"
                    alt=""
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-neobyte-navy"
                    src="https://i.pravatar.cc/100?img=3"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-[10px] lg:text-xs text-neobyte-teal font-bold">
                    Global Team
                  </p>
                  <p className="text-[10px] lg:text-xs text-gray-300">
                    Working Remotely
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
// 2. MISSION & VISION
// ============================================
const MissionVision: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Mission */}
          <div className="relative group">
            <div className="absolute top-0 left-0 w-12 h-12 bg-neobyte-teal/10 rounded-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
            <Target className="w-10 h-10 text-neobyte-teal mb-6" />
            <h3 className="text-2xl font-bold text-neobyte-navy mb-4">
              Our Mission
            </h3>
            <p className="text-slate-600 leading-relaxed">
              To empower businesses by bridging the gap between complex
              technology and human experience. We strive to deliver digital
              solutions that are not only functional but also intuitive and
              impactful.
            </p>
          </div>

          {/* Vision */}
          <div className="relative group">
            <div className="absolute top-0 left-0 w-12 h-12 bg-blue-100 rounded-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
            <Globe className="w-10 h-10 text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold text-neobyte-navy mb-4">
              Our Vision
            </h3>
            <p className="text-slate-600 leading-relaxed">
              To be the global standard for digital innovation, creating a world
              where every idea has the potential to become a visible, scalable,
              and successful digital reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// 3. CORE VALUES
// ============================================
const CoreValues: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: "Client First",
      desc: "We don't just work for you; we work with you. Your success is our success.",
    },
    {
      icon: Zap,
      title: "Innovation",
      desc: "We constantly push boundaries to find new, better ways to solve problems.",
    },
    {
      icon: Award,
      title: "Excellence",
      desc: "Good isn't enough. We aim for pixel-perfect quality in every delivery.",
    },
    {
      icon: Users,
      title: "Collaboration",
      desc: "Great things are never done by one person. They're done by a team of people.",
    },
  ];

  return (
    <section className="py-24 bg-neobyte-navy text-white relative overflow-hidden">
      {/* Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neobyte-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-neobyte-teal font-bold tracking-wider uppercase text-sm">
            Our DNA
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            The Values That Drive Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-neobyte-teal rounded-lg flex items-center justify-center text-neobyte-navy mb-6">
                <val.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3">{val.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// 4. TEAM SECTION
// ============================================
const TeamSection: React.FC = () => {
  const team = [
    {
      name: "Aung",
      role: "DevOps Engineer",
      img: "/images/profile/aung.jpeg",
    },
    {
      name: "Thu",
      role: "Frontend Developer",
      img: "/images/profile/thu.jpeg",
    },
    // {
    //   name: "Aung Nay Htet",
    //   role: "Lead Developer",
    //   img: "/images/profile/ceo2.jpg",
    // },
    // {
    //   name: "Htet Nay Aung",
    //   role: "Product Manager",
    //   img: "/images/profile/ceo3.png",
    // },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neobyte-navy">
              Meet the Minds
            </h2>
            <p className="text-slate-500 mt-2 max-w-xl">
              The talented individuals working tirelessly behind the scenes to
              bring your ideas to life.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-neobyte-teal font-bold hover:underline mt-4 md:mt-0">
            Join our team <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i} className="group relative">
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-gray-200">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Social Overlay */}
                <div className="absolute inset-0 bg-neobyte-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href="#"
                    className="p-2 bg-white rounded-full text-neobyte-navy hover:text-neobyte-teal hover:bg-neobyte-navy transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-white rounded-full text-neobyte-navy hover:text-neobyte-teal hover:bg-neobyte-navy transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-neobyte-navy">
                  {member.name}
                </h3>
                <p className="text-sm text-neobyte-teal font-medium">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// 5. CTA SECTION
// ============================================
const SimpleCTA: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-neobyte-navy mb-6">
          Ready to work with a team that cares?
        </h2>
        <p className="text-slate-600 mb-8">
          Whether you have a fully fleshed-out idea or just a spark of
          inspiration, we are here to help you navigate the digital landscape.
        </p>
        <a
          href="#contact"
          className="inline-flex px-8 py-4 bg-neobyte-navy text-white font-bold rounded-lg hover:bg-neobyte-teal hover:text-neobyte-navy transition-all shadow-lg items-center gap-2"
        >
          Let's Start a Conversation <Smile className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

// ============================================
// MAIN ABOUT PAGE COMPONENT
// ============================================
const About: React.FC = () => {
  return (
    <main>
      <AboutHero />
      <MissionVision />
      <CoreValues />
      <TeamSection />
      <SimpleCTA />
    </main>
  );
};

export default About;
