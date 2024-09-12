import { useTranslations } from 'next-intl'
import { IoIosCheckmark } from 'react-icons/io'

export default function Specs() {
  const t = useTranslations('Specs')

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 font-semibold">
        <span className="text-2xl text-green-700">
          <IoIosCheckmark />
        </span>
        {t('arg1')}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-2xl text-green-700">
          <IoIosCheckmark />
        </span>
        {t('arg2')}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-2xl text-green-700">
          <IoIosCheckmark />
        </span>
        {t('arg3')}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-2xl text-green-700">
          <IoIosCheckmark />
        </span>
        {t('arg4')}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-2xl text-green-700">
          <IoIosCheckmark />
        </span>
        {t('arg5')}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-2xl text-green-700">
          <IoIosCheckmark />
        </span>
        {t('arg6')}
      </div>
    </div>
  )
}
