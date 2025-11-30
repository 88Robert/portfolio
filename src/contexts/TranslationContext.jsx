import { createContext, useContext, useState, useEffect } from 'react';
import svTranslations from '../translations/sv.json';
import enTranslations from '../translations/en.json';

const TranslationContext = createContext();

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Get saved language from localStorage or default to Swedish
    return localStorage.getItem('language') || 'sv';
  });

  const translations = {
    sv: svTranslations,
    en: enTranslations,
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'sv' ? 'en' : 'sv';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <TranslationContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

