import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export function CTAFinal() {
  return (
    <section className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #D42B2B 0%, #A51F1F 100%)' }}>
      <div className="max-w-[1280px] mx-auto text-center">
        <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold text-white mb-4">¿Listo para transformar tu espacio?</h2>
        <p className="text-white/85 text-base mb-8">Solicita tu presupuesto gratuito hoy. Te respondemos en menos de 24 horas.</p>
        <Link href="/contacto" className="inline-flex items-center justify-center font-montserrat text-base font-bold bg-white text-rojo px-8 py-4 rounded-md hover:bg-crema transition-colors min-h-[56px] mb-8">
          Solicitar presupuesto gratis
        </Link>
        <div className="flex flex-wrap justify-center gap-8 text-white/80 font-montserrat text-[12px]">
          <span className="flex items-center gap-2"><Phone size={14} /> Llamar ahora</span>
          <span className="flex items-center gap-2"><Mail size={14} /> Enviar email</span>
          <span className="flex items-center gap-2"><MapPin size={14} /> Visítanos en Bilbao</span>
        </div>
      </div>
    </section>
  )
}
