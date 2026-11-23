'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  getDictionary,
  getLocaleDirection,
  isValidLocale,
  type Dictionary,
  type Locale,
} from '@/lib/i18n';

interface LanguageContextValue {
  locale: Locale;
  dir: 'ltr' | 'rtl';
  t: Dictionary;
  setLocale: (next: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);
const LANG_STORAGE_KEY = 'sabernuts-locale';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (isValidLocale(saved)) {
      setLocaleState(saved);
      document.documentElement.lang = saved;
      document.documentElement.dir = getLocaleDirection(saved);
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(LANG_STORAGE_KEY, next);
    document.documentElement.lang = next;
    document.documentElement.dir = getLocaleDirection(next);
  };

  const dir = getLocaleDirection(locale);
  const t = getDictionary(locale);

  return (
    <LanguageContext.Provider value={{ locale, dir, t, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used inside LanguageProvider');
  }
  return ctx;
}
