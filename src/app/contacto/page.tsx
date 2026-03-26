'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Link from 'next/link'
import { Loader2, MapPin, Phone, Mail, Clock } from 'lucide-react'

const schema = z.object({
  nombre: z.string().min(2, 'Mínimo 2 caracteres'),
  email: z.string().email('Email inválido'),
  telefono: z.string().min(9, 'Mínimo 9 dígitos'),
  tipo: z.enum(['reforma', 'obra-nueva', 'oficina', 'colegio', 'otro'], { error: 'Selecciona un tipo' }),
  mensaje: z.string().min(20, 'Mínimo 20 caracteres'),
})
type FormData = z.infer<typeof schema>

const inputClass = 'w-full border border-gris-claro rounded-md px-4 py-3 text-sm text-carbon placeholder-gris-medio focus:outline-none focus:border-rojo transition-colors'
const labelClass = 'block font-montserrat text-[12px] font-semibold text-carbon mb-1.5'

export default function ContactoPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      if (!res.ok) throw new Error()
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-crema">
      <div className="bg-carbon py-16 px-6 text-center">
        <span className="font-montserrat text-[10px] font-bold tracking-[3px] uppercase text-arena block mb-3">Contacto</span>
        <h1 className="font-montserrat text-3xl font-extrabold text-white">Solicita tu presupuesto gratuito</h1>
      </div>
      <div className="bg-white border-b border-gris-claro px-6 py-3">
        <nav className="max-w-[1280px] mx-auto font-montserrat text-[12px] text-gris-medio flex items-center gap-1.5">
          <Link href="/" className="hover:text-rojo transition-colors">Inicio</Link>
          <span className="text-gris-medio/40">/</span>
          <span className="text-carbon font-semibold">Contacto</span>
        </nav>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-14 grid lg:grid-cols-[1.4fr_1fr] gap-12">
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="font-montserrat text-xl font-bold text-carbon mb-6">Cuéntanos tu proyecto</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="nombre" className={labelClass}>Nombre *</label>
                <input id="nombre" {...register('nombre')} className={inputClass} placeholder="Tu nombre" />
                {errors.nombre && <p className="text-rojo text-[11px] mt-1">{errors.nombre.message}</p>}
              </div>
              <div>
                <label htmlFor="telefono" className={labelClass}>Teléfono *</label>
                <input id="telefono" {...register('telefono')} className={inputClass} placeholder="+34 600 000 000" />
                {errors.telefono && <p className="text-rojo text-[11px] mt-1">{errors.telefono.message}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>Email *</label>
              <input id="email" {...register('email')} type="email" className={inputClass} placeholder="tu@email.com" />
              {errors.email && <p className="text-rojo text-[11px] mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="tipo" className={labelClass}>Tipo de proyecto *</label>
              <select id="tipo" {...register('tipo')} className={inputClass}>
                <option value="">Selecciona una opción</option>
                <option value="reforma">Vivienda — Reforma</option>
                <option value="obra-nueva">Vivienda — Obra nueva</option>
                <option value="oficina">Oficina o Comercio</option>
                <option value="colegio">Colegio o Edificio Público</option>
                <option value="otro">Otro</option>
              </select>
              {errors.tipo && <p className="text-rojo text-[11px] mt-1">{errors.tipo.message}</p>}
            </div>
            <div>
              <label htmlFor="mensaje" className={labelClass}>Mensaje *</label>
              <textarea id="mensaje" {...register('mensaje')} rows={4} className={inputClass} placeholder="Describe tu proyecto..." />
              {errors.mensaje && <p className="text-rojo text-[11px] mt-1">{errors.mensaje.message}</p>}
            </div>

            {status === 'success' && <p className="text-green-600 font-montserrat text-[13px] font-semibold">¡Consulta recibida! Te respondemos en menos de 24h.</p>}
            {status === 'error' && <p className="text-rojo font-montserrat text-[13px] font-semibold">Error al enviar. Por favor, inténtalo de nuevo o llámanos.</p>}

            <button type="submit" disabled={status === 'loading'} className="inline-flex items-center justify-center gap-2 font-montserrat text-sm font-bold bg-rojo text-white px-6 py-3 rounded-md hover:bg-rojo-oscuro disabled:opacity-60 transition-colors min-h-[48px]">
              {status === 'loading' ? <><Loader2 size={16} className="animate-spin" /> Enviando...</> : 'Enviar consulta'}
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-montserrat text-[15px] font-bold text-carbon mb-4">Datos de contacto</h3>
            {[
              { Icon: MapPin, text: '[Dirección], Bilbao, Bizkaia' },
              { Icon: Phone, text: '+34 [TELÉFONO]' },
              { Icon: Mail, text: '[email]@comercialmaro.es' },
              { Icon: Clock, text: 'Lun–Vie 8:30–18:00' },
            ].map(({ Icon, text }, i) => (
              <div key={i} className="flex items-start gap-3 mb-3 text-[13px] text-gris-medio">
                <Icon size={16} className="text-rojo mt-0.5 flex-shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>
          <div className="bg-gris-claro rounded-xl h-56 flex items-center justify-center text-gris-medio font-montserrat text-sm">
            📍 Mapa — [Dirección], Bilbao
          </div>
        </div>
      </div>
    </div>
  )
}
