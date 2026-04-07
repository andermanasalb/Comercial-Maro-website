import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'

export const metadata: Metadata = buildMetadata({
  title: "Espacio Domótico Ecoven Plus — Somfy TaHoma en Bilbao | Comercial MAR'O",
  description:
    'Control domótico de persianas y carpinterías con Somfy TaHoma. Programas, escenarios y control desde móvil. Bilbao y Vizcaya.',
  keywords: [
    'domótica ventanas Bilbao',
    'Somfy TaHoma Bilbao',
    'persianas motorizadas Vizcaya',
    'control solar domótico',
    'hogar conectado Bilbao',
  ],
  path: '/ventanas-pvc/domotica',
})

const features = [
  'Control desde móvil, tablet u ordenador',
  'Activar y desactivar elementos remotamente',
  'Verificar el estado de todos los dispositivos',
  'Crear programas y escenarios personalizados',
  'Simular presencia cuando estás fuera de casa',
  'Ampliable según tus prioridades y presupuesto',
  'Compatible con infinidad de dispositivos del hogar',
  'Servicio técnico Somfy presente en todo el mundo',
]

const steps = [
  {
    num: '01',
    title: 'Integración',
    desc: 'Motores y sensores instalados en cajones y carpinterías Ecoven Plus durante el montaje.',
  },
  {
    num: '02',
    title: 'Conexión',
    desc: 'Vinculación con el sistema TaHoma vía WiFi o Z-Wave sin obras adicionales.',
  },
  {
    num: '03',
    title: 'Control',
    desc: 'Gestión desde app móvil o panel táctil, con automatizaciones y escenarios programados.',
  },
]

const specs: [string, string][] = [
  ['Sistema', 'Somfy TaHoma'],
  ['Conexión', 'WiFi / Z-Wave'],
  ['Control', 'App móvil / Tablet / Ordenador'],
  ['Integración', 'Luces, cámaras, alarmas, calefacción'],
  ['Persianas', 'Aluminio con espuma PUR / Autoblocantes'],
]

export default function DomoticaPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="relative h-[40vh] min-h-48 flex items-end">
        <Image
          src="https://ecovenplus.com/wp-content/uploads/2024/10/man-holding-smartphone-with-home-automation-app-scaled.jpg"
          alt="Espacio domótico Somfy TaHoma Ecoven Plus"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-carbon/70" />
        <div className="relative z-10 px-6 pb-8 max-w-site mx-auto w-full">
          <nav aria-label="Ruta de navegación" className="text-white/60 text-[12px] font-montserrat mb-2">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            {' / '}
            <Link href="/ventanas-pvc" className="hover:text-white transition-colors">Puertas y Ventanas PVC Ecoven Plus</Link>
            {' / '}
            <span className="text-white" aria-current="page">Domótica</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-arena/20 border border-arena/40 text-arena text-[10px] font-montserrat font-bold tracking-[3px] uppercase px-3 py-1 rounded-full">
              Hogar conectado
            </span>
          </div>
          <h1 className="font-montserrat text-3xl font-extrabold text-white leading-tight">
            Espacio Domótico Ecoven Plus
          </h1>
        </div>
      </div>

      <div className="max-w-site mx-auto px-6 py-14 grid lg:grid-cols-[1fr_320px] gap-12">
        <div>
          {/* ── Intro + foto ─────────────────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
            <div>
              <p className="text-gris-medio text-base leading-relaxed mb-4">
                Con el espacio domótico Ecoven Plus puedes conectar persianas y otros elementos al sistema
                <strong className="text-carbon font-semibold"> Somfy TaHoma</strong>. La ventana se convierte
                en un nodo inteligente del hogar.
              </p>
              <p className="text-gris-medio text-base leading-relaxed">
                Sin obras adicionales. Los motores y sensores se instalan durante el montaje de las
                carpinterías, y la vinculación al sistema se realiza por{' '}
                <strong className="text-carbon font-semibold">WiFi o Z-Wave</strong> desde la primera
                puesta en marcha.
              </p>
            </div>
            <div className="img-zoom-wrap shadow-md">
              <Image
                src="https://ecovenplus.com/wp-content/uploads/2024/10/Diseno-sin-titulo-44.png"
                alt="App domótica Somfy TaHoma para ventanas PVC Ecoven Plus"
                width={600}
                height={450}
                className="w-full h-[260px] object-cover img-zoom img-reveal"
              />
            </div>
          </div>

          {/* ── Somfy TaHoma ────────────────────────────────────────────────── */}
          <section className="mb-12">
            <div className="mb-6">
              <span className="inline-block font-montserrat text-[11px] font-bold tracking-[3px] uppercase text-rojo mb-1">
                Plataforma de control
              </span>
              <h2 className="font-montserrat text-2xl font-bold text-carbon">Somfy TaHoma</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
              <div>
                <div className="bg-carbon rounded-xl p-7 mb-6">
                  <p className="font-montserrat text-[11px] font-bold tracking-[3px] uppercase text-arena mb-4">
                    Somfy TaHoma
                  </p>
                  <h3 className="font-montserrat text-xl font-extrabold text-white mb-4">
                    El centro de control de tu hogar
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    Plataforma completa para controlar no solo ventanas y persianas, sino también cámaras,
                    alarmas, luces, calefacción, enchufes, toldos y sensores de cualquier tipo.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['WiFi', 'Z-Wave', 'App móvil', 'Panel táctil', 'Escenarios'].map(tag => (
                      <span
                        key={tag}
                        className="bg-white/10 text-arena text-[10px] font-montserrat font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {features.map(f => (
                    <div key={f} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-rojo flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-sm text-gris-medio">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Foto app + foto proyecto */}
              <div className="space-y-3">
                <div className="img-zoom-wrap shadow-sm">
                  <Image
                    src="https://ecovenplus.com/wp-content/uploads/2024/10/papik01-1-scaled.jpg.webp"
                    alt="Proyecto domótica hogar Bilbao con Somfy TaHoma"
                    width={600}
                    height={400}
                    className="w-full h-[200px] object-cover img-zoom img-reveal"
                    style={{ animationDelay: '0.1s' }}
                  />
                </div>
                <div className="img-zoom-wrap shadow-sm">
                  <Image
                    src="https://ecovenplus.com/wp-content/uploads/2024/10/1700580387256-2.jpeg"
                    alt="Control inteligente ventanas Bizkaia Somfy"
                    width={600}
                    height={400}
                    className="w-full h-[200px] object-cover img-zoom img-reveal"
                    style={{ animationDelay: '0.2s' }}
                  />
                </div>
              </div>
            </div>

            {/* How it works */}
            <div>
              <h3 className="font-montserrat text-base font-extrabold text-carbon mb-5">Cómo funciona</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {steps.map(({ num, title, desc }) => (
                  <div key={num} className="bg-crema rounded-xl p-5 border border-gris-claro">
                    <span className="font-montserrat text-3xl font-black text-carbon/10 leading-none block mb-3 select-none">
                      {num}
                    </span>
                    <h4 className="font-montserrat text-base font-bold text-carbon mb-2">{title}</h4>
                    <p className="text-[12px] text-gris-medio leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Ficha técnica ──────────────────────────────────────────────── */}
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

          {/* ── Foto de proyecto ─────────────────────────────────────────────── */}
          <div className="img-zoom-wrap shadow-md">
            <Image
              src="https://ecovenplus.com/wp-content/uploads/2024/10/Casa-Hilaria-2-retocado-scaled.jpg"
              alt="Casa Hilaria domótica integrada Somfy TaHoma"
              width={800}
              height={500}
              className="w-full h-[280px] object-cover img-zoom img-reveal"
            />
          </div>
        </div>

        {/* ── Sidebar ─────────────────────────────────────────────────────── */}
        <aside className="lg:sticky lg:top-20 h-fit space-y-4">
          <div className="bg-crema rounded-xl p-6 border border-gris-claro">
            <h3 className="font-montserrat text-base font-bold text-carbon mb-2">
              ¿Te interesa el hogar conectado?
            </h3>
            <p className="text-sm text-gris-medio mb-5">
              La domótica se planifica durante el proyecto. Cuéntanos qué elementos quieres controlar
              y lo integramos desde el primer día.
            </p>
            <PresupuestoButton size="lg" className="w-full justify-center" />
            <div className="mt-4 pt-4 border-t border-gris-claro text-sm text-gris-medio font-montserrat space-y-1.5">
              {[
                'Planificación incluida en presupuesto',
                'Motor Somfy certificado',
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
                { label: 'Acristalamiento', sub: 'Vidrio & herrajes RC2', href: '/ventanas-pvc/acristalamiento' },
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
