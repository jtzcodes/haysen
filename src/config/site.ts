import { contactConfig } from "@/config/contact"

export const siteConfig = {
  name: "Haysen Group Chile",
  description: "Líderes en Silica Gel, Alúmina Activada y Desecantes Industriales en Chile. Venta a granel y sachets para control de humedad en transporte e industria.",
  url: "https://haysengroup.cl", // Placeholder
  ogImage: "https://haysengroup.cl/og.jpg",
  keywords: [
    "Silica Gel Chile",
    "Alúmina Activada",
    "Desecantes Industriales",
    "Silica Gel Naranja",
    "Sachets Silica Gel",
    "Control de Humedad",
    "Venta Silica Gel Granel"
  ],
  contact: {
    phone: contactConfig.phone.display,
    whatsapp: contactConfig.whatsapp.number,
    email: contactConfig.email,
    address: contactConfig.address,
  },
  links: {
    facebook: contactConfig.social.facebook,
    instagram: contactConfig.social.instagram,
  },

  mainNav: [
    {
      title: "Inicio",
      href: "/",
    },
    {
      title: "Productos",
      href: "/productos",
    },
    {
      title: "Nosotros",
      href: "/nosotros",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contacto",
      href: "/contacto",
    },
  ],
}

export type SiteConfig = typeof siteConfig
