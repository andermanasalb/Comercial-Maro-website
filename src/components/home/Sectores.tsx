import Image from 'next/image'
import { SectionHeader } from '@/components/shared/SectionHeader'

const sectors = [
  { icon: '🏠', title: 'Viviendas', desc: 'Reforma integral o nueva construcción. Tu hogar merece lo mejor.', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600' },
  { icon: '🏢', title: 'Oficinas y Comercios', desc: 'Fachadas acristaladas, mamparas y divisorias. Diseño corporativo.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600' },
  { icon: '🏫', title: 'Colegios y Edificios Públicos', desc: 'Máxima seguridad, normativa cumplida y plazos garantizados.', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600' },
]

export function Sectores() {
  return (
    <section id="sectores" className="py-16 px-6 bg-carbon">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader tag="Sectores" title="Soluciones para cada espacio" subtitle="Adaptamos cada proyecto a las necesidades del cliente en todo el norte de España" dark />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {sectors.map(s => (
            <div key={s.title} className="group relative h-52 rounded-xl overflow-hidden cursor-pointer">
              <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-carbon/85 group-hover:to-rojo/70 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="font-montserrat text-[14px] font-extrabold mb-1">{s.icon} {s.title}</h3>
                <p className="text-[11px] text-white/80">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
