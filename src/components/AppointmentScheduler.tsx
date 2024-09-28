import React, { useState } from 'react'
import { Calendar, momentLocalizer, Event, SlotInfo } from 'react-big-calendar'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-datepicker/dist/react-datepicker.css'

const localizer = momentLocalizer(moment)

interface AppointmentEvent extends Event {
  title: string
  start: Date
  end: Date
}

interface AppointmentSchedulerProps {
  onEventSelect: (event: AppointmentEvent) => void
}

function AppointmentScheduler({ onEventSelect }: AppointmentSchedulerProps) {
  const [events, setEvents] = useState<AppointmentEvent[]>([])
  const [startDate, setStartDate] = useState<Date | null>(new Date())

  const handleDateSelect = (slotInfo: SlotInfo) => {
    const title = window.prompt('Entrez un titre pour le rendez-vous')
    if (title) {
      const newEvent: AppointmentEvent = {
        start: new Date(slotInfo.start),
        end: new Date(slotInfo.end),
        title: title,
      }
      setEvents([...events, newEvent])
    }
  }

  const handleAddAppointment = () => {
    const title = window.prompt('Entrez un titre pour le rendez-vous')
    if (title && startDate) {
      const newEvent: AppointmentEvent = {
        start: startDate,
        end: moment(startDate).add(1, 'hour').toDate(),
        title: title,
      }
      setEvents([...events, newEvent])
    } else {
      console.warn(
        "Impossible d'ajouter l'événement : date de début ou titre manquant",
      )
    }
  }

  const handleDateChange = (date: Date | null) => {
    setStartDate(date)
  }

  return (
    <div>
      <h2>Planifier un rendez-vous</h2>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        showTimeSelect
        dateFormat="Pp"
      />
      <button onClick={handleAddAppointment}>Ajouter un rendez-vous</button>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectSlot={handleDateSelect}
        onSelectEvent={onEventSelect}
        selectable
      />
    </div>
  )
}

export default AppointmentScheduler
