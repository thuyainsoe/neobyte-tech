"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import en from "@/i18n/en.json";
import mm from "@/i18n/mm.json";

const translations: Record<string, typeof en> = {
  en,
  mm,
};

export const languages = [
  {
    code: "en",
    label: "EN",
    flag: "https://flagcdn.com/w40/us.png",
    name: "English",
  },
  {
    code: "mm",
    label: "MM",
    flag: "https://flagcdn.com/w40/mm.png",
    name: "Myanmar",
  },
];

export type Language = (typeof languages)[number];

interface LanguageContextType {
  currentLang: Language;
  setCurrentLang: (lang: Language) => void;
  t: typeof en;
  locale: string; // Strapi locale string (e.g. "en" or "my-MM")
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const localeMap: Record<string, string> = {
  en: "en",
  mm: "my-MM",
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentLang, setCurrentLang] = useState<Language>(languages[0]);

  const t = translations[currentLang.code] ?? en;
  const locale = localeMap[currentLang.code] ?? "en";

  return (
    <LanguageContext.Provider value={{ currentLang, setCurrentLang, t, locale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
