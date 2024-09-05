import { useTranslations } from "next-intl";

export default function Footer() {

    const t = useTranslations("Footer");

  return (
    <footer className="flex justify-center gap-4 p-4 bg-main text-white w-full">
      <div className="flex  gap-4">
        <p className="text-xl">{t("copyright")}</p>
      </div>
    </footer>
  );
}