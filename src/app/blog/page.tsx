import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-posts'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: "Blog de Carpintería Metálica | Consejos y Novedades | Comercial MAR'O",
  description: 'Artículos, guías y consejos sobre carpintería metálica, ventanas de aluminio y cerramientos en Bilbao y el País Vasco.',
  keywords: ['blog carpintería metálica', 'ventanas aluminio consejos Bilbao'],
  path: '/blog',
})

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-crema">
      <div className="bg-carbon py-16 px-6 text-center">
        <span className="font-montserrat text-[10px] font-bold tracking-[3px] uppercase text-arena block mb-3">Blog</span>
        <h1 className="font-montserrat text-3xl font-extrabold text-white">Todo sobre carpintería metálica</h1>
      </div>
      <div className="max-w-[1280px] mx-auto px-6 py-14 grid sm:grid-cols-2 gap-6">
        {blogPosts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-xl overflow-hidden border border-gris-claro hover:shadow-lg hover:-translate-y-1 transition-all duration-200 block">
            <div className="relative h-48">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
              <span className="absolute top-3 left-3 bg-rojo text-white font-montserrat text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">{post.category}</span>
            </div>
            <div className="p-5">
              <p className="text-[11px] text-[#aaa] font-montserrat mb-2">{post.date} · {post.readingTime} lectura</p>
              <h2 className="font-montserrat text-[15px] font-extrabold text-carbon leading-snug mb-2 group-hover:text-rojo transition-colors">{post.title}</h2>
              <p className="text-[12px] text-gris-medio line-clamp-2">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
