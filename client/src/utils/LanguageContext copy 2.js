"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { IntlProvider } from "react-intl";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const router = useRouter();
  const [activeLanguage, setActiveLanguage] = useState("en"); // Default language
  const [messages, setMessages] = useState({});

  useEffect(() => {
    const locale = localStorage.getItem("locale") || "en";
    setActiveLanguage(locale);
    loadMessages(locale);
  }, []);

  const loadMessages = async (locale) => {
    const messages = await import(`../../public/locales/${locale}.json`);
    setMessages(messages.default);
  };

  const changeLanguage = (locale) => {
    setActiveLanguage(locale);
    localStorage.setItem("locale", locale);
    loadMessages(locale);
  };

  useEffect(() => {
    console.log("Active Language changed:", activeLanguage);
  }, [activeLanguage]);

  return (
    <LanguageContext.Provider value={{ activeLanguage, changeLanguage }}>
      <IntlProvider locale={activeLanguage} messages={messages}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
