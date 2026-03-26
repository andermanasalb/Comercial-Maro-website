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
  { name: 'Proyectos', href: '/proyectos' },
  { name: 'Sectores', href: '/#sectores' },
  { name: 'Blog', href: '/blog' },
]

const help = [
  { name: 'Preguntas frecuentes', href: '/#faq'     },
  { name: 'Chat en vivo',         href: '#'          },
  { name: 'Contacto',             href: '/contacto' },
]

const contactInfo = [
  { Icon: MapPin, text: 'Av. Lehendakari Aguirre, 161 · 48015 Bilbao' },
  { Icon: Phone, text: '+34 944 100 462' },
  { Icon: Mail, text: 'bilbao@comercialmaro.biz' },
  { Icon: Clock, text: 'Lun-Vie 9:30–13:30 / 16:00–20:00' },
]

export function Footer() {
  return (
    <footer id="footer" className="bg-[#111113] text-white w-full">
      <div className="max-w-[1280px] mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div>
            <p className="font-montserrat font-black text-xl mb-3">MAR<span className="text-rojo">&apos;</span>O</p>
            <p className="text-white/45 text-[12px] leading-relaxed mb-4">
              Carpintería metálica y aluminio en Bilbao. Más de 25 años fabricando e instalando ventanas, puertas y cerramientos en Vizcaya y el norte de España.
            </p>
          </div>

          <div>
            <h4 className="font-montserrat text-[11px] font-bold tracking-[2px] uppercase text-arena mb-4">Productos</h4>
            <ul className="space-y-2">
              {products.map(p => (
                <li key={p.href}><Link href={p.href} className="text-[12px] text-white/55 hover:text-white transition-colors">{p.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat text-[11px] font-bold tracking-[2px] uppercase text-arena mb-4">Empresa</h4>
            <ul className="space-y-2">
              {company.map(c => (
                <li key={c.href}><Link href={c.href} className="text-[12px] text-white/55 hover:text-white transition-colors">{c.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat text-[11px] font-bold tracking-[2px] uppercase text-arena mb-4">Ayuda</h4>
            <ul className="space-y-2">
              {help.map(l => (
                <li key={l.href + l.name}><Link href={l.href} className="text-[12px] text-white/55 hover:text-white transition-colors">{l.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat text-[11px] font-bold tracking-[2px] uppercase text-arena mb-4">Contacto</h4>
            <ul className="space-y-3">
              {contactInfo.map(({ Icon, text }, i) => (
                <li key={i} className="flex items-start gap-2 text-[12px] text-white/55">
                  <Icon size={13} className="mt-0.5 flex-shrink-0 text-arena" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[10px] text-white/30">© 2026 Comercial MAR&apos;O · Todos los derechos reservados</p>
          <div className="flex gap-4">
            <FooterLegalLinks className="flex gap-4" />
          </div>
        </div>
      </div>
    </footer>
  )
}
