import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { FooterColumns } from '@/components/shared/FooterColumns'

export function CTAFinal() {
  return (
    <section
      id="cta"
      className="h-[calc(100dvh-4rem)] snap-start snap-always overflow-hidden flex flex-col"
    >
      {/* ── Top half: CTA ─────────────────────────────────────────────── */}
      <div
        className="flex-[0.38] flex flex-col items-center justify-center px-6 text-center py-6"
        style={{ background: 'linear-gradient(135deg, #D42B2B 0%, #A51F1F 100%)' }}
      >
        <h2 className="font-montserrat text-xl md:text-2xl font-extrabold text-white mb-2">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="text-white/85 text-[13px] mb-4">
          Cuéntanoslo. Te damos respuesta en menos de 24 horas, sin compromiso.
        </p>
        <Link
          href="/contacto"
          className="inline-flex items-center justify-center font-montserrat text-[13px] font-bold bg-white text-rojo px-6 py-2.5 rounded-md hover:bg-crema transition-colors min-h-[40px] mb-4"
        >
          Háblanos de tu proyecto
        </Link>
        <div className="flex flex-wrap justify-center gap-5 text-white/80 font-montserrat text-[11px]">
          <a href="tel:+34944100462" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone size={12} /> Llamar ahora
          </a>
          <a href="mailto:bilbao@comercialmaro.biz" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail size={12} /> Enviar email
          </a>
          <a href="https://www.google.com/maps/search/?api=1&query=Avenida+Lehendakari+Aguirre+161+48015+Bilbao" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <MapPin size={12} /> Visítanos en Bilbao
          </a>
        </div>
      </div>

      {/* ── Bottom half: Footer ────────────────────────────────────────── */}
      {/* NOTE: This section serves as the homepage footer. The layout <Footer>
          is hidden on snap-page via globals.css. See EnablePageSnap.tsx for
          the full explanation of this three-file contract. */}
      <div className="flex-[0.62] bg-[#111113] text-white flex items-center px-6 py-8">
        <FooterColumns />
      </div>
    </section>
  )
}
