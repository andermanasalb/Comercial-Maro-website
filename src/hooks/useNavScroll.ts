'use client'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Manages navbar scroll state, CSS snap-padding, and scroll-position persistence.
 * Returns `scrolled` (whether page has scrolled past threshold) and
 * an `onScrollSideEffect` callback for callers to hook in per-scroll actions.
 */
export function useNavScroll(onScrollSideEffect?: () => void) {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const prevPathnameRef = useRef(pathname)

  // Restore scroll positions on route changes
  useEffect(() => {
    const prev = prevPathnameRef.current
    prevPathnameRef.current = pathname

    // 1. Homepage snap layout — restore saved Y position
    if (pathname === '/' && prev !== '/') {
      const savedY = parseInt(sessionStorage.getItem('home_scroll_y') ?? '0', 10)
      if (savedY > 0) {
        sessionStorage.removeItem('home_scroll_y')
        requestAnimationFrame(() => {
          window.scrollTo({ top: savedY, behavior: 'instant' as ScrollBehavior })
        })
        const s = savedY > 10
        setScrolled(s)
        document.documentElement.style.setProperty('--snap-padding', s ? '4rem' : '6rem')
        return
      }
    }

    // 2. Returning to a parent page (e.g. /ventanas-pvc from /ventanas-pvc/persianas)
    const isReturningToParent = prev !== pathname && prev.startsWith(pathname + '/')
    if (isReturningToParent && !window.location.hash) {
      const savedY = parseInt(sessionStorage.getItem('scroll_pos_' + pathname) ?? '0', 10)
      if (savedY > 0) {
        const restoreScroll = () => {
          window.scrollTo({ top: savedY, behavior: 'instant' as ScrollBehavior })
          const s = savedY > 10
          setScrolled(s)
          document.documentElement.style.setProperty('--snap-padding', s ? '4rem' : '6rem')
        }
        restoreScroll()
        setTimeout(restoreScroll, 20)
        setTimeout(restoreScroll, 100)
        setTimeout(restoreScroll, 250)
        return
      }
    }

    // 3. All other navigations — let Next.js handle scroll
    if (!window.location.hash) {
      setTimeout(() => {
        const y = window.scrollY
        const s = y > 10
        setScrolled(s)
        document.documentElement.style.setProperty('--snap-padding', s ? '4rem' : '6rem')
      }, 50)
    }
  }, [pathname])

  // Passive scroll listener — tracks state, persists position, runs side effect
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (y > 10) {
        sessionStorage.setItem('scroll_pos_' + window.location.pathname, String(y))
      }
      // Hysteresis: dead zone 5–10px prevents bouncing during inertia/snap animation
      setScrolled(prev => {
        if (y > 10) return true
        if (y < 5)  return false
        return prev
      })
      if (y > 10) document.documentElement.style.setProperty('--snap-padding', '4rem')
      else if (y < 5) document.documentElement.style.setProperty('--snap-padding', '6rem')

      onScrollSideEffect?.()
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScrollSideEffect])

  return { scrolled }
}
