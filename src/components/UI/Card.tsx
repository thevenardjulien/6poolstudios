'use client'

import { twMerge } from 'tailwind-merge'

export default function Card({
  children,
  minHeight,
  maxHeight,
  bgColor,
  onClick,
}: {
  children: React.ReactNode
  minHeight?: string
  maxHeight?: string
  bgColor?: string
  onClick?: () => void
}) {
  return (
    <div
      className={twMerge(
        'min-w-[300xp] max-w-[400px] rounded border-[1px] bg-white p-6 shadow-md transition-all duration-300 ease-in-out hover:scale-[105%] hover:cursor-pointer',
        minHeight ? minHeight : '',
        maxHeight ? maxHeight : '',
        bgColor ? bgColor : '',
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
