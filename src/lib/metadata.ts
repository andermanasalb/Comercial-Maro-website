import type { Metadata } from 'next'

interface PageMetadataProps {
  title: string
  description: string
  keywords: string[]
  path: string
  ogImage?: string
}

const DEFAULT_OG = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://comercialmaro.es'

export function buildMetadata(props: PageMetadataProps): Metadata {
  return {
    title: props.title,
    description: props.description,
    keywords: props.keywords,
    alternates: { canonical: `${SITE_URL}${props.path}` },
    openGraph: {
      title: props.title,
      description: props.description,
      url: `${SITE_URL}${props.path}`,
      images: [{ url: props.ogImage ?? DEFAULT_OG, width: 1200, height: 630 }],
      type: 'website',
      locale: 'es_ES',
      siteName: "Comercial MAR'O",
    },
    twitter: { card: 'summary_large_image' },
    robots: { index: true, follow: true },
  }
}
