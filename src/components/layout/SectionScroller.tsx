'use client'
import { useEffect, useState, useRef, useCallback } from 'react'

const SECTIONS = [
  { id: 'hero',      label: 'Inicio'             },
  { id: 'productos', label: 'Productos'           },
  { id: 'nosotros',  label: '¿Por qué nosotros?' },
  { id: 'sectores',  label: 'Sectores'            },
  { id: 'galeria',   label: 'Galería'             },
  { id: 'faq',       label: 'FAQ'                 },
  { id: 'blog',      label: 'Blog'                },
  { id: 'cta',       label: 'Contacto'            },
]

function prefersReducedMotion() {
  return typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function SectionScroller() {
  const [activeIdx, setActiveIdx] = useState(0)
  const activeIdxRef = useRef(0)

  // Keep ref in sync with state for the keydown handler (avoids stale closure)
  useEffect(() => { activeIdxRef.current = activeIdx }, [activeIdx])

  // IntersectionObserver — threshold 0.6 reduces dot flicker during snap animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = SECTIONS.findIndex(s => s.id === entry.target.id)
            if (idx !== -1) {
              setActiveIdx(idx)
              activeIdxRef.current = idx
            }
          }
        })
      },
      { threshold: 0.6 },
    )
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Guard: don't intercept events from form controls or buttons (e.g. FAQ accordion)
      const target = e.target
      if (!(target instanceof Element)) return
      if (['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON', 'A'].includes(target.tagName)) return
      if (target.closest('[role="button"]')) return

      const behavior: ScrollBehavior = prefersReducedMotion() ? 'instant' : 'smooth'
      const current = activeIdxRef.current
      let next = current

      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault()
        next = Math.min(current + 1, SECTIONS.length - 1)
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        next = Math.max(current - 1, 0)
      } else {
        return
      }

      if (next !== current) {
        document.getElementById(SECTIONS[next].id)?.scrollIntoView({ behavior })
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const scrollToSection = useCallback((idx: number) => {
    const behavior: ScrollBehavior = prefersReducedMotion() ? 'instant' : 'smooth'
    document.getElementById(SECTIONS[idx].id)?.scrollIntoView({ behavior })
  }, [])

  return (
    <>
      {/* Desktop: puntos verticales a la derecha */}
      <nav
        aria-label="Navegación por secciones"
        className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-2.5"
      >
        {SECTIONS.map(({ id, label }, i) => (
          <div key={id} className="group relative flex items-center justify-end">
            <span
              aria-hidden="true"
              className="absolute right-6 px-3 py-1.5 bg-carbon text-crema font-montserrat text-[12px] font-semibold rounded-md whitespace-nowrap shadow-lg border-l-2 border-rojo
                         opacity-0 group-hover:opacity-100 pointer-events-none select-none
                         transition-opacity duration-200 translate-x-1 group-hover:translate-x-0"
            >
              {label}
            </span>
            <button
              onClick={() => scrollToSection(i)}
              aria-label={`Ir a ${label}`}
              className={[
                'rounded-full border-2 cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rojo',
                i === activeIdx
                  ? 'w-3 h-3 bg-rojo border-rojo shadow-[0_0_0_3px_rgba(212,43,43,0.25)]'
                  : 'w-2 h-2 bg-white/80 border-carbon/30 shadow-sm hover:border-rojo hover:scale-125',
              ].join(' ')}
            />
          </div>
        ))}
      </nav>

      {/* Mobile: puntos horizontales + sección activa centrados abajo */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 flex lg:hidden flex-col items-center gap-1.5">
        <span className="font-montserrat text-[10px] font-bold uppercase tracking-wider text-carbon/70 bg-white/80 backdrop-blur-sm px-2.5 py-0.5 rounded-full">
          {SECTIONS[activeIdx].label}
        </span>
        <nav
          aria-label="Navegación por secciones"
          className="flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm"
        >
          {SECTIONS.map(({ id, label }, i) => (
            <button
              key={id}
              onClick={() => scrollToSection(i)}
              aria-label={`Ir a ${label}`}
              className={[
                'relative flex items-center justify-center w-7 h-7 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rojo rounded-full',
              ].join(' ')}
            >
              <span
                aria-hidden="true"
                className={[
                  'rounded-full transition-all duration-300 block',
                  i === activeIdx
                    ? 'w-2 h-2 bg-rojo shadow-[0_0_0_2px_rgba(212,43,43,0.25)]'
                    : 'w-1.5 h-1.5 bg-carbon/25',
                ].join(' ')}
              />
            </button>
          ))}
        </nav>
      </div>
    </>
  )
}
