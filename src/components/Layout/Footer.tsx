import { useTranslations } from "next-intl";

export default function Footer() {

    const t = useTranslations("Footer");

  return (
    <footer className="flex justify-center gap-4 p-4 w-full border-t-[1px] border-border">
      <div className="flex  gap-4">
        <p>{t("copyright")}</p>
      </div>
    </footer>
  );
}