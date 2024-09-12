import { useTranslations } from 'next-intl'
import Card from '../UI/Card'
import Image from 'next/image'
import screen1 from '../../assets/images/homeGallery/screen1.png'
import screen2 from '../../assets/images/homeGallery/screen2.png'
import screen3 from '../../assets/images/homeGallery/screen3.png'
import screen4 from '../../assets/images/homeGallery/screen4.png'
import screen5 from '../../assets/images/homeGallery/screen5.png'
import screen6 from '../../assets/images/homeGallery/screen6.png'

export default function Projects() {
  const t = useTranslations('Projects')

  return (
    <div className="flex flex-col items-center gap-12 px-12 py-20">
      <h2 className="text-balance text-center text-5xl font-bold">
        {t('title')} <span className="text-main">{t('keywords1')}</span>
        <br />
        {t('title2')} <span className="text-main">{t('keywords2')}</span>
      </h2>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
        <div className="transition-all duration-300 ease-in-out hover:relative hover:scale-[125%] hover:cursor-pointer">
          <Card>
            <Image src={screen1} alt="screen1" />
          </Card>
        </div>
        <div className="transition-all duration-300 ease-in-out hover:relative hover:scale-[125%] hover:cursor-pointer">
          <Card>
            <Image src={screen2} alt="screen2" />
          </Card>
        </div>
        <div className="transition-all duration-300 ease-in-out hover:relative hover:scale-[125%] hover:cursor-pointer">
          <Card>
            <Image src={screen3} alt="screen3" />
          </Card>
        </div>
        <div className="transition-all duration-300 ease-in-out hover:relative hover:scale-[125%] hover:cursor-pointer">
          <Card>
            <Image src={screen4} alt="screen4" />
          </Card>
        </div>
        <div className="transition-all duration-300 ease-in-out hover:relative hover:scale-[125%] hover:cursor-pointer">
          <Card>
            <Image src={screen5} alt="screen5" />
          </Card>
        </div>
        <div className="transition-all duration-300 ease-in-out hover:relative hover:scale-[125%] hover:cursor-pointer">
          <Card>
            <Image src={screen6} alt="screen6" />
          </Card>
        </div>
      </div>
    </div>
  )
}
