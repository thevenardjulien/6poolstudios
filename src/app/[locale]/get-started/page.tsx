import { useTranslations } from 'next-intl'

export default function GetStarted() {
  const t = useTranslations('GetStarted')

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-12">
      <h1 className="text-center text-5xl font-bold">{t('title')}</h1>
    </div>
  )
}
