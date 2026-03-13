"use client"

import { siteConfig } from "@/config/site"
import { MessageCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Mostrar el botón después de un pequeño delay para no molestar al cargar
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    "Hola Haysen Group, estoy viendo su sitio web y me gustaría hacer una consulta."
  )}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] p-4 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-[#20bd5a]",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6 fill-current" />
      <span className="hidden pr-1 font-bold md:inline-block">Chat Ventas</span>
      
      {/* Indicador de "En línea" */}
      <span className="absolute -right-1 -top-1 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
      </span>
    </a>
  )
}
