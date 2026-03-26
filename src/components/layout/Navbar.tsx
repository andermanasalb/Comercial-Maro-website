'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, Phone, MapPin, ChevronLeft } from 'lucide-react'
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
  { name: '¿Por qué nosotros?', href: '/#nosotros' },
  { name: 'Sectores',           href: '/#sectores' },
  { name: 'Galería',            href: '/#galeria'  },
  { name: 'FAQ',                href: '/#faq'      },
  { name: 'Blog',               href: '/blog'      },
  { name: 'Contacto',           href: '/contacto'  },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [topBarVisible, setTopBarVisible] = useState(true)
  const closingRef = useRef(false)
  const pathname = usePathname()

  // Reset on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    setScrolled(false)
    setTopBarVisible(true)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      setTopBarVisible(window.scrollY < 40)
      // Close open dropdowns on scroll to prevent positioning drift
      if (!closingRef.current) {
        closingRef.current = true
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
        setTimeout(() => { closingRef.current = false }, 400)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
      {/* Top bar — opacity-only so layout never shifts and anchor offsets stay stable */}
      <motion.div
        animate={{ opacity: topBarVisible ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="bg-carbon h-8 pointer-events-none"
        style={{ pointerEvents: topBarVisible ? 'auto' : 'none' }}
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
        className="border-b border-gris-claro"
      >
        <div className="max-w-[1280px] mx-auto px-3 h-16 flex items-center justify-between gap-3">
          <Link href="/" className="flex-shrink-0 flex items-center h-full py-1">
            <Image
              src="/logo.png"
              alt="Comercial MAR'O"
              width={160}
              height={56}
              unoptimized
              className="h-full w-auto object-contain"
            />
          </Link>

          {/* Back to home — shown on inner pages */}
          {pathname !== '/' && (
            <Link
              href="/"
              className="hidden lg:flex items-center gap-1 font-montserrat text-[12px] font-semibold text-gris-medio hover:text-rojo transition-colors flex-shrink-0"
            >
              <ChevronLeft size={15} />
              Inicio
            </Link>
          )}

          {/* Desktop Nav */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-montserrat text-[13px] font-semibold text-gris-medio hover:text-rojo bg-transparent hover:bg-transparent focus:bg-transparent data-popup-open:bg-transparent data-open:bg-transparent">
                  Productos
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white shadow-lg border border-gris-claro">
                  <ul className="w-52 p-2">
                    <li>
                      <NavigationMenuLink
                        render={<Link href="/#productos" />}
                        className="block px-3 py-2 text-[13px] font-montserrat font-bold text-rojo hover:bg-crema rounded-md transition-colors"
                      >
                        Ver todos los productos →
                      </NavigationMenuLink>
                    </li>
                    <li className="mx-3 my-1 border-t border-gris-claro" />
                    {products.map(p => (
                      <li key={p.href}>
                        <NavigationMenuLink
                          render={<Link href={p.href} />}
                          className="block px-3 py-2 text-[13px] font-montserrat font-semibold text-gris-medio hover:text-rojo hover:bg-crema rounded-md transition-colors"
                        >
                          {p.name}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {navLinks.map(link => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} className="px-2 py-2 font-montserrat text-[13px] font-semibold text-gris-medio hover:text-rojo transition-colors whitespace-nowrap">
                    {link.name}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            href="/contacto"
            className="hidden lg:inline-flex items-center font-montserrat text-[13px] font-semibold bg-rojo text-white px-4 py-2 rounded-md hover:bg-rojo-oscuro transition-colors min-h-[36px] flex-shrink-0 whitespace-nowrap"
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
