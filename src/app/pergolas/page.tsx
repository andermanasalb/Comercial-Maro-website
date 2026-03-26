import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'
import { ProductGallery } from '@/components/shared/ProductGallery'

const galleryImages = [1,2,3,4,5,6].map(i => ({
  src: `https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800&h=600&sig=${i}`,
  alt: `Pérgola bioclimática ${i}`,
}))

export const metadata: Metadata = buildMetadata({
  title: "Pérgolas Bioclimáticas en Bilbao | Comercial MAR'O",
  description: 'Pérgolas bioclimáticas con lamas orientables automáticas. Disfruta del exterior todo el año en Bilbao y Vizcaya. Presupuesto gratuito.',
  keywords: ['pérgolas bioclimáticas Bilbao', 'pérgola aluminio Vizcaya', 'pergola motorizada Bizkaia'],
  path: '/pergolas',
})

const features = [
  'Lamas orientables motorizadas',
  'Control por app y mando a distancia',
  'Sensores de lluvia y viento automáticos',
  'Iluminación LED integrada opcional',
  'Estructura de aluminio anodizado',
  'Garantía 10 años en fabricación e instalación',
]

const finishes = ['Blanco', 'Gris antracita', 'Negro', 'Arena', 'Madera (efecto)', 'Personalizado RAL']

export default function PergolasPage() {
  return (
    <div className="min-h-screen">
      <div className="relative h-[40vh] min-h-48 flex items-end">
        <Image src="https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200" alt="Pérgolas bioclimáticas Bilbao" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-carbon/70" />
        <div className="relative z-10 px-6 pb-8 max-w-[1280px] mx-auto w-full">
          <nav className="text-white/60 text-[12px] font-montserrat mb-2">
            <Link href="/" className="hover:text-white">Inicio</Link> / <span className="text-white" aria-current="page">Pérgolas Bioclimáticas</span>
          </nav>
          <h1 className="font-montserrat text-3xl font-extrabold text-white">Pérgolas Bioclimáticas</h1>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-14 grid lg:grid-cols-[1fr_320px] gap-12">
        <div>
          <p className="text-gris-medio text-base leading-relaxed mb-4">
            Las pérgolas bioclimáticas permiten disfrutar del espacio exterior durante todo el año, adaptándose automáticamente a las condiciones meteorológicas del País Vasco. Sus lamas orientables se ajustan según el sol, el viento y la lluvia.
          </p>
          <p className="text-gris-medio text-base leading-relaxed mb-10">
            Instalamos pérgolas de aluminio de alta calidad con motorización inteligente, iluminación LED integrada y posibilidad de cerramiento lateral con cortinas de cristal o toldos verticales.
          </p>

          <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5">Características técnicas</h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {features.map(f => (
              <div key={f} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-rojo flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gris-medio">{f}</span>
              </div>
            ))}
          </div>

          <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5">Galería</h2>
          <ProductGallery images={galleryImages} />

          <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5">Acabados disponibles</h2>
          <div className="flex flex-wrap gap-3">
            {finishes.map(c => (
              <span key={c} className="border border-gris-claro rounded-full px-4 py-1.5 text-[12px] font-montserrat font-semibold text-gris-medio">{c}</span>
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-20 h-fit">
          <div className="bg-crema rounded-xl p-6 border border-gris-claro">
            <h3 className="font-montserrat text-base font-bold text-carbon mb-2">¿Te interesa una pérgola?</h3>
            <p className="text-sm text-gris-medio mb-5">Cuéntanos tu proyecto. Estudiamos tu caso y te orientamos sin ataduras.</p>
            <PresupuestoButton size="lg" className="w-full justify-center" />
            <div className="mt-4 pt-4 border-t border-gris-claro text-sm text-gris-medio font-montserrat space-y-1.5">
              {['Asesoramiento personalizado', 'Garantía 10 años', 'Instalación propia en Vizcaya'].map(item => (
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
