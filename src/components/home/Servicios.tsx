import { ProductCard } from '@/components/shared/ProductCard'
import { SectionHeader } from '@/components/shared/SectionHeader'

const services = [
  { num: '01', title: 'Ventanas de Aluminio', description: 'Abatibles, correderas, oscilobatientes. Máximo aislamiento térmico y acústico.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', href: '/ventanas' },
  { num: '02', title: 'Puertas Metálicas', description: 'Puertas de entrada, acceso y paso. Seguridad y diseño en un solo elemento.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400', href: '/puertas' },
  { num: '03', title: 'Cerramientos', description: 'Terrazas, galerías y patios. Amplía tu espacio habitable con luz natural.', image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=400', href: '/cerramientos' },
  { num: '04', title: 'Pérgolas Bioclimáticas', description: 'Control total del ambiente exterior. Automáticas y personalizables.', image: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=400', href: '/pergolas' },
  { num: '05', title: 'Persianas y Protección', description: 'Persianas enrollables, mallorquinas y lamas. Confort y privacidad.', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400', href: '/persianas' },
  { num: '06', title: 'Cristalería y Mamparas', description: 'Mamparas de baño, escaparates y barandillas de vidrio templado.', image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=400', href: '/contacto' },
]

export function Servicios() {
  return (
    <section className="py-16 px-6 bg-crema">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader tag="Nuestros productos" title="Todo lo que necesita tu espacio" subtitle="Fabricamos e instalamos carpintería metálica a medida en Bilbao y todo el norte de España" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(s => <ProductCard key={s.num} {...s} />)}
        </div>
      </div>
    </section>
  )
}
