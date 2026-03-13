import { Badge } from "@/components/ui/badge"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  CheckCircle2, 
  Factory, 
  Globe2, 
  HeartHandshake, 
  ShieldCheck, 
  Truck,
  Pill,
  Wheat,
  Cpu,
  Ship,
  Shirt,
  Car,
  MessageSquare,
  FileText
} from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre Nosotros | Expertos en Control de Humedad",
  description: "Conozca Haysen Group Chile, líderes en importación de Silica Gel y desecantes. Más de 10 años abasteciendo a la industria minera, farmacéutica y alimentaria.",
}

export default function NosotrosPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Calidad Certificada",
      description: "Todos nuestros productos cumplen con estrictos estándares internacionales de absorción y seguridad."
    },
    {
      icon: Truck,
      title: "Logística Eficiente",
      description: "Contamos con despacho a todo Chile en tiempos récord, asegurando la continuidad de su operación."
    },
    {
      icon: Factory,
      title: "Venta Industrial",
      description: "Capacidad para abastecer desde pequeños laboratorios hasta grandes plantas de producción."
    },
    {
      icon: HeartHandshake,
      title: "Atención Personalizada",
      description: "Asesoría técnica experta para elegir el desecante correcto para su necesidad específica."
    }
  ]

  const industries = [
    { 
      name: "Farmacéutica", 
      icon: Pill, 
      color: "text-blue-500", 
      bg: "bg-blue-50",
      desc: "Protección crítica para medicamentos.",
      rec: "Silica Gel Naranja"
    },
    { 
      name: "Alimentaria", 
      icon: Wheat, 
      color: "text-amber-500", 
      bg: "bg-amber-50",
      desc: "Evita apelmazamiento y hongos.",
      rec: "Silica Naranja (Eco)"
    },
    { 
      name: "Electrónica", 
      icon: Cpu, 
      color: "text-purple-500", 
      bg: "bg-purple-50",
      desc: "Previene corrosión en circuitos.",
      rec: "Silica Gel Azul"
    },
    { 
      name: "Logística", 
      icon: Ship, 
      color: "text-cyan-500", 
      bg: "bg-cyan-50",
      desc: "Seguridad para carga marítima.",
      rec: "Container Dry"
    },
    { 
      name: "Textil", 
      icon: Shirt, 
      color: "text-pink-500", 
      bg: "bg-pink-50",
      desc: "Protege telas de moho y olor.",
      rec: "Silica Blanca"
    },
    { 
      name: "Automotriz", 
      icon: Car, 
      color: "text-red-500", 
      bg: "bg-red-50",
      desc: "Cuidado de partes metálicas.",
      rec: "VCI + Silica"
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Header Unificado */}
      <section className="relative py-20 md:py-28 bg-slate-900 overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/40 via-slate-900/60 to-slate-900"></div>
        <div className="container relative z-10 mx-auto px-4">
          <Breadcrumbs variant="transparent" />
          <Badge className="mb-6 bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-4 py-1.5 text-sm hover:bg-emerald-500/20 backdrop-blur-sm">
            Sobre Nosotros
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Expertos en <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Protección Industrial</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Más de una década liderando el mercado de desecantes y soluciones de embalaje en Chile.
          </p>
        </div>
      </section>

      {/* Misión / Historia */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold">
                <Globe2 className="h-4 w-4" />
                <span>Sobre Nosotros</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Más que proveedores, somos socios estratégicos
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Fundada con la visión de profesionalizar el mercado de desecantes en Chile, <strong>Haysen Group Chile</strong> ha evolucionado para convertirse en un referente nacional en soluciones de control de humedad.
                </p>
                <p>
                  Entendemos que la humedad es el enemigo silencioso de la industria. Por eso, no solo vendemos Silica Gel; ofrecemos tranquilidad. Desde la protección de medicamentos vitales hasta la preservación de maquinaria costosa, nuestros productos están ahí para garantizar la integridad de lo que más importa.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden bg-slate-100 shadow-2xl">
              {/* Placeholder para imagen de oficina/bodega */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300">
                <Factory className="h-24 w-24 text-slate-400 opacity-50" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <p className="font-bold text-lg">Centro de Distribución</p>
                <p className="text-sm text-slate-300">Santiago, Chile</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores / Por Qué Elegirnos */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">¿Por qué elegir Haysen Group?</h2>
            <p className="text-slate-600">
              Nuestra promesa de valor se basa en cuatro pilares fundamentales que garantizan su satisfacción.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 mx-auto bg-emerald-100 rounded-xl flex items-center justify-center mb-4 text-emerald-600">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industrias */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Industrias que Confían en Nosotros</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Nuestros productos son esenciales en diversos sectores productivos, garantizando la calidad final.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="group relative flex flex-col p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 overflow-hidden"
              >
                {/* Background Decorativo Hover */}
                <div className="absolute inset-0 bg-emerald-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${industry.bg} group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                    <industry.icon className={`h-6 w-6 ${industry.color}`} />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold text-lg text-slate-800 group-hover:text-emerald-800 transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1 mb-3 leading-relaxed">
                      {industry.desc}
                    </p>
                    <div className="mt-auto inline-flex items-center text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md w-fit opacity-80 group-hover:opacity-100 transition-opacity">
                      Recomendado: {industry.rec}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Mejorado */}
      <section className="py-20 bg-emerald-950 text-white text-center relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Optimice sus costos con <span className="text-emerald-400">Precios Mayoristas</span>
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Únase a más de 500 empresas en Chile que confían su cadena de suministro a Haysen Group. 
            Garantizamos stock permanente y respuesta en menos de 2 horas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-10">
            {/* Botón WhatsApp (Acción Rápida) */}
            <Button asChild size="lg" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold h-14 px-8 text-lg shadow-lg shadow-emerald-900/50 hover:scale-105 transition-transform">
              <Link href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank">
                <MessageSquare className="mr-2 h-5 w-5" />
                Cotizar por WhatsApp
              </Link>
            </Button>
            
            {/* Botón Email (Formal) */}
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-slate-600 bg-transparent text-slate-200 hover:bg-slate-800 hover:text-white hover:border-slate-500 font-medium h-14 px-8 text-lg hover:scale-105 transition-transform">
              <Link href="/contacto">
                <FileText className="mr-2 h-5 w-5" />
                Solicitud Formal
              </Link>
            </Button>
          </div>

          {/* Micro-Trust Signals */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-400 font-medium">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              Facturación Inmediata
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              Despacho en 24h
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              Certificación ISO
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
