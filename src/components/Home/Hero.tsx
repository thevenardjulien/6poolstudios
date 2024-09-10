import { useTranslations } from "next-intl";
import Image from "next/image";
import hero from "../../assets/images/hero.webp";
import Button from "../UI/Button";

export default function Hero() {

    const t = useTranslations("Hero");

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-full min-h-[85vh] px-12">
        <div className="flex flex-col gap-6 justify-center items-start lg:max-w-[750px] lg:relative lg:left-[30px] z-10">
            <h1 className="flex flex-col gap-2 text-5xl font-bold w-full">
                <div className="text-balance">
                    {t("catchphrase1")}
                    <span className="text-main">{" "}{t("keywords1")}{" "}</span>
                    <span className="text-main">{t("keywords2")}{" "}</span>
                    {t("catchphrase2")}
                    {t("catchphrase3")}
                    <span className="text-main">{" "}{t("keywords3")}</span>
                </div>
            </h1>
            <p className="text-xl lg:max-w-[650px]">
                {t("description")}
            </p>
            <div className="w-full flex flex-col md:flex-row gap-4">
                <Button>{t("cta1")}</Button>
                <Button bgColor="bg-white" textColor="text-black" border="border-[1px]" borderColor="border-border" hoverBgColor="hover:bg-main" hoverBorder="hover:border-[1px] hover:border-transparent">{t("cta2")}</Button>
            </div>
        </div>
        <div className="hidden lg:flex lg:relative lg:right-[30px]">
            <Image src={hero} alt="hero" width={500} height={500} placeholder="blur"/>
        </div>
    </div>
  );
}