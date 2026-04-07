export interface ColorSwatch {
  name: string
  hex: string
  border: boolean
}

export const ecovenFoliados: ColorSwatch[] = [
  { name: 'Blanco 9016',       hex: '#F5F5F2', border: true  },
  { name: 'Gris antracita 7016', hex: '#3B3E42', border: false },
  { name: 'Negro 9005',        hex: '#1A1A1A', border: false },
  { name: 'Champán',           hex: '#CDB88A', border: false },
  { name: 'Marrón',            hex: '#5C3A2A', border: false },
  { name: 'Roble dorado',      hex: '#BC8830', border: false },
  { name: 'Roble claro',       hex: '#C4924A', border: false },
  { name: 'Palisandro',        hex: '#722A1E', border: false },
]

export const ecovenSpectral: ColorSwatch[] = [
  { name: 'Blanco cálido',    hex: '#EEEAE4', border: true  },
  { name: 'Antracita cálido', hex: '#46433E', border: false },
  { name: 'Negro profundo',   hex: '#221F1C', border: false },
  { name: 'Roble salvaje',    hex: '#B08845', border: false },
  { name: 'Perla',            hex: '#DDD8CE', border: true  },
  { name: 'Arena',            hex: '#C0A474', border: false },
  { name: 'Gris cálido',      hex: '#706E6A', border: false },
  { name: 'Azul noche',       hex: '#384258', border: false },
]

export interface SeriesComparisonRow {
  series: string
  pct: string
  val: string
  delay: string
}

export interface SeriesComparisonGroup {
  label: string
  rows: SeriesComparisonRow[]
}

export const seriesComparisonData: SeriesComparisonGroup[] = [
  {
    label: 'Transmitancia Uf (menor es mejor)',
    rows: [
      { series: 'S70', pct: '55%', val: '1,3 W/m²K', delay: '0s'   },
      { series: 'S76', pct: '72%', val: '1,1 W/m²K', delay: '0.1s' },
      { series: 'S82', pct: '90%', val: '<1,0 W/m²K', delay: '0.2s' },
    ],
  },
  {
    label: 'Profundidad de perfil',
    rows: [
      { series: 'S70', pct: '58%', val: '70 mm', delay: '0s'   },
      { series: 'S76', pct: '68%', val: '76 mm', delay: '0.1s' },
      { series: 'S82', pct: '82%', val: '82 mm', delay: '0.2s' },
    ],
  },
  {
    label: 'Aislamiento acústico máx.',
    rows: [
      { series: 'S70', pct: '80%', val: '48 dB', delay: '0s'   },
      { series: 'S76', pct: '75%', val: '45 dB', delay: '0.1s' },
      { series: 'S82', pct: '80%', val: '48 dB', delay: '0.2s' },
    ],
  },
]
