import type { MetadataRoute } from 'next'
import { blogPosts } from '@/content/blog-posts'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://comercialmaro.es'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL,                              changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${SITE_URL}/ventanas`,                changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/puertas`,                 changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/cerramientos`,            changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/pergolas`,                changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/persianas`,               changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/proyectos`,               changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/contacto`,                changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${SITE_URL}/blog`,                    changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${SITE_URL}/sobre-nosotros`,          changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${SITE_URL}/cortinas-estores`,                    changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/cortinas-estores/cortina-plisada`,    changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/cortinas-estores/stor-glass-avant`,   changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/cortinas-estores/veneciana-aluminio`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/cortinas-estores/estor-enrollable`,   changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/cortinas-estores/cortinas-verticales`,changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/cortinas-estores/cortina-pacchetto`,  changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/cortinas-estores/panel-deslizante`,   changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/cortinas-estores/estor-vision`,       changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/cerramientos-fenolicos`,              changeFrequency: 'monthly', priority: 0.8 },
    ...blogPosts.map(post => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ]
}
