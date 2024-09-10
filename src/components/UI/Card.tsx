'use client'

import { twMerge } from "tailwind-merge";

export default function Card({ children, minHeight, maxHeight, bgColor, onClick }: { children: React.ReactNode, minHeight?: string, maxHeight?: string, bgColor?: string, onClick?: () => void }) {
  return (
    <div className={twMerge("border-[1px] rounded p-6 min-w-[300xp] max-w-[400px] bg-white shadow-md hover:scale-[105%] hover:cursor-pointer transition-all ease-in-out duration-300", minHeight ? minHeight : "", maxHeight ? maxHeight : "", bgColor ? bgColor : "")} onClick={onClick}>
        {children}
    </div>
  );
}