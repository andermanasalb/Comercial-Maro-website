'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }
const container = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } }

function AnimatedCounter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      let start = 0
      const step = end / 40
      const timer = setInterval(() => {
        start += step
        if (start >= end) { setCount(end); clearInterval(timer) }
        else setCount(Math.floor(start))
      }, 30)
      observer.disconnect()
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end])
  return <span ref={ref}>{count.toLocaleString('es-ES')}{suffix}</span>
}

export function Hero() {
  return (
    <section id="hero" className="relative h-[calc(100dvh-6rem)] snap-start snap-always flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(28,28,30,0.45) 0%, rgba(28,28,30,0.92) 100%)' }}
        aria-hidden="true"
      />
      <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 flex flex-col items-center max-w-3xl">
        <motion.p variants={fadeUp} className="font-montserrat text-[11px] font-bold tracking-[4px] uppercase text-arena mb-4">
          Carpintería Metálica · Bilbao · Vizcaya · País Vasco
        </motion.p>
        <motion.div variants={fadeUp} className="w-12 h-[3px] bg-rojo rounded-full mb-5" aria-hidden="true" />
        <motion.h1 variants={fadeUp} className="font-montserrat text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4 max-w-[600px]">
          Ventanas, puertas y cerramientos que transforman tu espacio
        </motion.h1>
        <motion.p variants={fadeUp} className="text-white/80 text-base max-w-[500px] mb-8">
          Fabricación e instalación a medida para viviendas, oficinas y colegios en todo el norte de España.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mb-12">
          <Link href="/contacto" className="inline-flex items-center justify-center font-montserrat text-sm font-semibold bg-rojo text-white px-6 py-3 rounded-md hover:bg-rojo-oscuro transition-colors min-h-[48px]">
            Háblanos de tu proyecto →
          </Link>
          <Link href="/proyectos" className="inline-flex items-center justify-center font-montserrat text-sm font-semibold border-2 border-white/70 text-white px-6 py-3 rounded-md hover:bg-white hover:text-rojo transition-colors min-h-[48px]">
            Ver nuestros proyectos
          </Link>
        </motion.div>
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-8 border-t border-white/15 pt-8 w-full">
          {[
            { label: 'Años de experiencia', animated: true, end: 25, suffix: '+' },
            { label: 'Instalaciones realizadas', animated: true, end: 5000, suffix: '+' },
            { label: 'Garantía total', static: '10 años' },
            { label: 'Atención personalizada', static: '100%' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <span className="block font-montserrat text-xl font-extrabold text-arena">
                {s.animated ? <AnimatedCounter end={s.end!} suffix={s.suffix} /> : s.static}
              </span>
              <span className="block text-[11px] text-white/60 font-montserrat">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
