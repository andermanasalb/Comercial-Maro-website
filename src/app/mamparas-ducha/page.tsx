import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Shield, Sparkles, Ruler, Droplets, Layers } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'

export const metadata: Metadata = buildMetadata({
  title: "Mamparas de Ducha y Bañera a Medida en Bilbao | Comercial MAR'O",
  description:
    'Mamparas de ducha y bañera en cristal templado a medida. Modelos fijos, pivotantes, correderos y angulares. Perfiles en aluminio y negro mate. Instalación en Bilbao y Vizcaya.',
  keywords: [
    'mamparas ducha Bilbao',
    'mamparas bañera Vizcaya',
    'mampara cristal templado medida',
    'mampara ducha sin marco Bilbao',
    'mamparas baño aluminio',
  ],
  path: '/mamparas-ducha',
})

const features = [
  'Cristal templado de seguridad de 6 mm (estándar) u 8 mm (premium) conforme a EN 12150',
  'Tratamiento Easy-Clean antical de serie: repele el agua y reduce el mantenimiento',
  'Perfiles en aluminio anodizado plata, dorado champán, negro mate o blanco',
  'Sellos de silicona transparente en todo el perímetro para máxima estanqueidad',
  'Bisagras de carga alta: aguantan 10.000 ciclos de apertura sin holguras',
  'Fabricación 100% a medida para huecos no estándar, nichos y rincones',
  'Vidrio con serigrafía, satinado o transparente según privacidad deseada',
]

const specs: [string, string][] = [
  ['Cristal estándar', '6 mm templado (EN 12150)'],
  ['Cristal premium', '8 mm templado o laminado'],
  ['Tratamiento superficie', 'Easy-Clean antical de serie'],
  ['Perfiles', 'Aluminio anodizado / negro mate'],
  ['Altura estándar', '185 – 200 cm (ajustable)'],
  ['Anchura min/max', '60 cm – 200 cm a medida'],
  ['Bisagras', 'Acero inoxidable AISI 304'],
  ['Garantía producto', '5 años en herrajes y perfiles'],
]

const models = [
  {
    name: 'Fija',
    badge: 'Minimalista',
    badgeStyle: 'bg-arena/20 text-arena',
    desc: 'Un solo panel fijo de vidrio templado. La solución más sencilla y depurada para duchas con acceso abierto o con pared curva. Sin herrajes de apertura, sin mecanismos que limpiar.',
    tags: ['Sin mecanismos', 'Máxima limpieza', 'Minimalismo'],
  },
  {
    name: 'Pivotante',
    badge: 'La más vendida',
    badgeStyle: 'bg-rojo text-white',
    desc: 'Hoja que gira sobre un eje vertical o sobre bisagras laterales. Apertura amplia y cómoda. Disponible con bisagra de pared, bisagra de vidrio o sistema de giro central para diseños simétricos.',
    tags: ['Apertura generosa', 'Auto-cierre opcional', 'Giro 180°'],
  },
  {
    name: 'Corredera',
    badge: 'Para espacios justos',
    badgeStyle: 'bg-arena/20 text-arena',
    desc: 'Dos o tres paneles que se deslizan sobre guías superiores. Ideal cuando no hay espacio para abrir una puerta hacia fuera. Sistema de rodillos a bolas de largo recorrido y sin ruido.',
    tags: ['Ahorra espacio', 'Silenciosa', 'Fácil de limpiar'],
  },
  {
    name: 'Angular',
    badge: 'Ducha de rincón',
    badgeStyle: 'bg-arena/20 text-arena',
    desc: 'Dos paredes de vidrio a 90° con puerta de acceso pivotante o corredera. Forma una cabina completa en el rincón del baño. La configuración más habitual en reformas integrales de baño.',
    tags: ['90° o semicircular', 'Cabina completa', 'Reforma integral'],
  },
  {
    name: 'Plegable',
    badge: 'Solución para duchas pequeñas',
    badgeStyle: 'bg-arena/20 text-arena',
    desc: 'Hoja que se pliega hacia el interior al abrirse, ocupando muy poco espacio. La mejor solución para duchas angostas o para baños adaptados donde la accesibilidad es prioritaria.',
    tags: ['Poca apertura necesaria', 'Accesibilidad', 'Compacta'],
  },
  {
    name: 'Bañera',
    badge: 'Para bañera',
    badgeStyle: 'bg-arena/20 text-arena',
    desc: 'Panel fijo más hoja abatible o corredera adaptada al perímetro de la bañera. Disponible en L, U o con faldón lateral para bañeras exentas o empotradas.',
    tags: ['Panel + hoja', 'L / U / exenta', 'A medida'],
  },
]

const finishes = [
  { name: 'Plata anodizado', hex: '#C0C0C0', border: false },
  { name: 'Negro mate', hex: '#1a1a1a', border: false },
  { name: 'Champán', hex: '#C9A96E', border: false },
  { name: 'Blanco', hex: '#FFFFFF', border: true },
  { name: 'Inox cepillado', hex: '#8B9198', border: false },
  { name: 'Dorado', hex: '#CFB53B', border: false },
]

export default function MamparasDuchaPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="relative h-[40vh] min-h-48 flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80"
          alt="Mampara de ducha en cristal templado a medida"
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
            <span className="text-white" aria-current="page">Mamparas de Ducha y Bañera</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-arena/20 border border-arena/40 text-arena text-[10px] font-montserrat font-bold tracking-[3px] uppercase px-3 py-1 rounded-full">
              Cristal Templado
            </span>
          </div>
          <h1 className="font-montserrat text-3xl font-extrabold text-white leading-tight">
            Mamparas de Ducha y Bañera
          </h1>
        </div>
      </div>

      <div className="max-w-site mx-auto px-6 py-14 grid lg:grid-cols-[1fr_300px] gap-12">
        <div>
          {/* ── Intro ──────────────────────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
            <div>
              <p className="text-gris-medio text-base leading-relaxed mb-4">
                Una mampara bien elegida es la diferencia entre un baño funcional y un baño que se disfruta. En <strong className="text-carbon font-semibold">Comercial MAR&apos;O</strong> fabricamos cada mampara a medida en <strong className="text-carbon font-semibold">cristal templado de seguridad</strong>, con tratamiento antical de serie y perfiles disponibles en seis acabados para coordinar con cualquier ambiente de baño.
              </p>
              <p className="text-gris-medio text-base leading-relaxed">
                Fabricamos e instalamos en Bilbao y toda Vizcaya. Si tu ducha tiene medidas no estándar, nichos irregulares o ángulos especiales, no hay problema: <strong className="text-carbon font-semibold">todo se fabrica a medida</strong> con los planos tomados durante la visita técnica gratuita.
              </p>
            </div>
            <div className="img-zoom-wrap shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80"
                alt="Mampara de cristal en baño moderno"
                width={800}
                height={600}
                className="w-full h-auto object-cover img-zoom img-reveal"
              />
            </div>
          </div>

          {/* ── Stats ───────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
            {[
              { val: '6 / 8 mm', label: 'Cristal templado' },
              { val: 'Antical', label: 'Tratamiento Easy-Clean', highlight: true },
              { val: '100%', label: 'A medida' },
              { val: '5 años', label: 'Garantía herrajes' },
            ].map(({ val, label, highlight }) => (
              <div key={label} className={`rounded-xl p-4 text-center border ${highlight ? 'bg-crema border-rojo' : 'bg-crema border-gris-claro'}`}>
                <p className="font-montserrat text-lg font-extrabold text-carbon tracking-tight">{val}</p>
                <p className="text-[11px] text-gris-medio mt-1 font-semibold uppercase tracking-tighter">{label}</p>
              </div>
            ))}
          </div>

          {/* ── Modelos ─────────────────────────────────────────────────────── */}
          <section className="mb-14">
            <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5 uppercase tracking-tighter">
              Modelos disponibles
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {models.map(m => (
                <div key={m.name} className="flex flex-col bg-white border border-gris-claro rounded-xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <div className="h-[3px] w-full bg-arena flex-shrink-0" />
                  <div className="p-5 flex flex-col flex-1">
                    <span className={`inline-block text-[10px] font-montserrat font-bold tracking-wider uppercase px-2.5 py-1 rounded-full mb-3 w-fit ${m.badgeStyle}`}>
                      {m.badge}
                    </span>
                    <h3 className="font-montserrat text-[14px] font-extrabold text-carbon mb-2">{m.name}</h3>
                    <p className="text-[12px] text-gris-medio leading-relaxed mb-4 flex-1">{m.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {m.tags.map(t => (
                        <span key={t} className="bg-arena/20 text-arena text-[10px] font-montserrat font-bold px-2.5 py-0.5 rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Acabados ────────────────────────────────────────────────────── */}
          <section className="mb-14">
            <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5 uppercase tracking-tighter">
              Acabados de perfil
            </h2>
            <div className="bg-white border border-gris-claro rounded-xl p-6">
              <div className="flex flex-wrap gap-6 justify-start items-center">
                {finishes.map(f => (
                  <div key={f.name} className="flex flex-col items-center gap-2">
                    <div
                      style={{ backgroundColor: f.hex }}
                      className={`w-14 h-14 rounded-lg shadow-sm ${f.border ? 'border border-gray-200' : ''}`}
                    />
                    <p className="text-[10px] font-montserrat font-bold text-carbon text-center uppercase w-16 leading-tight">{f.name}</p>
                  </div>
                ))}
              </div>
              <p className="text-[12px] text-gris-medio mt-5 leading-relaxed">
                ¿Buscas un acabado especial para coordinar con griferías o azulejos? Consúltanos — disponemos de perfiles en acabados personalizados bajo pedido.
              </p>
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
                src="https://images.unsplash.com/photo-1620626011761-9963d7521477?w=800&q=80"
                alt="Detalle de herraje y perfil de mampara de ducha"
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
              { Icon: Shield, label: 'Cristal certificado', desc: 'Templado según EN 12150. Si se rompe, se fragmenta en piezas pequeñas e inocuas.' },
              { Icon: Sparkles, label: 'Tratamiento antical', desc: 'Easy-Clean de serie: el agua resbala sin dejar cal. Limpieza fácil con un paño.' },
              { Icon: Ruler, label: '100% a medida', desc: 'Fabricamos para cualquier hueco, incluso con paredes fuera de escuadra.' },
              { Icon: Droplets, label: 'Estanqueidad total', desc: 'Sellos de silicona en todo el perímetro. Sin goteos ni filtraciones.' },
              { Icon: Layers, label: '6 acabados de perfil', desc: 'Plata, negro mate, champán, blanco, inox y dorado. Para cada estilo de baño.' },
              { Icon: CheckCircle2, label: '5 años de garantía', desc: 'Garantía en herrajes, bisagras y perfiles. Instalación incluida en la garantía.' },
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
              Tu mampara, a medida
            </h3>
            <p className="text-sm text-gris-medio mb-5 leading-relaxed">
              Tomamos medidas en tu baño, te asesoramos sobre el modelo y el acabado más adecuado, y te presentamos presupuesto sin compromiso.
            </p>
            <PresupuestoButton size="lg" className="w-full justify-center" />
            <div className="mt-4 pt-4 border-t border-gris-claro text-sm text-gris-medio font-montserrat space-y-1.5">
              {['Visita gratuita a domicilio', 'Fabricación a medida exacta', 'Instalación en 1 día'].map(item => (
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
                { label: 'Cerramientos Fenólicos', href: '/cerramientos-fenolicos' },
                { label: 'Mamparas de Oficina', href: '/mamparas-oficina' },
                { label: 'Cerramientos de Terraza', href: '/cerramientos' },
                { label: 'Barandillas y Celosías', href: '/barandillas' },
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
