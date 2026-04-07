import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'

export const metadata: Metadata = buildMetadata({
  title: "Stor Glass Avant — Estor sin perforar el marco | Comercial MAR'O",
  description:
    'Sistema enrollable de integración total que se instala en el marco sin atornillar. Fácil montaje, desmontaje rápido y amplia colección de tejidos screen y blackout. Bilbao.',
  keywords: ['stor glass avant', 'estor integrado', 'estor sin obra', 'estores Bilbao', 'estor marco ventana'],
  path: '/cortinas-estores/stor-glass-avant',
})

const features = [
  'Sistema de clipaje que fija el cajón al marco sin necesidad de taladros',
  'Se integra en la ventana como un bloque compacto y discreto',
  'Desmontaje fácil y rápido sin necesidad de herramientas',
  'Accionamiento por cadena o muelle, según preferencia',
  'Aprovechamiento máximo del espacio dentro del marco',
  'Compatible con tejidos screen de distintas aperturas y tejidos blackout',
  'Válido para ventanas de PVC, aluminio y madera sin modificarlas',
]

const specs: [string, string][] = [
  ['Sistema',       'Stor Glass Avant'],
  ['Fijación',      'Clipaje sin taladro'],
  ['Accionamiento', 'Cadena o muelle'],
  ['Ancho',         'De 0,30 m a 1,20 m'],
  ['Alto',          'Hasta 2,50 m (según tejido)'],
  ['Posición',      'Integrado en el marco'],
  ['Tejidos',       'Screen, blackout, decorativo'],
  ['Compatibilidad', 'PVC, Aluminio y Madera'],
]

const otherProducts = [
  { label: 'Estor Enrollable',      sub: 'Máxima versatilidad',    href: '/cortinas-estores/estor-enrollable' },
  { label: 'Estor Vision',          sub: 'Control dual de luz',    href: '/cortinas-estores/estor-vision' },
  { label: 'Cortina Plisada',       sub: 'Diseño compacto',        href: '/cortinas-estores/cortina-plisada' },
  { label: 'Cortinas Verticales',   sub: 'Grandes superficies',    href: '/cortinas-estores/cortinas-verticales' },
  { label: 'Panel Deslizante',      sub: 'Grandes formatos',       href: '/cortinas-estores/panel-deslizante' },
  { label: 'Cortina Pacchetto',     sub: 'Estilo formal',          href: '/cortinas-estores/cortina-pacchetto' },
  { label: 'Veneciana de Aluminio', sub: 'Control preciso de luz', href: '/cortinas-estores/veneciana-aluminio' },
  { label: 'Volver al catálogo',    sub: 'Cortinas y estores',     href: '/cortinas-estores' },
]

export default function StorGlassAvantPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="relative h-[40vh] min-h-48 flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80"
          alt="Estor Stor Glass Avant integrado en ventana"
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
            <span className="text-white" aria-current="page">Stor Glass Avant</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-arena/20 border border-arena/40 text-arena text-[10px] font-montserrat font-bold tracking-[3px] uppercase px-3 py-1 rounded-full">
              Integración Total
            </span>
          </div>
          <h1 className="font-montserrat text-3xl font-extrabold text-white">Stor Glass Avant</h1>
        </div>
      </div>

      <div className="max-w-site mx-auto px-6 py-14 grid lg:grid-cols-[1fr_320px] gap-12">
        <div>
          {/* ── Intro ───────────────────────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
            <div>
              <p className="text-gris-medio text-base leading-relaxed mb-4">
                En <strong className="text-carbon font-semibold">Comercial MAR&apos;O</strong> recomendamos el Stor Glass Avant para aquellos proyectos en los que la integración del estor en la ventana debe ser total y sin intervención sobre el marco. Su sistema de clipaje permite fijar el cajón directamente sobre la ventana como un bloque único, sin necesidad de taladrar ni alterar el perfil.
              </p>
              <p className="text-gris-medio text-base leading-relaxed">
                Representa la versión más avanzada de esta familia de estores técnicos. Su <strong className="text-carbon font-semibold">diseño compacto y la facilidad de desmontaje</strong> lo convierten en la solución preferida en proyectos de rehabilitación, alquileres y espacios donde se necesita flexibilidad sin renunciar a la protección solar y la privacidad.
              </p>
            </div>
            <div className="img-zoom-wrap">
              <Image
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80"
                alt="Stor Glass Avant instalado en ventana moderna"
                width={800}
                height={600}
                className="w-full h-auto object-cover img-zoom img-reveal"
              />
            </div>
          </div>

          {/* ── Stats ───────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {[
              { val: 'Sin taladro', label: 'Fijación' },
              { val: 'Fácil',       label: 'Desmontaje', highlight: true },
              { val: 'Compacto',    label: 'Formato' },
              { val: 'Cadena',      label: 'Accionamiento' },
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
                alt="Detalle estor integrado en ventana"
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
                { name: 'Rehabilitación',       desc: 'Ideal cuando no se puede o no se quiere intervenir sobre el marco existente.' },
                { name: 'Oficinas y despachos', desc: 'Integración perfecta en ventanas de oficina sin alterar la estética del espacio.' },
                { name: 'Viviendas en alquiler', desc: 'Fácil de instalar y retirar sin dejar huella en la carpintería.' },
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
              { name: 'Screen',      desc: 'Filtrado solar con distintas aperturas de tejido. Mantiene la vista exterior.' },
              { name: 'Blackout',    desc: 'Opacidad total para espacios que requieren oscuridad completa.' },
              { name: 'Decorativo',  desc: 'Tejidos lisos y de color para integrar el estor en la decoración.' },
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
              ¿Es el Stor Glass Avant para ti?
            </h3>
            <p className="text-sm text-gris-medio mb-5">
              Si necesitas integración total sin obra, este es tu sistema. Cuéntanos tu proyecto.
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
