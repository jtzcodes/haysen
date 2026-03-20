import { Metadata } from "next"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad de Haysen Group Chile. Cómo recopilamos, usamos y protegemos su información personal.",
}

export default function PrivacidadPage() {
  return (
    <div className="flex flex-col">
      <section className="relative py-20 bg-slate-900 overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/40 via-slate-900/60 to-slate-900" />
        <div className="container relative z-10 mx-auto px-4">
          <Breadcrumbs variant="transparent" />
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20">
              <Shield className="h-7 w-7 text-emerald-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Política de Privacidad
          </h1>
          <p className="text-slate-400 text-sm">Última actualización: marzo 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600">

            <h2>1. Responsable del Tratamiento</h2>
            <p>
              <strong>Haysen Group Chile SpA</strong>, RUT: [RUT empresa], con domicilio en Santiago, Chile, es responsable del tratamiento de los datos personales recopilados a través del sitio web <strong>haysen.cl</strong>.
            </p>

            <h2>2. Datos que Recopilamos</h2>
            <p>Recopilamos únicamente los datos que usted nos proporciona voluntariamente al:</p>
            <ul>
              <li>Completar el formulario de cotización o contacto</li>
              <li>Comunicarse con nosotros por correo electrónico o WhatsApp</li>
            </ul>
            <p>Los datos recopilados pueden incluir: nombre completo, nombre de empresa, correo electrónico, teléfono y descripción de su solicitud.</p>

            <h2>3. Finalidad del Tratamiento</h2>
            <p>Sus datos personales son utilizados exclusivamente para:</p>
            <ul>
              <li>Responder su solicitud de cotización o consulta</li>
              <li>Enviarle información comercial relacionada con su consulta</li>
              <li>Gestionar la relación comercial si decide convertirse en cliente</li>
            </ul>
            <p>No utilizamos sus datos para campañas masivas de marketing ni los cedemos a terceros sin su consentimiento.</p>

            <h2>4. Base Legal</h2>
            <p>
              El tratamiento de sus datos se basa en su consentimiento explícito al completar y enviar nuestros formularios, conforme a la Ley N° 19.628 sobre Protección de la Vida Privada de Chile.
            </p>

            <h2>5. Conservación de Datos</h2>
            <p>
              Sus datos serán conservados durante el tiempo necesario para gestionar su solicitud y, en caso de relación comercial, durante el plazo legal correspondiente. Si no existe relación comercial, eliminamos sus datos tras 12 meses de inactividad.
            </p>

            <h2>6. Sus Derechos</h2>
            <p>Conforme a la legislación chilena, usted tiene derecho a:</p>
            <ul>
              <li><strong>Acceso:</strong> Solicitar información sobre los datos que tenemos de usted</li>
              <li><strong>Rectificación:</strong> Corregir datos inexactos</li>
              <li><strong>Cancelación:</strong> Solicitar la eliminación de sus datos</li>
              <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos</li>
            </ul>
            <p>
              Para ejercer estos derechos, escríbanos a <strong>contacto@haysen.cl</strong> indicando su solicitud.
            </p>

            <h2>7. Cookies</h2>
            <p>
              Este sitio web puede utilizar cookies técnicas necesarias para su funcionamiento. No utilizamos cookies de rastreo publicitario de terceros sin su consentimiento.
            </p>

            <h2>8. Seguridad</h2>
            <p>
              Implementamos medidas técnicas y organizativas para proteger sus datos contra acceso no autorizado, pérdida o divulgación. El sitio opera bajo protocolo HTTPS con certificado SSL.
            </p>

            <h2>9. Cambios en esta Política</h2>
            <p>
              Podemos actualizar esta política ocasionalmente. Le notificaremos cualquier cambio relevante publicando la nueva versión en esta página con la fecha de actualización.
            </p>

            <h2>10. Contacto</h2>
            <p>
              Si tiene preguntas sobre esta política o el tratamiento de sus datos, contáctenos en:
            </p>
            <ul>
              <li>Email: <strong>contacto@haysen.cl</strong></li>
              <li>Sitio web: <strong>haysen.cl/contacto</strong></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
