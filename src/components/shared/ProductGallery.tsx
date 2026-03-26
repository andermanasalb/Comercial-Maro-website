'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export interface GalleryImage {
  src: string
  alt: string
}

export function ProductGallery({ images }: { images: GalleryImage[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const close = useCallback(() => setLightboxIndex(null), [])
  const prev = useCallback(() =>
    setLightboxIndex(i => i !== null ? (i - 1 + images.length) % images.length : null),
    [images.length])
  const next = useCallback(() =>
    setLightboxIndex(i => i !== null ? (i + 1) % images.length : null),
    [images.length])

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex, close, prev, next])

  // Lock body scroll while lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setLightboxIndex(i)}
            aria-label={`Ampliar: ${img.alt}`}
            className="relative h-36 rounded-lg overflow-hidden cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rojo focus-visible:ring-offset-1"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-carbon/0 group-hover:bg-carbon/25 transition-colors duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-montserrat text-[11px] font-bold uppercase tracking-widest text-white bg-carbon/60 px-2.5 py-1 rounded">
                Ver
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-carbon/92 backdrop-blur-sm flex items-center justify-center"
            onClick={close}
          >
            {/* Counter */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 font-montserrat text-[12px] font-semibold text-white/60 pointer-events-none select-none">
              {lightboxIndex + 1} / {images.length}
            </div>

            {/* Close button */}
            <button
              onClick={close}
              aria-label="Cerrar"
              className="absolute top-4 right-4 text-white/60 hover:text-white cursor-pointer transition-colors p-2 rounded-lg hover:bg-white/10"
            >
              <X size={22} />
            </button>

            {/* Prev arrow */}
            {images.length > 1 && (
              <button
                onClick={e => { e.stopPropagation(); prev() }}
                aria-label="Imagen anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white cursor-pointer transition-colors p-2 rounded-lg hover:bg-white/10"
              >
                <ChevronLeft size={30} />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="relative w-full max-w-3xl mx-16 aspect-[4/3]"
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                fill
                sizes="(max-width: 768px) 100vw, 900px"
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Next arrow */}
            {images.length > 1 && (
              <button
                onClick={e => { e.stopPropagation(); next() }}
                aria-label="Imagen siguiente"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white cursor-pointer transition-colors p-2 rounded-lg hover:bg-white/10"
              >
                <ChevronRight size={30} />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
