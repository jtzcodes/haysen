import Link from "next/link"
import { siteConfig } from "@/config/site"
import { 
  Facebook, 
  Instagram, 
  Mail, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Truck, 
  FileCheck, 
  Headphones,
  ArrowRight,
  CreditCard,
  Building2,
  Linkedin
} from "lucide-react"
import { Logo } from "@/components/ui/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-slate-200 font-sans border-t border-slate-900">
      {/* 1. Barra de Valor - Top Bar */}
      <div className="border-b border-slate-900 bg-slate-900/50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-xs font-medium text-slate-400">
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-emerald-500" />
              <span>Despacho a todo Chile (Starken, Pullman, Blue)</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <FileCheck className="h-4 w-4 text-emerald-500" />
                <span>Facturación Electrónica Inmediata</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="h-4 w-4 text-emerald-500" />
                <span>Soporte Técnico Especializado</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Columna 1: Marca y Sobre Nosotros (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <Logo variant="light" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Líderes en importación y distribución de soluciones desecantes industriales en Chile. 
              Abastecemos a la minería, farmacéutica y agroindustria con productos certificados de alta pureza.
            </p>
            <div className="flex gap-3">
              <SocialButton href={siteConfig.links.instagram} icon={Instagram} label="Instagram" />
              <SocialButton href={siteConfig.links.facebook} icon={Facebook} label="Facebook" />
              <SocialButton href="#" icon={Linkedin} label="LinkedIn" />
            </div>
          </div>

          {/* Columna 2: Productos (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-base font-bold text-white tracking-wide">Productos</h4>
            <ul className="space-y-3 text-sm">
              <FooterLink href="/productos/silica-gel-azul">Silica Gel Azul</FooterLink>
              <FooterLink href="/productos/silica-gel-naranja">Silica Gel Naranja</FooterLink>
              <FooterLink href="/productos/silica-gel-blanca">Silica Gel Blanca</FooterLink>
              <FooterLink href="/productos">Alúmina Activada</FooterLink>
              <FooterLink href="/productos">Tamiz Molecular</FooterLink>
            </ul>
          </div>

          {/* Columna 3: Empresa y Cliente (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-base font-bold text-white tracking-wide">Empresa</h4>
            <ul className="space-y-3 text-sm">
              <FooterLink href="/nosotros">Sobre Nosotros</FooterLink>
              <FooterLink href="/contacto">Solicitar Cotización</FooterLink>
              <FooterLink href="/blog">Blog Industrial</FooterLink>
              <FooterLink href="/terminos">Términos y Condiciones</FooterLink>
              <FooterLink href="/privacidad">Política de Privacidad</FooterLink>
            </ul>
          </div>

          {/* Columna 4: Newsletter y Contacto (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
              <h4 className="text-base font-bold text-white mb-2">Suscríbete a novedades</h4>
              <p className="text-xs text-slate-400 mb-4">
                Recibe ofertas técnicas y actualizaciones de stock para tu industria.
              </p>
              <div className="flex gap-2">
                <Input 
                  placeholder="tu@empresa.cl" 
                  className="bg-slate-950 border-slate-800 text-slate-200 focus:border-emerald-500 h-10 text-sm"
                />
                <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white h-10 px-4">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <ContactItem icon={Phone} text={siteConfig.contact.phone} href={`tel:${siteConfig.contact.phone}`} />
              <ContactItem icon={Mail} text={siteConfig.contact.email} href={`mailto:${siteConfig.contact.email}`} />
              <ContactItem icon={MapPin} text={siteConfig.contact.address} />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Bar: Trust & Copyright */}
      <div className="border-t border-slate-900 bg-slate-950">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Copyright */}
            <div className="text-center md:text-left space-y-1">
              <p className="text-xs text-slate-500">
                © {currentYear} {siteConfig.name} SpA. Todos los derechos reservados.
              </p>
              <p className="text-[10px] text-slate-600">
                Desarrollado con estándares industriales.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Simulación visual de métodos de pago/confianza */}
               <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium border border-slate-800 px-2 py-1 rounded bg-slate-900">
                  <CreditCard className="h-3 w-3" />
                  <span>WebPay Plus</span>
               </div>
               <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium border border-slate-800 px-2 py-1 rounded bg-slate-900">
                  <Building2 className="h-3 w-3" />
                  <span>Transferencia</span>
               </div>
               <div className="flex items-center gap-1.5 text-xs text-emerald-500/80 font-medium border border-emerald-900/30 px-2 py-1 rounded bg-emerald-950/30">
                  <ShieldCheck className="h-3 w-3" />
                  <span>Sitio Seguro SSL</span>
               </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialButton({ href, icon: Icon, label }: { href: string, icon: any, label: string }) {
  return (
    <Link 
      href={href} 
      className="bg-slate-900 p-2.5 rounded-full text-slate-400 hover:bg-emerald-600 hover:text-white transition-all duration-300 border border-slate-800 hover:border-emerald-500"
      aria-label={label}
    >
      <Icon className="h-4 w-4" />
    </Link>
  )
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <li>
      <Link 
        href={href}
        className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
      >
        <span className="h-px w-0 bg-emerald-500 group-hover:w-2 transition-all duration-300"></span>
        {children}
      </Link>
    </li>
  )
}

function ContactItem({ icon: Icon, text, href }: { icon: any, text: string, href?: string }) {
  const content = (
    <>
      <Icon className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
      <span className="text-slate-400 text-sm group-hover:text-emerald-400 transition-colors">{text}</span>
    </>
  )

  if (href) {
    return (
      <a href={href} className="flex items-start gap-3 group">
        {content}
      </a>
    )
  }

  return (
    <div className="flex items-start gap-3 group">
      {content}
    </div>
  )
}
