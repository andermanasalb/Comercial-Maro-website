import type { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-posts'

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
    ...blogPosts.map(post => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ]
}
