import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { pvcSeriesConfigs } from '@/content/products/pvc-series'
import { PvcSeriesPage } from '@/components/shared/PvcSeriesPage'

export const metadata: Metadata = buildMetadata({
  title: "Ventanas PVC Serie S76 Ecoven Plus en Bilbao | Comercial MAR'O",
  description:
    'Ventanas PVC Serie S76 Ecoven Plus. Perfil 76 mm, 5 cámaras, triple junta. Uf 1,1 W/m²K, Uw 0,75 W/m²K. Hasta 45 dB. Bilbao y Vizcaya.',
  keywords: ['ventanas PVC S76 Bilbao', 'Ecoven Plus S76', 'aislamiento acústico PVC Bizkaia'],
  path: '/ventanas-pvc/serie-s76',
})

export default function SerieS76Page() {
  return <PvcSeriesPage config={pvcSeriesConfigs.S76} />
}
