"use client"

import { useState, useEffect } from "react"
import { useCart } from "@/store/use-cart"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Trash2, Send, ArrowLeft, ShieldCheck, FileText, Package } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/config/site"

export default function CheckoutPage() {
  const cart = useCart()
  const [isMounted, setIsMounted] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    cargo: "",
    email: "",
    telefono: "",
    mensaje: "",
  })

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true)
  }, [])

  const [isLoading, setIsLoading] = useState(false)

  if (!isMounted) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleQuoteRequest = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          items: cart.items,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar la solicitud')
      }

      // Éxito
      // alert('¡Solicitud enviada con éxito! Revisa tu correo (incluyendo SPAM).')
      cart.clearCart() // Usar clearCart en lugar de removeAll
      window.location.href = '/checkout/success' // Redirigir a página de éxito

    } catch (error) {
      console.error('Error:', error)
      alert('Hubo un error al enviar la solicitud. Por favor intenta nuevamente.')
    } finally {
      setIsLoading(false)
    }
  }

  if (cart.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center space-y-6">
        <div className="bg-slate-50 p-6 rounded-full border border-slate-100">
          <FileText className="h-12 w-12 text-slate-300" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Solicitud vacía</h1>
        <p className="text-slate-500 max-w-md">
          No hay productos seleccionados para cotizar.
        </p>
        <Button asChild variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50">
          <Link href="/productos">Ver Catálogo</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Solicitar Cotización Formal</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Complete el formulario con los datos de su empresa. Un ejecutivo comercial procesará su solicitud y le enviará una cotización formal a su correo.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12">
        {/* Columna Izquierda: Formulario (7 columnas) */}
        <div className="lg:col-span-7 space-y-8">
          <Card className="border-slate-200 shadow-sm overflow-hidden">
            <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm">1</div>
                <CardTitle className="text-lg">Información de Contacto y Empresa</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre Completo *</Label>
                  <Input 
                    id="nombre" 
                    name="nombre" 
                    placeholder="Ej: Juan Pérez" 
                    required 
                    value={formData.nombre}
                    onChange={handleChange}
                    className="bg-slate-50/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cargo">Cargo (Opcional)</Label>
                  <Input 
                    id="cargo" 
                    name="cargo" 
                    placeholder="Ej: Jefe de Adquisiciones" 
                    value={formData.cargo}
                    onChange={handleChange}
                    className="bg-slate-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="empresa">Empresa (Opcional)</Label>
                  <Input 
                    id="empresa" 
                    name="empresa" 
                    placeholder="Ej: Minera X SpA" 
                    value={formData.empresa}
                    onChange={handleChange}
                    className="bg-slate-50/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono / Celular *</Label>
                  <Input 
                    id="telefono" 
                    name="telefono" 
                    placeholder="+56 9 1234 5678" 
                    required 
                    value={formData.telefono}
                    onChange={handleChange}
                    className="bg-slate-50/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico *</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="nombre@empresa.com" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-slate-50/50"
                />
                <p className="text-[11px] text-slate-400">La cotización formal será enviada a este correo.</p>
              </div>

              <div className="space-y-2 pt-2">
                <Label htmlFor="mensaje">Mensaje Adicional o Requerimientos Especiales</Label>
                <Textarea 
                  id="mensaje" 
                  name="mensaje" 
                  placeholder="Ej: Necesito despacho a Antofagasta, o requiero ficha técnica específica..." 
                  className="min-h-[100px] bg-slate-50/50 resize-none"
                  value={formData.mensaje}
                  onChange={handleChange}
                />
              </div>
            </CardContent>
          </Card>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex gap-3 items-start">
            <ShieldCheck className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
            <div className="text-sm text-blue-800">
              <p className="font-semibold mb-1">Privacidad Garantizada</p>
              <p>Sus datos solo serán utilizados para generar la cotización solicitada. No compartimos información con terceros.</p>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Resumen (5 columnas) */}
        <div className="lg:col-span-5">
          <Card className="border-slate-200 shadow-lg sticky top-24 overflow-hidden">
            <CardHeader className="bg-slate-900 text-white py-4 px-6 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs">2</div>
                <CardTitle className="text-base font-medium">Resumen de Solicitud</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="bg-slate-50 p-4 text-xs font-medium text-slate-500 uppercase tracking-wider flex justify-between border-b border-slate-100">
                <span>Producto</span>
                <span>Cantidad</span>
              </div>
              
              <div className="max-h-[400px] overflow-y-auto divide-y divide-slate-100">
                {cart.items.map((item) => (
                  <div key={item.variant.id} className="p-4 flex gap-4 hover:bg-slate-50/50 transition-colors">
                    <div className="h-12 w-12 bg-white border border-slate-100 rounded-md flex items-center justify-center shrink-0 shadow-sm text-slate-300">
                      <Package className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-slate-900 text-sm truncate" title={item.product.name}>
                        {item.product.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10">
                          {item.variant.name}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center font-bold text-slate-900 text-sm">
                      x{item.quantity}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-4">
                <div className="text-xs text-slate-500 text-center italic">
                  * Los precios y condiciones de despacho serán detallados en la cotización formal enviada a su correo.
                </div>
                
                <Button 
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-12 text-base font-bold shadow-lg shadow-emerald-200 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleQuoteRequest}
                  disabled={!formData.nombre || !formData.email || !formData.telefono || isLoading}
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isLoading ? 'ENVIANDO...' : 'ENVIAR SOLICITUD'}
                </Button>
                
                <div className="text-center">
                  <Link href="/productos" className="text-xs text-slate-400 hover:text-emerald-600 hover:underline">
                    ¿Olvidó agregar algo? Volver al catálogo
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
