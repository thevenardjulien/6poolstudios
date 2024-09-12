'use client'

import { useTranslations } from 'next-intl'
import Card from '../UI/Card'
import { useRouter } from '@/i18n/routing'

export default function HomeCards() {
  const t = useTranslations()
  const cardCount = 6
  const router = useRouter()

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {[...Array(cardCount)].map((_, index) => (
        <Card
          key={`card-${index + 1}`}
          onClick={() => router.push('/get-started')}
        >
          <div className="group flex flex-col gap-6">
            <div className="max-w-full rounded bg-main px-6 py-4 text-white">
              <h3 className="truncate text-xl font-bold">
                {t(`HomeCards.title${index + 1}`)}
              </h3>
            </div>
            <div className="flex justify-start">
              <hr className="groupe-hover:ease h-[2px] w-[0px] bg-main group-hover:w-full group-hover:scale-0 group-hover:transition-all group-hover:duration-500" />
            </div>
            <div className="max-w-[650px] text-balance px-8 text-lg">
              {t(`HomeCards.description${index + 1}`)}
            </div>
            <div className="flex justify-end">
              <hr className="groupe-hover:ease h-[2px] w-[0px] bg-main group-hover:w-full group-hover:scale-0 group-hover:transition-all group-hover:duration-500" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
