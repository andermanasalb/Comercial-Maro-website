import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowLeftRight, Layers, Maximize2, ArrowRight } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'

export const metadata: Metadata = buildMetadata({
  title: "Puertas y Ventanas PVC Ecoven Plus en Bilbao | Comercial MAR'O",
  description:
    'Ventanas y puertas de PVC Ecoven Plus: Series S70, S76 y S82, correderas, paralelas y Vekamotion 82. Instalación en Bilbao y toda Vizcaya.',
  keywords: [
    'ventanas PVC Bilbao',
    'Ecoven Plus Bilbao',
    'puertas PVC Vizcaya',
    'serie S70 S76 S82',
    'ventanas PVC eficientes',
  ],
  path: '/ventanas-pvc',
})

export default function VentanasPvcPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="relative h-[40vh] min-h-48 flex items-end">
        <Image
          src="https://ecovenplus.com/wp-content/uploads/2024/10/papik01-1-scaled.jpg.webp"
          alt="Puertas y ventanas PVC Ecoven Plus"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-carbon/72" />
        <div className="relative z-10 px-6 pb-8 max-w-[1280px] mx-auto w-full">
          <nav className="text-white/60 text-[12px] font-montserrat mb-2">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            {' / '}
            <span className="text-white" aria-current="page">Puertas y Ventanas PVC Ecoven Plus</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-arena/20 border border-arena/40 text-arena text-[10px] font-montserrat font-bold tracking-[3px] uppercase px-3 py-1 rounded-full">
              Ecoven Plus
            </span>
          </div>
          <h1 className="font-montserrat text-3xl font-extrabold text-white leading-tight">
            Puertas y Ventanas PVC Ecoven Plus
          </h1>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-14 grid lg:grid-cols-[1fr_300px] gap-12">
        <div>
          {/* ── Intro ──────────────────────────────────────────────────────── */}
          <p className="text-gris-medio text-base leading-relaxed mb-12">
            Tres series —<strong className="text-carbon font-semibold">S70, S76 y S82</strong>— para cada nivel de exigencia: desde una renovación estándar hasta una envolvente <strong className="text-carbon font-semibold">Passivhaus</strong>. Persianas, control solar, vidrio y domótica coordinados del mismo proveedor.
          </p>

          {/* ── Las Tres Series ─────────────────────────────────────────────── */}
          <section className="mb-14">
            <div className="mb-7">
              <span className="inline-block font-montserrat text-[11px] font-bold tracking-[3px] uppercase shimmer-text mb-1">
                Las tres series
              </span>
              <h2 className="font-montserrat text-2xl font-bold text-carbon">
                Elige tu nivel de exigencia
              </h2>
              <p className="text-[13px] text-gris-medio mt-1 max-w-lg">
                Cada serie ofrece mayor profundidad de perfil, más cámaras y mejor aislamiento.
                Elige según tu vivienda, clima y presupuesto.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">

              {/* S70 */}
              <Link
                href="/ventanas-pvc/serie-s70"
                className="group relative flex flex-col bg-white border border-gris-claro rounded-xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200 h-full"
              >
                <div className="h-[3px] w-full bg-arena flex-shrink-0" />
                <div className="p-5 relative flex flex-col flex-1">
                  <span className="absolute top-1/2 -translate-y-1/2 right-4 font-montserrat text-[5rem] font-black text-carbon/[0.03] leading-none select-none pointer-events-none z-0 tracking-tighter mix-blend-multiply">
                    S70
                  </span>
                  <span className="inline-block bg-arena-claro text-arena text-[10px] font-montserrat font-bold tracking-wider uppercase px-2.5 py-1 rounded-full mb-3">
                    La más utilizada
                  </span>
                  <h3 className="font-montserrat text-lg font-extrabold text-carbon mb-0.5">Serie S70</h3>
                  <p className="text-[12px] font-montserrat text-gris-medio mb-4">El cambio que más se nota</p>
                  <div className="border-t border-gris-claro pt-4 mb-4 space-y-2">
                    {[
                      ['Profundidad', '70 mm'],
                      ['Cámaras', '5 cámaras'],
                      ['Uf (marco)', '1,3 W/m²K'],
                      ['Uw (ventana)', '≈ 0,9 W/m²K'],
                    ].map(([label, value]) => (
                      <div key={label} className="flex justify-between items-baseline gap-2">
                        <span className="text-[11px] text-gris-medio">{label}</span>
                        <span className="text-[12px] text-carbon font-semibold font-montserrat text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {['Renovación', '5 cámaras', '42 mm vidrio'].map(tag => (
                      <span key={tag} className="bg-arena/20 text-arena text-[10px] font-montserrat font-bold px-2.5 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center justify-center font-montserrat text-[11px] font-bold text-rojo bg-rojo/5 px-4 py-2 mt-auto rounded-lg group-hover:bg-rojo group-hover:text-white transition-colors w-max">
                      Ver Serie S70 &rarr;
                    </span>
                  </div>
                </div>
              </Link>

              {/* S76 — featured, slightly elevated */}
              <Link
                href="/ventanas-pvc/serie-s76"
                className="group relative flex flex-col bg-white border border-rojo/25 rounded-xl overflow-hidden shadow-xl hover:-translate-y-1 transition-all duration-200 h-full"
              >
                <div className="h-[3px] w-full bg-rojo flex-shrink-0" />
                <div className="p-5 relative flex flex-col flex-1">
                  <span className="absolute top-1/2 -translate-y-1/2 right-4 font-montserrat text-[5rem] font-black text-rojo/[0.04] leading-none select-none pointer-events-none z-0 tracking-tighter mix-blend-multiply">
                    S76
                  </span>
                  <span className="inline-block bg-rojo text-white text-[10px] font-montserrat font-bold tracking-wider uppercase px-2.5 py-1 rounded-full mb-3">
                    Más popular
                  </span>
                  <h3 className="font-montserrat text-lg font-extrabold text-carbon mb-0.5">Serie S76</h3>
                  <p className="text-[12px] font-montserrat text-gris-medio mb-4">Más confort, más silencio</p>
                  <div className="border-t border-gris-claro pt-4 mb-4 space-y-2">
                    {[
                      ['Profundidad', '76 mm'],
                      ['Cámaras', '5 cámaras'],
                      ['Uf (marco)', '1,1 W/m²K'],
                      ['Uw (ventana)', '≈ 0,75 W/m²K'],
                    ].map(([label, value]) => (
                      <div key={label} className="flex justify-between items-baseline gap-2">
                        <span className="text-[11px] text-gris-medio">{label}</span>
                        <span className="text-[12px] text-carbon font-semibold font-montserrat text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {['Triple junta', 'RC2', '45 dB'].map(tag => (
                      <span key={tag} className="bg-rojo/10 text-rojo text-[10px] font-montserrat font-bold px-2.5 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center justify-center font-montserrat text-[11px] font-bold text-rojo bg-rojo/5 px-4 py-2 mt-auto rounded-lg group-hover:bg-rojo group-hover:text-white transition-colors w-max">
                      Ver Serie S76 &rarr;
                    </span>
                  </div>
                </div>
              </Link>

              {/* S82 — premium dark */}
              <Link
                href="/ventanas-pvc/serie-s82"
                className="group relative flex flex-col bg-carbon border border-carbon rounded-xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200 h-full"
              >
                <div className="h-[3px] w-full bg-arena flex-shrink-0" />
                <div className="p-5 relative flex flex-col flex-1">
                  <span className="absolute top-1/2 -translate-y-1/2 right-4 font-montserrat text-[5rem] font-black text-white/[0.03] leading-none select-none pointer-events-none z-0 tracking-tighter opacity-80">
                    S82
                  </span>
                  <span className="inline-block bg-white/10 text-arena text-[10px] font-montserrat font-bold tracking-wider uppercase px-2.5 py-1 rounded-full mb-3">
                    Premium
                  </span>
                  <h3 className="font-montserrat text-lg font-extrabold text-white mb-0.5">Serie S82</h3>
                  <p className="text-[12px] font-montserrat text-arena mb-4">Máxima eficiencia</p>
                  <div className="border-t border-white/10 pt-4 mb-4 space-y-2">
                    {[
                      ['Profundidad', '82 mm'],
                      ['Cámaras', '7 cámaras'],
                      ['Uf (marco)', '< 1,0 W/m²K'],
                      ['Certificación', 'Passivhaus'],
                    ].map(([label, value]) => (
                      <div key={label} className="flex justify-between items-baseline gap-2">
                        <span className="text-[11px] text-white/50">{label}</span>
                        <span className="text-[12px] text-white font-semibold font-montserrat text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {['Passivhaus', '7 cámaras', 'C5 · E1200'].map(tag => (
                      <span key={tag} className="bg-white/10 text-arena text-[10px] font-montserrat font-bold px-2.5 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center justify-center font-montserrat text-[11px] font-bold text-arena bg-white/10 px-4 py-2 mt-auto rounded-lg group-hover:bg-arena group-hover:text-carbon transition-colors w-max">
                      Ver Serie S82 &rarr;
                    </span>
                  </div>
                </div>
              </Link>

            </div>

            {/* ── Comparativa técnica ─────────────────────────────────────── */}
            <style>{`
              @keyframes growBar {
                from { transform: scaleX(0); }
                to   { transform: scaleX(1); }
              }
              .bar-grow {
                transform-origin: left center;
                animation: growBar 0.9s cubic-bezier(0.25,1,0.5,1) both;
              }
              @keyframes shimmerText {
                0% { background-position: -200% center; }
                100% { background-position: 200% center; }
              }
              .shimmer-text {
                background: linear-gradient(110deg, #D42B2B 40%, #ffffff 50%, #D42B2B 60%);
                background-size: 200% auto;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                animation: shimmerText 5s linear infinite;
              }
            `}</style>
            <div className="mt-6 bg-crema rounded-xl border border-gris-claro p-5">
              <p className="font-montserrat text-[11px] font-bold tracking-wider uppercase text-gris-medio mb-5">
                Comparativa técnica
              </p>
              {[
                {
                  title: 'Aislamiento térmico — Uf',
                  rows: [
                    { serie: 'S70', pct: '55%', val: '1,3 W/m²K', delay: '0ms', prem: false },
                    { serie: 'S76', pct: '72%', val: '1,1 W/m²K', delay: '100ms', prem: false },
                    { serie: 'S82', pct: '90%', val: '<1,0 W/m²K', delay: '200ms', prem: true },
                  ],
                },
                {
                  title: 'Profundidad de perfil',
                  rows: [
                    { serie: 'S70', pct: '58%', val: '70 mm', delay: '60ms', prem: false },
                    { serie: 'S76', pct: '68%', val: '76 mm', delay: '160ms', prem: false },
                    { serie: 'S82', pct: '82%', val: '82 mm', delay: '260ms', prem: true },
                  ],
                },
                {
                  title: 'Reducción acústica',
                  rows: [
                    { serie: 'S70', pct: '78%', val: '48 dB', delay: '120ms', prem: false },
                    { serie: 'S76', pct: '72%', val: '45 dB', delay: '220ms', prem: false },
                    { serie: 'S82', pct: '78%', val: '48 dB', delay: '320ms', prem: true },
                  ],
                },
              ].map((metric, mi) => (
                <div key={metric.title} className={mi < 2 ? 'mb-5' : ''}>
                  <p className="font-montserrat text-[10px] font-bold tracking-[2px] uppercase text-gris-medio mb-2.5">
                    {metric.title}
                  </p>
                  <div className="space-y-2">
                    {metric.rows.map(({ serie, pct, val, delay, prem }) => (
                      <div key={serie} className="flex items-center gap-3">
                        <span className={`font-montserrat text-[11px] font-extrabold w-7 flex-shrink-0 ${prem ? 'text-rojo' : 'text-gris-medio'}`}>{serie}</span>
                        <div className="flex-1 bg-white/70 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-full bar-grow rounded-full ${prem ? 'bg-rojo' : 'bg-arena'}`}
                            style={{ width: pct, animationDelay: delay }}
                          />
                        </div>
                        <span className={`font-montserrat text-[11px] font-bold w-20 text-right flex-shrink-0 ${prem ? 'text-rojo' : 'text-carbon'}`}>{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Sistemas Deslizantes ─────────────────────────────────────────── */}
          <section className="mb-14">
            <div className="mb-7">
              <span className="inline-block font-montserrat text-[11px] font-bold tracking-[3px] uppercase shimmer-text mb-1">
                Sistemas deslizantes
              </span>
              <h2 className="font-montserrat text-2xl font-bold text-carbon">
                Grandes aperturas al exterior
              </h2>
              <p className="text-[13px] text-gris-medio mt-1 max-w-lg">
                Tres sistemas para abrir salones, comedores y terrazas con luz, amplitud y el
                aislamiento que mereces.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">

              <Link
                href="/ventanas-pvc/correderas"
                className="group flex flex-col bg-white border border-gris-claro rounded-xl p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200 h-full"
              >
                <div className="w-10 h-10 bg-arena-claro rounded-lg flex items-center justify-center mb-4 group-hover:bg-arena/20 transition-colors">
                  <ArrowLeftRight size={18} className="text-arena" aria-hidden="true" />
                </div>
                <p className="text-[10px] font-montserrat font-bold tracking-wider uppercase text-arena mb-0.5">
                  Ecoven Plus
                </p>
                <h3 className="font-montserrat text-base font-bold text-carbon mb-1">Correderas</h3>
                <p className="text-[12px] font-montserrat text-rojo font-medium mb-3">
                  Diseño atemporal y lineal
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {['70 mm', '2–3 carriles', 'Multihoja'].map(tag => (
                    <span key={tag} className="bg-arena/20 text-arena text-[10px] font-montserrat font-bold px-2.5 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
                <span className="inline-flex items-center justify-center font-montserrat text-[11px] font-bold text-rojo bg-rojo/5 px-4 py-2 mt-auto rounded-lg group-hover:bg-rojo group-hover:text-white transition-colors w-max">
                  Descubrir &rarr;
                </span>
              </Link>

              <Link
                href="/ventanas-pvc/paralelas"
                className="group flex flex-col bg-white border border-gris-claro rounded-xl p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200 h-full"
              >
                <div className="w-10 h-10 bg-arena-claro rounded-lg flex items-center justify-center mb-4 group-hover:bg-arena/20 transition-colors">
                  <Layers size={18} className="text-arena" aria-hidden="true" />
                </div>
                <p className="text-[10px] font-montserrat font-bold tracking-wider uppercase text-arena mb-0.5">
                  Ecoven Plus
                </p>
                <h3 className="font-montserrat text-base font-bold text-carbon mb-1">Paralelas</h3>
                <p className="text-[12px] font-montserrat text-rojo font-medium mb-3">
                  Máxima estanqueidad
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {['Presión perimetral', 'S70 / S82', 'RC2'].map(tag => (
                    <span key={tag} className="bg-arena/20 text-arena text-[10px] font-montserrat font-bold px-2.5 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
                <span className="inline-flex items-center justify-center font-montserrat text-[11px] font-bold text-rojo bg-rojo/5 px-4 py-2 mt-auto rounded-lg group-hover:bg-rojo group-hover:text-white transition-colors w-max">
                  Descubrir &rarr;
                </span>
              </Link>

              <Link
                href="/ventanas-pvc/vekamotion-82"
                className="group flex flex-col bg-white border border-gris-claro rounded-xl p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200 h-full"
              >
                <div className="w-10 h-10 bg-arena-claro rounded-lg flex items-center justify-center mb-4 group-hover:bg-arena/20 transition-colors">
                  <Maximize2 size={18} className="text-arena" aria-hidden="true" />
                </div>
                <p className="text-[10px] font-montserrat font-bold tracking-wider uppercase text-arena mb-0.5">
                  Sistema elevador
                </p>
                <h3 className="font-montserrat text-base font-bold text-carbon mb-1">Vekamotion 82</h3>
                <p className="text-[12px] font-montserrat text-rojo font-medium mb-3">
                  La pared de vidrio
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {['82 mm', 'Hasta 6,5 m', 'Passivhaus'].map(tag => (
                    <span key={tag} className="bg-arena/20 text-arena text-[10px] font-montserrat font-bold px-2.5 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
                <span className="inline-flex items-center justify-center font-montserrat text-[11px] font-bold text-rojo bg-rojo/5 px-4 py-2 mt-auto rounded-lg group-hover:bg-rojo group-hover:text-white transition-colors w-max">
                  Descubrir &rarr;
                </span>
              </Link>

            </div>
          </section>

          {/* ── Puertas de Entrada ────────────────────────────────────────────── */}
          <section className="mb-14">
            <div className="mb-6">
              <span className="inline-block font-montserrat text-[11px] font-bold tracking-[3px] uppercase shimmer-text mb-1">
                Acceso principal
              </span>
              <h2 className="font-montserrat text-2xl font-bold text-carbon">
                Puertas de entrada que acompañan al resto
              </h2>
            </div>
            <Link
              href="/ventanas-pvc/puertas-entrada"
              className="group flex flex-col bg-white border border-gris-claro rounded-xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <p className="text-[10px] font-montserrat font-bold tracking-wider uppercase text-arena mb-2">
                    Puertas PVC Ecoven Plus
                  </p>
                  <h3 className="font-montserrat text-lg font-extrabold text-carbon mb-3">
                    Puertas de Entrada PVC
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['S70 / S82', '7 puntos de cierre', 'Triple barrera'].map(tag => (
                      <span key={tag} className="flex items-center gap-1.5 bg-crema border border-gris-claro text-carbon text-[11px] font-montserrat font-semibold px-3 py-1 rounded-full">
                        <CheckCircle2 size={10} className="text-rojo flex-shrink-0" aria-hidden="true" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5">
                    <span className="inline-flex items-center justify-center font-montserrat text-[11px] font-bold text-rojo bg-rojo/5 px-4 py-2 rounded-lg group-hover:bg-rojo group-hover:text-white transition-colors w-max">
                      Descubrir &rarr;
                    </span>
                  </div>
                </div>
                <div className="sm:pl-6 sm:border-l sm:border-gris-claro flex-shrink-0">
                  <div className="space-y-2">
                    {[
                      ['Series', 'S70 / S82'],
                      ['Cierre', 'Hasta 7 puntos'],
                      ['Seguridad', 'Triple barrera'],
                    ].map(([k, v]) => (
                      <div key={k} className="sm:text-right text-left">
                        <p className="text-[10px] font-montserrat text-gris-medio uppercase tracking-wide">{k}</p>
                        <p className="font-montserrat text-[13px] font-bold text-carbon">{v}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </section>

          {/* ── Diseño que Marca la Diferencia ──────────────────────────────── */}
          <section className="mb-14">
            <div className="mb-6">
              <span className="inline-block font-montserrat text-[11px] font-bold tracking-[3px] uppercase shimmer-text mb-1">
                Detalles premium
              </span>
              <h2 className="font-montserrat text-2xl font-bold text-carbon">
                El diseño que marca la diferencia
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">

              <Link
                href="/ventanas-pvc/diseno#spectral"
                className="group flex flex-col bg-white border border-gris-claro rounded-xl p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200 h-full"
              >
                <p className="text-[10px] font-montserrat font-bold tracking-wider uppercase text-arena mb-2">
                  Acabado premium
                </p>
                <h3 className="font-montserrat text-base font-bold text-carbon mb-2">Acabado Spectral</h3>
                <p className="text-[12px] text-gris-medio leading-relaxed mb-4">
                  Superficie ultramate con tacto sedoso. Múltiples colores y texturas disponibles.
                  Resistente al rayado e intemperie. Sensación de ventana de diseño desde el primer vistazo.
                </p>
                <span className="inline-flex items-center justify-center font-montserrat text-[11px] font-bold text-rojo bg-rojo/5 px-4 py-2 mt-auto rounded-lg group-hover:bg-rojo group-hover:text-white transition-colors w-max">
                  Ver acabados &rarr;
                </span>
              </Link>

              <Link
                href="/ventanas-pvc/diseno#soldadura"
                className="group flex flex-col bg-white border border-gris-claro rounded-xl p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200 h-full"
              >
                <p className="text-[10px] font-montserrat font-bold tracking-wider uppercase text-arena mb-2">
                  Detalles constructivos
                </p>
                <h3 className="font-montserrat text-base font-bold text-carbon mb-2">Soldadura 0</h3>
                <p className="text-[12px] text-gris-medio leading-relaxed mb-4">
                  Esquinas casi invisibles y líneas continuas en el marco. Acabado limpio sin la
                  típica marca del PVC. Muy apreciado en fachadas con peso estético importante.
                </p>
                <span className="inline-flex items-center justify-center font-montserrat text-[11px] font-bold text-rojo bg-rojo/5 px-4 py-2 mt-auto rounded-lg group-hover:bg-rojo group-hover:text-white transition-colors w-max">
                  Ver detalle &rarr;
                </span>
              </Link>

            </div>
          </section>

          {/* ── Ecosistema Ecoven Plus ───────────────────────────────────────── */}
          <section>
            <div className="mb-6">
              <span className="inline-block font-montserrat text-[11px] font-bold tracking-[3px] uppercase shimmer-text mb-1">
                Más allá de la ventana
              </span>
              <h2 className="font-montserrat text-2xl font-bold text-carbon">
                El ecosistema Ecoven Plus
              </h2>
              <p className="text-[13px] text-gris-medio mt-1">
                Persianas, control solar, vidrio y domótica coordinados en un único sistema.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">

              <Link
                href="/ventanas-pvc/persianas"
                className="group flex flex-col bg-white border border-gris-claro rounded-xl p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200 h-full"
              >
                <p className="text-[10px] font-montserrat font-bold tracking-wider uppercase text-arena mb-2">
                  Protección &amp; confort
                </p>
                <h3 className="font-montserrat text-base font-bold text-carbon mb-2">Persianas &amp; Cajones</h3>
                <p className="text-[12px] text-gris-medio leading-relaxed mb-4">
                  3 tipos: Ecoven Plus, Momo y Vekavariant Passivhaus. Lamas de aluminio con espuma
                  de poliuretano, motorizables con control desde app.
                </p>
                <span className="inline-flex items-center justify-center font-montserrat text-[11px] font-bold text-rojo bg-rojo/5 px-4 py-2 mt-auto rounded-lg group-hover:bg-rojo group-hover:text-white transition-colors w-max">
                  Ver más &rarr;
                </span>
              </Link>

              <Link
                href="/ventanas-pvc/control-solar"
                className="group flex flex-col bg-white border border-gris-claro rounded-xl p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200 h-full"
              >
                <p className="text-[10px] font-montserrat font-bold tracking-wider uppercase text-arena mb-2">
                  Confort solar
                </p>
                <h3 className="font-montserrat text-base font-bold text-carbon mb-2">Control Solar</h3>
                <p className="text-[12px] text-gris-medio leading-relaxed mb-4">
                  Contraventanas interiores y exteriores, mosquiteras enrollable y plisada, Estores
                  Glass. Lamas orientables 50 mm y 77 mm.
                </p>
                <span className="inline-flex items-center justify-center font-montserrat text-[11px] font-bold text-rojo bg-rojo/5 px-4 py-2 mt-auto rounded-lg group-hover:bg-rojo group-hover:text-white transition-colors w-max">
                  Ver más &rarr;
                </span>
              </Link>

              <Link
                href="/ventanas-pvc/acristalamiento"
                className="group flex flex-col bg-white border border-gris-claro rounded-xl p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200 h-full"
              >
                <p className="text-[10px] font-montserrat font-bold tracking-wider uppercase text-arena mb-2">
                  El corazón de la ventana
                </p>
                <h3 className="font-montserrat text-base font-bold text-carbon mb-2">Vidrio &amp; Herrajes</h3>
                <p className="text-[12px] text-gris-medio leading-relaxed mb-4">
                  Guardian y Saint Gobain exclusivamente. Bajo emisivo, control solar, acústico y
                  de seguridad. Herraje activPilot RC2.
                </p>
                <span className="inline-flex items-center justify-center font-montserrat text-[11px] font-bold text-rojo bg-rojo/5 px-4 py-2 mt-auto rounded-lg group-hover:bg-rojo group-hover:text-white transition-colors w-max">
                  Ver más &rarr;
                </span>
              </Link>

              <Link
                href="/ventanas-pvc/domotica"
                className="group flex flex-col bg-white border border-gris-claro rounded-xl p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200 h-full"
              >
                <p className="text-[10px] font-montserrat font-bold tracking-wider uppercase text-arena mb-2">
                  Hogar conectado
                </p>
                <h3 className="font-montserrat text-base font-bold text-carbon mb-2">Espacio Domótico</h3>
                <p className="text-[12px] text-gris-medio leading-relaxed mb-4">
                  Somfy TaHoma para controlar persianas desde el móvil. Programas, escenarios y
                  simulación de presencia cuando estás fuera.
                </p>
                <span className="inline-flex items-center justify-center font-montserrat text-[11px] font-bold text-rojo bg-rojo/5 px-4 py-2 mt-auto rounded-lg group-hover:bg-rojo group-hover:text-white transition-colors w-max">
                  Ver más &rarr;
                </span>
              </Link>

            </div>
          </section>
        </div>

        {/* ── Sidebar ─────────────────────────────────────────────────────── */}
        <aside className="lg:sticky lg:top-20 h-fit space-y-4">
          <div className="bg-crema rounded-xl p-6 border border-gris-claro">
            <h3 className="font-montserrat text-base font-bold text-carbon mb-1">
              ¿Qué serie se adapta a tu casa?
            </h3>
            <p className="text-sm text-gris-medio mb-5">
              Te ayudamos a elegir entre S70, S76 y S82 según tu vivienda, presupuesto y nivel de exigencia.
            </p>
            <PresupuestoButton size="lg" className="w-full justify-center" />
            <div className="mt-4 pt-4 border-t border-gris-claro text-sm text-gris-medio font-montserrat space-y-1.5">
              {[
                'Estudio personalizado gratuito',
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

          {/* Quick nav */}
          <div className="bg-white rounded-xl p-5 border border-gris-claro">
            <p className="font-montserrat text-[10px] font-bold tracking-[2px] uppercase text-gris-medio mb-3">
              Explorar productos
            </p>
            <div className="space-y-0">
              {[
                { label: 'Serie S70', sub: '70 mm · 5 cámaras', href: '/ventanas-pvc/serie-s70' },
                { label: 'Serie S76', sub: '76 mm · triple junta', href: '/ventanas-pvc/serie-s76' },
                { label: 'Serie S82', sub: '82 mm · Passivhaus', href: '/ventanas-pvc/serie-s82' },
                { label: 'Correderas', sub: 'Deslizante horizontal', href: '/ventanas-pvc/correderas' },
                { label: 'Paralelas', sub: 'Presión perimetral', href: '/ventanas-pvc/paralelas' },
                { label: 'Vekamotion 82', sub: 'Pared de vidrio', href: '/ventanas-pvc/vekamotion-82' },
                { label: 'Puertas entrada', sub: 'S70 / S82 · 7 puntos', href: '/ventanas-pvc/puertas-entrada' },
                { label: 'Diseño', sub: 'Spectral · Soldadura 0', href: '/ventanas-pvc/diseno' },
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
