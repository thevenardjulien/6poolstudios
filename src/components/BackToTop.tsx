'use client'

import useWindowScroll from "@/hooks/useWindowScroll";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {

    const scrollY = useWindowScroll();
    const [displayBackToTop, setDisplayBackToTop] = useState(false);

    useEffect(() => {
        if (scrollY > 200) {
            setDisplayBackToTop(true);
        } else {
            setDisplayBackToTop(false);
        }
    }, [scrollY]);

  return (
    displayBackToTop ?
        <div className="fixed bottom-[20px] right-[15px] z-50 text-2xl bg-white text-main p-2 shadow-md border-[1px] border-border hover:cursor-pointer hover:bg-main hover:text-white" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <FaArrowUp />
    </div> 
    : null 
  );
}