'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, Phone, MapPin } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  NavigationMenu, NavigationMenuContent, NavigationMenuItem,
  NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

const products = [
  { name: 'Ventanas de Aluminio', href: '/ventanas' },
  { name: 'Puertas Metálicas', href: '/puertas' },
  { name: 'Cerramientos', href: '/cerramientos' },
  { name: 'Pérgolas Bioclimáticas', href: '/pergolas' },
  { name: 'Persianas y Protección', href: '/persianas' },
]

const navLinks = [
  { name: 'Proyectos', href: '/proyectos' },
  { name: 'Sectores', href: '/#sectores' },
  { name: 'Sobre nosotros', href: '/sobre-nosotros' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contacto', href: '/contacto' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [topBarVisible, setTopBarVisible] = useState(true)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      setTopBarVisible(window.scrollY < 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <motion.div
        animate={{ height: topBarVisible ? 32 : 0, opacity: topBarVisible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="bg-carbon overflow-hidden"
      >
        <div className="max-w-[1280px] mx-auto px-6 h-8 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-white/65 text-[11px]">
            <MapPin size={11} /> Bilbao, Vizcaya · Lun-Vie 8:30–18:00
          </span>
          <a
            href="tel:+34000000000"
            className="flex items-center gap-1.5 font-montserrat text-[11px] font-semibold text-arena hover:text-white transition-colors"
          >
            <Phone size={11} /> +34 [TELÉFONO]
          </a>
        </div>
      </motion.div>

      {/* Main bar */}
      <motion.div
        animate={{ boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.12)' : '0 0 0 rgba(0,0,0,0)' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="bg-white/95 backdrop-blur-sm border-b border-gris-claro"
      >
        <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between gap-8">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/logo.png"
              alt="Comercial MAR'O"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-montserrat text-[13px] font-semibold text-gris-medio hover:text-rojo">
                  Productos
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-52 p-2">
                    {products.map(p => (
                      <li key={p.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={p.href}
                            className="block px-3 py-2 text-[13px] font-montserrat font-semibold text-gris-medio hover:text-rojo hover:bg-crema rounded-md transition-colors"
                          >
                            {p.name}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {navLinks.map(link => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} className="px-3 py-2 font-montserrat text-[13px] font-semibold text-gris-medio hover:text-rojo transition-colors">
                    {link.name}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            href="/contacto"
            className="hidden lg:inline-flex items-center font-montserrat text-[13px] font-semibold bg-rojo text-white px-5 py-2.5 rounded-md hover:bg-rojo-oscuro transition-colors min-h-[48px] flex-shrink-0"
          >
            Solicitar presupuesto
          </Link>

          <Sheet>
            <SheetTrigger className="lg:hidden p-2" aria-label="Abrir menú">
              <Menu size={24} className="text-carbon" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-white">
              <nav className="mt-8 flex flex-col gap-1">
                <p className="font-montserrat text-[10px] font-bold tracking-[3px] uppercase text-arena mb-3 px-3">Productos</p>
                {products.map(p => (
                  <Link key={p.href} href={p.href} className="px-3 py-2.5 font-montserrat text-sm font-semibold text-gris-medio hover:text-rojo hover:bg-crema rounded-md transition-colors">
                    {p.name}
                  </Link>
                ))}
                <div className="my-3 border-t border-gris-claro" />
                {navLinks.map(link => (
                  <Link key={link.href} href={link.href} className="px-3 py-2.5 font-montserrat text-sm font-semibold text-gris-medio hover:text-rojo hover:bg-crema rounded-md transition-colors">
                    {link.name}
                  </Link>
                ))}
                <div className="mt-4">
                  <Link href="/contacto" className="flex items-center justify-center font-montserrat text-sm font-semibold bg-rojo text-white px-4 py-3 rounded-md hover:bg-rojo-oscuro transition-colors min-h-[48px]">
                    Solicitar presupuesto
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </header>
  )
}
