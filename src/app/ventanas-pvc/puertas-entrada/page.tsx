import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'

export const metadata: Metadata = buildMetadata({
  title: "Puertas de Entrada PVC Ecoven Plus en Bilbao | Comercial MAR'O",
  description:
    'Puertas de entrada PVC Ecoven Plus. Perfiles S70 y S82, hasta 7 puntos de cierre, triple barrera en soleras. Instalación en Bilbao y Vizcaya.',
  keywords: [
    'puertas entrada PVC Bilbao',
    'puertas PVC Ecoven Plus',
    'puertas seguridad PVC Vizcaya',
    'puertas PVC S70 S82',
  ],
  path: '/ventanas-pvc/puertas-entrada',
})

const features = [
  'Perfiles S70 o S82 según prestación buscada',
  'Cerraduras de hasta 7 puntos de cierre',
  'Triple barrera de seguridad en las soleras',
  'Diseños clásicos y modernos disponibles',
  'Con o sin vidrio, completamente configurable',
  'Hermeticidad garantizada contra polvo y aire',
  'Herrajes de seguridad certificados',
  'Adaptable a distintos estilos personales',
]

const specs: [string, string][] = [
  ['Sistema', 'PVC Ecoven Plus'],
  ['Series disponibles', 'S70 / S82'],
  ['Puntos de cierre', 'Hasta 7'],
  ['Seguridad', 'Triple barrera'],
  ['Acabados', 'Foliados y Spectral'],
]

const finishes = ['Blanco', 'Gris antracita', 'Negro', 'Roble dorado', 'Champán', 'Spectral']

export default function PuertasEntradaPage() {
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
          src="https://ecovenplus.com/wp-content/uploads/2024/10/1707999298918.jpeg"
          alt="Puertas de entrada PVC Ecoven Plus"
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
            <span className="text-white" aria-current="page">Puertas de Entrada</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-arena/20 border border-arena/40 text-arena text-[10px] font-montserrat font-bold tracking-[3px] uppercase px-3 py-1 rounded-full">
              Acceso principal
            </span>
          </div>
          <h1 className="font-montserrat text-3xl font-extrabold text-white leading-tight">
            Puertas de Entrada PVC Ecoven Plus
          </h1>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-14 grid lg:grid-cols-[1fr_320px] gap-12">
        <div>
          {/* ── Intro + foto ─────────────────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
            <div>
              <p className="text-gris-medio text-base leading-relaxed mb-4">
                Las puertas de entrada Ecoven Plus permiten seguir la misma línea estética que las ventanas
                de la vivienda. Con perfiles S70 o S82, la puerta deja de ser el eslabón débil de la
                envolvente térmica y de seguridad.
              </p>
              <p className="text-gris-medio text-base leading-relaxed">
                Desde diseños clásicos hasta los más contemporáneos, con o sin vidrio, la configuración
                se adapta al estilo de cada vivienda sin renunciar a las prestaciones técnicas del sistema.
                Hasta <strong className="text-carbon font-semibold">7 puntos de cierre</strong> y{' '}
                <strong className="text-carbon font-semibold">triple barrera</strong> en las soleras.
              </p>
            </div>
            <div className="img-zoom-wrap shadow-md">
              <Image
                src="https://ecovenplus.com/wp-content/uploads/2024/10/1700580387256-2-444x600.jpeg"
                alt="Puerta de entrada PVC Ecoven Plus instalada en vivienda"
                width={600}
                height={450}
                className="w-full h-[260px] object-cover img-zoom img-reveal"
              />
            </div>
          </div>

          {/* ── Serie badges ─────────────────────────────────────────────────── */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <div className="bg-crema rounded-xl p-5 border border-gris-claro">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-arena/20 text-arena text-[10px] font-montserrat font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
                  Serie S70
                </span>
              </div>
              <h3 className="font-montserrat text-base font-bold text-carbon mb-1">Puerta S70</h3>
              <p className="text-[12px] text-gris-medio leading-relaxed">
                Perfil 70 mm, 5 cámaras. Solución estándar de alta calidad. Hasta 7 puntos de cierre,
                disponible en todos los acabados foliados y Spectral.
              </p>
            </div>
            <div className="bg-carbon rounded-xl p-5 border border-carbon">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-white/10 text-arena text-[10px] font-montserrat font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
                  Serie S82
                </span>
              </div>
              <h3 className="font-montserrat text-base font-bold text-white mb-1">Puerta S82</h3>
              <p className="text-[12px] text-white/60 leading-relaxed">
                Perfil 82 mm, 7 cámaras. Para proyectos de alta exigencia energética. Triple junta,
                compatibilidad Passivhaus. La opción premium del catálogo.
              </p>
            </div>
          </div>

          {/* ── Características + foto ──────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
            <div>
              <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5">
                Características técnicas
              </h2>
              <div className="space-y-3">
                {features.map(f => (
                  <div key={f} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-rojo flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm text-gris-medio">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="img-zoom-wrap shadow-sm">
              <Image
                src="https://ecovenplus.com/wp-content/uploads/2024/10/1708646479580-1.jpeg"
                alt="Puerta de entrada PVC alta seguridad instalada en Bilbao"
                width={600}
                height={500}
                className="w-full h-[340px] object-cover img-zoom img-reveal"
                style={{ animationDelay: '0.1s' }}
              />
            </div>
          </div>

          {/* ── Ficha técnica ───────────────────────────────────────────────── */}
          <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5">Ficha técnica</h2>
          <div className="rounded-xl border border-gris-claro overflow-hidden mb-10">
            {specs.map(([label, value], i) => (
              <div
                key={label}
                className={`flex justify-between items-center px-5 py-3 text-sm ${i % 2 === 0 ? 'bg-crema' : 'bg-white'}`}
              >
                <span className="text-gris-medio font-montserrat">{label}</span>
                <span className="font-montserrat font-semibold text-carbon text-right">{value}</span>
              </div>
            ))}
          </div>

          {/* ── Fotos de proyecto ────────────────────────────────────────────── */}
          <div className="grid grid-cols-2 gap-3 mb-10">
            <div className="img-zoom-wrap shadow-sm">
              <Image
                src="https://ecovenplus.com/wp-content/uploads/2024/10/papik01-1-scaled.jpg.webp"
                alt="Proyecto puertas PVC Ecoven Plus en vivienda Bizkaia"
                width={600}
                height={400}
                className="w-full h-[200px] object-cover img-zoom img-reveal"
                style={{ animationDelay: '0.1s' }}
              />
            </div>
            <div className="img-zoom-wrap shadow-sm">
              <Image
                src="https://ecovenplus.com/wp-content/uploads/2024/10/Casa-Hilaria-2-retocado-scaled.jpg"
                alt="Casa Hilaria puertas Ecoven Plus"
                width={600}
                height={400}
                className="w-full h-[200px] object-cover img-zoom img-reveal"
                style={{ animationDelay: '0.2s' }}
              />
            </div>
          </div>

          {/* ── Acabados ───────────────────────────────────────────────────── */}
          <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5">
            Acabados disponibles
          </h2>
          <div className="flex flex-wrap gap-3">
            {finishes.map(c => (
              <span
                key={c}
                className="border border-gris-claro rounded-full px-4 py-1.5 text-[12px] font-montserrat font-semibold text-gris-medio"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* ── Sidebar ─────────────────────────────────────────────────────── */}
        <aside className="lg:sticky lg:top-20 h-fit space-y-4">
          <div className="bg-crema rounded-xl p-6 border border-gris-claro">
            <h3 className="font-montserrat text-base font-bold text-carbon mb-2">
              ¿Buscas una puerta de entrada de calidad?
            </h3>
            <p className="text-sm text-gris-medio mb-5">
              Te asesoramos en la elección de serie, diseño y acabado para que la entrada de tu vivienda
              sea tan eficiente como el resto de las carpinterías.
            </p>
            <PresupuestoButton size="lg" className="w-full justify-center" />
            <div className="mt-4 pt-4 border-t border-gris-claro text-sm text-gris-medio font-montserrat space-y-1.5">
              {[
                'Asesoramiento personalizado',
                'Instalación propia en Vizcaya',
                'Garantía 10 años',
              ].map(item => (
                <p key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-rojo flex-shrink-0" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-gris-claro">
            <p className="font-montserrat text-[11px] font-bold tracking-[2px] uppercase text-gris-medio mb-3">
              Productos relacionados
            </p>
            <div className="space-y-0">
              {[
                { label: 'Serie S70', sub: '70 mm · 5 cámaras', href: '/ventanas-pvc/serie-s70' },
                { label: 'Serie S82', sub: '82 mm · Passivhaus', href: '/ventanas-pvc/serie-s82' },
                { label: 'Vidrio & Herrajes', sub: 'activPilot RC2', href: '/ventanas-pvc/acristalamiento' },
                { label: 'Diseño Spectral', sub: 'Acabados premium', href: '/ventanas-pvc/diseno' },
                { label: 'Volver al catálogo', sub: 'Puertas y Ventanas PVC', href: '/ventanas-pvc' },
              ].map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between py-2.5 border-b border-gris-claro last:border-0 hover:bg-crema -mx-1 px-1 rounded transition-colors"
                >
                  <div>
                    <p className="font-montserrat text-[13px] font-semibold text-carbon group-hover:text-rojo transition-colors">
                      {item.label}
                    </p>
                    <p className="text-[11px] text-gris-medio">{item.sub}</p>
                  </div>
                  <ArrowRight size={13} className="text-gris-medio group-hover:text-rojo transition-colors flex-shrink-0" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
