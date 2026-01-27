import BlogDetail from "@/components/BlogDetail";
import React from "react";

const BlogDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <BlogDetail />;
};

export default BlogDetailPage;
