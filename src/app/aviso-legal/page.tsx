import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: "Aviso Legal | Comercial MAR'O",
  description: "Aviso legal e información corporativa de Aluminio y PVC HEMAR, S.L. — Comercial MAR'O, carpintería metálica en Bilbao.",
  keywords: ['aviso legal', 'términos de uso', 'información corporativa', 'carpintería metálica', 'Bilbao'],
  path: '/aviso-legal',
})

export default function AvisoLegalPage() {
  return (
    <div className="min-h-screen bg-crema">
      <div className="bg-carbon py-16 px-6 text-center">
        <span className="font-montserrat text-[10px] font-bold tracking-[3px] uppercase text-arena block mb-3">Legal</span>
        <h1 className="font-montserrat text-3xl font-extrabold text-white">Aviso Legal</h1>
      </div>
      <div className="bg-white border-b border-gris-claro px-6 py-3">
        <nav aria-label="Ruta de navegación" className="max-w-site mx-auto font-montserrat text-[12px] text-gris-medio flex items-center gap-1.5">
          <Link href="/" className="hover:text-rojo transition-colors">Inicio</Link>
          <span className="text-gris-medio/40">/</span>
          <span className="text-carbon font-semibold" aria-current="page">Aviso legal</span>
        </nav>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14 space-y-10 text-[14px] text-gris-medio leading-relaxed">

        <section>
          <h2 className="font-montserrat text-[18px] font-bold text-carbon mb-4">1. Datos identificativos</h2>
          <p>En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se facilitan a continuación los datos de identificación del titular del sitio web:</p>
          <ul className="mt-4 space-y-2">
            <li><span className="font-semibold text-carbon">Razón social:</span> ALUMINIO Y PVC HEMAR, S.L.</li>
            <li><span className="font-semibold text-carbon">Nombre comercial:</span> Comercial MAR&apos;O</li>
            <li><span className="font-semibold text-carbon">CIF:</span> B-95838470</li>
            <li><span className="font-semibold text-carbon">Domicilio social:</span> Avenida Lehendakari Aguirre, 161, 48015 Bilbao (Bizkaia)</li>
            <li><span className="font-semibold text-carbon">Teléfono:</span> +34 944 100 462</li>
            <li><span className="font-semibold text-carbon">Correo electrónico:</span> bilbao@comercialmaro.biz</li>
            <li><span className="font-semibold text-carbon">Inscripción registral:</span> Registro Mercantil de Bizkaia — T. 5602, F. 120, S. 8, H. BI-67762, Insc. 1ª (17.03.2016)</li>
          </ul>
        </section>

        <section>
          <h2 className="font-montserrat text-[18px] font-bold text-carbon mb-4">2. Objeto y ámbito de aplicación</h2>
          <p>El presente Aviso Legal regula el acceso y uso del sitio web <strong>www.comercialmaro.biz</strong> (en adelante, «el Sitio Web»), titularidad de ALUMINIO Y PVC HEMAR, S.L. El acceso al Sitio Web atribuye la condición de usuario e implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal.</p>
        </section>

        <section>
          <h2 className="font-montserrat text-[18px] font-bold text-carbon mb-4">3. Propiedad intelectual e industrial</h2>
          <p>Todos los contenidos del Sitio Web —textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como el diseño gráfico y el código fuente— son propiedad intelectual de ALUMINIO Y PVC HEMAR, S.L. o de terceros que han autorizado su uso, y están protegidos por la legislación española e internacional en materia de propiedad intelectual e industrial.</p>
          <p className="mt-3">Queda expresamente prohibida la reproducción, distribución, comunicación pública o transformación de cualquier contenido del Sitio Web sin la autorización previa y por escrito del titular.</p>
        </section>

        <section>
          <h2 className="font-montserrat text-[18px] font-bold text-carbon mb-4">4. Responsabilidad</h2>
          <p>ALUMINIO Y PVC HEMAR, S.L. no se hace responsable de los daños y perjuicios de cualquier naturaleza derivados del uso del Sitio Web, de la imposibilidad de acceso al mismo, de los fallos en las comunicaciones, de la presencia de virus o programas maliciosos en los contenidos, ni de cualquier causa ajena a su control.</p>
          <p className="mt-3">Los contenidos informativos publicados en el Sitio Web tienen carácter orientativo. ALUMINIO Y PVC HEMAR, S.L. se reserva el derecho a modificarlos en cualquier momento sin previo aviso.</p>
        </section>

        <section>
          <h2 className="font-montserrat text-[18px] font-bold text-carbon mb-4">5. Enlaces externos</h2>
          <p>El Sitio Web puede contener enlaces a páginas de terceros. ALUMINIO Y PVC HEMAR, S.L. no tiene control sobre esas páginas y no asume ninguna responsabilidad sobre sus contenidos o su política de privacidad.</p>
        </section>

        <section>
          <h2 className="font-montserrat text-[18px] font-bold text-carbon mb-4">6. Legislación aplicable y jurisdicción</h2>
          <p>Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia derivada del acceso o uso del Sitio Web, ALUMINIO Y PVC HEMAR, S.L. y el usuario se someten, con renuncia expresa a cualquier otro fuero, a los Juzgados y Tribunales de Bilbao.</p>
        </section>

        <p className="text-[12px] text-gris-medio/60 pt-4 border-t border-gris-claro">Última actualización: marzo de 2026</p>
      </div>
    </div>
  )
}
