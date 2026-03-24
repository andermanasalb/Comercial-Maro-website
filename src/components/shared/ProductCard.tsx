import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  num: string
  title: string
  description: string
  image: string
  href: string
}

export function ProductCard({ num, title, description, image, href }: ProductCardProps) {
  return (
    <Link
      href={href}
      className="group relative block bg-white rounded-xl border-l-4 border-rojo p-4 shadow-sm hover:-translate-y-1 hover:shadow-lg hover:bg-crema transition-all duration-200"
    >
      <span className="absolute top-2 right-3 font-montserrat text-4xl font-black text-rojo/[0.07] leading-none select-none">
        {num}
      </span>
      <div className="relative h-20 rounded-md overflow-hidden mb-3">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <h3 className="font-montserrat text-[13px] font-bold text-carbon mb-1">{title}</h3>
      <p className="text-[11px] text-gris-medio leading-relaxed mb-3">{description}</p>
      <span className="font-montserrat text-[11px] font-bold text-rojo group-hover:underline">Ver más →</span>
    </Link>
  )
}
