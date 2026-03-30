import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, FileText } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'

export const metadata: Metadata = buildMetadata({
  title: "Mampara Perfil Oculto UR-902 | Comercial MAR'O",
  description:
    'Nuestro sistema UR-902 ofrece una estética minimalista con perfilería estructural totalmente oculta. Elegancia y vanguardia para oficinas de alto nivel.',
  keywords: ['mampara UR-902', 'mamparas perfil oculto', 'mamparas premium', 'divisorias vanguardistas'],
  path: '/mamparas-oficina/ur-902',
})

const features = [
  'Perfilería estructural completamente invisible al exterior',
  'Anclaje de tableros mediante suspensión en grapas "Z"',
  'Entrecalles milimétricas aseguradas con lambetas metálicas',
  'Versatilidad total con vidrios continuos y paneles de madera',
  'Calidad constructiva equivalente a las series UR-802/803',
  'Totalmente integrable con nuestro sistema de Tabique Armario',
  'Estética limpia y vanguardista para interiores de alto nivel',
]

const specs: [string, string][] = [
  ['Serie', 'UR-902'],
  ['Perfilería', 'Totalmente oculta / Invisible'],
  ['Suspensión', 'Mediante grapas de alta precisión'],
  ['Concepto', 'Diseño de paramento continuo'],
  ['Lambetas', 'De 5 ó 10 mm reforzadas'],
  ['Compatibilidad', 'Sistema Tabique Armario'],
]

const coloresEstandar = [
  { name: 'RAL 9006', hex: '#A5A8AA', border: false },
  { name: 'RAL 7011', hex: '#4D5656', border: false },
]

const woodGrain = 'linear-gradient(90deg, rgba(0,0,0,0.07) 50%, transparent 50%) 0 0 / 2px 100%, linear-gradient(90deg, rgba(255,255,255,0.04) 50%, transparent 50%) 0 0 / 5px 100%'

const maderas = [
  { name: 'Wenge', hex: `${woodGrain}, linear-gradient(135deg, #3A1F13 0%, #190C05 100%)`, border: false },
  { name: 'Cerezo', hex: `${woodGrain}, linear-gradient(135deg, #AF5D35 0%, #7A391A 100%)`, border: false },
  { name: 'Maple', hex: `${woodGrain}, linear-gradient(135deg, #EAD7B6 0%, #D4BA8C 100%)`, border: false },
  { name: 'Haya Bl.', hex: `${woodGrain}, linear-gradient(135deg, #F0DBBA 0%, #E3C69D 100%)`, border: true },
]

const monocolores = [
  { name: 'Blanco Mat', hex: '#F9F9F8', border: true },
  { name: 'Crema Mat', hex: '#F1E9D2', border: false },
  { name: 'Gris Mat', hex: '#D8DBDC', border: false },
  { name: 'Metal', hex: '#B8BBBE', border: false },
]

const coloresRal = [
  '#D7DBDE', '#A0A2A7', '#C7C6B3', '#C5CC8A', '#F3E96B', '#EBD200', '#EDB200', '#DF7800', '#C4161C', '#BD3D2A', '#7A152B', '#3E2521',
  '#651631', '#6A567A', '#003E7A', '#2574AF', '#226E7E', '#6AB435', '#407B37', '#2E4C27', '#7C7338', '#735036', '#69372B', '#37352A'
]

export default function UR902Page() {
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
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
          alt="Mampara UR-902 perfil oculto oficina"
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
            <Link href="/mamparas-oficina" className="hover:text-white transition-colors">Mamparas de Oficina</Link>
            {' / '}
            <span className="text-white" aria-current="page">UR-902</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-arena/20 border border-arena/40 text-arena text-[10px] font-montserrat font-bold tracking-[3px] uppercase px-3 py-1 rounded-full">
              Perfilería oculta
            </span>
          </div>
          <h1 className="font-montserrat text-3xl font-extrabold text-white">UR-902</h1>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-14 grid lg:grid-cols-[1fr_320px] gap-12">
        <div>

          {/* ── Intro + photo ───────────────────────────────────────────────── */}
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-center mb-12">
            <div>
              <p className="text-gris-medio text-base leading-relaxed mb-4">
                En <strong className="text-carbon font-semibold">Comercial MAR&apos;O</strong>, entendemos que hay proyectos donde la estética es tan crítica como la funcionalidad. Por eso, proponemos el sistema <strong className="text-carbon font-semibold">UR-902</strong> para espacios que buscan una <strong className="text-carbon font-semibold">arquitectura de perfilería totalmente oculta</strong>, logrando que los marcos estructurales desaparezcan a favor de una continuidad visual absoluta.
              </p>
              <p className="text-gris-medio text-base leading-relaxed mb-4">
                La excelencia de este modelo reside en su técnica de anclaje. Utilizamos un <strong className="text-carbon font-semibold">sistema de grapas en zeta</strong> de alta precisión que suspende los tableros sobre la estructura interna de columnas y riostras. Esto nos permite definir entrecalles milimétricas (de 5 ó 10 mm) reforzadas con lambetas, asegurando un paralelismo perfecto y una estética de paramento continuo de gran pureza. Además, se integra de forma nativa con nuestro sistema de <Link href="/mamparas-oficina/tabique-armario" className="text-rojo hover:underline">Tabique Armario</Link>.
              </p>
              <p className="text-gris-medio text-base leading-relaxed">
                Nuestra solución <strong className="text-carbon font-semibold">UR-902</strong> proyecta un carácter vanguardista en cualquier entorno, integrando con maestría paneles de madera de alta gama y vidrios continuos sin perfiles vistos que interrumpan la mirada.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="img-zoom-wrap flex items-center justify-center bg-white border-0">
                <Image
                  src="/images/mamparas-oficina/UR-902-1.jpg"
                  alt="Mampara UR-902 perfil oculto instalación"
                  width={800}
                  height={800}
                  unoptimized
                  className="w-full h-auto max-h-[420px] object-contain img-zoom img-reveal"
                />
              </div>
              <a
                href="/docs/mamparas-oficina/Ur-902.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 bg-white border border-gris-claro rounded-xl text-[13px] font-montserrat font-bold text-carbon hover:border-rojo hover:text-rojo transition-all group shadow-sm hover:shadow-md w-full"
              >
                <FileText size={18} className="text-rojo group-hover:scale-110 transition-transform flex-shrink-0" />
                <span>Ver secciones verticales (PDF)</span>
              </a>
            </div>
          </div>

          {/* ── Stat grid ───────────────────────────────────────────────────── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {[
              { val: 'Invisible', label: 'Estructura' },
              { val: 'Premium', label: 'Estética', highlight: true },
              { val: 'Grapas en Z', label: 'Sistema' },
              { val: 'Superior', label: 'Gama' },
            ].map(({ val, label, highlight }) => (
              <div key={label} className={`rounded-xl p-4 text-center border ${highlight ? 'bg-crema border-rojo' : 'bg-crema border-gris-claro'}`}>
                <p className="font-montserrat text-xl font-extrabold text-carbon">{val}</p>
                <p className="text-[11px] text-gris-medio mt-1">{label}</p>
              </div>
            ))}
          </div>

          {/* ── Características (Distribuidas en 2 columnas) ───────────────── */}
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-0 items-start mb-10">
            <div className="md:col-span-2">
              <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5">Características técnicas</h2>
            </div>
            <div className="space-y-3">
              {features.slice(0, 4).map(f => (
                <div key={f} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-rojo flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm text-gris-medio">{f}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {features.slice(4).map(f => (
                <div key={f} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-rojo flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm text-gris-medio">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Módulos disponibles ─────────────────────────────────────────── */}
          <div className="mb-14">
            <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5">Módulos disponibles</h2>
            <p className="text-sm text-gris-medio mb-6">
              El sistema UR-902 permite resolver cualquier necesidad funcional y arquitectónica mediante una extensa 
              gama de módulos combinables e intercambiables entre sí con acabados integrales.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Módulo Ciego', desc: 'Paneles opacos doble cara para máxima privacidad.' },
                { name: 'Módulo Mixto', desc: 'Sólido inferior y panel acristalado superior.' },
                { name: 'Acristalado', desc: 'Vidrios simples o dobles de suelo a techo.' },
                { name: 'Puertas', desc: 'Ciegas o de cristal, simples o dobles.' },
              ].map(mod => (
                <div key={mod.name} className="bg-crema border border-gris-claro rounded-xl p-5 hover:border-rojo/30 transition-colors">
                  <p className="font-montserrat font-bold text-carbon text-[13px] mb-1.5">{mod.name}</p>
                  <p className="text-gris-medio text-[12px] leading-relaxed">{mod.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Comparativa ─────────────────────────────────────────────────── */}
          <div className="mb-10">
            <p className="text-[11px] uppercase tracking-wider font-montserrat text-gris-medio mb-5">
              Rendimiento frente a los otros sistemas UR
            </p>

            {[
              {
                label: 'Aislamiento térmico-acústico',
                rows: [
                  { series: 'UR-802', pct: '80%', val: 'Alta', current: false, delay: '0s' },
                  { series: 'UR-803', pct: '65%', val: 'Media-alta', current: false, delay: '0.1s' },
                  { series: 'UR-902', pct: '80%', val: 'Alta', current: true, delay: '0.2s' },
                ],
              },
              {
                label: 'Facilidad de montaje',
                rows: [
                  { series: 'UR-802', pct: '70%', val: 'Media', current: false, delay: '0s' },
                  { series: 'UR-803', pct: '90%', val: 'Alta', current: false, delay: '0.1s' },
                  { series: 'UR-902', pct: '75%', val: 'Media-alta', current: true, delay: '0.2s' },
                ],
              },
              {
                label: 'Discreción estética',
                rows: [
                  { series: 'UR-802', pct: '50%', val: 'Media', current: false, delay: '0s' },
                  { series: 'UR-803', pct: '45%', val: 'Media', current: false, delay: '0.1s' },
                  { series: 'UR-902', pct: '95%', val: 'Máxima', current: true, delay: '0.2s' },
                ],
              },
            ].map(({ label, rows }) => (
              <div key={label} className="mb-5">
                <p className="text-[11px] font-montserrat font-semibold text-carbon mb-2">{label}</p>
                <div className="space-y-2">
                  {rows.map(({ series, pct, val, current, delay }) => (
                    <div key={series} className="flex items-center gap-3">
                      <span className={`w-14 text-[12px] font-montserrat font-bold ${current ? 'text-carbon' : 'text-gris-medio'}`}>
                        {series}
                      </span>
                      <div className="flex-1 bg-gris-claro h-1.5 rounded-full">
                        <div
                          className={`h-1.5 rounded-full bar-grow ${current ? 'bg-rojo' : 'bg-arena'}`}
                          style={{ width: pct, animationDelay: delay }}
                        />
                      </div>
                      <span className={`w-24 text-right text-[11px] font-montserrat font-bold ${current ? 'text-carbon font-bold' : 'text-gris-medio'}`}>
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

          {/* ── Acabados disponibles ─────────────────────────────────────────── */}
          <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-6 mt-12 border-t border-gris-claro pt-10">Acabados disponibles</h2>
          
          <div className="flex flex-col gap-6 mb-10">
            {/* TOP ROW */}
            <div className="grid lg:grid-cols-[auto_1fr] gap-6">
              
              {/* Estándar */}
              <div className="flex flex-col max-w-sm mx-auto lg:mx-0">
                <div className="bg-carbon text-white text-center py-2 px-8 font-montserrat text-[11px] font-semibold tracking-widest uppercase rounded-t-md w-full">
                  Estándar
                </div>
                <div className="flex gap-4 justify-center items-center bg-white border border-t-0 border-gris-claro rounded-b-md p-6">
                  {coloresEstandar.map(c => (
                    <div key={c.name} className="flex flex-col items-center">
                      <div
                        style={{ background: c.hex }}
                        className={`w-12 h-12 rounded shadow-sm ${c.border ? 'border border-gray-200' : ''}`}
                      />
                      <p className="text-[9px] font-montserrat text-carbon text-center mt-2 font-bold max-w-[48px] leading-tight">{c.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Otros (RAL) */}
              <div className="flex flex-col">
                <div className="bg-carbon text-white text-center py-2 px-8 font-montserrat text-[11px] font-semibold tracking-widest uppercase rounded-t-md w-full">
                  Otros (RAL)
                </div>
                <div className="flex justify-center items-center bg-white border border-t-0 border-gris-claro rounded-b-md p-6">
                  <div className="grid grid-cols-[repeat(12,minmax(0,1fr))] gap-2 sm:gap-3 w-fit">
                    {coloresRal.map((hex, idx) => (
                      <div
                        key={idx}
                        style={{ backgroundColor: hex }}
                        className="w-4 h-4 sm:w-6 sm:h-6 rounded-sm shadow-[inset_0_0_2px_rgba(0,0,0,0.1)]"
                        title={`Color RAL ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM ROW */}
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Maderas */}
              <div className="flex flex-col">
                <div className="bg-carbon text-white text-center py-2 px-8 font-montserrat text-[11px] font-semibold tracking-widest uppercase rounded-t-md w-full">
                  Maderas
                </div>
                <div className="flex gap-4 sm:gap-6 justify-center bg-white border border-t-0 border-gris-claro rounded-b-md p-6 h-full items-center">
                  {maderas.map(c => (
                    <div key={c.name} className="flex flex-col items-center">
                      <div
                        style={{ background: c.hex }}
                        className={`w-12 h-20 sm:w-16 sm:h-24 rounded shadow-md ${c.border ? 'border border-gray-200' : ''}`}
                      />
                      <p className="text-[9px] sm:text-[10px] font-montserrat text-carbon text-center mt-2 font-bold max-w-[60px] uppercase">{c.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Monocolores */}
              <div className="flex flex-col">
                <div className="bg-carbon text-white text-center py-2 px-8 font-montserrat text-[11px] font-semibold tracking-widest uppercase rounded-t-md w-full">
                  Monocolores
                </div>
                <div className="flex gap-4 sm:gap-6 justify-center bg-white border border-t-0 border-gris-claro rounded-b-md p-6 h-full items-center">
                  {monocolores.map(c => (
                    <div key={c.name} className="flex flex-col items-center">
                      <div
                        style={{ backgroundColor: c.hex }}
                        className={`w-12 h-20 sm:w-16 sm:h-24 rounded shadow-md ${c.border ? 'border border-gray-200' : ''}`}
                      />
                      <p className="text-[9px] sm:text-[10px] font-montserrat text-carbon text-center mt-2 font-bold max-w-[60px] uppercase leading-tight">{c.name}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ── Sidebar ──────────────────────────────────────────────────────── */}
        <div className="lg:sticky lg:top-20 h-fit space-y-4">
          <div className="bg-crema rounded-xl p-6 border border-gris-claro shadow-sm">
            <h3 className="font-montserrat text-base font-bold text-carbon mb-2">
              ¿Es el UR-902 para tu proyecto?
            </h3>
            <p className="text-sm text-gris-medio mb-5">
              Si la estética del espacio es prioritaria, el UR-902 ofrece perfilería oculta con las mismas prestaciones que el UR-802.
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
            {[
              { label: 'UR-802', sub: 'Alta prestación', href: '/mamparas-oficina/ur-802' },
              { label: 'UR-803', sub: 'El más demandado', href: '/mamparas-oficina/ur-803' },
              { label: 'Cristal Visión I+II', sub: 'Transparencia total', href: '/mamparas-oficina/cristal-vision' },
              { label: 'SLIM', sub: 'Mínimo perfil', href: '/mamparas-oficina/slim' },
              { label: 'Tabique Armario', sub: 'Mueble divisorio', href: '/mamparas-oficina/tabique-armario' },
              { label: 'Volver al catálogo', sub: 'Mamparas de Oficina', href: '/mamparas-oficina' },
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
