import { Metadata } from "next"
import { ContactView } from "@/components/contact/contact-view"

export const metadata: Metadata = {
  title: "Contacto | Solicite su Cotización",
  description: "Contáctenos para cotizar Silica Gel y desecantes por volumen. Atención personalizada para empresas. Despacho a todo Chile. Tel: +56 9 XXXX XXXX.",
}

export default function ContactoPage() {
  return <ContactView />
}
