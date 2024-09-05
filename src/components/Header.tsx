import { useTranslations } from "next-intl";
import LanguageChanger from "./LanguageChanger";
import Link from "next/link";

export default function Header() {

  const t = useTranslations("Header");

  return (
    <header className="flex items-center justify-between gap-4 p-4 bg-main text-white w-full">
      <p className="text-2xl font-bold">6Pool Studios</p>
      <div className="flex items-center gap-4">
        <Link href="/about" className="text-xl hover:underline">
          {t("about")}
        </Link>
        <Link href="/contact" className="text-xl hover:underline">
          {t("contact")}
        </Link>
        <LanguageChanger />
      </div>
    </header>
  );
}