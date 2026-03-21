import { createContext, useContext, useState } from 'react';
import { translations } from '../utilities/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  const changeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
  };

  const content = translations[language];

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};