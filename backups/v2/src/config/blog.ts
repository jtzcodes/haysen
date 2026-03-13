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
    title: "¿Cómo calcular la cantidad exacta de Silica Gel para contenedores?",
    excerpt: "Guía técnica para exportadores: evite la 'lluvia de contenedor' y proteja su carga con el cálculo preciso de desecantes según la norma DIN 55473.",
    date: "12 Ene, 2026",
    readTime: "5 min",
    category: "Logística y Exportación",
    slug: "calculo-silica-gel-contenedores",
    image: "/images/blog/container-shipping.jpg"
  },
  {
    id: "2",
    title: "Silica Gel Azul vs Naranja: ¿Cuál es la diferencia real?",
    excerpt: "Análisis comparativo de toxicidad, normativas europeas (REACH) y aplicaciones recomendadas para cada tipo de indicador de humedad.",
    date: "08 Ene, 2026",
    readTime: "4 min",
    category: "Guía Técnica",
    slug: "diferencia-silica-azul-naranja",
    image: "/images/blog/silica-comparison.jpg"
  },
  {
    id: "3",
    title: "Mantenimiento de Transformadores: Control de Humedad",
    excerpt: "Estrategias para extender la vida útil del aceite dieléctrico mediante el uso de respiradores de Silica Gel de alta eficiencia.",
    date: "03 Ene, 2026",
    readTime: "6 min",
    category: "Mantenimiento Industrial",
    slug: "mantenimiento-transformadores-humedad",
    image: "/images/blog/transformer-maintenance.jpg"
  }
]
