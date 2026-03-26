import type { Metadata } from 'next'
import Script from 'next/script'
import { Montserrat, Inter } from 'next/font/google'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', display: 'swap' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = {
  title: {
    default: "Carpintería Metálica Bilbao | Comercial MAR'O | Ventanas y Cerramientos Vizcaya",
    template: "%s | Comercial MAR'O",
  },
  description: "Fabricantes e instaladores de ventanas, puertas y cerramientos de aluminio en Bilbao y Vizcaya. Más de 25 años. Presupuesto gratuito.",
  keywords: ['carpintería metálica Bilbao', 'ventanas aluminio Vizcaya', 'cerramientos Bilbao'],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://comercialmaro.es'),
}

const localBusinessSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: "Comercial MAR'O",
  description: 'Fabricantes e instaladores de carpintería metálica en Bilbao y Vizcaya',
  url: 'https://comercialmaro.es',
  telephone: '[TELÉFONO]',
  email: '[EMAIL]',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '[DIRECCIÓN]',
    addressLocality: 'Bilbao',
    addressRegion: 'Vizcaya',
    postalCode: '[CP]',
    addressCountry: 'ES',
  },
  geo: { '@type': 'GeoCoordinates', latitude: '43.2630', longitude: '-2.9350' },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:30',
    closes: '18:00',
  },
  areaServed: ['Bilbao', 'Vizcaya', 'País Vasco', 'España'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        <Script
          id="local-business-jsonld"
          type="application/ld+json"
          // Content is a static JSON string built from trusted internal data — no user input involved
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: localBusinessSchema }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
