import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Facebook, Instagram, Mail, MapPin, Phone, ShieldCheck } from "lucide-react"
import { Logo } from "@/components/ui/logo"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 border-t border-emerald-900/30">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Columna 1: Marca */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Logo variant="light" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Líderes en importación y distribución de Silica Gel y desecantes industriales en Chile. 
              Comprometidos con la calidad y el medio ambiente.
            </p>
            <div className="flex gap-4 pt-2">
              <Link href={siteConfig.links.facebook} className="bg-white/5 p-2 rounded-full hover:bg-emerald-600 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href={siteConfig.links.instagram} className="bg-white/5 p-2 rounded-full hover:bg-emerald-600 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Columna 2: Enlaces */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Navegación</h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-1 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Productos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Productos Destacados</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/productos" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Silica Gel Azul (Indicador)
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Silica Gel Naranja (Eco)
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Silica Gel Blanca
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Alúmina Activada
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-slate-400">{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-500 shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="text-slate-400 hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-500 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-slate-400 hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra Inferior */}
      <div className="border-t border-slate-800 bg-slate-950/50">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-1">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>Sitio Seguro SSL</span>
            </div>
            <span className="w-px h-3 bg-slate-700"></span>
            <span>Venta Mayorista y Minorista</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
