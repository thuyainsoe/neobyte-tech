"use client";

import React, { useState } from "react";
import {
  Star,
  Heart,
  Minus,
  Plus,
  Share2,
  ShoppingCart,
  Truck,
  ShieldCheck,
  RefreshCw,
  ChevronRight,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

// ============================================
// 1. MOCK PRODUCT DATA
// ============================================
const PRODUCT = {
  id: 1,
  name: "Keychron Q1 Pro Wireless Custom Mechanical Keyboard",
  price: 199.0,
  originalPrice: 220.0,
  rating: 4.8,
  reviews: 128,
  sold: 450,
  description:
    " The Keychron Q1 Pro is a fully customizable mechanical keyboard with a 75% layout. It features a CNC aluminum body, double-gasket design, and QMK/VIA support. Connect wirelessly via Bluetooth 5.1 or wired via USB-C.",
  brand: "Keychron",
  warranty: "1 Year Warranty",
  stock: 15,
  images: [
    "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=800&auto=format&fit=crop", // Main
    "https://images.unsplash.com/photo-1587829741301-dc798b91add1?q=80&w=800&auto=format&fit=crop", // Side
    "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800&auto=format&fit=crop", // Detail
    "https://images.unsplash.com/photo-1595225476360-23a73950b711?q=80&w=800&auto=format&fit=crop", // Switch
  ],
  variants: {
    colors: ["Carbon Black", "Silver Grey", "Shell White"],
    switches: ["Red (Linear)", "Blue (Clicky)", "Brown (Tactile)"],
  },
  specs: [
    { label: "Layout", value: "75%" },
    { label: "Body Material", value: "Full CNC Aluminum" },
    { label: "Keycaps", value: "KSA Double-Shot PBT" },
    { label: "Battery", value: "4000 mAh" },
    { label: "Connection", value: "Bluetooth 5.1 / Type-C" },
  ],
};

const ProductDetail: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(
    PRODUCT.variants.colors[0],
  );
  const [selectedSwitch, setSelectedSwitch] = useState(
    PRODUCT.variants.switches[0],
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const handleQuantityChange = (type: "inc" | "dec") => {
    if (type === "dec" && quantity > 1) setQuantity(quantity - 1);
    if (type === "inc" && quantity < PRODUCT.stock) setQuantity(quantity + 1);
  };

  return (
    // Main Container with padding for Navbar
    <div className="bg-slate-50 min-h-screen pb-20 pt-24 md:pt-32 font-sans">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* === BREADCRUMBS === */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
          <span className="hover:text-neobyte-teal cursor-pointer">Store</span>
          <ChevronRight size={12} />
          <span className="hover:text-neobyte-teal cursor-pointer">
            Keyboards
          </span>
          <ChevronRight size={12} />
          <span className="text-neobyte-navy font-semibold truncate max-w-[200px]">
            {PRODUCT.name}
          </span>
        </div>

        {/* === MAIN PRODUCT SECTION (Grid) === */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-9 gap-0">
            {/* 1. LEFT: IMAGE GALLERY (4/9 cols) */}
            <div className="lg:col-span-4 p-4 md:p-5 border-b lg:border-b-0 lg:border-r border-gray-100">
              {/* Main Image */}
              <div className="aspect-square relative rounded-lg overflow-hidden bg-gray-50 mb-3 group">
                <img
                  src={PRODUCT.images[activeImage]}
                  alt={PRODUCT.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Sale Badge */}
                <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  SALE -10%
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-5 gap-2">
                {PRODUCT.images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`aspect-square rounded border cursor-pointer overflow-hidden ${activeImage === idx ? "border-neobyte-teal ring-1 ring-neobyte-teal/50" : "border-gray-200 hover:border-gray-300"}`}
                  >
                    <img src={img} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* 2. RIGHT: PRODUCT INFO (5/9 cols) */}
            <div className="lg:col-span-5 p-4 md:p-6 flex flex-col">
              {/* Header Info */}
              <div className="mb-4">
                <h1 className="text-xl md:text-2xl font-bold text-neobyte-navy leading-tight mb-2">
                  {PRODUCT.name}
                </h1>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-500 font-medium underline decoration-gray-300 ml-1">
                      {PRODUCT.rating} ({PRODUCT.reviews} Reviews)
                    </span>
                  </div>
                  <div className="w-px h-4 bg-gray-300"></div>
                  <span className="text-gray-500">{PRODUCT.sold} Sold</span>
                </div>
              </div>

              {/* Price Block */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6 flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-black text-neobyte-teal">
                      ${PRODUCT.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      ${PRODUCT.originalPrice}
                    </span>
                  </div>
                  <p className="text-xs text-neobyte-navy font-semibold mt-1 flex items-center gap-1">
                    <Truck size={12} /> Free Shipping over $50
                  </p>
                </div>
                {/* Share/Like */}
                <div className="flex gap-2">
                  <button className="p-2 text-gray-400 hover:text-red-500 bg-white rounded-full shadow-sm border border-gray-100">
                    <Heart size={18} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-neobyte-navy bg-white rounded-full shadow-sm border border-gray-100">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>

              {/* Variants Selection */}
              <div className="space-y-4 mb-6">
                {/* Color */}
                <div>
                  <span className="text-sm font-bold text-gray-700 block mb-2">
                    Color:{" "}
                    <span className="text-neobyte-teal">{selectedColor}</span>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {PRODUCT.variants.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-3 py-1.5 text-sm rounded border transition-all ${
                          selectedColor === color
                            ? "border-neobyte-teal bg-neobyte-teal/5 text-neobyte-teal font-bold ring-1 ring-neobyte-teal"
                            : "border-gray-200 text-gray-600 hover:border-gray-400"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Switches */}
                <div>
                  <span className="text-sm font-bold text-gray-700 block mb-2">
                    Switch Type:{" "}
                    <span className="text-neobyte-teal">{selectedSwitch}</span>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {PRODUCT.variants.switches.map((sw) => (
                      <button
                        key={sw}
                        onClick={() => setSelectedSwitch(sw)}
                        className={`px-3 py-1.5 text-sm rounded border transition-all ${
                          selectedSwitch === sw
                            ? "border-neobyte-teal bg-neobyte-teal/5 text-neobyte-teal font-bold ring-1 ring-neobyte-teal"
                            : "border-gray-200 text-gray-600 hover:border-gray-400"
                        }`}
                      >
                        {sw}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quantity & Actions */}
              <div className="mt-auto pt-6 border-t border-gray-100">
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Quantity Input */}
                  <div className="flex items-center border border-gray-300 rounded-lg w-fit h-12 bg-white">
                    <button
                      onClick={() => handleQuantityChange("dec")}
                      className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-neobyte-navy hover:bg-gray-50 rounded-l-lg"
                    >
                      <Minus size={16} />
                    </button>
                    <input
                      type="text"
                      value={quantity}
                      readOnly
                      className="w-12 text-center text-neobyte-navy font-bold text-sm focus:outline-none"
                    />
                    <button
                      onClick={() => handleQuantityChange("inc")}
                      className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-neobyte-navy hover:bg-gray-50 rounded-r-lg"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex-1 flex gap-3">
                    <button className="flex-1 h-12 border-2 border-neobyte-teal text-neobyte-teal font-bold rounded-lg hover:bg-neobyte-teal/5 flex items-center justify-center gap-2 transition-colors">
                      <ShoppingCart size={18} />
                      Add to Cart
                    </button>
                    <button className="flex-1 h-12 bg-neobyte-navy text-white font-bold rounded-lg hover:bg-neobyte-teal hover:text-neobyte-navy transition-all shadow-lg flex items-center justify-center">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-2 mt-6 text-[10px] sm:text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-neobyte-teal" />
                  <span>{PRODUCT.warranty}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck size={16} className="text-neobyte-teal" />
                  <span>Free Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <RefreshCw size={16} className="text-neobyte-teal" />
                  <span>7 Days Return</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* === BOTTOM DETAILS SECTION (Tabs) === */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Product Details (2/3) */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100">
            {/* Tab Headers */}
            <div className="flex border-b border-gray-100">
              {["description", "specifications", "reviews"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-4 text-xs lg:text-sm font-bold uppercase tracking-wider border-b-2 transition-colors ${
                    activeTab === tab
                      ? "border-neobyte-teal text-neobyte-teal bg-gray-50"
                      : "border-transparent text-gray-500 hover:text-neobyte-navy"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content - Compact Padding */}
            <div className="p-5 md:p-6 text-sm text-gray-600 leading-relaxed min-h-[300px]">
              {activeTab === "description" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h3 className="font-bold text-neobyte-navy text-lg mb-3">
                    Product Description
                  </h3>
                  <p className="mb-4">{PRODUCT.description}</p>
                  <p className="mb-4">
                    The aluminum body is crafted using a CNC machine, polished,
                    anodized, sandblasted, and undergoes 24 more manufacturing
                    stages to make this piece of art.
                  </p>
                  <img
                    src="https://images.unsplash.com/photo-1595225476360-23a73950b711?q=80&w=800&auto=format&fit=crop"
                    className="w-full h-64 object-cover rounded-lg my-4"
                    alt="Feature"
                  />
                </motion.div>
              )}

              {activeTab === "specifications" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h3 className="font-bold text-neobyte-navy text-lg mb-4">
                    Tech Specs
                  </h3>
                  <div className="space-y-0">
                    {PRODUCT.specs.map((spec, i) => (
                      <div
                        key={i}
                        className={`flex py-3 px-4 ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                      >
                        <span className="w-1/3 font-semibold text-gray-700">
                          {spec.label}
                        </span>
                        <span className="w-2/3 text-gray-600">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "reviews" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-neobyte-navy text-lg">
                      Customer Reviews ({PRODUCT.reviews})
                    </h3>
                    <button className="text-neobyte-teal font-bold hover:underline">
                      Write a Review
                    </button>
                  </div>

                  {/* Mock Review Item */}
                  {[1, 2].map((review) => (
                    <div
                      key={review}
                      className="border-b border-gray-100 py-4 last:border-0"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                          <div>
                            <p className="font-bold text-xs text-neobyte-navy">
                              John Doe
                            </p>
                            <div className="flex text-yellow-400">
                              <Star size={10} fill="currentColor" />
                              <Star size={10} fill="currentColor" />
                              <Star size={10} fill="currentColor" />
                              <Star size={10} fill="currentColor" />
                              <Star size={10} fill="currentColor" />
                            </div>
                          </div>
                        </div>
                        <span className="text-xs text-gray-400">
                          2 days ago
                        </span>
                      </div>
                      <p className="text-gray-600">
                        The build quality is insane! Heavy, solid, and sounds
                        thocky out of the box.
                      </p>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Right: Related / Up-sell (1/3) */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
              <h4 className="font-bold text-neobyte-navy mb-4 text-sm uppercase">
                Company Promise
              </h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-neobyte-teal/10 flex items-center justify-center text-neobyte-teal shrink-0">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <strong className="block text-neobyte-navy">
                      Authentic Products
                    </strong>
                    <span className="text-xs">
                      100% genuine sourced directly.
                    </span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Truck size={16} />
                  </div>
                  <div>
                    <strong className="block text-neobyte-navy">
                      Fast Delivery
                    </strong>
                    <span className="text-xs">
                      2-3 business days within Yangon.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
              <h4 className="font-bold text-neobyte-navy mb-4 text-sm uppercase">
                You may also like
              </h4>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-3 group cursor-pointer">
                    <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden">
                      <img
                        src={`https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=200&auto=format&fit=crop`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-neobyte-navy leading-tight group-hover:text-neobyte-teal">
                        Razer DeathAdder V3
                      </h5>
                      <p className="text-xs text-gray-500 mt-1">Mice</p>
                      <p className="text-sm font-bold text-neobyte-teal mt-1">
                        $69.00
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
