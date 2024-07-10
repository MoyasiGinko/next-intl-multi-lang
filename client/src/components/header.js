// components/Header.js
import { useTranslations } from "next-intl";
import LocalSwitcher from "./local-switcher";

export default function Header() {
  const t = useTranslations("Navigation");

  return (
    <header className="p-4">
      <nav className="flex items-center justify-between">
        <a href="">{t("home")}</a>
        <LocalSwitcher />
      </nav>
    </header>
  );
}
