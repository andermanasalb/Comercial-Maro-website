import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { pvcSeriesConfigs } from '@/content/products/pvc-series'
import { PvcSeriesPage } from '@/components/shared/PvcSeriesPage'

export const metadata: Metadata = buildMetadata({
  title: "Ventanas PVC Serie S82 Passivhaus Ecoven Plus | Comercial MAR'O",
  description:
    'Ventanas PVC Serie S82 Ecoven Plus. Perfil 82 mm, 7 cámaras. Uf < 1,0 W/m²K. Compatible Passivhaus. RC2. Hasta 48 dB. Instalación en Bilbao y Vizcaya.',
  keywords: ['ventanas PVC S82 Bilbao', 'Passivhaus PVC Bilbao', 'Ecoven Plus S82', 'eficiencia energética PVC Bizkaia'],
  path: '/ventanas-pvc/serie-s82',
})

export default function SerieS82Page() {
  return <PvcSeriesPage config={pvcSeriesConfigs.S82} />
}
