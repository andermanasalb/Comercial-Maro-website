import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'

export const metadata: Metadata = buildMetadata({
  title: "Mampara Cristal Visión | Comercial MAR'O",
  description:
    'Máxima transparencia para tu oficina con Cristal Visión. Vidrio continuo "a hueso" sin perfiles verticales para una diafanidad total y luz natural.',
  keywords: ['mampara cristal vision', 'transparencia total', 'vidrio a hueso', 'luz natural oficina'],
  path: '/mamparas-oficina/cristal-vision',
})

const features = [
  'Ausencia total de marcos verticales para una visión continua',
  'Encuentros de vidrio "a hueso" con juntas de alta transparencia',
  'Disponible en versiones de vidrio sencillo y doble acristalamiento',
  'Perfilería perimetral mínima en aluminio lacado o anodizado',
  'Instalación y mantenimiento independiente de cada panel',
  'Aislamiento acústico certificado según configuración',
]

const specs: [string, string][] = [
  ['Serie', 'Cristal Visión (CV)'],
  ['Configuraciones', 'I (Sencillo) y II (Doble)'],
  ['Vidrio CV-I', 'Stadip hasta 6+6 mm'],
  ['Vidrio CV-II', 'Doble Stadip con cámara'],
  ['Unión vertical', 'Junta "H" policarbonato / Cinta estructural'],
  ['Transparencia', 'Total (sin marcos verticales)'],
]

const quickNav = [
  { label: 'UR-802', sub: 'Alta prestación', href: '/mamparas-oficina/ur-802' },
  { label: 'UR-803', sub: 'El más demandado', href: '/mamparas-oficina/ur-803' },
  { label: 'UR-902', sub: 'Perfilería oculta', href: '/mamparas-oficina/ur-902' },
  { label: 'SLIM', sub: 'Mínimo perfil', href: '/mamparas-oficina/slim' },
  { label: 'Tabique Armario', sub: 'Solución integrada', href: '/mamparas-oficina/tabique-armario' },
  { label: 'Volver al catálogo', sub: 'Mamparas de Oficina', href: '/mamparas-oficina' },
]

export default function CristalVisionPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="relative h-[40vh] min-h-48 flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
          alt="Mampara Cristal Visión tabique acristalado oficina transparencia"
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
            <Link href="/mamparas-oficina" className="hover:text-white transition-colors">Mamparas de Oficina</Link>
            {' / '}
            <span className="text-white" aria-current="page">Cristal Visión</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-arena/20 border border-arena/40 text-arena text-[10px] font-montserrat font-bold tracking-[3px] uppercase px-3 py-1 rounded-full">
              Máxima luminosidad
            </span>
          </div>
          <h1 className="font-montserrat text-3xl font-extrabold text-white">Cristal Visión I+II</h1>
        </div>
      </div>

      <div className="max-w-site mx-auto px-6 py-14 grid lg:grid-cols-[1fr_320px] gap-12">
        <div>

          {/* ── Intro + photo + Stats ───────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
            <div>
              <p className="text-gris-medio text-base leading-relaxed mb-6">
                En <strong className="text-carbon font-semibold">Comercial MAR&apos;O</strong>, apostamos por la máxima diafanidad con el sistema <strong className="text-carbon font-semibold">Cristal Visión</strong>. Diseñamos este tabique acristalado para proyectos que buscan inundar sus espacios de <strong className="text-carbon font-semibold">luz natural</strong>, eliminando cualquier marco vertical para crear una sensación de continuidad infinita de suelo a techo.
              </p>
              <ul className="grid gap-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-rojo flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gris-medio leading-relaxed">
                    <strong className="text-carbon font-semibold">Cristal Visión I (Vidrio Sencillo):</strong> Nuestra propuesta más ligera. Empleamos vidrio Stadip de hasta 6+6 mm con encuentros verticales a través de juntas transparentes o cinta estructural, logrando un paramento de vidrio puro sin interrupciones.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-rojo flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gris-medio leading-relaxed">
                    <strong className="text-carbon font-semibold">Cristal Visión II (Doble Vidrio):</strong> Elevamos la prestación acústica sin renunciar a la estética. Permite doble acristalamiento Stadip manteniendo la unión continua que define a esta gama, eliminando perfiles de aluminio vistos en los saltos de vidrio.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-rojo flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gris-medio leading-relaxed">
                    <strong className="text-carbon font-semibold">Mantenimiento Inteligente:</strong> El sistema de ajunquillamiento perimetral en ambas caras nos permite instalar o sustituir los paños de forma independiente, garantizando una operativa rápida sin afectar la integridad del conjunto.
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
                  { val: 'Luz natural', label: 'Principal' },
                  { val: 'CV-I y CV-II', label: 'Modelos', highlight: true },
                  { val: 'A hueso', label: 'Unión' },
                  { val: 'Perfil mín.', label: 'Estructura' },
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
                alt="Detalle perfil Cristal Visión mampara acristalada"
                width={800}
                height={800}
                unoptimized
                className="w-full h-auto max-h-[500px] object-contain img-zoom img-reveal"
                style={{ animationDelay: '0.15s' }}
              />
            </div>
          </div>

          {/* ── Comparativa con SLIM ─────────────────────────────────────── */}
          <div className="mb-10">
            <p className="text-[11px] uppercase tracking-wider font-montserrat text-gris-medio mb-5">
              Cristal Visión frente a SLIM
            </p>

            {[
              {
                label: 'Transparencia total',
                rows: [
                  { series: 'SLIM', pct: '90%', val: 'Excelente', current: false, delay: '0s' },
                  { series: 'Cristal V.', pct: '98%', val: 'Absoluta', current: true, delay: '0.1s' },
                ],
              },
              {
                label: 'Carga de perfil',
                rows: [
                  { series: 'SLIM', pct: '50%', val: 'Perfil sutil', current: false, delay: '0s' },
                  { series: 'Cristal V.', pct: '15%', val: 'Marcos mínimos', current: true, delay: '0.1s' },
                ],
              },
              {
                label: 'Prestación acústica',
                rows: [
                  { series: 'SLIM', pct: '80%', val: 'Alta', current: false, delay: '0s' },
                  { series: 'Cristal V.', pct: '85%', val: 'Alta — 2 modelos', current: true, delay: '0.1s' },
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
          <div className="bg-crema rounded-xl p-6 border border-gris-claro shadow-sm">
            <h3 className="font-montserrat text-base font-bold text-carbon mb-2">
              ¿Potencias la luz en tu diseño?
            </h3>
            <p className="text-sm text-gris-medio mb-5">
              Si la diafanidad y la transparencia absoluta son prioritarias, Cristal Visión es la elección para oficinas modernas y abiertas.
            </p>
            <PresupuestoButton size="lg" className="w-full justify-center" />
            <div className="mt-4 pt-4 border-t border-gris-claro text-sm text-gris-medio font-montserrat space-y-1.5">
              {['Asesoramiento técnico', 'Instalación propia', 'Garantía 10 años'].map(item => (
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
