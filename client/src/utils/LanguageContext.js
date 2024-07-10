"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocale } from "next-intl";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const localActive = useLocale();
  const [activeLanguage, setActiveLanguage] = useState(localActive);

  useEffect(() => {
    const locale = localStorage.getItem("locale") || localActive;
    setActiveLanguage(locale);
  }, []);

  const changeLanguage = (locale) => {
    setActiveLanguage(locale);
    localStorage.setItem("locale", locale);
  };

  useEffect(() => {
    console.log("Active Language changed:", activeLanguage);
  }, [activeLanguage]);

  return (
    <LanguageContext.Provider value={{ activeLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
