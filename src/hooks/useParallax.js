import { useState, useEffect } from 'react'

export function useParallax(speed = 0.25) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (window.innerWidth < 768) return
    function onScroll() { setOffset(window.scrollY * speed) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed])

  return offset
}
