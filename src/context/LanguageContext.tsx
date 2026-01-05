'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { he, Dictionary } from '@/dicts/he';
import { en } from '@/dicts/en';

type Language = 'he' | 'en';

interface LanguageContextType {
  language: Language;
  dict: Dictionary;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'meatup-lang';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('he');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored && (stored === 'he' || stored === 'en')) {
      setLanguageState(stored);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, language);
      document.documentElement.lang = language;
      document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
    }
  }, [language, mounted]);

  const dict = language === 'he' ? he : en;

  const toggleLanguage = () => {
    setLanguageState(prev => prev === 'he' ? 'en' : 'he');
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ language: 'he', dict: he, toggleLanguage, setLanguage }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, dict, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}


