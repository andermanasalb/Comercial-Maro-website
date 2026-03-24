import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'

export const metadata: Metadata = buildMetadata({
  title: "Persianas y Protección Solar en Bilbao | Comercial MAR'O",
  description: 'Persianas enrollables, mallorquinas y lamas de aluminio para protección solar y privacidad. Instalación en Bilbao y Vizcaya.',
  keywords: ['persianas aluminio Bilbao', 'protección solar Vizcaya', 'persianas enrollables Bizkaia'],
  path: '/persianas',
})

const features = [
  'Enrollables, mallorquinas y lamas',
  'Motorización con app y mando',
  'Aluminio anodizado resistente a la corrosión',
  'Protección contra intrusión RC1/RC2',
  'Reducción del ruido exterior',
  'Garantía 10 años en fabricación e instalación',
]

const finishes = ['Blanco', 'Gris antracita', 'Beige', 'Marrón', 'Negro', 'Personalizado RAL']

export default function PersianaPage() {
  return (
    <div className="min-h-screen">
      <div className="relative h-64 flex items-end">
        <Image src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200" alt="Persianas aluminio Bilbao" fill className="object-cover" />
        <div className="absolute inset-0 bg-carbon/70" />
        <div className="relative z-10 px-6 pb-8 max-w-[1280px] mx-auto w-full">
          <nav className="text-white/60 text-[12px] font-montserrat mb-2">
            <Link href="/" className="hover:text-white">Inicio</Link> / <span className="text-white">Persianas y Protección</span>
          </nav>
          <h1 className="font-montserrat text-3xl font-extrabold text-white">Persianas y Protección</h1>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-14 grid lg:grid-cols-[1fr_320px] gap-12">
        <div>
          <p className="text-gris-medio text-base leading-relaxed mb-4">
            Instalamos persianas y elementos de protección solar de aluminio a medida en Bilbao y Vizcaya. Desde persianas enrollables tradicionales hasta sistemas de lamas orientables con motorización inteligente.
          </p>
          <p className="text-gris-medio text-base leading-relaxed mb-10">
            Nuestros sistemas combinan privacidad, control lumínico y seguridad, adaptándose a cualquier tipo de ventana o fachada con la mejor relación calidad-precio del mercado.
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
                <Image src={`https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=300&sig=${i}`} alt={`Persiana ${i}`} fill className="object-cover hover:scale-105 transition-transform" />
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
            <h3 className="font-montserrat text-[15px] font-bold text-carbon mb-2">¿Necesitas persianas a medida?</h3>
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
