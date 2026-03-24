import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/lib/blog-posts'
import { buildMetadata } from '@/lib/metadata'

export function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) return {}
  return buildMetadata({
    title: `${post.title} | Comercial MAR'O`,
    description: post.excerpt,
    keywords: ['carpintería metálica Bilbao', post.category],
    path: `/blog/${post.slug}`,
    ogImage: post.image,
  })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) notFound()

  return (
    <div className="min-h-screen">
      <div className="relative h-72">
        <Image src={post.image} alt={post.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-carbon/70" />
        <div className="relative z-10 h-full flex flex-col justify-end px-6 pb-8 max-w-3xl mx-auto w-full">
          <nav className="text-white/60 text-[12px] font-montserrat mb-2">
            <Link href="/" className="hover:text-white">Inicio</Link>{' / '}
            <Link href="/blog" className="hover:text-white">Blog</Link>{' / '}
            <span className="text-white line-clamp-1">{post.title}</span>
          </nav>
          <span className="inline-block bg-rojo text-white font-montserrat text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-3 w-fit">{post.category}</span>
          <h1 className="font-montserrat text-2xl md:text-3xl font-extrabold text-white leading-tight">{post.title}</h1>
          <p className="text-white/60 text-[12px] font-montserrat mt-2">{post.date} · {post.readingTime} lectura</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-base text-gris-medio leading-relaxed mb-6 font-semibold">{post.excerpt}</p>
        <div className="flex flex-col gap-4">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-base text-gris-medio leading-relaxed">{paragraph}</p>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gris-claro">
          <Link href="/blog" className="font-montserrat text-[13px] font-bold text-rojo hover:underline">← Volver al blog</Link>
        </div>
      </div>
    </div>
  )
}
