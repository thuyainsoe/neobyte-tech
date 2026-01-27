"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Facebook,
  Linkedin,
  Twitter,
  Bookmark,
  Quote,
  Mail,
} from "lucide-react";

// Navbar & Footer import (Uncomment if needed)
// import { Navbar } from "./Navbar";
// import Footer from "./Footer";

// ============================================
// 1. ARTICLE HERO SECTION
// ============================================
const ArticleHero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-8 lg:pt-32 lg:pb-16 bg-slate-50">
      {/* Background Noise */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4  relative z-10 text-center">
        {/* Breadcrumb / Back */}
        <div className="flex justify-start mb-8">
          <a
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-neobyte-teal transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blogs
          </a>
        </div>

        {/* Categories */}
        <div className="flex justify-start gap-2 mb-6">
          <span className="px-3 py-1 rounded-full bg-neobyte-teal/10 text-neobyte-teal text-xs font-bold uppercase tracking-wider">
            Technology
          </span>
          <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
            AI
          </span>
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl lg:text-6xl font-black text-left text-neobyte-navy mb-8 leading-tight"
        >
          The Rise of AI in Modern <br className="hidden md:block" /> Web
          Development
        </motion.h1>

        {/* Meta Data */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-start gap-6 text-sm text-slate-500"
        >
          <div className="flex items-center gap-2">
            <img
              src="https://i.pravatar.cc/100?img=33"
              alt="Author"
              className="w-8 h-8 rounded-full border border-gray-200"
            />
            <span className="font-bold text-slate-700">Sarah Jenkins</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" /> Feb 2, 2024
          </div>
          <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" /> 5 min read
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// 2. MAIN CONTENT
// ============================================
const ArticleContent: React.FC = () => {
  return (
    <section className="pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative max-w-5xl mx-auto mb-16 rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
            alt="AI Technology"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT: Social Share (Sticky) */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="sticky top-32 flex flex-col gap-4 items-center">
              <p
                className="text-xs font-bold text-slate-400 uppercase tracking-widest rotate-180 mb-4"
                style={{ writingMode: "vertical-rl" }}
              >
                Share this article
              </p>

              <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-500 hover:bg-blue-400 hover:text-white hover:border-blue-400 transition-all">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-500 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all">
                <Linkedin className="w-4 h-4" />
              </button>
              <div className="w-px h-8 bg-gray-200 my-2"></div>
              <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-500 hover:text-neobyte-teal transition-all">
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* MIDDLE: Content Body */}
          <div className="col-span-1 lg:col-span-8">
            <article className="prose prose-lg prose-slate max-w-none text-slate-600 leading-loose">
              <p className="lead text-xl md:text-2xl font-medium text-neobyte-navy mb-8">
                Artificial Intelligence is no longer just a futuristic concept
                depicted in sci-fi movies. It has firmly planted its roots in
                our daily lives, and web development is one of the fields
                witnessing the most significant transformation.
              </p>

              <h2 className="text-2xl font-bold text-neobyte-navy mt-12 mb-6">
                The Evolution of Coding
              </h2>
              <p className="mb-6">
                Gone are the days when developers had to write every single line
                of code from scratch. With the advent of AI-powered tools like
                GitHub Copilot and ChatGPT, coding has become more about{" "}
                <strong>architecture and logic</strong> rather than syntax
                memorization.
              </p>
              <p className="mb-6">
                These tools act as intelligent assistants, suggesting code
                snippets, debugging errors in real-time, and even refactoring
                entire codebases for better performance.
              </p>

              {/* Quote Block */}
              <blockquote className="my-10 pl-8 border-l-4 border-neobyte-teal bg-white p-8 rounded-r-xl shadow-sm italic text-xl text-neobyte-navy relative">
                <Quote className="absolute top-4 left-4 w-6 h-6 text-neobyte-teal/20 -translate-x-full -translate-y-2" />
                "AI won't replace developers. Developers who use AI will replace
                those who don't."
                <footer className="mt-4 text-sm font-bold not-italic text-slate-400">
                  — Tech Industry Mantra
                </footer>
              </blockquote>

              <h2 className="text-2xl font-bold text-neobyte-navy mt-12 mb-6">
                Automated Testing & QA
              </h2>
              <p className="mb-6">
                Quality Assurance is a crucial part of the development
                lifecycle. AI algorithms can now generate test cases
                automatically, predict potential failure points, and simulate
                user behavior at a scale human testers simply cannot match.
              </p>

              <ul className="list-disc list-outside pl-6 space-y-3 mb-8 marker:text-neobyte-teal">
                <li>
                  <strong>Visual Regression Testing:</strong> AI spots
                  pixel-perfect differences.
                </li>
                <li>
                  <strong>Self-healing Scripts:</strong> Tests that adapt when
                  UI changes.
                </li>
                <li>
                  <strong>Performance Prediction:</strong> Analyzing load before
                  launch.
                </li>
              </ul>

              <h3 className="text-xl font-bold text-neobyte-navy mt-8 mb-4">
                What does this mean for you?
              </h3>
              <p className="mb-6">
                For businesses, this means faster time-to-market and more robust
                applications. For developers, it means less time on repetitive
                tasks and more time on creative problem solving.
              </p>

              {/* Image inside content */}
              <figure className="my-10">
                <img
                  src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop"
                  alt="Code on screen"
                  className="w-full rounded-2xl shadow-lg"
                />
                <figcaption className="text-center text-sm text-slate-400 mt-3">
                  Modern development environment with AI assistance
                </figcaption>
              </figure>

              <p>
                As we move forward into 2024 and beyond, integrating AI into
                your development workflow isn't just an option; it's a necessity
                for staying competitive.
              </p>
            </article>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {[
                  "Web Development",
                  "Artificial Intelligence",
                  "Future Tech",
                  "Automation",
                ].map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-slate-600 rounded-lg text-sm font-medium hover:bg-neobyte-navy hover:text-white transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio Box */}
            <div className="mt-12 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
              <img
                src="https://i.pravatar.cc/100?img=33"
                alt="Sarah Jenkins"
                className="w-20 h-20 rounded-full"
              />
              <div>
                <h4 className="text-lg font-bold text-neobyte-navy">
                  Sarah Jenkins
                </h4>
                <p className="text-neobyte-teal text-sm font-bold mb-2">
                  Head of Technology @ Neobyte
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Sarah is a veteran software architect with over 15 years of
                  experience. She is passionate about clean code, scalable
                  systems, and the intersection of AI and human creativity.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Table of Contents (Sticky) */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="sticky top-32">
              <h4 className="font-bold text-neobyte-navy mb-4 uppercase text-xs tracking-wider">
                On this page
              </h4>
              <ul className="space-y-3 text-sm border-l border-gray-200 pl-4">
                <li>
                  <a href="#" className="text-neobyte-teal font-medium">
                    Introduction
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-neobyte-navy transition-colors"
                  >
                    Evolution of Coding
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-neobyte-navy transition-colors"
                  >
                    Automated Testing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-neobyte-navy transition-colors"
                  >
                    Visual Regression
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-neobyte-navy transition-colors"
                  >
                    Future Outlook
                  </a>
                </li>
              </ul>

              <div className="mt-12 p-6 bg-neobyte-navy rounded-xl text-white">
                <h5 className="font-bold mb-2">Need a custom solution?</h5>
                <p className="text-xs text-gray-300 mb-4">
                  We build AI-powered web applications.
                </p>
                <button className="w-full py-2 bg-neobyte-teal text-neobyte-navy text-xs font-bold rounded-lg hover:bg-white transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// 3. RELATED POSTS
// ============================================
const RelatedPosts: React.FC = () => {
  const posts = [
    {
      id: 2,
      title: "Designing for Accessibility",
      category: "Design",
      date: "Jan 25, 2024",
      image:
        "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Next.js 14: What's New?",
      category: "Technology",
      date: "Jan 20, 2024",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-2xl font-bold text-neobyte-navy">Read Next</h3>
          <a
            href="/blogs"
            className="text-neobyte-teal font-bold text-sm hover:underline"
          >
            View all posts
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="rounded-xl overflow-hidden h-56 mb-4 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-md text-xs font-bold text-neobyte-navy">
                  {post.category}
                </div>
              </div>
              <h4 className="text-lg font-bold text-neobyte-navy group-hover:text-neobyte-teal transition-colors mb-2">
                {post.title}
              </h4>
              <p className="text-xs text-slate-400">{post.date}</p>
            </div>
          ))}

          {/* Newsletter Box as 3rd item on large screens */}
          <div className="bg-neobyte-teal/10 rounded-xl p-8 flex flex-col justify-center items-center text-center border border-neobyte-teal/20">
            <Mail className="w-8 h-8 text-neobyte-teal mb-4" />
            <h4 className="font-bold text-neobyte-navy mb-2">Stay Updated</h4>
            <p className="text-sm text-slate-600 mb-4">
              Get the latest tech news delivered to your inbox.
            </p>
            <div className="flex w-full gap-2">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 rounded-lg text-sm border-gray-200 outline-none"
              />
              <button className="bg-neobyte-navy text-white px-4 rounded-lg text-sm font-bold">
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// MAIN PAGE COMPONENT
// ============================================
const BlogDetail: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-neobyte-teal/30">
      {/* <Navbar /> */}
      <main>
        <ArticleHero />
        <ArticleContent />
        <RelatedPosts />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default BlogDetail;
