import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'

export const metadata: Metadata = buildMetadata({
  title: "Ventanas de Aluminio a Medida en Bilbao | Comercial MAR'O",
  description: 'Ventanas de aluminio abatibles, correderas y oscilobatientes a medida. Instalación en Bilbao y Vizcaya. Presupuesto gratis.',
  keywords: ['ventanas aluminio Bilbao', 'ventanas a medida Vizcaya', 'ventanas oscilobatientes Bizkaia'],
  path: '/ventanas',
})

const features = [
  'Abatibles, correderas y oscilobatientes',
  'Perfiles Cortizo y Reynaers certificados',
  'Rotura de puente térmico clase A',
  'Doble y triple acristalamiento',
  'Todos los colores RAL y acabados lacados',
  'Garantía 10 años en fabricación e instalación',
]

const finishes = ['Blanco', 'Gris antracita', 'Negro', 'Madera (efecto)', 'Champán', 'Bronce', 'Personalizado RAL']

export default function VentanasPage() {
  return (
    <div className="min-h-screen">
      <div className="relative h-64 flex items-end">
        <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200" alt="Ventanas de aluminio Bilbao" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-carbon/70" />
        <div className="relative z-10 px-6 pb-8 max-w-[1280px] mx-auto w-full">
          <nav className="text-white/60 text-[12px] font-montserrat mb-2">
            <Link href="/" className="hover:text-white">Inicio</Link> / <span className="text-white">Ventanas de Aluminio</span>
          </nav>
          <h1 className="font-montserrat text-3xl font-extrabold text-white">Ventanas de Aluminio</h1>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-14 grid lg:grid-cols-[1fr_320px] gap-12">
        <div>
          <p className="text-gris-medio text-base leading-relaxed mb-4">
            En Comercial MAR&apos;O fabricamos e instalamos ventanas de aluminio a medida en Bilbao, Vizcaya y todo el País Vasco. Nuestras ventanas combinan diseño moderno con la máxima eficiencia energética, gracias a los perfiles de rotura de puente térmico que cumplen con la normativa CTE-HE.
          </p>
          <p className="text-gris-medio text-base leading-relaxed mb-10">
            Trabajamos con marcas líderes como Cortizo y Reynaers para garantizar ventanas que duran décadas con un mantenimiento mínimo.
          </p>

          <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5">Características técnicas</h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {features.map(f => (
              <div key={f} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-rojo flex-shrink-0 mt-0.5" />
                <span className="text-[13px] text-gris-medio">{f}</span>
              </div>
            ))}
          </div>

          <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5">Galería</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="relative h-36 rounded-lg overflow-hidden">
                <Image src={`https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&sig=${i}`} alt={`Proyecto ventanas aluminio ${i}`} fill sizes="(max-width: 640px) 50vw, 33vw" className="object-cover hover:scale-105 transition-transform" />
              </div>
            ))}
          </div>

          <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5">Acabados disponibles</h2>
          <div className="flex flex-wrap gap-3">
            {finishes.map(c => (
              <span key={c} className="border border-gris-claro rounded-full px-4 py-1.5 text-[12px] font-montserrat font-semibold text-gris-medio">{c}</span>
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-24 h-fit">
          <div className="bg-crema rounded-xl p-6 border border-gris-claro">
            <h3 className="font-montserrat text-[15px] font-bold text-carbon mb-2">¿Necesitas ventanas a medida?</h3>
            <p className="text-[12px] text-gris-medio mb-5">Solicita tu presupuesto gratuito. Te respondemos en menos de 24h.</p>
            <PresupuestoButton size="lg" className="w-full justify-center" />
            <div className="mt-4 pt-4 border-t border-gris-claro text-[11px] text-gris-medio font-montserrat space-y-1.5">
              {['Presupuesto gratuito y sin compromiso', 'Garantía 10 años', 'Instalación propia en Vizcaya'].map(item => (
                <p key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-rojo flex-shrink-0" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
