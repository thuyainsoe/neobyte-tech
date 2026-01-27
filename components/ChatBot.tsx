"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Loader2,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Message Type Definition
type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
};

// Parse URLs into clickable <a> elements
const renderMessageText = (text: string, isUser: boolean) => {
  // 1. URL Pattern (http or https) ကို ရှာမယ့် Regex
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  return text.split(urlRegex).map((part, i) => {
    // 2. အကယ်၍ URL ဖြစ်နေရင် <a> tag နဲ့ ထုတ်ပေးမယ်
    if (part.match(urlRegex)) {
      return (
        <a
          key={i}
          href={part}
          target="_blank" // New Tab မှာ ဖွင့်ရန်
          rel="noopener noreferrer" // Security အတွက် မရှိမဖြစ်ပါ
          className={`underline font-semibold ${
            isUser ? "text-white" : "text-neobyte-teal hover:text-neobyte-navy"
          } transition-colors break-all`} // break-all က link ရှည်ရင် အောက်ကြောင်းဆင်းအောင်ပါ
        >
          {part}
        </a>
      );
    }
    // 3. ရိုးရိုးစာဆိုရင် ဒီတိုင်းပြန်ပေးမယ်
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
};

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi there! 👋 I'm Neo, your virtual assistant. Need any help with our IT services or products?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

  // Auto scroll to bottom
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => scrollToBottom(), [messages, isTyping]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    // 1. User Message ပြမယ်
    const userMsg: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true); // Typing indicator စပြမယ်

    try {
      // 2. Next.js API ကို လှမ်းပို့မယ် (Regex မသုံးတော့ဘူး)
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.text }),
      });

      const data = await response.json();

      // 3. AI ပြန်ဖြေတဲ့စာကို ပြမယ်
      const botReply: Message = {
        id: (Date.now() + 1).toString(),
        text: data.reply, // OpenAI က ပြန်လာတဲ့စာ
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botReply]);
    } catch (error) {
      // Error တက်ရင်
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, something went wrong. Please try again.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsTyping(false); // Typing indicator ပိတ်မယ်
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[150] flex flex-col items-end">
      {/* === CHAT WINDOW === */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="w-[350px] sm:w-[380px] h-[500px] max-h-[80vh] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="bg-neobyte-navy p-4 flex items-center justify-between text-white shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                    <Bot size={20} className="text-neobyte-teal" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-neobyte-navy rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-bold text-sm">Neobyte Assistant</h3>
                  <p className="text-[10px] text-gray-300 flex items-center gap-1">
                    <Sparkles size={10} className="text-neobyte-teal" /> AI
                    Powered
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      msg.sender === "user"
                        ? "bg-neobyte-teal text-white rounded-tr-none"
                        : "bg-white text-gray-700 border border-gray-100 rounded-tl-none"
                    }`}
                  >
                    {renderMessageText(msg.text, msg.sender === "user")}
                    <div
                      className={`text-[9px] mt-1 opacity-70 ${msg.sender === "user" ? "text-white" : "text-gray-400"}`}
                    >
                      {msg.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-gray-100 shrink-0">
              <form
                onSubmit={handleSendMessage}
                className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-neobyte-teal/20 focus-within:border-neobyte-teal transition-all"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 bg-transparent text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="p-2 bg-neobyte-navy text-white rounded-full hover:bg-neobyte-teal transition-all disabled:opacity-50 disabled:hover:bg-neobyte-navy"
                >
                  <Send
                    size={14}
                    className={inputValue.trim() ? "translate-x-0.5" : ""}
                  />
                </button>
              </form>
              <div className="text-center mt-2">
                <p className="text-[9px] text-gray-400">
                  Powered by Neobyte AI
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === TOGGLE BUTTON (LAUNCHER) === */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-colors duration-300 ${
          isOpen
            ? "bg-gray-200 text-gray-600 rotate-90"
            : "bg-neobyte-navy text-white hover:bg-neobyte-teal"
        }`}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <MessageCircle size={28} className="fill-current" />
        )}

        {/* Notification Badge (Optional) */}
        {!isOpen && (
          <span className="absolute top-0 right-0 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
          </span>
        )}
      </motion.button>
    </div>
  );
};

export default ChatBot;
