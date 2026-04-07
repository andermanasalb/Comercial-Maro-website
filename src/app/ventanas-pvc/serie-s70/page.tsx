import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { pvcSeriesConfigs } from '@/content/products/pvc-series'
import { PvcSeriesPage } from '@/components/shared/PvcSeriesPage'

export const metadata: Metadata = buildMetadata({
  title: "Ventanas PVC Serie S70 Ecoven Plus en Bilbao | Comercial MAR'O",
  description:
    'Ventanas PVC Serie S70 Ecoven Plus. Perfil 70 mm, 5 cámaras. Uf 1,3 W/m²K, Uw 0,9 W/m²K. Hasta 48 dB. Ideal para renovación en Bilbao y Vizcaya.',
  keywords: ['ventanas PVC S70 Bilbao', 'Ecoven Plus S70', 'renovación ventanas PVC Vizcaya'],
  path: '/ventanas-pvc/serie-s70',
})

export default function SerieS70Page() {
  return <PvcSeriesPage config={pvcSeriesConfigs.S70} />
}
