"use client";
// contexts/LanguageContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const router = useRouter();
  const [activeLanguage, setActiveLanguage] = useState("en"); // Default language

  useEffect(() => {
    const locale = router.locale || "en";
    setActiveLanguage(locale);
  }, [router.locale]);

  const changeLanguage = (locale) => {
    setActiveLanguage(locale);
    const path = window.location.pathname.replace(
      `/${router.locale}`,
      `/${locale}`
    );
    router.replace(path);
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
