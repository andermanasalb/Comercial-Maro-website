import Image from 'next/image'
import Link from 'next/link'
import { SectionHeader } from '@/components/shared/SectionHeader'

const projects = [
  { title: 'Residencial Las Encinas', city: 'Bilbao, Bizkaia', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500', tall: true },
  { title: 'Colegio Público Unamuno', city: 'Barakaldo, Bizkaia', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500' },
  { title: 'Oficinas Grupo Inversa', city: 'Bilbao, Bizkaia', image: 'https://images.unsplash.com/photo-1496436889106-be35e843f974?w=500' },
  { title: 'Vivienda unifamiliar', city: 'Getxo, Bizkaia', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500', tall: true },
  { title: 'Pérgola bioclimática', city: 'Leioa, Bizkaia', image: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=500' },
  { title: 'Fachada comercial', city: 'Santander, Cantabria', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500' },
]

export function Galeria() {
  return (
    <section className="py-16 px-6 bg-crema">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader tag="Galería" title="Proyectos realizados" subtitle="Obras en Bilbao, Vizcaya y el norte de España" />
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {projects.map(p => (
            <div key={p.title} className="group relative break-inside-avoid mb-4 rounded-xl overflow-hidden">
              <Image src={p.image} alt={p.title} width={500} height={p.tall ? 380 : 280} className="w-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-carbon/75 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-center p-4">
                <h4 className="font-montserrat text-[13px] font-bold mb-1">{p.title}</h4>
                <p className="text-[11px] text-white/80">{p.city}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/proyectos" className="inline-flex items-center justify-center font-montserrat text-sm font-bold bg-rojo text-white px-6 py-3 rounded-md hover:bg-rojo-oscuro transition-colors min-h-[48px]">
            Ver todos los proyectos →
          </Link>
        </div>
      </div>
    </section>
  )
}
