import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { navProducts, companyLinks, helpLinks } from '@/content/nav-data'
import { company } from '@/lib/company'
import { FooterLegalLinks } from '@/components/shared/FooterLegalLinks'
import { OpenChatButton } from '@/components/shared/OpenChatButton'

const contactInfo = [
  { Icon: MapPin, text: `${company.address.street} · ${company.address.postalCode} ${company.address.city}`, href: company.mapsUrl },
  { Icon: Phone,  text: company.phoneFormatted,  href: `tel:${company.phone}`           },
  { Icon: Mail,   text: company.email,           href: `mailto:${company.email}`        },
  { Icon: Clock,  text: company.hours,           href: null                             },
]

export function FooterColumns() {
  return (
    <div className="max-w-site mx-auto w-full">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 mb-4">
        <div>
          <p className="font-montserrat font-black text-base mb-2">
            MAR<span className="text-rojo">&apos;</span>O
          </p>
          <p className="text-white/45 text-[11px] leading-relaxed mb-3">
            Carpintería metálica en Bilbao. Más de 25 años fabricando e instalando ventanas,
            puertas y cerramientos en Vizcaya.
          </p>
        </div>

        <div>
          <h4 className="font-montserrat text-[10px] font-bold tracking-[2px] uppercase text-arena mb-3">Productos</h4>
          <ul className="space-y-1.5">
            {navProducts.map(p => (
              <li key={p.href}>
                <Link href={p.href} className="block py-1 text-[11px] text-white/55 hover:text-white transition-colors">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-montserrat text-[10px] font-bold tracking-[2px] uppercase text-arena mb-3">Empresa</h4>
          <ul className="space-y-1.5">
            {companyLinks.map(c => (
              <li key={c.href}>
                <Link href={c.href} className="block py-1 text-[11px] text-white/55 hover:text-white transition-colors">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-montserrat text-[10px] font-bold tracking-[2px] uppercase text-arena mb-3">Ayuda</h4>
          <ul className="space-y-1.5">
            {helpLinks.map(l => (
              <li key={l.href}>
                <Link href={l.href} className="block py-1 text-[11px] text-white/55 hover:text-white transition-colors">
                  {l.name}
                </Link>
              </li>
            ))}
            <li>
              <OpenChatButton className="block py-1 text-[11px] text-white/55 hover:text-white transition-colors cursor-pointer">
                Chat en vivo
              </OpenChatButton>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-montserrat text-[10px] font-bold tracking-[2px] uppercase text-arena mb-3">Contacto</h4>
          <ul className="space-y-2">
            {contactInfo.map(({ Icon, text, href }) => (
              <li key={text} className="flex items-start gap-1.5 py-1 text-[11px] text-white/55">
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
  )
}
