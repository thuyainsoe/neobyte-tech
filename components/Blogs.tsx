"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Search, Calendar, Clock, User, Mail } from "lucide-react";

// Navbar နဲ့ Footer ကို ရှိပြီးသားဆီကနေ import လုပ်ပါ
// import { Navbar } from "./Navbar";
// import Footer from "./Footer";
// (မှတ်ချက် - ဒီဖိုင်မှာတော့ နမူနာမို့ Navbar/Footer component တွေကို import မလုပ်ဘဲ ဒီအတိုင်းထားထားပါတယ်)

// ============================================
// 1. BLOGS HERO SECTION
// ============================================
const BlogsHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Dynamic Background Layer (Same as Home) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neobyte-teal/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-neobyte-teal font-bold tracking-wider uppercase text-sm mb-4 block">
            Our Insights
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-neobyte-navy mb-6 leading-tight">
            Latest News & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neobyte-teal to-blue-600">
              Tech Updates.
            </span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Stay ahead of the curve with our expert analysis, industry trends,
            and deep dives into the world of digital innovation.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-lg mx-auto group">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-6 py-4 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-neobyte-teal/50 pl-12 transition-all group-hover:shadow-md"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-hover:text-neobyte-teal transition-colors" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// 2. FEATURED POST (Highlights the latest/best article)
// ============================================
const FeaturedPost: React.FC = () => {
  return (
    <section className="py-12 bg-white relative z-20 -mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-neobyte-navy rounded-3xl overflow-hidden shadow-2xl relative group"
        >
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neobyte-teal/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none group-hover:bg-neobyte-teal/30 transition-colors duration-500"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                alt="Featured Post"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-neobyte-teal text-neobyte-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-lg">
                Featured
              </div>
            </div>
            <div className="p-6 lg:p-10 flex flex-col justify-center relative z-10">
              <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> Feb 2, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> 5 min read
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-neobyte-teal transition-colors cursor-pointer">
                The Rise of AI in Modern Web Development
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Artificial Intelligence is no longer just a buzzword. It's
                reshaping how we build, deploy, and interact with web
                applications. Discover the key trends for 2024.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="https://i.pravatar.cc/100?img=33"
                    alt="Author"
                    className="w-10 h-10 rounded-full border-2 border-neobyte-teal"
                  />
                  <div>
                    <p className="text-white font-bold text-sm">
                      Sarah Jenkins
                    </p>
                    <p className="text-gray-400 text-xs">Head of Tech</p>
                  </div>
                </div>
                <button className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-neobyte-teal hover:text-neobyte-navy transition-all">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// 3. BLOG POSTS GRID & PAGINATION
// ============================================
const BlogGrid: React.FC = () => {
  // Dummy Data for Blog Posts
  const posts = [
    {
      id: 1,
      title: "10 CSS Tricks You Need to Know",
      excerpt:
        "Level up your styling game with these advanced CSS techniques that will save you hours of coding.",
      category: "Development",
      date: "Jan 28, 2024",
      author: "Mike Ross",
      readTime: "4 min",
      image:
        "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Designing for Accessibility",
      excerpt:
        "Why inclusive design matters and how to ensure your digital products are accessible to everyone.",
      category: "Design",
      date: "Jan 25, 2024",
      author: "Anna Lee",
      readTime: "6 min",
      image:
        "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Next.js 14: What's New?",
      excerpt:
        "A comprehensive breakdown of the latest features in Next.js 14 and how they impact performance.",
      category: "Technology",
      date: "Jan 20, 2024",
      author: "David Chen",
      readTime: "8 min",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "SEO Best Practices for 2024",
      excerpt:
        "Update your SEO strategy with the latest algorithm changes and ranking factors.",
      category: "Marketing",
      date: "Jan 15, 2024",
      author: "Emily Watson",
      readTime: "5 min",
      image:
        "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?q=80&w=2080&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "The Future of Remote Work",
      excerpt:
        "How digital tools are evolving to support the permanent shift to hybrid work environments.",
      category: "Culture",
      date: "Jan 10, 2024",
      author: "Alex Morgan",
      readTime: "3 min",
      image:
        "https://images.unsplash.com/photo-1593642632823-8f7856677741?q=80&w=2025&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Understanding Cloud Security",
      excerpt:
        "Essential security protocols every developer should know when deploying to the cloud.",
      category: "Security",
      date: "Jan 05, 2024",
      author: "John Doe",
      readTime: "7 min",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
    },
  ];

  const categories = [
    "All",
    "Development",
    "Design",
    "Technology",
    "Marketing",
    "Security",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Categories Filter */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all border ${
                activeCategory === cat
                  ? "bg-neobyte-navy text-white border-neobyte-navy shadow-lg"
                  : "bg-white text-slate-600 border-gray-200 hover:border-neobyte-teal hover:text-neobyte-teal"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-neobyte-navy uppercase tracking-wide shadow-sm">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-neobyte-navy mb-3 group-hover:text-neobyte-teal transition-colors line-clamp-2 cursor-pointer">
                  {post.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                <div className="border-t border-gray-100 pt-4 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-slate-500 overflow-hidden">
                      {/* Avatar Placeholder */}
                      <User className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-600">
                      {post.author}
                    </span>
                  </div>
                  <a
                    href="#"
                    className="text-neobyte-navy font-bold text-sm hover:text-neobyte-teal transition-colors flex items-center gap-1 group/btn"
                  >
                    Read{" "}
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination (Styled) */}
        <div className="mt-16 flex justify-center items-center gap-2">
          <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-slate-500 hover:border-neobyte-navy hover:text-neobyte-navy transition-colors disabled:opacity-50">
            &lt;
          </button>
          <button className="w-10 h-10 rounded-lg bg-neobyte-navy text-white font-bold flex items-center justify-center shadow-lg hover:bg-neobyte-teal hover:text-neobyte-navy transition-colors">
            1
          </button>
          <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-slate-500 hover:border-neobyte-navy hover:text-neobyte-navy transition-colors">
            2
          </button>
          <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-slate-500 hover:border-neobyte-navy hover:text-neobyte-navy transition-colors">
            3
          </button>
          <span className="text-slate-400 px-2 font-bold tracking-widest">
            ...
          </span>
          <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-slate-500 hover:border-neobyte-navy hover:text-neobyte-navy transition-colors">
            12
          </button>
          <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-slate-500 hover:border-neobyte-navy hover:text-neobyte-navy transition-colors">
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

// ============================================
// 4. NEWSLETTER CTA (Consistent Design)
// ============================================
const BlogCTA: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-block p-4 rounded-full bg-blue-50 text-neobyte-teal mb-6">
          <Mail className="w-6 h-6" />
        </div>
        <h2 className="text-3xl font-bold text-neobyte-navy mb-4">
          Subscribe to our newsletter
        </h2>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">
          Get the latest insights, tutorials, and trends delivered straight to
          your inbox. No spam, just quality content.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-grow px-5 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:outline-none focus:border-neobyte-teal focus:ring-1 focus:ring-neobyte-teal"
          />
          <button className="px-6 py-3 bg-neobyte-navy text-white font-bold rounded-xl hover:bg-neobyte-teal hover:text-neobyte-navy transition-all shadow-lg">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

// ============================================
// MAIN BLOGS PAGE COMPONENT
// ============================================
const Blogs: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-neobyte-teal/30">
      {/* <Navbar />  (Navbar ကိုလိုအပ်ရင် ဒီမှာ ပြန်ဖွင့်ပါ) */}
      <main>
        <BlogsHero />
        <FeaturedPost />
        <BlogGrid />
        <BlogCTA />
      </main>
      {/* <Footer /> (Footer ကိုလိုအပ်ရင် ဒီမှာ ပြန်ဖွင့်ပါ) */}
    </div>
  );
};

export default Blogs;
