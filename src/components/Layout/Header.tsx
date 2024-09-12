'use client'

import { Link } from '@/i18n/routing'
import LanguageChanger from '../LanguageChanger'
import useWindowSize from '@/hooks/useWindowSize'
import MainNav from '../MainNav'
import MobileNav from '../MobileNav'
import { useEffect, useState } from 'react'

export default function Header() {
  const { width } = useWindowSize()
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(width >= 1024)
  }, [width])

  return (
    <header className="fixed z-50 flex w-full items-center justify-between gap-4 border-b-[1px] border-border bg-white px-12 py-4">
      <div className="width-1/6 flex items-center justify-start gap-4 text-lg">
        <span>
          <Link href="/" className="flex-1 text-2xl font-bold">
            {isDesktop ? '6Pool Studios' : '6PS'}
          </Link>
        </span>
      </div>
      <div
        className={`width-4/6 z-20 flex items-center justify-center gap-4 rounded px-8 py-4 text-lg`}
      >
        {isDesktop ? <MainNav /> : <MobileNav />}
      </div>
      <div className="width-1/6 flex justify-end text-lg">
        <LanguageChanger />
      </div>
    </header>
  )
}
