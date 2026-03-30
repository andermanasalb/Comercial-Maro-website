import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'

export const metadata: Metadata = buildMetadata({
  title: "Mampara Cristal Visión I+II en Bilbao | Comercial MAR'O",
  description:
    'Mampara Cristal Visión I+II. Tabique 100% acristalado con vidrio 5+5. Dos modelos. Instalación en Bilbao y Vizcaya.',
  keywords: ['mampara cristal Bilbao', 'cristal visión', 'tabique acristalado Vizcaya'],
  path: '/mamparas-oficina/cristal-vision',
})

const features = [
  'Tabique 100% acristalado de suelo a techo',
  'Múltiples opciones de vidrio Stadip (hasta 6+6 o doble 5+5)',
  'Versiones CV1 (vidrio sencillo) y CV2 (doble vidrio)',
  'Sistema de ajunquillamiento perimetral desmontable',
  'Máxima entrada de luz natural y amplitud visual',
  'Compatible con sistemas UR para zonas mixtas',
]

const specs: [string, string][] = [
  ['Sistema', 'Cristal Visión I+II'],
  ['Configuraciones', 'CV1 (Sencillo) / CV2 (Doble)'],
  ['Tipo de vidrio CV1', 'Stadip hasta 6+6 mm'],
  ['Tipo de vidrio CV2', 'Stadip 3+3 mm o 5+5 mm'],
  ['Juntas verticales', 'Policarbonato, cinta biadhesiva o perfil "fuga"'],
  ['Transparencia', 'Total — suelo a techo'],
]

const quickNav = [
  { label: 'SLIM', sub: 'Minimalista', href: '/mamparas-oficina/slim' },
  { label: 'UR-802', sub: 'Alta prestación', href: '/mamparas-oficina/ur-802' },
  { label: 'UR-803', sub: 'El más demandado', href: '/mamparas-oficina/ur-803' },
  { label: 'UR-902', sub: 'Perfilería oculta', href: '/mamparas-oficina/ur-902' },
  { label: 'Tabique Armario', sub: 'Solución integrada', href: '/mamparas-oficina/tabique-armario' },
  { label: 'Volver al catálogo', sub: 'Mamparas de Oficina', href: '/mamparas-oficina' },
]

export default function CristalVisionPage() {
  return (
    <div className="min-h-screen">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes growBar {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .img-reveal {
          animation: fadeUp 0.65s ease both;
        }
        .bar-grow {
          transform-origin: left center;
          animation: growBar 0.9s cubic-bezier(0.25,1,0.5,1) both;
        }
        .img-zoom {
          transition: transform 0.45s ease;
        }
        .img-zoom-wrap {
          overflow: hidden;
          border-radius: 0.75rem;
        }
        .img-zoom-wrap:hover .img-zoom {
          transform: scale(1.04);
        }
      `}</style>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="relative h-[40vh] min-h-48 flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
          alt="Mampara Cristal Visión I+II tabique acristalado oficina"
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
            <Link href="/mamparas-oficina" className="hover:text-white transition-colors">Mamparas de Oficina</Link>
            {' / '}
            <span className="text-white" aria-current="page">Cristal Visión I+II</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-arena/20 border border-arena/40 text-arena text-[10px] font-montserrat font-bold tracking-[3px] uppercase px-3 py-1 rounded-full">
              Máxima luminosidad
            </span>
          </div>
          <h1 className="font-montserrat text-3xl font-extrabold text-white">Cristal Visión I+II</h1>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-14 grid lg:grid-cols-[1fr_320px] gap-12">
        <div>

          {/* ── Intro + photo + Stats ───────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
            <div>
              <p className="text-gris-medio text-base leading-relaxed mb-6">
                Sistema de <strong className="text-carbon font-semibold">tabique totalmente acristalado</strong> diseñado para maximizar la entrada de luz natural y la amplitud visual, manteniendo unas calidades de aislamiento y acabados superiores acordes a toda nuestra gama de tabiques.
              </p>
              <ul className="grid gap-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-rojo flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gris-medio leading-relaxed">
                    <strong className="text-carbon font-semibold">Versión CV1 (Vidrio Sencillo):</strong> Equipado con vidrio Stadip de hasta 6+6 mm. Puede unirse verticalmente mediante una junta de policarbonato, o lograr un acabado más limpio con cinta adhesiva de doble cara directamente al canto del vidrio.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-rojo flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gris-medio leading-relaxed">
                    <strong className="text-carbon font-semibold">Versión CV2 (Doble Vidrio):</strong> Permite doble Stadip 3+3 (unido por perfil de aluminio "fuga" acoplado a policarbonato), u opción de doble vidrio 5+5 suprimiendo el perfil "fuga" para lograr una unión continua mediante cinta adhesiva o policarbonato puro.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-rojo flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gris-medio leading-relaxed">
                    <strong className="text-carbon font-semibold">Máxima modularidad:</strong> Facilidad total para desmontar y reinstalar los vidrios independientemente de la estructura, gracias a su ingenioso sistema de ajunquillamiento perimetral por ambas caras.
                  </p>
                </li>
              </ul>
            </div>
            
            {/* Right Column: Image + Stats */}
            <div className="flex flex-col gap-6">
              <div className="img-zoom-wrap shadow-md flex items-center justify-center bg-white">
                <Image
                  src="/images/mamparas-oficina/cristal-vision-1.jpg"
                  alt="Mampara Cristal Visión tabique acristalado"
                  width={800}
                  height={800}
                  unoptimized
                  className="w-full h-auto max-h-[450px] object-contain img-zoom img-reveal rounded"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {[
                  { val: 'Acristalado', label: 'Tipo' },
                  { val: '5+5 u 6+6', label: 'Vidrio', highlight: true },
                  { val: 'I y II', label: 'Modelos' },
                  { val: 'Total', label: 'Transparencia' },
                ].map(({ val, label, highlight }) => (
                  <div key={label} className={`rounded-xl p-4 text-center border ${highlight ? 'bg-crema border-rojo' : 'bg-crema border-gris-claro'}`}>
                    <p className="font-montserrat text-lg sm:text-xl font-extrabold text-carbon truncate">{val}</p>
                    <p className="text-[11px] text-gris-medio mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Características + imagen ────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
            <div>
              <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5">Características técnicas</h2>
              <div className="space-y-3">
                {features.map(f => (
                  <div key={f} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-rojo flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm text-gris-medio">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="img-zoom-wrap shadow-sm flex items-center justify-center">
              <Image
                src="/images/mamparas-oficina/cristal-vision-2.jpg"
                alt="Detalle mampara Cristal Visión I+II"
                width={800}
                height={800}
                unoptimized
                className="w-full h-auto max-h-[500px] object-contain img-zoom img-reveal"
                style={{ animationDelay: '0.15s' }}
              />
            </div>
          </div>

          {/* ── Comparativa con SLIM ─────────────────────────────────────────── */}
          <div className="mb-10">
            <p className="text-[11px] uppercase tracking-wider font-montserrat text-gris-medio mb-5">
              Cristal Visión frente a SLIM
            </p>

            {[
              {
                label: 'Superficie acristalada',
                rows: [
                  { series: 'Cristal V.', pct: '90%', val: 'Alta', current: true, delay: '0s' },
                  { series: 'SLIM', pct: '95%', val: 'Total', current: false, delay: '0.1s' },
                ],
              },
              {
                label: 'Discreción de perfil',
                rows: [
                  { series: 'Cristal V.', pct: '70%', val: 'Alta', current: true, delay: '0s' },
                  { series: 'SLIM', pct: '95%', val: 'Máxima', current: false, delay: '0.1s' },
                ],
              },
              {
                label: 'Modularidad',
                rows: [
                  { series: 'Cristal V.', pct: '85%', val: 'Alta — 2 modelos', current: true, delay: '0s' },
                  { series: 'SLIM', pct: '70%', val: 'Media', current: false, delay: '0.1s' },
                ],
              },
            ].map(({ label, rows }) => (
              <div key={label} className="mb-5">
                <p className="text-[11px] font-montserrat font-semibold text-carbon mb-2">{label}</p>
                <div className="space-y-2">
                  {rows.map(({ series, pct, val, current, delay }) => (
                    <div key={series} className="flex items-center gap-3">
                      <span className={`w-16 text-[12px] font-montserrat font-bold ${current ? 'text-carbon' : 'text-gris-medio'}`}>
                        {series}
                      </span>
                      <div className="flex-1 bg-gris-claro h-1.5 rounded-full">
                        <div
                          className={`h-1.5 rounded-full bar-grow ${current ? 'bg-rojo' : 'bg-arena'}`}
                          style={{ width: pct, animationDelay: delay }}
                        />
                      </div>
                      <span className={`w-28 text-right text-[11px] font-montserrat font-bold ${current ? 'text-carbon' : 'text-gris-medio'}`}>
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
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

        </div>

        {/* ── Sidebar ──────────────────────────────────────────────────────── */}
        <div className="lg:sticky lg:top-20 h-fit space-y-4">
          <div className="bg-crema rounded-xl p-6 border border-gris-claro">
            <h3 className="font-montserrat text-base font-bold text-carbon mb-2">
              ¿Es Cristal Visión para tu proyecto?
            </h3>
            <p className="text-sm text-gris-medio mb-5">
              Si la luminosidad y la amplitud visual son prioritarias, Cristal Visión I+II transforma tu espacio de trabajo.
            </p>
            <PresupuestoButton size="lg" className="w-full justify-center" />
            <div className="mt-4 pt-4 border-t border-gris-claro text-sm text-gris-medio font-montserrat space-y-1.5">
              {['Proyecto a medida', 'Instalación propia en Vizcaya', 'Garantía 10 años'].map(item => (
                <p key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-rojo flex-shrink-0" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-gris-claro">
            <p className="font-montserrat text-[11px] font-bold tracking-[2px] uppercase text-gris-medio mb-3">
              Otros sistemas
            </p>
            {quickNav.map(item => (
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
