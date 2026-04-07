'use client'
import { useState, useEffect } from 'react'
import { X, Cookie } from 'lucide-react'

type Consent = {
  analytics: boolean
  marketing: boolean
}

const STORAGE_KEY = 'maro_cookie_consent'

function getStored(): (Consent & { decided: boolean }) | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [configOpen, setConfigOpen] = useState(false)
  const [prefs, setPrefs] = useState<Consent>({ analytics: false, marketing: false })

  useEffect(() => {
    const stored = getStored()
    if (!stored) setVisible(true)
  }, [])

  function save(consent: Consent) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...consent, decided: true }))
    setVisible(false)
    setConfigOpen(false)
    // TODO: activar scripts de GA4 / Google Ads / Meta Pixel según consent
  }

  if (!visible) return null

  return (
    <>
      {/* ── Barra inferior ─────────────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-[150] bg-white border-t border-gris-claro shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
        <div className="max-w-site mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie size={18} className="text-rojo flex-shrink-0 mt-0.5" />
            <p className="text-[13px] text-gris-medio leading-snug">
              Utilizamos cookies propias y de terceros para analizar el tráfico y mostrarte publicidad personalizada.
              Puedes aceptarlas, rechazar las no necesarias o configurarlas.{' '}
              <button
                onClick={() => setConfigOpen(true)}
                className="text-rojo underline underline-offset-2 hover:text-rojo-oscuro transition-colors cursor-pointer"
              >
                Más información
              </button>
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => save({ analytics: false, marketing: false })}
              className="font-montserrat text-[12px] font-semibold px-4 py-2 rounded-md border border-gris-claro text-gris-medio hover:border-carbon hover:text-carbon transition-colors cursor-pointer whitespace-nowrap"
            >
              Solo necesarias
            </button>
            <button
              onClick={() => setConfigOpen(true)}
              className="font-montserrat text-[12px] font-semibold px-4 py-2 rounded-md border border-gris-claro text-gris-medio hover:border-carbon hover:text-carbon transition-colors cursor-pointer"
            >
              Configurar
            </button>
            <button
              onClick={() => save({ analytics: true, marketing: true })}
              className="font-montserrat text-[12px] font-semibold px-4 py-2 rounded-md bg-rojo text-white hover:bg-rojo-oscuro transition-colors cursor-pointer whitespace-nowrap"
            >
              Aceptar todo
            </button>
          </div>
        </div>
      </div>

      {/* ── Modal configurar ───────────────────────────────────────── */}
      {configOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-carbon/60" onClick={() => setConfigOpen(false)} />

          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-7 py-5 border-b border-gris-claro">
              <h2 className="font-montserrat text-[17px] font-extrabold text-carbon">Configurar cookies</h2>
              <button
                onClick={() => setConfigOpen(false)}
                className="w-8 h-8 rounded-full bg-gris-claro hover:bg-rojo hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Cerrar"
              >
                <X size={15} />
              </button>
            </div>

            {/* Categories */}
            <div className="px-7 py-6 space-y-5">

              {/* Necesarias */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-montserrat text-[14px] font-bold text-carbon mb-0.5">Necesarias</p>
                  <p className="text-[12px] text-gris-medio leading-snug">
                    Imprescindibles para el funcionamiento del sitio web. No pueden desactivarse.
                  </p>
                </div>
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-10 h-5 rounded-full bg-rojo flex items-center justify-end px-0.5 cursor-not-allowed opacity-70">
                    <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
                  </div>
                </div>
              </div>

              <div className="border-t border-gris-claro" />

              {/* Analíticas */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-montserrat text-[14px] font-bold text-carbon mb-0.5">Analíticas</p>
                  <p className="text-[12px] text-gris-medio leading-snug">
                    Google Analytics — nos ayuda a entender cómo se usa el sitio web para mejorarlo.
                  </p>
                </div>
                <button
                  role="switch"
                  aria-checked={prefs.analytics}
                  onClick={() => setPrefs(p => ({ ...p, analytics: !p.analytics }))}
                  className={[
                    'flex-shrink-0 mt-0.5 w-10 h-5 rounded-full flex items-center px-0.5 transition-colors cursor-pointer',
                    prefs.analytics ? 'justify-end bg-rojo' : 'justify-start bg-gris-claro',
                  ].join(' ')}
                >
                  <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
                </button>
              </div>

              <div className="border-t border-gris-claro" />

              {/* Marketing */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-montserrat text-[14px] font-bold text-carbon mb-0.5">Marketing</p>
                  <p className="text-[12px] text-gris-medio leading-snug">
                    Google Ads y Meta Pixel — permiten mostrarte anuncios relevantes y medir su efectividad.
                  </p>
                </div>
                <button
                  role="switch"
                  aria-checked={prefs.marketing}
                  onClick={() => setPrefs(p => ({ ...p, marketing: !p.marketing }))}
                  className={[
                    'flex-shrink-0 mt-0.5 w-10 h-5 rounded-full flex items-center px-0.5 transition-colors cursor-pointer',
                    prefs.marketing ? 'justify-end bg-rojo' : 'justify-start bg-gris-claro',
                  ].join(' ')}
                >
                  <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="px-7 py-4 border-t border-gris-claro flex justify-end gap-2">
              <button
                onClick={() => save({ analytics: false, marketing: false })}
                className="font-montserrat text-[12px] font-semibold px-4 py-2 rounded-md border border-gris-claro text-gris-medio hover:border-carbon hover:text-carbon transition-colors cursor-pointer"
              >
                Solo necesarias
              </button>
              <button
                onClick={() => save(prefs)}
                className="font-montserrat text-[12px] font-semibold px-5 py-2 rounded-md bg-rojo text-white hover:bg-rojo-oscuro transition-colors cursor-pointer"
              >
                Guardar preferencias
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
