import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Download, ArrowRight } from 'lucide-react'
import { ecovenFoliados, ecovenSpectral } from '@/content/product-data'
import { PresupuestoButton } from '@/components/shared/PresupuestoButton'
import { SeriesComparison } from '@/components/shared/SeriesComparison'
import { ColorSwatches } from '@/components/shared/ColorSwatches'
import type { PvcSeriesConfig } from '@/content/products/pvc-series'

export function PvcSeriesPage({ config: c }: { config: PvcSeriesConfig }) {
  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="relative h-[40vh] min-h-48 flex items-end">
        <Image
          src={c.hero.imageSrc}
          alt={c.hero.imageAlt}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-carbon/75" />
        <div className="relative z-10 px-6 pb-8 max-w-site mx-auto w-full">
          <nav className="text-white/60 text-[12px] font-montserrat mb-2">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            {' / '}
            <Link href="/ventanas-pvc" className="hover:text-white transition-colors">Puertas y Ventanas PVC Ecoven Plus</Link>
            {' / '}
            <span className="text-white" aria-current="page">{c.hero.breadcrumbLabel}</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            {c.hero.badge.variant === 'rojo' ? (
              <span className="bg-rojo/80 text-white text-[10px] font-montserrat font-bold tracking-[3px] uppercase px-3 py-1 rounded-full">
                {c.hero.badge.text}
              </span>
            ) : (
              <span className="bg-arena/20 border border-arena/40 text-arena text-[10px] font-montserrat font-bold tracking-[3px] uppercase px-3 py-1 rounded-full">
                {c.hero.badge.text}
              </span>
            )}
          </div>
          <h1 className="font-montserrat text-3xl font-extrabold text-white">{c.hero.title}</h1>
        </div>
      </div>

      <div className="max-w-site mx-auto px-6 py-14 grid lg:grid-cols-[1fr_320px] gap-12">
        <div>
          {/* ── Intro + photo ─────────────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
            <div>
              <p className="text-gris-medio text-base leading-relaxed mb-4">{c.intro.p1}</p>
              <p className="text-gris-medio text-base leading-relaxed">{c.intro.p2}</p>
            </div>
            <div className="img-zoom-wrap shadow-md">
              <Image
                src={c.introPhoto.src}
                alt={c.introPhoto.alt}
                width={600}
                height={450}
                className="w-full h-[260px] object-cover img-zoom img-reveal"
              />
            </div>
          </div>

          {/* ── Stat grid ─────────────────────────────────────────────────── */}
          {c.stats.dark ? (
            <div className="bg-carbon rounded-xl p-4 mb-10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {c.stats.items.map(({ val, label, highlight }) => (
                  <div key={label} className={`rounded-xl p-4 text-center border ${highlight ? 'bg-white/5 border-rojo' : 'bg-white/5 border-white/10'}`}>
                    <p className="font-montserrat text-xl font-extrabold text-white">{val}</p>
                    <p className="text-[11px] text-white/50 mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {c.stats.items.map(({ val, label, highlight }) => (
                <div key={label} className={`rounded-xl p-4 text-center border ${highlight ? 'bg-crema border-rojo' : 'bg-crema border-gris-claro'}`}>
                  <p className="font-montserrat text-xl font-extrabold text-carbon">{val}</p>
                  <p className="text-[11px] text-gris-medio mt-1">{label}</p>
                </div>
              ))}
            </div>
          )}

          {/* ── Características + perfil ──────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
            <div>
              <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5">Características técnicas</h2>
              <div className="space-y-3">
                {c.features.map(f => (
                  <div key={f} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-rojo flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm text-gris-medio">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`img-zoom-wrap shadow-sm ${c.profileImage.dark ? 'bg-carbon border border-white/10' : 'bg-crema border border-gris-claro'}`}>
              <Image
                src={c.profileImage.src}
                alt={c.profileImage.alt}
                width={400}
                height={500}
                className="w-full object-contain img-zoom img-reveal"
                style={{ animationDelay: '0.15s' }}
              />
            </div>
          </div>

          {/* ── Comparativa ───────────────────────────────────────────────── */}
          <SeriesComparison currentSeries={c.currentSeries} />

          {/* ── Ficha técnica ─────────────────────────────────────────────── */}
          <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-5">Ficha técnica</h2>
          <div className="rounded-xl border border-gris-claro overflow-hidden mb-4">
            {c.specs.map(([label, value], i) => (
              <div key={label} className={`flex justify-between items-center px-5 py-3 text-sm ${i % 2 === 0 ? 'bg-crema' : 'bg-white'}`}>
                <span className="text-gris-medio font-montserrat">{label}</span>
                <span className="font-montserrat font-semibold text-carbon text-right">{value}</span>
              </div>
            ))}
          </div>

          <a
            href={c.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-montserrat font-semibold text-rojo border border-rojo/40 hover:bg-rojo hover:text-white transition-colors rounded-lg px-4 py-2.5 mb-10"
          >
            <Download size={15} />
            {c.pdfLabel}
          </a>

          {/* ── Extra project photos (optional) ───────────────────────────── */}
          {c.extraPhotos && c.extraPhotos.length > 0 && (
            <div className="grid grid-cols-2 gap-3 mb-10">
              {c.extraPhotos.map((photo, i) => (
                <div key={photo.src} className="img-zoom-wrap shadow-sm">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={600}
                    height={400}
                    className="w-full h-[200px] object-cover img-zoom img-reveal"
                    style={{ animationDelay: `${(i + 1) * 0.1}s` }}
                  />
                </div>
              ))}
            </div>
          )}

          {/* ── Acabados disponibles ──────────────────────────────────────── */}
          <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-2">Acabados disponibles</h2>
          <p className="text-[11px] uppercase tracking-wider font-montserrat text-gris-medio mb-3">
            Colores Foliados (Estándar)
          </p>
          <div className="mb-7">
            <ColorSwatches swatches={ecovenFoliados} />
          </div>
          <p className="text-[11px] uppercase tracking-wider font-montserrat text-gris-medio mb-1">
            Colores Spectral
          </p>
          <p className="text-[11px] text-gris-medio font-montserrat mb-3">Premium ultra-matte</p>
          <ColorSwatches swatches={ecovenSpectral} />
        </div>

        {/* ── Sidebar ──────────────────────────────────────────────────────── */}
        <aside className="lg:sticky lg:top-20 h-fit space-y-4">
          {c.sidebar.dark ? (
            <div className="bg-carbon rounded-xl p-6 border border-carbon">
              {c.sidebar.badge && (
                <span className="inline-block bg-white/10 text-arena text-[10px] font-montserrat font-bold tracking-wider uppercase px-2.5 py-1 rounded-full mb-3">
                  {c.sidebar.badge}
                </span>
              )}
              <h3 className="font-montserrat text-base font-bold text-white mb-2">{c.sidebar.title}</h3>
              <p className="text-sm text-white/60 mb-5">{c.sidebar.description}</p>
              <PresupuestoButton size="lg" className="w-full justify-center" />
              <div className="mt-4 pt-4 border-t border-white/10 text-sm font-montserrat space-y-1.5">
                {c.sidebar.checklist.map(item => (
                  <p key={item} className="flex items-center gap-1.5 text-white/60">
                    <CheckCircle2 size={12} className="text-arena flex-shrink-0" aria-hidden="true" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-crema rounded-xl p-6 border border-gris-claro">
              <h3 className="font-montserrat text-base font-bold text-carbon mb-2">{c.sidebar.title}</h3>
              <p className="text-sm text-gris-medio mb-5">{c.sidebar.description}</p>
              <PresupuestoButton size="lg" className="w-full justify-center" />
              <div className="mt-4 pt-4 border-t border-gris-claro text-sm text-gris-medio font-montserrat space-y-1.5">
                {c.sidebar.checklist.map(item => (
                  <p key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="text-rojo flex-shrink-0" aria-hidden="true" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          )}

          <div className="bg-white rounded-xl p-5 border border-gris-claro">
            <p className="font-montserrat text-[11px] font-bold tracking-[2px] uppercase text-gris-medio mb-3">
              Otras series
            </p>
            {c.otherSeries.map(item => (
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
        </aside>
      </div>
    </div>
  )
}
