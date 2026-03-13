import { products } from "@/config/products"
import { ProductCard } from "@/components/products/product-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import Link from "next/link"
import { HelpCircle, PackageSearch } from "lucide-react"

export default function ProductosPage() {
  const categories = Array.from(new Set(products.map(p => p.category)))

  return (
    <div className="flex flex-col">
      {/* Header del Catálogo (Estilo Unificado) */}
      <section className="relative py-20 md:py-32 bg-slate-900 overflow-hidden text-center">
        {/* ... contenido del hero ... */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/40 via-slate-900/60 to-slate-900"></div>
        <div className="container relative z-10 mx-auto px-4">
          <Breadcrumbs variant="transparent" />
          <Badge className="mb-6 bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-4 py-1.5 text-sm hover:bg-emerald-500/20 backdrop-blur-sm">
            Catálogo 2026
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Soluciones de <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Control de Humedad</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explore nuestra gama de desecantes industriales de alta pureza. 
            Disponibles en formatos minoristas y mayoristas con entrega inmediata.
          </p>
        </div>
      </section>

      {/* Grid de Productos */}
      <section className="py-16 bg-white min-h-[60vh]">
        <div className="container mx-auto px-4">
          
          {/* Filtros (Visuales por ahora) */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button variant="default" className="bg-emerald-600 hover:bg-emerald-700 rounded-full">
              Todos
            </Button>
            {categories.map(cat => (
              <Button key={cat} variant="outline" className="rounded-full hover:border-emerald-500 hover:text-emerald-600">
                {cat}
              </Button>
            ))}
          </div>

          {/* Grid */}
          {products.length > 0 ? (
            <div className="flex overflow-x-auto pb-6 -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 md:mx-0 snap-x snap-mandatory">
              {products.map((product) => (
                <div key={product.id} className="w-[85vw] flex-shrink-0 mr-4 md:w-auto md:mr-0 snap-center md:snap-align-none">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-slate-500">
              <PackageSearch className="h-16 w-16 mx-auto mb-4 opacity-20" />
              <p>No se encontraron productos en esta categoría.</p>
            </div>
          )}
        </div>
      </section>

      {/* Sección Educativa / SEO */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">¿Cómo elegir el desecante correcto?</h2>
              <div className="space-y-4 text-slate-600">
                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <h3 className="font-semibold text-emerald-700 mb-2">Silica Gel Azul</h3>
                  <p className="text-sm">Ideal para electrónica y transformadores. Cambia a rosado cuando está saturada, permitiendo un monitoreo visual fácil.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <h3 className="font-semibold text-amber-600 mb-2">Silica Gel Naranja</h3>
                  <p className="text-sm">La opción ecológica. Libre de metales pesados, apta para industrias más sensibles. Cambia a verde oscuro.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <h3 className="font-semibold text-slate-700 mb-2">Silica Gel Blanca</h3>
                  <p className="text-sm">La más económica y versátil. Perfecta para transporte, textiles y uso general donde no se requiere indicador visual.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center text-center space-y-6 bg-emerald-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="relative z-10">
                <HelpCircle className="h-12 w-12 mx-auto mb-4 text-emerald-400" />
                <h3 className="text-2xl font-bold mb-3">¿Necesita Asesoría Técnica?</h3>
                <p className="text-emerald-100 mb-8">
                  Nuestros ingenieros pueden ayudarle a calcular la cantidad exacta de desecante para su volumen de carga o almacenamiento.
                </p>
                <Button asChild size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50 font-bold w-full sm:w-auto">
                  <Link href="/contacto">Consultar con un Experto</Link>
                </Button>
              </div>
              
              {/* Decoración de fondo */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-emerald-800 rounded-full opacity-50 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-teal-800 rounded-full opacity-50 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
