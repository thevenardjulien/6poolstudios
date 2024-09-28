'use client'

import Specs from '@/components/Specs'
import Button from '@/components/UI/Button'
import Card from '@/components/UI/Card'
import { useRouter } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { RxCross2 } from 'react-icons/rx'

export default function Offers() {
  const t = useTranslations('Offers')
  const t2 = useTranslations('Specs')
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center gap-12 p-12">
      <h1 className="text-balance text-center text-5xl font-bold">
        {t('sectionTitle')}
      </h1>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
        <Card
          bgColor="bg-lightBackground"
          onClick={() => router.push(`/get-started`)}
        >
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-main">{t('title1')}</h2>
            <p className="h-[100px] text-balance">{t('shortDescription1')}</p>
            <Button width="w-full">{t('select')}</Button>
            <hr className="h-[2px] w-full bg-border" />
            <div className="flex flex-col gap-2">
              <Specs />
              <div className="flex items-center gap-2">
                <span className="text-md ml-1 text-red-700">
                  <RxCross2 />
                </span>
                {t2('arg7')}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-md ml-1 text-red-700">
                  <RxCross2 />
                </span>
                {t2('arg8')}
              </div>
            </div>
          </div>
        </Card>
        <Card
          bgColor="bg-lightBackground"
          onClick={() => router.push(`/get-started`)}
        >
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-main">{t('title2')}</h2>
            <p className="h-[100px] text-balance">{t('shortDescription2')}</p>
            <Button width="w-full">{t('select')}</Button>
            <hr className="h-[2px] w-full bg-border" />
            <div className="flex flex-col gap-2">
              <Specs />
              <div className="flex items-center gap-2">
                <span className="text-md ml-1 text-red-700">
                  <RxCross2 />
                </span>
                {t2('arg8')}
              </div>
            </div>
          </div>
        </Card>
        <Card
          bgColor="bg-lightBackground"
          onClick={() => router.push(`/get-started`)}
        >
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-main">{t('title3')}</h2>
            <p className="h-[100px] text-balance">{t('shortDescription3')}</p>
            <Button width="w-full">{t('select')}</Button>
            <hr className="h-[2px] w-full bg-border" />
            <Specs />
          </div>
        </Card>
      </div>
    </div>
  )
}
