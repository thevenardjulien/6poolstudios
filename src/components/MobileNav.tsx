import { CiMenuBurger } from 'react-icons/ci'
import MainNav from './MainNav'
import { useState } from 'react'

export default function MobileNav() {
  const [displayNav, setDisplayNav] = useState(false)

  return (
    <>
      <div
        className="text-2xl hover:cursor-pointer"
        onClick={() => setDisplayNav(!displayNav)}
      >
        <CiMenuBurger />
      </div>
      {displayNav && (
        <MainNav className="absolute top-20 flex w-full flex-col items-center justify-center rounded border-[1px] border-border bg-white p-12 shadow-md" setDisplayNav={setDisplayNav} />
      )}
    </>
  )
}
