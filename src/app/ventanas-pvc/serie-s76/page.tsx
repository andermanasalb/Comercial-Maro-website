import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Download, ArrowRight } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'

export const metadata: Metadata = buildMetadata({
  title: "Ventanas PVC Serie S76 Ecoven Plus en Bilbao | Comercial MAR'O",
  description:
    'Ventanas PVC Serie S76 Ecoven Plus. Perfil 76 mm, 5 cámaras, triple junta. Uf 1,1 W/m²K, Uw 0,75 W/m²K. Hasta 45 dB. Bilbao y Vizcaya.',
  keywords: ['ventanas PVC S76 Bilbao', 'Ecoven Plus S76', 'aislamiento acústico PVC Bizkaia'],
  path: '/ventanas-pvc/serie-s76',
})

const features = [
  'Perfil de 76 mm con 5 cámaras en marco y hoja',
  'Sistema de triple junta de sellado',
  'Uf ≈ 1,1 W/m²K — transmitancia de marco',
  'Uw 0,75 W/m²K con vidrio de altas prestaciones',
  'Reducción acústica hasta 45 dB',
  'Vidrio hasta 48 mm de espesor',
  'Clasificación seguridad RC2 configurable',
  'Refuerzo de acero galvanizado',
]

const specs: [string, string][] = [
  ['Profundidad', '76 mm'],
  ['Cámaras', '5 (marco y hoja)'],
  ['Sellado', 'Triple junta perimetral'],
  ['Uf (transmitancia marco)', '1,1 W/m²K'],
  ['Uw (ventana terminada)', '0,75 W/m²K'],
  ['Vidrio admitido', 'hasta 48 mm'],
  ['Acústico', 'hasta 45 dB'],
  ['Seguridad', 'RC2 configurable'],
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

export default function SerieS76Page() {
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
        .img-reveal { animation: fadeUp 0.65s ease both; }
        .bar-grow {
          transform-origin: left center;
          animation: growBar 0.9s cubic-bezier(0.25,1,0.5,1) both;
        }
        .img-zoom-wrap { overflow: hidden; border-radius: 0.75rem; }
        .img-zoom-wrap:hover .img-zoom { transform: scale(1.04); }
        .img-zoom { transition: transform 0.45s ease; }
      `}</style>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="relative h-[40vh] min-h-48 flex items-end">
        <Image
          src="https://ecovenplus.com/wp-content/uploads/2024/10/Casa-Hilaria-2-retocado-scaled-444x600.jpg"
          alt="Ventanas PVC Serie S76 Ecoven Plus"
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
            <span className="text-white" aria-current="page">Serie S76</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-rojo/80 text-white text-[10px] font-montserrat font-bold tracking-[3px] uppercase px-3 py-1 rounded-full">
              Más popular
            </span>
          </div>
          <h1 className="font-montserrat text-3xl font-extrabold text-white">Serie S76 — Ecoven Plus</h1>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-14 grid lg:grid-cols-[1fr_320px] gap-12">
        <div>

          {/* ── Intro + photo ───────────────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
            <div>
              <p className="text-gris-medio text-base leading-relaxed mb-4">
                Con la S76 subes un escalón en confort: mejor sellado, mejor aislamiento y la posibilidad de montar
                vidrios todavía más gruesos. Pensada para olvidarse de corrientes de aire, mejorar el descanso
                en zonas ruidosas y tener una ventana preparada para climas exigentes.
              </p>
              <p className="text-gris-medio text-base leading-relaxed">
                Incorpora <strong className="text-carbon font-semibold">triple junta de sellado</strong> que mejora
                notablemente la hermeticidad al aire y al agua. En combinación con herraje perimetral, permite
                configurar la ventana con certificación{' '}
                <strong className="text-carbon font-semibold">RC2</strong>.
              </p>
            </div>
            <div className="img-zoom-wrap shadow-md">
              <Image
                src="https://ecovenplus.com/wp-content/uploads/2024/10/mg-1373-web-1200x780.jpg-444x600.webp"
                alt="Proyecto ventanas PVC S76 en fachada Bilbao"
                width={600}
                height={450}
                className="w-full h-[260px] object-cover img-zoom img-reveal"
              />
            </div>
          </div>

          {/* ── Stat grid ───────────────────────────────────────────────────── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {[
              { val: '76 mm', label: 'Profundidad' },
              { val: '1,1 W/m²K', label: 'Uf (marco)', highlight: true },
              { val: '0,75 W/m²K', label: 'Uw (ventana)' },
              { val: '45 dB', label: 'Acústico máx.' },
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
                src="https://ecovenplus.com/wp-content/uploads/2024/10/SOFTLINE76_ok-2-1-1-1.png"
                alt="Perfil técnico ventana PVC Serie S76 Ecoven Plus"
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
                  { series: 'S70', pct: '55%', val: '1,3 W/m²K', current: false, delay: '0s' },
                  { series: 'S76', pct: '72%', val: '1,1 W/m²K', current: true, delay: '0.1s' },
                  { series: 'S82', pct: '90%', val: '<1,0 W/m²K', current: false, delay: '0.2s' },
                ],
              },
              {
                label: 'Profundidad de perfil',
                rows: [
                  { series: 'S70', pct: '58%', val: '70 mm', current: false, delay: '0s' },
                  { series: 'S76', pct: '68%', val: '76 mm', current: true, delay: '0.1s' },
                  { series: 'S82', pct: '82%', val: '82 mm', current: false, delay: '0.2s' },
                ],
              },
              {
                label: 'Aislamiento acústico máx.',
                rows: [
                  { series: 'S70', pct: '80%', val: '48 dB', current: false, delay: '0s' },
                  { series: 'S76', pct: '75%', val: '45 dB', current: true, delay: '0.1s' },
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
            href="https://ecovenplus.com/wp-content/uploads/2024/10/ficha-Ecoven-plus-s76.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-montserrat font-semibold text-rojo border border-rojo/40 hover:bg-rojo hover:text-white transition-colors rounded-lg px-4 py-2.5 mb-10"
          >
            <Download size={15} />
            Descargar Ficha Técnica S76 (PDF)
          </a>

          {/* ── Fotos de proyecto ────────────────────────────────────────────── */}
          <div className="grid grid-cols-2 gap-3 mb-10">
            <div className="img-zoom-wrap shadow-sm">
              <Image
                src="https://ecovenplus.com/wp-content/uploads/2024/10/papik01-1-scaled.jpg-444x600.webp"
                alt="Proyecto Papik ventanas PVC S76 Bilbao"
                width={600}
                height={400}
                className="w-full h-[200px] object-cover img-zoom img-reveal"
                style={{ animationDelay: '0.1s' }}
              />
            </div>
            <div className="img-zoom-wrap shadow-sm">
              <Image
                src="https://ecovenplus.com/wp-content/uploads/2024/10/1707999298918-444x600.jpeg"
                alt="Instalación ventanas PVC S76 en vivienda"
                width={600}
                height={400}
                className="w-full h-[200px] object-cover img-zoom img-reveal"
                style={{ animationDelay: '0.2s' }}
              />
            </div>
          </div>

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
              ¿Es la S76 la adecuada para ti?
            </h3>
            <p className="text-sm text-gris-medio mb-5">
              Si buscas mayor confort acústico y hermeticidad, la S76 es la opción más elegida.
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
              { label: 'Serie S70', sub: '70 mm · la más utilizada', href: '/ventanas-pvc/serie-s70' },
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
