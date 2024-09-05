import { useTranslations } from "next-intl";
import LanguageChanger from "./LanguageChanger";

export default function Header() {

  const t = useTranslations("Header");

  return (
    <header className="flex items-center justify-between gap-4 p-4 bg-main text-white w-full">
      <p className="text-2xl font-bold">6Pool Studios</p>
      <div className="flex items-center gap-4">
        <a href="/about" className="text-xl hover:underline">
          {t("about")}
        </a>
        <a href="/contact" className="text-xl hover:underline">
          {t("contact")}
        </a>
        <LanguageChanger />
      </div>
    </header>
  );
}