import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Palette, Thermometer, Volume2, Shield, Maximize2 } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'

export const metadata: Metadata = buildMetadata({
  title: "Puertas y Ventanas de Aluminio en Bilbao | Comercial MAR'O",
  description:
    'Carpintería de aluminio con rotura de puente térmico: sistemas Cortizo, Reynaers y Technal. Marcos ultra-finos, bicolor y compatibles con Passivhaus. Instalación en Bilbao y Vizcaya.',
  keywords: [
    'ventanas aluminio Bilbao',
    'puertas aluminio Vizcaya',
    'aluminio rotura puente térmico',
    'Cortizo Reynaers Technal Bilbao',
    'ventanas aluminio RPT',
  ],
  path: '/ventanas-aluminio',
})

const features = [
  'Rotura de puente térmico (RPT) en toda la gama — sin condensaciones en el marco',
  'Perfiles de hasta 40 mm de vista exterior para máxima entrada de luz',
  'Lacado Qualicoat: más de 30 años sin repintado en cualquier color RAL',
  'Bicolor estándar: diferente acabado interior y exterior en la misma ventana',
  'Compatible con triple acristalamiento para certificación Passivhaus',
  'Refuerzo estructural en acero galvanizado integrado en el perfil',
  'Herrajes de alta seguridad con certificación RC2 disponibles en toda la gama',
]

const specs: [string, string][] = [
  ['Material', 'Aluminio extruido 6063 T5'],
  ['Tratamiento térmico', 'Rotura de puente térmico (RPT)'],
  ['Uf marco típico', '1,0 – 1,6 W/m²K'],
  ['Uw conjunto típico', '0,7 – 1,4 W/m²K'],
  ['Aislamiento acústico', 'Hasta 42 dB (Rw)'],
  ['Permeabilidad al aire', 'Clase 4 (máxima EN 12207)'],
  ['Estanqueidad al agua', 'Clase E900 (EN 12208)'],
  ['Resistencia al viento', 'Clase C5 (EN 12210)'],
]

const systems = [
  {
    brand: 'Cortizo',
    color: '#E30613',
    series: 'Serie 4600 / 6000',
    desc: 'La referencia en el mercado español. Perfiles con RPT de 25 a 32 mm, diseño esbelto y amplia gama de accesorios para obra nueva y rehabilitación.',
    tags: ['Marco fino', 'Alta gama', 'Passivhaus compatible'],
  },
  {
    brand: 'Reynaers',
    color: '#003366',
    series: 'CS 68 / CS 86',
    desc: 'Sistema belga con presencia en más de 50 países. El CS 86 alcanza Uf de 0,97 W/m²K, siendo una de las soluciones de aluminio con mejor comportamiento energético del mercado.',
    tags: ['Premium', 'Uf 0,97', 'Certificado Passive House'],
  },
  {
    brand: 'Technal',
    color: '#003087',
    series: 'Unicity / Brio',
    desc: 'Línea arquitectónica con perfiles de hasta 87 mm de profundidad. Especialmente valorada en proyectos singulares por su estética depurada y la versatilidad de sus secciones.',
    tags: ['Arquitectónico', 'Gran formato', 'Diseño singular'],
  },
]

const openingTypes = [
  { name: 'Oscilobatiente', desc: 'Apertura total y microventilación en basculación. La más elegida en vivienda.' },
  { name: 'Corredera', desc: 'Ideal para conexiones con terraza. Hasta 6 m de ancho sin estructuras intermedias.' },
  { name: 'Paralela-elevable', desc: 'Estanqueidad de oscilobatiente con formato corredera. Sistema premium.' },
  { name: 'Pivotante', desc: 'Giro sobre eje vertical u horizontal. Diseño singular para espacios diáfanos.' },
  { name: 'Fija', desc: 'Máxima transmisión de luz. Marco mínimo, vidrio máximo.' },
  { name: 'Plegable', desc: 'Abertura total del hueco. Perfecta para terrazas y celosías.' },
]

export default function VentanasAluminioPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="relative h-[40vh] min-h-48 flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
          alt="Ventanas y puertas de aluminio con rotura de puente térmico"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-carbon/72" />
        <div className="relative z-10 px-6 pb-8 max-w-site mx-auto w-full">
          <nav aria-label="Ruta de navegación" className="text-white/60 text-[12px] font-montserrat mb-2">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            {' / '}
            <span className="text-white" aria-current="page">Puertas y Ventanas Aluminio</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-arena/20 border border-arena/40 text-arena text-[10px] font-montserrat font-bold tracking-[3px] uppercase px-3 py-1 rounded-full">
              Aluminio RPT
            </span>
          </div>
          <h1 className="font-montserrat text-3xl font-extrabold text-white leading-tight">
            Puertas y Ventanas de Aluminio
          </h1>
        </div>
      </div>

      <div className="max-w-site mx-auto px-6 py-14 grid lg:grid-cols-[1fr_300px] gap-12">
        <div>
          {/* ── Intro ──────────────────────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
            <div>
              <p className="text-gris-medio text-base leading-relaxed mb-4">
                El aluminio con <strong className="text-carbon font-semibold">rotura de puente térmico (RPT)</strong> es la solución de referencia para viviendas, edificios de oficinas y rehabilitaciones que exigen un equilibrio perfecto entre diseño, durabilidad y eficiencia energética.
              </p>
              <p className="text-gris-medio text-base leading-relaxed">
                En <strong className="text-carbon font-semibold">Comercial MAR&apos;O</strong> trabajamos con los tres grandes fabricantes europeos —<strong className="text-carbon font-semibold">Cortizo, Reynaers y Technal</strong>— como instaladores certificados, lo que nos da acceso a sus gamas técnicas completas, formación continua y garantía de fabricante sobre cada sistema instalado.
              </p>
            </div>
            <div className="img-zoom-wrap shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Ventana de aluminio con marco fino en vivienda moderna"
                width={800}
                height={600}
                className="w-full h-auto object-cover img-zoom img-reveal"
              />
            </div>
          </div>

          {/* ── Stats ───────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {[
              { val: '40+ años', label: 'Durabilidad' },
              { val: '42 dB', label: 'Aislamiento acústico', highlight: true },
              { val: 'Uw 0,7', label: 'Mejor valor térmico' },
              { val: 'Bicolor', label: 'Interior / Exterior' },
            ].map(({ val, label, highlight }) => (
              <div key={label} className={`rounded-xl p-4 text-center border ${highlight ? 'bg-crema border-rojo' : 'bg-crema border-gris-claro'}`}>
                <p className="font-montserrat text-lg font-extrabold text-carbon tracking-tight">{val}</p>
                <p className="text-[11px] text-gris-medio mt-1 font-semibold uppercase tracking-tighter">{label}</p>
              </div>
            ))}
          </div>

          {/* ── Sistemas / Fabricantes ──────────────────────────────────────── */}
          <section className="mb-14">
            <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5 uppercase tracking-tighter">
              Sistemas certificados
            </h2>
            <p className="text-sm text-gris-medio mb-6">
              Cada fabricante ofrece un enfoque diferente. Seleccionamos el sistema más adecuado para cada proyecto según sus exigencias técnicas, estéticas y presupuestarias.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {systems.map(s => (
                <div key={s.brand} className="bg-white border border-gris-claro rounded-xl p-5 hover:border-rojo/30 hover:shadow-md transition-all duration-200">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="font-montserrat text-lg font-black"
                      style={{ color: s.color }}
                    >
                      {s.brand}
                    </span>
                    <span className="text-[10px] font-montserrat text-gris-medio font-semibold">{s.series}</span>
                  </div>
                  <p className="text-[12px] text-gris-medio leading-relaxed mb-3">{s.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map(t => (
                      <span key={t} className="bg-arena/20 text-arena text-[10px] font-montserrat font-bold px-2.5 py-0.5 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Tipos de apertura ───────────────────────────────────────────── */}
          <section className="mb-14">
            <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5 uppercase tracking-tighter">
              Tipos de apertura
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {openingTypes.map(o => (
                <div key={o.name} className="bg-crema border border-gris-claro rounded-xl p-4 hover:border-rojo/30 transition-colors">
                  <p className="font-montserrat font-bold text-carbon text-[13px] mb-1 uppercase tracking-tight">{o.name}</p>
                  <p className="text-gris-medio text-[12px] leading-relaxed">{o.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Características ─────────────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
            <div>
              <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5 uppercase tracking-tighter">
                Por qué elegir aluminio
              </h2>
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
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Fachada acristalada con perfiles de aluminio"
                width={800}
                height={600}
                className="w-full h-auto object-cover img-zoom"
              />
            </div>
          </div>

          {/* ── Ficha técnica ───────────────────────────────────────────────── */}
          <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5 uppercase tracking-tighter">
            Especificaciones técnicas de referencia
          </h2>
          <div className="rounded-xl border border-gris-claro overflow-hidden mb-10">
            {specs.map(([label, value], i) => (
              <div key={label} className={`flex justify-between items-center px-5 py-3 text-sm ${i % 2 === 0 ? 'bg-crema' : 'bg-white'}`}>
                <span className="text-gris-medio font-montserrat">{label}</span>
                <span className="font-montserrat font-semibold text-carbon text-right">{value}</span>
              </div>
            ))}
          </div>

          {/* ── Iconos ventajas ─────────────────────────────────────────────── */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10">
            {[
              { Icon: Thermometer, label: 'Eficiencia térmica', desc: 'RPT en toda la gama. Sin condensaciones ni puentes fríos.' },
              { Icon: Volume2, label: 'Confort acústico', desc: 'Hasta 42 dB de atenuación con vidrio laminado acústico.' },
              { Icon: Shield, label: 'Alta seguridad', desc: 'Herrajes certificados RC2 disponibles para todos los sistemas.' },
              { Icon: Palette, label: 'Acabado bicolor', desc: 'Color exterior e interior independientes. Más de 200 RAL.' },
              { Icon: Maximize2, label: 'Marco ultra-fino', desc: 'Vista exterior desde 40 mm. Máxima entrada de luz.' },
              { Icon: CheckCircle2, label: '30+ años sin repintar', desc: 'Lacado Qualicoat resistente a UV, lluvia y agentes marinos.' },
            ].map(({ Icon, label, desc }) => (
              <div key={label} className="flex flex-col gap-2 p-4 bg-crema border border-gris-claro rounded-xl">
                <Icon size={20} className="text-rojo" aria-hidden="true" />
                <p className="font-montserrat text-[13px] font-bold text-carbon">{label}</p>
                <p className="text-[11px] text-gris-medio leading-snug">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Sidebar ──────────────────────────────────────────────────────── */}
        <div className="lg:sticky lg:top-20 h-fit space-y-4">
          <div className="bg-crema rounded-xl p-6 border border-gris-claro shadow-sm">
            <h3 className="font-montserrat text-base font-bold text-carbon mb-2 leading-tight">
              Solicita presupuesto sin compromiso
            </h3>
            <p className="text-sm text-gris-medio mb-5 leading-relaxed">
              Visitamos tu vivienda, medimos cada hueco y te presentamos un presupuesto detallado con especificaciones técnicas completas en 48 horas.
            </p>
            <PresupuestoButton size="lg" className="w-full justify-center" />
            <div className="mt-4 pt-4 border-t border-gris-claro text-sm text-gris-medio font-montserrat space-y-1.5">
              {['Medición gratuita a domicilio', 'Instaladores certificados', 'Garantía de fabricante incluida'].map(item => (
                <p key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-rojo flex-shrink-0" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-gris-claro">
            <p className="font-montserrat text-[10px] font-bold tracking-[2px] uppercase text-gris-medio mb-3">
              Otros productos
            </p>
            <div className="space-y-0">
              {[
                { label: 'Ventanas PVC Ecoven Plus', href: '/ventanas-pvc' },
                { label: 'Cerramientos de terraza', href: '/cerramientos' },
                { label: 'Mamparas de Oficina', href: '/mamparas-oficina' },
                { label: 'Cortinas y Estores', href: '/cortinas-estores' },
              ].map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between py-2.5 border-b border-gris-claro last:border-0 hover:bg-crema -mx-1 px-1 rounded transition-colors"
                >
                  <p className="font-montserrat text-[13px] font-semibold text-carbon group-hover:text-rojo transition-colors">
                    {item.label}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
