import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, FileText } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'

export const metadata: Metadata = buildMetadata({
  title: "Tabique Armario | Comercial MAR'O",
  description:
    'Nuestra solución de Tabique Armario combina división de oficina con almacenaje eficiente. Muebles divisorios modulares 100% integrables con la serie UR.',
  keywords: ['tabique armario', 'mueble divisorio', 'almacenaje oficina', 'muros tecnicos'],
  path: '/mamparas-oficina/tabique-armario',
})

const features = [
  'Integración técnica y estética nativa con toda la serie UR',
  'Funcionalidad dual: división de espacios + archivo de oficina',
  'Compatible con nuestras mamparas UR-802, UR-803 y UR-902',
  'Diseño modular que optimiza el espacio disponible al máximo',
  'Acceso al contenido desde ambas caras si el diseño lo requiere',
  'Acabados coherentes y uniformes en todo el proyecto de oficina',
]

const specs: [string, string][] = [
  ['Serie', 'Tabique Armario'],
  ['Ecosistema', '100% compatible con Serie UR'],
  ['Función', 'Compartimentación Técnica + Almacenaje'],
  ['Configuración', 'Modular y personalizable'],
  ['Acabados', 'Coordinados con toda la gama MAR\'O'],
  ['Acceso', 'Opcionalmente bilateral'],
]

const compatibleSystems = [
  {
    eyebrow: 'Perfilería UR',
    name: 'UR-802',
    description: 'Robustez y resistencia al fuego certificada',
    href: '/mamparas-oficina/ur-802',
  },
  {
    eyebrow: 'Perfilería UR',
    name: 'UR-803',
    description: 'El sistema clásico prescrito por arquitectos',
    href: '/mamparas-oficina/ur-803',
  },
  {
    eyebrow: 'Perfilería UR',
    name: 'UR-902',
    description: 'Acabado premium con perfilería invisible',
    href: '/mamparas-oficina/ur-902',
  },
]

const quickNav = [
  { label: 'UR-802', sub: 'Alta prestación', href: '/mamparas-oficina/ur-802' },
  { label: 'UR-803', sub: 'El más demandado', href: '/mamparas-oficina/ur-803' },
  { label: 'UR-902', sub: 'Perfilería oculta', href: '/mamparas-oficina/ur-902' },
  { label: 'Cristal Visión I+II', sub: 'Transparencia total', href: '/mamparas-oficina/cristal-vision' },
  { label: 'SLIM', sub: 'Mínimo perfil', href: '/mamparas-oficina/slim' },
  { label: 'Volver al catálogo', sub: 'Mamparas de Oficina', href: '/mamparas-oficina' },
]

export default function TabiqueArmarioPage() {
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
          alt="Tabique Armario instalación oficina con muebles divisorios"
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
            <span className="text-white" aria-current="page">Tabique Armario</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-arena/20 border border-arena/40 text-arena text-[10px] font-montserrat font-bold tracking-[3px] uppercase px-3 py-1 rounded-full">
              Integración total
            </span>
          </div>
          <h1 className="font-montserrat text-3xl font-extrabold text-white">Tabique Armario</h1>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-14 grid lg:grid-cols-[1fr_320px] gap-12">
        <div>

          {/* ── Intro + photo ───────────────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
            <div>
              <p className="text-gris-medio text-base leading-relaxed mb-4">
                En <strong className="text-carbon font-semibold">Comercial MAR&apos;O</strong>, transformamos el concepto de división en una herramienta de utilidad. Nuestra solución de <strong className="text-carbon font-semibold">Tabique Armario</strong> fusiona la compartimentación de espacios con el aprovechamiento inteligente del volumen, creando muros técnicos que funcionan como sistemas de almacenaje de alto rendimiento.
              </p>
              <p className="text-gris-medio text-base leading-relaxed mb-6">
                Hemos desarrollado este sistema para que se integre de forma nativa —tanto técnica como estéticamente— con toda nuestra <strong className="text-carbon font-semibold">serie UR</strong>. Esto permite que una oficina pueda combinar mamparas acristaladas y tabiques ciegos con módulos de armario, manteniendo una coherencia total en acabados y perfiles. El diseño modular permite, además, el acceso bilateral a los compartimentos, optimizando la operativa y el orden en el entorno de trabajo.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="img-zoom-wrap shadow-md">
                <Image
                  src="/images/mamparas-oficina/tabique-armario-1.jpg"
                  alt="Tabique Armario instalación oficina con almacenaje modular"
                  width={800}
                  height={800}
                  unoptimized
                  className="w-full h-auto max-h-[500px] object-contain img-zoom img-reveal"
                />
              </div>
              
              <a
                href="/docs/mamparas-oficina/estructura-elementos-mamparas.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 bg-white border border-gris-claro rounded-xl text-[13px] font-montserrat font-bold text-carbon hover:border-rojo hover:text-rojo transition-all group shadow-sm hover:shadow-md w-full"
              >
                <FileText size={18} className="text-rojo group-hover:scale-110 transition-transform" />
                <span>Descargar Estructura y elementos de mampara (PDF)</span>
              </a>
            </div>
          </div>

          {/* ── Stat grid ───────────────────────────────────────────────────── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {[
              { val: 'Modular', label: 'Estructura' },
              { val: 'UR-Series', label: 'Ecosistema', highlight: true },
              { val: 'Muro técnico', label: 'Concepto' },
              { val: 'Personalizado', label: 'Acabado' },
            ].map(({ val, label, highlight }) => (
              <div key={label} className={`rounded-xl p-4 text-center border ${highlight ? 'bg-crema border-rojo' : 'bg-crema border-gris-claro'}`}>
                <p className="font-montserrat text-xl font-extrabold text-carbon">{val}</p>
                <p className="text-[11px] text-gris-medio mt-1">{label}</p>
              </div>
            ))}
          </div>

          {/* ── Características + imagen ────────────────────────────────────── */}
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
                src="/images/mamparas-oficina/tabique-armario-2.jpg"
                alt="Detalle Tabique Armario integración UR oficina"
                width={800}
                height={800}
                unoptimized
                className="w-full h-auto max-h-[500px] object-contain img-zoom img-reveal"
                style={{ animationDelay: '0.15s' }}
              />
            </div>
          </div>

          {/* ── Sistemas compatibles ─────────────────────────────────────────── */}
          <section className="mb-10">
            <p className="text-[11px] uppercase tracking-wider font-montserrat text-gris-medio mb-5">
              Sistemas compatibles
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {compatibleSystems.map(system => (
                <Link
                  key={system.href}
                  href={system.href}
                  className="group bg-crema border border-gris-claro rounded-xl p-4 hover:-translate-y-1 hover:shadow-md transition-all"
                >
                  <p className="text-[10px] font-montserrat font-bold tracking-[2px] uppercase text-gris-medio mb-1">
                    {system.eyebrow}
                  </p>
                  <p className="font-montserrat text-base font-extrabold text-carbon group-hover:text-rojo transition-colors mb-1.5">
                    {system.name}
                  </p>
                  <p className="text-[12px] text-gris-medio leading-snug mb-3">
                    {system.description}
                  </p>
                  <div className="flex items-center gap-1 text-[11px] font-montserrat font-semibold text-rojo">
                    Ver sistema
                    <ArrowRight size={11} aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </section>

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
              ¿Es Tabique Armario para tu proyecto?
            </h3>
            <p className="text-sm text-gris-medio mb-5">
              Integra la función divisoria con almacenaje sin añadir mobiliario. Compatible con todos los sistemas UR.
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
            {quickNav.map(item => (
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
