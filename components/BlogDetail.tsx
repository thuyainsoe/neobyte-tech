"use client";

import ReactMarkdown from "react-markdown";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Facebook } from "lucide-react";

// Image URL တွေအတွက် Helper
const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const getImageUrl = (image: any) => {
  if (!image?.data?.attributes?.url) return "https://via.placeholder.com/800"; // Fallback image
  return `${STRAPI_URL}${image.data.url}`;
};

// Props Interface
interface BlogDetailProps {
  blogData: {
    id: number;
    attributes: {
      title: string;
      content: string; // or Blocks
      publishedAt: string;
      read_time?: string; // Strapi မှာ field ရှိရင်
      cover_image: any;
      author?: {
        // Author relation ရှိရင်
        data: {
          attributes: {
            name: string;
            avatar: any;
          };
        };
      };
      category?: {
        // Category relation ရှိရင်
        data: {
          attributes: {
            name: string;
          };
        };
      };
    };
  };
}

// ============================================
// 1. ARTICLE HERO SECTION (Modified)
// ============================================
const ArticleHero: React.FC<{ data: any }> = ({ data }) => {
  const { title, publishedAt, read_time, author, category } = data;
  const authorName = author?.data?.attributes?.name || "Neobyte Team";
  const categoryName = category?.data?.attributes?.name || "Technology";

  return (
    <section className="relative pt-24 pb-8 lg:pt-32 lg:pb-16 bg-slate-50">
      {/* Background Noise */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
        {/* Back Link */}
        <div className="flex justify-start mb-8">
          <a
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-neobyte-teal transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blogs
          </a>
        </div>

        {/* Categories (Dynamic) */}
        <div className="flex justify-start gap-2 mb-6">
          <span className="px-3 py-1 rounded-full bg-neobyte-teal/10 text-neobyte-teal text-xs font-bold uppercase tracking-wider">
            {categoryName}
          </span>
        </div>

        {/* Title (Dynamic) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl lg:text-6xl font-black text-left text-neobyte-navy mb-8 leading-tight"
        >
          {title}
        </motion.h1>

        {/* Meta Data (Dynamic) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-start gap-6 text-sm text-slate-500"
        >
          <div className="flex items-center gap-2">
            {/* Author Avatar logic လိုရင်ထည့်ပါ */}
            <span className="font-bold text-slate-700">{authorName}</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {new Date(publishedAt).toLocaleDateString("en-US", {
              dateStyle: "medium",
            })}
          </div>
          <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" /> {read_time || "5 min read"}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// 2. MAIN CONTENT (Modified)
// ============================================
const ArticleContent: React.FC<{ data: any }> = ({ data }) => {
  const { content, image, author } = data;

  return (
    <section className="pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Image (Dynamic) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative max-w-5xl mx-auto mb-16 rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src={image.url ? image.url : "/images/hero.png"}
            alt="Cover"
            className="w-full h-auto object-cover max-h-[500px]"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT: Social Share - Unchanged */}
          <div className="hidden lg:block lg:col-span-2">
            {/* ... (Social Share code same as before) ... */}
            <div className="sticky top-32 flex flex-col gap-4 items-center">
              <p
                className="text-xs font-bold text-slate-400 rotate-180"
                style={{ writingMode: "vertical-rl" }}
              >
                Share
              </p>
              <Facebook className="w-5 h-5 text-slate-400" />
              {/* ... other icons ... */}
            </div>
          </div>

          {/* MIDDLE: Content Body (Dynamic) */}
          <div className="col-span-1 lg:col-span-8">
            <article className="prose prose-lg prose-slate max-w-none text-slate-600 leading-loose">
              {/* Note: Strapi often sends markdown or blocks. You might need <ReactMarkdown> here */}

              {/* For basic text rendering or HTML content */}
              {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
              <ReactMarkdown>{content}</ReactMarkdown>

              {/* If using Markdown, use: <ReactMarkdown>{content}</ReactMarkdown> */}
            </article>

            {/* Author Bio Box (Dynamic) */}
            <div className="mt-12 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
              {/* Author Image Logic Here if available */}
              <div>
                <h4 className="text-lg font-bold text-neobyte-navy">
                  {author?.data?.attributes?.name || "Author"}
                </h4>
                <p className="text-neobyte-teal text-sm font-bold mb-2">
                  Content Creator
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Table of Contents - Unchanged (Or make dynamic based on headers) */}
          <div className="hidden lg:block lg:col-span-2">
            {/* ... TOC code ... */}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// 3. RELATED POSTS (Static for now or Pass as props)
// ============================================
const RelatedPosts: React.FC = () => {
  // ဒီအပိုင်းကို API ကနေယူချင်ရင် Parent ကနေ props နဲ့ထပ်ပို့ရပါမယ်
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      {/* ... existing code ... */}
    </section>
  );
};

// ============================================
// MAIN PAGE COMPONENT
// ============================================
const BlogDetail: React.FC<BlogDetailProps> = ({ blogData }) => {
  console.log(blogData, "blogData");
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-neobyte-teal/30">
      <main>
        {/* Pass fetched data to sub-components */}
        <ArticleHero data={blogData} />
        <ArticleContent data={blogData} />
        <RelatedPosts />
      </main>
    </div>
  );
};

export default BlogDetail;
