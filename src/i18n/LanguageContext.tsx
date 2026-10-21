import React, { createContext, useContext, useEffect, useState } from "react";
import { translations, TranslationsType } from "./translations";

export type LangType = "en" | "ru";

// Text that exists in both languages: { en: "...", ru: "..." }
export type Localized<T = string> = Record<LangType, T>;

const STORAGE_KEY = "lang";

const getInitialLang = (): LangType => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "ru") return saved;
  } catch {}

  return navigator.language.toLowerCase().startsWith("ru") ? "ru" : "en";
};

type LanguageContextType = {
  lang: LangType;
  t: TranslationsType;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLang] = useState<LangType>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = translations[lang].meta.title;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
  }, [lang]);

  const toggleLang = () => setLang(lang === "en" ? "ru" : "en");

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
};
