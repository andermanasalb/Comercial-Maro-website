import type { Metadata } from 'next'
import Script from 'next/script'
import { Montserrat, Inter } from 'next/font/google'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CookieBanner } from '@/components/layout/CookieBanner'
import { ChatWidget } from '@/components/layout/ChatWidget'
import { ScrollRestoration } from '@/components/layout/ScrollRestoration'
import { company } from '@/lib/company'
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
  icons: { icon: '/logo.png', shortcut: '/logo.png' },
}

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
const localBusinessSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: company.name,
  description: 'Fabricantes e instaladores de carpintería metálica en Bilbao y Vizcaya',
  url: company.url,
  telephone: company.phone,
  email: company.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.address.streetFull,
    addressLocality: company.address.city,
    addressRegion: company.address.region,
    postalCode: company.address.postalCode,
    addressCountry: company.address.countryCode,
  },
  geo: { '@type': 'GeoCoordinates', latitude: company.geo.lat, longitude: company.geo.lng },
  openingHoursSpecification: company.hoursSchema.map(h => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: weekdays,
    opens: h.opens,
    closes: h.closes,
  })),
  areaServed: company.areaServed,
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
        <ScrollRestoration />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <ChatWidget />
      </body>
    </html>
  )
}
