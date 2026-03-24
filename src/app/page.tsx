import { Hero } from '@/components/home/Hero'
import { Servicios } from '@/components/home/Servicios'
import { PorQueNosotros } from '@/components/home/PorQueNosotros'
import { Sectores } from '@/components/home/Sectores'
import { Galeria } from '@/components/home/Galeria'
import { FAQ } from '@/components/home/FAQ'
import { BlogPreview } from '@/components/home/BlogPreview'
import { CTAFinal } from '@/components/home/CTAFinal'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Servicios />
      <PorQueNosotros />
      <Sectores />
      <Galeria />
      <FAQ />
      <BlogPreview />
      <CTAFinal />
    </>
  )
}
