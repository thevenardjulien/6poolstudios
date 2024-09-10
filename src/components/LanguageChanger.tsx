'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

const LOCALES = ['en', 'fr'] as const;
type Locale = (typeof LOCALES)[number];

export default function LanguageChanger() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale() as Locale;
  const t = useTranslations('LanguageChanger');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as Locale;
    
    const pathWithoutLocale = pathname.split('/').slice(2).join('/');
    
    const newPath = `/${newLocale}${pathWithoutLocale ? `/${pathWithoutLocale}` : ''}`;
    
    router.push(newPath);
  };

  return (
    <select value={locale} onChange={handleChange} className="hover:cursor-pointer" aria-label='Change language'>
      {LOCALES.map((loc) => (
        <option key={loc} value={loc}>
          {t(loc)}
        </option>
      ))}
    </select>
  );
}