import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Solicita tu presupuesto | Comercial MAR'O",
  description: "Contacta con Comercial MAR'O para solicitar un presupuesto gratuito sin compromiso. Carpintería metálica en Bilbao y Vizcaya.",
  keywords: ['presupuesto carpintería metálica', "contacto MAR'O", 'ventanas aluminio Bilbao precio', 'cerrajería Bilbao'],
}

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
