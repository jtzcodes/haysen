"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Container, Microscope, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

import { InfiniteLogoCarousel } from "@/components/ui/infinite-logo-carousel"

export default function Home3() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* 1. Hero Split de Alta Conversión */}
      <section className="relative w-full min-h-[90vh] grid lg:grid-cols-2">
        {/* Lado Izquierdo: Propuesta de Valor + Formulario */}
        <div className="flex flex-col justify-center px-8 lg:px-20 py-20 bg-white relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-blue-600"></span>
              <span className="text-blue-600 font-bold tracking-widest text-xs uppercase">Haysen Group Chile</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Expertos en <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-emerald-600">
                Control de Humedad
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Protegemos su carga y activos con soluciones desecantes de grado industrial. <span className="font-semibold text-slate-900">Sin intermediarios, stock permanente.</span>
            </p>

            {/* Formulario de Captura Rápida (Lead Magnet) */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm max-w-md">
              <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Zap className="h-4 w-4 text-emerald-600" />
                Cotización Express en 15 minutos
              </h3>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <Input placeholder="Empresa" className="bg-white border-slate-200" />
                  <Input placeholder="Teléfono" className="bg-white border-slate-200" />
                </div>
                <Input placeholder="Email Corporativo" className="bg-white border-slate-200" />
                <Button className="w-full bg-slate-900 hover:bg-blue-700 text-white h-12 font-medium transition-all shadow-lg shadow-blue-900/10">
                  Solicitar Asesoría Gratuita
                </Button>
                <p className="text-[10px] text-slate-400 text-center">
                  *Disponible para empresas en todo el territorio nacional.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Lado Derecho: Imagen Visual Impactante */}
        <div className="relative bg-slate-100 hidden lg:block overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2672&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent"></div>
          
          {/* Tarjeta Flotante de Confianza */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-20 right-20 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/50 max-w-xs"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Garantía ISO</p>
                <p className="text-xs text-slate-500">Calidad Certificada</p>
              </div>
            </div>
            <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full w-[98%] bg-green-500 rounded-full"></div>
            </div>
            <p className="text-right text-[10px] font-bold text-green-600 mt-1">98% Satisfacción</p>
          </motion.div>
        </div>
      </section>

      {/* 2. Barra de Autoridad (Carrusel Infinito) */}
      <section className="border-y border-slate-100 py-10 bg-slate-50 overflow-hidden">
        <div className="w-full">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
            Proveedores de confianza para industrias críticas
          </p>
          <InfiniteLogoCarousel />
        </div>
      </section>

      {/* 3. Navegación por Problema/Industria (Enfoque Consultivo) */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Soluciones por Industria
              </h2>
              <p className="text-slate-500 text-lg">
                No vendemos solo sílica gel, entregamos la solución exacta para evitar pérdidas por humedad en su sector.
              </p>
            </div>
            <Button variant="outline" className="hidden md:flex group border-slate-300">
              Ver todas las aplicaciones <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link href="/productos?cat=logistica" className="group block">
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 hover:border-blue-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                  <Container className="h-32 w-32" />
                </div>
                <div className="bg-white w-14 h-14 rounded-xl shadow-sm flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Container className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">Exportación y Logística</h3>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  Evite la &quot;lluvia de contenedor&quot; y proteja su carga marítima con desecantes de alta absorción.
                </p>
                <span className="text-sm font-semibold text-blue-600 flex items-center">
                  Ver soluciones <ArrowUpRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/productos?cat=energia" className="group block">
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-1 hover:border-emerald-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                  <Zap className="h-32 w-32" />
                </div>
                <div className="bg-white w-14 h-14 rounded-xl shadow-sm flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Zap className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">Energía y Transformadores</h3>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  Silica gel azul para respiradores de transformadores. Monitoreo visual crítico de saturación.
                </p>
                <span className="text-sm font-semibold text-emerald-600 flex items-center">
                  Ver soluciones <ArrowUpRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/productos?cat=farma" className="group block">
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:shadow-amber-900/5 hover:-translate-y-1 hover:border-amber-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                  <Microscope className="h-32 w-32" />
                </div>
                <div className="bg-white w-14 h-14 rounded-xl shadow-sm flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <Microscope className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors">Farmacéutica y Lab</h3>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  Desecantes libres de metales pesados (Naranja) y grado alimenticio para ambientes controlados.
                </p>
                <span className="text-sm font-semibold text-amber-600 flex items-center">
                  Ver soluciones <ArrowUpRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CTA Final (Band) */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container px-4 mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para optimizar su cadena de suministro?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
            Hable hoy mismo con un ingeniero especialista y obtenga precios por volumen para su empresa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold h-14 px-8 text-lg shadow-lg shadow-emerald-900/50">
              Solicitar Lista de Precios
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white h-14 px-8 text-lg">
              Contactar por WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-white py-8 border-t border-slate-100 text-center text-slate-400 text-sm">
        <p>© 2024 Haysen Group Chile. Versión Home 3 (Enfoque Conversión B2B).</p>
      </footer>
    </div>
  )
}
