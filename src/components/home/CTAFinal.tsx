'use client'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { FooterLegalLinks } from '@/components/shared/FooterLegalLinks'

const footerProducts = [
  { name: 'Puertas y Ventanas PVC', href: '/ventanas-pvc' },
  { name: 'Puertas y Ventanas Aluminio', href: '/ventanas-aluminio' },
  { name: 'Cerramientos', href: '/cerramientos' },
  { name: 'Barandillas y Celosías', href: '/barandillas' },
  { name: 'Cortinas interiores y estores', href: '/cortinas-estores' },
  { name: 'Cerramientos Fenólicos', href: '/cerramientos-fenolicos' },
  { name: 'Mamparas de Oficina', href: '/mamparas-oficina' },
  { name: 'Mamparas de Ducha', href: '/mamparas-ducha' },
]

const footerLinks = [
  { name: 'Quiénes somos', href: '/sobre-nosotros' },
  { name: 'Sectores',      href: '/#sectores'       },
  { name: 'Proyectos',     href: '/proyectos'       },
  { name: 'Blog',          href: '/blog'            },
]

const helpLinks = [
  { name: 'Preguntas frecuentes', href: '/#faq'     },
  { name: 'Contacto',             href: '/contacto' },
]

const contactInfo = [
  { Icon: MapPin, text: 'Av. Lehendakari Aguirre, 161 · 48015 Bilbao', href: 'https://www.google.com/maps/search/?api=1&query=Avenida+Lehendakari+Aguirre+161+48015+Bilbao' },
  { Icon: Phone,  text: '+34 944 100 462',          href: 'tel:+34944100462'                },
  { Icon: Mail,   text: 'bilbao@comercialmaro.biz', href: 'mailto:bilbao@comercialmaro.biz' },
  { Icon: Clock,  text: 'Lun-Vie 9:30–13:30 / 16:00–20:00', href: null                     },
]

export function CTAFinal() {
  return (
    <section
      id="cta"
      className="h-[calc(100dvh-4rem)] snap-start snap-always overflow-hidden flex flex-col"
    >
      {/* ── Top half: CTA ───────────────────────────────────────────── */}
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

      {/* ── Bottom half: Footer ─────────────────────────────────────── */}
      <div className="flex-[0.62] bg-[#111113] text-white flex items-center px-6 py-8">
        <div className="max-w-[1280px] mx-auto w-full">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 mb-4">
            {/* Brand */}
            <div>
              <p className="font-montserrat font-black text-base mb-2">
                MAR<span className="text-rojo">&apos;</span>O
              </p>
              <p className="text-white/45 text-[11px] leading-relaxed mb-3">
                Carpintería metálica en Bilbao. Más de 25 años fabricando e instalando ventanas,
                puertas y cerramientos en Vizcaya.
              </p>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-montserrat text-[10px] font-bold tracking-[2px] uppercase text-arena mb-3">
                Productos
              </h4>
              <ul className="space-y-1.5">
                {footerProducts.map(p => (
                  <li key={p.href}>
                    <Link href={p.href} className="block py-1 text-[11px] text-white/55 hover:text-white transition-colors">
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-montserrat text-[10px] font-bold tracking-[2px] uppercase text-arena mb-3">
                Empresa
              </h4>
              <ul className="space-y-1.5">
                {footerLinks.map(c => (
                  <li key={c.href}>
                    <Link href={c.href} className="block py-1 text-[11px] text-white/55 hover:text-white transition-colors">
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help */}
            <div>
              <h4 className="font-montserrat text-[10px] font-bold tracking-[2px] uppercase text-arena mb-3">
                Ayuda
              </h4>
              <ul className="space-y-1.5">
                {helpLinks.map(l => (
                  <li key={l.href + l.name}>
                    <Link href={l.href} className="block py-1 text-[11px] text-white/55 hover:text-white transition-colors">
                      {l.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('chat:open'))}
                    className="block py-1 text-[11px] text-white/55 hover:text-white transition-colors cursor-pointer"
                  >
                    Chat en vivo
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-montserrat text-[10px] font-bold tracking-[2px] uppercase text-arena mb-3">
                Contacto
              </h4>
              <ul className="space-y-2">
                {contactInfo.map(({ Icon, text, href }, i) => (
                  <li key={i} className="flex items-start gap-1.5 py-1 text-[11px] text-white/55">
                    <Icon size={11} className="mt-0.5 flex-shrink-0 text-arena" />
                    {href
                      ? <a href={href} className="hover:text-white transition-colors" target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>{text}</a>
                      : <span>{text}</span>
                    }
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/[0.08] pt-3 flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-[10px] text-white/30">
              © 2026 Comercial MAR&apos;O · Todos los derechos reservados
            </p>
            <FooterLegalLinks className="flex gap-4" />
          </div>
        </div>
      </div>
    </section>
  )
}
