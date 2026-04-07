export const company = {
  name: "Comercial MAR'O",
  cif: 'B-95838470',
  url: 'https://comercialmaro.es',

  phone: '+34944100462',
  phoneFormatted: '+34 944 100 462',
  email: 'bilbao@comercialmaro.biz',

  hours: 'Lun-Vie 9:30–13:30 / 16:00–20:00',
  hoursSchema: [
    { opens: '09:30', closes: '13:30' },
    { opens: '16:00', closes: '20:00' },
  ],

  address: {
    street: 'Av. Lehendakari Aguirre, 161',
    streetFull: 'Avenida Lehendakari Aguirre, 161',
    postalCode: '48015',
    city: 'Bilbao',
    region: 'Vizcaya',
    country: 'España',
    countryCode: 'ES',
  },

  geo: { lat: '43.2630', lng: '-2.9350' },

  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Avenida+Lehendakari+Aguirre+161+48015+Bilbao',

  areaServed: ['Bilbao', 'Vizcaya', 'País Vasco', 'España'],
} as const
