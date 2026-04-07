'use client'
import { useState } from 'react'
import { X } from 'lucide-react'
import { type LegalKey, legalContent } from '@/content/legal-content'

export function FooterLegalLinks({ className }: { className?: string }) {
  const [open, setOpen] = useState<LegalKey | null>(null)
  const content = open ? legalContent[open] : null

  return (
    <>
      <div className={className}>
        <button
          onClick={() => setOpen('privacidad')}
          className="text-[10px] text-white/30 hover:text-white/60 transition-colors cursor-pointer"
        >
          Política de privacidad
        </button>
        <button
          onClick={() => setOpen('aviso-legal')}
          className="text-[10px] text-white/30 hover:text-white/60 transition-colors cursor-pointer"
        >
          Aviso legal
        </button>
      </div>

      {/* Modal */}
      {open && content && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-carbon/70 backdrop-blur-sm"
            onClick={() => setOpen(null)}
          />

          {/* Panel */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between px-8 py-5 border-b border-gris-claro flex-shrink-0">
              <h2 id="legal-modal-title" className="font-montserrat text-[18px] font-extrabold text-carbon">
                {content.title}
              </h2>
              <button
                onClick={() => setOpen(null)}
                aria-label="Cerrar"
                className="w-8 h-8 rounded-full bg-gris-claro hover:bg-rojo hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={15} />
              </button>
            </div>

            <div className="overflow-y-auto px-8 py-6 flex-1">
              {content.body}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
