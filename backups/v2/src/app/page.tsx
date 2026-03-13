import { Hero } from "@/components/sections/hero"
import { InfoSection } from "@/components/home/info-section"
import { products } from "@/config/products"
import { ProductCard } from "@/components/products/product-card"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { InfiniteLogoCarousel } from "@/components/ui/infinite-logo-carousel"
import { BlogSection } from "@/components/home/blog-section"

export default function Home() {
  return (
    <div className="flex flex-col gap-0 pb-0">
      {/* Hero Section */}
      <Hero />

      {/* Carrusel de Industrias (Confianza) */}
      <section className="border-b border-slate-100 py-12 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 mb-8 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Soluciones de confianza para
          </p>
        </div>
        <div className="w-full">
          <InfiniteLogoCarousel />
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <ScrollReveal>
          <div className="flex flex-col gap-8 md:gap-10">
            <div className="flex flex-col gap-2 text-center px-2">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">Catálogo Destacado</h2>
              <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
                Seleccione el formato que mejor se adapte a sus necesidades industriales o particulares.
              </p>
            </div>
            
            {/* Carrusel en Móvil / Grid en Desktop */}
            <div className="flex overflow-x-auto pb-6 -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 md:mx-0 snap-x snap-mandatory">
              {products.map((product, index) => (
                <div key={product.id} className="w-[85vw] flex-shrink-0 mr-4 md:w-auto md:mr-0 snap-center md:snap-align-none">
                  <ScrollReveal delay={index * 0.1} className="h-full">
                    <ProductCard product={product} />
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Info Educativa Section */}
      <ScrollReveal>
        <InfoSection />
      </ScrollReveal>

      {/* Blog Section (SEO & Internal Linking) */}
      <ScrollReveal>
        <BlogSection />
      </ScrollReveal>
    </div>
  )
}
