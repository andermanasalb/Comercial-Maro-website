import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'

export const metadata: Metadata = buildMetadata({
  title: "Persianas y Cajones PVC Ecoven Plus en Bilbao | Comercial MAR'O",
  description:
    'Cajones de persiana PVC Ecoven Plus, Momo y Vekavariant Passivhaus. Lamas de aluminio, motorizables. Instalación en Bilbao y Vizcaya.',
  keywords: [
    'persianas PVC Bilbao',
    'cajones persiana Ecoven Plus',
    'Vekavariant Passivhaus',
    'persianas motorizadas Vizcaya',
  ],
  path: '/ventanas-pvc/persianas',
})

const types = [
  {
    name: 'Ecoven Plus',
    img: 'https://ecovenplus.com/wp-content/uploads/2024/10/Captura-de-pantalla-2024-10-07-a-las-9.01.08-1024x956.png',
    imgAlt: 'Cajón persiana Ecoven Plus estándar',
    desc: 'Solución estándar sencilla y efectiva.',
    features: [
      'Dos tapas disponibles: recta y decorativa',
      'Amplia gama de colores coordinados',
      'Sistema contrastado y resistente',
      'Fácil mantenimiento y limpieza',
    ],
    premium: false,
  },
  {
    name: 'Momo',
    img: 'https://ecovenplus.com/wp-content/uploads/2024/10/Captura-de-pantalla-2024-10-07-a-las-9.04.57-1024x950.png',
    imgAlt: 'Cajón persiana Momo monoblock con mosquitera',
    desc: 'Solución integrada Monoblock con mosquitera incluida.',
    features: [
      'Sección compacta de 120 mm',
      'Mosquitera fácil de instalar y reemplazar',
      'Protección contra insectos incorporada',
      'Diseño integrado sin elementos externos',
    ],
    premium: false,
  },
  {
    name: 'Vekavariant 2.0',
    img: 'https://ecovenplus.com/wp-content/uploads/2024/10/Captura-de-pantalla-2024-10-07-a-las-9.21.50-1024x955.png',
    imgAlt: 'Cajón persiana Vekavariant Passivhaus certificado',
    desc: 'El sistema más eficiente del catálogo.',
    features: [
      'Aislante Neopor de alta eficiencia',
      'Certificado Passive House',
      'Refuerzo de acero integrado',
      'Consola estática opcional disponible',
    ],
    premium: true,
  },
]

const features = [
  'Fabricados en PVC con cámaras aislantes',
  'Doble tabique para sistemas compactos',
  'Impide paso de calor, frío, ruido y viento',
  'Motorización eléctrica disponible',
  'Lamas aluminio 43 mm con espuma poliuretano',
  'Lamas autoblocantes de seguridad',
  'Mayor aislamiento acústico',
  'Amplia gama de colores',
]

const specs: [string, string][] = [
  ['Material', 'PVC multicámara'],
  ['Certificación premium', 'Passive House (Vekavariant)'],
  ['Lamas', 'Aluminio 43 mm con espuma PUR'],
  ['Seguridad', 'Autoblocantes disponibles'],
  ['Motorización', 'Sí, eléctrica'],
]

export default function PersianasCajonesPage() {
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
          alt="Persianas y cajones PVC Ecoven Plus"
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
            <span className="text-white" aria-current="page">Persianas y Cajones</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-arena/20 border border-arena/40 text-arena text-[10px] font-montserrat font-bold tracking-[3px] uppercase px-3 py-1 rounded-full">
              Protección &amp; Confort
            </span>
          </div>
          <h1 className="font-montserrat text-3xl font-extrabold text-white leading-tight">
            Persianas y Cajones PVC Ecoven Plus
          </h1>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-14 grid lg:grid-cols-[1fr_320px] gap-12">
        <div>
          {/* ── Intro ──────────────────────────────────────────────────────── */}
          <p className="text-gris-medio text-base leading-relaxed mb-4">
            Los cajones de persiana Ecoven Plus no son un punto débil del cerramiento sino todo lo contrario.
            Fabricados en <strong className="text-carbon font-semibold">PVC multicámara</strong> con aislamiento
            interior, actúan como barrera adicional frente al frío, el calor y el ruido.
          </p>
          <p className="text-gris-medio text-base leading-relaxed mb-10">
            Tres sistemas para diferentes necesidades: desde la solución estándar más utilizada hasta el
            cajón certificado <strong className="text-carbon font-semibold">Passivhaus</strong> para proyectos
            de máxima exigencia energética.
          </p>

          {/* ── Tres tipos — con imagen inline ──────────────────────────────── */}
          <section className="mb-10">
            <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5">Tres sistemas disponibles</h2>
            <div className="space-y-5">
              {types.map(({ name, img, imgAlt, desc, features: tf, premium }, idx) => (
                <div
                  key={name}
                  className={`grid sm:grid-cols-[200px_1fr] gap-0 rounded-xl border overflow-hidden ${
                    premium ? 'bg-carbon border-carbon' : 'bg-white border-gris-claro'
                  }`}
                >
                  <div className="img-zoom-wrap rounded-none h-[160px] sm:h-auto">
                    <Image
                      src={img}
                      alt={imgAlt}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover img-zoom img-reveal"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    />
                  </div>
                  <div className="p-5">
                    {premium && (
                      <span className="inline-block bg-arena/20 text-arena text-[10px] font-montserrat font-bold tracking-wider uppercase px-2.5 py-1 rounded-full mb-3">
                        Certificado Passivhaus
                      </span>
                    )}
                    <h3 className={`font-montserrat text-base font-bold mb-1 ${premium ? 'text-white' : 'text-carbon'}`}>
                      {name}
                    </h3>
                    <p className={`text-[12px] mb-4 ${premium ? 'text-white/60' : 'text-gris-medio'}`}>{desc}</p>
                    <div className="space-y-2">
                      {tf.map(f => (
                        <div key={f} className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className={`flex-shrink-0 mt-0.5 ${premium ? 'text-arena' : 'text-rojo'}`}
                            aria-hidden="true"
                          />
                          <span className={`text-[12px] ${premium ? 'text-white/70' : 'text-gris-medio'}`}>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Características generales ──────────────────────────────────── */}
          <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5">
            Características generales
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

          {/* ── Fotos de proyecto ────────────────────────────────────────────── */}
          <div className="grid grid-cols-2 gap-3">
            <div className="img-zoom-wrap shadow-sm">
              <Image
                src="https://ecovenplus.com/wp-content/uploads/2024/10/mg-1373-web-1200x780.jpg.webp"
                alt="Instalación persianas Ecoven Plus en Bizkaia"
                width={600}
                height={400}
                className="w-full h-[200px] object-cover img-zoom img-reveal"
                style={{ animationDelay: '0.1s' }}
              />
            </div>
            <div className="img-zoom-wrap shadow-sm">
              <Image
                src="https://ecovenplus.com/wp-content/uploads/2024/10/Casa-Hilaria-2-retocado-scaled.jpg"
                alt="Casa Hilaria con persianas integradas Ecoven Plus"
                width={600}
                height={400}
                className="w-full h-[200px] object-cover img-zoom img-reveal"
                style={{ animationDelay: '0.2s' }}
              />
            </div>
          </div>
        </div>

        {/* ── Sidebar ─────────────────────────────────────────────────────── */}
        <aside className="lg:sticky lg:top-20 h-fit space-y-4">
          <div className="bg-crema rounded-xl p-6 border border-gris-claro">
            <h3 className="font-montserrat text-base font-bold text-carbon mb-2">
              ¿Qué cajón necesitas?
            </h3>
            <p className="text-sm text-gris-medio mb-5">
              Te ayudamos a elegir entre Ecoven Plus, Momo y Vekavariant según las exigencias
              de tu proyecto y el nivel de aislamiento que buscas.
            </p>
            <PresupuestoButton size="lg" className="w-full justify-center" />
            <div className="mt-4 pt-4 border-t border-gris-claro text-sm text-gris-medio font-montserrat space-y-1.5">
              {[
                'Asesoramiento personalizado',
                'Motorización incluida opcional',
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
                { label: 'Control Solar', sub: 'Contraventanas · mosquiteras', href: '/ventanas-pvc/control-solar' },
                { label: 'Acristalamiento', sub: 'Vidrio & herrajes RC2', href: '/ventanas-pvc/acristalamiento' },
                { label: 'Domótica', sub: 'Somfy TaHoma', href: '/ventanas-pvc/domotica' },
                { label: 'Volver al catálogo', sub: 'Puertas y Ventanas PVC Ecoven Plus', href: '/ventanas-pvc' },
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
