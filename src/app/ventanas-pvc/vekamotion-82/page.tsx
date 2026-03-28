import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'

export const metadata: Metadata = buildMetadata({
  title: "Vekamotion 82 — Pared de Vidrio PVC Bilbao | Comercial MAR'O",
  description:
    'Vekamotion 82 Ecoven Plus. 82 mm, hoja 5 cámaras + marco 9 cámaras. Uf 1,3 W/m²K, Uw 0,75 W/m²K. Hasta 6,5 m. Passivhaus. RC2. PMR. Bilbao y Vizcaya.',
  keywords: ['Vekamotion 82 Bilbao', 'pared de vidrio PVC', 'ventanas grandes PVC Bizkaia', 'PMR accesibilidad ventanas'],
  path: '/ventanas-pvc/vekamotion-82',
})

const features = [
  'Perfil de 82 mm, hoja 5 cámaras + marco 9 cámaras',
  'Transmitancia Uf = 1,3 W/m²K, Uw = 0,75 W/m²K',
  'Reducción acústica hasta 45 dB',
  'Ancho máximo de hoja: hasta 6,5 metros',
  'Acristalamiento hasta 48 mm (doble o triple)',
  'Certificación Passivhaus',
  'Clasificación antirrobo RC2',
  'Umbral enrasado normativa PMR',
  'Vekamotion 82 Max: hoja fija de solo 28 mm de vista',
  'Herrajes elevadores para hojas de gran peso',
]

const specs: [string, string][] = [
  ['Profundidad', '82 mm'],
  ['Cámaras hoja / marco', '5 / 9'],
  ['Uf (transmitancia marco)', '1,3 W/m²K'],
  ['Uw (ventana terminada)', '0,75 W/m²K'],
  ['Acústico', 'hasta 45 dB'],
  ['Largo máximo', 'hasta 6,5 m'],
  ['Vidrio', 'hasta 48 mm'],
  ['Seguridad', 'RC2'],
  ['Certificación', 'Passivhaus'],
  ['Accesibilidad', 'Normativa PMR'],
]



export default function Vekamotion82Page() {
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
          src="https://ecovenplus.com/wp-content/uploads/2024/10/scenia-vent-copia-444x600.jpg"
          alt="Vekamotion 82 pared de vidrio PVC"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-carbon/72" />
        <div className="relative z-10 px-6 pb-8 max-w-[1280px] mx-auto w-full">
          <nav className="text-white/60 text-[12px] font-montserrat mb-2">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            {' / '}
            <Link href="/ventanas-pvc" className="hover:text-white transition-colors">Puertas y Ventanas PVC Ecoven Plus</Link>
            {' / '}
            <span className="text-white" aria-current="page">Vekamotion 82</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-arena/20 border border-arena/40 text-arena text-[10px] font-montserrat font-bold tracking-[3px] uppercase px-3 py-1 rounded-full">
              Sistema elevador
            </span>
          </div>
          <h1 className="font-montserrat text-3xl font-extrabold text-white">Vekamotion 82</h1>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-14 grid lg:grid-cols-[1fr_320px] gap-12">
        <div>
          {/* ── Intro + foto ─────────────────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
            <div>
              <p className="text-gris-medio text-base leading-relaxed mb-4">
                Con Vekamotion 82 puedes convertir el salón en una gran ventana al exterior: marcos muy
                finos, muchísimo cristal y un paso casi al ras hacia el jardín o la terraza. El efecto
                &ldquo;pared de vidrio&rdquo; sin renunciar al aislamiento del PVC.
              </p>
              <p className="text-gris-medio text-base leading-relaxed">
                Diseñada para <strong className="text-carbon font-semibold">grandes hojas y pesos elevados</strong>,
                con herrajes elevadores que garantizan un desplazamiento suave. Los umbrales de baja altura
                cumplen <strong className="text-carbon font-semibold">normativa PMR</strong>. La variante{' '}
                <strong className="text-carbon font-semibold">Vekamotion 82 Max</strong> reduce la vista de
                la hoja fija a solo 28 mm.
              </p>
            </div>
            <div className="img-zoom-wrap shadow-md">
              <Image
                src="https://ecovenplus.com/wp-content/uploads/2024/10/IMG_6259-2-scaled-444x600.jpg"
                alt="Instalación Vekamotion 82 en terraza Bilbao"
                width={600}
                height={450}
                className="w-full h-[260px] object-cover img-zoom img-reveal"
              />
            </div>
          </div>

          {/* ── Stat grid ───────────────────────────────────────────────────── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {[
              { val: '82 mm', label: 'Profundidad' },
              { val: 'Uf 1,3', label: 'W/m²K' },
              { val: '45 dB', label: 'Acústico' },
              { val: '6,5 m', label: 'Largo máx.' },
            ].map(({ val, label }) => (
              <div key={label} className="bg-crema border border-gris-claro rounded-xl p-4 text-center">
                <p className="font-montserrat text-xl font-extrabold text-carbon">{val}</p>
                <p className="text-[11px] text-gris-medio mt-1">{label}</p>
              </div>
            ))}
          </div>

          {/* ── Render del sistema + características ────────────────────────── */}
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
            <div className="img-zoom-wrap bg-crema border border-gris-claro shadow-sm">
              <Image
                src="https://ecovenplus.com/wp-content/uploads/2024/09/Diseno-sin-titulo-41-1024x1024.png"
                alt="Render sistema Vekamotion 82 pared de vidrio PVC"
                width={600}
                height={500}
                className="w-full object-contain img-zoom img-reveal"
                style={{ animationDelay: '0.1s' }}
              />
            </div>
          </div>

          {/* ── Fotos de proyecto ─────────────────────────────────────────────── */}
          <div className="grid grid-cols-2 gap-3 mb-10">
            <div className="img-zoom-wrap shadow-sm">
              <Image
                src="https://ecovenplus.com/wp-content/uploads/2024/10/mg-1373-web-1200x780.jpg.webp"
                alt="Proyecto Vekamotion 82 instalado en vivienda Bizkaia"
                width={600}
                height={400}
                className="w-full h-[200px] object-cover img-zoom img-reveal"
                style={{ animationDelay: '0.15s' }}
              />
            </div>
            <div className="img-zoom-wrap shadow-sm">
              <Image
                src="https://ecovenplus.com/wp-content/uploads/2024/10/papik01-1-scaled.jpg.webp"
                alt="Instalación Vekamotion 82 fachada Bizkaia"
                width={600}
                height={400}
                className="w-full h-[200px] object-cover img-zoom img-reveal"
                style={{ animationDelay: '0.25s' }}
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
              ¿Quieres una fachada de vidrio?
            </h3>
            <p className="text-sm text-gris-medio mb-5">
              Cuéntanos el tamaño del hueco y el acceso a tu terraza o jardín. Estudiamos la solución ideal.
            </p>
            <PresupuestoButton size="lg" className="w-full justify-center" />
            <div className="mt-4 pt-4 border-t border-gris-claro text-sm text-gris-medio font-montserrat space-y-1.5">
              {['Proyecto y medición gratuitos', 'Garantía 10 años', 'Instalación propia en Vizcaya'].map(item => (
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
              { label: 'Correderas Ecoven Plus', sub: 'Amplitud y luz', href: '/ventanas-pvc/correderas' },
              { label: 'Paralelas Ecoven Plus', sub: 'Hermeticidad superior', href: '/ventanas-pvc/paralelas' },
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
