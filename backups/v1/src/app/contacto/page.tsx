"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail, MapPin, Phone, Send, Clock, MessageSquare } from "lucide-react"
import { siteConfig } from "@/config/site"
import { useState } from "react"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  })

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `
*CONSULTA WEB - ${siteConfig.name}*
--------------------------------
*Nombre:* ${formData.nombre}
*Email:* ${formData.email}
*Mensaje:* 
${formData.mensaje}
`.trim()

    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const faqs = [
    {
      question: "¿Realizan envíos a todo Chile?",
      answer: "Sí, despachamos a todas las regiones del país a través de Starken, Chilexpress o transportes privados para grandes volúmenes. Los tiempos de entrega varían entre 24 a 48 horas hábiles."
    },
    {
      question: "¿Venden a particulares o solo empresas?",
      answer: "Atendemos a ambos. Puede comprar desde 1 Kilo para uso personal hasta toneladas para uso industrial. Entregamos factura o boleta según requiera."
    },
    {
      question: "¿Cuál es la diferencia entre Silica Gel Azul y Naranja?",
      answer: "Ambas cumplen la misma función de absorber humedad. La diferencia es el indicador de saturación: la Azul cambia a Rosado (contiene cobalto, no apta para alimentos directos) y la Naranja cambia a Verde (libre de cobalto, eco-friendly y más segura)."
    },
    {
      question: "¿Ofrecen precios mayoristas?",
      answer: "Sí, tenemos escalas de precios especiales para compras por sacos (25kg) o por volumen mensual. Contáctenos directamente para una cotización formal."
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Header Unificado */}
      <section className="relative py-20 md:py-28 bg-slate-900 overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/40 via-slate-900/60 to-slate-900"></div>
        <div className="container relative z-10 mx-auto px-4">
          <Breadcrumbs variant="transparent" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Hablemos de su <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Proyecto</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Estamos aquí para asesorarlo técnicamente y ofrecerle la mejor solución en control de humedad.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Columna Izquierda: Info + FAQ */}
          <div className="space-y-12">
            {/* Tarjetas de Contacto */}
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="bg-emerald-50 border-emerald-100 shadow-sm">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                  <div className="h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-slate-900">Venta Telefónica</h3>
                  <p className="text-sm text-slate-600">Lunes a Viernes<br/>9:00 - 18:00 hrs</p>
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-emerald-700 font-semibold hover:underline">
                    {siteConfig.contact.phone}
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-100 shadow-sm">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-slate-900">Correo Electrónico</h3>
                  <p className="text-sm text-slate-600">Cotizaciones y<br/>Facturación</p>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-blue-700 font-semibold hover:underline text-sm">
                    {siteConfig.contact.email}
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Ubicación */}
            <div className="flex gap-4 items-start p-6 bg-slate-50 rounded-xl border border-slate-100">
              <MapPin className="h-6 w-6 text-slate-400 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Centro de Distribución</h3>
                <p className="text-slate-600 mb-2">{siteConfig.contact.address}</p>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <Clock className="h-3 w-3" /> Retiro de productos previa coordinación.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Preguntas Frecuentes</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-slate-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <div className="lg:pl-8">
            <Card className="shadow-lg border-slate-200 sticky top-24">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Envíenos un Mensaje</h2>
                  <p className="text-slate-500 text-sm">
                    Complete el formulario y le responderemos vía WhatsApp para una atención más rápida.
                  </p>
                </div>

                <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre Completo</Label>
                    <Input 
                      id="nombre" 
                      placeholder="Ej: Roberto Díaz" 
                      required 
                      value={formData.nombre}
                      onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="contacto@empresa.com" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensaje">¿En qué podemos ayudarle?</Label>
                    <Textarea 
                      id="mensaje" 
                      placeholder="Hola, necesito cotizar 50 kilos de Silica Gel Naranja..." 
                      className="min-h-[150px]"
                      required 
                      value={formData.mensaje}
                      onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 h-12 text-lg">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Enviar WhatsApp
                  </Button>

                  <p className="text-xs text-center text-slate-400 mt-4">
                    Al enviar este formulario acepta ser contactado por nuestro equipo comercial.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  )
}
