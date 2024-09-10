import { useTranslations } from "next-intl";
import HomeCards from "./HomeCards";

export default function Services() {

  const t = useTranslations("Services");

  return (
    <div className="flex flex-col gap-12 items-center bg-lightBackground py-20 px-12">
        <h2 className="text-5xl font-bold text-balance">
          {t("title")}{" "}
          <span className="text-main">{t("keywords1")}</span>
          <span>{" "}{t("keywords2")}</span>
        </h2>
        <HomeCards />
    </div>
  );
}