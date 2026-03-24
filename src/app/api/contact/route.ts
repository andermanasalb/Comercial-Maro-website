import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  nombre: z.string().min(2),
  email: z.string().email(),
  telefono: z.string().min(9),
  tipo: z.enum(['reforma', 'obra-nueva', 'oficina', 'colegio', 'otro']),
  mensaje: z.string().min(20),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = contactSchema.parse(body)
    console.log('[Contacto] Nueva consulta recibida:', data)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[Contacto] Error de validación:', error)
    return NextResponse.json({ success: false }, { status: 400 })
  }
}
