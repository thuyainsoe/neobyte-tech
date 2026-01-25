"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react";

// ============================================
// 1. CONTACT HERO
// ============================================
const ContactHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-20 overflow-hidden bg-slate-50">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
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
            Contact Us
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-neobyte-navy mb-6 leading-tight">
            Let's Start a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neobyte-teal to-blue-600">
              Conversation.
            </span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Have a project in mind or just want to say hi? We're all ears. Our
            team is ready to help you turn your digital dreams into reality.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// 2. MAIN CONTACT SECTION (Form + Info)
// ============================================
const ContactContent: React.FC = () => {
  return (
    <section className="pb-24 bg-slate-50 mt-7 lg:mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Info Card 1: Email */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-neobyte-navy mb-1">
                Email Us
              </h3>
              <p className="text-slate-500 text-sm mb-4">
                For general inquiries and projects.
              </p>
              <a
                href="mailto:hello@neobyte.com"
                className="text-neobyte-teal font-bold hover:underline"
              >
                hello@neobyte.com
              </a>
            </div>

            {/* Info Card 2: Phone */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-neobyte-navy mb-1">
                Call Us
              </h3>
              <p className="text-slate-500 text-sm mb-4">
                Mon-Fri from 9am to 6pm.
              </p>
              <a
                href="tel:+15550000000"
                className="text-neobyte-teal font-bold hover:underline"
              >
                +1 (555) 000-0000
              </a>
            </div>

            {/* Info Card 3: Office */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-neobyte-navy mb-1">
                Visit Us
              </h3>
              <p className="text-slate-500 text-sm mb-4">
                123 Innovation Dr, Tech City.
              </p>
              <a
                href="#"
                className="text-neobyte-teal font-bold hover:underline"
              >
                View on Map
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 relative overflow-hidden"
            >
              {/* Decorative Blob inside form */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-neobyte-teal/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

              <h2 className="text-2xl font-bold text-neobyte-navy mb-6">
                Send us a message
              </h2>

              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:border-neobyte-teal focus:ring-2 focus:ring-neobyte-teal/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:border-neobyte-teal focus:ring-2 focus:ring-neobyte-teal/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:border-neobyte-teal focus:ring-2 focus:ring-neobyte-teal/20 outline-none transition-all text-slate-600">
                    <option>I have a project idea</option>
                    <option>I want to hire you</option>
                    <option>General Inquiry</option>
                    <option>Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project details..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:border-neobyte-teal focus:ring-2 focus:ring-neobyte-teal/20 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button className="w-full py-4 bg-neobyte-navy text-white font-bold rounded-xl hover:bg-neobyte-teal hover:text-neobyte-navy transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group">
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// 3. MAP SECTION (Stylized Placeholder)
// ============================================
const MapSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-lg border border-gray-200 group">
          {/* Placeholder Image for Map - You can replace this with Google Maps Embed */}
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
            alt="Map Location"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />

          {/* Overlay Pin */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-4 h-4 bg-neobyte-teal rounded-full animate-ping absolute top-0 left-0"></div>
              <div className="w-12 h-12 bg-neobyte-navy text-white rounded-full flex items-center justify-center shadow-2xl relative z-10 border-4 border-white">
                <MapPin className="w-5 h-5" />
              </div>
              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap">
                <p className="text-xs font-bold text-neobyte-navy">
                  Neobyte HQ
                </p>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// 4. FAQ SECTION
// ============================================
const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "How much does a website cost?",
      a: "The cost varies depending on complexity. A simple landing page starts from $1,500, while complex web apps can go up to $20k+.",
    },
    {
      q: "How long does it take to build a project?",
      a: "Typically, a website takes 4-8 weeks, while mobile apps take 3-6 months depending on features.",
    },
    {
      q: "Do you provide post-launch support?",
      a: "Yes! We offer 30 days of free support after launch, and optional maintenance packages thereafter.",
    },
    {
      q: "What technologies do you use?",
      a: "We specialize in React, Next.js, Node.js, Flutter, and AWS cloud infrastructure.",
    },
  ];

  return (
    <section className="py-24 bg-neobyte-light/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neobyte-navy">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 mt-2">
            Answers to common questions about our process.
          </p>
        </div>

        <div className="grid gap-6">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-neobyte-teal/50 transition-colors"
            >
              <h3 className="font-bold text-lg text-neobyte-navy mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-neobyte-teal" />
                {item.q}
              </h3>
              <p className="text-slate-500 pl-6 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// MAIN CONTACT PAGE COMPONENT
// ============================================
const Contact: React.FC = () => {
  return (
    <main>
      <ContactHero />
      <ContactContent />
      <MapSection />
      <FAQ />
    </main>
  );
};

export default Contact;
