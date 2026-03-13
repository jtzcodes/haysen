"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"
import { Fragment } from "react"

interface BreadcrumbsProps {
  variant?: "default" | "transparent"
  className?: string
}

export function Breadcrumbs({ variant = "default", className }: BreadcrumbsProps) {
  const pathname = usePathname()
  
  // No mostrar en el home
  if (pathname === "/") return null

  const segments = pathname.split("/").filter(Boolean)

  const breadcrumbItems = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`
    
    // Formatear texto: "que-es-silica" -> "Que Es Silica"
    const label = segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase())

    // Truncar si es muy largo
    const displayLabel = label.length > 30 ? `${label.substring(0, 30)}...` : label

    return {
      href,
      label: displayLabel,
      isLast: index === segments.length - 1
    }
  })

  if (variant === "transparent") {
    return (
      <nav aria-label="Breadcrumb" className={cn("flex justify-center mb-6", className)}>
        <ol className="flex items-center space-x-2 text-sm text-white/60">
          <li>
            <Link 
              href="/" 
              className="flex items-center hover:text-white transition-colors"
              title="Inicio"
            >
              <Home className="h-4 w-4" />
            </Link>
          </li>
          
          {breadcrumbItems.map((item, index) => (
            <Fragment key={item.href}>
              <li>
                <ChevronRight className="h-3.5 w-3.5 text-white/40" />
              </li>
              <li>
                {item.isLast ? (
                  <span className="font-medium text-white" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link 
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            </Fragment>
          ))}
        </ol>
      </nav>
    )
  }

  return (
    <nav aria-label="Breadcrumb" className={cn("w-full bg-slate-50/50 border-b border-slate-100 backdrop-blur-sm", className)}>
      <div className="container mx-auto px-4 py-3">
        <ol className="flex items-center space-x-2 text-sm text-slate-500">
          <li>
            <Link 
              href="/" 
              className="flex items-center hover:text-emerald-600 transition-colors"
              title="Inicio"
            >
              <Home className="h-4 w-4" />
            </Link>
          </li>
          
          {breadcrumbItems.map((item, index) => (
            <Fragment key={item.href}>
              <li>
                <ChevronRight className="h-4 w-4 text-slate-300" />
              </li>
              <li>
                {item.isLast ? (
                  <span className="font-medium text-slate-800" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link 
                    href={item.href}
                    className="hover:text-emerald-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            </Fragment>
          ))}
        </ol>
      </div>
    </nav>
  )
}
