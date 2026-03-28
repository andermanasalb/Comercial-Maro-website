import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Download } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'

export const metadata: Metadata = buildMetadata({
  title: "Diseño PVC Ecoven Plus — Spectral y Soldadura 0 | Comercial MAR'O",
  description:
    'Acabado Spectral ultramate y Soldadura 0 para esquinas invisibles. El diferencial de diseño de las ventanas PVC Ecoven Plus en Bilbao.',
  keywords: [
    'ventanas PVC diseño Bilbao',
    'Ecoven Plus Spectral',
    'soldadura 0 PVC',
    'ventanas ultramate Vizcaya',
    'colores ventanas PVC',
  ],
  path: '/ventanas-pvc/diseno',
})

const spectralFeatures = [
  'Superficie ultramate con tacto sedoso',
  'Resistencia superior al rayado y la intemperie',
  'Colores lisos y efecto madera texturizado',
  'Sensación de "ventana de diseño" desde el primer vistazo',
  'Catálogo Veka Spectral 2024',
]

const soldaduraFeatures = [
  'Esquinas sin la típica marca del PVC',
  'Líneas continuas y acabado limpio',
  'Maquinaria específica de última generación',
  'Muy apreciado en fachadas con peso estético importante',
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

export default function DisenoPage() {
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
          src="https://ecovenplus.com/wp-content/uploads/2024/10/SPECTRAL-VENTANAS-PVC-1.jpg"
          alt="Diseño PVC Ecoven Plus"
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
            <span className="text-white" aria-current="page">Diseño</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-arena/20 border border-arena/40 text-arena text-[10px] font-montserrat font-bold tracking-[3px] uppercase px-3 py-1 rounded-full">
              Detalles premium
            </span>
          </div>
          <h1 className="font-montserrat text-3xl font-extrabold text-white leading-tight">
            Diseño PVC Ecoven Plus
          </h1>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-14 grid lg:grid-cols-[1fr_320px] gap-12">
        <div>
          {/* ── Intro ──────────────────────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <p className="text-gris-medio text-base leading-relaxed mb-4">
                El diseño de una ventana PVC ya no se limita al blanco estándar. En Ecoven Plus, el acabado
                es parte de la propuesta de valor: superficies que se notan distintas al tacto, esquinas
                que no delatan el material y una paleta de colores que acompaña a cualquier estilo arquitectónico.
              </p>
              <p className="text-gris-medio text-base leading-relaxed">
                Dos elementos diferenciales concentran el diferencial de diseño del sistema: el
                <strong className="text-carbon font-semibold"> Acabado Spectral</strong> y la
                <strong className="text-carbon font-semibold"> Soldadura 0</strong>. Cada uno resuelve
                un problema estético específico con soluciones técnicas de primera línea.
              </p>
            </div>
            <div className="img-zoom-wrap shadow-md">
              <Image
                src="https://ecovenplus.com/wp-content/uploads/2024/10/SPECTRAL-VENTANAS-PVC-1.jpg"
                alt="Acabado Spectral ultramate en ventanas PVC Ecoven Plus"
                width={600}
                height={450}
                className="w-full h-[240px] object-cover img-zoom img-reveal"
              />
            </div>
          </div>

          {/* ── Acabado Spectral ───────────────────────────────────────────── */}
          <section id="spectral" className="mb-14 scroll-mt-24">
            <div className="mb-6">
              <span className="inline-block font-montserrat text-[11px] font-bold tracking-[3px] uppercase text-rojo mb-1">
                Acabado premium
              </span>
              <h2 className="font-montserrat text-2xl font-bold text-carbon">Acabado Spectral</h2>
              <p className="text-[13px] text-gris-medio mt-1 max-w-lg">
                Sistema innovador que combina lacado y foliado. Cuando una ventana se convierte en Arte.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {spectralFeatures.map(f => (
                <div key={f} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-rojo flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm text-gris-medio">{f}</span>
                </div>
              ))}
            </div>

            {/* Color palettes */}
            <div className="space-y-8">


              <div>
                <p className="font-montserrat text-[12px] font-bold text-carbon mb-1 uppercase tracking-wider">
                  Colores Spectral
                </p>
                <p className="text-[11px] text-gris-medio mb-4 font-montserrat">Premium ultra-matte</p>
                <div className="flex flex-wrap gap-4">
                  {spectral.map(({ name, hex, border }) => (
                    <div key={name} className="flex flex-col items-center gap-1.5">
                      <div
                        className={`w-12 h-12 rounded-xl ${border ? 'border border-gris-claro' : ''}`}
                        style={{ backgroundColor: hex }}
                        title={name}
                      />
                      <span className="text-[10px] font-montserrat text-gris-medio text-center max-w-[52px] leading-tight">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Catálogo PDF */}
            <a
              href="https://ecovenplus.com/wp-content/uploads/2024/10/catalogo-veka-spectral-2024-2_compressed-2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] font-montserrat font-semibold text-rojo border border-rojo/40 hover:bg-rojo hover:text-white transition-colors rounded-lg px-4 py-2.5 mt-6"
            >
              <Download size={15} />
              Descargar Catálogo Veka Spectral 2024 (PDF)
            </a>
          </section>

          {/* ── Soldadura 0 ────────────────────────────────────────────────── */}
          <section id="soldadura" className="scroll-mt-24">
            <div className="mb-6">
              <span className="inline-block font-montserrat text-[11px] font-bold tracking-[3px] uppercase text-rojo mb-1">
                Detalles constructivos
              </span>
              <h2 className="font-montserrat text-2xl font-bold text-carbon">Soldadura 0</h2>
              <p className="text-[13px] text-gris-medio mt-1 max-w-lg">
                Esquinas casi invisibles, líneas continuas del marco, sensación de homogeneidad absoluta.
              </p>
            </div>

            <div className="bg-carbon rounded-xl p-6 mb-6">
              <p className="font-montserrat text-[11px] font-bold tracking-[3px] uppercase text-arena mb-3">
                El detalle que más se nota de cerca
              </p>
              <p className="text-white/80 text-sm leading-relaxed">
                La soldadura 0 es el proceso por el que se unen los perfiles de PVC en las esquinas con una
                técnica que elimina prácticamente la marca de unión visible en el PVC convencional. El resultado
                es una línea continua en todo el perímetro del marco, sin interrupciones ni rebabas.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {soldaduraFeatures.map(f => (
                <div key={f} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-rojo flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm text-gris-medio">{f}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ── Sidebar ─────────────────────────────────────────────────────── */}
        <aside className="lg:sticky lg:top-20 h-fit space-y-4">
          <div className="bg-crema rounded-xl p-6 border border-gris-claro">
            <h3 className="font-montserrat text-base font-bold text-carbon mb-2">
              ¿Te interesa el acabado Spectral?
            </h3>
            <p className="text-sm text-gris-medio mb-5">
              Cuéntanos el estilo de tu vivienda y te mostramos los colores que mejor encajan.
              Sin compromiso.
            </p>
            <PresupuestoButton size="lg" className="w-full justify-center" />
            <div className="mt-4 pt-4 border-t border-gris-claro text-sm text-gris-medio font-montserrat space-y-1.5">
              {[
                'Muestras físicas disponibles',
                'Asesoramiento de color gratuito',
                'Garantía 10 años',
              ].map(item => (
                <p key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-rojo flex-shrink-0" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Related links */}
          <div className="bg-white rounded-xl p-5 border border-gris-claro">
            <p className="font-montserrat text-[11px] font-bold tracking-[2px] uppercase text-gris-medio mb-3">
              Series disponibles
            </p>
            <div className="space-y-0">
              {[
                { label: 'Serie S70', sub: '70 mm · 5 cámaras', href: '/ventanas-pvc/serie-s70' },
                { label: 'Serie S76', sub: '76 mm · triple junta', href: '/ventanas-pvc/serie-s76' },
                { label: 'Serie S82', sub: '82 mm · Passivhaus', href: '/ventanas-pvc/serie-s82' },
                { label: 'Puertas entrada', sub: 'S70 / S82 · 7 puntos', href: '/ventanas-pvc/puertas-entrada' },
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
