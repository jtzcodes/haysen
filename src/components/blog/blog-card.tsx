import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, BookOpen, Container, Scale, LucideIcon } from "lucide-react"
import { BlogPost } from "@/lib/blog"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface BlogCardProps {
  post: BlogPost
}

const icons: Record<string, LucideIcon> = {
  BookOpen,
  Container,
  Scale
}

export function BlogCard({ post }: BlogCardProps) {
  const Icon = post.icon && icons[post.icon] ? icons[post.icon] : BookOpen
  
  const colorClasses = {
    emerald: "bg-emerald-100 text-emerald-600 border-emerald-200",
    blue: "bg-blue-100 text-blue-600 border-blue-200",
    amber: "bg-amber-100 text-amber-600 border-amber-200",
  }[post.color || "emerald"]

  return (
    <Card className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow border-slate-200 group">
      <div className={cn("h-48 flex items-center justify-center relative overflow-hidden bg-slate-50 border-b border-slate-100")}>
        {post.image ? (
          <>
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </>
        ) : (
          <div className={cn("h-24 w-24 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500", colorClasses)}>
            <Icon className="h-12 w-12" />
          </div>
        )}
        
        <div className="absolute top-4 left-4 z-10">
          <Badge className="bg-white/90 text-slate-700 hover:bg-white border-slate-200 shadow-sm backdrop-blur-sm">
            {post.category}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-3 space-y-3">
        <div className="flex items-center gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{post.readingTime}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold leading-tight text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2">
          <Link href={`/blog/${post.slug}`} className="hover:underline decoration-emerald-500/30">
            {post.title}
          </Link>
        </h3>
      </CardHeader>
      
      <CardContent className="flex-1 pb-6">
        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Link 
          href={`/blog/${post.slug}`}
          className="text-sm font-semibold text-emerald-600 flex items-center gap-1 hover:gap-2 transition-all"
        >
          Leer artículo <ArrowRight className="h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}
