import { twMerge } from "tailwind-merge";

export default function Button(
  { children, bgColor, textColor, border, borderColor, hoverBgColor, hoverTextColor, hoverBorder } : 
  { children: React.ReactNode, bgColor?: string, textColor?: string, border?: string, borderColor?: string; hoverBgColor?: string, hoverTextColor?: string, hoverBorder?: string }) {
  return (
    <button
      className={twMerge(
        "w-full md:w-fit",
        "text-xl px-10 py-4 rounded",
        bgColor ? bgColor : "bg-main",
        textColor ? textColor : "text-white",
        border ? border : "border-2",
        borderColor ? borderColor : "border-main",
        hoverBgColor ? hoverBgColor : "hover:bg-mainHover",
        hoverTextColor ? hoverTextColor : "hover:text-white",
        hoverBorder ? hoverBorder : "hover:border-mainHover",
        "hover:scale-[105%]",
        "ease-in-out duration-200"
      )}
    >
      {children}
    </button>
  );
}
