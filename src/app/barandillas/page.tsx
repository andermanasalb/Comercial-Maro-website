import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Shield, Palette, Wind, Sun, Wrench } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'

export const metadata: Metadata = buildMetadata({
  title: "Barandillas, Celosías y Mallorquinas en Bilbao | Comercial MAR'O",
  description:
    'Barandillas de aluminio y vidrio, celosías orientables y mallorquinas para fachadas y terrazas en Bilbao y Vizcaya. Fabricación a medida e instalación profesional.',
  keywords: [
    'barandillas aluminio Bilbao',
    'barandillas vidrio terraza Vizcaya',
    'celosías aluminio orientables',
    'mallorquinas aluminio Bilbao',
    'barandillas escalera fachada',
  ],
  path: '/barandillas',
})

const features = [
  'Perfilería de aluminio extruido 6063 T5 con tratamiento de superficie Qualicoat',
  'Vidrio laminado 4+4 o 5+5 mm en barandillas acristaladas — sin riesgo de rotura fragmentada',
  'Certificación CE conforme a EN 1337 y CTE DB-SE para cargas en barandillas',
  'Celosías con lamas orientables manualmente o con sistema motorizado Somfy',
  'Mallorquinas con lamas de aluminio extruido fijas o regulables en ángulo',
  'Anclaje a suelo, frente o lateral según el tipo de forjado',
  'Disponibles en todos los colores RAL, anodizado plata, champán y bronce',
]

const specs: [string, string][] = [
  ['Material', 'Aluminio extruido 6063 T5'],
  ['Vidrio barandilla', 'Laminado 4+4 o 5+5 mm (VSG)'],
  ['Carga normativa', 'Hasta 1,5 kN/m lineal (CTE)'],
  ['Altura estándar', '100 cm (terraza) / 90 cm (interior)'],
  ['Separación montantes', 'Máx. 120 cm según carga'],
  ['Acabado', 'Qualicoat o anodizado clase 20'],
  ['Lamas celosía / mallorquina', 'Aluminio 68-80 mm de anchura'],
]

const products = [
  {
    name: 'Barandilla de Aluminio',
    badge: 'Clásica',
    badgeStyle: 'bg-arena/20 text-arena',
    desc: 'Montantes verticales en aluminio con pasamanos superior y travesaño inferior. Infill con vidrio, cable de acero, chapa perforada o listones horizontales. Perfecta para terrazas, balcones y escaleras interiores y exteriores.',
    tags: ['Ligera', 'Anticorrosión', 'Fácil limpieza'],
  },
  {
    name: 'Barandilla de Vidrio',
    badge: 'Más luminosa',
    badgeStyle: 'bg-rojo text-white',
    desc: 'Sistema con perfiles mínimos y paneles de vidrio laminado 4+4 o 5+5 mm. Disponible en versión con pasamanos superior o totalmente sin perfil visto (sistema sky-line). Máxima sensación de espacio y luz en terrazas y escaleras.',
    tags: ['Sin obstáculos visuales', 'VSG laminado', 'Sistema sky-line'],
  },
  {
    name: 'Celosía Orientable',
    badge: 'Control de privacidad',
    badgeStyle: 'bg-arena/20 text-arena',
    desc: 'Lamas de aluminio extruido de 68-100 mm orientables manualmente o mediante actuador motorizado Somfy. Permiten regular la entrada de luz y la privacidad de terrazas, patios y fachadas sin renunciar a la ventilación.',
    tags: ['Motorizable', 'Regulación de luz', 'Sin mantenimiento'],
  },
  {
    name: 'Mallorquina',
    badge: 'Tradición y modernidad',
    badgeStyle: 'bg-arena/20 text-arena',
    desc: 'Persiana exterior de lamas de aluminio fijas o regulables. Se instala directamente en el frente o lateral del hueco como contraventa. Protección solar y de lluvia, con estética traditional reformulada en aluminio lacado.',
    tags: ['Contraventa exterior', 'Protección solar', 'Lamas regulables'],
  },
]

export default function BarandillasPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="relative h-[40vh] min-h-48 flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200&q=80"
          alt="Barandillas y celosías de aluminio en terraza moderna"
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
            <span className="text-white" aria-current="page">Barandillas, Celosías y Mallorquinas</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-arena/20 border border-arena/40 text-arena text-[10px] font-montserrat font-bold tracking-[3px] uppercase px-3 py-1 rounded-full">
              Seguridad y Diseño
            </span>
          </div>
          <h1 className="font-montserrat text-3xl font-extrabold text-white leading-tight">
            Barandillas, Celosías y Mallorquinas
          </h1>
        </div>
      </div>

      <div className="max-w-site mx-auto px-6 py-14 grid lg:grid-cols-[1fr_300px] gap-12">
        <div>
          {/* ── Intro ──────────────────────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
            <div>
              <p className="text-gris-medio text-base leading-relaxed mb-4">
                Las barandillas, celosías y mallorquinas son elementos que combinan <strong className="text-carbon font-semibold">seguridad, funcionalidad y estética</strong> en una sola solución. En aluminio lacado, ofrecen una durabilidad excepcional frente a la humedad y el salitre, sin necesidad de pintura ni mantenimiento periódico.
              </p>
              <p className="text-gris-medio text-base leading-relaxed">
                En <strong className="text-carbon font-semibold">Comercial MAR&apos;O</strong> fabricamos e instalamos a medida cada elemento: desde barandillas con vidrio laminado para terrazas hasta celosías orientables motorizadas para fachadas o cerramiento de patios, siempre cumpliendo con el <strong className="text-carbon font-semibold">CTE DB-SE y las normativas de seguridad aplicables</strong>.
              </p>
            </div>
            <div className="img-zoom-wrap shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Barandilla de vidrio en terraza con vistas"
                width={800}
                height={600}
                className="w-full h-auto object-cover img-zoom img-reveal"
              />
            </div>
          </div>

          {/* ── Stats ───────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
            {[
              { val: 'CTE', label: 'Certificación' },
              { val: 'VSG 4+4', label: 'Vidrio laminado', highlight: true },
              { val: '100%', label: 'A medida' },
              { val: '30+ años', label: 'Sin repintar' },
            ].map(({ val, label, highlight }) => (
              <div key={label} className={`rounded-xl p-4 text-center border ${highlight ? 'bg-crema border-rojo' : 'bg-crema border-gris-claro'}`}>
                <p className="font-montserrat text-lg font-extrabold text-carbon tracking-tight">{val}</p>
                <p className="text-[11px] text-gris-medio mt-1 font-semibold uppercase tracking-tighter">{label}</p>
              </div>
            ))}
          </div>

          {/* ── Productos ───────────────────────────────────────────────────── */}
          <section className="mb-14">
            <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5 uppercase tracking-tighter">
              Gama de productos
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {products.map(p => (
                <div key={p.name} className="flex flex-col bg-white border border-gris-claro rounded-xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <div className="h-[3px] w-full bg-arena flex-shrink-0" />
                  <div className="p-5 flex flex-col flex-1">
                    <span className={`inline-block text-[10px] font-montserrat font-bold tracking-wider uppercase px-2.5 py-1 rounded-full mb-3 w-fit ${p.badgeStyle}`}>
                      {p.badge}
                    </span>
                    <h3 className="font-montserrat text-[14px] font-extrabold text-carbon mb-2">{p.name}</h3>
                    <p className="text-[12px] text-gris-medio leading-relaxed mb-4 flex-1">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map(t => (
                        <span key={t} className="bg-arena/20 text-arena text-[10px] font-montserrat font-bold px-2.5 py-0.5 rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
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
                src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=80"
                alt="Celosía de aluminio orientable en fachada"
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
              { Icon: Shield, label: 'Certificada CTE', desc: 'Cumplimiento normativo para cargas en barandillas y elementos de fachada.' },
              { Icon: Palette, label: 'Cualquier RAL', desc: 'Lacado Qualicoat en más de 200 colores. Acabado bicolor disponible.' },
              { Icon: Sun, label: 'Control solar', desc: 'Celosías orientables para regular la radiación solar en cualquier fachada.' },
              { Icon: Wind, label: 'Anti-viento', desc: 'Perfiles reforzados para zonas con exposición al viento del Cantábrico.' },
              { Icon: Wrench, label: 'Sin mantenimiento', desc: 'Aluminio extruido: no se oxida, no se deforma, no requiere pintura.' },
              { Icon: CheckCircle2, label: 'Motorizable', desc: 'Las celosías pueden integrarse con Somfy o KNX para apertura automática.' },
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
              Proyecto a medida
            </h3>
            <p className="text-sm text-gris-medio mb-5 leading-relaxed">
              Cada barandilla o celosía se fabrica según las dimensiones exactas de tu espacio. Visita gratuita y presupuesto sin compromiso.
            </p>
            <PresupuestoButton size="lg" className="w-full justify-center" />
            <div className="mt-4 pt-4 border-t border-gris-claro text-sm text-gris-medio font-montserrat space-y-1.5">
              {['Fabricación 100% a medida', 'Cumplimiento CTE', 'Instalación profesional'].map(item => (
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
                { label: 'Cerramientos de Terraza', href: '/cerramientos' },
                { label: 'Cortinas y Estores', href: '/cortinas-estores' },
                { label: 'Mamparas de Oficina', href: '/mamparas-oficina' },
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
