'use client'

import Button from '@/components/UI/Button'
import { contactFormSchema, ContactFormType } from '@/types/contactFormType'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

export default function Contact() {
  const t = useTranslations('Contact')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchema),
  })
  const [sendSuccess, setSendSuccess] = useState<boolean | undefined>(undefined)

  const onSubmit = (data: ContactFormType) => {
    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
    }

    emailjs
      .send('service_t80tq3m', 'template_b2bxdyh', templateParams, {
        publicKey: 'sArzFEUNT8gIWgywT',
      })
      .then(() => {
        setSendSuccess(true)
        reset()
      })
      .catch(() => {
        setSendSuccess(false)
      })
  }

  return (
    <div className="flex flex-col items-center justify-center gap-12 p-12">
      <h1 className="text-center text-5xl font-bold">
        {t('title')} <span className="text-main">{t('keywords1')}</span>
      </h1>
      <form
        className="flex w-full flex-col items-center justify-center gap-4 rounded border-[1px] border-border bg-lightBackground p-12 shadow-md md:max-w-[650px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex w-full flex-col gap-4 md:flex-row">
          <div className="flex-1">
            <input
              type="text"
              placeholder={t('name')}
              className="w-full rounded border-[1px] border-border bg-white p-4 text-black"
              {...register('name')}
            />
            {errors.name && (
              <p className="text-balance text-red-500">{t('error-name')}</p>
            )}
          </div>
          <div className="flex-1">
            <input
              type="email"
              placeholder={t('email')}
              className="w-full rounded border-[1px] border-border bg-white p-4 text-black"
              {...register('email')}
            />
            {errors.email && <p className="text-red-500">{t('error-email')}</p>}
          </div>
        </div>
        <div className="w-full">
          <textarea
            placeholder={t('message')}
            className="h-32 w-full rounded border-[1px] border-border bg-white p-4 text-black"
            {...register('message')}
          />
          {errors.message && (
            <p className="text-red-500">{t('error-message')}</p>
          )}
        </div>
        <Button>{t('submit')}</Button>
      </form>
      {sendSuccess === true && (
        <p className="text-center text-xl font-bold text-main">
          {t('success')}
        </p>
      )}
      {sendSuccess === false && (
        <p className="text-center text-xl font-bold text-red-500">
          {t('error')}
        </p>
      )}
    </div>
  )
}
