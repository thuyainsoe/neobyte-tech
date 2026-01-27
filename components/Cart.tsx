"use client";

import React, { useState, useEffect } from "react";
import {
  Trash2,
  Minus,
  Plus,
  ArrowRight,
  ShoppingBag,
  ShieldCheck,
  CreditCard,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// ============================================
// 1. MOCK DATA
// ============================================
const INITIAL_CART = [
  {
    id: 1,
    name: "Keychron Q1 Pro Wireless Custom Mechanical Keyboard",
    variant: "Carbon Black / Red Switch",
    price: 199.0,
    image:
      "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=300&auto=format&fit=crop",
    quantity: 1,
    stock: 5,
  },
  {
    id: 2,
    name: "Logitech MX Master 3S Performance Wireless Mouse",
    variant: "Graphite",
    price: 99.0,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=300&auto=format&fit=crop",
    quantity: 2,
    stock: 10,
  },
];

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState(INITIAL_CART);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0); // Free shipping logic can be added here
  const [total, setTotal] = useState(0);

  // Update totals whenever cart changes
  useEffect(() => {
    const newSubtotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    setSubtotal(newSubtotal);
    setShipping(newSubtotal > 50 ? 0 : 10); // Example: Free shipping over $50
    setTotal(newSubtotal + (newSubtotal > 50 ? 0 : 10));
  }, [cartItems]);

  const updateQuantity = (id: number, type: "inc" | "dec") => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = type === "inc" ? item.quantity + 1 : item.quantity - 1;
          // Clamp quantity between 1 and stock
          if (newQty >= 1 && newQty <= item.stock) {
            return { ...item, quantity: newQty };
          }
        }
        return item;
      }),
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Empty State
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 pt-32 pb-20 flex flex-col items-center justify-center px-4">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-400">
          <ShoppingBag size={48} />
        </div>
        <h2 className="text-2xl font-bold text-neobyte-navy mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-500 mb-8 text-center max-w-md">
          Looks like you haven't added any professional gear to your cart yet.
        </p>
        <Link
          href="/store"
          className="px-8 py-3 bg-neobyte-navy text-white font-bold rounded-xl hover:bg-neobyte-teal hover:text-neobyte-navy transition-all shadow-lg"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20 pt-24 md:pt-32 font-sans">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <h1 className="text-2xl md:text-3xl font-black text-neobyte-navy mb-6 flex items-center gap-3">
          Shopping Cart{" "}
          <span className="text-lg font-medium text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full">
            {cartItems.length}
          </span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ======================= */}
          {/* LEFT: CART ITEMS LIST   */}
          {/* ======================= */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Header Row (Hidden on Mobile) */}
              <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b border-gray-100 bg-gray-50/50 text-xs font-bold text-gray-500 uppercase tracking-wider">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              <div className="divide-y divide-gray-100">
                <AnimatePresence>
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 md:p-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group"
                    >
                      {/* Product Info */}
                      <div className="col-span-1 md:col-span-6 flex gap-4">
                        <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden shrink-0 border border-gray-200">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h3 className="font-bold text-neobyte-navy text-sm md:text-base leading-tight mb-1 line-clamp-2">
                            {item.name}
                          </h3>
                          <p className="text-xs text-gray-500 mb-2">
                            {item.variant}
                          </p>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="flex items-center gap-1 text-xs text-red-500 hover:text-red-700 font-medium w-fit transition-colors"
                          >
                            <Trash2 size={12} /> Remove
                          </button>
                        </div>
                      </div>

                      {/* Price (Mobile: Hidden or Inline) */}
                      <div className="col-span-1 md:col-span-2 flex md:justify-center items-center justify-between md:hidden">
                        <span className="text-sm font-bold text-gray-500 md:hidden">
                          Price:
                        </span>
                        <span className="text-sm font-bold text-gray-700">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                      {/* Price Desktop */}
                      <div className="hidden md:flex col-span-2 justify-center text-sm font-bold text-gray-700">
                        ${item.price.toFixed(2)}
                      </div>

                      {/* Quantity */}
                      <div className="col-span-1 md:col-span-2 flex md:justify-center items-center justify-between">
                        <span className="text-sm font-bold text-gray-500 md:hidden">
                          Quantity:
                        </span>
                        <div className="flex items-center border border-gray-200 rounded-lg h-8 bg-white">
                          <button
                            onClick={() => updateQuantity(item.id, "dec")}
                            className="w-8 h-full flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-neobyte-navy rounded-l-lg transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm font-bold text-neobyte-navy">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, "inc")}
                            className="w-8 h-full flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-neobyte-navy rounded-r-lg transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Total */}
                      <div className="col-span-1 md:col-span-2 flex md:justify-end items-center justify-between border-t border-gray-50 pt-3 mt-1 md:border-0 md:pt-0 md:mt-0">
                        <span className="text-sm font-bold text-gray-500 md:hidden">
                          Subtotal:
                        </span>
                        <span className="text-base font-black text-neobyte-teal">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="bg-gray-50 p-4 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
                <ArrowRight size={14} className="text-neobyte-teal" />
                <span>
                  Continue shopping?{" "}
                  <Link
                    href="/store"
                    className="text-neobyte-teal font-bold hover:underline"
                  >
                    Browse Products
                  </Link>
                </span>
              </div>
            </div>
          </div>

          {/* ======================= */}
          {/* RIGHT: ORDER SUMMARY    */}
          {/* ======================= */}
          <div className="w-full lg:w-80 xl:w-96 shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 sticky top-32">
              <h3 className="font-bold text-neobyte-navy text-lg mb-5 border-b border-gray-100 pb-3">
                Order Summary
              </h3>

              <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-bold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping Estimate</span>
                  <span className="font-bold">
                    {shipping === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax Estimate (5%)</span>
                  <span className="font-bold text-gray-400">
                    Calculated at checkout
                  </span>
                </div>
              </div>

              {/* Promo Code - Compact */}
              <div className="mb-6">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Promo Code"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-neobyte-teal transition-colors"
                  />
                  <button className="bg-gray-200 text-gray-600 px-3 py-2 rounded-lg text-xs font-bold hover:bg-gray-300 transition-colors">
                    Apply
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 mb-6">
                <div className="flex justify-between items-end">
                  <span className="font-bold text-neobyte-navy">Total</span>
                  <span className="text-2xl font-black text-neobyte-navy">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <p className="text-[10px] text-gray-400 mt-1 text-right">USD</p>
              </div>

              <button className="w-full bg-neobyte-navy text-white font-bold py-3.5 rounded-xl hover:bg-neobyte-teal hover:text-neobyte-navy transition-all shadow-lg flex items-center justify-center gap-2 group">
                Checkout Now{" "}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              {/* Trust Signals */}
              <div className="mt-6 flex flex-col gap-2 items-center text-center">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <ShieldCheck size={14} className="text-neobyte-teal" />
                  <span>Secure Encrypted Checkout</span>
                </div>
                <div className="flex gap-2 opacity-50 grayscale">
                  {/* Placeholder icons for payment methods */}
                  <div className="w-8 h-5 bg-gray-200 rounded"></div>
                  <div className="w-8 h-5 bg-gray-200 rounded"></div>
                  <div className="w-8 h-5 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
