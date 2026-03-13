import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Package, ArrowRight, Home } from "lucide-react"

export default function SuccessPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 bg-slate-50">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center animate-in fade-in zoom-in duration-500">
        
        {/* Icono de Éxito Animado */}
        <div className="mb-8 flex justify-center">
          <div className="h-24 w-24 bg-emerald-100 rounded-full flex items-center justify-center animate-bounce">
            <CheckCircle2 className="h-12 w-12 text-emerald-600" />
          </div>
        </div>

        {/* Mensaje Principal */}
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
          ¡Solicitud Recibida!
        </h1>
        
        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
          Hemos recibido tu solicitud de cotización correctamente.
          <br className="hidden md:block" />
          Un ejecutivo comercial revisará tus requerimientos y te enviará una propuesta formal a tu correo en breve.
        </p>

        {/* Caja de Información */}
        <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 mb-8 text-left">
          <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            ¿Qué sucede ahora?
          </h3>
          <ul className="text-sm text-slate-600 space-y-2 pl-4">
            <li>• Revisaremos el stock disponible.</li>
            <li>• Calcularemos los costos de envío según tu ubicación.</li>
            <li>• Te enviaremos la cotización formal con los datos de pago.</li>
          </ul>
        </div>

        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-200 w-full sm:w-auto h-12 text-base">
            <Link href="/productos">
              <Package className="mr-2 h-5 w-5" />
              Volver al Catálogo
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="border-slate-200 hover:bg-slate-50 text-slate-700 w-full sm:w-auto h-12 text-base">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Ir al Inicio
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
