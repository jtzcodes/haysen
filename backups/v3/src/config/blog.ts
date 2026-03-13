export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  slug: string
  image: string
}

export const recentPosts: BlogPost[] = [
  {
    id: "1",
    title: "Container Rain: ¿Por qué 'llueve' dentro de tu contenedor?",
    excerpt: "Descubre por qué tus productos llegan húmedos tras el transporte marítimo y cómo el control de humedad pasivo puede salvar tu exportación.",
    date: "22 Mar, 2024",
    readTime: "5 min",
    category: "Logística",
    slug: "container-rain-solucion",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Silica Gel Azul vs Naranja: ¿Cuál es la diferencia real?",
    excerpt: "Análisis comparativo de toxicidad, normativas europeas (REACH) y aplicaciones recomendadas para cada tipo de indicador de humedad.",
    date: "08 Ene, 2026",
    readTime: "4 min",
    category: "Guía Técnica",
    slug: "diferencia-silica-azul-naranja",
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=2070&auto=format&fit=crop" // Laboratorio / Química (Abstracto)
  },
  {
    id: "3",
    title: "Mantenimiento de Transformadores: Control de Humedad",
    excerpt: "Estrategias para extender la vida útil del aceite dieléctrico mediante el uso de respiradores de Silica Gel de alta eficiencia.",
    date: "03 Ene, 2026",
    readTime: "6 min",
    category: "Mantenimiento Industrial",
    slug: "mantenimiento-transformadores-humedad",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop" // Industria / Electricidad
  }
]
