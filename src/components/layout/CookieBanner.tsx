'use client'
import { useState, useEffect } from 'react'
import { Cookie } from 'lucide-react'

const STORAGE_KEY = 'maro_cookie_consent'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
    } catch {
      // localStorage unavailable
    }
  }, [])

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ decided: true }))
    } catch {
      // localStorage unavailable
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 left-0 right-0 z-[150] bg-white border-t border-gris-claro shadow-[0_-4px_24px_rgba(0,0,0,0.08)]"
    >
      <div className="max-w-site mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-start gap-3 flex-1">
          <Cookie size={18} className="text-rojo flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-[13px] text-gris-medio leading-snug">
            Este sitio utiliza únicamente cookies técnicas estrictamente necesarias para su funcionamiento.
            No se usan cookies de análisis ni publicidad.{' '}
            <a
              href="/privacidad"
              className="text-rojo underline underline-offset-2 hover:text-rojo-oscuro transition-colors"
            >
              Política de privacidad
            </a>
          </p>
        </div>
        <button
          type="button"
          onClick={accept}
          className="font-montserrat text-[12px] font-semibold px-5 py-2 rounded-md bg-rojo text-white hover:bg-rojo-oscuro transition-colors cursor-pointer whitespace-nowrap flex-shrink-0"
        >
          Entendido
        </button>
      </div>
    </div>
  )
}
