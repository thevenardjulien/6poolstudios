import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function MainNav() {

    const t = useTranslations("MainNav");

  return (
    <>
        <Link href="/">
            {t("home")}
        </Link>
        <Link href="/about">
            {t("about")}
        </Link>
        <Link href="/contact">
            {t("contact")}
        </Link>
  </>
  )
  }
  