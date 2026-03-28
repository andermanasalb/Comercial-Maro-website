import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Download } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'

export const metadata: Metadata = buildMetadata({
  title: "Ventanas PVC Serie S82 Passivhaus Ecoven Plus | Comercial MAR'O",
  description:
    'Ventanas PVC Serie S82 Ecoven Plus. Perfil 82 mm, 7 cámaras. Uf < 1,0 W/m²K. Compatible Passivhaus. RC2. Hasta 48 dB. Instalación en Bilbao y Vizcaya.',
  keywords: ['ventanas PVC S82 Bilbao', 'Passivhaus PVC Bilbao', 'Ecoven Plus S82', 'eficiencia energética PVC Bizkaia'],
  path: '/ventanas-pvc/serie-s82',
})

const features = [
  'Perfil de 82 mm con 7 cámaras interiores',
  'Uf < 1,0 W/m²K — transmitancia de marco',
  'Coeficiente Uw compatible con Passivhaus',
  'Triple acristalamiento de alto rendimiento',
  'Certificada en promociones residenciales Passivhaus en España',
  'Resistencia al viento C5, Estanquidad E1200, Permeabilidad clase 4',
  'Clasificación antirrobo RC2',
  'Hasta 48 dB de reducción acústica',
]

const specs: [string, string][] = [
  ['Profundidad', '82 mm'],
  ['Cámaras', '7 (marco y hoja)'],
  ['Uf (transmitancia marco)', '< 1,0 W/m²K'],
  ['Uw (ventana terminada)', 'Compatible Passivhaus'],
  ['Acústico', 'hasta 48 dB'],
  ['Viento', 'C5'],
  ['Estanquidad', 'E1200'],
  ['Seguridad', 'RC2'],
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

export default function SerieS82Page() {
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
          src="https://ecovenplus.com/wp-content/uploads/2024/10/papik01-1-scaled.jpg.webp"
          alt="Ventanas PVC Serie S82 Passivhaus Ecoven Plus"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-carbon/75" />
        <div className="relative z-10 px-6 pb-8 max-w-[1280px] mx-auto w-full">
          <nav className="text-white/60 text-[12px] font-montserrat mb-2">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            {' / '}
            <Link href="/ventanas-pvc" className="hover:text-white transition-colors">Puertas y Ventanas PVC</Link>
            {' / '}
            <span className="text-white" aria-current="page">Serie S82</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-arena/20 border border-arena/40 text-arena text-[10px] font-montserrat font-bold tracking-[3px] uppercase px-3 py-1 rounded-full">
              Premium · Passivhaus
            </span>
          </div>
          <h1 className="font-montserrat text-3xl font-extrabold text-white">Serie S82 — Ecoven Plus</h1>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-14 grid lg:grid-cols-[1fr_320px] gap-12">
        <div>

          {/* ── Intro + photo ───────────────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
            <div>
              <p className="text-gris-medio text-base leading-relaxed mb-4">
                La S82 es la serie top de Ecoven Plus: la que se instala en proyectos de muy bajo consumo
                y en edificios que buscan certificaciones de eficiencia energética.
              </p>
              <p className="text-gris-medio text-base leading-relaxed">
                Su perfil de <strong className="text-carbon font-semibold">82 mm</strong> con{' '}
                <strong className="text-carbon font-semibold">7 cámaras internas</strong> minimiza la transmitancia
                térmica. Con triple vidrio, se alcanzan valores compatibles con proyectos tipo{' '}
                <strong className="text-carbon font-semibold">Passivhaus</strong>, estándar en el que la
                S82 ya ha sido certificada en promociones residenciales en España.
              </p>
            </div>
            <div className="img-zoom-wrap shadow-md">
              <Image
                src="https://ecovenplus.com/wp-content/uploads/2024/10/mg-1373-web-1200x780.jpg.webp"
                alt="Fachada con ventanas PVC S82 Ecoven Plus"
                width={600}
                height={450}
                className="w-full h-[260px] object-cover img-zoom img-reveal"
              />
            </div>
          </div>

          {/* ── Stat grid — dark style ───────────────────────────────────────── */}
          <div className="bg-carbon rounded-xl p-4 mb-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { val: '82 mm', label: 'Profundidad', highlight: false },
                { val: '<1,0 W/m²K', label: 'Uf (marco)', highlight: true },
                { val: 'Passivhaus', label: 'Certificación Uw', highlight: false },
                { val: '48 dB', label: 'Acústico máx.', highlight: false },
              ].map(({ val, label, highlight }) => (
                <div key={label} className={`rounded-xl p-4 text-center border ${highlight ? 'bg-white/5 border-rojo' : 'bg-white/5 border-white/10'}`}>
                  <p className="font-montserrat text-xl font-extrabold text-white">{val}</p>
                  <p className="text-[11px] text-white/50 mt-1">{label}</p>
                </div>
              ))}
            </div>
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
            <div className="img-zoom-wrap bg-carbon border border-white/10 shadow-sm">
              <Image
                src="https://ecovenplus.com/wp-content/uploads/2024/10/SL_82_OK_Marzo2022-1-1-1-1-1-2.png"
                alt="Perfil técnico ventana PVC Serie S82 Ecoven Plus"
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
                  { series: 'S76', pct: '72%', val: '1,1 W/m²K', current: false, delay: '0.1s' },
                  { series: 'S82', pct: '90%', val: '<1,0 W/m²K', current: true, delay: '0.2s' },
                ],
              },
              {
                label: 'Profundidad de perfil',
                rows: [
                  { series: 'S70', pct: '58%', val: '70 mm', current: false, delay: '0s' },
                  { series: 'S76', pct: '68%', val: '76 mm', current: false, delay: '0.1s' },
                  { series: 'S82', pct: '82%', val: '82 mm', current: true, delay: '0.2s' },
                ],
              },
              {
                label: 'Aislamiento acústico máx.',
                rows: [
                  { series: 'S70', pct: '80%', val: '48 dB', current: false, delay: '0s' },
                  { series: 'S76', pct: '75%', val: '45 dB', current: false, delay: '0.1s' },
                  { series: 'S82', pct: '80%', val: '48 dB', current: true, delay: '0.2s' },
                ],
              },
            ].map(({ label, rows }) => (
              <div key={label} className="mb-5">
                <p className="text-[11px] font-montserrat font-semibold text-carbon mb-2">{label}</p>
                <div className="space-y-2">
                  {rows.map(({ series, pct, val, current, delay }) => (
                    <div key={series} className="flex items-center gap-3">
                      <span className={`w-8 text-[12px] font-montserrat font-bold ${current ? 'text-rojo' : 'text-gris-medio'}`}>
                        {series}
                      </span>
                      <div className="flex-1 bg-gris-claro h-1.5 rounded-full">
                        <div
                          className={`h-1.5 rounded-full bar-grow ${current ? 'bg-rojo' : 'bg-arena'}`}
                          style={{ width: pct, animationDelay: delay }}
                        />
                      </div>
                      <span className={`w-24 text-right text-[11px] font-montserrat font-bold ${current ? 'text-rojo' : 'text-gris-medio'}`}>
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

          {/* PDF download */}
          <a
            href="https://ecovenplus.com/wp-content/uploads/2024/10/ficha-ecoven-s82.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-montserrat font-semibold text-rojo border border-rojo/40 hover:bg-rojo hover:text-white transition-colors rounded-lg px-4 py-2.5 mb-10"
          >
            <Download size={15} />
            Descargar Ficha Técnica S82 (PDF)
          </a>

          {/* ── Fotos de proyecto ────────────────────────────────────────────── */}
          <div className="grid grid-cols-2 gap-3 mb-10">
            <div className="img-zoom-wrap shadow-sm">
              <Image
                src="https://ecovenplus.com/wp-content/uploads/2024/10/1700580387256-2.jpeg"
                alt="Instalación ventanas PVC S82 en vivienda Bizkaia"
                width={600}
                height={400}
                className="w-full h-[200px] object-cover img-zoom img-reveal"
                style={{ animationDelay: '0.1s' }}
              />
            </div>
            <div className="img-zoom-wrap shadow-sm">
              <Image
                src="https://ecovenplus.com/wp-content/uploads/2024/10/1708646479580-1.jpeg"
                alt="Proyecto ventanas PVC S82 Bilbao"
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

        {/* ── Sidebar — dark style ─────────────────────────────────────────── */}
        <div className="lg:sticky lg:top-20 h-fit space-y-4">
          <div className="bg-carbon rounded-xl p-6 border border-carbon">
            <span className="inline-block bg-white/10 text-arena text-[10px] font-montserrat font-bold tracking-wider uppercase px-2.5 py-1 rounded-full mb-3">
              Máxima eficiencia
            </span>
            <h3 className="font-montserrat text-base font-bold text-white mb-2">
              ¿Tu proyecto necesita la S82?
            </h3>
            <p className="text-sm text-white/60 mb-5">
              Para obras nuevas de alta exigencia, proyectos Passivhaus o certificaciones energéticas,
              analizamos tu caso sin compromiso.
            </p>
            <PresupuestoButton size="lg" className="w-full justify-center" />
            <div className="mt-4 pt-4 border-t border-white/10 text-sm font-montserrat space-y-1.5">
              {['Estudio energético personalizado', 'Compatibilidad Passivhaus', 'Instalación en Vizcaya'].map(item => (
                <p key={item} className="flex items-center gap-1.5 text-white/60">
                  <CheckCircle2 size={12} className="text-arena flex-shrink-0" aria-hidden="true" />
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
              { label: 'Serie S76', sub: '76 mm · más confort', href: '/ventanas-pvc/serie-s76' },
              { label: 'Volver al catálogo', sub: 'Puertas y Ventanas PVC', href: '/ventanas-pvc' },
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
