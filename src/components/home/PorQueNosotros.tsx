import Image from 'next/image'
import { SectionHeader } from '@/components/shared/SectionHeader'

const items = [
  { icon: '🏭', title: 'Fabricantes directos', desc: 'Sin intermediarios. Fabricamos nosotros mismos en Bilbao.' },
  { icon: '🔧', title: 'Instalación propia', desc: 'Equipo técnico propio. Sin subcontratas, sin sorpresas.' },
  { icon: '🤝', title: 'Trato personal', desc: 'Un único interlocutor lleva tu proyecto de principio a fin.' },
  { icon: '🏅', title: 'Proveedores premium', desc: 'Trabajamos con Cortizo, Technal y Reynaers.' },
]

export function PorQueNosotros() {
  return (
    <section className="py-0">
      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2">
        <div className="relative h-72 lg:h-auto min-h-[400px]">
          <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800" alt="Taller MAR'O Bilbao" fill className="object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(212,43,43,0.15), transparent)' }} />
        </div>
        <div className="px-8 py-14 lg:px-14">
          <SectionHeader tag="Por qué elegirnos" title="La confianza de tu familia, en manos expertas" center={false} />
          <p className="text-[14px] text-gris-medio mb-8">
            Más de 25 años fabricando e instalando carpintería metálica en Bilbao y Vizcaya con calidad artesanal, materiales premium y trato personal.
          </p>
          <div className="flex flex-col gap-5">
            {items.map(item => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="w-10 h-10 min-w-[40px] rounded-lg bg-arena-claro flex items-center justify-center text-xl">{item.icon}</div>
                <div>
                  <h4 className="font-montserrat text-[13px] font-bold text-carbon mb-1">{item.title}</h4>
                  <p className="text-[12px] text-gris-medio">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
