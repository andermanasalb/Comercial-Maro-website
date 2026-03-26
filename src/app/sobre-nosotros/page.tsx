import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: "Quiénes Somos | Carpintería Metálica Bilbao | Comercial MAR'O",
  description: "Más de 25 años fabricando carpintería metálica en Bilbao. Historia, equipo y proveedores certificados: Cortizo, Technal y Reynaers.",
  keywords: ['carpintería metálica Bilbao empresa', 'fabricantes ventanas aluminio Vizcaya'],
  path: '/sobre-nosotros',
})

const timeline = [
  { year: '1999', event: "Fundación de Comercial MAR'O en Bilbao" },
  { year: '2005', event: 'Primera instalación en edificio público en Vizcaya' },
  { year: '2012', event: 'Incorporación de Pérgolas Bioclimáticas al catálogo' },
  { year: '2018', event: 'Acuerdo como instalador certificado Cortizo y Reynaers' },
  { year: '2024', event: 'Más de 5.000 instalaciones completadas en el norte de España' },
]

const team = [
  { name: 'Responsable Comercial', role: 'Atención al cliente y presupuestos', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300' },
  { name: 'Jefe de Taller', role: 'Fabricación y control de calidad', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300' },
  { name: 'Técnico Instalador', role: 'Instalación y servicio técnico', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300' },
]

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-carbon py-16 px-6 text-center">
        <span className="font-montserrat text-[10px] font-bold tracking-[3px] uppercase text-arena block mb-3">Quiénes somos</span>
        <h1 className="font-montserrat text-3xl font-extrabold text-white">25 años transformando espacios en Bilbao</h1>
      </div>
      <div className="bg-white border-b border-gris-claro px-6 py-3">
        <nav className="max-w-[1280px] mx-auto font-montserrat text-[12px] text-gris-medio flex items-center gap-1.5">
          <Link href="/" className="hover:text-rojo transition-colors">Inicio</Link>
          <span className="text-gris-medio/40">/</span>
          <span className="text-carbon font-semibold">Sobre nosotros</span>
        </nav>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-14">
        <p className="text-gris-medio text-base leading-relaxed text-center max-w-2xl mx-auto mb-16">
          Comercial MAR&apos;O nació en Bilbao en 1999 con un objetivo claro: ofrecer carpintería metálica de calidad con el trato cercano de una empresa familiar. Hoy, más de 5.000 instalaciones después, seguimos con el mismo compromiso.
        </p>

        <h2 className="font-montserrat text-2xl font-extrabold text-carbon text-center mb-10">Nuestra historia</h2>
        <div className="relative max-w-2xl mx-auto mb-16">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gris-claro -translate-x-1/2" />
          {timeline.map((item, i) => (
            <div key={item.year} className={`relative flex items-center gap-6 mb-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <span className="font-montserrat text-[11px] font-bold text-rojo block mb-1">{item.year}</span>
                <p className="text-[13px] text-gris-medio">{item.event}</p>
              </div>
              <div className="w-4 h-4 rounded-full bg-rojo border-4 border-white shadow flex-shrink-0 z-10" />
              <div className="flex-1" />
            </div>
          ))}
        </div>

        <h2 className="font-montserrat text-2xl font-extrabold text-carbon text-center mb-8">Nuestro equipo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          {team.map(m => (
            <div key={m.name} className="text-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <Image src={m.image} alt={m.name} fill className="object-cover" />
              </div>
              <h3 className="font-montserrat text-[14px] font-bold text-carbon">{m.name}</h3>
              <p className="text-[12px] text-gris-medio">{m.role}</p>
            </div>
          ))}
        </div>

        <div className="bg-crema rounded-xl p-8 text-center">
          <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-2">Proveedores y certificaciones</h2>
          <p className="text-[13px] text-gris-medio mb-8">Trabajamos exclusivamente con marcas líderes del sector</p>
          <div className="flex flex-wrap justify-center gap-10">
            {[{ name: 'Cortizo', color: '#E30613' }, { name: 'Technal', color: '#003087' }, { name: 'Reynaers', color: '#003366' }].map(s => (
              <span key={s.name} className="font-montserrat text-2xl font-black" style={{ color: s.color }}>{s.name}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
