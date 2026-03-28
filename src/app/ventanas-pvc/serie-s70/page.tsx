import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Download, ArrowRight } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'

export const metadata: Metadata = buildMetadata({
  title: "Ventanas PVC Serie S70 Ecoven Plus en Bilbao | Comercial MAR'O",
  description:
    'Ventanas PVC Serie S70 Ecoven Plus. Perfil 70 mm, 5 cámaras. Uf 1,3 W/m²K, Uw 0,9 W/m²K. Hasta 48 dB. Ideal para renovación en Bilbao y Vizcaya.',
  keywords: ['ventanas PVC S70 Bilbao', 'Ecoven Plus S70', 'renovación ventanas PVC Vizcaya'],
  path: '/ventanas-pvc/serie-s70',
})

const features = [
  'Perfil de 70 mm de profundidad con 5 cámaras interiores',
  'Transmitancia de marco Uf 1,3 W/m²K',
  'Valor de ventana terminada Uw 0,9 W/m²K con vidrio de alto rendimiento',
  'Galce admite vidrios de hasta 42 mm de espesor',
  'Compatible con dobles acristalamientos de alta gama',
  'Ideal para sustitución de carpinterías de aluminio o madera envejecida',
  'Refuerzo de acero galvanizado interior',
  'Amplia gama de acabados foliados y Spectral',
]

const specs: [string, string][] = [
  ['Profundidad', '70 mm'],
  ['Cámaras (hoja y marco)', '5'],
  ['Uf (transmitancia marco)', '1,3 W/m²K'],
  ['Uw (ventana terminada)', '0,9 W/m²K'],
  ['Espesor vidrio admitido', 'hasta 42 mm'],
  ['Aislamiento acústico máx.', 'hasta 48 dB'],
  ['Refuerzo', 'Acero galvanizado'],
]

const foliados = [
  { name: 'Blanco 9016', hex: '#F5F5F2', border: true },
  { name: 'Gris antracita 7016', hex: '#3B3E42', border: false },
  { name: 'Negro 9005', hex: '#1A1A1A', border: false },
  { name: 'Champán', hex: '#CDB88A', border: false },
  { name: 'Marrón', hex: '#5C3A2A', border: false },
  { name: 'Roble dorado', hex: '#BC8830', border: false },
  { name: 'Roble claro', hex: '#C4924A', border: false },
  { name: 'Palisandro', hex: '#722A1E', border: false },
]

const spectral = [
  { name: 'Blanco cálido', hex: '#EEEAE4', border: true },
  { name: 'Antracita cálido', hex: '#46433E', border: false },
  { name: 'Negro profundo', hex: '#221F1C', border: false },
  { name: 'Roble salvaje', hex: '#B08845', border: false },
  { name: 'Perla', hex: '#DDD8CE', border: true },
  { name: 'Arena', hex: '#C0A474', border: false },
  { name: 'Gris cálido', hex: '#706E6A', border: false },
  { name: 'Azul noche', hex: '#384258', border: false },
]

export default function SerieS70Page() {
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
          src="https://ecovenplus.com/wp-content/uploads/2024/10/IMG_1731-1-scaled-444x600.jpg"
          alt="Ventanas PVC Serie S70 Ecoven Plus"
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
            <Link href="/ventanas-pvc" className="hover:text-white transition-colors">Puertas y Ventanas PVC Ecoven Plus</Link>
            {' / '}
            <span className="text-white" aria-current="page">Serie S70</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-arena/20 border border-arena/40 text-arena text-[10px] font-montserrat font-bold tracking-[3px] uppercase px-3 py-1 rounded-full">
              La más utilizada
            </span>
          </div>
          <h1 className="font-montserrat text-3xl font-extrabold text-white">Serie S70 — Ecoven Plus</h1>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-14 grid lg:grid-cols-[1fr_320px] gap-12">
        <div>

          {/* ── Intro + photo ───────────────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
            <div>
              <p className="text-gris-medio text-base leading-relaxed mb-4">
                La Serie S70 es la más utilizada de Ecoven Plus: ideal para cambiar ventanas antiguas y notar
                de inmediato la diferencia en temperatura y ruido dentro de casa.
              </p>
              <p className="text-gris-medio text-base leading-relaxed">
                Su perfil de <strong className="text-carbon font-semibold">70 mm</strong> con{' '}
                <strong className="text-carbon font-semibold">5 cámaras interiores</strong> reduce de forma
                clara las pérdidas de calor frente a carpinterías antiguas de aluminio sin rotura de puente
                térmico o madera envejecida.
              </p>
            </div>
            <div className="img-zoom-wrap shadow-md">
              <Image
                src="https://ecovenplus.com/wp-content/uploads/2024/10/MG_6525-BAJA-RESOLUCIaN-1024x683-1-444x600.jpg"
                alt="Instalación ventanas PVC S70 en vivienda en Bilbao"
                width={600}
                height={450}
                className="w-full h-[260px] object-cover img-zoom img-reveal"
              />
            </div>
          </div>

          {/* ── Stat grid ───────────────────────────────────────────────────── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {[
              { val: '70 mm', label: 'Profundidad' },
              { val: '1,3 W/m²K', label: 'Uf (marco)', highlight: true },
              { val: '0,9 W/m²K', label: 'Uw (ventana)' },
              { val: '48 dB', label: 'Acústico máx.' },
            ].map(({ val, label, highlight }) => (
              <div key={label} className={`rounded-xl p-4 text-center border ${highlight ? 'bg-crema border-rojo' : 'bg-crema border-gris-claro'}`}>
                <p className="font-montserrat text-xl font-extrabold text-carbon">{val}</p>
                <p className="text-[11px] text-gris-medio mt-1">{label}</p>
              </div>
            ))}
          </div>

          {/* ── Características + perfil ────────────────────────────────────── */}
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
            <div className="img-zoom-wrap bg-crema border border-gris-claro shadow-sm">
              <Image
                src="https://ecovenplus.com/wp-content/uploads/2024/08/SL70-2.png"
                alt="Perfil técnico ventana PVC Serie S70 Ecoven Plus"
                width={400}
                height={500}
                className="w-full object-contain img-zoom img-reveal"
                style={{ animationDelay: '0.15s' }}
              />
            </div>
          </div>

          {/* ── Comparativa ─────────────────────────────────────────────────── */}
          <div className="mb-10">
            <p className="text-[11px] uppercase tracking-wider font-montserrat text-gris-medio mb-5">
              Rendimiento frente a las otras series
            </p>

            {[
              {
                label: 'Transmitancia Uf (menor es mejor)',
                rows: [
                  { series: 'S70', pct: '55%', val: '1,3 W/m²K', current: true, delay: '0s' },
                  { series: 'S76', pct: '72%', val: '1,1 W/m²K', current: false, delay: '0.1s' },
                  { series: 'S82', pct: '90%', val: '<1,0 W/m²K', current: false, delay: '0.2s' },
                ],
              },
              {
                label: 'Profundidad de perfil',
                rows: [
                  { series: 'S70', pct: '58%', val: '70 mm', current: true, delay: '0s' },
                  { series: 'S76', pct: '68%', val: '76 mm', current: false, delay: '0.1s' },
                  { series: 'S82', pct: '82%', val: '82 mm', current: false, delay: '0.2s' },
                ],
              },
              {
                label: 'Aislamiento acústico máx.',
                rows: [
                  { series: 'S70', pct: '80%', val: '48 dB', current: true, delay: '0s' },
                  { series: 'S76', pct: '75%', val: '45 dB', current: false, delay: '0.1s' },
                  { series: 'S82', pct: '80%', val: '48 dB', current: false, delay: '0.2s' },
                ],
              },
            ].map(({ label, rows }) => (
              <div key={label} className="mb-5">
                <p className="text-[11px] font-montserrat font-semibold text-carbon mb-2">{label}</p>
                <div className="space-y-2">
                  {rows.map(({ series, pct, val, current, delay }) => (
                    <div key={series} className="flex items-center gap-3">
                      <span className={`w-8 text-[12px] font-montserrat font-bold ${current ? 'text-carbon' : 'text-gris-medio'}`}>
                        {series}
                      </span>
                      <div className="flex-1 bg-gris-claro h-1.5 rounded-full">
                        <div
                          className={`h-1.5 rounded-full bar-grow ${current ? 'bg-rojo' : 'bg-arena'}`}
                          style={{ width: pct, animationDelay: delay }}
                        />
                      </div>
                      <span className={`w-24 text-right text-[11px] font-montserrat font-bold ${current ? 'text-carbon' : 'text-gris-medio'}`}>
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
          <div className="rounded-xl border border-gris-claro overflow-hidden mb-4">
            {specs.map(([label, value], i) => (
              <div key={label} className={`flex justify-between items-center px-5 py-3 text-sm ${i % 2 === 0 ? 'bg-crema' : 'bg-white'}`}>
                <span className="text-gris-medio font-montserrat">{label}</span>
                <span className="font-montserrat font-semibold text-carbon text-right">{value}</span>
              </div>
            ))}
          </div>

          {/* PDF download */}
          <a
            href="https://ecovenplus.com/wp-content/uploads/2024/10/ficha-ecoven-s70.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-montserrat font-semibold text-rojo border border-rojo/40 hover:bg-rojo hover:text-white transition-colors rounded-lg px-4 py-2.5 mb-10"
          >
            <Download size={15} />
            Descargar Ficha Técnica S70 (PDF)
          </a>



          {/* ── Acabados disponibles ─────────────────────────────────────────── */}
          <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-2">Acabados disponibles</h2>

          <p className="text-[11px] uppercase tracking-wider font-montserrat text-gris-medio mb-3">
            Colores Foliados (Estándar)
          </p>
          <div className="flex flex-wrap gap-3 mb-7">
            {foliados.map(c => (
              <div key={c.name} className="flex flex-col items-center">
                <div
                  style={{ backgroundColor: c.hex }}
                  className={`w-12 h-12 rounded-xl ${c.border ? 'border border-gray-200' : ''}`}
                />
                <p className="text-[10px] font-montserrat text-gris-medio text-center mt-1 max-w-[48px]">{c.name}</p>
              </div>
            ))}
          </div>

          <p className="text-[11px] uppercase tracking-wider font-montserrat text-gris-medio mb-1">
            Colores Spectral
          </p>
          <p className="text-[11px] text-gris-medio font-montserrat mb-3">Premium ultra-matte</p>
          <div className="flex flex-wrap gap-3">
            {spectral.map(c => (
              <div key={c.name} className="flex flex-col items-center">
                <div
                  style={{ backgroundColor: c.hex }}
                  className={`w-12 h-12 rounded-xl ${c.border ? 'border border-gray-200' : ''}`}
                />
                <p className="text-[10px] font-montserrat text-gris-medio text-center mt-1 max-w-[48px]">{c.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Sidebar ──────────────────────────────────────────────────────── */}
        <div className="lg:sticky lg:top-20 h-fit space-y-4">
          <div className="bg-crema rounded-xl p-6 border border-gris-claro">
            <h3 className="font-montserrat text-base font-bold text-carbon mb-2">
              ¿Es la S70 la adecuada para ti?
            </h3>
            <p className="text-sm text-gris-medio mb-5">
              Si estás renovando ventanas antiguas, la S70 es la opción más elegida. Cuéntanos tu proyecto.
            </p>
            <PresupuestoButton size="lg" className="w-full justify-center" />
            <div className="mt-4 pt-4 border-t border-gris-claro text-sm text-gris-medio font-montserrat space-y-1.5">
              {['Asesoramiento personalizado', 'Garantía 10 años', 'Instalación propia en Vizcaya'].map(item => (
                <p key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-rojo flex-shrink-0" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-gris-claro">
            <p className="font-montserrat text-[11px] font-bold tracking-[2px] uppercase text-gris-medio mb-3">
              Otras series
            </p>
            {[
              { label: 'Serie S76', sub: '76 mm · más confort', href: '/ventanas-pvc/serie-s76' },
              { label: 'Serie S82', sub: '82 mm · Passivhaus', href: '/ventanas-pvc/serie-s82' },
              { label: 'Volver al catálogo', sub: 'Puertas y Ventanas PVC Ecoven Plus', href: '/ventanas-pvc' },
            ].map(item => (
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
