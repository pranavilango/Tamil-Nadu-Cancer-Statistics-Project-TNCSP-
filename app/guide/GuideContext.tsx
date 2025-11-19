// --- File: app/guide/GuideContext.tsx ---
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Language, guideContent } from './content';

interface GuideContextType {
  language: Language;
  toggleLanguage: () => void;
  content: typeof guideContent['en'];
}

const GuideContext = createContext<GuideContextType | undefined>(undefined);

export function GuideProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    // Fix: Explicitly typing 'prev' prevents the implicit 'any' error
    setLanguage((prev: Language) => (prev === 'en' ? 'ta' : 'en'));
  };

  return (
    <GuideContext.Provider value={{ language, toggleLanguage, content: guideContent[language] }}>
      {children}
    </GuideContext.Provider>
  );
}

export function useGuide() {
  const context = useContext(GuideContext);
  if (!context) {
    throw new Error('useGuide must be used within a GuideProvider');
  }
  return context;
}