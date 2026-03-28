'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function ScrollRestoration() {
  const pathname = usePathname()

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    const key = `scroll:${pathname}`
    const saved = sessionStorage.getItem(key)
    if (saved !== null) {
      requestAnimationFrame(() => window.scrollTo(0, parseInt(saved, 10)))
    }

    return () => {
      sessionStorage.setItem(key, String(window.scrollY))
    }
  }, [pathname])

  useEffect(() => {
    const save = () => sessionStorage.setItem(`scroll:${pathname}`, String(window.scrollY))
    window.addEventListener('beforeunload', save)
    return () => window.removeEventListener('beforeunload', save)
  }, [pathname])

  return null
}
