import { twMerge } from 'tailwind-merge'

export default function Button({
  children,
  bgColor,
  textColor,
  border,
  borderColor,
  hoverBgColor,
  hoverTextColor,
  hoverBorder,
  width,
  onClick,
}: {
  children: React.ReactNode
  bgColor?: string
  textColor?: string
  border?: string
  borderColor?: string
  hoverBgColor?: string
  hoverTextColor?: string
  hoverBorder?: string
  onClick?: () => void
  width?: string
}) {
  return (
    <button
      className={twMerge(
        'rounded px-10 py-4 text-xl',
        bgColor ? bgColor : 'bg-main',
        textColor ? textColor : 'text-white',
        border ? border : 'border-2',
        borderColor ? borderColor : 'border-main',
        hoverBgColor ? hoverBgColor : 'hover:bg-mainHover',
        hoverTextColor ? hoverTextColor : 'hover:text-white',
        hoverBorder ? hoverBorder : 'hover:border-mainHover',
        'hover:scale-[105%]',
        'duration-200 ease-in-out',
        width ? width : 'w-full md:w-fit',
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
