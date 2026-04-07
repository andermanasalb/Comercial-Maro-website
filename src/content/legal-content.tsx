export type LegalKey = 'privacidad' | 'aviso-legal'

export const legalContent: Record<LegalKey, { title: string; body: React.ReactNode }> = {
  'privacidad': {
    title: 'Política de Privacidad',
    body: (
      <div className="space-y-8 text-[14px] text-gris-medio leading-relaxed">
        <section>
          <h3 className="font-montserrat text-[16px] font-bold text-carbon mb-3">1. Responsable del tratamiento</h3>
          <ul className="space-y-1.5">
            <li><span className="font-semibold text-carbon">Razón social:</span> ALUMINIO Y PVC HEMAR, S.L.</li>
            <li><span className="font-semibold text-carbon">Nombre comercial:</span> Comercial MAR&apos;O</li>
            <li><span className="font-semibold text-carbon">CIF:</span> B-95838470</li>
            <li><span className="font-semibold text-carbon">Domicilio:</span> Avenida Lehendakari Aguirre, 161, 48015 Bilbao (Bizkaia)</li>
            <li><span className="font-semibold text-carbon">Correo:</span> bilbao@comercialmaro.biz</li>
            <li><span className="font-semibold text-carbon">Teléfono:</span> +34 944 100 462</li>
          </ul>
        </section>
        <section>
          <h3 className="font-montserrat text-[16px] font-bold text-carbon mb-3">2. Datos que recogemos</h3>
          <p>A través del formulario de contacto recogemos: nombre y apellidos, correo electrónico, teléfono, tipo de proyecto y mensaje. No recogemos datos de menores de 14 años.</p>
        </section>
        <section>
          <h3 className="font-montserrat text-[16px] font-bold text-carbon mb-3">3. Finalidad y base jurídica</h3>
          <ul className="space-y-2">
            <li><span className="font-semibold text-carbon">Atender su consulta o presupuesto</span> — ejecución de medidas precontractuales (art. 6.1.b RGPD).</li>
            <li><span className="font-semibold text-carbon">Información comercial</span> — consentimiento del interesado (art. 6.1.a RGPD).</li>
            <li><span className="font-semibold text-carbon">Obligaciones legales</span> — art. 6.1.c RGPD.</li>
          </ul>
        </section>
        <section>
          <h3 className="font-montserrat text-[16px] font-bold text-carbon mb-3">4. Conservación</h3>
          <p>Los datos se conservan mientras dure la relación y, posteriormente, durante los plazos legales aplicables (con carácter general hasta 5 años).</p>
        </section>
        <section>
          <h3 className="font-montserrat text-[16px] font-bold text-carbon mb-3">5. Destinatarios</h3>
          <p>Sus datos no se ceden a terceros salvo obligación legal. No realizamos transferencias internacionales fuera del Espacio Económico Europeo.</p>
        </section>
        <section>
          <h3 className="font-montserrat text-[16px] font-bold text-carbon mb-3">6. Sus derechos</h3>
          <p>Puede ejercer los derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición escribiendo a <strong>bilbao@comercialmaro.biz</strong>. Tiene derecho a reclamar ante la AEPD (www.aepd.es).</p>
        </section>
        <section>
          <h3 className="font-montserrat text-[16px] font-bold text-carbon mb-3">7. Cookies</h3>
          <p>Este sitio utiliza únicamente cookies técnicas necesarias para el funcionamiento. No se usan cookies de análisis ni publicidad de terceros.</p>
        </section>
        <p className="text-[12px] text-gris-medio/60 pt-4 border-t border-gris-claro">Última actualización: marzo de 2026</p>
      </div>
    ),
  },
  'aviso-legal': {
    title: 'Aviso Legal',
    body: (
      <div className="space-y-8 text-[14px] text-gris-medio leading-relaxed">
        <section>
          <h3 className="font-montserrat text-[16px] font-bold text-carbon mb-3">1. Datos identificativos</h3>
          <ul className="space-y-1.5">
            <li><span className="font-semibold text-carbon">Razón social:</span> ALUMINIO Y PVC HEMAR, S.L.</li>
            <li><span className="font-semibold text-carbon">Nombre comercial:</span> Comercial MAR&apos;O</li>
            <li><span className="font-semibold text-carbon">CIF:</span> B-95838470</li>
            <li><span className="font-semibold text-carbon">Domicilio:</span> Avenida Lehendakari Aguirre, 161, 48015 Bilbao (Bizkaia)</li>
            <li><span className="font-semibold text-carbon">Teléfono:</span> +34 944 100 462</li>
            <li><span className="font-semibold text-carbon">Correo:</span> bilbao@comercialmaro.biz</li>
            <li><span className="font-semibold text-carbon">Registro Mercantil:</span> Bizkaia — T. 5602, F. 120, S. 8, H. BI-67762, Insc. 1ª (17.03.2016)</li>
          </ul>
        </section>
        <section>
          <h3 className="font-montserrat text-[16px] font-bold text-carbon mb-3">2. Objeto</h3>
          <p>El presente Aviso Legal regula el acceso y uso del sitio web <strong>www.comercialmaro.biz</strong>. El acceso implica la aceptación plena de todas las disposiciones aquí incluidas.</p>
        </section>
        <section>
          <h3 className="font-montserrat text-[16px] font-bold text-carbon mb-3">3. Propiedad intelectual</h3>
          <p>Todos los contenidos del sitio web (textos, imágenes, diseño, código fuente) son propiedad de ALUMINIO Y PVC HEMAR, S.L. o de terceros que han autorizado su uso. Queda prohibida su reproducción sin autorización escrita.</p>
        </section>
        <section>
          <h3 className="font-montserrat text-[16px] font-bold text-carbon mb-3">4. Responsabilidad</h3>
          <p>ALUMINIO Y PVC HEMAR, S.L. no se hace responsable de los daños derivados del uso del sitio web, fallos en las comunicaciones, ni de causas ajenas a su control. Los contenidos tienen carácter orientativo y pueden modificarse sin previo aviso.</p>
        </section>
        <section>
          <h3 className="font-montserrat text-[16px] font-bold text-carbon mb-3">5. Legislación y jurisdicción</h3>
          <p>Las presentes condiciones se rigen por la legislación española. Para cualquier controversia, las partes se someten a los Juzgados y Tribunales de Bilbao, con renuncia a cualquier otro fuero.</p>
        </section>
        <p className="text-[12px] text-gris-medio/60 pt-4 border-t border-gris-claro">Última actualización: marzo de 2026</p>
      </div>
    ),
  },
}
