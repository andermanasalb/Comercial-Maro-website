'use client'
import { motion } from 'framer-motion'
import { ProductCard } from '@/components/shared/ProductCard'
import { SectionHeader } from '@/components/shared/SectionHeader'

const services = [
  { num: '01', title: 'Ventanas de Aluminio', description: 'Abatibles, correderas, oscilobatientes. Máximo aislamiento térmico y acústico.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', href: '/ventanas' },
  { num: '02', title: 'Puertas Metálicas', description: 'Puertas de entrada, acceso y paso. Seguridad y diseño en un solo elemento.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400', href: '/puertas' },
  { num: '03', title: 'Cerramientos', description: 'Terrazas, galerías y patios. Amplía tu espacio habitable con luz natural.', image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=400', href: '/cerramientos' },
  { num: '04', title: 'Pérgolas Bioclimáticas', description: 'Control total del ambiente exterior. Automáticas y personalizables.', image: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=400', href: '/pergolas' },
  { num: '05', title: 'Persianas y Protección', description: 'Persianas enrollables, mallorquinas y lamas. Confort y privacidad.', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400', href: '/persianas' },
  { num: '06', title: 'Cristalería y Mamparas', description: 'Mamparas de baño, escaparates y barandillas de vidrio templado.', image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=400', href: '/contacto' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const card = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
}

export function Servicios() {
  return (
    <section id="productos" className="h-[calc(100dvh-4rem)] snap-start snap-always overflow-hidden bg-crema flex flex-col justify-center px-6">
      <div className="max-w-[1280px] mx-auto w-full">
        <SectionHeader tag="Nuestros productos" title="Todo lo que necesita tu espacio" subtitle="Fabricamos e instalamos carpintería metálica a medida en Bilbao y todo el norte de España" />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map(s => (
            <motion.div key={s.num} variants={card}>
              <ProductCard {...s} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
