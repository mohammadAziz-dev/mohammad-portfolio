import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

import { DEFAULT_LANGUAGE, LANGUAGE_STORAGE_KEY, translations, type Language } from './types';

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: typeof translations.en;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function getInitialLanguage(): Language {
  try {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (savedLanguage && savedLanguage in translations) {
      return savedLanguage as Language;
    }
  } catch {
    // Use the default language if storage is unavailable.
  }

  return DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;

    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // Language switching still works without localStorage.
    }
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return context;
}
