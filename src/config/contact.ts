// -----------------------------------------------------------------------------
// CONFIGURACIÓN DE CONTACTO - HAYSEN GROUP
// -----------------------------------------------------------------------------
// Aquí puedes modificar fácilmente los datos de contacto que aparecen en todo el sitio web.
// Cualquier cambio aquí se reflejará automáticamente en el encabezado, pie de página y botones.

export const contactConfig = {
  // Teléfono principal (Aparece en el encabezado y pie de página)
  phone: {
    display: "+56 9 1234 5678", // Lo que ve el cliente
    link: "56912345678",        // Número para llamar (sin espacios ni símbolos)
  },

  // WhatsApp (Para el botón flotante y enlaces directos)
  whatsapp: {
    display: "+56 9 1234 5678", // Lo que ve el cliente
    number: "56912345678",      // Número real para el enlace de WhatsApp
    message: "Hola, me gustaría cotizar silica gel.", // Mensaje predeterminado
  },

  // Correo Electrónico
  email: "contactooo@haysengroup.cl",

  // Dirección Física
  address: "Santiago, Chile",

  // Redes Sociales
  social: {
    instagram: "https://instagram.com/haysengroup",
    facebook: "https://facebook.com/haysengroup",
    linkedin: "https://linkedin.com/company/haysengroup",
  },
  
  // Horarios de Atención (Opcional, por si se requiere mostrar en el futuro)
  hours: {
    weekdays: "Lunes a Viernes: 09:00 - 18:00",
    weekend: "Sábado y Domingo: Cerrado",
  }
}
