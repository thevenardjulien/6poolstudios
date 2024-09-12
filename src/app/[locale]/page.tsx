import CallToAction from '@/components/Home/CallToAction'
import Hero from '@/components/Home/Hero'
import Projects from '@/components/Home/Projects'
import Services from '@/components/Home/Services'

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Services />
      <Projects />
      <CallToAction />
    </div>
  )
}
