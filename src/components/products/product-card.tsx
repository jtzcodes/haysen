"use client"

import { Product, ProductVariant } from "@/config/products"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { formatPrice } from "@/lib/format"
import { useCart } from "@/store/use-cart"
import { useState } from "react"
import { Check, FileText, Package, Droplets, Leaf, Factory, LucideIcon, Minus, Plus, ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"

interface ProductCardProps {
  product: Product
}

const getProductIcon = (name: string, category: string): { Icon: LucideIcon, color: string } => {
  const lowerName = name.toLowerCase()
  
  if (lowerName.includes("azul")) return { Icon: Droplets, color: "blue" }
  if (lowerName.includes("naranja")) return { Icon: Leaf, color: "amber" }
  if (lowerName.includes("blanca")) return { Icon: Package, color: "slate" }
  if (category.includes("Industrial")) return { Icon: Factory, color: "emerald" }
  
  return { Icon: Package, color: "slate" }
}

export function ProductCard({ product }: ProductCardProps) {
  const cart = useCart()
  const [selectedVariantId, setSelectedVariantId] = useState(product.variants[0].id)
  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded] = useState(false)

  const selectedVariant = product.variants.find(v => v.id === selectedVariantId) || product.variants[0]
  const displayImage = selectedVariant.image || product.image
  const { Icon, color } = getProductIcon(product.name, product.category)

  const colorClasses = {
    emerald: "bg-emerald-100 text-emerald-600",
    blue: "bg-blue-100 text-blue-600",
    amber: "bg-amber-100 text-amber-600",
    slate: "bg-slate-100 text-slate-600",
  }[color]

  const handleAddToCart = () => {
    cart.addItem(product, selectedVariant, quantity)
    setIsAdded(true)
    setQuantity(1)
    setTimeout(() => setIsAdded(false), 2000)
  }

  const adjustQuantity = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta))
  }

  return (
    <Card className="flex flex-col overflow-hidden border-border/50 bg-white shadow-sm hover:shadow-md transition-all duration-300 h-full group">
      {/* 1. Imagen / Header Visual (Más compacto: h-48) */}
      <Link href={`/productos/${product.slug}`} className="block w-full h-48 bg-slate-50 relative overflow-hidden shrink-0 cursor-pointer group-image">
        {displayImage ? (
          <Image
            key={displayImage}
            src={displayImage}
            alt={`Imagen de ${product.name}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-300">
            <div className={cn("mb-2 p-4 rounded-full bg-white shadow-sm transition-transform duration-500 group-hover:scale-110", colorClasses)}>
              <Icon className="h-8 w-8" />
            </div>
            <span className="text-xs font-medium flex items-center gap-1.5 opacity-60">
              <ImageIcon className="h-3.5 w-3.5" />
              Sin Imagen
            </span>
          </div>
        )}
        
        {/* Badge Flotante */}
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-white/90 backdrop-blur text-slate-700 shadow-sm text-[10px] h-5 px-2">
            {product.category}
          </Badge>
        </div>
      </Link>

      {/* 2. Cuerpo */}
      <div className="flex-1 p-5 flex flex-col">
        {/* Título y Descripción Corta */}
        <div className="mb-4">
          <Link href={`/productos/${product.slug}`} className="block">
            <h3 className="text-lg font-bold text-slate-900 leading-tight mb-2 group-hover:text-emerald-700 transition-colors">
              {product.name}
            </h3>
          </Link>
          {/* Features como texto pequeño en lugar de badges grandes para ahorrar espacio */}
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-500 mb-3">
            {product.features.slice(0, 3).map((feature, i) => (
              <span key={i} className="flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-emerald-400" />
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* 3. Selector de Variantes (Pastillas) */}
        <div className="mt-auto space-y-4">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
              Seleccionar Formato
            </span>
            <div className="flex flex-wrap gap-2">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => {
                    setSelectedVariantId(variant.id)
                    setQuantity(1)
                  }}
                  className={cn(
                    "text-xs font-medium px-3 py-1.5 rounded-full border transition-all",
                    selectedVariantId === variant.id
                      ? "border-emerald-500 bg-emerald-50 text-emerald-700 ring-1 ring-emerald-500 ring-offset-1"
                      : "border-slate-200 bg-white text-slate-600 hover:border-emerald-300 hover:text-emerald-600"
                  )}
                >
                  {variant.name}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Barra de Acción Compacta */}
          <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
            {/* Fila: Selector Cantidad + Texto "Cotizar" */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Cantidad</span>
                <span className="text-xs text-slate-500 font-medium">Unidades por pedido</span>
              </div>
              
              <div className="flex items-center bg-white rounded-md border border-slate-200 h-10 shadow-sm w-32">
                <button 
                  onClick={() => adjustQuantity(-1)}
                  className="h-full px-3 text-slate-400 hover:text-emerald-600 hover:bg-slate-50 rounded-l-md transition-colors border-r border-slate-100"
                  disabled={quantity <= 1 || !selectedVariant.stock}
                >
                  <Minus className="h-3 w-3" />
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => {
                    const val = parseInt(e.target.value)
                    if (!isNaN(val) && val > 0) setQuantity(val)
                  }}
                  className="w-full text-center text-sm font-bold text-slate-900 border-none focus:ring-0 p-0 h-full"
                />
                <button 
                  onClick={() => adjustQuantity(1)}
                  className="h-full px-3 text-slate-400 hover:text-emerald-600 hover:bg-slate-50 rounded-r-md transition-colors border-l border-slate-100"
                  disabled={!selectedVariant.stock}
                >
                  <Plus className="h-3 w-3" />
                </button>
              </div>
            </div>

            {/* Botón de Acción Principal (Ancho Completo) */}
            <Button 
              className={cn(
                "w-full h-11 text-sm font-bold tracking-wide shadow-md transition-all duration-300",
                isAdded 
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-200" 
                  : "bg-slate-900 hover:bg-emerald-600 text-white hover:shadow-emerald-200"
              )}
              onClick={handleAddToCart}
              disabled={!selectedVariant.stock}
            >
              {isAdded ? (
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  Agregado Correctamente
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  AGREGAR A COTIZACIÓN
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

/* VariantRow eliminado ya que integramos la lógica en la tarjeta principal */
