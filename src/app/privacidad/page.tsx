import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: "Política de Privacidad | Comercial MAR'O",
  description: "Política de privacidad y protección de datos de Aluminio y PVC HEMAR, S.L. — Comercial MAR'O, carpintería metálica en Bilbao.",
  keywords: ['privacidad', 'protección de datos', 'RGPD', 'política de privacidad', 'carpintería metálica'],
  path: '/privacidad',
})

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-crema">
      <div className="bg-carbon py-16 px-6 text-center">
        <nav className="text-white/60 text-[12px] font-montserrat mb-4">
          <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
          {' / '}
          <span className="text-white">Política de privacidad</span>
        </nav>
        <span className="font-montserrat text-[10px] font-bold tracking-[3px] uppercase text-arena block mb-3">Legal</span>
        <h1 className="font-montserrat text-3xl font-extrabold text-white">Política de Privacidad</h1>
      </div>
      <div className="bg-white border-b border-gris-claro px-6 py-3">
        <nav className="max-w-site mx-auto font-montserrat text-[12px] text-gris-medio flex items-center gap-1.5">
          <Link href="/" className="hover:text-rojo transition-colors">Inicio</Link>
          <span className="text-gris-medio/40">/</span>
          <span className="text-carbon font-semibold">Política de privacidad</span>
        </nav>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14 space-y-10 text-[14px] text-gris-medio leading-relaxed">

        <section>
          <h2 className="font-montserrat text-[18px] font-bold text-carbon mb-4">1. Responsable del tratamiento</h2>
          <ul className="space-y-2">
            <li><span className="font-semibold text-carbon">Razón social:</span> ALUMINIO Y PVC HEMAR, S.L.</li>
            <li><span className="font-semibold text-carbon">Nombre comercial:</span> Comercial MAR&apos;O</li>
            <li><span className="font-semibold text-carbon">CIF:</span> B-95838470</li>
            <li><span className="font-semibold text-carbon">Domicilio:</span> Avenida Lehendakari Aguirre, 161, 48015 Bilbao (Bizkaia)</li>
            <li><span className="font-semibold text-carbon">Correo electrónico:</span> bilbao@comercialmaro.biz</li>
            <li><span className="font-semibold text-carbon">Teléfono:</span> +34 944 100 462</li>
          </ul>
        </section>

        <section>
          <h2 className="font-montserrat text-[18px] font-bold text-carbon mb-4">2. Datos que recogemos</h2>
          <p>A través del formulario de contacto del Sitio Web recogemos los siguientes datos personales:</p>
          <ul className="mt-3 list-disc list-inside space-y-1">
            <li>Nombre y apellidos</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono</li>
            <li>Tipo de proyecto y mensaje</li>
          </ul>
          <p className="mt-3">No recogemos datos especialmente sensibles ni datos de menores de 14 años. Si usted es menor de 14 años, no facilite sus datos sin el consentimiento de su tutor legal.</p>
        </section>

        <section>
          <h2 className="font-montserrat text-[18px] font-bold text-carbon mb-4">3. Finalidad y base jurídica del tratamiento</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px] border border-gris-claro rounded-lg overflow-hidden">
              <thead className="bg-carbon text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-montserrat font-semibold">Finalidad</th>
                  <th className="text-left px-4 py-3 font-montserrat font-semibold">Base jurídica</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gris-claro">
                <tr className="bg-white">
                  <td className="px-4 py-3">Atender su solicitud de presupuesto o consulta</td>
                  <td className="px-4 py-3">Ejecución de medidas precontractuales (art. 6.1.b RGPD)</td>
                </tr>
                <tr className="bg-crema">
                  <td className="px-4 py-3">Envío de información comercial sobre nuestros productos y servicios</td>
                  <td className="px-4 py-3">Consentimiento del interesado (art. 6.1.a RGPD)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3">Cumplimiento de obligaciones legales</td>
                  <td className="px-4 py-3">Obligación legal (art. 6.1.c RGPD)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-montserrat text-[18px] font-bold text-carbon mb-4">4. Plazo de conservación</h2>
          <p>Los datos facilitados a través del formulario de contacto se conservarán durante el tiempo necesario para atender su solicitud y, posteriormente, durante los plazos legales de prescripción aplicables (con carácter general, hasta 5 años). Si usted ha prestado consentimiento para recibir comunicaciones comerciales, conservaremos sus datos hasta que revoque dicho consentimiento.</p>
        </section>

        <section>
          <h2 className="font-montserrat text-[18px] font-bold text-carbon mb-4">5. Destinatarios</h2>
          <p>Sus datos no se cederán a terceros, salvo obligación legal. No realizamos transferencias internacionales de datos fuera del Espacio Económico Europeo.</p>
          <p className="mt-3">Podemos utilizar proveedores de servicios tecnológicos (alojamiento web, envío de correo electrónico) que actúan como encargados del tratamiento bajo contrato y con plenas garantías de cumplimiento del RGPD.</p>
        </section>

        <section>
          <h2 className="font-montserrat text-[18px] font-bold text-carbon mb-4">6. Sus derechos</h2>
          <p>En virtud del RGPD y la LOPDGDD, usted tiene derecho a:</p>
          <ul className="mt-3 list-disc list-inside space-y-1">
            <li><span className="font-semibold text-carbon">Acceso</span> — conocer qué datos tratamos sobre usted.</li>
            <li><span className="font-semibold text-carbon">Rectificación</span> — corregir datos inexactos.</li>
            <li><span className="font-semibold text-carbon">Supresión</span> — solicitar que eliminemos sus datos.</li>
            <li><span className="font-semibold text-carbon">Limitación</span> — restringir el tratamiento en determinadas circunstancias.</li>
            <li><span className="font-semibold text-carbon">Portabilidad</span> — recibir sus datos en formato estructurado.</li>
            <li><span className="font-semibold text-carbon">Oposición</span> — oponerse al tratamiento basado en interés legítimo.</li>
            <li><span className="font-semibold text-carbon">Retirar el consentimiento</span> — en cualquier momento, sin que ello afecte a la licitud del tratamiento previo.</li>
          </ul>
          <p className="mt-4">Para ejercer sus derechos, diríjase por escrito a <strong>bilbao@comercialmaro.biz</strong> o a nuestra dirección postal, adjuntando copia de su DNI o documento identificativo equivalente. Dispone igualmente del derecho a presentar una reclamación ante la <strong>Agencia Española de Protección de Datos</strong> (www.aepd.es).</p>
        </section>

        <section>
          <h2 className="font-montserrat text-[18px] font-bold text-carbon mb-4">7. Seguridad</h2>
          <p>ALUMINIO Y PVC HEMAR, S.L. ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad e integridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos y los riesgos a que están expuestos.</p>
        </section>

        <section>
          <h2 className="font-montserrat text-[18px] font-bold text-carbon mb-4">8. Cookies</h2>
          <p>Este sitio web utiliza únicamente cookies técnicas estrictamente necesarias para el funcionamiento del sitio. No se utilizan cookies de análisis, publicidad ni seguimiento de terceros. Por tanto, no es necesario mostrar un banner de consentimiento de cookies.</p>
        </section>

        <p className="text-[12px] text-gris-medio/60 pt-4 border-t border-gris-claro">Última actualización: marzo de 2026</p>
      </div>
    </div>
  )
}
