'use client'
import { useEffect } from 'react'

/** Adds the `snap-page` class to <html> while the homepage is mounted,
 *  activating CSS scroll-snap-type: y mandatory and the 6rem snap offset.
 *  Cleans up on unmount so other pages are completely unaffected.
 *  Also saves scroll position to sessionStorage so the Navbar can restore it
 *  when the user navigates back to the homepage. */
export function EnablePageSnap() {
  useEffect(() => {
    document.documentElement.classList.add('snap-page')

    const saveScroll = () => {
      sessionStorage.setItem('home_scroll_y', String(window.scrollY))
    }
    window.addEventListener('scroll', saveScroll, { passive: true })

    return () => {
      document.documentElement.classList.remove('snap-page')
      window.removeEventListener('scroll', saveScroll)
    }
  }, [])
  return null
}
