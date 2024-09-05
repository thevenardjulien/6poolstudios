import { useTranslations } from "next-intl";

export default function Welcome({ onClick }: { onClick?: () => void }) {

  const t = useTranslations("HomePage");

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
    <h1 className="flex items-center gap-2 text-center text-5xl font-bold bg-main text-white p-6 rounded hover:cursor-crosshair hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-indigo-800" onClick={onClick}>
          {t("welcome")}
          <br />
          {t("brand")}
          </h1>
        <h2 className="text-center text-2xl">{t("catchphrase")}</h2>
    </div>
  );
}