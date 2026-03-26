'use client'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { FooterLegalLinks } from '@/components/shared/FooterLegalLinks'

const products = [
  { name: 'Ventanas de Aluminio', href: '/ventanas' },
  { name: 'Puertas Metálicas', href: '/puertas' },
  { name: 'Cerramientos', href: '/cerramientos' },
  { name: 'Pérgolas Bioclimáticas', href: '/pergolas' },
  { name: 'Persianas', href: '/persianas' },
]

const company = [
  { name: 'Quiénes somos', href: '/sobre-nosotros' },
  { name: 'Sectores',      href: '/#sectores'       },
  { name: 'Proyectos',     href: '/proyectos'       },
  { name: 'Blog',          href: '/blog'            },
]

const help = [
  { name: 'Preguntas frecuentes', href: '/#faq' },
  { name: 'Contacto', href: '/contacto' },
]

const contactInfo = [
  { Icon: MapPin, text: 'Av. Lehendakari Aguirre, 161 · 48015 Bilbao', href: 'https://www.google.com/maps/search/?api=1&query=Avenida+Lehendakari+Aguirre+161+48015+Bilbao' },
  { Icon: Phone,  text: '+34 944 100 462', href: 'tel:+34944100462' },
  { Icon: Mail,   text: 'bilbao@comercialmaro.biz', href: 'mailto:bilbao@comercialmaro.biz' },
  { Icon: Clock,  text: 'Lun-Vie 9:30–13:30 / 16:00–20:00', href: null },
]

export function Footer() {
  return (
    <footer id="footer" className="bg-[#111113] text-white w-full">
      <div className="max-w-[1280px] mx-auto px-6 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 mb-4">
          <div>
            <p className="font-montserrat font-black text-base mb-2">MAR<span className="text-rojo">&apos;</span>O</p>
            <p className="text-white/45 text-[11px] leading-relaxed mb-3">
              Carpintería metálica en Bilbao. Más de 25 años fabricando e instalando ventanas, puertas y cerramientos en Vizcaya.
            </p>
          </div>

          <div>
            <h4 className="font-montserrat text-[10px] font-bold tracking-[2px] uppercase text-arena mb-3">Productos</h4>
            <ul className="space-y-1.5">
              {products.map(p => (
                <li key={p.href}>
                  <Link href={p.href} className="block py-1 text-[11px] text-white/55 hover:text-white transition-colors">{p.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat text-[10px] font-bold tracking-[2px] uppercase text-arena mb-3">Empresa</h4>
            <ul className="space-y-1.5">
              {company.map(c => (
                <li key={c.href}>
                  <Link href={c.href} className="block py-1 text-[11px] text-white/55 hover:text-white transition-colors">{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat text-[10px] font-bold tracking-[2px] uppercase text-arena mb-3">Ayuda</h4>
            <ul className="space-y-1.5">
              {help.map(l => (
                <li key={l.href + l.name}>
                  <Link href={l.href} className="block py-1 text-[11px] text-white/55 hover:text-white transition-colors">{l.name}</Link>
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

          <div>
            <h4 className="font-montserrat text-[10px] font-bold tracking-[2px] uppercase text-arena mb-3">Contacto</h4>
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
          <p className="text-[10px] text-white/30">© 2026 Comercial MAR&apos;O · Todos los derechos reservados</p>
          <FooterLegalLinks className="flex gap-4" />
        </div>
      </div>
    </footer>
  )
}
