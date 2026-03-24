import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Proyectos de carpintería metálica en Bilbao | MAR'O",
  description: "Portfolio de obras realizadas por Comercial MAR'O: ventanas, cerramientos, pérgolas y fachadas en Bilbao, Vizcaya y el norte de España.",
  keywords: ['proyectos carpintería metálica Bilbao', 'obras aluminio Vizcaya', 'portfolio ventanas Bilbao'],
}

export default function ProyectosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
