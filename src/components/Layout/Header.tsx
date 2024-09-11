'use client'

import { Link } from "@/i18n/routing";
import LanguageChanger from "../LanguageChanger";
import useWindowSize from "@/hooks/useWindowSize";
import MainNav from "../MainNav";
import MobileNav from "../MobileNav";
import { useEffect, useState } from "react";

export default function Header() {

  const { width } = useWindowSize();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => { setIsDesktop(width >= 1024); }, [width]);

  return (
      <header className="grid grid-cols-3 items-center justify-between gap-4 py-4 px-12 w-full border-b-[1px] border-border">
        <div className="flex items-center justify-start gap-4 text-lg width-1/3">
          <span>
            <Link href="/" className="text-2xl font-bold flex-1">{isDesktop ? "6Pool Studios" : "6PS"}</Link>
          </span>
        </div>
        <div className={`flex items-center justify-center gap-4 text-lg width-1/3 bg-white z-20 rounded py-4 px-8` }>
          {isDesktop ? <MainNav /> : <MobileNav />}
        </div>
        <div className="flex justify-end text-lg width-1/3">
          <LanguageChanger />
        </div>
      </header>
  );
}