import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { twMerge } from 'tailwind-merge'

export default function MainNav({
  className,
  setDisplayNav,
}: {
  className?: string
  setDisplayNav?: (displayNav: boolean) => void
}) {
  const t = useTranslations('MainNav')

  return (
    <div className={twMerge('flex w-full justify-center gap-4', className)}>
      <Link
        href="/get-started"
        className="whitespace-nowrap"
        onClick={() => (setDisplayNav ? setDisplayNav(false) : null)}
      >
        {t('get-started')}
      </Link>
      <Link
        href="/offers"
        className="whitespace-nowrap"
        onClick={() => (setDisplayNav ? setDisplayNav(false) : null)}
      >
        {t('offers')}
      </Link>
      <Link
        href="/about"
        className="whitespace-nowrap"
        onClick={() => (setDisplayNav ? setDisplayNav(false) : null)}
      >
        {t('about')}
      </Link>
      <Link
        href="/contact"
        className="whitespace-nowrap"
        onClick={() => (setDisplayNav ? setDisplayNav(false) : null)}
      >
        {t('contact')}
      </Link>
    </div>
  )
}
