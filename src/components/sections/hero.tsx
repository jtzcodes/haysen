"use client"

import Link from "next/link";
import { ArrowRight, ShieldCheck, Leaf, Truck, Sparkles, Award, CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const features = [
    {
      title: "Soluciones Industriales",
      description: "Silica Gel, Alúmina Activada y Sachets de 1g a 1kg",
      icon: CheckCircle2,
      color: "emerald"
    },
    {
      title: "Stock Permanente",
      description: "Disponibilidad inmediata en grandes volúmenes",
      icon: Truck,
      color: "blue"
    },
    {
      title: "Eco-Friendly",
      description: "Silica Naranja libre de cobalto y metales pesados",
      icon: Leaf,
      color: "green"
    }
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-emerald-950 via-green-900 to-slate-900">
      {/* Fondo animado moderno con mejor contraste */}
      <div className="absolute inset-0">
        {/* Gradiente principal más claro */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(5,150,105,0.15),transparent_60%)]"></div>

        {/* Efectos de luz más visibles */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-teal-400/10 rounded-full blur-[120px]"></div>

        {/* Grid sutil pero visible */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black,transparent)]"></div>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 w-full pt-20 pb-32">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">

            {/* Columna Izquierda - Contenido */}
            <div className="space-y-10 flex flex-col gap-3">
              {/* Badge superior */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-emerald-400/20 w-fit">
                <Sparkles className="h-4 w-4 text-emerald-400" />
                <span className="text-sm font-semibold text-emerald-100">Líderes en Desecantes Industriales</span>
              </div>

              {/* Título */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight text-white">
                Expertos en{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-300 to-teal-400 drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  Control de Humedad
                </span>
              </h1>

              {/* Subtítulo */}
              <p className="text-lg sm:text-xl lg:text-2xl text-emerald-100/80 leading-relaxed max-w-xl">
                Proveedores líderes de Silica Gel a Granel, Sachets y Alúmina Activada.
                Soluciones certificadas para la industria farmacéutica, electrónica y logística.
              </p>

              {/* Botones CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg px-8 py-6 h-auto rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all hover:scale-105"
                >
                  <Link href="/productos" className="flex items-center gap-2">
                    <Zap className="h-5 w-5 fill-current" />
                    Ver Catálogo
                  </Link>
                </Button>
                
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/30 font-bold text-lg px-8 py-6 h-auto rounded-xl transition-all"
                >
                  <Link href="/contacto" className="flex items-center gap-2">
                    Contáctanos
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Stats/Trust badges */}
              <div className="flex flex-wrap gap-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-500/30">
                    <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">+500</div>
                    <div className="text-sm text-emerald-200/70">Clientes Felices</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30">
                    <Award className="h-6 w-6 text-teal-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">15+</div>
                    <div className="text-sm text-emerald-200/70">Años Experiencia</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna Derecha - Características visuales */}
            <div className="relative lg:block hidden">
              <div className="relative">
                {/* Tarjetas flotantes dinámicas */}
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-[1.02] shadow-xl hover:shadow-emerald-500/10"
                      style={{ animation: `float 6s ease-in-out infinite`, animationDelay: `${index * 1.5}s` }}
                    >
                      <div className="relative flex items-start gap-5">
                        <div className="flex-shrink-0 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 p-4 rounded-2xl shadow-inner border border-white/10">
                          <feature.icon className="h-8 w-8 text-emerald-300" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-white text-xl mb-2">{feature.title}</h3>
                          <p className="text-emerald-100/70 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Elementos decorativos traseros */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px] animate-pulse"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-teal-500/20 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Forma decorativa inferior (Wave) */}
      <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-[1px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,85.3C384,85,480,75,576,64C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
      
      {/* Animación keyframes para el efecto flotante */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}
