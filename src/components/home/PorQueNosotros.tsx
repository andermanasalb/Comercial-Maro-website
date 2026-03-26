'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'

const items = [
  { icon: '🏭', title: 'Fabricantes directos', desc: 'Sin intermediarios. Fabricamos nosotros mismos en Bilbao.' },
  { icon: '🔧', title: 'Instalación propia', desc: 'Equipo técnico propio. Sin subcontratas, sin sorpresas.' },
  { icon: '🤝', title: 'Trato personal', desc: 'Un único interlocutor lleva tu proyecto de principio a fin.' },
  { icon: '🏅', title: 'Proveedores premium', desc: 'Trabajamos con Cortizo, Technal y Reynaers.' },
]

export function PorQueNosotros() {
  return (
    <section id="nosotros" className="h-[calc(100dvh-4rem)] snap-start snap-always overflow-hidden">
      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 h-full">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative h-64 lg:h-full"
        >
          <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800" alt="Taller MAR'O Bilbao" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(212,43,43,0.15), transparent)' }} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="px-8 py-6 lg:px-14 flex flex-col justify-center"
        >
          <SectionHeader tag="Por qué elegirnos" title="La confianza de tu familia, en manos expertas" center={false} />
          <p className="text-[14px] text-gris-medio mb-8">
            Más de 25 años fabricando e instalando carpintería metálica en Bilbao y Vizcaya con calidad artesanal, materiales premium y trato personal.
          </p>
          <div className="flex flex-col gap-5">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                viewport={{ once: true, amount: 0.5 }}
                className="flex gap-4 items-start"
              >
                <div className="w-10 h-10 min-w-[40px] rounded-lg bg-arena-claro flex items-center justify-center text-xl">{item.icon}</div>
                <div>
                  <h4 className="font-montserrat text-[13px] font-bold text-carbon mb-1">{item.title}</h4>
                  <p className="text-[12px] text-gris-medio">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Link
            href="/sobre-nosotros"
            className="mt-7 self-start inline-flex items-center gap-2 font-montserrat text-[13px] font-semibold text-rojo hover:text-rojo-oscuro transition-colors group"
          >
            ¿Quieres saber más sobre nosotros?
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
