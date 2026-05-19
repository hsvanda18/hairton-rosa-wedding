import { useState, useEffect, useRef } from 'react'

const WEDDING = new Date('2026-07-03T18:00:00')

function pad(n) { return String(n).padStart(2, '0') }

function getTimeLeft() {
  const diff = WEDDING - Date.now()
  if (diff <= 0) return { dias: 0, horas: 0, minutos: 0, segundos: 0 }
  return {
    dias:     Math.floor(diff / 86400000),
    horas:    Math.floor((diff % 86400000) / 3600000),
    minutos:  Math.floor((diff % 3600000)  / 60000),
    segundos: Math.floor((diff % 60000)    / 1000),
  }
}

export default function Countdown() {
  const [time, setTime]   = useState(getTimeLeft)
  const [flipped, setFlipped] = useState({})
  const prevRef = useRef(null)

  useEffect(() => {
    const id = setInterval(() => {
      const next = getTimeLeft()
      setTime(prev => {
        const changed = {}
        Object.keys(next).forEach(k => { if (prev[k] !== next[k]) changed[k] = true })
        if (Object.keys(changed).length) {
          setFlipped(changed)
          setTimeout(() => setFlipped({}), 400)
        }
        return next
      })
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const items = [
    { id: 'dias',     value: time.dias,     label: 'Dias' },
    { id: 'horas',    value: time.horas,    label: 'Horas' },
    { id: 'minutos',  value: time.minutos,  label: 'Minutos' },
    { id: 'segundos', value: time.segundos, label: 'Segundos' },
  ]

  return (
    <div className="countdown-bar">
      {items.map(item => (
        <div className="countdown-item" key={item.id}>
          <span className={`countdown-num${flipped[item.id] ? ' flipped' : ''}`}>
            {pad(item.value)}
          </span>
          <span className="countdown-label">{item.label}</span>
        </div>
      ))}
    </div>
  )
}
