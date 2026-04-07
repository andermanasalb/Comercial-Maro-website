import { seriesComparisonData } from '@/content/product-data'

interface SeriesComparisonProps {
  currentSeries: 'S70' | 'S76' | 'S82'
}

export function SeriesComparison({ currentSeries }: SeriesComparisonProps) {
  return (
    <div className="mb-10">
      <p className="text-[11px] uppercase tracking-wider font-montserrat text-gris-medio mb-5">
        Rendimiento frente a las otras series
      </p>
      {seriesComparisonData.map(({ label, rows }) => (
        <div key={label} className="mb-5">
          <p className="text-[11px] font-montserrat font-semibold text-carbon mb-2">{label}</p>
          <div className="space-y-2">
            {rows.map(({ series, pct, val, delay }) => {
              const current = series === currentSeries
              return (
                <div key={series} className="flex items-center gap-3">
                  <span className={`w-8 text-[12px] font-montserrat font-bold ${current ? 'text-carbon' : 'text-gris-medio'}`}>
                    {series}
                  </span>
                  <div className="flex-1 bg-gris-claro h-1.5 rounded-full">
                    <div
                      className={`h-1.5 rounded-full bar-grow ${current ? 'bg-rojo' : 'bg-arena'}`}
                      style={{ width: pct, animationDelay: delay }}
                    />
                  </div>
                  <span className={`w-24 text-right text-[11px] font-montserrat font-bold ${current ? 'text-carbon' : 'text-gris-medio'}`}>
                    {val}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
