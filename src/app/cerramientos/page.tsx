import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Sun, CloudRain, Wind, Maximize2, Thermometer } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'

export const metadata: Metadata = buildMetadata({
  title: "Cerramientos de Terraza y Galería en Bilbao | Comercial MAR'O",
  description:
    'Cerramientos acristalados para terrazas, galerías y patios en Bilbao y Vizcaya. Sistemas correderos sin marco, con marco y plegables. Amplía tu espacio habitable.',
  keywords: [
    'cerramientos terraza Bilbao',
    'acristalamiento galería Vizcaya',
    'cerramiento corredera sin marco',
    'porche acristalado Bilbao',
    'cerramiento patio aluminio',
  ],
  path: '/cerramientos',
})

const features = [
  'Sistemas sin marco: vidrio de suelo a techo con la mínima perfilería visible',
  'Vidrio templado de seguridad de 8 mm — homologado según EN 12150',
  'Sistemas plegables: apertura total del cerramiento en segundos',
  'Sistemas correderos con canal inferior oculto para suelo continuo',
  'Perfiles de aluminio anodizado o lacado en cualquier color RAL',
  'Opcional: integración de cortinas, screens o doble acristalamiento',
  'Instalación sin obra: anclaje a suelo, techo y paredes existentes',
]

const specs: [string, string][] = [
  ['Vidrio estándar', 'Templado 8 mm de seguridad'],
  ['Vidrio premium', 'Laminado 4+4 o 6+6 (acústico)'],
  ['Altura máxima', 'Hasta 3 m sin refuerzo intermedio'],
  ['Ancho máximo hoja', '120 cm (corredera) / 80 cm (plegable)'],
  ['Perfilería', 'Aluminio anodizado o lacado Qualicoat'],
  ['Estanqueidad', 'Juntas de cepillo en todo el perímetro'],
  ['Apertura', 'Corredera, plegable o fija según sistema'],
]

const systems = [
  {
    name: 'Corredera Sin Marco',
    badge: 'Más luminoso',
    badgeStyle: 'bg-rojo text-white',
    desc: 'El sistema más demandado. Paneles de vidrio templado que se deslizan sobre rieles superiores e inferiores. Sin montantes verticales entre hojas, ofrece la vista más despejada y la mayor entrada de luz.',
    pros: ['Vista despejada total', 'Hasta 6 m de apertura', 'Rieles casi invisibles'],
  },
  {
    name: 'Corredera Con Marco',
    badge: 'Mayor aislamiento',
    badgeStyle: 'bg-arena/20 text-arena',
    desc: 'Perfilería perimetral en aluminio con RPT. Mejor estanqueidad al aire y al agua que el sistema sin marco. Recomendado para estancias orientadas al norte o expuestas al viento dominante del Cantábrico.',
    pros: ['RPT disponible', 'Alta estanqueidad', 'Doble acristalamiento'],
  },
  {
    name: 'Plegable',
    badge: 'Apertura total',
    badgeStyle: 'bg-arena/20 text-arena',
    desc: 'Las hojas se pliegan en acordeón dejando el hueco completamente libre. Ideal para terrazas donde se quiere eliminar completamente la barrera entre el interior y el exterior en días buenos.',
    pros: ['100% de apertura', 'Paneles 60-80 cm', 'Sin espacio residual'],
  },
]

const useCases = [
  { name: 'Terraza de piso', desc: 'Convierte tu terraza en un salón exterior usable todo el año, protegido del viento y la lluvia atlántica.' },
  { name: 'Galería', desc: 'Moderniza la galería tradicional bilbaína con acristalamiento contemporáneo que respeta la estética del edificio.' },
  { name: 'Porche / Pérgola', desc: 'Cierra lateralmente un porche o pérgola existente para ganar un espacio cubierto y confortable.' },
  { name: 'Patio interior', desc: 'Acondiciona un patio cubierto como zona de estar, office o jardín interior protegido de las inclemencias.' },
]

export default function CerramientosPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="relative h-[40vh] min-h-48 flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=1200&q=80"
          alt="Cerramiento acristalado de terraza en Bilbao"
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
            <span className="text-white" aria-current="page">Cerramientos</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-arena/20 border border-arena/40 text-arena text-[10px] font-montserrat font-bold tracking-[3px] uppercase px-3 py-1 rounded-full">
              Amplía tu espacio
            </span>
          </div>
          <h1 className="font-montserrat text-3xl font-extrabold text-white leading-tight">
            Cerramientos de Terraza y Galería
          </h1>
        </div>
      </div>

      <div className="max-w-site mx-auto px-6 py-14 grid lg:grid-cols-[1fr_300px] gap-12">
        <div>
          {/* ── Intro ──────────────────────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
            <div>
              <p className="text-gris-medio text-base leading-relaxed mb-4">
                Un cerramiento acristalado es la forma más efectiva de <strong className="text-carbon font-semibold">ampliar la superficie habitable</strong> de tu vivienda sin obra mayor. Transforma tu terraza, galería o porche en un espacio luminoso, protegido del viento y usable durante los doce meses del año, especialmente valioso en el clima atlántico de Bilbao.
              </p>
              <p className="text-gris-medio text-base leading-relaxed">
                En <strong className="text-carbon font-semibold">Comercial MAR&apos;O</strong> instalamos cerramientos con <strong className="text-carbon font-semibold">vidrio templado de seguridad</strong>, perfilería de aluminio y sistemas de apertura diseñados para resistir el viento y la lluvia del Cantábrico sin perder ni un milímetro de luz.
              </p>
            </div>
            <div className="img-zoom-wrap shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80"
                alt="Terraza acristalada con sistema corredera sin marco"
                width={800}
                height={600}
                className="w-full h-auto object-cover img-zoom img-reveal"
              />
            </div>
          </div>

          {/* ── Stats ───────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
            {[
              { val: '12 meses', label: 'Uso todo el año' },
              { val: '8 mm', label: 'Vidrio templado', highlight: true },
              { val: 'Sin marco', label: 'Máxima luz' },
              { val: '6 m', label: 'Apertura máxima' },
            ].map(({ val, label, highlight }) => (
              <div key={label} className={`rounded-xl p-4 text-center border ${highlight ? 'bg-crema border-rojo' : 'bg-crema border-gris-claro'}`}>
                <p className="font-montserrat text-lg font-extrabold text-carbon tracking-tight">{val}</p>
                <p className="text-[11px] text-gris-medio mt-1 font-semibold uppercase tracking-tighter">{label}</p>
              </div>
            ))}
          </div>

          {/* ── Sistemas ────────────────────────────────────────────────────── */}
          <section className="mb-14">
            <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5 uppercase tracking-tighter">
              Sistemas disponibles
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {systems.map(s => (
                <div key={s.name} className="flex flex-col bg-white border border-gris-claro rounded-xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <div className="h-[3px] w-full bg-arena flex-shrink-0" />
                  <div className="p-5 flex flex-col flex-1">
                    <span className={`inline-block text-[10px] font-montserrat font-bold tracking-wider uppercase px-2.5 py-1 rounded-full mb-3 w-fit ${s.badgeStyle}`}>
                      {s.badge}
                    </span>
                    <h3 className="font-montserrat text-[14px] font-extrabold text-carbon mb-2">{s.name}</h3>
                    <p className="text-[12px] text-gris-medio leading-relaxed mb-4 flex-1">{s.desc}</p>
                    <div className="space-y-1.5">
                      {s.pros.map(p => (
                        <div key={p} className="flex items-center gap-2">
                          <CheckCircle2 size={12} className="text-rojo flex-shrink-0" aria-hidden="true" />
                          <span className="text-[11px] text-gris-medio font-montserrat">{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Usos / Aplicaciones ─────────────────────────────────────────── */}
          <section className="mb-14">
            <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5 uppercase tracking-tighter">
              Aplicaciones
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {useCases.map(u => (
                <div key={u.name} className="bg-crema border border-gris-claro rounded-xl p-5 hover:border-rojo/30 transition-colors">
                  <p className="font-montserrat font-bold text-carbon text-[13px] mb-1.5 uppercase tracking-tight">{u.name}</p>
                  <p className="text-gris-medio text-[12px] leading-relaxed">{u.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Características ─────────────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
            <div>
              <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5 uppercase tracking-tighter">
                Características técnicas
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
                alt="Interior de espacio cerrado con acristalamiento"
                width={800}
                height={600}
                className="w-full h-auto object-cover img-zoom"
              />
            </div>
          </div>

          {/* ── Ficha técnica ───────────────────────────────────────────────── */}
          <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5 uppercase tracking-tighter">
            Especificaciones técnicas
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
              { Icon: CloudRain, label: 'Protección total', desc: 'Estanqueidad frente a la lluvia y el viento del Cantábrico.' },
              { Icon: Sun, label: 'Máxima luz', desc: 'Sistemas sin marco que no reducen la luminosidad natural.' },
              { Icon: Thermometer, label: 'Confort térmico', desc: 'Opcional con RPT y doble vidrio para mayor aislamiento.' },
              { Icon: Wind, label: 'Anti-viento', desc: 'Vidrio templado de 8 mm resistente a viento de hasta 120 km/h.' },
              { Icon: Maximize2, label: 'Apertura total', desc: 'Los sistemas plegables abren el 100% del hueco.' },
              { Icon: CheckCircle2, label: 'Sin obra', desc: 'Instalación sobre la estructura existente. Sin afectar al forjado.' },
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
              ¿Cuánto mide tu terraza?
            </h3>
            <p className="text-sm text-gris-medio mb-5 leading-relaxed">
              Calculamos el sistema óptimo para tu espacio. Visita gratuita, medición exacta y presupuesto detallado en 48 horas.
            </p>
            <PresupuestoButton size="lg" className="w-full justify-center" />
            <div className="mt-4 pt-4 border-t border-gris-claro text-sm text-gris-medio font-montserrat space-y-1.5">
              {['Visita y medición gratuita', 'Fabricación a medida', 'Instalación sin obra mayor'].map(item => (
                <p key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-rojo flex-shrink-0" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-gris-claro">
            <p className="font-montserrat text-[10px] font-bold tracking-[2px] uppercase text-gris-medio mb-3">
              Productos relacionados
            </p>
            <div className="space-y-0">
              {[
                { label: 'Ventanas Aluminio RPT', href: '/ventanas-aluminio' },
                { label: 'Barandillas y Celosías', href: '/barandillas' },
                { label: 'Cortinas y Estores', href: '/cortinas-estores' },
                { label: 'Cerramientos Fenólicos', href: '/cerramientos-fenolicos' },
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
