"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useLanguage } from "../utils/LanguageContext";

export default function LocalSwitcher() {
  const router = useRouter();
  const localActive = useLocale();
  const { changeLanguage } = useLanguage();
  const [currentLocale, setCurrentLocale] = useState(localActive);

  const onSelectChange = (e) => {
    const nextLocale = e.target.value;
    setCurrentLocale(nextLocale);
    changeLanguage(nextLocale);
    const path = window.location.pathname.replace(
      `/${localActive}`,
      `/${nextLocale}`
    );
    router.replace(path);
  };

  useEffect(() => {
    if (currentLocale !== localActive) {
      const path = window.location.pathname.replace(
        `/${localActive}`,
        `/${currentLocale}`
      );
      router.replace(path);
    }
  }, [currentLocale, localActive, router]);

  return (
    <label className="border-2 rounded">
      <p className="sr-only">Change language</p>
      <select
        value={currentLocale}
        className="bg-transparent py-2"
        onChange={onSelectChange}
      >
        <option value="en">English</option>
        <option value="ar">Arabic</option>
      </select>
    </label>
  );
}
