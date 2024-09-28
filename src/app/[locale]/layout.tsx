import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import './globals.css'
import BackToTop from '@/components/BackToTop'

export const Questrial = localFont({
  src: '../../assets/fonts/Questrial-Regular.ttf',
  variable: '--font-questrial',
  weight: '100 900',
})

const geistSans = localFont({
  src: '../../assets/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: '../../assets/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: '6Pool Studios',
  description: "Let's Build Something Great!",
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Questrial.variable} font-[family-name:var(--font-geist-sans)] antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <div className="headerPlaceHolder h-[100px]" />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
