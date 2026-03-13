export const siteConfig = {
  name: "Haysen Group Chile",
  description: "Líderes en venta y distribución de Silica Gel y desecantes industriales en Chile. Soluciones integrales para control de humedad.",
  url: "https://haysengroup.cl", // Placeholder
  ogImage: "https://haysengroup.cl/og.jpg",
  contact: {
    phone: "+56 9 1234 5678", // Placeholder
    whatsapp: "56912345678", // Placeholder
    email: "contacto@haysengroup.cl",
    address: "Santiago, Chile",
  },
  links: {
    facebook: "https://facebook.com/haysengroup",
    instagram: "https://instagram.com/haysengroup",
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
