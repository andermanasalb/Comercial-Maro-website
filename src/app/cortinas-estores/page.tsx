import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'

export const metadata: Metadata = buildMetadata({
  title: "Cortinas Interiores y Estores | Comercial MAR'O",
  description:
    'Amplia selección de cortinas y estores interiores: plisadas, enrollables, verticales, Stor Glass, Pacchetto y venecianas de aluminio. Instalación profesional en Bilbao.',
  keywords: [
    'cortinas interiores',
    'estores',
    'cortinas plisadas',
    'estor enrollable',
    'venecianas aluminio',
    'cortinas verticales',
  ],
  path: '/cortinas-estores',
})

// ── Data ─────────────────────────────────────────────────────────────────────

const estoresTecnicos = [
  {
    href: '/cortinas-estores/stor-glass-avant',
    badge: 'Integración Total',
    featured: true,
    name: 'Stor Glass Avant',
    sub: 'Estor técnico sin perforar el marco',
    specs: [
      ['Fijación', 'Sin atornillar'],
      ['Accionamiento', 'Cadena o muelle'],
      ['Formato', 'Compacto'],
      ['Desmontaje', 'Fácil'],
    ] as [string, string][],
    tags: ['Sin obra', 'Integrado', 'Versátil'],
    cta: 'Descubrir Stor Glass →',
  },
  {
    href: '/cortinas-estores/estor-enrollable',
    badge: 'Máxima Versatilidad',
    featured: false,
    name: 'Estor Enrollable',
    sub: 'El sistema más versátil del catálogo',
    specs: [
      ['Tejidos', 'Amplia colección'],
      ['Uso', 'Universal'],
      ['Accionamiento', 'Cadena'],
      ['Adaptabilidad', 'Total'],
    ] as [string, string][],
    tags: ['Más versátil', 'Amplia gama', 'Residencial y comercial'],
    cta: 'Ver Estor Enrollable →',
  },
  {
    href: '/cortinas-estores/estor-vision',
    badge: 'Control Dual',
    featured: false,
    name: 'Estor Vision',
    sub: 'Opacidad y transparencia a la vez',
    specs: [
      ['Mecanismo', 'Bandas alternas'],
      ['Control', 'Total'],
      ['Tejido', 'Opaco + Trans.'],
      ['Uso', 'Versátil'],
    ] as [string, string][],
    tags: ['Control dual', 'Privacidad', 'Diseño'],
    cta: 'Ver Estor Vision →',
  },
]

const cortinasInteriores = [
  {
    href: '/cortinas-estores/cortinas-verticales',
    badge: 'Grandes Superficies',
    featured: true,
    name: 'Cortinas Verticales',
    sub: 'Control elegante de luz e intimidad',
    specs: [
      ['Lamas', 'Verticales'],
      ['Superficie', 'Gran formato'],
      ['Control', 'Luz e intimidad'],
      ['Manejo', 'Sencillo'],
    ] as [string, string][],
    tags: ['Grandes ventanales', 'Regulación', 'Elegancia'],
    cta: 'Descubrir Verticales →',
  },
  {
    href: '/cortinas-estores/cortina-plisada',
    badge: 'Diseño Compacto',
    featured: false,
    name: 'Cortina Plisada',
    sub: 'Sistema ligero de mínimo recogido',
    specs: [
      ['Recogido', 'Mínimo'],
      ['Tejidos', 'Variados'],
      ['Uso', 'Residencial'],
      ['Manejo', 'Manual'],
    ] as [string, string][],
    tags: ['Minimalista', 'Compacto', 'Versátil'],
    cta: 'Ver Plisada →',
  },
  {
    href: '/cortinas-estores/panel-deslizante',
    badge: 'Grandes Formatos',
    featured: false,
    name: 'Panel Deslizante',
    sub: 'La solución para grandes ventanales',
    specs: [
      ['Formato', 'Grandes superficies'],
      ['Deslizamiento', 'Suave'],
      ['Combinación', 'Libre'],
      ['Uso', 'Versátil'],
    ] as [string, string][],
    tags: ['Gran formato', 'Minimalista', 'Combina tejidos'],
    cta: 'Ver Panel Deslizante →',
  },
  {
    href: '/cortinas-estores/cortina-pacchetto',
    badge: 'Estilo Formal',
    featured: false,
    name: 'Cortina Pacchetto',
    sub: 'Exclusividad y ambientes acogedores',
    specs: [
      ['Material', 'Tejidos naturales'],
      ['Estilo', 'Formal'],
      ['Uso', 'Residencial'],
      ['Manejo', 'Fácil'],
    ] as [string, string][],
    tags: ['Lino y algodón', 'Formal', 'Acogedor'],
    cta: 'Ver Pacchetto →',
  },
]

const allProducts = [
  { label: 'Stor Glass Avant',      sub: 'Integración total',      href: '/cortinas-estores/stor-glass-avant' },
  { label: 'Estor Enrollable',      sub: 'Máxima versatilidad',    href: '/cortinas-estores/estor-enrollable' },
  { label: 'Estor Vision',          sub: 'Control dual de luz',    href: '/cortinas-estores/estor-vision' },
  { label: 'Cortinas Verticales',   sub: 'Grandes superficies',    href: '/cortinas-estores/cortinas-verticales' },
  { label: 'Cortina Plisada',       sub: 'Diseño compacto',        href: '/cortinas-estores/cortina-plisada' },
  { label: 'Panel Deslizante',      sub: 'Grandes formatos',       href: '/cortinas-estores/panel-deslizante' },
  { label: 'Cortina Pacchetto',     sub: 'Estilo formal',          href: '/cortinas-estores/cortina-pacchetto' },
  { label: 'Veneciana de Aluminio', sub: 'Control preciso de luz', href: '/cortinas-estores/veneciana-aluminio' },
]

// ── Inline card ───────────────────────────────────────────────────────────────

function ProductCard({
  href, badge, featured, name, sub, specs, tags, cta,
}: {
  href: string
  badge: string
  featured: boolean
  name: string
  sub: string
  specs: [string, string][]
  tags: string[]
  cta: string
}) {
  return (
    <Link
      href={href}
      className={`group relative flex flex-col rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-200 h-full ${
        featured
          ? 'bg-white border border-rojo/25 shadow-xl'
          : 'bg-white border border-gris-claro shadow-sm hover:shadow-md'
      }`}
    >
      <div className={`h-[3px] w-full flex-shrink-0 ${featured ? 'bg-rojo' : 'bg-arena'}`} />
      <div className="p-5 relative flex flex-col flex-1">
        <span
          className={`inline-block text-[10px] font-montserrat font-bold tracking-wider uppercase px-2.5 py-1 rounded-full mb-3 ${
            featured ? 'bg-rojo text-white' : 'bg-arena-claro text-arena'
          }`}
        >
          {badge}
        </span>
        <h3 className="font-montserrat text-lg font-extrabold text-carbon mb-0.5">{name}</h3>
        <p className={`text-[12px] font-montserrat mb-4 ${featured ? 'text-rojo font-medium' : 'text-gris-medio'}`}>
          {sub}
        </p>
        <div className="border-t border-gris-claro pt-4 mb-4 space-y-2">
          {specs.map(([label, value]) => (
            <div key={label} className="flex justify-between items-baseline gap-2">
              <span className="text-[11px] text-gris-medio">{label}</span>
              <span className="text-[12px] text-carbon font-semibold font-montserrat text-right">{value}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map(tag => (
            <span
              key={tag}
              className={`text-[10px] font-montserrat font-bold px-2.5 py-0.5 rounded-full ${
                featured ? 'bg-rojo/10 text-rojo' : 'bg-arena/20 text-arena'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-2">
          <span className="inline-flex items-center justify-center font-montserrat text-[11px] font-bold text-rojo bg-rojo/5 px-4 py-2 rounded-lg group-hover:bg-rojo group-hover:text-white transition-colors w-max">
            {cta}
          </span>
        </div>
      </div>
    </Link>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function CortinasEstoresPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="relative h-[40vh] min-h-48 flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80"
          alt="Cortinas interiores y estores"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-carbon/72" />
        <div className="relative z-10 px-6 pb-8 max-w-site mx-auto w-full">
          <nav className="text-white/60 text-[12px] font-montserrat mb-2">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            {' / '}
            <span className="text-white" aria-current="page">Cortinas interiores y estores</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-arena/20 border border-arena/40 text-arena text-[10px] font-montserrat font-bold tracking-[3px] uppercase px-3 py-1 rounded-full">
              Instalación profesional
            </span>
          </div>
          <h1 className="font-montserrat text-3xl font-extrabold text-white leading-tight">
            Cortinas interiores y estores
          </h1>
        </div>
      </div>

      <div className="max-w-site mx-auto px-6 py-14 grid lg:grid-cols-[1fr_300px] gap-12">
        <div>
          {/* ── Intro ──────────────────────────────────────────────────────── */}
          <p className="text-gris-medio text-base leading-relaxed mb-12">
            En <strong className="text-carbon font-semibold">Comercial MAR&apos;O</strong> gestionamos el control de luz y privacidad de cada estancia con una selección cuidada de sistemas interiores. Desde estores técnicos de integración total hasta cortinas de estilo formal, pasando por venecianas de aluminio de precisión: contamos con la solución adecuada para cada espacio, uso y gusto decorativo.
          </p>

          {/* ── Familia 1: Estores técnicos ──────────────────────────────── */}
          <section className="mb-14">
            <div className="mb-7">
              <span className="inline-block font-montserrat text-[11px] font-bold tracking-[3px] uppercase shimmer-text mb-1">
                Funcionalidad y discreción
              </span>
              <h2 className="font-montserrat text-2xl font-bold text-carbon">
                Estores técnicos
              </h2>
              <p className="text-[13px] text-gris-medio mt-1 max-w-lg">
                Sistemas enrollables y de bandas diseñados para integrarse en el marco o en el hueco de la ventana con el mínimo impacto visual.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              {estoresTecnicos.map(p => <ProductCard key={p.href} {...p} />)}
            </div>

            <div className="mt-6 bg-crema rounded-xl border border-gris-claro p-5">
              <p className="font-montserrat text-[11px] font-bold tracking-wider uppercase text-gris-medio mb-5">
                Rendimiento comparado
              </p>
              {[
                {
                  title: 'Control de luz',
                  rows: [
                    { name: 'Stor Glass', pct: '85%', val: 'Alto',   delay: '0ms' },
                    { name: 'Enrollable', pct: '75%', val: 'Estándar', delay: '100ms' },
                    { name: 'Vision',     pct: '90%', val: 'Máximo', delay: '200ms' },
                  ],
                },
                {
                  title: 'Control de privacidad',
                  rows: [
                    { name: 'Stor Glass', pct: '75%', val: 'Alto',     delay: '60ms' },
                    { name: 'Enrollable', pct: '70%', val: 'Estándar', delay: '160ms' },
                    { name: 'Vision',     pct: '90%', val: 'Máximo',   delay: '260ms' },
                  ],
                },
              ].map((metric, mi) => (
                <div key={metric.title} className={mi < 1 ? 'mb-5' : ''}>
                  <p className="font-montserrat text-[10px] font-bold tracking-[2px] uppercase text-gris-medio mb-2.5">
                    {metric.title}
                  </p>
                  <div className="space-y-2">
                    {metric.rows.map(({ name, pct, val, delay }) => (
                      <div key={name} className="flex items-center gap-3">
                        <span className="font-montserrat text-[11px] font-extrabold w-20 flex-shrink-0 text-gris-medio">{name}</span>
                        <div className="flex-1 bg-white/70 rounded-full h-2 overflow-hidden">
                          <div className="h-full bar-grow rounded-full bg-arena" style={{ width: pct, animationDelay: delay }} />
                        </div>
                        <span className="font-montserrat text-[11px] font-bold w-20 text-right flex-shrink-0 text-carbon">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Familia 2: Cortinas interiores ───────────────────────────── */}
          <section className="mb-14">
            <div className="mb-7">
              <span className="inline-block font-montserrat text-[11px] font-bold tracking-[3px] uppercase shimmer-text mb-1">
                Estilo y funcionalidad
              </span>
              <h2 className="font-montserrat text-2xl font-bold text-carbon">
                Cortinas interiores
              </h2>
              <p className="text-[13px] text-gris-medio mt-1 max-w-lg">
                Desde las plisadas de recogido mínimo hasta los paneles deslizantes para grandes superficies, con tejidos y acabados para cada decoración.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {cortinasInteriores.map(p => <ProductCard key={p.href} {...p} />)}
            </div>

            <div className="mt-6 bg-crema rounded-xl border border-gris-claro p-5">
              <p className="font-montserrat text-[11px] font-bold tracking-wider uppercase text-gris-medio mb-5">
                Rendimiento comparado
              </p>
              {[
                {
                  title: 'Control de luz',
                  rows: [
                    { name: 'Verticales', pct: '80%', val: 'Alto',     delay: '0ms' },
                    { name: 'Plisada',    pct: '70%', val: 'Estándar', delay: '100ms' },
                    { name: 'Panel',      pct: '75%', val: 'Alto',     delay: '200ms' },
                    { name: 'Pacchetto',  pct: '55%', val: 'Medio',    delay: '300ms' },
                  ],
                },
              ].map((metric, mi) => (
                <div key={metric.title} className={mi < 1 ? 'mb-5' : ''}>
                  <p className="font-montserrat text-[10px] font-bold tracking-[2px] uppercase text-gris-medio mb-2.5">
                    {metric.title}
                  </p>
                  <div className="space-y-2">
                    {metric.rows.map(({ name, pct, val, delay }) => (
                      <div key={name} className="flex items-center gap-3">
                        <span className="font-montserrat text-[11px] font-extrabold w-20 flex-shrink-0 text-gris-medio">{name}</span>
                        <div className="flex-1 bg-white/70 rounded-full h-2 overflow-hidden">
                          <div className="h-full bar-grow rounded-full bg-arena" style={{ width: pct, animationDelay: delay }} />
                        </div>
                        <span className="font-montserrat text-[11px] font-bold w-20 text-right flex-shrink-0 text-carbon">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Familia 3: Venecianas ─────────────────────────────────────── */}
          <section className="mb-14">
            <div className="mb-6">
              <span className="inline-block font-montserrat text-[11px] font-bold tracking-[3px] uppercase shimmer-text mb-1">
                Precisión y durabilidad
              </span>
              <h2 className="font-montserrat text-2xl font-bold text-carbon">
                Venecianas
              </h2>
            </div>
            <Link
              href="/cortinas-estores/veneciana-aluminio"
              className="group flex flex-col bg-carbon border border-carbon rounded-xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200"
            >
              <div className="h-[3px] w-full bg-arena flex-shrink-0" />
              <div className="p-6 relative flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <span className="inline-block bg-white/10 text-arena text-[10px] font-montserrat font-bold tracking-wider uppercase px-2.5 py-1 rounded-full mb-3">
                    Control de Luz Preciso
                  </span>
                  <h3 className="font-montserrat text-lg font-extrabold text-white mb-3">
                    Veneciana de Aluminio
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Lamas orientables', 'Aluminio 50 mm', 'Oficinas'].map(tag => (
                      <span key={tag} className="bg-white/10 text-arena text-[10px] font-montserrat font-bold px-2.5 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center justify-center font-montserrat text-[11px] font-bold text-arena bg-white/10 px-4 py-2 rounded-lg group-hover:bg-arena group-hover:text-carbon transition-colors w-max">
                    Explorar Venecianas →
                  </span>
                </div>
                <div className="sm:pl-6 sm:border-l sm:border-white/10 flex-shrink-0">
                  <div className="space-y-2">
                    {[['Material', 'Aluminio'], ['Lama', '50 mm'], ['Personalización', 'Alta']].map(([k, v]) => (
                      <div key={k} className="sm:text-right text-left">
                        <p className="text-[10px] font-montserrat text-white/40 uppercase tracking-wide">{k}</p>
                        <p className="font-montserrat text-[13px] font-bold text-white">{v}</p>
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
              ¿Hablamos de tu instalación?
            </h3>
            <p className="text-sm text-gris-medio mb-5">
              En Comercial MAR&apos;O te asesoramos para elegir el sistema que mejor encaje con tu espacio y estilo.
            </p>
            <PresupuestoButton size="lg" className="w-full justify-center" />
            <div className="mt-4 pt-4 border-t border-gris-claro text-sm text-gris-medio font-montserrat space-y-1.5">
              {['Asesoramiento técnico', 'Instalación propia', 'Compromiso de calidad'].map(item => (
                <p key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-rojo flex-shrink-0" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-gris-claro">
            <p className="font-montserrat text-[10px] font-bold tracking-[2px] uppercase text-gris-medio mb-3">
              Catálogo de cortinas y estores
            </p>
            <div className="space-y-0">
              {allProducts.map(item => (
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
