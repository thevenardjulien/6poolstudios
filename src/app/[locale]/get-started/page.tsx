'use client'

import CalendarEmbed from '@/components/CalendarEmbed'

export default function GetStarted() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 p-12">
      <h1 className="text-center text-5xl font-bold">Get Started</h1>
      <div className="flex flex-col gap-12">
        <div className="w-fit overflow-hidden p-6">
          <CalendarEmbed calLink="julien-thevenard-bqrnb5" />
        </div>
      </div>
    </div>
  )
}
