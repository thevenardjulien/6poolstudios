'use client'

import useWindowScroll from "@/hooks/useWindowScroll";
import { useEffect, useState } from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

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
        <div className="fixed bottom-0 right-0 z-50 m-4 flex items-center justify-center gap-2 rounded-full bg-white p-2 shadow-md hover:shadow-lg hover:bg-main hover:text-white hover:cursor-pointer text-3xl" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <FaRegArrowAltCircleUp />
    </div> 
    : null 
  );
}