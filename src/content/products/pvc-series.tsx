import type { ReactNode } from 'react'

export interface PvcSeriesStat {
  val: string
  label: string
  highlight?: boolean
}

export interface PvcSeriesPhoto {
  src: string
  alt: string
}

export interface PvcSeriesSidebarLink {
  label: string
  sub: string
  href: string
}

export interface PvcSeriesConfig {
  currentSeries: 'S70' | 'S76' | 'S82'

  hero: {
    imageSrc: string
    imageAlt: string
    badge: { text: string; variant: 'arena' | 'rojo' }
    title: string
    breadcrumbLabel: string
  }

  intro: { p1: ReactNode; p2: ReactNode }
  introPhoto: { src: string; alt: string }

  /** Set dark=true to use the carbon/dark stat grid (S82). */
  stats: { items: PvcSeriesStat[]; dark?: boolean }

  features: string[]
  profileImage: { src: string; alt: string; dark?: boolean }

  specs: [string, string][]
  pdfUrl: string
  pdfLabel: string

  /** Optional extra project photos shown below the PDF link (e.g. S76). */
  extraPhotos?: PvcSeriesPhoto[]

  /** Set dark=true to use the carbon sidebar style (S82). */
  sidebar: {
    dark?: boolean
    badge?: string
    title: string
    description: string
    checklist: string[]
  }

  otherSeries: PvcSeriesSidebarLink[]
}

export const pvcSeriesConfigs: Record<'S70' | 'S76' | 'S82', PvcSeriesConfig> = {
  S70: {
    currentSeries: 'S70',
    hero: {
      imageSrc: 'https://ecovenplus.com/wp-content/uploads/2024/10/IMG_1731-1-scaled-444x600.jpg',
      imageAlt: 'Ventanas PVC Serie S70 Ecoven Plus',
      badge: { text: 'La más utilizada', variant: 'arena' },
      title: 'Serie S70 — Ecoven Plus',
      breadcrumbLabel: 'Serie S70',
    },
    intro: {
      p1: 'La Serie S70 es la más utilizada de Ecoven Plus: ideal para cambiar ventanas antiguas y notar de inmediato la diferencia en temperatura y ruido dentro de casa.',
      p2: (
        <>
          Su perfil de <strong className="text-carbon font-semibold">70 mm</strong> con{' '}
          <strong className="text-carbon font-semibold">5 cámaras interiores</strong> reduce de forma
          clara las pérdidas de calor frente a carpinterías antiguas de aluminio sin rotura de puente
          térmico o madera envejecida.
        </>
      ),
    },
    introPhoto: {
      src: 'https://ecovenplus.com/wp-content/uploads/2024/10/MG_6525-BAJA-RESOLUCIaN-1024x683-1-444x600.jpg',
      alt: 'Instalación ventanas PVC S70 en vivienda en Bilbao',
    },
    stats: {
      items: [
        { val: '70 mm',      label: 'Profundidad' },
        { val: '1,3 W/m²K', label: 'Uf (marco)',    highlight: true },
        { val: '0,9 W/m²K', label: 'Uw (ventana)' },
        { val: '48 dB',      label: 'Acústico máx.' },
      ],
    },
    features: [
      'Perfil de 70 mm de profundidad con 5 cámaras interiores',
      'Transmitancia de marco Uf 1,3 W/m²K',
      'Valor de ventana terminada Uw 0,9 W/m²K con vidrio de alto rendimiento',
      'Galce admite vidrios de hasta 42 mm de espesor',
      'Compatible con dobles acristalamientos de alta gama',
      'Ideal para sustitución de carpinterías de aluminio o madera envejecida',
      'Refuerzo de acero galvanizado interior',
      'Amplia gama de acabados foliados y Spectral',
    ],
    profileImage: {
      src: 'https://ecovenplus.com/wp-content/uploads/2024/08/SL70-2.png',
      alt: 'Perfil técnico ventana PVC Serie S70 Ecoven Plus',
    },
    specs: [
      ['Profundidad', '70 mm'],
      ['Cámaras (hoja y marco)', '5'],
      ['Uf (transmitancia marco)', '1,3 W/m²K'],
      ['Uw (ventana terminada)', '0,9 W/m²K'],
      ['Espesor vidrio admitido', 'hasta 42 mm'],
      ['Aislamiento acústico máx.', 'hasta 48 dB'],
      ['Refuerzo', 'Acero galvanizado'],
    ],
    pdfUrl: 'https://ecovenplus.com/wp-content/uploads/2024/10/ficha-ecoven-s70.pdf',
    pdfLabel: 'Descargar Ficha Técnica S70 (PDF)',
    sidebar: {
      title: '¿Es la S70 la adecuada para ti?',
      description: 'Si estás renovando ventanas antiguas, la S70 es la opción más elegida. Cuéntanos tu proyecto.',
      checklist: ['Asesoramiento personalizado', 'Garantía 10 años', 'Instalación propia en Vizcaya'],
    },
    otherSeries: [
      { label: 'Serie S76',          sub: '76 mm · más confort',              href: '/ventanas-pvc/serie-s76' },
      { label: 'Serie S82',          sub: '82 mm · Passivhaus',               href: '/ventanas-pvc/serie-s82' },
      { label: 'Volver al catálogo', sub: 'Puertas y Ventanas PVC Ecoven Plus', href: '/ventanas-pvc' },
    ],
  },

  S76: {
    currentSeries: 'S76',
    hero: {
      imageSrc: 'https://ecovenplus.com/wp-content/uploads/2024/10/Casa-Hilaria-2-retocado-scaled-444x600.jpg',
      imageAlt: 'Ventanas PVC Serie S76 Ecoven Plus',
      badge: { text: 'Más popular', variant: 'rojo' },
      title: 'Serie S76 — Ecoven Plus',
      breadcrumbLabel: 'Serie S76',
    },
    intro: {
      p1: 'Con la S76 subes un escalón en confort: mejor sellado, mejor aislamiento y la posibilidad de montar vidrios todavía más gruesos. Pensada para olvidarse de corrientes de aire, mejorar el descanso en zonas ruidosas y tener una ventana preparada para climas exigentes.',
      p2: (
        <>
          Incorpora <strong className="text-carbon font-semibold">triple junta de sellado</strong> que mejora
          notablemente la hermeticidad al aire y al agua. En combinación con herraje perimetral, permite
          configurar la ventana con certificación{' '}
          <strong className="text-carbon font-semibold">RC2</strong>.
        </>
      ),
    },
    introPhoto: {
      src: 'https://ecovenplus.com/wp-content/uploads/2024/10/mg-1373-web-1200x780.jpg-444x600.webp',
      alt: 'Proyecto ventanas PVC S76 en fachada Bilbao',
    },
    stats: {
      items: [
        { val: '76 mm',       label: 'Profundidad' },
        { val: '1,1 W/m²K',  label: 'Uf (marco)',    highlight: true },
        { val: '0,75 W/m²K', label: 'Uw (ventana)' },
        { val: '45 dB',       label: 'Acústico máx.' },
      ],
    },
    features: [
      'Perfil de 76 mm con 5 cámaras en marco y hoja',
      'Sistema de triple junta de sellado',
      'Uf ≈ 1,1 W/m²K — transmitancia de marco',
      'Uw 0,75 W/m²K con vidrio de altas prestaciones',
      'Reducción acústica hasta 45 dB',
      'Vidrio hasta 48 mm de espesor',
      'Clasificación seguridad RC2 configurable',
      'Refuerzo de acero galvanizado',
    ],
    profileImage: {
      src: 'https://ecovenplus.com/wp-content/uploads/2024/10/SOFTLINE76_ok-2-1-1-1.png',
      alt: 'Perfil técnico ventana PVC Serie S76 Ecoven Plus',
    },
    specs: [
      ['Profundidad', '76 mm'],
      ['Cámaras', '5 (marco y hoja)'],
      ['Sellado', 'Triple junta perimetral'],
      ['Uf (transmitancia marco)', '1,1 W/m²K'],
      ['Uw (ventana terminada)', '0,75 W/m²K'],
      ['Vidrio admitido', 'hasta 48 mm'],
      ['Acústico', 'hasta 45 dB'],
      ['Seguridad', 'RC2 configurable'],
    ],
    pdfUrl: 'https://ecovenplus.com/wp-content/uploads/2024/10/ficha-Ecoven-plus-s76.pdf',
    pdfLabel: 'Descargar Ficha Técnica S76 (PDF)',
    extraPhotos: [
      {
        src: 'https://ecovenplus.com/wp-content/uploads/2024/10/papik01-1-scaled.jpg-444x600.webp',
        alt: 'Proyecto Papik ventanas PVC S76 Bilbao',
      },
      {
        src: 'https://ecovenplus.com/wp-content/uploads/2024/10/1707999298918-444x600.jpeg',
        alt: 'Instalación ventanas PVC S76 en vivienda',
      },
    ],
    sidebar: {
      title: '¿Es la S76 la adecuada para ti?',
      description: 'Si buscas mayor confort acústico y hermeticidad, la S76 es la opción más elegida.',
      checklist: ['Asesoramiento personalizado', 'Garantía 10 años', 'Instalación propia en Vizcaya'],
    },
    otherSeries: [
      { label: 'Serie S70',          sub: '70 mm · la más utilizada',          href: '/ventanas-pvc/serie-s70' },
      { label: 'Serie S82',          sub: '82 mm · Passivhaus',                href: '/ventanas-pvc/serie-s82' },
      { label: 'Volver al catálogo', sub: 'Puertas y Ventanas PVC Ecoven Plus', href: '/ventanas-pvc' },
    ],
  },

  S82: {
    currentSeries: 'S82',
    hero: {
      imageSrc: 'https://ecovenplus.com/wp-content/uploads/2024/10/papik01-1-scaled.jpg.webp',
      imageAlt: 'Ventanas PVC Serie S82 Passivhaus Ecoven Plus',
      badge: { text: 'Premium · Passivhaus', variant: 'arena' },
      title: 'Serie S82 — Ecoven Plus',
      breadcrumbLabel: 'Serie S82',
    },
    intro: {
      p1: 'La S82 es la serie top de Ecoven Plus: la que se instala en proyectos de muy bajo consumo y en edificios que buscan certificaciones de eficiencia energética.',
      p2: (
        <>
          Su perfil de <strong className="text-carbon font-semibold">82 mm</strong> con{' '}
          <strong className="text-carbon font-semibold">7 cámaras internas</strong> minimiza la transmitancia
          térmica. Con triple vidrio, se alcanzan valores compatibles con proyectos tipo{' '}
          <strong className="text-carbon font-semibold">Passivhaus</strong>, estándar en el que la
          S82 ya ha sido certificada en promociones residenciales en España.
        </>
      ),
    },
    introPhoto: {
      src: 'https://ecovenplus.com/wp-content/uploads/2024/10/mg-1373-web-1200x780.jpg.webp',
      alt: 'Fachada con ventanas PVC S82 Ecoven Plus',
    },
    stats: {
      dark: true,
      items: [
        { val: '82 mm',       label: 'Profundidad',      highlight: false },
        { val: '<1,0 W/m²K',  label: 'Uf (marco)',       highlight: true  },
        { val: 'Passivhaus',  label: 'Certificación Uw', highlight: false },
        { val: '48 dB',       label: 'Acústico máx.',    highlight: false },
      ],
    },
    features: [
      'Perfil de 82 mm con 7 cámaras interiores',
      'Uf < 1,0 W/m²K — transmitancia de marco',
      'Coeficiente Uw compatible con Passivhaus',
      'Triple acristalamiento de alto rendimiento',
      'Certificada en promociones residenciales Passivhaus en España',
      'Resistencia al viento C5, Estanquidad E1200, Permeabilidad clase 4',
      'Clasificación antirrobo RC2',
      'Hasta 48 dB de reducción acústica',
    ],
    profileImage: {
      src: 'https://ecovenplus.com/wp-content/uploads/2024/10/SL_82_OK_Marzo2022-1-1-1-1-1-2.png',
      alt: 'Perfil técnico ventana PVC Serie S82 Ecoven Plus',
      dark: true,
    },
    specs: [
      ['Profundidad', '82 mm'],
      ['Cámaras', '7 (marco y hoja)'],
      ['Uf (transmitancia marco)', '< 1,0 W/m²K'],
      ['Uw (ventana terminada)', 'Compatible Passivhaus'],
      ['Acústico', 'hasta 48 dB'],
      ['Viento', 'C5'],
      ['Estanquidad', 'E1200'],
      ['Seguridad', 'RC2'],
    ],
    pdfUrl: 'https://ecovenplus.com/wp-content/uploads/2024/10/ficha-ecoven-s82.pdf',
    pdfLabel: 'Descargar Ficha Técnica S82 (PDF)',
    sidebar: {
      dark: true,
      badge: 'Máxima eficiencia',
      title: '¿Tu proyecto necesita la S82?',
      description: 'Para obras nuevas de alta exigencia, proyectos Passivhaus o certificaciones energéticas, analizamos tu caso sin compromiso.',
      checklist: ['Estudio energético personalizado', 'Compatibilidad Passivhaus', 'Instalación en Vizcaya'],
    },
    otherSeries: [
      { label: 'Serie S70',          sub: '70 mm · la más utilizada',          href: '/ventanas-pvc/serie-s70' },
      { label: 'Serie S76',          sub: '76 mm · más confort',               href: '/ventanas-pvc/serie-s76' },
      { label: 'Volver al catálogo', sub: 'Puertas y Ventanas PVC Ecoven Plus', href: '/ventanas-pvc' },
    ],
  },
}
