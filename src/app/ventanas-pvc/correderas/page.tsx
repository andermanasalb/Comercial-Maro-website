import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'

export const metadata: Metadata = buildMetadata({
  title: "Ventanas Correderas PVC Ecoven Plus Bilbao | Comercial MAR'O",
  description:
    'Correderas PVC Ecoven Plus para terrazas y salones. Marco 70 mm, 3 cámaras marco + 2 hoja. 2 o 3 carriles. Perfiles multicámara. Bilbao y Vizcaya.',
  keywords: ['ventanas correderas PVC Bilbao', 'Ecoven Plus correderas', 'cerramientos terraza PVC Bizkaia'],
  path: '/ventanas-pvc/correderas',
})

const features = [
  'Marco de 70 mm, estructura 3 cámaras marco + 2 cámaras hoja',
  'Sistemas de 2 o 3 carriles configurables',
  'Hojas múltiples (2, 3 o más)',
  'Diseño atemporal y lineal',
  'Deslizamiento suave con rodamientos',
  'Ideal para grandes huecos hacia terraza',
  'Máxima proporción de acristalamiento',
  'Solera disponible en PVC o aluminio',
]

const specs: [string, string][] = [
  ['Marco', '70 mm'],
  ['Cámaras', '3 (marco) + 2 (hoja)'],
  ['Carriles', '2 o 3'],
  ['Solera', 'PVC o aluminio'],
  ['Número de hojas', '2 o más'],
  ['Usos principales', 'Salones, comedores, terrazas, balcones'],
]

export default function CorrederasPage() {
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
          src="https://ecovenplus.com/wp-content/uploads/2024/10/mg-1373-web-1200x780.jpg.webp"
          alt="Ventanas correderas PVC Ecoven Plus"
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
            <span className="text-white" aria-current="page">Correderas</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-arena/20 border border-arena/40 text-arena text-[10px] font-montserrat font-bold tracking-[3px] uppercase px-3 py-1 rounded-full">
              Sistema deslizante
            </span>
          </div>
          <h1 className="font-montserrat text-3xl font-extrabold text-white">Correderas Ecoven Plus</h1>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-14 grid lg:grid-cols-[1fr_320px] gap-12">
        <div>
          {/* ── Intro + foto ─────────────────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
            <div>
              <p className="text-gris-medio text-base leading-relaxed mb-4">
                Las correderas Ecoven Plus están pensadas para ganar luz y amplitud en salones y comedores,
                con hojas que se deslizan suavemente sin perder espacio interior. Permiten cerrar
                grandes huecos hacia terrazas y balcones con un aspecto moderno y atemporal.
              </p>
              <p className="text-gris-medio text-base leading-relaxed">
                Los <strong className="text-carbon font-semibold">perfiles multicámara</strong> y las juntas
                específicas de Ecoven Plus permiten mantener un buen nivel de confort térmico y acústico,
                con una solución económica y muy funcional.
              </p>
            </div>
            <div className="img-zoom-wrap shadow-md">
              <Image
                src="https://ecovenplus.com/wp-content/uploads/2024/10/scenia-vent-copia-444x600.jpg"
                alt="Ventana corredera PVC Ecoven Plus gran formato"
                width={600}
                height={450}
                className="w-full h-[260px] object-cover img-zoom img-reveal"
              />
            </div>
          </div>

          {/* ── Stat grid ───────────────────────────────────────────────────── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {[
              { val: '70 mm', label: 'Marco' },
              { val: '5 cám.', label: '3 marco + 2 hoja' },
              { val: '2–3', label: 'Carriles' },
              { val: 'Gran hueco', label: 'Capacidad' },
            ].map(({ val, label }) => (
              <div key={label} className="bg-crema border border-gris-claro rounded-xl p-4 text-center">
                <p className="font-montserrat text-xl font-extrabold text-carbon">{val}</p>
                <p className="text-[11px] text-gris-medio mt-1">{label}</p>
              </div>
            ))}
          </div>

          {/* ── Características + foto ──────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
            <div>
              <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5">Características</h2>
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
                src="https://ecovenplus.com/wp-content/uploads/2024/10/IMG_6259-2-scaled-444x600.jpg"
                alt="Instalación ventana corredera PVC en terraza Bilbao"
                width={600}
                height={500}
                className="w-full h-[340px] object-cover img-zoom img-reveal"
                style={{ animationDelay: '0.1s' }}
              />
            </div>
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


        </div>

        {/* ── Sidebar ──────────────────────────────────────────────────────── */}
        <div className="lg:sticky lg:top-20 h-fit space-y-4">
          <div className="bg-crema rounded-xl p-6 border border-gris-claro">
            <h3 className="font-montserrat text-base font-bold text-carbon mb-2">
              ¿Quieres abrir el salón a la terraza?
            </h3>
            <p className="text-sm text-gris-medio mb-5">
              Cuéntanos las dimensiones de tu hueco. Estudiamos la configuración óptima sin coste.
            </p>
            <PresupuestoButton size="lg" className="w-full justify-center" />
            <div className="mt-4 pt-4 border-t border-gris-claro text-sm text-gris-medio font-montserrat space-y-1.5">
              {['Medición y proyecto a medida', 'Garantía 10 años', 'Instalación propia en Vizcaya'].map(item => (
                <p key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-rojo flex-shrink-0" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-gris-claro">
            <p className="font-montserrat text-[11px] font-bold tracking-[2px] uppercase text-gris-medio mb-3">
              Otros sistemas deslizantes
            </p>
            {[
              { label: 'Paralelas Ecoven Plus', sub: 'Hermeticidad superior', href: '/ventanas-pvc/paralelas' },
              { label: 'Vekamotion 82', sub: 'Pared de vidrio', href: '/ventanas-pvc/vekamotion-82' },
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
