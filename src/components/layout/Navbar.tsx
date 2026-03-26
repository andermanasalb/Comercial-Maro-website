'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
  { name: '¿Por qué elegirnos?', href: '/#nosotros' },
  { name: 'Sectores',           href: '/#sectores' },
  { name: 'Galería',            href: '/#galeria'  },
  { name: 'FAQ',                href: '/#faq'      },
  { name: 'Blog',               href: '/blog'      },
  { name: 'Contacto',           href: '/#cta'      },
]

const productPages = ['/ventanas', '/puertas', '/cerramientos', '/pergolas', '/persianas']

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const prevPathnameRef = useRef(pathname)
  const isProductPage = productPages.includes(pathname)

  // Reset scroll on route change, but restore saved position when returning to homepage
  useEffect(() => {
    const prev = prevPathnameRef.current
    prevPathnameRef.current = pathname

    if (pathname === '/' && prev !== '/') {
      const savedY = parseInt(sessionStorage.getItem('home_scroll_y') ?? '0', 10)
      if (savedY > 0) {
        sessionStorage.removeItem('home_scroll_y')
        requestAnimationFrame(() => {
          window.scrollTo({ top: savedY, behavior: 'instant' as ScrollBehavior })
        })
        const s = savedY > 10
        setScrolled(s)
        document.documentElement.style.setProperty('--snap-padding', s ? '4rem' : '6rem')
        return
      }
    }

    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    setScrolled(false)
    document.documentElement.style.setProperty('--snap-padding', '6rem')
  }, [pathname])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      // Hysteresis: dead zone 5–10px prevents bouncing during inertia/snap animation
      setScrolled(prev => {
        if (y > 10) return true
        if (y < 5)  return false
        return prev
      })
      if (y > 10) document.documentElement.style.setProperty('--snap-padding', '4rem')
      else if (y < 5) document.documentElement.style.setProperty('--snap-padding', '6rem')
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
      {/* Top bar — height 32→0 so nav slides up, layout shrinks correctly */}
      <motion.div
        animate={{ height: scrolled ? 0 : 32 }}
        transition={{ duration: 0.2, ease: 'easeIn' }}
        className="bg-carbon overflow-hidden"
        style={{ pointerEvents: scrolled ? 'none' : 'auto' }}
      >
        <motion.div
          animate={{ y: scrolled ? -32 : 0 }}
          transition={{ duration: 0.2, ease: 'easeIn' }}
          className="max-w-[1280px] mx-auto pl-0 pr-3 h-8 flex items-center justify-between"
        >
          <a
            href="https://www.google.com/maps/search/?api=1&query=Avenida+Lehendakari+Aguirre+161+48015+Bilbao"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/65 text-xs hover:text-white transition-colors"
          >
            <MapPin size={11} /> Bilbao, Vizcaya · Lun-Vie 9:30–13:30 / 16:00–20:00
          </a>
          <a
            href="tel:+34944100462"
            className="flex items-center gap-1.5 font-montserrat text-xs font-semibold text-arena hover:text-white transition-colors"
          >
            <Phone size={11} /> +34 944 100 462
          </a>
        </motion.div>
      </motion.div>

      {/* Main bar */}
      <motion.div
        animate={{ boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.12)' : '0 0 0 rgba(0,0,0,0)' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="border-b border-gris-claro"
      >
        <div className="max-w-[1280px] mx-auto pl-0 pr-3 h-16 grid grid-cols-[1fr_auto_1fr] items-center">
          <Link
            href="/"
            onClick={() => {
              sessionStorage.removeItem('home_scroll_y')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex-shrink-0 flex items-center justify-self-start"
          >
            <Image
              src="/logo.png"
              alt="Comercial MAR'O"
              width={130}
              height={44}
              unoptimized
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex justify-center">
          <NavigationMenu className="flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-montserrat text-sm font-semibold text-gris-medio hover:text-rojo bg-transparent hover:bg-transparent focus:bg-transparent data-popup-open:bg-transparent data-open:bg-transparent">
                  Productos
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white shadow-lg border border-gris-claro">
                  <ul className="w-52 p-2">
                    <li>
                      <NavigationMenuLink
                        render={<Link href="/#productos" />}
                        className="block px-3 py-2 text-sm font-montserrat font-bold text-rojo hover:bg-crema rounded-md transition-colors"
                      >
                        Ver todos los productos →
                      </NavigationMenuLink>
                    </li>
                    <li className="mx-3 my-1 border-t border-gris-claro" />
                    {products.map(p => (
                      <li key={p.href}>
                        <NavigationMenuLink
                          render={<Link href={p.href} />}
                          className="block px-3 py-2 text-sm font-montserrat font-semibold text-gris-medio hover:text-rojo hover:bg-crema rounded-md transition-colors"
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
                  <Link href={link.href} className="px-2 py-2 font-montserrat text-sm font-semibold text-gris-medio hover:text-rojo transition-colors whitespace-nowrap">
                    {link.name}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          </div>

          <div className="flex items-center gap-3 justify-self-end">
          {!isProductPage && (
            <Link
              href="/contacto"
              className="hidden lg:inline-flex items-center font-montserrat text-sm font-semibold bg-rojo text-white px-4 py-2 rounded-md hover:bg-rojo-oscuro transition-colors min-h-[36px] flex-shrink-0 whitespace-nowrap"
            >
              Háblanos de tu proyecto
            </Link>
          )}

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
                    Háblanos de tu proyecto
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          </div>
        </div>
      </motion.div>
    </header>
  )
}
