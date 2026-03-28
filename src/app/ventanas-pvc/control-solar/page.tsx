import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'

export const metadata: Metadata = buildMetadata({
  title: "Control Solar y Mosquiteras Ecoven Plus en Bilbao | Comercial MAR'O",
  description:
    'Contraventanas, mosquiteras enrollables y plisadas, Estores Glass. Controla la luz y temperatura sin elementos sueltos. Bilbao y Vizcaya.',
  keywords: [
    'control solar ventanas Bilbao',
    'mosquiteras PVC Vizcaya',
    'contraventanas Ecoven Plus',
    'estores glass Bilbao',
    'protección solar ventanas',
  ],
  path: '/ventanas-pvc/control-solar',
})

const products = [
  {
    name: 'Contraventanas Exteriores',
    img: 'https://ecovenplus.com/wp-content/uploads/2024/10/papik01-1-scaled.jpg.webp',
    imgAlt: 'Vivienda con contraventanas exteriores PVC Ecoven Plus',
    desc: 'Perfiles PVC de alta calidad instalados en el exterior.',
    detail:
      'Lamas fijas 50 mm para bloqueo total del sol o lamas orientables 77 mm regulables. Función decorativa y de protección combinadas.',
  },
  {
    name: 'Contraventanas Interiores',
    img: 'https://ecovenplus.com/wp-content/uploads/2024/10/1707999298918.jpeg',
    imgAlt: 'Vivienda con contraventanas interiores PVC Ecoven Plus',
    desc: 'Mismas características que la versión exterior.',
    detail:
      'Instaladas en el interior de la vivienda para menor exposición a la intemperie. Fácil acceso para mantenimiento y limpieza.',
  },
  {
    name: 'Mosquiteras',
    img: 'https://ecovenplus.com/wp-content/uploads/2024/10/Captura-de-pantalla-2024-10-07-a-las-10.05.01-1024x956.png',
    imgAlt: 'Mosquiteras integradas Ecoven Plus — sistema enrollable y plisado',
    desc: 'Compatible con todos los sistemas Ecoven Plus.',
    detail:
      'Tipo enrollable (compacta, retráctil) y tipo plisada (plegable). Ventilación sin insectos en cualquier época del año.',
  },
  {
    name: 'Estores Glass',
    img: 'https://ecovenplus.com/wp-content/uploads/2024/10/Captura-de-pantalla-2024-10-07-a-las-10.08.57-1024x944.png',
    imgAlt: 'Estores Glass integrados en ventana — control de luz interior',
    desc: 'Sistema enrollable integrado en la ventana.',
    detail:
      'Controla la entrada de luz de forma cómoda. Adaptable a cualquier tipo de apertura del catálogo Ecoven Plus.',
  },
]

const features = [
  'Reduce el exceso de calor en verano',
  'Mantiene la calidez invernal',
  'Protege el mobiliario de los rayos UV',
  'Lamas orientables con regulación gradual',
  'Compatible con motorización Somfy',
  'Sin necesidad de instalar elementos adicionales',
]

const specs: [string, string][] = [
  ['Lamas fijas', '50 mm de altura'],
  ['Lamas orientables', '77 mm de altura'],
  ['Mosquitera', 'Enrollable / Plisada'],
  ['Instalación', 'Exterior o interior'],
]

export default function ControlSolarPage() {
  return (
    <div className="min-h-screen">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .img-reveal { animation: fadeUp 0.65s ease both; }
        .img-zoom-wrap { overflow: hidden; border-radius: 0.75rem; }
        .img-zoom-wrap:hover .img-zoom { transform: scale(1.04); }
        .img-zoom { transition: transform 0.45s ease; }
      `}</style>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="relative h-[40vh] min-h-48 flex items-end">
        <Image
          src="https://ecovenplus.com/wp-content/uploads/2024/10/papik01-1-scaled.jpg.webp"
          alt="Control solar y mosquiteras Ecoven Plus"
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
            <Link href="/ventanas-pvc" className="hover:text-white transition-colors">Puertas y Ventanas PVC</Link>
            {' / '}
            <span className="text-white" aria-current="page">Control Solar</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-arena/20 border border-arena/40 text-arena text-[10px] font-montserrat font-bold tracking-[3px] uppercase px-3 py-1 rounded-full">
              Confort solar
            </span>
          </div>
          <h1 className="font-montserrat text-3xl font-extrabold text-white leading-tight">
            Control Solar y Mosquiteras Ecoven Plus
          </h1>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-14 grid lg:grid-cols-[1fr_320px] gap-12">
        <div>
          {/* ── Intro ──────────────────────────────────────────────────────── */}
          <p className="text-gris-medio text-base leading-relaxed mb-4">
            Con las soluciones de control solar Ecoven Plus puedes modular la luz y temperatura de cada
            estancia sin llenar la casa de elementos sueltos. Todo se integra en el sistema de carpintería
            desde el primer momento.
          </p>
          <p className="text-gris-medio text-base leading-relaxed mb-10">
            Contraventanas exteriores e interiores, mosquiteras de varios tipos y estores glass:
            cada solución responde a una necesidad concreta y se combina sin incompatibilidades con
            el resto del ecosistema Ecoven Plus.
          </p>

          {/* ── Productos — con imagen inline ───────────────────────────────── */}
          <section className="mb-10">
            <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5">
              Soluciones disponibles
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {products.map(({ name, img, imgAlt, desc, detail }, idx) => (
                <div key={name} className="bg-white rounded-xl border border-gris-claro overflow-hidden">
                  <div className="img-zoom-wrap rounded-none h-[160px]">
                    <Image
                      src={img}
                      alt={imgAlt}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover img-zoom img-reveal"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-montserrat text-base font-bold text-carbon mb-1">{name}</h3>
                    <p className="text-[12px] font-montserrat text-rojo font-medium mb-2">{desc}</p>
                    <p className="text-[12px] text-gris-medio leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Características ────────────────────────────────────────────── */}
          <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5">
            Beneficios del control solar
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {features.map(f => (
              <div key={f} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-rojo flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm text-gris-medio">{f}</span>
              </div>
            ))}
          </div>

          {/* ── Ficha técnica ──────────────────────────────────────────────── */}
          <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5">Ficha técnica</h2>
          <div className="rounded-xl border border-gris-claro overflow-hidden mb-10">
            {specs.map(([label, value], i) => (
              <div
                key={label}
                className={`flex justify-between items-center px-5 py-3 text-sm ${i % 2 === 0 ? 'bg-crema' : 'bg-white'}`}
              >
                <span className="text-gris-medio font-montserrat">{label}</span>
                <span className="font-montserrat font-semibold text-carbon text-right">{value}</span>
              </div>
            ))}
          </div>

          {/* ── Foto de proyecto ─────────────────────────────────────────────── */}
          <div className="img-zoom-wrap shadow-md">
            <Image
              src="https://ecovenplus.com/wp-content/uploads/2024/10/1707999298918.jpeg"
              alt="Instalación control solar PVC Ecoven Plus en Vizcaya"
              width={800}
              height={500}
              className="w-full h-[280px] object-cover img-zoom img-reveal"
            />
          </div>
        </div>

        {/* ── Sidebar ─────────────────────────────────────────────────────── */}
        <aside className="lg:sticky lg:top-20 h-fit space-y-4">
          <div className="bg-crema rounded-xl p-6 border border-gris-claro">
            <h3 className="font-montserrat text-base font-bold text-carbon mb-2">
              ¿Qué solución de control solar te conviene?
            </h3>
            <p className="text-sm text-gris-medio mb-5">
              Contraventanas, mosquiteras o estores: cada orientación y uso pide una solución diferente.
              Te ayudamos a elegir.
            </p>
            <PresupuestoButton size="lg" className="w-full justify-center" />
            <div className="mt-4 pt-4 border-t border-gris-claro text-sm text-gris-medio font-montserrat space-y-1.5">
              {[
                'Visita técnica sin compromiso',
                'Compatible con motorización',
                'Garantía 10 años',
              ].map(item => (
                <p key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-rojo flex-shrink-0" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-gris-claro">
            <p className="font-montserrat text-[11px] font-bold tracking-[2px] uppercase text-gris-medio mb-3">
              Ecosistema Ecoven Plus
            </p>
            <div className="space-y-0">
              {[
                { label: 'Persianas & Cajones', sub: 'Ecoven Plus · Passivhaus', href: '/ventanas-pvc/persianas' },
                { label: 'Acristalamiento', sub: 'Vidrio & herrajes RC2', href: '/ventanas-pvc/acristalamiento' },
                { label: 'Domótica', sub: 'Somfy TaHoma', href: '/ventanas-pvc/domotica' },
                { label: 'Volver al catálogo', sub: 'Puertas y Ventanas PVC', href: '/ventanas-pvc' },
              ].map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between py-2.5 border-b border-gris-claro last:border-0 hover:bg-crema -mx-1 px-1 rounded transition-colors"
                >
                  <div>
                    <p className="font-montserrat text-[13px] font-semibold text-carbon group-hover:text-rojo transition-colors">
                      {item.label}
                    </p>
                    <p className="text-[11px] text-gris-medio">{item.sub}</p>
                  </div>
                  <ArrowRight size={13} className="text-gris-medio group-hover:text-rojo transition-colors flex-shrink-0" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
