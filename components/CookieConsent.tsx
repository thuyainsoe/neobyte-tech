"use client";

import React, { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // 1. Website စပွင့်တာနဲ့ အရင်က Consent ပေးဖူးလား စစ်မယ်
    const savedConsent = localStorage.getItem("neobyte_cookie_consent");

    // မရှိသေးမှ (null) Popup ကို ပြမယ်
    if (!savedConsent) {
      // UX အရ 1 စက္ကန့်လောက်ကြာမှ ပြတာ ပိုကောင်းတယ်
      const timer = setTimeout(() => setShowConsent(true), 1000);
      return () => clearTimeout(timer);
    }

    // ရှိပြီးသားဆိုရင် Scripts တွေကို run မယ် (Optional)
    if (savedConsent === "granted") {
      activateTrackingScripts();
    }
  }, []);

  const handleAccept = () => {
    // 2. User က Accept လုပ်ရင် LocalStorage မှာ မှတ်မယ်
    localStorage.setItem("neobyte_cookie_consent", "granted");
    setShowConsent(false);

    // Google Analytics စတာတွေကို ဒီနေရာမှာ စ run မယ်
    activateTrackingScripts();
  };

  const handleDecline = () => {
    // 3. User က Decline လုပ်ရင်လည်း မှတ်ထားမယ် (ဒါမှ နောက်တစ်ခေါက် ထပ်မမေးမှာ)
    localStorage.setItem("neobyte_cookie_consent", "denied");
    setShowConsent(false);
  };

  // Tracking Scripts Trigger Function (Example)
  const activateTrackingScripts = () => {
    console.log("Tracking Scripts Activated! (GA4, FB Pixel)");
    // ဒီနေရာမှာ Google Tag Manager (သို့) GA4 code တွေ inject လုပ်ရပါတယ်
    // window.gtag('consent', 'update', { ... });
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 z-[200] p-4 md:p-6"
        >
          <div className="max-w-5xl mx-auto bg-neobyte-navy text-white rounded-xl shadow-2xl border border-white/10 p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Icon & Text */}
            <div className="flex-1 flex gap-4">
              <div className="w-12 h-12 bg-neobyte-teal/20 rounded-lg flex items-center justify-center shrink-0">
                <Cookie className="text-neobyte-teal w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">
                  We value your privacy
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  We use cookies to enhance your browsing experience, serve
                  personalized content, and analyze our traffic. By clicking
                  "Accept All", you consent to our use of cookies.
                  <a
                    href="/privacy-policy"
                    className="text-neobyte-teal hover:underline ml-1"
                  >
                    Read Policy
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={handleDecline}
                className="px-6 py-3 rounded-lg border border-gray-600 text-gray-300 font-bold text-sm hover:bg-white/5 transition-colors whitespace-nowrap"
              >
                Necessary Only
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-3 rounded-lg bg-neobyte-teal text-neobyte-navy font-bold text-sm hover:bg-white hover:text-neobyte-navy transition-colors shadow-lg whitespace-nowrap"
              >
                Accept All
              </button>
            </div>

            {/* Close Button (Optional) */}
            <button
              onClick={() => setShowConsent(false)}
              className="absolute top-4 right-4 md:hidden text-gray-400"
            >
              <X size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
