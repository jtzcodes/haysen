import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { recentPosts } from "@/config/blog"

export function BlogSection() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Blog Industrial
            </h2>
            <p className="text-slate-600 text-lg">
              Artículos técnicos, guías de uso y novedades sobre el control de humedad en la industria.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex gap-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300">
            Ver todos los artículos
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <Card className="h-full overflow-hidden border-slate-200 hover:border-emerald-500/30 hover:shadow-lg transition-all duration-300 bg-white group-hover:-translate-y-1">
                {/* Imagen Placeholder (En un caso real usaría Image de Next.js) */}
                <div className="h-48 bg-slate-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-slate-200 animate-pulse group-hover:bg-slate-300 transition-colors" />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-emerald-700 hover:bg-white backdrop-blur shadow-sm">
                    {post.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-emerald-700 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-emerald-600 font-medium text-sm mt-auto group-hover:translate-x-1 transition-transform">
                    Leer artículo
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Button variant="outline" className="w-full gap-2 border-emerald-200 text-emerald-700">
            Ver todos los artículos
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
