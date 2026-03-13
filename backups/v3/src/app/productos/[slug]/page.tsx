"use client"

import { useParams, notFound } from "next/navigation"
import { products, Product } from "@/config/products"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2, Download, FileText, Share2, ShieldCheck, Droplets, Leaf, Factory, Package, LucideIcon } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/store/use-cart"
import { useState } from "react"
import { formatPrice } from "@/lib/format"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// Helper para iconos (Reutilizado)
const getProductIcon = (name: string, category: string): { Icon: LucideIcon, color: string } => {
  const lowerName = name.toLowerCase()
  if (lowerName.includes("azul")) return { Icon: Droplets, color: "blue" }
  if (lowerName.includes("naranja")) return { Icon: Leaf, color: "amber" }
  if (lowerName.includes("blanca")) return { Icon: Package, color: "slate" }
  if (category.includes("Industrial")) return { Icon: Factory, color: "emerald" }
  return { Icon: Package, color: "slate" }
}

export default function ProductDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  const { Icon, color } = getProductIcon(product.name, product.category)
  const colorClasses = {
    emerald: "text-emerald-600 bg-emerald-50 border-emerald-100",
    blue: "text-blue-600 bg-blue-50 border-blue-100",
    amber: "text-amber-600 bg-amber-50 border-amber-100",
    slate: "text-slate-600 bg-slate-50 border-slate-100",
  }[color]

  // Estado para variantes
  const [selectedVariantId, setSelectedVariantId] = useState(product.variants[0].id)
  const selectedVariant = product.variants.find(v => v.id === selectedVariantId) || product.variants[0]
  const cart = useCart()
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    cart.addItem(product, selectedVariant, quantity)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* 1. Header de Producto (Industrial) */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Columna Izquierda: Visualización Técnica */}
            <div className="lg:col-span-5 relative">
              <div className={cn("aspect-square rounded-3xl flex items-center justify-center border-2", colorClasses)}>
                <Icon className="w-48 h-48 lg:w-64 lg:h-64 opacity-90" />
                <div className="absolute top-6 left-6">
                  <Badge variant="secondary" className="bg-white/90 backdrop-blur text-slate-700 shadow-sm border border-slate-100 px-3 py-1">
                    {product.category}
                  </Badge>
                </div>
              </div>
              
              {/* Features Rápidos */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                  <ShieldCheck className="text-emerald-600 w-6 h-6" />
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold">Calidad</p>
                    <p className="text-sm font-semibold text-slate-700">Certificada</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                  <Package className="text-blue-600 w-6 h-6" />
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold">Stock</p>
                    <p className="text-sm font-semibold text-slate-700">Disponible</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Información y Compra */}
            <div className="lg:col-span-7 flex flex-col h-full">
              <div className="mb-8">
                <h1 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                  {product.name}
                </h1>
                <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
                  {product.description}
                </p>
              </div>

              {/* Selector de Formatos (B2B) */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm mb-8">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  1. Seleccione Formato
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariantId(variant.id)}
                      className={cn(
                        "relative flex flex-col p-4 rounded-xl border-2 text-left transition-all",
                        selectedVariantId === variant.id
                          ? "border-emerald-600 bg-emerald-50/30"
                          : "border-slate-100 hover:border-emerald-200 hover:bg-slate-50"
                      )}
                    >
                      <span className="text-sm font-bold text-slate-900">{variant.name}</span>
                      <span className="text-xs text-slate-500 mb-2">{variant.weight} {variant.unit}</span>
                      <span className="mt-auto font-mono font-bold text-emerald-700">
                        {formatPrice(variant.price)}
                      </span>
                      {selectedVariantId === variant.id && (
                        <div className="absolute top-3 right-3 text-emerald-600">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Panel de Acción */}
              <div className="flex flex-col sm:flex-row gap-4 items-center bg-slate-900 text-white p-6 rounded-2xl shadow-xl shadow-slate-900/10 mt-auto">
                <div className="flex-1">
                  <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Precio Total Neto</p>
                  <p className="text-3xl font-bold font-mono">{formatPrice(selectedVariant.price)}</p>
                </div>
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    className="flex-1 sm:flex-none bg-emerald-600 hover:bg-emerald-500 text-white font-bold h-12 px-8"
                    onClick={handleAddToCart}
                  >
                    Agregar al Pedido
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* 2. Contenido Técnico (Tabs) */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Detalles Izquierda */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Aplicaciones */}
            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Factory className="text-slate-400" /> Aplicaciones Industriales
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.applications.map((app, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{app}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Especificaciones Técnicas */}
            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <FileText className="text-slate-400" /> Especificaciones
              </h3>
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <table className="w-full text-sm text-left">
                  <tbody className="divide-y divide-slate-100">
                    {product.features.map((feature, i) => (
                      <tr key={i} className="hover:bg-slate-50/50">
                        <td className="px-6 py-4 font-medium text-slate-900 w-1/3">Característica {i + 1}</td>
                        <td className="px-6 py-4 text-slate-600">{feature}</td>
                      </tr>
                    ))}
                    <tr>
                      <td className="px-6 py-4 font-medium text-slate-900">Presentación</td>
                      <td className="px-6 py-4 text-slate-600">Sellado hermético de fábrica</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

          </div>

          {/* Sidebar Derecha: Descargas y Ayuda */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-4">Documentación</h4>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start h-auto py-3 border-slate-200 hover:border-emerald-500 hover:text-emerald-600 group">
                  <div className="bg-slate-100 p-2 rounded-lg mr-3 group-hover:bg-emerald-50">
                    <FileText className="w-5 h-5 text-slate-500 group-hover:text-emerald-600" />
                  </div>
                  <div className="text-left">
                    <span className="block font-semibold">Ficha Técnica (TDS)</span>
                    <span className="text-xs text-slate-400">PDF • 1.2 MB</span>
                  </div>
                  <Download className="ml-auto w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
                <Button variant="outline" className="w-full justify-start h-auto py-3 border-slate-200 hover:border-emerald-500 hover:text-emerald-600 group">
                  <div className="bg-slate-100 p-2 rounded-lg mr-3 group-hover:bg-emerald-50">
                    <ShieldCheck className="w-5 h-5 text-slate-500 group-hover:text-emerald-600" />
                  </div>
                  <div className="text-left">
                    <span className="block font-semibold">Hoja de Seguridad (MSDS)</span>
                    <span className="text-xs text-slate-400">PDF • 800 KB</span>
                  </div>
                  <Download className="ml-auto w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </div>
            </div>

            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
              <h4 className="font-bold text-emerald-900 mb-2">¿Necesita grandes volúmenes?</h4>
              <p className="text-sm text-emerald-700 mb-4">
                Precios especiales para pedidos sobre 500 Kg. Contacte a un ejecutivo comercial.
              </p>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                Cotizar Mayorista
              </Button>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
