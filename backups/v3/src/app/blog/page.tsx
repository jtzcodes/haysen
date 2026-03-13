import { getSortedPostsData } from "@/lib/blog"
import { BlogCard } from "@/components/blog/blog-card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"

export default function BlogPage() {
  const posts = getSortedPostsData()

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-slate-900 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/40 via-slate-900/60 to-slate-900"></div>
        <div className="container relative z-10 mx-auto px-4">
          <Breadcrumbs variant="transparent" />
          <Badge variant="outline" className="mb-4 text-emerald-400 border-emerald-400/30 bg-emerald-400/10">
            Blog & Recursos
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Conocimiento Experto en <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              Control de Humedad
            </span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Guías técnicas, casos de estudio y consejos prácticos para proteger sus productos y optimizar su logística.
          </p>
        </div>
      </section>

      {/* Grid de Artículos */}
      <section className="py-20 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-slate-500">Próximamente publicaremos nuevos artículos.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
