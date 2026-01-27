"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ShoppingCart,
  Filter,
  Star,
  Heart,
  X,
  Menu,
  SlidersHorizontal,
  ChevronRight,
} from "lucide-react";

// ============================================
// 1. MOCK DATA & CONFIG
// ============================================
const PRODUCTS = Array.from({ length: 15 }).map((_, i) => ({
  id: i + 1,
  name:
    i % 2 === 0
      ? "Keychron Q1 Pro Wireless Custom Mechanical Keyboard"
      : "Logitech MX Master 3S Performance Mouse",
  category: i % 2 === 0 ? "Keyboards" : "Mice",
  price: i % 2 === 0 ? 199 : 99,
  originalPrice: i % 3 === 0 ? 220 : null,
  rating: 4.8,
  sold: 120 + i * 5,
  image:
    i % 2 === 0
      ? "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=600&auto=format&fit=crop"
      : "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=600&auto=format&fit=crop",
  brand: i % 2 === 0 ? "Keychron" : "Logitech",
}));

const FILTERS = {
  categories: [
    "All Products",
    "Keyboards",
    "Mice",
    "Monitors",
    "Components",
    "Networking",
    "Office Furniture",
  ],
  brands: ["Keychron", "Logitech", "Razer", "Dell", "Asus", "Apple"],
};

// ============================================
// 2. MAIN STORE PAGE COMPONENT
// ============================================
const Store: React.FC = () => {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All Products");

  return (
    // Main Wrapper - Background matches your Layout
    <div className="w-full bg-slate-50 pb-20 pt-24 md:pt-32">
      {/* Note: pt-24 or pt-32 is added to push content down 
         because your Global Navbar is likely fixed/absolute at the top.
         Adjust this padding if your navbar height is different.
      */}

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* === STORE HEADER (Replacement for StoreNavbar) === */}
        {/* This sits inside the page content now */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <span>Store</span> <ChevronRight size={14} />{" "}
              <span className="text-neobyte-teal font-bold">Catalog</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-neobyte-navy">
              IT Hardware Store
            </h1>
            <p className="text-slate-500 mt-2">
              Professional gear curated by our IT experts.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-96 relative">
            <input
              type="text"
              placeholder="Search keyboard, mouse..."
              className="w-full pl-4 pr-12 py-3 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-neobyte-teal/50"
            />
            <button className="absolute right-2 top-2 h-[calc(100%-16px)] px-3 bg-neobyte-navy text-white rounded-lg hover:bg-neobyte-teal transition-colors flex items-center justify-center">
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* === MAIN LAYOUT === */}
        <div className="flex gap-8 items-start">
          {/* ======================= */}
          {/* LEFT SIDEBAR (Desktop)  */}
          {/* ======================= */}
          <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-24">
            {/* Categories */}
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm mb-6">
              <h3 className="font-bold text-neobyte-navy mb-4 flex items-center gap-2 text-sm uppercase tracking-wider border-b pb-2">
                <Menu size={16} /> Categories
              </h3>
              <ul className="space-y-1 text-sm text-gray-600">
                {FILTERS.categories.map((cat) => (
                  <li
                    key={cat}
                    className={`cursor-pointer px-3 py-2 rounded-lg transition-all ${activeCategory === cat ? "bg-neobyte-teal/10 text-neobyte-teal font-bold" : "hover:bg-gray-50 hover:text-neobyte-navy"}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Filters */}
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-neobyte-navy mb-4 text-sm uppercase border-b pb-2">
                Filters
              </h3>

              {/* Price */}
              <div className="mb-6">
                <p className="text-xs font-bold text-gray-400 mb-2 uppercase">
                  Price Range
                </p>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full border border-gray-200 bg-gray-50 px-3 py-2 text-sm rounded-lg outline-none focus:border-neobyte-teal"
                  />
                  <span className="text-gray-400">-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full border border-gray-200 bg-gray-50 px-3 py-2 text-sm rounded-lg outline-none focus:border-neobyte-teal"
                  />
                </div>
              </div>

              {/* Brands */}
              <div>
                <p className="text-xs font-bold text-gray-400 mb-2 uppercase">
                  Brands
                </p>
                <div className="space-y-2">
                  {FILTERS.brands.map((brand) => (
                    <label
                      key={brand}
                      className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-neobyte-navy"
                    >
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-neobyte-teal focus:ring-neobyte-teal"
                      />
                      {brand}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* ======================= */}
          {/* CONTENT AREA (Grid)     */}
          {/* ======================= */}
          <main className="flex-1 w-full">
            {/* Toolbar (Mobile Filter + Sorting) */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-gray-500">
                Showing <span className="font-bold text-neobyte-navy">15</span>{" "}
                results
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => setMobileFilterOpen(true)}
                  className="lg:hidden flex items-center gap-2 text-neobyte-navy font-bold text-sm bg-white border border-gray-200 px-4 py-2 rounded-lg shadow-sm"
                >
                  <SlidersHorizontal size={16} /> Filter
                </button>

                <select className="bg-white border border-gray-200 text-sm text-gray-700 py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-neobyte-teal/20 cursor-pointer">
                  <option>Sort by: Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest Arrivals</option>
                </select>
              </div>
            </div>

            {/* PRODUCT GRID */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
              {PRODUCTS.map((product) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  key={product.id}
                  className="group bg-white border border-gray-100 hover:border-neobyte-teal/50 hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden flex flex-col cursor-pointer relative"
                >
                  {/* Image Area */}
                  <div className="aspect-square relative overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Wishlist Button */}
                    <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 text-gray-400 hover:text-red-500 hover:bg-white transition-colors">
                      <Heart size={14} />
                    </button>

                    {/* Discount Badge */}
                    {product.originalPrice && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                        SALE
                      </div>
                    )}
                  </div>

                  {/* Product Info - Compact Padding */}
                  <div className="p-3 flex flex-col flex-1">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wide mb-1">
                      {product.brand}
                    </span>

                    <h3 className="text-xs md:text-sm font-bold text-neobyte-navy leading-tight mb-2 line-clamp-2 min-h-[2.5em]">
                      {product.name}
                    </h3>

                    {/* Price */}
                    <div className="mt-auto">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-neobyte-teal font-black text-sm md:text-base">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-[10px] text-gray-400 line-through decoration-gray-400">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>

                      {/* Rating Row */}
                      <div className="flex items-center justify-between border-t border-gray-50 pt-2">
                        <div className="flex items-center gap-1">
                          <Star
                            size={10}
                            className="fill-yellow-400 text-yellow-400"
                          />
                          <span className="text-[10px] text-gray-500 font-medium">
                            {product.rating}
                          </span>
                        </div>
                        <span className="text-[10px] text-gray-400">
                          {product.sold} sold
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Add Button (Visible on Hover for Desktop) */}
                  <div className="absolute inset-x-0 bottom-0 bg-neobyte-navy text-white text-center py-2 text-xs font-bold uppercase translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    Add to Cart
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <button className="px-8 py-3 bg-white border border-gray-200 text-neobyte-navy font-bold rounded-xl shadow-sm hover:border-neobyte-teal hover:text-neobyte-teal transition-all">
                Load More Products
              </button>
            </div>
          </main>
        </div>
      </div>

      {/* ======================= */}
      {/* MOBILE FILTER DRAWER    */}
      {/* ======================= */}
      <AnimatePresence>
        {mobileFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-[60] lg:hidden"
              onClick={() => setMobileFilterOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[70] shadow-2xl lg:hidden flex flex-col"
            >
              <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                <h2 className="font-bold text-lg text-neobyte-navy">Filters</h2>
                <button onClick={() => setMobileFilterOpen(false)}>
                  <X size={24} className="text-gray-500" />
                </button>
              </div>

              <div className="p-5 overflow-y-auto flex-1 space-y-8">
                {/* Mobile Filters */}
                <div>
                  <h3 className="font-bold text-neobyte-navy text-sm mb-3 uppercase tracking-wide">
                    Categories
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {FILTERS.categories.map((cat) => (
                      <span
                        key={cat}
                        className={`text-xs border px-3 py-2 rounded-lg cursor-pointer ${activeCategory === cat ? "bg-neobyte-navy text-white border-neobyte-navy" : "border-gray-200 text-gray-600 bg-gray-50"}`}
                        onClick={() => setActiveCategory(cat)}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-neobyte-navy text-sm mb-3 uppercase tracking-wide">
                    Price Range
                  </h3>
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm rounded-lg outline-none focus:border-neobyte-teal"
                    />
                    <span className="text-gray-400">-</span>
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm rounded-lg outline-none focus:border-neobyte-teal"
                    />
                  </div>
                </div>
              </div>

              <div className="p-5 border-t border-gray-100 flex gap-4 bg-white">
                <button className="flex-1 py-3 border border-gray-200 text-gray-600 font-bold rounded-xl hover:bg-gray-50">
                  Reset
                </button>
                <button
                  className="flex-1 py-3 bg-neobyte-teal text-white font-bold rounded-xl shadow-lg shadow-neobyte-teal/30"
                  onClick={() => setMobileFilterOpen(false)}
                >
                  Apply
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Store;
