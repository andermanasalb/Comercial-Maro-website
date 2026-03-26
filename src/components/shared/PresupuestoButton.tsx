import Link from 'next/link'
import { cn } from '@/lib/utils'

interface PresupuestoButtonProps {
  variant?: 'primary' | 'outline'
  size?: 'sm' | 'lg'
  className?: string
}

export function PresupuestoButton({ variant = 'primary', size = 'lg', className }: PresupuestoButtonProps) {
  return (
    <Link
      href="/contacto"
      className={cn(
        'inline-flex items-center justify-center font-montserrat font-semibold rounded-md transition-colors min-h-[48px]',
        size === 'lg' ? 'px-6 py-3 text-sm' : 'px-4 py-2 text-xs',
        variant === 'primary'
          ? 'bg-rojo text-white hover:bg-rojo-oscuro'
          : 'border-2 border-white/70 text-white hover:bg-white hover:text-rojo',
        className
      )}
    >
      Háblanos de tu proyecto
    </Link>
  )
}
