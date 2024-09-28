'use client'

import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import emailjs from '@emailjs/browser'

interface TimeSlot {
  id: number
  start_time: string
  end_time: string
  is_available: boolean
}

export default function GetStarted() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([])
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null)
  const [userInfo, setUserInfo] = useState({ name: '', email: '', message: '' })

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!)
  }, [])

  useEffect(() => {
    if (selectedDate) {
      fetchAvailableSlots(selectedDate)
    }
  }, [selectedDate])

  const fetchAvailableSlots = async (date: Date) => {
    try {
      const url = `/api/timeslots?date=${date.toISOString()}`
      console.log('URL appelée:', url)

      const response = await fetch(url)

      console.log('Statut de la réponse:', response.status)
      console.log(
        'Headers de la réponse:',
        Object.fromEntries(response.headers.entries()),
      )

      const contentType = response.headers.get('content-type')
      console.log('Content-Type:', contentType)

      if (!response.ok) {
        const text = await response.text()
        console.error("Réponse d'erreur:", text)
        throw new Error(`HTTP error! status: ${response.status}, body: ${text}`)
      }

      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text()
        console.error('Réponse non-JSON:', text)
        throw new TypeError("La réponse n'est pas au format JSON")
      }

      const data = await response.json()
      console.log('Données reçues:', data)

      if (!Array.isArray(data)) {
        console.error('Les données reçues ne sont pas un tableau:', data)
        throw new TypeError('Les données reçues ne sont pas au format attendu')
      }

      setAvailableSlots(data)
    } catch (error) {
      console.error(
        'Erreur lors de la récupération des plages horaires:',
        error,
      )
      // Ici, vous pouvez gérer l'erreur de manière appropriée pour votre interface utilisateur
      // Par exemple, afficher un message d'erreur à l'utilisateur
      setAvailableSlots([])
      // Vous pouvez également définir un état d'erreur si nécessaire
      // setError("Impossible de récupérer les plages horaires. Veuillez réessayer plus tard.");
    }
  }

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date)
    setSelectedSlot(null)
  }

  const handleSlotSelect = (slot: TimeSlot) => {
    setSelectedSlot(slot)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedSlot && userInfo.name && userInfo.email && selectedDate) {
      try {
        // Réserver le créneau
        const reserveResponse = await fetch('/api/timeslots', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: selectedSlot.id }),
        })

        if (!reserveResponse.ok) {
          throw new Error('Erreur lors de la réservation du créneau')
        }

        // Envoyer l'email
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          {
            userName: userInfo.name,
            email: userInfo.email,
            message: userInfo.message || 'Aucun message fourni',
            date: selectedDate.toLocaleDateString(),
            time: new Date(selectedSlot.start_time).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            }),
          },
        )
        alert('Votre demande de rendez-vous a été envoyée avec succès!')
        // Réinitialiser le formulaire
        setUserInfo({ name: '', email: '', message: '' })
        setSelectedSlot(null)
        setSelectedDate(null)
        // Rafraîchir les créneaux disponibles
        if (selectedDate) {
          fetchAvailableSlots(selectedDate)
        }
      } catch (error) {
        console.error('Erreur:', error)
        alert(
          "Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer.",
        )
      }
    } else {
      alert('Veuillez remplir tous les champs et sélectionner un créneau.')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-12">
      <h1 className="text-center text-5xl font-bold">Prendre un rendez-vous</h1>
      <div className="w-full max-w-2xl">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          inline
          minDate={new Date()}
        />
        {selectedDate && (
          <div className="mt-4 grid grid-cols-3 gap-2">
            {availableSlots.map((slot) => (
              <button
                key={slot.id}
                onClick={() => handleSlotSelect(slot)}
                className={`p-2 text-sm ${
                  selectedSlot === slot
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200'
                }`}
              >
                {new Date(slot.start_time).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </button>
            ))}
          </div>
        )}
        {selectedSlot && (
          <form onSubmit={handleSubmit} className="mt-4">
            <input
              type="text"
              placeholder="Votre nom"
              value={userInfo.name}
              onChange={(e) =>
                setUserInfo({ ...userInfo, name: e.target.value })
              }
              className="mb-2 w-full rounded border border-gray-300 p-2"
              required
            />
            <input
              type="email"
              placeholder="Votre email"
              value={userInfo.email}
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
              className="mb-2 w-full rounded border border-gray-300 p-2"
              required
            />
            <textarea
              placeholder="Message optionnel"
              value={userInfo.message}
              onChange={(e) =>
                setUserInfo({ ...userInfo, message: e.target.value })
              }
              className="mb-2 w-full rounded border border-gray-300 p-2"
              rows={3}
            />
            <button
              type="submit"
              className="w-full rounded bg-blue-500 p-2 text-white"
            >
              Demander le rendez-vous
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
