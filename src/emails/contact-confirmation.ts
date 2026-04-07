import { company } from '@/lib/company'

/** HTML body for the confirmation email sent to the client. */
export function buildConfirmationBody(data: {
  nombre: string
  tipoLabel: string
}, escape: (s: string) => string): string {
  return `
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
          <h2 style="margin:0 0 4px;font-size:26px;font-weight:700;color:#1a1a1a;letter-spacing:-0.5px">Hola, ${escape(data.nombre)}</h2>
          <p style="margin:8px 0 0;font-size:14px;color:#555;line-height:1.7">Hemos recibido tu consulta sobre <strong style="color:#1a1a1a">${escape(data.tipoLabel)}</strong>. Nuestro equipo la revisará y te responderá en un plazo de <strong style="color:#1a1a1a">24h/48h laborables</strong>.</p>
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
                <p style="margin:3px 0 0;font-size:14px;font-weight:700;color:#1a1a1a">${company.phoneFormatted}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:14px 20px;border-bottom:1px solid #e8e8e8">
                <p style="margin:0;font-size:18px;line-height:1">✉️</p>
              </td>
              <td style="padding:14px 20px;border-bottom:1px solid #e8e8e8">
                <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#aaa">Email directo</p>
                <p style="margin:3px 0 0;font-size:14px;color:#c0392b">${company.email}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:14px 20px;background:#fafafa">
                <p style="margin:0;font-size:18px;line-height:1">🕐</p>
              </td>
              <td style="padding:14px 20px;background:#fafafa">
                <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#aaa">Horario</p>
                <p style="margin:3px 0 0;font-size:14px;color:#1a1a1a">${company.hours}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Closing note -->
      <tr>
        <td style="padding:0 40px 36px">
          <div style="background:#fafafa;border-radius:8px;padding:18px 24px">
            <p style="margin:0;font-size:13px;color:#888;line-height:1.7">Gracias por confiar en <strong style="color:#1a1a1a">${company.name}</strong>. Somos especialistas en carpintería metálica en ${company.address.city} y estaremos encantados de ayudarte con tu proyecto.</p>
          </div>
        </td>
      </tr>

    </table>
  `
}
