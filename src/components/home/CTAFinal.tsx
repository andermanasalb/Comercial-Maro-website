import Link from 'next/link'
import { Phone, Mail, MapPin, Camera, Globe, Rss, Clock } from 'lucide-react'

const footerProducts = [
  { name: 'Ventanas de Aluminio', href: '/ventanas' },
  { name: 'Puertas Metálicas',    href: '/puertas'  },
  { name: 'Cerramientos',         href: '/cerramientos' },
  { name: 'Pérgolas Bioclimáticas', href: '/pergolas' },
  { name: 'Persianas',            href: '/persianas' },
]

const footerLinks = [
  { name: 'Quiénes somos',   href: '/sobre-nosotros' },
  { name: 'Proyectos',       href: '/proyectos'       },
  { name: 'Blog',            href: '/blog'            },
  { name: 'Contacto',        href: '/contacto'        },
]

const contactInfo = [
  { Icon: MapPin, text: '[Dirección], Bilbao, Bizkaia' },
  { Icon: Phone,  text: '+34 [TELÉFONO]'               },
  { Icon: Mail,   text: '[email]@comercialmaro.es'     },
  { Icon: Clock,  text: 'Lun-Vie 8:30–18:00'          },
]

export function CTAFinal() {
  return (
    <section
      id="cta"
      className="h-[calc(100dvh-6rem)] snap-start snap-always overflow-hidden flex flex-col"
    >
      {/* ── Top half: CTA ───────────────────────────────────────────── */}
      <div
        className="flex-1 flex flex-col items-center justify-center px-6 text-center"
        style={{ background: 'linear-gradient(135deg, #D42B2B 0%, #A51F1F 100%)' }}
      >
        <h2 className="font-montserrat text-xl md:text-2xl font-extrabold text-white mb-2">
          ¿Listo para transformar tu espacio?
        </h2>
        <p className="text-white/85 text-[13px] mb-4">
          Solicita tu presupuesto gratuito hoy. Te respondemos en menos de 24 horas.
        </p>
        <Link
          href="/contacto"
          className="inline-flex items-center justify-center font-montserrat text-[13px] font-bold bg-white text-rojo px-6 py-2.5 rounded-md hover:bg-crema transition-colors min-h-[40px] mb-4"
        >
          Solicitar presupuesto gratis
        </Link>
        <div className="flex flex-wrap justify-center gap-5 text-white/80 font-montserrat text-[11px]">
          <span className="flex items-center gap-1.5"><Phone size={12} /> Llamar ahora</span>
          <span className="flex items-center gap-1.5"><Mail size={12} /> Enviar email</span>
          <span className="flex items-center gap-1.5"><MapPin size={12} /> Visítanos en Bilbao</span>
        </div>
      </div>

      {/* ── Bottom half: Footer ─────────────────────────────────────── */}
      <div className="flex-1 bg-[#111113] text-white flex items-center px-6">
        <div className="max-w-[1280px] mx-auto w-full">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
            {/* Brand */}
            <div>
              <p className="font-montserrat font-black text-base mb-2">
                MAR<span className="text-rojo">&apos;</span>O
              </p>
              <p className="text-white/45 text-[11px] leading-relaxed mb-3">
                Carpintería metálica en Bilbao. Más de 25 años fabricando e instalando ventanas,
                puertas y cerramientos en Vizcaya.
              </p>
              <div className="flex gap-2">
                {[Camera, Globe, Rss].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Red social"
                    className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-rojo transition-colors"
                  >
                    <Icon size={12} />
                  </a>
                ))}
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-montserrat text-[10px] font-bold tracking-[2px] uppercase text-arena mb-3">
                Productos
              </h4>
              <ul className="space-y-1.5">
                {footerProducts.map(p => (
                  <li key={p.href}>
                    <Link href={p.href} className="text-[11px] text-white/55 hover:text-white transition-colors">
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
                    <Link href={c.href} className="text-[11px] text-white/55 hover:text-white transition-colors">
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-montserrat text-[10px] font-bold tracking-[2px] uppercase text-arena mb-3">
                Contacto
              </h4>
              <ul className="space-y-2">
                {contactInfo.map(({ Icon, text }, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-[11px] text-white/55">
                    <Icon size={11} className="mt-0.5 flex-shrink-0 text-arena" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/[0.08] pt-3 flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-[10px] text-white/30">
              © 2026 Comercial MAR&apos;O · Todos los derechos reservados
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-[10px] text-white/30 hover:text-white/60 transition-colors">
                Política de privacidad
              </Link>
              <Link href="#" className="text-[10px] text-white/30 hover:text-white/60 transition-colors">
                Aviso legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
