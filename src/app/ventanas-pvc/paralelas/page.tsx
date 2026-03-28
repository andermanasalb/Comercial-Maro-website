import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'

export const metadata: Metadata = buildMetadata({
  title: "Ventanas Paralelas PVC Ecoven Plus Bilbao | Comercial MAR'O",
  description:
    'Paralelas PVC Ecoven Plus. Apertura paralela al marco con presión perimetral superior. Oscilo-Paralela y Paralela SP. Compatible con S70 y S82. Bilbao y Vizcaya.',
  keywords: ['ventanas paralelas PVC Bilbao', 'Ecoven Plus paralelas', 'ventanas herméticas PVC Bizkaia'],
  path: '/ventanas-pvc/paralelas',
})

const features = [
  'Hoja que se desplaza paralelamente sobre guías',
  'Cierre perimetral con máxima estanqueidad',
  'Compatible con perfiles S70 y S82',
  'Variante Oscilo-Paralela: combina oscilobatiente y deslizante',
  'Variante Paralela SP: apertura total en paralelo',
  'Prestaciones próximas a ventana abatible de gama alta',
  'Sin filtraciones de aire en posición de cierre',
  'Diseño robusto y funcional',
]

const specs: [string, string][] = [
  ['Tipo', 'Paralela (desplazamiento paralelo al marco)'],
  ['Sellado en cierre', 'Presión perimetral superior'],
  ['Compatibilidad', 'Series S70 y S82'],
  ['Variantes', 'Oscilo-Paralela · Paralela SP'],
  ['Aislamiento', 'Próximo a abatible de gama alta'],
  ['Usos principales', 'Terrazas, salones, dormitorios con exigencia acústica'],
  ['Acabados', 'Todos los colores RAL y Spectral'],
]

export default function ParalelasPage() {
  return (
    <div className="min-h-screen">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .img-reveal { animation: fadeUp 0.65s ease both; }
        .img-zoom-wrap { overflow: hidden; border-radius: 0.75rem; }
        .img-zoom-wrap:hover .img-zoom { transform: scale(1.04); }
        .img-zoom { transition: transform 0.45s ease; }
      `}</style>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="relative h-[40vh] min-h-48 flex items-end">
        <Image
          src="https://ecovenplus.com/wp-content/uploads/2024/10/ventana-osciloparalela-pvc-ecoven-plus.jpg"
          alt="Ventanas paralelas PVC Ecoven Plus"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-carbon/70" />
        <div className="relative z-10 px-6 pb-8 max-w-[1280px] mx-auto w-full">
          <nav className="text-white/60 text-[12px] font-montserrat mb-2">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            {' / '}
            <Link href="/ventanas-pvc" className="hover:text-white transition-colors">Puertas y Ventanas PVC</Link>
            {' / '}
            <span className="text-white" aria-current="page">Paralelas</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-arena/20 border border-arena/40 text-arena text-[10px] font-montserrat font-bold tracking-[3px] uppercase px-3 py-1 rounded-full">
              Sistema deslizante
            </span>
          </div>
          <h1 className="font-montserrat text-3xl font-extrabold text-white">Paralelas Ecoven Plus</h1>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-14 grid lg:grid-cols-[1fr_320px] gap-12">
        <div>
          {/* ── Intro + foto ─────────────────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
            <div>
              <p className="text-gris-medio text-base leading-relaxed mb-4">
                Las paralelas Ecoven Plus son perfectas si quieres un cierre más hermético pero no quieres
                renunciar a una apertura cómoda. La hoja se desplaza en paralelo al marco y cierra con una
                <strong className="text-carbon font-semibold"> presión perimetral superior</strong> a la de
                una corredera tradicional.
              </p>
              <p className="text-gris-medio text-base leading-relaxed">
                Compatible con series <strong className="text-carbon font-semibold">S70 y S82</strong>: puedes
                disponer de una solución deslizante con prestaciones térmicas y acústicas muy próximas a las
                de una ventana practicable de gama alta.
              </p>
            </div>
            <div className="img-zoom-wrap shadow-md">
              <Image
                src="https://ecovenplus.com/wp-content/uploads/2024/10/ventana-osciloparalela-pvc-ecoven-plus.jpg"
                alt="Ventana osciloparalela PVC Ecoven Plus — vista detalle"
                width={600}
                height={450}
                className="w-full h-[260px] object-cover img-zoom img-reveal"
              />
            </div>
          </div>

          {/* ── Variants cards + foto ────────────────────────────────────────── */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <div className="bg-crema border border-gris-claro rounded-xl overflow-hidden">
              <div className="img-zoom-wrap rounded-none h-[160px]">
                <Image
                  src="https://ecovenplus.com/wp-content/uploads/2024/10/scenia-vent-copia-444x600.jpg"
                  alt="Ventana oscilo-paralela en gran formato"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover img-zoom img-reveal"
                />
              </div>
              <div className="p-5">
                <p className="font-montserrat text-[13px] font-bold text-carbon mb-2">Oscilo-Paralela</p>
                <p className="text-sm text-gris-medio leading-relaxed">
                  Combina oscilobatiente y deslizamiento paralelo. Ventilación controlada y apertura amplia
                  en un mismo sistema. Ideal para quien necesita flexibilidad total de apertura.
                </p>
              </div>
            </div>
            <div className="bg-crema border border-gris-claro rounded-xl overflow-hidden">
              <div className="img-zoom-wrap rounded-none h-[160px]">
                <Image
                  src="https://ecovenplus.com/wp-content/uploads/2024/10/IMG_6259-2-scaled-444x600.jpg"
                  alt="Ventana paralela SP instalada en terraza"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover img-zoom img-reveal"
                  style={{ animationDelay: '0.1s' }}
                />
              </div>
              <div className="p-5">
                <p className="font-montserrat text-[13px] font-bold text-carbon mb-2">Paralela SP</p>
                <p className="text-sm text-gris-medio leading-relaxed">
                  Apertura paralela de toda la hoja. Ventilación natural máxima sin restricciones.
                  El cierre perimetral garantiza la máxima estanqueidad cuando está cerrada.
                </p>
              </div>
            </div>
          </div>

          {/* ── Características ──────────────────────────────────────────────── */}
          <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5">Características</h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {features.map(f => (
              <div key={f} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-rojo flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm text-gris-medio">{f}</span>
              </div>
            ))}
          </div>

          {/* ── Ficha técnica ───────────────────────────────────────────────── */}
          <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5">Ficha técnica</h2>
          <div className="rounded-xl border border-gris-claro overflow-hidden mb-10">
            {specs.map(([label, value], i) => (
              <div key={label} className={`flex justify-between items-center px-5 py-3 text-sm ${i % 2 === 0 ? 'bg-crema' : 'bg-white'}`}>
                <span className="text-gris-medio font-montserrat">{label}</span>
                <span className="font-montserrat font-semibold text-carbon text-right">{value}</span>
              </div>
            ))}
          </div>

          {/* ── Acabados ────────────────────────────────────────────────────── */}
          <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5">Acabados disponibles</h2>
          <div className="flex flex-wrap gap-3">
            {['Blanco', 'Gris antracita', 'Negro', 'Efecto madera', 'Personalizado RAL', 'Acabado Spectral'].map(c => (
              <span
                key={c}
                className="border border-gris-claro rounded-full px-4 py-1.5 text-[12px] font-montserrat font-semibold text-gris-medio"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* ── Sidebar ──────────────────────────────────────────────────────── */}
        <div className="lg:sticky lg:top-20 h-fit space-y-4">
          <div className="bg-crema rounded-xl p-6 border border-gris-claro">
            <h3 className="font-montserrat text-base font-bold text-carbon mb-2">
              ¿Buscas un deslizante hermético?
            </h3>
            <p className="text-sm text-gris-medio mb-5">
              Las paralelas ofrecen lo mejor de la corredera y la abatible. Cuéntanos tu proyecto.
            </p>
            <PresupuestoButton size="lg" className="w-full justify-center" />
            <div className="mt-4 pt-4 border-t border-gris-claro text-sm text-gris-medio font-montserrat space-y-1.5">
              {['Medición y proyecto a medida', 'Garantía 10 años', 'Instalación propia en Vizcaya'].map(item => (
                <p key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-rojo flex-shrink-0" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-gris-claro">
            <p className="font-montserrat text-[11px] font-bold tracking-[2px] uppercase text-gris-medio mb-3">
              Otros sistemas deslizantes
            </p>
            {[
              { label: 'Correderas Ecoven Plus', sub: 'Amplitud y luz', href: '/ventanas-pvc/correderas' },
              { label: 'Vekamotion 82', sub: 'Pared de vidrio', href: '/ventanas-pvc/vekamotion-82' },
              { label: 'Volver al catálogo', sub: 'Puertas y Ventanas PVC', href: '/ventanas-pvc' },
            ].map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between py-2.5 border-b border-gris-claro last:border-0 hover:bg-crema -mx-1 px-1 rounded transition-colors"
              >
                <div>
                  <p className="font-montserrat text-[13px] font-semibold text-carbon group-hover:text-rojo transition-colors">{item.label}</p>
                  <p className="text-[11px] text-gris-medio">{item.sub}</p>
                </div>
                <ArrowRight size={13} className="text-gris-medio group-hover:text-rojo transition-colors flex-shrink-0" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
