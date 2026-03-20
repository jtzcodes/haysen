import { Metadata } from "next"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones de uso del sitio web y servicio de Haysen Group Chile.",
}

export default function TerminosPage() {
  return (
    <div className="flex flex-col">
      <section className="relative py-20 bg-slate-900 overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/40 via-slate-900/60 to-slate-900" />
        <div className="container relative z-10 mx-auto px-4">
          <Breadcrumbs variant="transparent" />
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20">
              <FileText className="h-7 w-7 text-emerald-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-slate-400 text-sm">Última actualización: marzo 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600">

            <h2>1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar el sitio web <strong>haysen.cl</strong>, usted acepta cumplir con estos Términos y Condiciones. Si no está de acuerdo con alguno de ellos, le pedimos que no utilice este sitio.
            </p>

            <h2>2. Identificación de la Empresa</h2>
            <p>
              <strong>Haysen Group Chile SpA</strong> es la empresa propietaria y responsable del sitio web haysen.cl, dedicada a la importación y distribución de desecantes industriales en Chile.
            </p>

            <h2>3. Uso del Sitio Web</h2>
            <p>El sitio web haysen.cl es de uso informativo y comercial. Usted se compromete a:</p>
            <ul>
              <li>Utilizar el sitio únicamente con fines lícitos</li>
              <li>No reproducir, distribuir ni modificar el contenido sin autorización escrita</li>
              <li>Proporcionar información veraz al completar formularios de contacto o cotización</li>
              <li>No realizar actividades que puedan dañar o sobrecargar el sitio</li>
            </ul>

            <h2>4. Cotizaciones y Precios</h2>
            <p>
              Las solicitudes de cotización realizadas a través del sitio no constituyen una orden de compra ni un contrato vinculante. Los precios informados son referenciales y pueden variar según volumen, disponibilidad de stock y condiciones del mercado.
            </p>
            <p>
              Toda venta queda sujeta a confirmación por parte de Haysen Group Chile SpA mediante cotización formal enviada al correo del cliente.
            </p>

            <h2>5. Condiciones de Venta</h2>
            <ul>
              <li><strong>Pago:</strong> Las condiciones de pago se acordarán en cada cotización (transferencia bancaria, WebPay u otra modalidad disponible).</li>
              <li><strong>Despacho:</strong> Los plazos de entrega son referenciales y pueden variar según la región y disponibilidad del transportista.</li>
              <li><strong>Devoluciones:</strong> Se aceptan devoluciones dentro de los 5 días hábiles siguientes a la recepción, siempre que el producto esté sin abrir y en su embalaje original. El flete de devolución es responsabilidad del comprador salvo error nuestro.</li>
            </ul>

            <h2>6. Propiedad Intelectual</h2>
            <p>
              Todos los contenidos del sitio — incluyendo textos, imágenes, logotipos y diseño — son propiedad de Haysen Group Chile SpA o se usan bajo licencia. Queda prohibida su reproducción total o parcial sin autorización expresa.
            </p>

            <h2>7. Limitación de Responsabilidad</h2>
            <p>
              Haysen Group Chile SpA no se hace responsable de daños directos o indirectos derivados del uso incorrecto de los productos, ni de interrupciones en el acceso al sitio por causas ajenas a nuestra voluntad (fallas técnicas, fuerza mayor, etc.).
            </p>
            <p>
              La información técnica publicada en el sitio es orientativa. Para aplicaciones críticas, recomendamos solicitar asesoría técnica directa a nuestro equipo.
            </p>

            <h2>8. Legislación Aplicable</h2>
            <p>
              Estos términos se rigen por las leyes de la República de Chile. Cualquier disputa será sometida a los tribunales competentes de la ciudad de Santiago.
            </p>

            <h2>9. Modificaciones</h2>
            <p>
              Haysen Group Chile SpA se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios entrarán en vigencia desde su publicación en esta página.
            </p>

            <h2>10. Contacto</h2>
            <p>Para consultas sobre estos términos, contáctenos en:</p>
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
