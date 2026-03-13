"use client"

import { useState, useEffect } from "react"
import { useCart } from "@/store/use-cart"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { formatPrice } from "@/lib/format"
import { Trash2, Send, ArrowLeft, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/config/site"

export default function CheckoutPage() {
  const cart = useCart()
  const [isMounted, setIsMounted] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    direccion: "",
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleWhatsAppOrder = () => {
    const message = `
*NUEVO PEDIDO WEB - ${siteConfig.name}*
--------------------------------
*Cliente:* ${formData.nombre}
*Empresa:* ${formData.empresa || "Particular"}
*Teléfono:* ${formData.telefono}
*Email:* ${formData.email}
*Dirección:* ${formData.direccion}

*DETALLE DEL PEDIDO:*
${cart.items
  .map(
    (item) =>
      `- ${item.product.name} (${item.variant.name}) x${item.quantity} = ${formatPrice(
        item.variant.price * item.quantity
      )}`
  )
  .join("\n")}

*TOTAL A PAGAR: ${formatPrice(cart.getTotalPrice())}*
--------------------------------
Solicito confirmación de stock y datos de transferencia.
`.trim()

    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
      message
    )}`
    
    window.open(whatsappUrl, "_blank")
  }

  if (cart.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center space-y-6">
        <div className="bg-slate-100 p-6 rounded-full">
          <Trash2 className="h-12 w-12 text-slate-400" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900">Tu carrito está vacío</h1>
        <p className="text-slate-500 max-w-md">
          Parece que aún no has agregado productos. Revisa nuestro catálogo para encontrar la solución que necesitas.
        </p>
        <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
          <Link href="/productos">Ir al Catálogo</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-sm text-slate-500 hover:text-emerald-600 mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a comprar
        </Link>
        <h1 className="text-3xl font-bold text-slate-900">Finalizar Pedido</h1>
        <p className="text-slate-500">Completa tus datos para coordinar el despacho.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Columna Izquierda: Formulario */}
        <div className="space-y-6">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle>Datos de Facturación y Envío</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre Completo *</Label>
                  <Input 
                    id="nombre" 
                    name="nombre" 
                    placeholder="Juan Pérez" 
                    required 
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="empresa">Empresa (Opcional)</Label>
                  <Input 
                    id="empresa" 
                    name="empresa" 
                    placeholder="Mi Empresa SpA" 
                    value={formData.empresa}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico *</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="juan@empresa.com" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono / WhatsApp *</Label>
                  <Input 
                    id="telefono" 
                    name="telefono" 
                    placeholder="+56 9 1234 5678" 
                    required 
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="direccion">Dirección de Envío *</Label>
                <Input 
                  id="direccion" 
                  name="direccion" 
                  placeholder="Av. Providencia 1234, Oficina 505, Santiago" 
                  required 
                  value={formData.direccion}
                  onChange={handleChange}
                />
              </div>
            </CardContent>
          </Card>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex gap-3 items-start">
            <ShieldCheck className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
            <div className="text-sm text-blue-800">
              <p className="font-semibold mb-1">Compra Segura</p>
              <p>Al enviar tu pedido, un ejecutivo comercial te contactará para confirmar stock y enviarte los datos de transferencia bancaria.</p>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Resumen */}
        <div>
          <Card className="border-slate-200 shadow-lg sticky top-24">
            <CardHeader className="bg-slate-50 border-b border-slate-100">
              <CardTitle>Resumen del Pedido</CardTitle>
            </CardHeader>
            <CardContent className="py-6 space-y-6">
              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                {cart.items.map((item) => (
                  <div key={item.variant.id} className="flex justify-between items-start">
                    <div className="flex gap-3">
                      <div className="h-16 w-16 bg-slate-100 rounded-md flex items-center justify-center shrink-0">
                        {/* Placeholder imagen pequeña */}
                        <span className="text-xs font-bold text-slate-400">{item.product.name.substring(0,2)}</span>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{item.product.name}</p>
                        <p className="text-sm text-slate-500">{item.variant.name} x {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-semibold text-slate-900">
                      {formatPrice(item.variant.price * item.quantity)}
                    </p>
                  </div>
                ))}
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span>{formatPrice(cart.getTotalPrice())}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Envío</span>
                  <span className="text-emerald-600 font-medium">Por Coordinar</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-slate-900 pt-2 border-t border-slate-100 mt-2">
                  <span>Total</span>
                  <span>{formatPrice(cart.getTotalPrice())}</span>
                </div>
                <p className="text-xs text-slate-400 text-right">* Precios netos + IVA</p>
              </div>
            </CardContent>
            <CardFooter className="p-6 bg-slate-50 border-t border-slate-100">
              <Button 
                className="w-full bg-emerald-600 hover:bg-emerald-700 h-12 text-lg shadow-emerald-500/20 shadow-lg"
                onClick={handleWhatsAppOrder}
                disabled={!formData.nombre || !formData.telefono}
              >
                <Send className="mr-2 h-5 w-5" />
                Enviar Pedido por WhatsApp
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
