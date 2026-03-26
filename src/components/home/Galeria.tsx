import Image from 'next/image'
import Link from 'next/link'
import { SectionHeader } from '@/components/shared/SectionHeader'

const projects = [
  { title: 'Residencial Las Encinas', city: 'Bilbao, Bizkaia',      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500' },
  { title: 'Colegio Público Unamuno', city: 'Barakaldo, Bizkaia',   image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500' },
  { title: 'Oficinas Grupo Inversa',  city: 'Bilbao, Bizkaia',      image: 'https://images.unsplash.com/photo-1496436889106-be35e843f974?w=500' },
  { title: 'Vivienda unifamiliar',    city: 'Getxo, Bizkaia',       image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500' },
  { title: 'Pérgola bioclimática',    city: 'Leioa, Bizkaia',       image: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=500' },
  { title: 'Fachada comercial',       city: 'Santander, Cantabria', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500' },
]

export function Galeria() {
  return (
    <section id="galeria" className="h-[calc(100dvh-6rem)] snap-start snap-always overflow-hidden bg-crema flex flex-col justify-center px-6">
      <div className="max-w-[1280px] mx-auto w-full">
        <SectionHeader tag="Galería" title="Proyectos realizados" subtitle="Obras en Bilbao, Vizcaya y el norte de España" />
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {projects.map(p => (
            <div key={p.title} className="group relative h-36 rounded-xl overflow-hidden cursor-pointer">
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-carbon/75 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-center p-3">
                <h4 className="font-montserrat text-[12px] font-bold mb-0.5">{p.title}</h4>
                <p className="text-[10px] text-white/80">{p.city}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <Link href="/proyectos" className="inline-flex items-center justify-center font-montserrat text-sm font-bold bg-rojo text-white px-6 py-3 rounded-md hover:bg-rojo-oscuro transition-colors min-h-[48px]">
            Ver todos los proyectos →
          </Link>
        </div>
      </div>
    </section>
  )
}
