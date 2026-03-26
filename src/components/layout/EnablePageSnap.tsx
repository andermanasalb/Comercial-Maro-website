'use client'
import { useEffect } from 'react'

/** Adds the `snap-page` class to <html> while the homepage is mounted,
 *  activating CSS scroll-snap-type: y mandatory and the 6rem snap offset.
 *  Cleans up on unmount so other pages are completely unaffected. */
export function EnablePageSnap() {
  useEffect(() => {
    document.documentElement.classList.add('snap-page')
    return () => {
      document.documentElement.classList.remove('snap-page')
    }
  }, [])
  return null
}
