'use client'
import { useState, useCallback } from 'react'
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
import { navProducts, navLinks } from '@/content/nav-data'
import { company } from '@/lib/company'
import { useNavScroll } from '@/hooks/useNavScroll'

// Product-category prefixes where the navbar CTA is hidden (these pages have their own CTAs)
const productPagePrefixes = [
  '/ventanas-pvc',
  '/cortinas-estores',
  '/mamparas-oficina',
  '/cerramientos-fenolicos',
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const closeMenu = useCallback(() => setMenuOpen(false), [])
  const { scrolled } = useNavScroll(closeMenu)
  const isProductPage = productPagePrefixes.some(p => pathname === p || pathname.startsWith(p + '/'))

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
      {/* Top bar — height 32→0 so nav slides up */}
      <motion.div
        animate={{ height: scrolled ? 0 : 32 }}
        transition={{ duration: 0.2, ease: 'easeIn' }}
        className="bg-carbon overflow-hidden"
        style={{ pointerEvents: scrolled ? 'none' : 'auto' }}
      >
        <motion.div
          animate={{ y: scrolled ? -32 : 0 }}
          transition={{ duration: 0.2, ease: 'easeIn' }}
          className="max-w-site mx-auto pl-0 pr-3 h-8 flex items-center justify-between"
        >
          <a
            href={company.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/65 text-xs hover:text-white transition-colors"
          >
            <MapPin size={11} /> {company.address.city}, {company.address.region} · {company.hours}
          </a>
          <a
            href={`tel:${company.phone}`}
            className="flex items-center gap-1.5 font-montserrat text-xs font-semibold text-arena hover:text-white transition-colors"
          >
            <Phone size={11} /> {company.phoneFormatted}
          </a>
        </motion.div>
      </motion.div>

      {/* Main bar */}
      <motion.div
        animate={{ boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.12)' : '0 0 0 rgba(0,0,0,0)' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="border-b border-gris-claro"
      >
        <div className="max-w-site mx-auto pl-0 pr-3 h-16 grid grid-cols-[1fr_auto_1fr] items-center">
          <Link href="/" className="flex-shrink-0 flex items-center justify-self-start">
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
                      {navProducts.map(p => (
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
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger className="lg:hidden p-2" aria-label="Abrir menú">
                <Menu size={24} className="text-carbon" />
              </SheetTrigger>
              <SheetContent side="right" className="w-72 bg-white">
                <nav className="mt-8 flex flex-col gap-1">
                  <p className="font-montserrat text-[10px] font-bold tracking-[3px] uppercase text-arena mb-3 px-3">Productos</p>
                  {navProducts.map(p => (
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
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.div>
    </header>
  )
}
