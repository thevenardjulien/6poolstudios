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
        onClick={() => (setDisplayNav ? setDisplayNav(false) : null)}
      >
        {t('get-started')}
      </Link>
      <Link
        href="/offers"
        onClick={() => (setDisplayNav ? setDisplayNav(false) : null)}
      >
        {t('offers')}
      </Link>
      <Link
        href="/about"
        onClick={() => (setDisplayNav ? setDisplayNav(false) : null)}
      >
        {t('about')}
      </Link>
      <Link
        href="/contact"
        onClick={() => (setDisplayNav ? setDisplayNav(false) : null)}
      >
        {t('contact')}
      </Link>
    </div>
  )
}
