"use client";

import { LanguageProvider } from "@/context/LanguageContext";

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <LanguageProvider>{children}</LanguageProvider>;
};
