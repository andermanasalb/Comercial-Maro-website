import Image from 'next/image'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-posts'
import { SectionHeader } from '@/components/shared/SectionHeader'

export function BlogPreview() {
  const [featured, ...rest] = blogPosts
  return (
    <section id="blog" className="h-[calc(100dvh-6rem)] snap-start snap-always overflow-hidden bg-white flex flex-col justify-center px-6">
      <div className="max-w-[1280px] mx-auto w-full">
        <SectionHeader tag="Blog & Consejos" title="Todo sobre carpintería metálica" subtitle="Guías, consejos y novedades para mejorar tu hogar o negocio en el País Vasco" />
        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-6 mb-8">
          <Link href={`/blog/${featured.slug}`} className="group block rounded-xl overflow-hidden border border-gris-claro hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
            <div className="relative h-40">
              <Image src={featured.image} alt={featured.title} fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
              <span className="absolute top-3 left-3 bg-rojo text-white font-montserrat text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">{featured.category}</span>
            </div>
            <div className="p-5">
              <p className="text-[11px] text-[#aaa] font-montserrat mb-2">{featured.date} · {featured.readingTime} lectura</p>
              <h3 className="font-montserrat text-[15px] font-extrabold text-carbon leading-snug mb-2 group-hover:text-rojo transition-colors">{featured.title}</h3>
              <p className="text-[12px] text-gris-medio leading-relaxed mb-3 line-clamp-2">{featured.excerpt}</p>
              <span className="font-montserrat text-[12px] font-bold text-rojo">Leer artículo →</span>
            </div>
          </Link>
          <div className="flex flex-col gap-4">
            {rest.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group grid grid-cols-[90px_1fr] rounded-lg overflow-hidden border border-gris-claro hover:border-arena hover:shadow-md transition-all duration-200">
                <div className="relative min-h-[80px]">
                  <Image src={post.image} alt={post.title} fill sizes="90px" className="object-cover" />
                </div>
                <div className="p-3">
                  <p className="text-[10px] text-[#aaa] font-montserrat mb-1">{post.date} · {post.readingTime}</p>
                  <h4 className="font-montserrat text-[12px] font-bold text-carbon leading-snug mb-2 group-hover:text-rojo transition-colors line-clamp-2">{post.title}</h4>
                  <span className="font-montserrat text-[10px] font-bold text-rojo">Leer →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="text-center">
          <Link href="/blog" className="inline-flex items-center justify-center font-montserrat text-sm font-bold border-2 border-rojo text-rojo px-6 py-3 rounded-md hover:bg-rojo hover:text-white transition-colors min-h-[48px]">
            Ver todos los artículos →
          </Link>
        </div>
      </div>
    </section>
  )
}
