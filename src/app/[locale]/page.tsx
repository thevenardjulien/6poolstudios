import { useTranslations } from "next-intl";

export default function Home() {

  const t = useTranslations("HomePage");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-2 row-start-2 items-center justify-center sm:items-start font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="flex items-center gap-2 text-center text-5xl font-bold bg-indigo-800 text-white p-4 rounded">
              {t("welcome")}
              <br />
              {t("brand")}
              </h1>
            <h2 className="text-center text-2xl">{t("catchphrase")}</h2>
        </div>
      </main>
    </div>
  );
}
