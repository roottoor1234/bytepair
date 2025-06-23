"use client";

import { useState, useEffect } from 'react';
import { translations, Language } from '@/lib/translations';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('en');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage && translations[savedLanguage]) {
        setLanguage(savedLanguage);
      }
      setIsLoaded(true);
    }
  }, []);

const changeLanguage = (newLanguage: Language) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', newLanguage);
    window.location.reload(); // κάνει reload τη σελίδα
  }
};

  const t = translations[language];

  return { language, changeLanguage, t, isLoaded };
}