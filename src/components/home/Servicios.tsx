'use client'
import { motion } from 'framer-motion'
import { ProductCard } from '@/components/shared/ProductCard'
import { SectionHeader } from '@/components/shared/SectionHeader'

const services = [
  { num: '01', title: 'Puertas y Ventanas PVC Ecoven Plus', description: 'Ecoven Plus S70, S76 y S82. Correderas, paralelas y Vekamotion. Máxima eficiencia energética.', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400', href: '/ventanas-pvc' },
  { num: '02', title: 'Puertas y Ventanas Aluminio', description: 'Sistemas de aluminio de altas prestaciones. Marcos finos, gran resistencia y diseño atemporal.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400', href: '/ventanas-aluminio' },
  { num: '03', title: 'Cerramientos', description: 'Terrazas, galerías y patios acristalados. Amplía tu espacio habitable con luz natural y confort.', image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=400', href: '/cerramientos' },
  { num: '04', title: 'Barandillas, Celosías y Mallorquinas', description: 'Barandillas de aluminio y vidrio, celosías orientables y mallorquinas para fachadas y terrazas.', image: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=400', href: '/barandillas' },
  { num: '05', title: 'Cortinas interiores y estores', description: 'Plisadas, enrollables, verticales, venecianas y más. Control de luz y privacidad a medida para cada espacio.', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400', href: '/cortinas-estores' },
  { num: '06', title: 'Cerramientos Fenólicos (HPL)', description: 'Cabinas y divisiones de máxima higiene y resistencia al agua para baños, duchas y vestuarios.', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400', href: '/cerramientos-fenolicos' },
  { num: '07', title: 'Mamparas de Oficina', description: 'Divisiones modulares acristaladas para espacios de trabajo. Flexibilidad y elegancia en cada proyecto.', image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=400&h=600', href: '/mamparas-oficina' },
  { num: '08', title: 'Mamparas de Ducha y Bañera', description: 'Mamparas de cristal templado a medida. Funcionalidad, seguridad y estética en cada baño.', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400', href: '/mamparas-ducha' },
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
    <section id="productos" className="h-[calc(100dvh-4rem)] snap-start snap-always overflow-x-hidden overflow-y-auto lg:overflow-hidden bg-crema flex flex-col justify-center px-6 py-6">
      <div className="max-w-site mx-auto w-full">
        <SectionHeader tag="Nuestros productos" title="Todo lo que necesita tu espacio" subtitle="Fabricamos e instalamos carpintería metálica a medida en Bilbao y todo el norte de España" />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
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
