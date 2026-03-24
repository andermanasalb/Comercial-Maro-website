import Link from 'next/link'
import { Instagram, Facebook, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react'

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
  { name: 'Contacto', href: '/contacto' },
]

const contactInfo = [
  { Icon: MapPin, text: '[Dirección], Bilbao, Bizkaia' },
  { Icon: Phone, text: '+34 [TELÉFONO]' },
  { Icon: Mail, text: '[email]@comercialmaro.es' },
  { Icon: Clock, text: 'Lun-Vie 8:30–18:00' },
]

export function Footer() {
  return (
    <footer className="bg-[#111113] text-white">
      <div className="max-w-[1280px] mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <p className="font-montserrat font-black text-xl mb-3">MAR<span className="text-rojo">&apos;</span>O</p>
            <p className="text-white/45 text-[12px] leading-relaxed mb-4">
              Carpintería metálica y aluminio en Bilbao. Más de 25 años fabricando e instalando ventanas, puertas y cerramientos en Vizcaya y el norte de España.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" aria-label="Red social" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-rojo transition-colors">
                  <Icon size={14} />
                </a>
              ))}
            </div>
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
            <Link href="#" className="text-[10px] text-white/30 hover:text-white/60 transition-colors">Política de privacidad</Link>
            <Link href="#" className="text-[10px] text-white/30 hover:text-white/60 transition-colors">Aviso legal</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
