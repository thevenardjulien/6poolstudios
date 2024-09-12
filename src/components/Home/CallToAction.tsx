'use client'

import { useTranslations } from 'next-intl'
import { useRouter } from '@/i18n/routing'
import Button from '../UI/Button'

export default function CallToAction() {
  const t = useTranslations('CallToAction')
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center gap-12 bg-lightBackground px-12 py-20">
      <h2 className="text-balance text-center text-5xl font-bold">
        {t('title')}
        <br />
        <span className="text-main"> {t('keywords1')}</span>
      </h2>
      <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
        <Button onClick={() => router.push(`/get-started`)}>{t('cta1')}</Button>
        <Button
          onClick={() => router.push(`/offers`)}
          bgColor="bg-white"
          textColor="text-black"
          border="border-[1px]"
          borderColor="border-border"
          hoverBgColor="hover:bg-main"
          hoverBorder="hover:border-[1px] hover:border-transparent"
        >
          {t('cta2')}
        </Button>
      </div>
    </div>
  )
}
