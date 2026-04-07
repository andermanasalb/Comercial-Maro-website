export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readingTime: string
  category: string
  image: string
  content: string[]   // array of paragraphs, rendered as <p> tags
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'como-elegir-ventanas-aluminio-bilbao',
    title: 'Cómo elegir ventanas de aluminio para tu vivienda en Bilbao',
    excerpt: 'Descubre qué factores influyen en el aislamiento térmico y acústico, qué marcas son las más recomendadas en Vizcaya y cómo solicitar un presupuesto sin sorpresas.',
    date: '2026-01-15',
    readingTime: '6 min',
    category: 'Guía de compra',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    content: [
      'Elegir las ventanas adecuadas para tu vivienda en Bilbao es una decisión importante que afecta al confort, al consumo energético y al valor de tu hogar.',
      'En el País Vasco, con inviernos lluviosos y veranos templados, las ventanas de aluminio con rotura de puente térmico son la opción más recomendada por su durabilidad y eficiencia.',
      "En Comercial MAR'O trabajamos con perfiles Cortizo y Reynaers, dos de las marcas líderes en Europa, para garantizar el mejor resultado en cada instalación.",
    ],
  },
  {
    slug: 'pergolas-bioclimaticas-pais-vasco',
    title: 'Pérgolas bioclimáticas en el País Vasco: todo lo que necesitas saber',
    excerpt: 'Las pérgolas bioclimáticas son cada vez más populares en Euskadi. Te explicamos cómo funcionan y si son una buena inversión para el clima del norte de España.',
    date: '2026-02-08',
    readingTime: '5 min',
    category: 'Productos',
    image: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800',
    content: [
      'El clima del País Vasco, con sus lluvias frecuentes y temperaturas suaves, es ideal para instalar una pérgola bioclimática que te permita disfrutar del exterior durante todo el año.',
      'Las lamas orientables se adaptan automáticamente a las condiciones meteorológicas, protegiéndote del sol en verano y dejando pasar la luz en invierno.',
      "En Comercial MAR'O instalamos pérgolas bioclimáticas en Bilbao, Vizcaya y todo el norte de España con garantía de 10 años.",
    ],
  },
  {
    slug: 'aluminio-vs-pvc-diferencias',
    title: 'Diferencias entre carpintería de aluminio y PVC',
    excerpt: '¿Aluminio o PVC? Comparamos durabilidad, aislamiento, precio y mantenimiento para que tomes la mejor decisión para tu hogar en Vizcaya.',
    date: '2026-02-20',
    readingTime: '4 min',
    category: 'Comparativas',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    content: [
      'La elección entre aluminio y PVC es una de las dudas más frecuentes de nuestros clientes en Bilbao. Ambos materiales tienen sus ventajas, aunque para el clima del norte de España recomendamos el aluminio.',
      'El aluminio ofrece mayor durabilidad (más de 40 años sin deformarse), mejor acabado estético y es totalmente reciclable. El PVC puede ser más económico en la compra inicial, pero requiere más mantenimiento.',
      'Con la tecnología de rotura de puente térmico, las ventanas de aluminio actuales superan al PVC en eficiencia energética, desechando el mito de que el aluminio "da frío".',
    ],
  },
  {
    slug: 'precio-ventanas-aluminio-vizcaya',
    title: 'Cuánto cuesta instalar ventanas de aluminio en Vizcaya',
    excerpt: 'Precios orientativos para la instalación de ventanas de aluminio en Bilbao y Vizcaya en 2026. Factores que afectan al coste y cómo obtener el mejor presupuesto.',
    date: '2026-03-05',
    readingTime: '5 min',
    category: 'Precios',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    content: [
      'El precio de instalar ventanas de aluminio en Vizcaya varía según el tipo de ventana, el tamaño, el acabado y el sistema de apertura elegido.',
      'Como referencia orientativa, una ventana estándar oscilobatiente de 120x120cm con rotura de puente térmico y doble acristalamiento puede oscilar entre 350€ y 600€ instalada en Bilbao.',
      "Para obtener el precio exacto para tu proyecto, solicita un presupuesto gratuito y sin compromiso a Comercial MAR'O. Te visitamos, tomamos medidas y te entregamos presupuesto detallado en 48 horas.",
    ],
  },
]
