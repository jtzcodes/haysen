"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail, MapPin, Phone, Send, Clock, MessageSquare, Building2, Smartphone, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { siteConfig } from "@/config/site"
import { useState } from "react"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"

export function ContactView() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
    email: "",
    mensaje: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Error al enviar el mensaje")
      }

      setIsSuccess(true)
      setFormData({
        nombre: "",
        empresa: "",
        telefono: "",
        email: "",
        mensaje: ""
      })
    } catch (error) {
      console.error(error)
      setErrorMessage("Hubo un problema al enviar su mensaje. Por favor intente nuevamente o contáctenos por WhatsApp.")
    } finally {
      setIsSubmitting(false)
    }
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
              <Card className="bg-emerald-50 border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
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

              <Card className="bg-blue-50 border-blue-100 shadow-sm hover:shadow-md transition-shadow">
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

            {/* Ubicación con Mapa */}
            <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
              <div className="flex gap-4 items-start p-6 border-b border-slate-200">
                <MapPin className="h-6 w-6 text-slate-400 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Centro de Distribución</h3>
                  <p className="text-slate-600 mb-2">{siteConfig.contact.address}</p>
                  <p className="text-xs text-slate-500 flex items-center gap-1">
                    <Clock className="h-3 w-3" /> Retiro de productos previa coordinación.
                  </p>
                </div>
              </div>
              {/* Mapa Embebido */}
              <div className="w-full h-64 bg-slate-200 grayscale hover:grayscale-0 transition-all duration-500">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212959.88248386415!2d-70.76985002660754!3d-33.47247276527582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5410425af2f%3A0x8475d53c400f0931!2sSantiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1705500000000!5m2!1ses-419!2scl" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* FAQ */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Preguntas Frecuentes</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium text-slate-700">{faq.question}</AccordionTrigger>
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
            <Card className="shadow-xl border-slate-200 sticky top-24 bg-white">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Solicitar Cotización</h2>
                  <p className="text-slate-500 text-sm">
                    Complete el formulario para recibir una atención prioritaria de nuestro equipo comercial.
                  </p>
                </div>

                {isSuccess ? (
                  <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">¡Mensaje Recibido!</h3>
                    <p className="text-slate-600">
                      Hemos recibido su consulta correctamente. Nuestro equipo comercial le responderá a la brevedad posible.
                    </p>
                    <Button 
                      className="mt-4 bg-slate-900 text-white"
                      onClick={() => setIsSuccess(false)}
                    >
                      Enviar otro mensaje
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errorMessage && (
                      <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        {errorMessage}
                      </div>
                    )}
                    
                    {/* Fila: Nombre y Empresa */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nombre">Nombre</Label>
                        <Input 
                          id="nombre" 
                          placeholder="Juan Pérez" 
                          required 
                          value={formData.nombre}
                          onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="empresa">Empresa <span className="text-slate-400 font-normal text-xs">(Opcional)</span></Label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                          <Input 
                            id="empresa" 
                            placeholder="Mi Empresa SpA" 
                            className="pl-9"
                            value={formData.empresa}
                            onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Fila: Email y Teléfono */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Corporativo</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="contacto@empresa.com" 
                          required 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefono">Teléfono / WhatsApp</Label>
                        <div className="relative">
                          <Smartphone className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                          <Input 
                            id="telefono" 
                            type="tel" 
                            placeholder="+56 9..." 
                            className="pl-9"
                            required 
                            value={formData.telefono}
                            onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensaje">Detalle su requerimiento</Label>
                      <Textarea 
                        id="mensaje" 
                        placeholder="Hola, necesito cotizar 50 kilos de Silica Gel Naranja para entrega en Antofagasta..." 
                        className="min-h-[120px] resize-none"
                        required 
                        value={formData.mensaje}
                        onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                        disabled={isSubmitting}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-emerald-600 hover:bg-emerald-700 h-12 text-lg shadow-emerald-200 shadow-lg transition-all hover:scale-[1.01]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Enviar Mensaje
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-center text-slate-400 mt-4">
                      Sus datos están seguros. Responderemos en menos de 2 horas hábiles.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  )
}
