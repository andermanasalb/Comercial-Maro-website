import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'

export const metadata: Metadata = buildMetadata({
  title: "Cortina Pacchetto | Comercial MAR'O",
  description:
    'Cortina interior Pacchetto de estilo formal y tejidos naturales. Lino, algodón y mezclas para crear ambientes acogedores en viviendas y hostelería. Instalación en Bilbao.',
  keywords: ['cortina pacchetto', 'cortina formal', 'cortina lino', 'cortinas interiores Bilbao'],
  path: '/cortinas-estores/cortina-pacchetto',
})

const features = [
  'Estilo formal que transmite exclusividad y elegancia en cualquier estancia',
  'Tejidos naturales: lino, algodón y mezclas de alta calidad',
  'Crea ambientes acogedores y agradables en vivienda y hostelería',
  'Facilidad de manejo con mecanismo sencillo e intuitivo',
  'Disponible en acabado lino satinado y tejidos estándar decorativos',
  'Ideal para espacios que buscan un resultado de apariencia textil natural',
  'Compatible con varillas y sistemas de montaje discretos',
]

const specs: [string, string][] = [
  ['Sistema',   'Cortina Pacchetto'],
  ['Ancho',     'De 0,40 m a 2,50 m'],
  ['Alto',      'Hasta 3,00 m'],
  ['Diseño',    'Sin varillas (caída natural)'],
  ['Tejidos',   'Lino, algodón, mezclas'],
  ['Estilo',    'Formal / acogedor'],
  ['Manejo',    'Fácil (cordón o cadena)'],
]

const otherProducts = [
  { label: 'Stor Glass Avant',      sub: 'Integración total',      href: '/cortinas-estores/stor-glass-avant' },
  { label: 'Estor Enrollable',      sub: 'Máxima versatilidad',    href: '/cortinas-estores/estor-enrollable' },
  { label: 'Estor Vision',          sub: 'Control dual de luz',    href: '/cortinas-estores/estor-vision' },
  { label: 'Cortinas Verticales',   sub: 'Grandes superficies',    href: '/cortinas-estores/cortinas-verticales' },
  { label: 'Cortina Plisada',       sub: 'Diseño compacto',        href: '/cortinas-estores/cortina-plisada' },
  { label: 'Panel Deslizante',      sub: 'Grandes formatos',       href: '/cortinas-estores/panel-deslizante' },
  { label: 'Veneciana de Aluminio', sub: 'Control preciso de luz', href: '/cortinas-estores/veneciana-aluminio' },
  { label: 'Volver al catálogo',    sub: 'Cortinas y estores',     href: '/cortinas-estores' },
]

export default function CortinaPackhettoPage() {
  return (
    <div className="min-h-screen">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .img-reveal { animation: fadeUp 0.65s ease both; }
        .img-zoom   { transition: transform 0.45s ease; }
        .img-zoom-wrap { overflow: hidden; border-radius: 0.75rem; }
        .img-zoom-wrap:hover .img-zoom { transform: scale(1.04); }
      `}</style>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="relative h-[40vh] min-h-48 flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80"
          alt="Cortina Pacchetto en interior elegante"
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
            <Link href="/cortinas-estores" className="hover:text-white transition-colors">Cortinas y Estores</Link>
            {' / '}
            <span className="text-white" aria-current="page">Cortina Pacchetto</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-arena/20 border border-arena/40 text-arena text-[10px] font-montserrat font-bold tracking-[3px] uppercase px-3 py-1 rounded-full">
              Estilo Formal
            </span>
          </div>
          <h1 className="font-montserrat text-3xl font-extrabold text-white">Cortina Pacchetto</h1>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-14 grid lg:grid-cols-[1fr_320px] gap-12">
        <div>
          {/* ── Intro ───────────────────────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
            <div>
              <p className="text-gris-medio text-base leading-relaxed mb-4">
                En <strong className="text-carbon font-semibold">Comercial MAR&apos;O</strong> la cortina Pacchetto es la elección natural para quienes buscan un resultado de categoría superior en salones, dormitorios principales y espacios de representación. Sus tejidos naturales —lino, algodón y mezclas de alta calidad— aportan una textura y caída que los sistemas técnicos no pueden igualar.
              </p>
              <p className="text-gris-medio text-base leading-relaxed">
                La <strong className="text-carbon font-semibold">facilidad de manejo y su mecanismo discreto</strong> hacen que sea tan práctica como elegante. Recomendada también en proyectos de hostelería donde el ambiente acogedor es parte de la experiencia del cliente.
              </p>
            </div>
            <div className="img-zoom-wrap">
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
                alt="Cortina Pacchetto en salón elegante"
                width={800}
                height={600}
                className="w-full h-auto object-cover img-zoom img-reveal"
              />
            </div>
          </div>

          {/* ── Stats ───────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {[
              { val: 'Natural',   label: 'Material' },
              { val: 'Formal',    label: 'Estilo', highlight: true },
              { val: 'Fácil',     label: 'Manejo' },
              { val: 'Alta',      label: 'Exclusividad' },
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
                alt="Detalle tejido lino cortina Pacchetto"
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
                { name: 'Salones principales', desc: 'Para viviendas donde el salón es el espacio de representación y se busca un acabado premium.' },
                { name: 'Hostelería',          desc: 'Hoteles y restaurantes que quieren transmitir calidez y exclusividad a sus clientes.' },
                { name: 'Dormitorios de lujo', desc: 'Tejidos naturales que crean el ambiente íntimo y acogedor ideal para el descanso.' },
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
              { name: 'Lino satinado', desc: 'Textura de lino con acabado satinado. Aspecto natural y tacto suave.' },
              { name: 'Algodón',       desc: 'Tejido natural de máxima transpirabilidad y caída elegante.' },
              { name: 'Decorativo',    desc: 'Tejidos estándar en múltiples colores para coordinar con la decoración.' },
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
              ¿Buscas un resultado de categoría?
            </h3>
            <p className="text-sm text-gris-medio mb-5">
              La Pacchetto es nuestra cortina más elegante. Cuéntanos tu proyecto y te ayudamos a elegir el tejido.
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
