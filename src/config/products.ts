export type ProductVariant = {
  id: string
  name: string
  price: number // Aunque no se muestre, mantenemos el campo para estructura interna
  stock: boolean
  unit: string // "kg", "pack", "saco"
  weight: number // en kg
  image?: string // Imagen específica de la variante (opcional)
}

export type Product = {
  id: string
  name: string
  slug: string
  description: string
  shortDescription: string
  image: string
  category: string
  variants: ProductVariant[]
  features: string[]
  applications: string[]
}

export const products: Product[] = [
  {
    id: "silica-gel-granel",
    name: "Silica Gel a Granel (Industrial)",
    slug: "silica-gel-granel",
    description: "Silica Gel de alta pureza en formato a granel. Disponible en variedades Blanca (estándar) y Naranja (con indicador de saturación libre de cobalto). Ideal para grandes volúmenes y procesos industriales.",
    shortDescription: "Formatos industriales de 25kg en variedad Blanca y Naranja.",
    image: "/productos/silica-gel-orange-3-5mm-25kg.jpeg",
    category: "Industrial",
    features: [
      "Alta capacidad de absorción",
      "Grano 3-5mm estándar",
      "Formatos económicos",
      "Ideal para industria y transporte",
    ],
    applications: [
      "Secado de aire comprimido",
      "Transformadores eléctricos",
      "Transporte marítimo",
      "Almacenamiento industrial",
    ],
    variants: [
      { id: "sg-blanca-25kg", name: "Blanca 3-5mm (Pack 25kg)", price: 0, stock: true, unit: "pack", weight: 25, image: "/productos/silica-gel-white-3-5mm-25kg.jpeg" },
      { id: "sg-naranja-25kg", name: "Naranja 3-5mm (Pack 25kg)", price: 0, stock: true, unit: "pack", weight: 25, image: "/productos/silica-gel-orange-3-5mm-25kg.jpeg" },
    ],
  },
  {
    id: "silica-gel-sachets",
    name: "Silica Gel Naranja en Sachets",
    slug: "silica-gel-sachets",
    description: "Bolsitas individuales de Silica Gel Naranja (con indicador ecológico). Perfectas para proteger productos terminados, electrónica, cámaras y cajas de almacenamiento. Se venden en cajas/packs mayoristas de 20kg.",
    shortDescription: "Sachets individuales con indicador. Venta por caja de 20kg.",
    image: "/productos/silica-gel-naranja-35mm-100g-sachets-20kg.jpg", // Imagen real
    category: "Sachets",
    features: [
      "Indicador de cambio de color (Naranja -> Verde)",
      "Libre de metales pesados (Eco-Friendly)",
      "Bolsitas de alta resistencia",
      "Venta mayorista (Caja 20kg)",
    ],
    applications: [
      "Electrónica y cámaras",
      "Cajas de zapatos y ropa",
      "Medicamentos y alimentos",
      "Archivos y documentos",
    ],
    variants: [
      { id: "sachet-10g", name: "Sachet 10g (Caja 20kg)", price: 0, stock: true, unit: "caja", weight: 20 },
      { id: "sachet-100g", name: "Sachet 100g (Caja 20kg)", price: 0, stock: true, unit: "caja", weight: 20 },
      { id: "sachet-250g", name: "Sachet 250g (Caja 20kg)", price: 0, stock: true, unit: "caja", weight: 20 },
      { id: "sachet-500g", name: "Sachet 500g (Caja 20kg)", price: 0, stock: true, unit: "caja", weight: 20 },
    ],
  },
  {
    id: "silica-gel-sachet-micro",
    name: "Silica Gel Blanca en Sachet Micro",
    slug: "silica-gel-sachet-micro",
    description: "Pequeños sachets de 1.5g de Silica Gel Blanca. Diseñados específicamente para espacios reducidos, frascos de medicamentos, pruebas de diagnóstico y joyería pequeña.",
    shortDescription: "Micro sachets de 1.5g para espacios reducidos.",
    image: "/productos/silica-gel-blanca-35mm-1&5g-sachets-20kg.jpg", // Imagen real
    category: "Sachets",
    features: [
      "Tamaño compacto (1.5g)",
      "Silica blanca de alta pureza",
      "Ideal para farmacéutica",
      "Venta por caja de 20kg",
    ],
    applications: [
      "Frascos de medicamentos",
      "Joyería",
      "Pruebas de diagnóstico",
      "Componentes electrónicos pequeños",
    ],
    variants: [
      { id: "sachet-1-5g", name: "Sachet 1.5g (Caja 20kg)", price: 0, stock: true, unit: "caja", weight: 20 },
    ],
  },
  {
    id: "alumina-activada",
    name: "Alúmina Activada",
    slug: "alumina-activada",
    description: "Desecante industrial de alta resistencia mecánica y térmica. Ideal para secado de gases, aire comprimido y filtrado de aceites. No se desintegra con el agua líquida.",
    shortDescription: "Desecante industrial para gases y aire comprimido.",
    image: "/productos/activated-alumina-3-5mm-25kg.jpeg",
    category: "Industrial",
    features: [
      "Alta resistencia al choque térmico",
      "No se ablanda con agua líquida",
      "Alta superficie específica",
      "Grano 3-5mm",
    ],
    applications: [
      "Secadores de aire comprimido",
      "Purificación de gases",
      "Filtrado de aceites",
      "Tratamiento de aguas",
    ],
    variants: [
      { id: "alumina-25kg", name: "Granel 3-5mm (Pack 25kg)", price: 0, stock: true, unit: "pack", weight: 25 },
    ],
  },
]
