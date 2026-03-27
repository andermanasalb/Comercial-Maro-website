// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import path from 'path'
import sharp from 'sharp'
import { z } from 'zod'
import { Resend } from 'resend'

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

    const logoDataUri = await getLogoDataUri()

    const emailBase = `
      <div style="background:#EFEFEF;padding:40px 16px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto">
          <tr><td>

            <!-- Red top bar -->
            <div style="background:#c0392b;height:5px;border-radius:12px 12px 0 0"></div>

            <!-- Header -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#1a1a1a">
              <tr>
                <td style="padding:28px 40px">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="vertical-align:middle">
                        ${logoDataUri ? `<img src="${logoDataUri}" alt="Comercial MAR'O" height="44" style="display:block;height:44px;width:auto;max-width:200px">` : `<span style="font-size:16px;font-weight:700;color:#ffffff;letter-spacing:1px">Comercial MAR'O</span>`}
                      </td>
                      <td style="vertical-align:middle;text-align:right">
                        <p style="margin:0;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#888">Bilbao · País Vasco</p>
                        <p style="margin:3px 0 0;font-size:12px;color:#555">comercialmaro.es</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Body -->
            BODY_PLACEHOLDER

            <!-- Footer -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#1a1a1a;border-radius:0 0 12px 12px">
              <tr>
                <td style="padding:24px 40px">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="vertical-align:top;width:40%">
                        <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#555">Dirección</p>
                        <p style="margin:5px 0 0;font-size:12px;color:#888;line-height:1.6">Av. Lehendakari Aguirre, 161<br>48015 Bilbao</p>
                      </td>
                      <td style="vertical-align:top;width:30%;white-space:nowrap">
                        <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#555">Teléfono</p>
                        <p style="margin:5px 0 0;font-size:12px;color:#888;white-space:nowrap">+34 944 100 462</p>
                      </td>
                      <td style="vertical-align:top;width:30%;white-space:nowrap">
                        <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#555">Email</p>
                        <p style="margin:5px 0 0;font-size:12px;color:#888;white-space:nowrap">bilbao@comercialmaro.biz</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

          </td></tr>
        </table>
      </div>
    `

    const notificationBody = `
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff">

        <!-- Alert banner -->
        <tr>
          <td style="background:#fef9f9;border-bottom:1px solid #fde8e8;padding:16px 40px">
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="vertical-align:middle;padding-right:10px">
                  <div style="width:8px;height:8px;background:#c0392b;border-radius:50%"></div>
                </td>
                <td style="vertical-align:middle">
                  <p style="margin:0;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#c0392b">Nueva consulta recibida</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Client name -->
        <tr>
          <td style="padding:28px 40px 20px">
            <h2 style="margin:0 0 4px;font-size:26px;font-weight:700;color:#1a1a1a;letter-spacing:-0.5px">${escapeHtml(data.nombre)}</h2>
            <p style="margin:0;font-size:13px;color:#999">Ha enviado una consulta desde la web</p>
          </td>
        </tr>

        <!-- Data rows -->
        <tr>
          <td style="padding:0 40px 24px">
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8e8e8;border-radius:10px;overflow:hidden">
              <tr>
                <td style="padding:14px 20px;background:#fafafa;border-bottom:1px solid #e8e8e8">
                  <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#aaa">Email</p>
                  <a href="mailto:${escapeHtml(data.email)}" style="display:block;margin-top:3px;font-size:14px;color:#c0392b;text-decoration:none;font-weight:500">${escapeHtml(data.email)}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:14px 20px;border-bottom:1px solid #e8e8e8">
                  <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#aaa">Teléfono</p>
                  <p style="margin:3px 0 0;font-size:14px;color:#1a1a1a">${escapeHtml(data.telefono)}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:14px 20px;background:#fafafa">
                  <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#aaa">Tipo de proyecto</p>
                  <div style="margin-top:6px"><span style="display:inline-block;background:#1a1a1a;color:#fff;font-size:11px;font-weight:700;padding:4px 12px;border-radius:20px;letter-spacing:0.5px">${escapeHtml(TIPO_LABELS[data.tipo])}</span></div>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Message -->
        <tr>
          <td style="padding:0 40px 36px">
            <p style="margin:0 0 10px;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#aaa">Mensaje del cliente</p>
            <div style="background:#fafafa;border-left:4px solid #c0392b;border-radius:0 10px 10px 0;padding:20px 24px;font-size:14px;color:#333;line-height:1.8;white-space:pre-wrap">${escapeHtml(data.mensaje)}</div>
          </td>
        </tr>

      </table>
    `

    const confirmationBody = `
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff">

        <!-- Green confirmation banner -->
        <tr>
          <td style="background:#f0fdf4;border-bottom:1px solid #d1fae5;padding:16px 40px">
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="vertical-align:middle;padding-right:10px">
                  <div style="width:8px;height:8px;background:#16a34a;border-radius:50%"></div>
                </td>
                <td style="vertical-align:middle">
                  <p style="margin:0;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#16a34a">Consulta recibida correctamente</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Greeting -->
        <tr>
          <td style="padding:28px 40px 20px">
            <h2 style="margin:0 0 4px;font-size:26px;font-weight:700;color:#1a1a1a;letter-spacing:-0.5px">Hola, ${escapeHtml(data.nombre)}</h2>
            <p style="margin:8px 0 0;font-size:14px;color:#555;line-height:1.7">Hemos recibido tu consulta sobre <strong style="color:#1a1a1a">${escapeHtml(TIPO_LABELS[data.tipo])}</strong>. Nuestro equipo la revisará y te responderá en un plazo de <strong style="color:#1a1a1a">24h/48h laborables</strong>.</p>
          </td>
        </tr>

        <!-- Divider -->
        <tr>
          <td style="padding:0 40px">
            <div style="height:1px;background:#f0f0f0"></div>
          </td>
        </tr>

        <!-- Urgent contact -->
        <tr>
          <td style="padding:24px 40px 36px">
            <p style="margin:0 0 14px;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#aaa">¿Necesitas atención urgente?</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8e8e8;border-radius:10px;overflow:hidden">
              <tr>
                <td style="padding:14px 20px;background:#fafafa;border-bottom:1px solid #e8e8e8;width:36px">
                  <p style="margin:0;font-size:18px;line-height:1">📞</p>
                </td>
                <td style="padding:14px 20px;background:#fafafa;border-bottom:1px solid #e8e8e8">
                  <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#aaa">Teléfono</p>
                  <p style="margin:3px 0 0;font-size:14px;font-weight:700;color:#1a1a1a">+34 944 100 462</p>
                </td>
              </tr>
              <tr>
                <td style="padding:14px 20px;border-bottom:1px solid #e8e8e8">
                  <p style="margin:0;font-size:18px;line-height:1">✉️</p>
                </td>
                <td style="padding:14px 20px;border-bottom:1px solid #e8e8e8">
                  <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#aaa">Email directo</p>
                  <p style="margin:3px 0 0;font-size:14px;color:#c0392b">bilbao@comercialmaro.biz</p>
                </td>
              </tr>
              <tr>
                <td style="padding:14px 20px;background:#fafafa">
                  <p style="margin:0;font-size:18px;line-height:1">🕐</p>
                </td>
                <td style="padding:14px 20px;background:#fafafa">
                  <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#aaa">Horario</p>
                  <p style="margin:3px 0 0;font-size:14px;color:#1a1a1a">Lun–Vie · 9:30–13:30 / 16:00–20:00</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Closing note -->
        <tr>
          <td style="padding:0 40px 36px">
            <div style="background:#fafafa;border-radius:8px;padding:18px 24px">
              <p style="margin:0;font-size:13px;color:#888;line-height:1.7">Gracias por confiar en <strong style="color:#1a1a1a">Comercial MAR'O</strong>. Somos especialistas en carpintería metálica en Bilbao y estaremos encantados de ayudarte con tu proyecto.</p>
            </div>
          </td>
        </tr>

      </table>
    `

    await Promise.all([
      resend.emails.send({
        from: "Comercial MAR'O Web <onboarding@resend.dev>",
        to: [TO_EMAIL],
        subject: `Nueva consulta — ${data.nombre} (${TIPO_LABELS[data.tipo]})`,
        html: emailBase.replace('BODY_PLACEHOLDER', notificationBody),
      }),
      resend.emails.send({
        from: "Comercial MAR'O <onboarding@resend.dev>",
        to: [data.email],
        subject: "Hemos recibido tu consulta — Comercial MAR'O",
        html: emailBase.replace('BODY_PLACEHOLDER', confirmationBody),
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
