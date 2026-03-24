import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'

export const metadata: Metadata = buildMetadata({
  title: "Puertas Metálicas a Medida en Bilbao | Comercial MAR'O",
  description: 'Puertas de entrada, de paso y garaje en acero y aluminio a medida. Seguridad y diseño para viviendas y negocios en Bilbao y Vizcaya.',
  keywords: ['puertas metálicas Bilbao', 'puertas aluminio Vizcaya', 'puertas entrada acero Bizkaia'],
  path: '/puertas',
})

const features = [
  'Puertas de entrada, paso y garaje',
  'Fabricadas en acero y aluminio',
  'Apertura manual y automática',
  'Certificación antiefracción RC2/RC3',
  'Acabados lacados y pintados',
  'Garantía 10 años en fabricación e instalación',
]

const finishes = ['Blanco', 'Gris antracita', 'Negro mate', 'Madera (efecto)', 'Corten', 'Personalizado RAL']

export default function PuertasPage() {
  return (
    <div className="min-h-screen">
      <div className="relative h-64 flex items-end">
        <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200" alt="Puertas metálicas Bilbao" fill className="object-cover" />
        <div className="absolute inset-0 bg-carbon/70" />
        <div className="relative z-10 px-6 pb-8 max-w-[1280px] mx-auto w-full">
          <nav className="text-white/60 text-[12px] font-montserrat mb-2">
            <Link href="/" className="hover:text-white">Inicio</Link> / <span className="text-white">Puertas Metálicas</span>
          </nav>
          <h1 className="font-montserrat text-3xl font-extrabold text-white">Puertas Metálicas</h1>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-14 grid lg:grid-cols-[1fr_320px] gap-12">
        <div>
          <p className="text-gris-medio text-base leading-relaxed mb-4">
            Diseñamos y fabricamos puertas metálicas a medida para viviendas, oficinas y edificios públicos en Bilbao y Vizcaya. Combinamos seguridad, funcionalidad y estética en cada proyecto.
          </p>
          <p className="text-gris-medio text-base leading-relaxed mb-10">
            Nuestras puertas de entrada cumplen las certificaciones antiefracción más exigentes, mientras que las puertas de garaje automáticas incorporan motorización de última generación.
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
                <Image src={`https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&sig=${i}`} alt={`Proyecto puerta metálica ${i}`} fill className="object-cover hover:scale-105 transition-transform" />
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
            <h3 className="font-montserrat text-[15px] font-bold text-carbon mb-2">¿Necesitas una puerta a medida?</h3>
            <p className="text-[12px] text-gris-medio mb-5">Solicita tu presupuesto gratuito. Te respondemos en menos de 24h.</p>
            <PresupuestoButton size="lg" className="w-full justify-center" />
            <div className="mt-4 pt-4 border-t border-gris-claro text-[11px] text-gris-medio font-montserrat space-y-1">
              <p>✓ Presupuesto gratuito y sin compromiso</p>
              <p>✓ Garantía 10 años</p>
              <p>✓ Instalación propia en Vizcaya</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
