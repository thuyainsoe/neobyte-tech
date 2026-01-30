"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import api from "@/lib/axios";
import { useLanguage } from "@/context/LanguageContext";
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
import Image from "next/image";
import { desc, pattern } from "framer-motion/client";

// ============================================
// 1. ABOUT HERO SECTION
// ============================================
// ============================================
// REVISED ABOUT HERO (Matches Home Style)
// ============================================
interface AboutHeroProps {
  data?: any;
  loading?: boolean;
}

const AboutHero: React.FC<AboutHeroProps> = ({ data, loading }) => {
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
              {/* EST. 2010 */}
              {data?.badge || "EST. 2010"}
            </div>

            <h1 className="text-4xl lg:text-6xl font-black text-neobyte-navy leading-[1.1] mb-6">
              {data?.title1 || "Architects of"} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-neobyte-teal relative">
                {data?.title2 || "Digital Innovation."}
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
              {data?.description ||
                `Founded on the belief that technology should be human-centric,
              Neobyte has grown from a small garage team to a global digital
              consultancy. We don't just write code; we write success stories
              for ambitious brands.`}
            </p>

            {/* Key Stats Row */}
            <div className="grid grid-cols-3 gap-6 border-t border-gray-200 pt-8">
              <div>
                <h3 className="text-3xl font-bold text-neobyte-navy">
                  {data?.stats[0]?.label || "15+"}
                </h3>
                <p className="text-xs text-slate-500 font-bold uppercase mt-1">
                  {data?.stats[0]?.value || "Years Exp."}
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-neobyte-navy">
                  {data?.stats[1]?.label || "10+"}
                </h3>
                <p className="text-xs text-slate-500 font-bold uppercase mt-1">
                  {data?.stats[2]?.value || "Clients"}
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-neobyte-navy">
                  {data?.stats[2]?.label || "20+"}
                </h3>
                <p className="text-xs text-slate-500 font-bold uppercase mt-1">
                  {data?.stats[2]?.value || "Experts"}
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
                {/* images/about-meeting.png */}
                <Image
                  src={data?.image?.url ? data.image.url : "/images/hero.png"}
                  alt={data?.image?.alternativeText || "Neobyte Team Meeting"}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
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
                    {data?.stats[3]?.label || "Award Winner"}
                  </p>
                  <p className="text-xs lg:text-sm font-bold text-neobyte-navy">
                    {data?.stats[3]?.value || "Best Tech Agency"}
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
                    {data?.stats[4]?.label || "Global Team"}
                  </p>
                  <p className="text-[10px] lg:text-xs text-gray-300">
                    {data?.stats[4]?.value || "Working Remotely"}
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
const MissionVision: React.FC<{ data: any }> = ({ data }) => {
  return (
    <section className="relative py-12 md:py-16 bg-gray-50 overflow-hidden">
      {/* --- BACKGROUND DECORATION START (Making it 'busy') --- */}
      {/* 1. Dot Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#1e293b 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      {/* 2. Abstract Blurred Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-neobyte-teal/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      {/* --- BACKGROUND DECORATION END --- */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {/* --- MISSION CARD --- */}
          <div className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
            {/* Decorative Corner Shape (Matches ServicesList) */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-neobyte-teal opacity-[0.05] rounded-[3rem] rotate-12 pointer-events-none transition-all duration-500 group-hover:rotate-45 group-hover:scale-110 group-hover:opacity-10"></div>

            <div className="relative z-10">
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-xl bg-neobyte-teal/10 flex items-center justify-center mb-6 group-hover:bg-neobyte-teal group-hover:text-white transition-colors duration-300">
                <Target className="w-7 h-7 text-neobyte-teal group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-2xl font-bold text-neobyte-navy mb-3 group-hover:translate-x-1 transition-transform">
                {data?.card[0]?.label || "Our Mission"}
              </h3>

              <p className="text-slate-500 leading-relaxed text-base">
                {data?.card[0]?.value ||
                  "To empower businesses by bridging the gap between complex technology and human experience. We strive to deliver digital solutions that are not only functional but also intuitive and impactful."}
              </p>
            </div>
          </div>

          {/* --- VISION CARD --- */}
          <div className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
            {/* Decorative Corner Shape (Matches ServicesList - Blue Variation) */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-600 opacity-[0.05] rounded-[3rem] rotate-12 pointer-events-none transition-all duration-500 group-hover:rotate-45 group-hover:scale-110 group-hover:opacity-10"></div>

            <div className="relative z-10">
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Globe className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-2xl font-bold text-neobyte-navy mb-3 group-hover:translate-x-1 transition-transform">
                {data?.card[1]?.label || "Our Vision"}
              </h3>

              <p className="text-slate-500 leading-relaxed text-base">
                {data?.card[1]?.value ||
                  "To be the global standard for digital innovation, creating a world where every idea has the potential to become a visible, scalable, and successful digital reality."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// 3. CORE VALUES
// ============================================

const CoreValues: React.FC<{ data: any }> = ({ data }) => {
  const values = useMemo(() => {
    return (
      data?.cards?.map((card: any, index: any) => ({
        icon:
          index === 0 ? Heart : index === 1 ? Zap : index === 2 ? Award : Users,
        title: card.label,
        desc: card.value,
      })) || [
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
      ]
    );
  }, [data]);

  return (
    <section className="relative py-16 lg:py-20 bg-neobyte-navy overflow-hidden">
      {/* --- BACKGROUND DECORATION START --- */}
      {/* 1. Cyber Grid Background (CSS Pattern) */}
      <div
        className="absolute inset-0 z-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                            linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* 2. Radial Gradient Overlay to fade grid at edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-neobyte-navy/20 via-transparent to-neobyte-navy z-0"></div>

      {/* 3. Glowing Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neobyte-teal/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
      {/* --- BACKGROUND DECORATION END --- */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-neobyte-teal/10 border border-neobyte-teal/20 text-neobyte-teal font-semibold tracking-wider uppercase text-xs mb-4">
            {data?.badge || "Our DNA"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            {data?.title || "The Values That Drive Us"}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values?.map((val: any, idx: any) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative h-full"
            >
              {/* Card Border Gradient (appears on hover) */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-white/20 to-white/0 opacity-50 group-hover:from-neobyte-teal group-hover:to-purple-500 group-hover:opacity-100 transition-all duration-500 blur-[1px]"></div>

              {/* Main Card Content */}
              <div className="relative h-full bg-[#0f172a] rounded-2xl p-6 lg:p-8 flex flex-col items-start border border-white/5 overflow-hidden">
                {/* Subtle sheen effect */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon Box */}
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-neobyte-teal blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center border border-gray-700 group-hover:border-neobyte-teal/50 group-hover:bg-gray-800/80 transition-colors duration-300">
                    <val.icon className="w-6 h-6 text-gray-300 group-hover:text-neobyte-teal transition-colors" />
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-neobyte-teal transition-colors duration-300">
                  {val.title}
                </h4>

                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {val.desc}
                </p>
              </div>
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

const TeamSection: React.FC<{ data: any }> = ({ data }) => {
  const team = [
    {
      name: "Aung",
      role: "DevOps Engineer",
      img: "/images/profile/aung.jpeg",
      socials: { twitter: "#", linkedin: "#", github: "#" },
    },
    {
      name: "Thu",
      role: "Frontend Developer",
      img: "/images/profile/thu.jpeg",
      socials: { twitter: "#", linkedin: "#", github: "#" },
    },
    // Add dummy data for layout visualization if array is small
    // { name: "Aung Nay Htet", role: "Lead Developer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80" },
    // { name: "Htet Nay Aung", role: "Product Manager", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&w=800&q=80" },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-slate-50 overflow-hidden">
      {/* --- BACKGROUND DECORATION --- */}
      {/* Large faint circle for subtle depth */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-neobyte-navy/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-neobyte-navy mb-4">
              {data?.title || "Meet Our Team"}
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              {data?.description ||
                "The talented individuals working tirelessly behind the scenes to bring your ideas to life."}
            </p>
          </div>

          <a
            href="#"
            className="group flex items-center gap-2 text-neobyte-navy font-bold hover:text-neobyte-teal transition-colors"
          >
            {data?.join_team_button || "Join our team"}
            <span className="bg-neobyte-teal/10 p-2 rounded-full group-hover:bg-neobyte-teal group-hover:text-white transition-all duration-300">
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* 1. Image Layer */}
              <div className="absolute inset-0 bg-gray-200">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                {/* Gradient Overlay to make text pop if image is light */}
                <div className="absolute inset-0 bg-gradient-to-t from-neobyte-navy/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>

              {/* 2. Floating Glass Card (Info) */}
              <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-neobyte-navy">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold text-neobyte-teal uppercase tracking-wider mt-1">
                        {member.role}
                      </p>
                    </div>

                    {/* Status Dot */}
                    <div
                      className="w-2 h-2 rounded-full bg-green-500 animate-pulse mt-2"
                      title="Online"
                    ></div>
                  </div>

                  {/* Hidden Socials Row (Expands on Hover) */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                    <div className="overflow-hidden">
                      <div className="pt-4 flex items-center gap-3 border-t border-slate-200/60 mt-3">
                        <SocialIcon icon={Linkedin} />
                        <SocialIcon icon={Twitter} />
                        <SocialIcon icon={Github} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper component for cleaner code
const SocialIcon = ({ icon: Icon }: any) => (
  <a
    href="#"
    className="text-slate-400 hover:text-neobyte-teal transition-colors p-1"
  >
    <Icon className="w-4 h-4" />
  </a>
);

// ============================================
// 5. CTA SECTION
// ============================================
const SimpleCTA = ({ data }: any) => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-neobyte-navy mb-6">
          {data?.title || "Ready to work with a team that cares?"}
        </h2>
        <p className="text-slate-600 mb-8">
          {data?.description || `Let's turn your vision into reality together.`}
        </p>
        <a
          href="#contact"
          className="inline-flex px-8 py-4 bg-neobyte-navy text-white font-bold rounded-lg hover:bg-neobyte-teal hover:text-neobyte-navy transition-all shadow-lg items-center gap-2"
        >
          {data?.button || "Let's Start a Conversation"}{" "}
          <Smile className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

// ============================================
// MAIN ABOUT PAGE COMPONENT
// ============================================
const About: React.FC = () => {
  const [data, setData] = useState<any>(undefined);
  const [loading, setLoading] = useState(true);
  const { locale } = useLanguage();

  const fetchAboutPageData = useCallback(async () => {
    try {
      setLoading(true);
      // AboutDNA
      const response = await api.get(
        `/api/about-page?populate[AboutHeroSection][populate]=*&populate[AboutMissionVision][populate]=*&populate[AboutDNA][populate]=*&populate[ready_to_work_button][populate]=*&populate[our_team_button][populate]=*&locale=${locale}`,
      );

      console.log(response.data.data, "about page data");

      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching about page data:", error);
      setData(undefined);
    } finally {
      setLoading(false);
    }
  }, [locale]);

  useEffect(() => {
    fetchAboutPageData();
  }, [fetchAboutPageData]);

  return (
    <main>
      <AboutHero data={data?.AboutHeroSection} loading={loading} />
      <MissionVision data={data?.AboutMissionVision} />
      <CoreValues data={data?.AboutDNA} />
      <TeamSection
        data={{
          title: data?.our_team_title,
          description: data?.our_team_description,
          join_team_button: data?.our_team_button?.[0]?.label,
        }}
      />
      <SimpleCTA
        data={{
          title: data?.ready_to_work_title,
          description: data?.ready_to_work_description,
          button: data?.ready_to_work_button?.label,
        }}
      />
    </main>
  );
};

export default About;

// A retro 8-bit pixel art portrait, framed as a bust-style passport photograph. The character is a young man with light brown skin, dark wavy pixelated hair, and clear square-framed glasses. He is wearing a simple dark grey t-shirt and holding an open book with a brown cover and off-white pages at his chest. The background is a solid, vibrant red rendered in large, chunky pixels. The overall resolution is low.
