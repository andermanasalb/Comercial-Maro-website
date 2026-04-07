import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import path from 'path'
import sharp from 'sharp'
import { z } from 'zod'
import { Resend } from 'resend'
import { company } from '@/lib/company'
import { wrapEmail } from '@/emails/base'
import { buildNotificationBody } from '@/emails/contact-notification'
import { buildConfirmationBody } from '@/emails/contact-confirmation'

const resend = new Resend(process.env.RESEND_API_KEY)

let cachedLogoDataUri: string | null = null
async function getLogoDataUri(): Promise<string> {
  if (cachedLogoDataUri) return cachedLogoDataUri
  try {
    const logoPath = path.join(process.cwd(), 'public', 'logo.png')
    const buffer = await readFile(logoPath)
    const resized = await sharp(buffer).resize(200, null, { withoutEnlargement: true }).png().toBuffer()
    cachedLogoDataUri = `data:image/png;base64,${resized.toString('base64')}`
  } catch {
    cachedLogoDataUri = ''
  }
  return cachedLogoDataUri
}

const contactSchema = z.object({
  nombre:   z.string().min(2),
  email:    z.string().email(),
  telefono: z.string().min(9),
  tipo:     z.enum(['reforma', 'obra-nueva', 'oficina', 'colegio', 'otro']),
  mensaje:  z.string().min(20),
})

export const TIPO_LABELS: Record<string, string> = {
  'reforma':    'Reforma',
  'obra-nueva': 'Obra nueva',
  'oficina':    'Oficina / Comercio',
  'colegio':    'Colegio / Público',
  'otro':       'Otro',
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(req: NextRequest) {
  try {
    const TO_EMAIL = process.env.RESEND_TO_EMAIL
    if (!TO_EMAIL) {
      console.error('[Contacto] RESEND_TO_EMAIL is not set')
      return NextResponse.json({ success: false }, { status: 500 })
    }

    const body = await req.json()
    const data = contactSchema.parse(body)
    const tipoLabel = TIPO_LABELS[data.tipo]
    const logoDataUri = await getLogoDataUri()

    await Promise.all([
      resend.emails.send({
        from: `${company.name} Web <onboarding@resend.dev>`,
        to: [TO_EMAIL],
        subject: `Nueva consulta — ${data.nombre} (${tipoLabel})`,
        html: wrapEmail(buildNotificationBody({ ...data, tipoLabel }, escapeHtml), logoDataUri),
      }),
      resend.emails.send({
        from: `${company.name} <onboarding@resend.dev>`,
        to: [data.email],
        subject: `Hemos recibido tu consulta — ${company.name}`,
        html: wrapEmail(buildConfirmationBody({ nombre: data.nombre, tipoLabel }, escapeHtml), logoDataUri),
      }),
    ])

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.issues }, { status: 400 })
    }
    console.error('[Contacto] Error:', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
