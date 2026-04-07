import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'

export const metadata: Metadata = buildMetadata({
  title: "Estor Vision — Control dual de luz y privacidad | Comercial MAR'O",
  description:
    'Estor Vision con bandas alternas opacas y transparentes. Control total e independiente de luz y privacidad en cualquier estancia. Instalación profesional en Bilbao.',
  keywords: ['estor vision', 'estor dual', 'estor bandas', 'control luz privacidad', 'estores Bilbao'],
  path: '/cortinas-estores/estor-vision',
})

const features = [
  'Bandas horizontales alternas de material opaco y transparente',
  'Control total e independiente de luz y privacidad en el mismo sistema',
  'Permite graduar múltiples niveles de luminosidad sin perder intimidad',
  'Amplia colección de tejidos en colores vivos y ricos en textura',
  'Mecanismo fiable de fácil operación manual',
  'Disponible en versión blackout para opacidad completa cuando se necesita',
  'Compatible con accionamiento motorizado bajo pedido',
]

const specs: [string, string][] = [
  ['Sistema',       'Estor Vision'],
  ['Mecanismo',     'Bandas alternas opaco + transparente'],
  ['Ancho',         'De 0,60 m a 2,60 m'],
  ['Alto',          'De 1,00 m a 3,00 m'],
  ['Control',       'Luz y privacidad independientes'],
  ['Tejidos',       'Vision, decorativo, blackout'],
  ['Accionamiento', 'Cadena / motorizado'],
]

const otherProducts = [
  { label: 'Stor Glass Avant',      sub: 'Integración total',      href: '/cortinas-estores/stor-glass-avant' },
  { label: 'Estor Enrollable',      sub: 'Máxima versatilidad',    href: '/cortinas-estores/estor-enrollable' },
  { label: 'Cortina Plisada',       sub: 'Diseño compacto',        href: '/cortinas-estores/cortina-plisada' },
  { label: 'Cortinas Verticales',   sub: 'Grandes superficies',    href: '/cortinas-estores/cortinas-verticales' },
  { label: 'Panel Deslizante',      sub: 'Grandes formatos',       href: '/cortinas-estores/panel-deslizante' },
  { label: 'Cortina Pacchetto',     sub: 'Estilo formal',          href: '/cortinas-estores/cortina-pacchetto' },
  { label: 'Veneciana de Aluminio', sub: 'Control preciso de luz', href: '/cortinas-estores/veneciana-aluminio' },
  { label: 'Volver al catálogo',    sub: 'Cortinas y estores',     href: '/cortinas-estores' },
]

export default function EstorVisionPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="relative h-[40vh] min-h-48 flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=1200&q=80"
          alt="Estor Vision control de luz y privacidad"
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
            <Link href="/cortinas-estores" className="hover:text-white transition-colors">Cortinas y Estores</Link>
            {' / '}
            <span className="text-white" aria-current="page">Estor Vision</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-arena/20 border border-arena/40 text-arena text-[10px] font-montserrat font-bold tracking-[3px] uppercase px-3 py-1 rounded-full">
              Control Dual
            </span>
          </div>
          <h1 className="font-montserrat text-3xl font-extrabold text-white">Estor Vision</h1>
        </div>
      </div>

      <div className="max-w-site mx-auto px-6 py-14 grid lg:grid-cols-[1fr_320px] gap-12">
        <div>
          {/* ── Intro ───────────────────────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
            <div>
              <p className="text-gris-medio text-base leading-relaxed mb-4">
                En <strong className="text-carbon font-semibold">Comercial MAR&apos;O</strong> el Estor Vision es la solución más sofisticada para quienes quieren control total de luz y privacidad sin renunciar al diseño. Su sistema de <strong className="text-carbon font-semibold">bandas horizontales alternas</strong> —opacas y transparentes— permite pasar de la máxima luminosidad a la intimidad total con un simple movimiento.
              </p>
              <p className="text-gris-medio text-base leading-relaxed">
                A diferencia de un estor convencional, el Vision regula la luz y la privacidad de forma <strong className="text-carbon font-semibold">completamente independiente</strong>: puedes tener la estancia con luz natural sin que nadie vea al interior. Muy demandado en salones y dormitorios donde el equilibrio entre apertura y privacidad es fundamental.
              </p>
            </div>
            <div className="img-zoom-wrap">
              <Image
                src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&q=80"
                alt="Estor Vision con bandas alternas en interior"
                width={800}
                height={600}
                className="w-full h-auto object-cover img-zoom img-reveal"
              />
            </div>
          </div>

          {/* ── Stats ───────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {[
              { val: 'Bandas alternas', label: 'Mecanismo' },
              { val: 'Total',           label: 'Control', highlight: true },
              { val: 'Independiente',   label: 'Luz / Privacidad' },
              { val: 'Versátil',        label: 'Uso' },
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
                alt="Detalle estor vision en interior moderno"
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
                { name: 'Salones',      desc: 'Luz natural con privacidad: el equilibrio perfecto para el espacio de día.' },
                { name: 'Dormitorios',  desc: 'Control total: de la claridad matutina a la oscuridad nocturna en segundos.' },
                { name: 'Despachos',    desc: 'Reducción de deslumbramiento en pantallas sin perder la vista al exterior.' },
              ].map(u => (
                <div key={u.name} className="bg-crema border border-gris-claro rounded-xl p-5 hover:border-rojo/30 transition-colors">
                  <p className="font-montserrat font-bold text-carbon text-[13px] mb-1.5">{u.name}</p>
                  <p className="text-gris-medio text-[12px] leading-relaxed">{u.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Tejidos ─────────────────────────────────────────────────────── */}
          <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5">Tejidos disponibles</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
            {[
              { name: 'Vision estándar', desc: 'Colores y texturas para combinar con cualquier decoración.' },
              { name: 'Vision premium',  desc: 'Tejidos de mayor densidad y colorido para resultados más exclusivos.' },
              { name: 'Blackout',        desc: 'Variante de bandas con opacidad total en la posición cerrada.' },
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
              ¿Quieres luz y privacidad a la vez?
            </h3>
            <p className="text-sm text-gris-medio mb-5">
              El Estor Vision es la solución más completa para controlar tu espacio. Cuéntanos tu proyecto.
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
