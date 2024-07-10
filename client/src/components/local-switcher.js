"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useLanguage } from "@/utils/LanguageContext";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const { changeLanguage } = useLanguage();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
    changeLanguage(nextLocale);
  };
  return (
    <label className="border-2 rounded">
      <p className="sr-only">change language</p>
      <select
        defaultValue={localActive}
        className="bg-transparent py-2"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en">English</option>
        <option value="ar">Arabic</option>
      </select>
    </label>
  );
}
