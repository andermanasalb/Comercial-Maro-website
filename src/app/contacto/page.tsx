'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Link from 'next/link'
import { Loader2, MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react'

const schema = z.object({
  nombre: z.string().min(2, 'Mínimo 2 caracteres').max(100, 'Máximo 100 caracteres'),
  email: z.string().email('Email inválido').max(254, 'Email demasiado largo'),
  telefono: z.string().min(9, 'Mínimo 9 dígitos').max(20, 'Máximo 20 caracteres'),
  tipo: z.enum(['reforma', 'obra-nueva', 'oficina', 'colegio', 'otro'], { error: 'Selecciona un tipo' }),
  mensaje: z.string().min(20, 'Mínimo 20 caracteres').max(2000, 'Máximo 2000 caracteres'),
})
type FormData = z.infer<typeof schema>

const inputClass = 'w-full border border-gris-claro rounded-md px-4 py-3 text-sm text-carbon placeholder-gris-medio focus:outline-none focus:border-rojo transition-colors'
const labelClass = 'block font-montserrat text-[12px] font-semibold text-carbon mb-1.5'

export default function ContactoPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const pageShell = (children: React.ReactNode) => (
    <div className="min-h-screen bg-crema">
      <div className="bg-carbon py-16 px-6 text-center">
        <span className="font-montserrat text-[10px] font-bold tracking-[3px] uppercase text-arena block mb-3">Contacto</span>
        <h1 className="font-montserrat text-3xl font-extrabold text-white">Tu proyecto empieza con una conversación</h1>
        <p className="font-montserrat text-white/65 text-sm mt-2">Cuéntanos qué necesitas. Te respondemos en menos de 24 horas.</p>
      </div>
      <div className="bg-white border-b border-gris-claro px-6 py-3">
        <nav aria-label="Ruta de navegación" className="max-w-site mx-auto font-montserrat text-[12px] text-gris-medio flex items-center gap-1.5">
          <Link href="/" className="hover:text-rojo transition-colors">Inicio</Link>
          <span className="text-gris-medio/40">/</span>
          <span className="text-carbon font-semibold" aria-current="page">Contacto</span>
        </nav>
      </div>
      {children}
    </div>
  )

  if (status === 'success') {
    return pageShell(
      <div className="max-w-site mx-auto px-6 py-20 flex justify-center">
        <div className="bg-white rounded-xl p-10 shadow-sm text-center max-w-md w-full">
          <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" aria-hidden="true" />
          <h2 className="font-montserrat text-xl font-extrabold text-carbon mb-2">¡Consulta recibida!</h2>
          <p className="text-[14px] text-gris-medio mb-8">Te respondemos en menos de 24 horas. Revisa tu bandeja de entrada.</p>
          <Link href="/" className="inline-flex items-center justify-center font-montserrat text-sm font-bold bg-rojo text-white px-6 py-3 rounded-md hover:bg-rojo-oscuro transition-colors min-h-[48px]">
            Volver al inicio
          </Link>
        </div>
      </div>
    )
  }

  return pageShell(
    <div className="max-w-site mx-auto px-6 py-14 grid lg:grid-cols-[1.4fr_1fr] gap-12">
      <div className="bg-white rounded-xl p-8 shadow-sm">
        <h2 className="font-montserrat text-xl font-bold text-carbon mb-6">Cuéntanos tu proyecto</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="nombre" className={labelClass}>
                Nombre <abbr title="obligatorio" aria-hidden="true">*</abbr>
              </label>
              <input
                id="nombre"
                {...register('nombre')}
                className={inputClass}
                placeholder="Tu nombre"
                required
                aria-required="true"
                aria-describedby={errors.nombre ? 'nombre-error' : undefined}
              />
              {errors.nombre && <p id="nombre-error" role="alert" className="text-rojo text-[11px] mt-1">{errors.nombre.message}</p>}
            </div>
            <div>
              <label htmlFor="telefono" className={labelClass}>
                Teléfono <abbr title="obligatorio" aria-hidden="true">*</abbr>
              </label>
              <input
                id="telefono"
                {...register('telefono')}
                className={inputClass}
                placeholder="+34 600 000 000"
                required
                aria-required="true"
                aria-describedby={errors.telefono ? 'telefono-error' : undefined}
              />
              {errors.telefono && <p id="telefono-error" role="alert" className="text-rojo text-[11px] mt-1">{errors.telefono.message}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>
              Email <abbr title="obligatorio" aria-hidden="true">*</abbr>
            </label>
            <input
              id="email"
              {...register('email')}
              type="email"
              className={inputClass}
              placeholder="tu@email.com"
              required
              aria-required="true"
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && <p id="email-error" role="alert" className="text-rojo text-[11px] mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="tipo" className={labelClass}>
              Tipo de proyecto <abbr title="obligatorio" aria-hidden="true">*</abbr>
            </label>
            <select
              id="tipo"
              {...register('tipo')}
              className={inputClass}
              required
              aria-required="true"
              aria-describedby={errors.tipo ? 'tipo-error' : undefined}
            >
              <option value="">Selecciona una opción</option>
              <option value="reforma">Vivienda — Reforma</option>
              <option value="obra-nueva">Vivienda — Obra nueva</option>
              <option value="oficina">Oficina o Comercio</option>
              <option value="colegio">Colegio o Edificio Público</option>
              <option value="otro">Otro</option>
            </select>
            {errors.tipo && <p id="tipo-error" role="alert" className="text-rojo text-[11px] mt-1">{errors.tipo.message}</p>}
          </div>
          <div>
            <label htmlFor="mensaje" className={labelClass}>
              Mensaje <abbr title="obligatorio" aria-hidden="true">*</abbr>
            </label>
            <textarea
              id="mensaje"
              {...register('mensaje')}
              rows={5}
              className={`${inputClass} resize-none overflow-y-auto`}
              placeholder="Describe tu proyecto..."
              required
              aria-required="true"
              aria-describedby={errors.mensaje ? 'mensaje-error' : undefined}
            />
            {errors.mensaje && <p id="mensaje-error" role="alert" className="text-rojo text-[11px] mt-1">{errors.mensaje.message}</p>}
          </div>

          {status === 'error' && (
            <p role="alert" aria-live="polite" className="text-rojo font-montserrat text-[13px] font-semibold">
              Error al enviar. Por favor, inténtalo de nuevo o llámanos.
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex items-center justify-center gap-2 font-montserrat text-sm font-bold bg-rojo text-white px-6 py-3 rounded-md hover:bg-rojo-oscuro disabled:opacity-60 transition-colors min-h-[48px]"
          >
            {status === 'loading' ? <><Loader2 size={16} className="animate-spin" aria-hidden="true" /> Enviando...</> : 'Enviar consulta'}
          </button>
        </form>
      </div>

        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-montserrat text-[15px] font-bold text-carbon mb-4">Datos de contacto</h3>
            {[
              { Icon: MapPin, text: 'Av. Lehendakari Aguirre, 161 · 48015 Bilbao', href: 'https://www.google.com/maps/search/?api=1&query=Avenida+Lehendakari+Aguirre+161+48015+Bilbao' },
              { Icon: Phone, text: '+34 944 100 462', href: 'tel:+34944100462' },
              { Icon: Mail, text: 'bilbao@comercialmaro.biz', href: 'mailto:bilbao@comercialmaro.biz' },
              { Icon: Clock, text: 'Lun-Vie 9:30–13:30 / 16:00–20:00', href: null },
            ].map(({ Icon, text, href }, i) => (
              <div key={i} className="flex items-start gap-3 mb-3 text-[13px] text-gris-medio">
                <Icon size={16} className="text-rojo mt-0.5 flex-shrink-0" />
                {href
                  ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="hover:text-rojo transition-colors">{text}</a>
                  : <span>{text}</span>
                }
              </div>
            ))}
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Avenida+Lehendakari+Aguirre+161+48015+Bilbao"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl overflow-hidden h-56 relative group"
            aria-label="Ver en Google Maps"
          >
            <iframe
              src="https://maps.google.com/maps?q=Avenida+Lehendakari+Aguirre+161+48015+Bilbao&hl=es&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localización Comercial MAR'O"
            />
            <div className="absolute inset-0 bg-carbon/0 group-hover:bg-carbon/10 transition-colors flex items-end justify-end p-3 pointer-events-none">
              <span className="bg-white text-carbon font-montserrat text-[11px] font-semibold px-2.5 py-1 rounded-md shadow opacity-0 group-hover:opacity-100 transition-opacity">
                Abrir en Google Maps →
              </span>
            </div>
          </a>
        </div>
      </div>
  )
}
