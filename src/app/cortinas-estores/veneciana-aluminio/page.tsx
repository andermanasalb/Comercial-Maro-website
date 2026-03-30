import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'

export const metadata: Metadata = buildMetadata({
  title: "Venecianas de Aluminio | Comercial MAR'O",
  description:
    'Venecianas de aluminio con lamas orientables de 50 mm. Control preciso de la entrada de luz, amplia gama de colores y acabados. Ideales para oficinas. Instalación en Bilbao.',
  keywords: ['veneciana aluminio', 'venecianas lamas', 'venecianas oficina', 'persianas venecianas Bilbao'],
  path: '/cortinas-estores/veneciana-aluminio',
})

const features = [
  'Lamas de aluminio orientables de 50 mm para regular la entrada de luz',
  'Material ligero, resistente y de larga durabilidad',
  'Control preciso y cómodo de la luminosidad mediante orientación de lamas',
  'Amplia gama de colores lisos y combinaciones con cintas textiles',
  'Acabados anodizados (plata, bronce, oro) y lacados en colores RAL',
  'Fácil limpieza y mantenimiento',
  'Especialmente recomendada para entornos de trabajo y oficinas modernas',
]

const specs: [string, string][] = [
  ['Sistema',        'Veneciana de aluminio'],
  ['Ancho de lama',  '16 mm / 25 mm / 50 mm'],
  ['Ancho máx.',     'Hasta 3,00 m'],
  ['Material',       'Aluminio'],
  ['Accionamiento',  'Cordón o cadena'],
  ['Personalización', 'Cintas textiles decorativas'],
  ['Acabados',       'Anodizados y lacados RAL'],
]

const coloresAnodizados = ['#A5A8AA', '#C9A96E', '#D4AF75', '#E8E8E8']
const nombreAnodizados  = ['Plata',   'Bronce',  'Oro',     'Anodizado natural']

const otherProducts = [
  { label: 'Stor Glass Avant',    sub: 'Integración total',      href: '/cortinas-estores/stor-glass-avant' },
  { label: 'Estor Enrollable',    sub: 'Máxima versatilidad',    href: '/cortinas-estores/estor-enrollable' },
  { label: 'Estor Vision',        sub: 'Control dual de luz',    href: '/cortinas-estores/estor-vision' },
  { label: 'Cortinas Verticales', sub: 'Grandes superficies',    href: '/cortinas-estores/cortinas-verticales' },
  { label: 'Cortina Plisada',     sub: 'Diseño compacto',        href: '/cortinas-estores/cortina-plisada' },
  { label: 'Panel Deslizante',    sub: 'Grandes formatos',       href: '/cortinas-estores/panel-deslizante' },
  { label: 'Cortina Pacchetto',   sub: 'Estilo formal',          href: '/cortinas-estores/cortina-pacchetto' },
  { label: 'Volver al catálogo',  sub: 'Cortinas y estores',     href: '/cortinas-estores' },
]

export default function VenecianaAluminioPage() {
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
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
          alt="Venecianas de aluminio en oficina"
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
            <span className="text-white" aria-current="page">Veneciana de Aluminio</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-arena/20 border border-arena/40 text-arena text-[10px] font-montserrat font-bold tracking-[3px] uppercase px-3 py-1 rounded-full">
              Control de Luz Preciso
            </span>
          </div>
          <h1 className="font-montserrat text-3xl font-extrabold text-white">Veneciana de Aluminio</h1>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-14 grid lg:grid-cols-[1fr_320px] gap-12">
        <div>
          {/* ── Intro ───────────────────────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
            <div>
              <p className="text-gris-medio text-base leading-relaxed mb-4">
                En <strong className="text-carbon font-semibold">Comercial MAR&apos;O</strong> recomendamos la veneciana de aluminio para oficinas y espacios de trabajo donde el control preciso de la luz es prioritario. Sus lamas orientables de <strong className="text-carbon font-semibold">50 mm</strong> permiten graduar la entrada de luz en cada momento del día con total precisión.
              </p>
              <p className="text-gris-medio text-base leading-relaxed">
                El aluminio aporta <strong className="text-carbon font-semibold">ligereza, resistencia y facilidad de mantenimiento</strong>, convirtiéndola en la opción más duradera de su categoría. Con una amplia paleta de colores —desde anodizados clásicos hasta lacados en cualquier tono RAL— y la posibilidad de combinar lamas con cintas textiles, se integra con elegancia en decoraciones vanguardistas.
              </p>
            </div>
            <div className="img-zoom-wrap">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Venecianas de aluminio en espacio de trabajo moderno"
                width={800}
                height={600}
                className="w-full h-auto object-cover img-zoom img-reveal"
              />
            </div>
          </div>

          {/* ── Stats ───────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {[
              { val: 'Aluminio', label: 'Material' },
              { val: '50 mm',    label: 'Ancho lama', highlight: true },
              { val: 'Alta',     label: 'Personalización' },
              { val: 'Fácil',    label: 'Mantenimiento' },
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
                src="https://images.unsplash.com/photo-1497366858526-0766b7f6edd3?w=800&q=80"
                alt="Detalle lamas veneciana aluminio"
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
                { name: 'Oficinas',           desc: 'Control de deslumbramiento en pantallas con orientación precisa de las lamas.' },
                { name: 'Espacios modernos',  desc: 'Acabados anodizados y lacados que encajan con decoraciones vanguardistas.' },
                { name: 'Uso intensivo',      desc: 'Aluminio resistente que soporta el uso diario sin pérdida de prestaciones.' },
              ].map(u => (
                <div key={u.name} className="bg-crema border border-gris-claro rounded-xl p-5 hover:border-rojo/30 transition-colors">
                  <p className="font-montserrat font-bold text-carbon text-[13px] mb-1.5">{u.name}</p>
                  <p className="text-gris-medio text-[12px] leading-relaxed">{u.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Acabados ────────────────────────────────────────────────────── */}
          <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5">Acabados disponibles</h2>
          <div className="mb-6">
            <div className="bg-carbon text-white text-center py-2 px-8 font-montserrat text-[11px] font-semibold tracking-widest uppercase rounded-t-md">
              Anodizados
            </div>
            <div className="flex gap-6 justify-center items-center bg-white border border-t-0 border-gris-claro rounded-b-md p-6">
              {coloresAnodizados.map((hex, i) => (
                <div key={hex} className="flex flex-col items-center">
                  <div style={{ backgroundColor: hex }} className="w-12 h-12 rounded shadow-sm border border-gray-200" />
                  <p className="text-[10px] font-montserrat text-carbon text-center mt-2 font-bold max-w-[60px] leading-tight">{nombreAnodizados[i]}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-[13px] text-gris-medio mb-10">
            Disponible además en una amplia gama de lacados RAL a medida y combinaciones con cintas textiles decorativas.
          </p>

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
              ¿Buscas control de luz preciso?
            </h3>
            <p className="text-sm text-gris-medio mb-5">
              Las venecianas de aluminio son la solución para espacios donde la regulación de luz es clave. Cuéntanos tu proyecto.
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
