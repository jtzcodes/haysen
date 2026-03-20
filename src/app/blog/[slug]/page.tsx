import type { Metadata } from "next"
import { getPostData, getSortedPostsData } from "@/lib/blog"
import { MDXRemote } from "next-mdx-remote/rsc"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, BookOpen, Container, Scale, LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostData(slug)
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      ...(post.image && { images: [post.image] }),
    },
  }
}

const icons: Record<string, LucideIcon> = {
  BookOpen,
  Container,
  Scale
}

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostData(slug)
  const Icon = post.icon && icons[post.icon] ? icons[post.icon] : BookOpen

  return (
    <article className="min-h-screen bg-white">
      {/* Header del Artículo */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        {/* Fondo con Icono Gigante */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-5">
          <Icon className="w-96 h-96 text-white" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/40 via-slate-900/60 to-slate-900 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <Link href="/blog" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al Blog
          </Link>

          <Breadcrumbs variant="transparent" className="justify-start mb-4" />
          
          <div className="space-y-6">
            <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20">
              {post.category}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="grid lg:grid-cols-[1fr_250px] gap-12">
          <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-emerald-600 prose-img:rounded-xl">
            <MDXRemote source={post.content} />
          </div>

          {/* Sidebar (CTA) */}
          <aside className="hidden lg:block space-y-8 sticky top-24 h-fit">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-2">¿Necesitas ayuda?</h3>
              <p className="text-sm text-slate-600 mb-4">
                Nuestros expertos pueden asesorarte gratis.
              </p>
              <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
                <Link href="/contacto">Contáctanos</Link>
              </Button>
            </div>
            
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-2">Compartir</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  )
}
