import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'

export const metadata: Metadata = buildMetadata({
  title: "Acristalamiento y Herrajes Ecoven Plus en Bilbao | Comercial MAR'O",
  description:
    'Vidrios Guardian y Saint Gobain: bajo emisivo, control solar, acústico y de seguridad. Herraje activPilot RC2. Instalación en Bilbao y Vizcaya.',
  keywords: [
    'acristalamiento ventanas Bilbao',
    'vidrio bajo emisivo Vizcaya',
    'herrajes activPilot RC2',
    'vidrio acústico Bilbao',
    'Guardian Saint Gobain Bilbao',
  ],
  path: '/ventanas-pvc/acristalamiento',
})

const vidrios = [
  {
    name: 'Bajo emisivo',
    desc: 'Reduce la pérdida de calor en invierno.',
    detail: 'Barrera térmica de alta eficiencia. Para maximizar la eficiencia energética del cerramiento.',
  },
  {
    name: 'Control solar',
    desc: 'Filtra la radiación solar sin perder luminosidad.',
    detail: 'Ideal para fachadas orientadas al sur. Protege del calor excesivo sin oscurecer el interior.',
  },
  {
    name: 'Acústico',
    desc: 'Lámina intermedia especial para reducción de ruido.',
    detail: 'Para atenuar ruido de tráfico y vecinos. Complementa el perfil PVC para un resultado superior.',
  },
  {
    name: 'Seguridad laminada',
    desc: 'Dos o más vidrios unidos con lámina plástica.',
    detail: 'Niveles: física, antirrobo, contra armas y explosiones. No fragmenta al romperse.',
  },
]

const herrajesFeatures = [
  'Sistema activPilot hasta 150 kg de carga',
  'Certificación RC2 antirrobo',
  'Cerraderos con bulón octogonal de presión regulable',
  'Elemento Duo-Función (falsa maniobra + elevador)',
  'Tri-Función para balconeras y puertas',
  'Cremona oculta accionada por botón',
  'Múltiples puntos de cierre perimetral',
  'Totalmente automatizable con motorización',
]

const specs: [string, string][] = [
  ['Herraje', 'activPilot'],
  ['Capacidad', 'Hasta 150 kg'],
  ['Seguridad', 'RC2 certificado'],
  ['Cremonas', 'Visibles y ocultas disponibles'],
  ['Doble/triple', 'Doble y triple acristalamiento'],
  ['Proveedores vidrio', 'Guardian / Saint Gobain'],
]

export default function AcristalamientoPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="relative h-[40vh] min-h-48 flex items-end">
        <Image
          src="https://ecovenplus.com/wp-content/uploads/2024/10/beautiful-view-blue-lake-captured-from-inside-villa-1-scaled.jpg"
          alt="Acristalamiento y herrajes Ecoven Plus"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-carbon/70" />
        <div className="relative z-10 px-6 pb-8 max-w-site mx-auto w-full">
          <nav className="text-white/60 text-[12px] font-montserrat mb-2">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            {' / '}
            <Link href="/ventanas-pvc" className="hover:text-white transition-colors">Puertas y Ventanas PVC Ecoven Plus</Link>
            {' / '}
            <span className="text-white" aria-current="page">Acristalamiento y Herrajes</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-arena/20 border border-arena/40 text-arena text-[10px] font-montserrat font-bold tracking-[3px] uppercase px-3 py-1 rounded-full">
              El corazón de la ventana
            </span>
          </div>
          <h1 className="font-montserrat text-3xl font-extrabold text-white leading-tight">
            Acristalamiento y Herrajes Ecoven Plus
          </h1>
        </div>
      </div>

      <div className="max-w-site mx-auto px-6 py-14 grid lg:grid-cols-[1fr_320px] gap-12">
        <div>
          {/* ── Intro + certificación ────────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
            <div>
              <p className="text-gris-medio text-base leading-relaxed mb-4">
                El vidrio y los herrajes marcan la diferencia entre una ventana correcta y una ventana
                realmente completa. En Ecoven Plus, ambos se tratan con la misma exigencia que el perfil.
              </p>
              <p className="text-gris-medio text-base leading-relaxed">
                Trabajamos exclusivamente con <strong className="text-carbon font-semibold">Guardian</strong> y{' '}
                <strong className="text-carbon font-semibold">Saint Gobain</strong> para el vidrio, y con
                el sistema <strong className="text-carbon font-semibold">activPilot</strong> para el herraje.
                Cada uno tiene certificación propia y responde ante los mismos estándares de calidad.
              </p>
            </div>
            <div className="img-zoom-wrap shadow-md">
              <Image
                src="https://ecovenplus.com/wp-content/uploads/2024/10/beautiful-view-blue-lake-captured-from-inside-villa-1-scaled.jpg"
                alt="Vista exterior a través de ventana con acristalamiento Ecoven Plus"
                width={600}
                height={450}
                className="w-full h-[260px] object-cover img-zoom img-reveal"
              />
            </div>
          </div>

          {/* ── Acristalamiento ────────────────────────────────────────────── */}
          <section className="mb-12">
            <div className="mb-6">
              <span className="inline-block font-montserrat text-[11px] font-bold tracking-[3px] uppercase text-rojo mb-1">
                Acristalamiento
              </span>
              <h2 className="font-montserrat text-2xl font-bold text-carbon">
                Vidrio Guardian &amp; Saint Gobain
              </h2>
              <p className="text-[13px] text-gris-medio mt-1">
                Cuatro tipologías según el objetivo: térmica, solar, acústica o seguridad.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {vidrios.map(({ name, desc, detail }) => (
                <div key={name} className="bg-crema rounded-xl p-4 border border-gris-claro">
                  <h3 className="font-montserrat text-base font-bold text-carbon mb-1">{name}</h3>
                  <p className="text-[12px] font-montserrat text-rojo font-medium mb-2">{desc}</p>
                  <p className="text-[12px] text-gris-medio leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>

            {/* Foto de aplicación de vidrio */}
            <div className="grid grid-cols-2 gap-3">
              <div className="img-zoom-wrap shadow-sm">
                <Image
                  src="https://ecovenplus.com/wp-content/uploads/2024/10/papik01-1-scaled.jpg.webp"
                  alt="Proyecto acristalamiento PVC Bilbao"
                  width={600}
                  height={400}
                  className="w-full h-[200px] object-cover img-zoom img-reveal"
                  style={{ animationDelay: '0.1s' }}
                />
              </div>
              <div className="img-zoom-wrap shadow-sm">
                <Image
                  src="https://ecovenplus.com/wp-content/uploads/2024/10/Casa-Hilaria-2-retocado-scaled.jpg"
                  alt="Casa Hilaria acristalamiento triple Ecoven Plus"
                  width={600}
                  height={400}
                  className="w-full h-[200px] object-cover img-zoom img-reveal"
                  style={{ animationDelay: '0.2s' }}
                />
              </div>
            </div>
          </section>

          {/* ── Herrajes ───────────────────────────────────────────────────── */}
          <section className="mb-10">
            <div className="mb-6">
              <span className="inline-block font-montserrat text-[11px] font-bold tracking-[3px] uppercase text-rojo mb-1">
                Herrajes
              </span>
              <h2 className="font-montserrat text-2xl font-bold text-carbon">
                Sistema activPilot
              </h2>
              <p className="text-[13px] text-gris-medio mt-1">
                Innovador y muy seguro. Hasta 150 kg. Certificación RC2 antirrobo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="bg-carbon rounded-xl p-6 mb-6">
                  <p className="font-montserrat text-[11px] font-bold tracking-[3px] uppercase text-arena mb-3">
                    Un herraje que se adapta a cada situación
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    El sistema activPilot de VEKA es el herraje de referencia para ventanas de alta prestación.
                    Su diseño modular permite configurar desde ventanas estándar hasta balconeras con múltiples
                    puntos de cierre perimetral, con o sin función de microventilación y con opción RC2 certificada.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {herrajesFeatures.map(f => (
                    <div key={f} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-rojo flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-sm text-gris-medio">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="img-zoom-wrap shadow-sm">
                  <Image
                    src="https://ecovenplus.com/wp-content/uploads/2024/10/Captura-de-pantalla-2024-10-23-a-las-13.19.04.png"
                    alt="Herraje activPilot — vista del sistema de cierre"
                    width={600}
                    height={400}
                    className="w-full h-[180px] object-cover img-zoom img-reveal"
                    style={{ animationDelay: '0.1s' }}
                  />
                </div>
                <div className="img-zoom-wrap shadow-sm">
                  <Image
                    src="https://ecovenplus.com/wp-content/uploads/2024/10/Captura-de-pantalla-2024-10-23-a-las-13.27.21.png"
                    alt="Detalle cierre perimetral activPilot RC2"
                    width={600}
                    height={400}
                    className="w-full h-[180px] object-cover img-zoom img-reveal"
                    style={{ animationDelay: '0.2s' }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ── Ficha técnica ──────────────────────────────────────────────── */}
          <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5">Ficha técnica</h2>
          <div className="rounded-xl border border-gris-claro overflow-hidden">
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
        </div>

        {/* ── Sidebar ─────────────────────────────────────────────────────── */}
        <aside className="lg:sticky lg:top-20 h-fit space-y-4">
          <div className="bg-crema rounded-xl p-6 border border-gris-claro">
            <h3 className="font-montserrat text-base font-bold text-carbon mb-2">
              ¿Qué vidrio necesitas?
            </h3>
            <p className="text-sm text-gris-medio mb-5">
              La elección del vidrio depende de la orientación, el ruido exterior y el nivel de seguridad
              buscado. Te orientamos sin compromiso.
            </p>
            <PresupuestoButton size="lg" className="w-full justify-center" />
            <div className="mt-4 pt-4 border-t border-gris-claro text-sm text-gris-medio font-montserrat space-y-1.5">
              {[
                'Garantía de proveedor Guardian / Saint Gobain',
                'Herraje RC2 estándar disponible',
                'Garantía 10 años en instalación',
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
              Ecosistema Ecoven Plus
            </p>
            <div className="space-y-0">
              {[
                { label: 'Persianas & Cajones', sub: 'Ecoven Plus · Passivhaus', href: '/ventanas-pvc/persianas' },
                { label: 'Control Solar', sub: 'Contraventanas · mosquiteras', href: '/ventanas-pvc/control-solar' },
                { label: 'Domótica', sub: 'Somfy TaHoma', href: '/ventanas-pvc/domotica' },
                { label: 'Volver al catálogo', sub: 'Puertas y Ventanas PVC Ecoven Plus', href: '/ventanas-pvc' },
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
