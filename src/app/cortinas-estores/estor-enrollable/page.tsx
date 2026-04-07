import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'

export const metadata: Metadata = buildMetadata({
  title: "Estor Enrollable | Comercial MAR'O",
  description:
    'El estor enrollable más versátil del catálogo. Amplia colección de tejidos screen, blackout y decorativos. Válido para todo tipo de ventanas interiores. Bilbao.',
  keywords: ['estor enrollable', 'estores interiores', 'estor screen', 'estor blackout', 'estores Bilbao'],
  path: '/cortinas-estores/estor-enrollable',
})

const features = [
  'El sistema de mayor versatilidad: compatible con cualquier ventana interior',
  'Amplia colección de tejidos: screen de distintas aperturas, blackout y decorativos',
  'Tejidos screen que filtran la luz solar manteniendo la visión al exterior',
  'Tejidos blackout para opacidad total cuando la situación lo requiere',
  'Válido para uso residencial, comercial y de hostelería',
  'Disponible con accionamiento manual (cadena) o motorizado',
]

const specs: [string, string][] = [
  ['Sistema',       'Estor enrollable'],
  ['Ancho máx.',    'Hasta 5,00 m'],
  ['Alto máx.',     'Hasta 4,00 m'],
  ['Ejes (Ø)',       '35 mm a 78 mm'],
  ['Accionamiento', 'Cadena / motorizado'],
  ['Tejidos',       'Screen, blackout, decorativo'],
  ['Instalación',   'Techo, pared o marco'],
]

const otherProducts = [
  { label: 'Stor Glass Avant',      sub: 'Integración total',      href: '/cortinas-estores/stor-glass-avant' },
  { label: 'Estor Vision',          sub: 'Control dual de luz',    href: '/cortinas-estores/estor-vision' },
  { label: 'Cortina Plisada',       sub: 'Diseño compacto',        href: '/cortinas-estores/cortina-plisada' },
  { label: 'Cortinas Verticales',   sub: 'Grandes superficies',    href: '/cortinas-estores/cortinas-verticales' },
  { label: 'Panel Deslizante',      sub: 'Grandes formatos',       href: '/cortinas-estores/panel-deslizante' },
  { label: 'Cortina Pacchetto',     sub: 'Estilo formal',          href: '/cortinas-estores/cortina-pacchetto' },
  { label: 'Veneciana de Aluminio', sub: 'Control preciso de luz', href: '/cortinas-estores/veneciana-aluminio' },
  { label: 'Volver al catálogo',    sub: 'Cortinas y estores',     href: '/cortinas-estores' },
]

export default function EstorEnrollablePage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="relative h-[40vh] min-h-48 flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80"
          alt="Estor enrollable en interior"
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
            <Link href="/cortinas-estores" className="hover:text-white transition-colors">Cortinas y Estores</Link>
            {' / '}
            <span className="text-white" aria-current="page">Estor Enrollable</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-arena/20 border border-arena/40 text-arena text-[10px] font-montserrat font-bold tracking-[3px] uppercase px-3 py-1 rounded-full">
              Máxima Versatilidad
            </span>
          </div>
          <h1 className="font-montserrat text-3xl font-extrabold text-white">Estor Enrollable</h1>
        </div>
      </div>

      <div className="max-w-site mx-auto px-6 py-14 grid lg:grid-cols-[1fr_320px] gap-12">
        <div>
          {/* ── Intro ───────────────────────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
            <div>
              <p className="text-gris-medio text-base leading-relaxed mb-4">
                En <strong className="text-carbon font-semibold">Comercial MAR&apos;O</strong> el estor enrollable es nuestra solución más demandada, y no es casualidad: es el sistema con mayor capacidad de adaptación a cualquier ventana, estilo decorativo y necesidad de control de luz. Su sencillez mecánica lo hace fiable y duradero.
              </p>
              <p className="text-gris-medio text-base leading-relaxed">
                Lo que marca la diferencia es la <strong className="text-carbon font-semibold">amplitud de su colección de tejidos</strong>: desde screen de distintas aperturas que filtran el sol manteniendo la visión al exterior, hasta blackout para opacidad total, pasando por una extensa gama decorativa. Una solución para cada habitación y cada uso.
              </p>
            </div>
            <div className="img-zoom-wrap">
              <Image
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80"
                alt="Estor enrollable instalado en ventana de interior"
                width={800}
                height={600}
                className="w-full h-auto object-cover img-zoom img-reveal"
              />
            </div>
          </div>

          {/* ── Stats ───────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {[
              { val: 'Amplia',     label: 'Colección tejidos' },
              { val: 'Universal',  label: 'Uso', highlight: true },
              { val: 'Cadena',     label: 'Accionamiento' },
              { val: 'Total',      label: 'Adaptabilidad' },
            ].map(({ val, label, highlight }) => (
              <div key={label} className={`rounded-xl p-4 text-center border ${highlight ? 'bg-crema border-rojo' : 'bg-crema border-gris-claro'}`}>
                <p className="font-montserrat text-xl font-extrabold text-carbon">{val}</p>
                <p className="text-[11px] text-gris-medio mt-1">{label}</p>
              </div>
            ))}
          </div>

          {/* ── Características ─────────────────────────────────────────────── */}
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
            <div className="img-zoom-wrap shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
                alt="Detalle estor enrollable en salón"
                width={800}
                height={600}
                className="w-full h-auto object-cover img-zoom img-reveal"
                style={{ animationDelay: '0.15s' }}
              />
            </div>
          </div>

          {/* ── Usos recomendados ───────────────────────────────────────────── */}
          <div className="mb-10">
            <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5">Usos recomendados</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { name: 'Vivienda',   desc: 'Para cualquier estancia del hogar: salón, cocina, dormitorio o baño.' },
                { name: 'Comercial',  desc: 'Negocios, tiendas y locales que necesitan control de luz sin complicaciones.' },
                { name: 'Hostelería', desc: 'Hoteles y restaurantes que buscan una solución funcional y estética a la vez.' },
              ].map(u => (
                <div key={u.name} className="bg-crema border border-gris-claro rounded-xl p-5 hover:border-rojo/30 transition-colors">
                  <p className="font-montserrat font-bold text-carbon text-[13px] mb-1.5">{u.name}</p>
                  <p className="text-gris-medio text-[12px] leading-relaxed">{u.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Tejidos ─────────────────────────────────────────────────────── */}
          <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5">Familias de tejido</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { name: 'Screen',      desc: 'Varias aperturas de tejido para controlar el calor solar sin perder la vista.' },
              { name: 'Blackout',    desc: 'Opacidad total. Ideal para dormitorios, cines en casa o salas de reunión.' },
              { name: 'Decorativo',  desc: 'Amplia gama de colores lisos para integrar el estor en cualquier decoración.' },
              { name: 'Técnico',     desc: 'Tejidos de alto rendimiento para entornos con exigencias especiales.' },
            ].map(t => (
              <div key={t.name} className="bg-crema border border-gris-claro rounded-xl p-5 hover:border-rojo/30 transition-colors">
                <p className="font-montserrat font-bold text-carbon text-[13px] mb-1.5">{t.name}</p>
                <p className="text-gris-medio text-[12px] leading-relaxed">{t.desc}</p>
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
              ¿Hablamos de tu estor enrollable?
            </h3>
            <p className="text-sm text-gris-medio mb-5">
              Te ayudamos a elegir el tejido y el sistema que mejor se adaptan a tu espacio y necesidades.
            </p>
            <PresupuestoButton size="lg" className="w-full justify-center" />
            <div className="mt-4 pt-4 border-t border-gris-claro text-sm text-gris-medio font-montserrat space-y-1.5">
              {['Asesoramiento técnico', 'Instalación propia', 'Medición a domicilio'].map(item => (
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
            {otherProducts.map(item => (
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
