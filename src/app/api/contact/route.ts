// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  nombre: z.string().min(2),
  email: z.string().email(),
  telefono: z.string().min(9),
  tipo: z.enum(['reforma', 'obra-nueva', 'oficina', 'colegio', 'otro']),
  mensaje: z.string().min(20),
})

const TIPO_LABELS: Record<string, string> = {
  'reforma': 'Reforma',
  'obra-nueva': 'Obra nueva',
  'oficina': 'Oficina / Comercio',
  'colegio': 'Colegio / Público',
  'otro': 'Otro',
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = contactSchema.parse(body)

    await Promise.all([
      // Notification to the business
      resend.emails.send({
        from: "Comercial MAR'O Web <noreply@comercialmaro.biz>",
        to: [process.env.RESEND_TO_EMAIL!],
        subject: `Nueva consulta desde la web — ${data.nombre}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
            <h2 style="color:#1a1a1a">Nueva consulta recibida</h2>
            <table style="border-collapse:collapse;width:100%">
              <tr><td style="padding:6px 0;font-weight:bold;width:120px">Nombre:</td><td>${data.nombre}</td></tr>
              <tr><td style="padding:6px 0;font-weight:bold">Email:</td><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
              <tr><td style="padding:6px 0;font-weight:bold">Teléfono:</td><td>${data.telefono}</td></tr>
              <tr><td style="padding:6px 0;font-weight:bold">Tipo:</td><td>${TIPO_LABELS[data.tipo]}</td></tr>
            </table>
            <h3 style="color:#1a1a1a;margin-top:20px">Mensaje:</h3>
            <p style="background:#f5f5f5;padding:16px;border-radius:8px;white-space:pre-wrap">${data.mensaje}</p>
            <hr style="margin-top:32px;border:none;border-top:1px solid #eee">
            <p style="color:#888;font-size:12px">Enviado desde el formulario de contacto de comercialmaro.biz</p>
          </div>
        `,
      }),
      // Confirmation to the user
      resend.emails.send({
        from: "Comercial MAR'O <noreply@comercialmaro.biz>",
        to: [data.email],
        subject: "Hemos recibido tu consulta — Comercial MAR'O",
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
            <h2 style="color:#1a1a1a">¡Hola, ${data.nombre}!</h2>
            <p>Hemos recibido tu consulta correctamente y te responderemos a la mayor brevedad posible.</p>
            <p>Mientras tanto, si necesitas atención urgente:</p>
            <ul>
              <li><strong>Teléfono:</strong> +34 944 100 462</li>
              <li><strong>Email:</strong> bilbao@comercialmaro.biz</li>
              <li><strong>Horario:</strong> Lun–Vie 9:30–13:30 / 16:00–20:00</li>
            </ul>
            <p>¡Gracias por confiar en Comercial MAR'O!</p>
            <hr style="margin-top:32px;border:none;border-top:1px solid #eee">
            <p style="color:#888;font-size:12px">Av. Lehendakari Aguirre, 161 · 48015 Bilbao</p>
          </div>
        `,
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
