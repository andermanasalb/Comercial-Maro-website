import { company } from '@/lib/company'

/** Wraps an email body in the shared header/footer chrome. */
export function wrapEmail(body: string, logoDataUri: string): string {
  const logoHtml = logoDataUri
    ? `<img src="${logoDataUri}" alt="${company.name}" height="44" style="display:block;height:44px;width:auto;max-width:200px">`
    : `<span style="font-size:16px;font-weight:700;color:#ffffff;letter-spacing:1px">${company.name}</span>`

  return `
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
                    <td style="vertical-align:middle">${logoHtml}</td>
                    <td style="vertical-align:middle;text-align:right">
                      <p style="margin:0;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#888">${company.address.city} · ${company.address.region}</p>
                      <p style="margin:3px 0 0;font-size:12px;color:#555">${company.url.replace('https://', '')}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          <!-- Body -->
          ${body}

          <!-- Footer -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#1a1a1a;border-radius:0 0 12px 12px">
            <tr>
              <td style="padding:24px 40px">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="vertical-align:top;width:40%">
                      <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#555">Dirección</p>
                      <p style="margin:5px 0 0;font-size:12px;color:#888;line-height:1.6">${company.address.street}<br>${company.address.postalCode} ${company.address.city}</p>
                    </td>
                    <td style="vertical-align:top;width:30%;white-space:nowrap">
                      <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#555">Teléfono</p>
                      <p style="margin:5px 0 0;font-size:12px;color:#888;white-space:nowrap">${company.phoneFormatted}</p>
                    </td>
                    <td style="vertical-align:top;width:30%;white-space:nowrap">
                      <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#555">Email</p>
                      <p style="margin:5px 0 0;font-size:12px;color:#888;white-space:nowrap">${company.email}</p>
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
}
