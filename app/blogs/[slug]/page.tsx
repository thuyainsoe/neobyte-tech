"use client";

// app/blogs/[slug]/page.tsx
import BlogDetail from "@/components/BlogDetail";
import React, { useState, useEffect, useCallback } from "react";
import { useParams, notFound } from "next/navigation";
import api from "@/lib/axios";
import { useLanguage } from "@/context/LanguageContext";

const BlogDetailPage = () => {
  const params = useParams();
  const slug = params.slug as string;
  const [blogData, setBlogData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFoundError, setNotFoundError] = useState(false);
  const { locale } = useLanguage();

  const fetchBlogPost = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get(
        `/api/blogs?filters[slug][$eq]=${slug}&populate=*&locale=${locale}`,
      );

      // Strapi filters return an array, so get the first item
      if (response.data.data && response.data.data.length > 0) {
        setBlogData(response.data.data[0]);
      } else {
        setNotFoundError(true);
      }
    } catch (error) {
      console.error("Error fetching blog post:", error);
      setNotFoundError(true);
    } finally {
      setLoading(false);
    }
  }, [slug, locale]);

  useEffect(() => {
    fetchBlogPost();
  }, [fetchBlogPost]);

  // Data မရှိရင် 404 ပြပါမယ်
  if (notFoundError) {
    notFound();
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-neobyte-teal border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Client Component ကို Data ပို့ပေးလိုက်ပါမယ်
  return <BlogDetail blogData={blogData} />;
};

export default BlogDetailPage;
