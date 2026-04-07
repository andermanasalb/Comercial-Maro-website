import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Shield, Droplets, Ruler, Palette, FileText } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'

export const metadata: Metadata = buildMetadata({
  title: "Cabinas y Cerramientos Fenólicos (HPL) | Comercial MAR'O",
  description:
    'Sistemas de cerramientos fenólicos compactos HPL para baños, duchas y vestuarios. Alta resistencia a la humedad, higiene máxima y durabilidad certificada.',
  keywords: [
    'cerramientos fenólicos',
    'cabinas sanitarias HPL',
    'separadores vestuarios',
    'tablero compacto fenólico',
    'fenólico baños',
  ],
  path: '/cerramientos-fenolicos',
})

const features = [
  'Núcleo de resina fenólica termoestable de alta densidad',
  'Totalmente hidrófugo e inmune al vapor de agua',
  'Superficie no porosa con tratamiento antibacteriano',
  'Herrajes de seguridad en acero inoxidable AISI 304',
  'Resistencia extrema al impacto y al rayado (Anti-vandálico)',
  'Clasificación de reacción al fuego B-s1, d0 (Ignífugo)',
  'Mantenimiento mínimo con productos de limpieza estándar',
]

const specs: [string, string][] = [
  ['Material', 'Compacto Fenólico (HPL)'],
  ['Espesor estándar', '12 mm / 13 mm'],
  ['Densidad núcleo', '1.450 kg/m³'],
  ['Acabado cantos', 'Negro pulido y redondeado'],
  ['Resistencia fuego', 'B-s1, d0 (Euroclases)'],
  ['Herraje superior', 'Barra de amarre estabilizadora'],
  ['Higiene', 'Tratamiento Sanitized® opcional'],
]

const coloresMonocolor = [
  { name: 'Blanco', hex: '#FFFFFF', border: true },
  { name: 'Gris Bruma', hex: '#D1D5DB', border: false },
  { name: 'Crema Mat', hex: '#F1E9D2', border: false },
  { name: 'Gris Mat', hex: '#D8DBDC', border: false },
]

const woodGrain = 'linear-gradient(90deg, rgba(0,0,0,0.07) 50%, transparent 50%) 0 0 / 2px 100%, linear-gradient(90deg, rgba(255,255,255,0.04) 50%, transparent 50%) 0 0 / 5px 100%'

const maderasYVivos = [
  { name: 'Roble', hex: `${woodGrain}, linear-gradient(135deg, #C19A6B 0%, #A67C52 100%)`, border: false },
  { name: 'Haya', hex: `${woodGrain}, linear-gradient(135deg, #F0DBBA 0%, #E3C69D 100%)`, border: true },
  { name: 'Azul', hex: '#1E40AF', border: false },
  { name: 'Rojo', hex: '#991B1B', border: false },
]

const coloresRal = [
  '#D7DBDE', '#A0A2A7', '#C7C6B3', '#C5CC8A', '#F3E96B', '#EBD200', '#EDB200', '#DF7800', '#C4161C', '#BD3D2A', '#7A152B', '#3E2521',
  '#651631', '#6A567A', '#003E7A', '#2574AF', '#226E7E', '#6AB435', '#407B37', '#2E4C27', '#7C7338', '#735036', '#69372B', '#37352A'
]

export default function CerramientosFenolicosPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="relative h-[40vh] min-h-48 flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&q=80"
          alt="Cerramientos fenólicos para baños y vestuarios"
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
            <span className="text-white" aria-current="page">Cerramientos Fenólicos</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-arena/20 border border-arena/40 text-arena text-[10px] font-montserrat font-bold tracking-[3px] uppercase px-3 py-1 rounded-full">
              Máxima Resistencia
            </span>
          </div>
          <h1 className="font-montserrat text-3xl font-extrabold text-white leading-tight">
            Cerramientos Fenólicos
          </h1>
        </div>
      </div>

      <div className="max-w-site mx-auto px-6 py-14 grid lg:grid-cols-[1fr_320px] gap-12">
        <div>
          {/* ── Intro + photo ───────────────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
            <div>
              <p className="text-gris-medio text-base leading-relaxed mb-4">
                En <strong className="text-carbon font-semibold">Comercial MAR&apos;O</strong> trabajamos con el material por excelencia para espacios exigentes: el <strong className="text-carbon font-semibold">tablero compacto fenólico (HPL)</strong>. Diseñado específicamente para resistir el contacto directo con el agua, el vapor y el uso intensivo en baños, duchas y vestuarios de alta concurrencia.
              </p>
              <p className="text-gris-medio text-base leading-relaxed">
                Nuestros cerramientos combinan una higiene impecable con una robustez constructiva inigualable. Al ser <strong className="text-carbon font-semibold">totalmente hidrófugo y no poroso</strong>, evita la proliferación de bacterias y resiste tanto productos químicos de limpieza como el desgaste mecánico. Cada proyecto se fabrica a medida, integrando herrajes técnicos de acero inoxidable para garantizar una durabilidad ilimitada.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="img-zoom-wrap shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1620626011761-9963d7521477?w=800&q=80"
                  alt="Detalle de tablero compacto fenólico HPL"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover img-zoom img-reveal"
                />
              </div>
            </div>
          </div>

          {/* ── Stat grid ───────────────────────────────────────────────────── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {[
              { val: '100% Hidrófugo', label: 'Resist. Humedad' },
              { val: 'B-s1, d0', label: 'Ignífugo Cert.', highlight: true },
              { val: 'Acero Inox', label: 'Herraje Técnico' },
              { val: 'Mínimo', label: 'Mantenimiento' },
            ].map(({ val, label, highlight }) => (
              <div key={label} className={`rounded-xl p-4 text-center border ${highlight ? 'bg-crema border-rojo' : 'bg-crema border-gris-claro'}`}>
                <p className="font-montserrat text-lg font-extrabold text-carbon tracking-tight">{val}</p>
                <p className="text-[11px] text-gris-medio mt-1 font-semibold uppercase tracking-tighter">{label}</p>
              </div>
            ))}
          </div>

          {/* ── Características + imagen ────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-10 font-montserrat">
            <div>
              <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5 uppercase tracking-tighter">Superioridad técnica HPL</h2>
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
                src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80"
                alt="Cabinas fenólicas instaladas"
                width={800}
                height={600}
                className="w-full h-auto object-cover img-zoom"
              />
            </div>
          </div>

          {/* ── Módulos / Soluciones ─────────────────────────────────────────── */}
          <div className="mb-14">
            <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5 uppercase tracking-tighter">Soluciones disponibles</h2>
            <p className="text-sm text-gris-medio mb-6">
              Adaptamos el tablero fenólico a cualquier necesidad funcional de tu vestuario o zona de aseos públicos.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Cabinas Sanitarias', desc: 'Compartimentación de aseos y duchas con herrajes de seguridad.' },
                { name: 'Separadores', desc: 'Paneles para urinarios y frentes de vestuario colectivos.' },
                { name: 'Taquillas', desc: 'Mobiliario fenólico de alta resistencia al impacto y uso diario.' },
                { name: 'Encimeras', desc: 'Superficies para lavabos a medida, higiénicas y resistentes.' },
              ].map(mod => (
                <div key={mod.name} className="bg-crema border border-gris-claro rounded-xl p-5 hover:border-rojo/30 transition-colors">
                  <p className="font-montserrat font-bold text-carbon text-[13px] mb-1.5 uppercase tracking-tight">{mod.name}</p>
                  <p className="text-gris-medio text-[12px] leading-relaxed">{mod.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Ficha técnica ───────────────────────────────────────────────── */}
          <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5 uppercase tracking-tighter">Especificaciones Técnicas</h2>
          <div className="rounded-xl border border-gris-claro overflow-hidden mb-10">
            {specs.map(([label, value], i) => (
              <div key={label} className={`flex justify-between items-center px-5 py-3 text-sm ${i % 2 === 0 ? 'bg-crema' : 'bg-white'}`}>
                <span className="text-gris-medio font-montserrat">{label}</span>
                <span className="font-montserrat font-semibold text-carbon text-right">{value}</span>
              </div>
            ))}
          </div>

          {/* ── Acabados disponibles ─────────────────────────────────────────── */}
          <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-6 mt-12 border-t border-gris-claro pt-10 uppercase tracking-tighter">Acabados disponibles</h2>
          
          <div className="flex flex-col gap-6 mb-10">
            {/* TOP ROW */}
            <div className="grid lg:grid-cols-[auto_1fr] gap-6">
              
              {/* Monocolores */}
              <div className="flex flex-col max-w-sm mx-auto lg:mx-0">
                <div className="bg-carbon text-white text-center py-2 px-8 font-montserrat text-[11px] font-semibold tracking-widest uppercase rounded-t-md w-full">
                  Colores Base
                </div>
                <div className="flex gap-4 justify-center items-center bg-white border border-t-0 border-gris-claro rounded-b-md p-6">
                  {coloresMonocolor.map(c => (
                    <div key={c.name} className="flex flex-col items-center">
                      <div
                        style={{ backgroundColor: c.hex }}
                        className={`w-12 h-12 rounded shadow-sm ${c.border ? 'border border-gray-200' : ''}`}
                      />
                      <p className="text-[9px] font-montserrat text-carbon text-center mt-2 font-bold max-w-[48px] leading-tight uppercase">{c.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Otros (RAL) */}
              <div className="flex flex-col">
                <div className="bg-carbon text-white text-center py-2 px-8 font-montserrat text-[11px] font-semibold tracking-widest uppercase rounded-t-md w-full">
                  Gama completa (RAL)
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

            {/* Madera / Especiales */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <div className="bg-carbon text-white text-center py-2 px-8 font-montserrat text-[11px] font-semibold tracking-widest uppercase rounded-t-md w-full">
                  Acabados Madera y Vivos
                </div>
                <div className="flex gap-4 sm:gap-6 justify-center bg-white border border-t-0 border-gris-claro rounded-b-md p-6 h-full items-center">
                  {maderasYVivos.map(c => (
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
              <div className="bg-crema border border-gris-claro rounded-xl p-6 flex flex-col justify-center">
                <p className="font-montserrat text-[11px] font-bold tracking-[2px] uppercase text-rojo mb-4">Catálogo y Personalización</p>
                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={14} className="text-rojo mt-0.5 flex-shrink-0" />
                    <p className="text-[12px] text-gris-medio leading-snug">
                      <strong className="text-carbon font-bold">Catálogo completo:</strong> Disponemos de toda la gama HPL en exposición para coordinar con la perfilería.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Palette size={14} className="text-rojo mt-0.5 flex-shrink-0" />
                    <p className="text-[12px] text-gris-medio leading-snug">
                      <strong className="text-carbon font-bold">Colores especiales:</strong> ¿Buscas un tono específico fuera de catálogo? Consúltanos y buscamos tu solución.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Sidebar ──────────────────────────────────────────────────────── */}
        <div className="lg:sticky lg:top-20 h-fit space-y-4">
          <div className="bg-crema rounded-xl p-6 border border-gris-claro shadow-sm">
            <h3 className="font-montserrat text-base font-bold text-carbon mb-2 leading-tight">
              ¿Cómo podemos ayudarte a proyectar tu espacio fenólico?
            </h3>
            <p className="text-sm text-gris-medio mb-5 leading-relaxed">
              Diseñamos a medida tus cabinas y vestuarios con materiales de alta exigencia. Háblanos de tu proyecto y solicita asesoramiento técnico.
            </p>
            <PresupuestoButton size="lg" className="w-full justify-center" />
            <div className="mt-4 pt-4 border-t border-gris-claro text-sm text-gris-medio font-montserrat space-y-1.5">
              {[
                'Háblanos de tu proyecto',
                'Medición a medida',
                'Instalación profesional',
              ].map(item => (
                <p key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-rojo flex-shrink-0" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
