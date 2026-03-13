"use client"

import { FileText, Plus, Minus, Package, Droplets, Leaf, Factory, LucideIcon } from "lucide-react"
import { useCart } from "@/store/use-cart"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { formatPrice } from "@/lib/format"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Helper para iconos (Duplicado de ProductCard para mantener consistencia visual)
const getProductIcon = (name: string, category: string): { Icon: LucideIcon, color: string } => {
  const lowerName = name.toLowerCase()
  if (lowerName.includes("azul")) return { Icon: Droplets, color: "blue" }
  if (lowerName.includes("naranja")) return { Icon: Leaf, color: "amber" }
  if (lowerName.includes("blanca")) return { Icon: Package, color: "slate" }
  if (category.includes("Industrial")) return { Icon: Factory, color: "emerald" }
  return { Icon: Package, color: "slate" }
}

export function CartSheet() {
  const cart = useCart()
  const [isMounted, setIsMounted] = useState(false)

  const [sessionId, setSessionId] = useState("")

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true)
    setSessionId(Math.floor(Math.random() * 10000).toString().padStart(4, '0'))
  }, [])

  if (!isMounted) return null

  const totalItems = cart.getTotalItems()
  const subtotal = cart.getTotalPrice()
  const iva = subtotal * 0.19
  const total = subtotal + iva

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative hover:bg-slate-100 transition-colors">
          <FileText className="h-5 w-5 text-slate-700" />
          {totalItems > 0 && (
            <Badge
              className="absolute -right-1 -top-1 h-5 w-5 justify-center rounded-full p-0 text-[10px] bg-emerald-600 hover:bg-emerald-700 border-2 border-white"
            >
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col sm:max-w-md bg-white p-0 gap-0 border-l shadow-2xl">
        {/* Header Minimalista */}
        <SheetHeader className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <SheetTitle className="text-lg font-semibold text-slate-900">Solicitud de Cotización</SheetTitle>
          <p className="text-xs text-slate-500 font-medium">
            ID de Sesión: #{sessionId}
          </p>
        </SheetHeader>

        {/* Lista Técnica (Scroll) */}
        <div className="flex-1 overflow-y-auto">
          {cart.items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center space-y-4 text-slate-400 p-6">
              <div className="h-16 w-16 rounded-full bg-slate-50 flex items-center justify-center mb-2 border border-slate-100">
                <FileText className="h-8 w-8 opacity-20" />
              </div>
              <div className="text-center">
                <p className="font-medium text-slate-600">Solicitud vacía</p>
                <p className="text-xs text-slate-400 mt-1">No hay items para cotizar.</p>
              </div>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {cart.items.map((item) => {
                const { Icon, color } = getProductIcon(item.product.name, item.product.category)
                // Usamos colores muy sutiles solo para el icono pequeño
                const iconColorClass = {
                  emerald: "text-emerald-600 bg-emerald-50",
                  blue: "text-blue-600 bg-blue-50",
                  amber: "text-amber-600 bg-amber-50",
                  slate: "text-slate-600 bg-slate-50",
                }[color]

                return (
                  <div
                    key={item.variant.id}
                    className="flex items-start gap-4 p-5 hover:bg-slate-50/50 transition-colors group"
                  >
                    {/* Icono Técnico Pequeño */}
                    <div className={cn("h-10 w-10 shrink-0 rounded border border-slate-100 flex items-center justify-center mt-1", iconColorClass)}>
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-sm font-medium text-slate-900">{item.product.name}</h4>
                          <p className="text-xs text-slate-500 mt-0.5 font-mono">
                            {item.variant.name}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        {/* Selector Cantidad Minimalista */}
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Cant:</span>
                          <div className="flex items-center border border-slate-200 rounded bg-white h-7">
                            <button
                              className="px-2 h-full hover:bg-slate-50 text-slate-500 transition-colors disabled:opacity-30"
                              onClick={() => cart.updateQuantity(item.variant.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-8 text-center text-xs font-medium text-slate-700 tabular-nums border-x border-slate-100 h-full flex items-center justify-center">
                              {item.quantity}
                            </span>
                            <button
                              className="px-2 h-full hover:bg-slate-50 text-slate-500 transition-colors"
                              onClick={() => cart.updateQuantity(item.variant.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                        </div>

                        <button
                          onClick={() => cart.removeItem(item.variant.id)}
                          className="text-xs text-slate-400 hover:text-red-600 underline decoration-dotted underline-offset-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Footer Técnico */}
        {cart.items.length > 0 && (
          <div className="bg-slate-50 border-t border-slate-200 p-6 space-y-4">
            <SheetFooter className="sm:flex-col gap-2">
              <SheetClose asChild>
                <Link href="/checkout" className="w-full">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-11 text-sm font-bold tracking-wide shadow-md shadow-emerald-200" size="lg">
                    FINALIZAR SOLICITUD
                  </Button>
                </Link>
              </SheetClose>
            </SheetFooter>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
