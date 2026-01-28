import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { type Language, translations, type Translations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    // Check URL for language parameter
    const path = window.location.pathname;
    const langMatch = path.match(/^\/(fr|de|it|en)/);
    if (langMatch) {
      setLanguage(langMatch[1] as Language);
    } else {
      // Default to French for Fribourg (postal code 1700)
      setLanguage('fr');
    }
  }, []);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
