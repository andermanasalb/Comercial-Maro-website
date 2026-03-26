'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SectionHeader } from '@/components/shared/SectionHeader'

const projects = [
  { title: 'Residencial Las Encinas', city: 'Bilbao, Bizkaia', sector: 'vivienda', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600', desc: 'Sustitución completa de carpintería en bloque residencial de 24 viviendas.' },
  { title: 'Colegio Público Unamuno', city: 'Barakaldo, Bizkaia', sector: 'colegio', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600', desc: 'Renovación total de carpintería exterior con cumplimiento normativa CTE.' },
  { title: 'Oficinas Grupo Inversa', city: 'Bilbao, Bizkaia', sector: 'oficina', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600', desc: 'Fachada acristalada y mamparas interiores en aluminio anodizado grafito.' },
  { title: 'Vivienda unifamiliar', city: 'Getxo, Bizkaia', sector: 'vivienda', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600', desc: 'Proyecto integral: ventanas, cerramiento terraza y pérgola bioclimática.' },
  { title: 'Pérgola bioclimática', city: 'Leioa, Bizkaia', sector: 'vivienda', image: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=600', desc: 'Pérgola con lamas orientables motorizadas e iluminación LED integrada.' },
  { title: 'Fachada comercial', city: 'Santander, Cantabria', sector: 'oficina', image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=600', desc: 'Escaparate y fachada acristalada en vidrio templado de seguridad.' },
  { title: 'Conjunto residencial', city: 'Vitoria-Gasteiz, Álava', sector: 'vivienda', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600', desc: 'Ventanas y cerramientos para 48 viviendas con aluminio puente térmico.' },
  { title: 'Cerramiento de terraza', city: 'San Sebastián, Gipuzkoa', sector: 'vivienda', image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=600', desc: 'Cerramiento corredera sin marco para maximizar vistas al mar.' },
]

type Sector = 'todos' | 'vivienda' | 'oficina' | 'colegio'

export default function ProyectosPage() {
  const [filter, setFilter] = useState<Sector>('todos')
  const [selected, setSelected] = useState<typeof projects[0] | null>(null)
  const filtered = filter === 'todos' ? projects : projects.filter(p => p.sector === filter)

  return (
    <div className="min-h-screen bg-crema">
      <div className="bg-carbon py-16 px-6 text-center">
        <span className="font-montserrat text-[10px] font-bold tracking-[3px] uppercase text-arena block mb-3">Portfolio</span>
        <h1 className="font-montserrat text-3xl font-extrabold text-white">Proyectos realizados</h1>
        <p className="text-white/60 mt-2 text-[14px]">Obras en Bilbao, Vizcaya y el norte de España</p>
      </div>
      <div className="bg-white border-b border-gris-claro px-6 py-3">
        <nav className="max-w-[1280px] mx-auto font-montserrat text-[12px] text-gris-medio flex items-center gap-1.5">
          <Link href="/" className="hover:text-rojo transition-colors">Inicio</Link>
          <span className="text-gris-medio/40">/</span>
          <span className="text-carbon font-semibold">Proyectos</span>
        </nav>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-10">
        <div className="flex gap-3 mb-8 flex-wrap">
          {(['todos', 'vivienda', 'oficina', 'colegio'] as Sector[]).map(s => (
            <button key={s} onClick={() => setFilter(s)} className={`font-montserrat text-[12px] font-bold px-4 py-2 rounded-full border transition-colors ${filter === s ? 'bg-rojo text-white border-rojo' : 'border-gris-claro text-gris-medio hover:border-rojo hover:text-rojo'}`}>
              {s === 'todos' ? 'Todos' : s === 'vivienda' ? 'Vivienda' : s === 'oficina' ? 'Oficinas' : 'Colegios'}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {filtered.map(p => (
            <div key={p.title} className="break-inside-avoid mb-4 group relative rounded-xl overflow-hidden cursor-pointer shadow-sm" onClick={() => setSelected(p)}>
              <Image src={p.image} alt={p.title} width={600} height={400} className="w-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-carbon/75 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-center p-4">
                <h3 className="font-montserrat text-[14px] font-bold mb-1">{p.title}</h3>
                <p className="text-[11px] text-white/80">{p.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 bg-carbon/80 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-white rounded-xl max-w-lg w-full overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="relative h-56">
              <Image src={selected.image} alt={selected.title} fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="font-montserrat text-lg font-extrabold text-carbon mb-1">{selected.title}</h3>
              <p className="text-[12px] text-arena font-montserrat font-semibold mb-3">{selected.city}</p>
              <p className="text-[13px] text-gris-medio leading-relaxed">{selected.desc}</p>
              <button onClick={() => setSelected(null)} className="mt-5 font-montserrat text-[12px] font-bold text-gris-medio hover:text-rojo transition-colors">Cerrar ×</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
