import { useTranslations } from 'next-intl'
import HomeCards from './HomeCards'

export default function Services() {
  const t = useTranslations('Services')

  return (
    <div className="flex flex-col items-center gap-12 bg-lightBackground px-12 py-20">
      <h2 className="text-balance text-center text-5xl font-bold">
        {t('title')} <span className="text-main">{t('keywords1')}</span>
        <span> {t('keywords2')}</span>
      </h2>
      <HomeCards />
    </div>
  )
}
