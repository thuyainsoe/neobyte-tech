import React from "react";
import ProductDetail from "@/components/ProductDetail";

const ProductDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <ProductDetail />;
};

export default ProductDetailPage;
