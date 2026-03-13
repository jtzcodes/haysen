"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// Tipografía simulada (en un proyecto real importarías una Serif como Playfair Display)
const serifFont = "font-serif" 

export default function Home2() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFCF8] text-[#1a2e26] font-sans selection:bg-[#E8F5E9] selection:text-[#064E3B]">
      
      {/* 2. Hero Editorial Split */}
      <section className="grid grid-cols-1 lg:grid-cols-12 min-h-[85vh]">
        
        {/* Texto (Izquierda) */}
        <div className="lg:col-span-7 px-8 md:px-16 py-20 flex flex-col justify-center border-r border-[#e5e7eb]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#064E3B] font-medium tracking-widest text-xs uppercase mb-6 block">
              — Ingeniería de Protección
            </span>
            
            <h1 className={cn("text-5xl md:text-7xl lg:text-8xl text-[#064E3B] leading-[0.95] mb-8", serifFont)}>
              Preservando <br />
              <span className="italic font-light opacity-80">el valor</span> de su <br />
              industria.
            </h1>
            
            <p className="text-xl text-[#4a5d56] max-w-lg mb-12 leading-relaxed font-light">
              Soluciones avanzadas de control de humedad para sectores críticos. 
              Donde la precisión técnica se encuentra con la responsabilidad ambiental.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <Button className="bg-[#064E3B] hover:bg-[#043d2e] text-white h-14 px-8 rounded-none text-lg font-normal">
                Explorar Catálogo
              </Button>
              <Link href="#" className="group flex items-center gap-2 text-[#064E3B] font-medium h-14 px-4 hover:underline underline-offset-4">
                Leer Manifiesto de Calidad <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Stats Editorial */}
          <div className="grid grid-cols-3 gap-8 mt-24 pt-8 border-t border-[#e5e7eb] max-w-xl">
            <div>
              <p className="text-3xl font-light text-[#064E3B]">ISO</p>
              <p className="text-xs uppercase tracking-wider text-[#4a5d56] mt-1">Certificación 9001</p>
            </div>
            <div>
              <p className="text-3xl font-light text-[#064E3B]">+10k</p>
              <p className="text-xs uppercase tracking-wider text-[#4a5d56] mt-1">Envíos Protegidos</p>
            </div>
            <div>
              <p className="text-3xl font-light text-[#064E3B]">0%</p>
              <p className="text-xs uppercase tracking-wider text-[#4a5d56] mt-1">Cobalto (Tóxico)</p>
            </div>
          </div>
        </div>

        {/* Imagen (Derecha) */}
        <div className="lg:col-span-5 relative h-[50vh] lg:h-auto bg-[#e8f5e9]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615811361269-669f46be5878?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center grayscale-[20%] contrast-[1.1]"></div>
          <div className="absolute inset-0 bg-[#064E3B]/10 mix-blend-multiply"></div>
        </div>
      </section>

      {/* 3. Sección "Statement" (Manifiesto) */}
      <section className="py-24 px-8 md:px-16 bg-[#064E3B] text-[#FDFCF8] text-center">
        <div className="max-w-4xl mx-auto">
          <Leaf className="w-12 h-12 mx-auto mb-8 text-[#a7f3d0] opacity-80" />
          <h2 className={cn("text-3xl md:text-5xl leading-tight font-light mb-8", serifFont)}>
            &quot;La humedad es el enemigo silencioso de la rentabilidad. 
            Nuestra misión es erradicarla con ciencia, no solo con productos.&quot;
          </h2>
          <p className="text-[#a7f3d0] uppercase tracking-widest text-sm">Haysen Group Chile</p>
        </div>
      </section>

      {/* 4. Grid de Soluciones (Estilo Revista) */}
      <section className="py-24 px-8 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 pb-4 border-b border-[#e5e7eb]">
            <h3 className="text-2xl font-medium text-[#064E3B]">Nuestras Áreas de Expertise</h3>
            <span className="text-sm text-[#4a5d56]">01 — 03</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            {/* Item 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden mb-6 bg-[#f3f4f6]">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop" 
                  alt="Logística" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[30%] group-hover:grayscale-0"
                />
              </div>
              <h4 className="text-xl font-medium text-[#064E3B] mb-2 group-hover:underline decoration-1 underline-offset-4">Logística Internacional</h4>
              <p className="text-[#4a5d56] font-light leading-relaxed">
                Protección contra la &quot;lluvia de contenedor&quot; para exportaciones marítimas de larga distancia.
              </p>
            </div>

            {/* Item 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden mb-6 bg-[#f3f4f6]">
                <img 
                  src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2670&auto=format&fit=crop" 
                  alt="Energía" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[30%] group-hover:grayscale-0"
                />
              </div>
              <h4 className="text-xl font-medium text-[#064E3B] mb-2 group-hover:underline decoration-1 underline-offset-4">Infraestructura Energética</h4>
              <p className="text-[#4a5d56] font-light leading-relaxed">
                Silica gel de alto rendimiento para respiradores de transformadores de potencia.
              </p>
            </div>

            {/* Item 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden mb-6 bg-[#f3f4f6]">
                <img 
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2670&auto=format&fit=crop" 
                  alt="Laboratorio" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[30%] group-hover:grayscale-0"
                />
              </div>
              <h4 className="text-xl font-medium text-[#064E3B] mb-2 group-hover:underline decoration-1 underline-offset-4">Farmacéutica & Lab</h4>
              <p className="text-[#4a5d56] font-light leading-relaxed">
                Control de ambiente estéril con desecantes libres de contaminantes y trazabilidad total.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Footer Minimalista */}
      <footer className="bg-[#FDFCF8] py-16 px-8 md:px-16 border-t border-[#e5e7eb]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h5 className="text-xl font-bold text-[#064E3B] mb-6">HAYSEN GROUP CHILE</h5>
            <p className="text-[#4a5d56] max-w-xs font-light">
              Ingeniería aplicada para la preservación de activos industriales.
            </p>
          </div>
          <div>
            <h6 className="text-sm font-bold uppercase tracking-widest text-[#064E3B] mb-6">Oficinas</h6>
            <ul className="space-y-3 text-[#4a5d56] font-light">
              <li>Santiago, Chile</li>
              <li>Antofagasta, Chile</li>
              <li>Concepción, Chile</li>
            </ul>
          </div>
          <div>
            <h6 className="text-sm font-bold uppercase tracking-widest text-[#064E3B] mb-6">Legal</h6>
            <ul className="space-y-3 text-[#4a5d56] font-light">
              <li>Términos y Condiciones</li>
              <li>Política de Privacidad</li>
              <li>Certificaciones ISO</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-[#e5e7eb] text-center text-xs text-[#4a5d56] uppercase tracking-widest">
          © 2024 Haysen Group. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}
