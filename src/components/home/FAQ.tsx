import { SectionHeader } from '@/components/shared/SectionHeader'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  { q: '¿Cuánto tiempo tarda la instalación de una ventana?', a: 'Dependiendo del proyecto, entre 1 y 3 días para una vivienda estándar.' },
  { q: '¿Fabricáis a medida o solo medidas estándar?', a: 'Toda nuestra carpintería es a medida. Nos adaptamos a cualquier hueco.' },
  { q: '¿Qué materiales usáis?', a: 'Aluminio, PVC y acero, con perfiles de marcas líderes como Cortizo y Reynaers.' },
  { q: '¿Ofrecéis garantía en los trabajos?', a: 'Sí, todos nuestros trabajos tienen garantía de 10 años en fabricación e instalación.' },
  { q: '¿Trabajáis en toda España?', a: 'Tenemos base en Bilbao con cobertura completa en Vizcaya y todo el País Vasco. También realizamos proyectos en el norte de España y a nivel nacional.' },
  { q: '¿Puedo pedir presupuesto sin compromiso?', a: 'Por supuesto. El presupuesto es gratuito y sin compromiso. Contáctanos.' },
]

export function FAQ() {
  return (
    <section id="faq" className="h-[calc(100dvh-4rem)] snap-start snap-always overflow-hidden bg-carbon flex flex-col justify-center px-6">
      <div className="max-w-site mx-auto w-full">
        <SectionHeader tag="FAQ" title="Preguntas frecuentes" dark />
        <div className="max-w-2xl mx-auto">
          <Accordion className="flex flex-col gap-2">
            {faqs.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q} className="bg-white/[0.06] border border-white/10 rounded-lg px-5">
                <AccordionTrigger className="font-montserrat text-[13px] font-semibold text-white hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[12px] text-white/60 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
