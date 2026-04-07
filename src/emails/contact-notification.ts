/** HTML body for the internal notification email sent to the business. */
export function buildNotificationBody(data: {
  nombre: string
  email: string
  telefono: string
  tipoLabel: string
  mensaje: string
}, escape: (s: string) => string): string {
  return `
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
          <h2 style="margin:0 0 4px;font-size:26px;font-weight:700;color:#1a1a1a;letter-spacing:-0.5px">${escape(data.nombre)}</h2>
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
                <a href="mailto:${escape(data.email)}" style="display:block;margin-top:3px;font-size:14px;color:#c0392b;text-decoration:none;font-weight:500">${escape(data.email)}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:14px 20px;border-bottom:1px solid #e8e8e8">
                <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#aaa">Teléfono</p>
                <p style="margin:3px 0 0;font-size:14px;color:#1a1a1a">${escape(data.telefono)}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:14px 20px;background:#fafafa">
                <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#aaa">Tipo de proyecto</p>
                <div style="margin-top:6px"><span style="display:inline-block;background:#1a1a1a;color:#fff;font-size:11px;font-weight:700;padding:4px 12px;border-radius:20px;letter-spacing:0.5px">${escape(data.tipoLabel)}</span></div>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Message -->
      <tr>
        <td style="padding:0 40px 36px">
          <p style="margin:0 0 10px;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#aaa">Mensaje del cliente</p>
          <div style="background:#fafafa;border-left:4px solid #c0392b;border-radius:0 10px 10px 0;padding:20px 24px;font-size:14px;color:#333;line-height:1.8;white-space:pre-wrap">${escape(data.mensaje)}</div>
        </td>
      </tr>

    </table>
  `
}
