import { Hero } from "@/components/sections/hero"
import { InfoSection } from "@/components/home/info-section"
import { products } from "@/config/products"
import { ProductCard } from "@/components/products/product-card"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { InfiniteLogoCarousel } from "@/components/ui/infinite-logo-carousel"

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
      <section className="container mx-auto px-4 py-20">
        <ScrollReveal>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Catálogo Destacado</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Seleccione el formato que mejor se adapte a sus necesidades industriales o particulares.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {products.map((product, index) => (
                <ScrollReveal key={product.id} delay={index * 0.1} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)]">
                  <ProductCard product={product} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Info Educativa Section */}
      <ScrollReveal>
        <InfoSection />
      </ScrollReveal>
    </div>
  )
}
