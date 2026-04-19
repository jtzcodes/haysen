import { Badge } from "@/components/ui/badge"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Code2,
  Mail,
  Globe,
  ShoppingCart,
  Building2,
  BarChart3,
  FileText,
  Smartphone,
  Terminal,
  ExternalLink,
  Star,
  CheckCircle2,
  User,
  Phone,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Desarrollador | Johnny Torres — Full Stack Developer",
  description:
    "Conoce al desarrollador detrás de este proyecto. Full Stack Developer con más de 10 años de experiencia profesional. Disponible para proyectos freelance.",
}

export default function DesarrolladorPage() {
  const services = [
    {
      icon: ShoppingCart,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      title: "Tienda Online / E-commerce",
      description:
        "Vende tus productos las 24 horas, los 7 días. Catálogo, carrito de compras, pagos en línea y gestión de pedidos en un solo lugar.",
      benefit: "Más ventas, menos fricción",
    },
    {
      icon: Building2,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100",
      title: "Sitio Web Corporativo",
      description:
        "Presencia profesional en internet que genera confianza y convierte visitantes en clientes. Diseño atractivo, rápido y optimizado para Google.",
      benefit: "Más credibilidad, más contactos",
    },
    {
      icon: BarChart3,
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-100",
      title: "Sistema de Gestión",
      description:
        "Automatiza los procesos internos de tu empresa: inventario, pedidos, clientes, reportes. Menos papel, menos errores, más control.",
      benefit: "Ahorra tiempo y reduce costos",
    },
    {
      icon: FileText,
      color: "text-orange-600",
      bg: "bg-orange-50",
      border: "border-orange-100",
      title: "Landing Page",
      description:
        "Una página diseñada para captar clientes potenciales, promocionar un servicio o lanzar un producto. Clara, rápida y orientada a resultados.",
      benefit: "Más leads, mejor conversión",
    },
    {
      icon: Smartphone,
      color: "text-pink-600",
      bg: "bg-pink-50",
      border: "border-pink-100",
      title: "Aplicación Móvil",
      description:
        "Llega a tus clientes directamente en su teléfono. Aplicaciones para iOS y Android que extienden tu negocio a cualquier lugar.",
      benefit: "Mayor alcance y fidelización",
    },
    {
      icon: Globe,
      color: "text-teal-600",
      bg: "bg-teal-50",
      border: "border-teal-100",
      title: "A medida",
      description:
        "¿Tu proyecto no encaja en ninguna categoría? No hay problema. Cuéntame tu idea y buscamos juntos la mejor solución digital para tu negocio.",
      benefit: "Solución personalizada",
    },
  ]

  const projects = [
    {
      name: "Haysen Group Chile",
      description:
        "E-commerce industrial con catálogo de productos, carrito de compras, sistema de cotizaciones y blog SEO. Construido con Next.js 14 y TypeScript.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Resend"],
      status: "En producción",
      statusColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
      link: "https://haysen.cl",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900/60 to-slate-900" />
        <div className="container relative z-10 mx-auto px-4">
          <Breadcrumbs variant="transparent" />

          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-5xl mx-auto">
            {/* Avatar */}
            <div className="shrink-0">
              <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image
                  src="/perfil-dev.png"
                  alt="Johnny Torres — Full Stack Developer"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
              </div>
            </div>

            {/* Info */}
            <div className="text-center md:text-left">
              <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-1.5 text-sm hover:bg-blue-500/20 backdrop-blur-sm">
                <Code2 className="h-3.5 w-3.5 mr-2" />
                Full Stack Developer
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
                Johnny Torres
              </h1>
              <p className="text-lg text-slate-300 max-w-xl leading-relaxed mb-6">
                Ayudo a empresas y emprendedores a crecer en digital. Llevo más de 10 años
                haciendo que la tecnología trabaje para los negocios, no al revés.
              </p>

              {/* Contact Links */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <Button
                  asChild
                  size="sm"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm"
                >
                  <Link href="mailto:jony.tz@gmail.com">
                    <Mail className="h-4 w-4 mr-2" />
                    jony.tz@gmail.com
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm"
                >
                  <Link href="https://wa.me/56968985000" target="_blank">
                    <Phone className="h-4 w-4 mr-2" />
                    +56 9 6898 5000
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold">
                <User className="h-4 w-4" />
                <span>Sobre mí</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Una década de experiencia, ahora a tu servicio
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Soy desarrollador Full Stack basado en Chile con más de 10 años de experiencia.
                  Me especializo en construir productos digitales que ayudan a los negocios
                  a vender más, operar mejor y crecer.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                {["Disponible para proyectos", "Trabajo remoto", "Chile & LATAM"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "10+", label: "Años de experiencia profesional", icon: Terminal },
                { value: "Full", label: "Stack: web, mobile y backend", icon: Code2 },
                { value: "100%", label: "Compromiso con cada proyecto", icon: Star },
                { value: "CL", label: "Basado en Chile, trabajo remoto", icon: Globe },
              ].map((stat) => (
                <Card
                  key={stat.label}
                  className="border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardContent className="pt-6 pb-5 text-center">
                    <div className="w-10 h-10 mx-auto bg-slate-100 rounded-xl flex items-center justify-center mb-3 text-slate-600">
                      <stat.icon className="h-5 w-5" />
                    </div>
                    <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                    <p className="text-xs text-slate-500 mt-1 leading-snug">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">¿En qué puedo ayudarte?</h2>
            <p className="text-slate-600">
              Construyo productos digitales orientados a hacer crecer tu negocio.
              Sin tecnicismos — solo resultados.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300"
              >
                <div className={`w-12 h-12 ${service.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`h-6 w-6 ${service.color}`} />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>
                <div className={`inline-flex items-center text-xs font-semibold ${service.color} ${service.bg} px-2.5 py-1 rounded-md w-fit border ${service.border}`}>
                  {service.benefit}
                </div>
              </div>
            ))}
          </div>
          {/* Tech stack discreto */}
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mt-10">
            {["React", "Next.js", "TypeScript", "Node.js", "React Native", "PostgreSQL", "Supabase", "Vercel"].map((tech) => (
              <span key={tech} className="text-xs text-slate-400">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Trabajo reciente</h2>
            <p className="text-slate-600">
              Proyectos en producción construidos con altos estándares de calidad y orientados a resultados reales.
            </p>
          </div>
          <div className="max-w-md mx-auto">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group flex flex-col p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${project.statusColor}`}>
                    {project.status}
                  </span>
                  <Link
                    href={project.link}
                    className="text-slate-400 hover:text-slate-700 transition-colors"
                    target="_blank"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Contacto */}
      <section className="py-20 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Badge className="mb-6 bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-4 py-1.5 text-sm hover:bg-emerald-500/20">
            Disponible para proyectos
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Cuéntame tu idea. Trabajo contigo desde el concepto hasta el lanzamiento,
            con la experiencia de quien ha construido software profesional por más de una década.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold h-14 px-8 text-lg shadow-lg shadow-emerald-900/50 hover:scale-105 transition-transform"
            >
              <Link href="https://wa.me/56968985000" target="_blank">
                <Phone className="mr-2 h-5 w-5" />
                Escribir por WhatsApp
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-slate-600 bg-transparent text-slate-200 hover:bg-slate-800 hover:text-white hover:border-slate-500 font-medium h-14 px-8 text-lg hover:scale-105 transition-transform"
            >
              <Link href="mailto:jony.tz@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                jony.tz@gmail.com
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-400 font-medium">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              Respuesta en menos de 24h
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              Consulta inicial sin costo
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              Presupuesto personalizado
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
