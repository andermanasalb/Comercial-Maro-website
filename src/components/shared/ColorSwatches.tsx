import type { ColorSwatch } from '@/content/product-data'

interface ColorSwatchesProps {
  swatches: ColorSwatch[]
}

export function ColorSwatches({ swatches }: ColorSwatchesProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {swatches.map(c => (
        <div key={c.name} className="flex flex-col items-center">
          <div
            style={{ backgroundColor: c.hex }}
            className={`w-12 h-12 rounded-xl ${c.border ? 'border border-gray-200' : ''}`}
          />
          <p className="text-[10px] font-montserrat text-gris-medio text-center mt-1 max-w-[48px]">{c.name}</p>
        </div>
      ))}
    </div>
  )
}
