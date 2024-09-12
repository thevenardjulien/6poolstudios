import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('Footer')

  return (
    <footer className="flex w-full justify-center gap-4 border-t-[1px] border-border p-4">
      <div className="flex gap-4">
        <p>{t('copyright')}</p>
      </div>
    </footer>
  )
}
