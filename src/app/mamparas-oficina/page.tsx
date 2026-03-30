import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Grid2X2, Minus } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'

export const metadata: Metadata = buildMetadata({
  title: "Mamparas de Oficina en Bilbao | Comercial MAR'O",
  description:
    'Mamparas de oficina sistemas UR-802, UR-803, UR-902, Cristal Visión, SLIM y Tabique Armario. Instalación en Bilbao y Vizcaya.',
  keywords: [
    'mamparas oficina Bilbao',
    'Bilbao',
    'divisorias oficina Vizcaya',
    'mamparas UR Bilbao',
  ],
  path: '/mamparas-oficina',
})

export default function MamparasOficinaPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="relative h-[40vh] min-h-48 flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
          alt="Mamparas de oficina"
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
            <span className="text-white" aria-current="page">Mamparas de Oficina</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-arena/20 border border-arena/40 text-arena text-[10px] font-montserrat font-bold tracking-[3px] uppercase px-3 py-1 rounded-full">
             
            </span>
          </div>
          <h1 className="font-montserrat text-3xl font-extrabold text-white leading-tight">
            Mamparas de Oficina
          </h1>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-14 grid lg:grid-cols-[1fr_300px] gap-12">
        <div>
          {/* ── Intro ──────────────────────────────────────────────────────── */}
          <p className="text-gris-medio text-base leading-relaxed mb-12">
            Tres familias —<strong className="text-carbon font-semibold">Perfilería UR</strong>, <strong className="text-carbon font-semibold">Sistemas Acristalados</strong> y <strong className="text-carbon font-semibold">Tabique Armario</strong>— para cada necesidad de división de espacios: desde el tabique clásico hasta el vidrio continuo sin marcos.
          </p>

          {/* ── Sistemas UR ─────────────────────────────────────────────── */}
          <section className="mb-14">
            <div className="mb-7">
              <span className="inline-block font-montserrat text-[11px] font-bold tracking-[3px] uppercase shimmer-text mb-1">
                Perfilería de acero
              </span>
              <h2 className="font-montserrat text-2xl font-bold text-carbon">
                Elige tu sistema de perfilería
              </h2>
              <p className="text-[13px] text-gris-medio mt-1 max-w-lg">
                Tres sistemas con distintos acabados constructivos y niveles de discreción estética.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">

              {/* UR-802 */}
              <Link
                href="/mamparas-oficina/ur-802"
                className="group relative flex flex-col bg-white border border-gris-claro rounded-xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200 h-full"
              >
                <div className="h-[3px] w-full bg-arena flex-shrink-0" />
                <div className="p-5 relative flex flex-col flex-1">
                  <span className="absolute top-1/2 -translate-y-1/2 right-4 font-montserrat text-[5rem] font-black text-carbon/[0.03] leading-none select-none pointer-events-none z-0 tracking-tighter mix-blend-multiply">
                    UR-802
                  </span>
                  <span className="inline-block bg-arena-claro text-arena text-[10px] font-montserrat font-bold tracking-wider uppercase px-2.5 py-1 rounded-full mb-3">
                    Alta prestación
                  </span>
                  <h3 className="font-montserrat text-lg font-extrabold text-carbon mb-0.5">UR-802</h3>
                  <p className="text-[12px] font-montserrat text-gris-medio mb-4">Robustez y combinación de colores</p>
                  <div className="border-t border-gris-claro pt-4 mb-4 space-y-2">
                    {[
                      ['Perfilería', 'Vista'],
                      ['Fuego', 'Certificada'],
                      ['Estructura', 'Acero'],
                      ['Colores', 'Combinables'],
                    ].map(([label, value]) => (
                      <div key={label} className="flex justify-between items-baseline gap-2">
                        <span className="text-[11px] text-gris-medio">{label}</span>
                        <span className="text-[12px] text-carbon font-semibold font-montserrat text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {['Perfilería vista', 'Resistencia fuego', 'Combinación colores'].map(tag => (
                      <span key={tag} className="bg-arena/20 text-arena text-[10px] font-montserrat font-bold px-2.5 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center justify-center font-montserrat text-[11px] font-bold text-rojo bg-rojo/5 px-4 py-2 mt-auto rounded-lg group-hover:bg-rojo group-hover:text-white transition-colors w-max">
                      Ver UR-802 &rarr;
                    </span>
                  </div>
                </div>
              </Link>

              {/* UR-803 — featured */}
              <Link
                href="/mamparas-oficina/ur-803"
                className="group relative flex flex-col bg-white border border-rojo/25 rounded-xl overflow-hidden shadow-xl hover:-translate-y-1 transition-all duration-200 h-full"
              >
                <div className="h-[3px] w-full bg-rojo flex-shrink-0" />
                <div className="p-5 relative flex flex-col flex-1">
                  <span className="absolute top-1/2 -translate-y-1/2 right-4 font-montserrat text-[5rem] font-black text-rojo/[0.04] leading-none select-none pointer-events-none z-0 tracking-tighter mix-blend-multiply">
                    UR-803
                  </span>
                  <span className="inline-block bg-rojo text-white text-[10px] font-montserrat font-bold tracking-wider uppercase px-2.5 py-1 rounded-full mb-3">
                    El más demandado
                  </span>
                  <h3 className="font-montserrat text-lg font-extrabold text-carbon mb-0.5">UR-803</h3>
                  <p className="text-[12px] font-montserrat text-gris-medio mb-4">El clásico que siempre funciona</p>
                  <div className="border-t border-gris-claro pt-4 mb-4 space-y-2">
                    {[
                      ['Perfilería', 'Vista'],
                      ['Montaje', 'Tapajuntas'],
                      ['Mercado', 'Referencia'],
                      ['Instalación', 'Ágil'],
                    ].map(([label, value]) => (
                      <div key={label} className="flex justify-between items-baseline gap-2">
                        <span className="text-[11px] text-gris-medio">{label}</span>
                        <span className="text-[12px] text-carbon font-semibold font-montserrat text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {['Tapajuntas', 'Más prescrito', 'Ágil montaje'].map(tag => (
                      <span key={tag} className="bg-rojo/10 text-rojo text-[10px] font-montserrat font-bold px-2.5 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center justify-center font-montserrat text-[11px] font-bold text-rojo bg-rojo/5 px-4 py-2 mt-auto rounded-lg group-hover:bg-rojo group-hover:text-white transition-colors w-max">
                      Ver UR-803 &rarr;
                    </span>
                  </div>
                </div>
              </Link>

              {/* UR-902 — dark */}
              <Link
                href="/mamparas-oficina/ur-902"
                className="group relative flex flex-col bg-carbon border border-carbon rounded-xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200 h-full"
              >
                <div className="h-[3px] w-full bg-arena flex-shrink-0" />
                <div className="p-5 relative flex flex-col flex-1">
                  <span className="absolute top-1/2 -translate-y-1/2 right-4 font-montserrat text-[5rem] font-black text-white/[0.03] leading-none select-none pointer-events-none z-0 tracking-tighter opacity-80">
                    UR-902
                  </span>
                  <span className="inline-block bg-white/10 text-arena text-[10px] font-montserrat font-bold tracking-wider uppercase px-2.5 py-1 rounded-full mb-3">
                    Perfilería oculta
                  </span>
                  <h3 className="font-montserrat text-lg font-extrabold text-white mb-0.5">UR-902</h3>
                  <p className="text-[12px] font-montserrat text-arena mb-4">El marco que desaparece</p>
                  <div className="border-t border-white/10 pt-4 mb-4 space-y-2">
                    {[
                      ['Perfilería', 'Oculta'],
                      ['Acabado', 'Premium'],
                      ['Construcción', 'Diferenciada'],
                      ['Estética', 'Minimalista'],
                    ].map(([label, value]) => (
                      <div key={label} className="flex justify-between items-baseline gap-2">
                        <span className="text-[11px] text-white/50">{label}</span>
                        <span className="text-[12px] text-white font-semibold font-montserrat text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {['Perfil oculto', 'Acabado premium', 'Minimalista'].map(tag => (
                      <span key={tag} className="bg-white/10 text-arena text-[10px] font-montserrat font-bold px-2.5 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center justify-center font-montserrat text-[11px] font-bold text-arena bg-white/10 px-4 py-2 mt-auto rounded-lg group-hover:bg-arena group-hover:text-carbon transition-colors w-max">
                      Ver UR-902 &rarr;
                    </span>
                  </div>
                </div>
              </Link>

            </div>

            {/* ── Comparativa de barras ─────────────────────────────────── */}
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
                  title: 'Aislamiento térmico-acústico',
                  rows: [
                    { serie: 'UR-802', pct: '80%', val: 'Alta', delay: '0ms' },
                    { serie: 'UR-803', pct: '65%', val: 'Media-alta', delay: '100ms' },
                    { serie: 'UR-902', pct: '80%', val: 'Alta', delay: '200ms' },
                  ],
                },
                {
                  title: 'Facilidad de montaje',
                  rows: [
                    { serie: 'UR-802', pct: '70%', val: 'Media', delay: '60ms' },
                    { serie: 'UR-803', pct: '90%', val: 'Alta', delay: '160ms' },
                    { serie: 'UR-902', pct: '75%', val: 'Media-alta', delay: '260ms' },
                  ],
                },
                {
                  title: 'Discreción estética',
                  rows: [
                    { serie: 'UR-802', pct: '50%', val: 'Media', delay: '120ms' },
                    { serie: 'UR-803', pct: '45%', val: 'Media', delay: '220ms' },
                    { serie: 'UR-902', pct: '95%', val: 'Máxima', delay: '320ms' },
                  ],
                },
              ].map((metric, mi) => (
                <div key={metric.title} className={mi < 2 ? 'mb-5' : ''}>
                  <p className="font-montserrat text-[10px] font-bold tracking-[2px] uppercase text-gris-medio mb-2.5">
                    {metric.title}
                  </p>
                  <div className="space-y-2">
                    {metric.rows.map(({ serie, pct, val, delay }) => (
                      <div key={serie} className="flex items-center gap-3">
                        <span className="font-montserrat text-[11px] font-extrabold w-14 flex-shrink-0 text-gris-medio">{serie}</span>
                        <div className="flex-1 bg-white/70 rounded-full h-2 overflow-hidden">
                          <div
                            className="h-full bar-grow rounded-full bg-arena"
                            style={{ width: pct, animationDelay: delay }}
                          />
                        </div>
                        <span className="font-montserrat text-[11px] font-bold w-20 text-right flex-shrink-0 text-carbon">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Acristalados totales ─────────────────────────────────────────── */}
          <section className="mb-14">
            <div className="mb-7">
              <span className="inline-block font-montserrat text-[11px] font-bold tracking-[3px] uppercase shimmer-text mb-1">
                Vidrio de suelo a techo
              </span>
              <h2 className="font-montserrat text-2xl font-bold text-carbon">
                Luz y apertura sin perfiles visibles
              </h2>
              <p className="text-[13px] text-gris-medio mt-1 max-w-lg">
                Dos sistemas para espacios donde la transparencia y la luminosidad son prioritarias.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">

              <Link
                href="/mamparas-oficina/cristal-vision"
                className="group flex flex-col bg-white border border-gris-claro rounded-xl p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200 h-full"
              >
                <div className="w-10 h-10 bg-arena-claro rounded-lg flex items-center justify-center mb-4 group-hover:bg-arena/20 transition-colors">
                  <Grid2X2 size={18} className="text-arena" aria-hidden="true" />
                </div>
                <p className="text-[10px] font-montserrat font-bold tracking-wider uppercase text-arena mb-0.5">
                 
                </p>
                <h3 className="font-montserrat text-base font-bold text-carbon mb-1">Cristal Visión I+II</h3>
                <p className="text-[12px] font-montserrat text-rojo font-medium mb-3">
                  Dos opciones de vidrio de suelo a techo
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {['Vidrio 5+5', '2 modelos', 'Transparencia total'].map(tag => (
                    <span key={tag} className="bg-arena/20 text-arena text-[10px] font-montserrat font-bold px-2.5 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
                <span className="inline-flex items-center justify-center font-montserrat text-[11px] font-bold text-rojo bg-rojo/5 px-4 py-2 mt-auto rounded-lg group-hover:bg-rojo group-hover:text-white transition-colors w-max">
                  Descubrir &rarr;
                </span>
              </Link>

              <Link
                href="/mamparas-oficina/slim"
                className="group flex flex-col bg-white border border-gris-claro rounded-xl p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200 h-full"
              >
                <div className="w-10 h-10 bg-arena-claro rounded-lg flex items-center justify-center mb-4 group-hover:bg-arena/20 transition-colors">
                  <Minus size={18} className="text-arena" aria-hidden="true" />
                </div>
                <p className="text-[10px] font-montserrat font-bold tracking-wider uppercase text-arena mb-0.5">
                 
                </p>
                <h3 className="font-montserrat text-base font-bold text-carbon mb-1">SLIM</h3>
                <p className="text-[12px] font-montserrat text-rojo font-medium mb-3">
                  Vidrio continuo, perfil invisible
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {['Perfil bajo', 'Vidrio continuo', 'Sin juntas'].map(tag => (
                    <span key={tag} className="bg-arena/20 text-arena text-[10px] font-montserrat font-bold px-2.5 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
                <span className="inline-flex items-center justify-center font-montserrat text-[11px] font-bold text-rojo bg-rojo/5 px-4 py-2 mt-auto rounded-lg group-hover:bg-rojo group-hover:text-white transition-colors w-max">
                  Descubrir &rarr;
                </span>
              </Link>

            </div>
          </section>

          {/* ── Tabique Armario ────────────────────────────────────────────────── */}
          <section className="mb-14">
            <div className="mb-6">
              <span className="inline-block font-montserrat text-[11px] font-bold tracking-[3px] uppercase shimmer-text mb-1">
                Solución integrada
              </span>
              <h2 className="font-montserrat text-2xl font-bold text-carbon">
                El tabique que también guarda
              </h2>
            </div>
            <Link
              href="/mamparas-oficina/tabique-armario"
              className="group flex flex-col bg-white border border-gris-claro rounded-xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <p className="text-[10px] font-montserrat font-bold tracking-wider uppercase text-arena mb-2">
                   
                  </p>
                  <h3 className="font-montserrat text-lg font-extrabold text-carbon mb-3">
                    Tabique Armario
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Compatible UR-802/803/902', 'Integración estética', 'Almacenaje incorporado'].map(tag => (
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
                      ['Compatibilidad', 'UR-802/803/902'],
                      ['Tipo', 'Integrado'],
                      ['Función', 'Almacenaje'],
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
        </div>

        {/* ── Sidebar ─────────────────────────────────────────────────────── */}
        <aside className="lg:sticky lg:top-20 h-fit space-y-4">
          <div className="bg-crema rounded-xl p-6 border border-gris-claro">
            <h3 className="font-montserrat text-base font-bold text-carbon mb-1">
              ¿Qué sistema se adapta a tu espacio?
            </h3>
            <p className="text-sm text-gris-medio mb-5">
              Te ayudamos a elegir entre perfilería vista, oculta y sistemas acristalados según tu proyecto.
            </p>
            <PresupuestoButton size="lg" className="w-full justify-center" />
            <div className="mt-4 pt-4 border-t border-gris-claro text-sm text-gris-medio font-montserrat space-y-1.5">
              {[
                'Proyecto a medida',
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
                { label: 'UR-802', sub: 'Alta prestación', href: '/mamparas-oficina/ur-802' },
                { label: 'UR-803', sub: 'El más demandado', href: '/mamparas-oficina/ur-803' },
                { label: 'UR-902', sub: 'Perfilería oculta', href: '/mamparas-oficina/ur-902' },
                { label: 'Cristal Visión I+II', sub: 'Máxima luminosidad', href: '/mamparas-oficina/cristal-vision' },
                { label: 'SLIM', sub: 'Minimalista', href: '/mamparas-oficina/slim' },
                { label: 'Tabique Armario', sub: 'Solución integrada', href: '/mamparas-oficina/tabique-armario' },
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
