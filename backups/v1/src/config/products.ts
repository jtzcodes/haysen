export type ProductVariant = {
  id: string
  name: string
  price: number
  stock: boolean
  unit: string // "kg", "pack", "saco"
  weight: number // en kg
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
    id: "silica-gel-azul",
    name: "Silica Gel Azul con Indicador",
    slug: "silica-gel-azul",
    description: "Silica Gel Azul que cambia de color a rosado cuando se satura de humedad. Ideal para transformadores, electrónica y procesos industriales donde se requiere monitoreo visual.",
    shortDescription: "Desecante con indicador de saturación (Azul a Rosado).",
    image: "/images/products/silica-azul.jpg",
    category: "Silica Gel",
    features: [
      "Indicador visual de saturación",
      "Alta capacidad de absorción",
      "Regenerable",
      "Libre de cloruro de cobalto (según norma)", // A verificar
    ],
    applications: [
      "Transformadores eléctricos",
      "Equipos electrónicos",
      "Tableros de control",
      "Laboratorios",
    ],
    variants: [
      { id: "sga-1kg", name: "Formato 1 Kg", price: 15000, stock: true, unit: "kg", weight: 1 },
      { id: "sga-5kg", name: "Pack 5 Kg", price: 65000, stock: true, unit: "pack", weight: 5 },
      { id: "sga-25kg", name: "Saco 25 Kg", price: 250000, stock: true, unit: "saco", weight: 25 },
    ],
  },
  {
    id: "silica-gel-naranja",
    name: "Silica Gel Naranja (Eco-Friendly)",
    slug: "silica-gel-naranja",
    description: "Silica Gel Naranja libre de cobalto, amigable con el medio ambiente. Cambia a verde oscuro cuando está saturada. Apta para industria farmacéutica y alimentaria.",
    shortDescription: "Desecante ecológico con indicador (Naranja a Verde).",
    image: "/images/products/silica-naranja.jpg",
    category: "Silica Gel",
    features: [
      "Libre de metales pesados",
      "No tóxico",
      "Indicador de cambio de color",
      "Aprobado para uso general",
    ],
    applications: [
      "Industria farmacéutica",
      "Alimentos",
      "Cámaras fotográficas",
      "Museos y archivos",
    ],
    variants: [
      { id: "sgn-1kg", name: "Formato 1 Kg", price: 18000, stock: true, unit: "kg", weight: 1 },
      { id: "sgn-5kg", name: "Pack 5 Kg", price: 75000, stock: true, unit: "pack", weight: 5 },
    ],
  },
  {
    id: "silica-gel-blanca",
    name: "Silica Gel Blanca",
    slug: "silica-gel-blanca",
    description: "Silica Gel estándar sin indicador de color. La opción más económica y versátil para protección general contra la humedad.",
    shortDescription: "Desecante estándar de alta pureza.",
    image: "/images/products/silica-blanca.jpg",
    category: "Silica Gel",
    features: [
      "Alta pureza",
      "Económico",
      "No mancha",
      "Gran capacidad de adsorción",
    ],
    applications: [
      "Textiles y calzado",
      "Embalaje de exportación",
      "Maquinaria",
      "Hogar",
    ],
    variants: [
      { id: "sgb-1kg", name: "Formato 1 Kg", price: 12000, stock: true, unit: "kg", weight: 1 },
      { id: "sgb-25kg", name: "Saco 25 Kg", price: 180000, stock: true, unit: "saco", weight: 25 },
    ],
  },
]
