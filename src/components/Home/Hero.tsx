'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import hero from '../../assets/images/hero.webp'
import Button from '../UI/Button'
import { useRouter } from '@/i18n/routing'

export default function Hero() {
  const t = useTranslations('Hero')
  const router = useRouter()

  return (
    <div className="flex h-[100vh] translate-y-[-60px] flex-col items-center justify-center px-12 lg:flex-row">
      <div className="z-10 flex flex-col items-start justify-center gap-6 lg:relative lg:left-[30px] lg:max-w-[750px]">
        <h1 className="flex w-full flex-col gap-2 text-5xl font-bold">
          <div className="text-balance">
            {t('catchphrase1')}
            <span className="text-main"> {t('keywords1')} </span>
            <span className="text-main">{t('keywords2')} </span>
            {t('catchphrase2')}
            {t('catchphrase3')}
            <span className="text-main"> {t('keywords3')}</span>
          </div>
        </h1>
        <p className="text-xl lg:max-w-[650px]">{t('description')}</p>
        <div className="flex w-full flex-col gap-4 md:flex-row">
          <Button onClick={() => router.push(`/get-started`)}>
            {t('cta1')}
          </Button>
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
      <div className="hidden lg:relative lg:right-[30px] lg:flex">
        <Image
          src={hero}
          alt="hero"
          width={500}
          height={500}
          placeholder="blur"
        />
      </div>
    </div>
  )
}
