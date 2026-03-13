"use client"

import { Separator } from "@/components/ui/separator"

export default function LogosPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Propuestas de Identidad Visual</h1>
        <p className="text-slate-500 mb-12">Exploración de logotipos para Haysen Group Chile. Distintos conceptos y aplicaciones.</p>

        {/* 1. CONCEPTO: ABSTRACT H (ARQUITECTÓNICO) */}
        <section className="mb-20 bg-white p-12 rounded-3xl shadow-sm border border-slate-100">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="bg-slate-100 text-slate-500 text-sm px-2 py-1 rounded">Opción 01</span>
              The Abstract H
            </h2>
            <p className="text-slate-500 mt-2">Concepto: Solidez, Estructura, Pilares. Evoca ingeniería civil y estabilidad.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
            {/* Small */}
            <div className="flex flex-col gap-4">
              <span className="text-xs font-mono text-slate-400">Small (Header)</span>
              <LogoAbstractH size="sm" />
            </div>
            {/* Medium */}
            <div className="flex flex-col gap-4">
              <span className="text-xs font-mono text-slate-400">Medium (Card/Footer)</span>
              <LogoAbstractH size="md" />
            </div>
            {/* Large */}
            <div className="flex flex-col gap-4">
              <span className="text-xs font-mono text-slate-400">Large (Hero/Print)</span>
              <LogoAbstractH size="lg" />
            </div>
          </div>
          
          <div className="mt-12 p-8 bg-slate-900 rounded-2xl">
            <span className="text-xs font-mono text-slate-500 mb-4 block">Dark Mode Preview</span>
            <LogoAbstractH size="md" variant="light" />
          </div>
        </section>

        {/* 2. CONCEPTO: MOLECULAR (CIENTÍFICO) */}
        <section className="mb-20 bg-white p-12 rounded-3xl shadow-sm border border-slate-100">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="bg-slate-100 text-slate-500 text-sm px-2 py-1 rounded">Opción 02</span>
              Molecular Tech
            </h2>
            <p className="text-slate-500 mt-2">Concepto: Química, Enlaces, Absorción. Evoca laboratorio y precisión.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
             {/* Small */}
             <div className="flex flex-col gap-4">
              <span className="text-xs font-mono text-slate-400">Small</span>
              <LogoMolecular size="sm" />
            </div>
            {/* Medium */}
            <div className="flex flex-col gap-4">
              <span className="text-xs font-mono text-slate-400">Medium</span>
              <LogoMolecular size="md" />
            </div>
            {/* Large */}
            <div className="flex flex-col gap-4">
              <span className="text-xs font-mono text-slate-400">Large</span>
              <LogoMolecular size="lg" />
            </div>
          </div>
        </section>

        {/* 3. CONCEPTO: HEXA-DROP (EL ACTUAL MEJORADO) */}
        <section className="mb-20 bg-white p-12 rounded-3xl shadow-sm border border-slate-100">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="bg-slate-100 text-slate-500 text-sm px-2 py-1 rounded">Opción 03</span>
              Hexa-Drop (Refinado)
            </h2>
            <p className="text-slate-500 mt-2">Concepto: Control, Escudo, Gota. El diseño actual con ajustes geométricos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
             {/* Small */}
             <div className="flex flex-col gap-4">
              <span className="text-xs font-mono text-slate-400">Small</span>
              <LogoHexaDrop size="sm" />
            </div>
            {/* Medium */}
            <div className="flex flex-col gap-4">
              <span className="text-xs font-mono text-slate-400">Medium</span>
              <LogoHexaDrop size="md" />
            </div>
            {/* Large */}
            <div className="flex flex-col gap-4">
              <span className="text-xs font-mono text-slate-400">Large</span>
              <LogoHexaDrop size="lg" />
            </div>
          </div>
        </section>

        {/* 4. CONCEPTO: THE PRISM (FUTURISTA) */}
        <section className="mb-20 bg-white p-12 rounded-3xl shadow-sm border border-slate-100">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="bg-slate-900 text-white text-sm px-2 py-1 rounded">Opción 04</span>
              The Prism
            </h2>
            <p className="text-slate-500 mt-2">Concepto: Transformación, Solidez Triangular, Vanguardia.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
             <div className="flex flex-col gap-4"><span className="text-xs font-mono text-slate-400">Small</span><LogoPrism size="sm" /></div>
             <div className="flex flex-col gap-4"><span className="text-xs font-mono text-slate-400">Medium</span><LogoPrism size="md" /></div>
             <div className="flex flex-col gap-4"><span className="text-xs font-mono text-slate-400">Large</span><LogoPrism size="lg" /></div>
          </div>
        </section>

        {/* 5. CONCEPTO: ORBITAL SHIELD (DINÁMICO) */}
        <section className="mb-20 bg-white p-12 rounded-3xl shadow-sm border border-slate-100">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="bg-slate-900 text-white text-sm px-2 py-1 rounded">Opción 05</span>
              Orbital Shield
            </h2>
            <p className="text-slate-500 mt-2">Concepto: Protección 360º, Movimiento, Seguridad Activa.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
             <div className="flex flex-col gap-4"><span className="text-xs font-mono text-slate-400">Small</span><LogoOrbital size="sm" /></div>
             <div className="flex flex-col gap-4"><span className="text-xs font-mono text-slate-400">Medium</span><LogoOrbital size="md" /></div>
             <div className="flex flex-col gap-4"><span className="text-xs font-mono text-slate-400">Large</span><LogoOrbital size="lg" /></div>
          </div>
        </section>

        {/* 6. CONCEPTO: STACKED LAYERS (ARQUITECTÓNICO) */}
        <section className="mb-20 bg-white p-12 rounded-3xl shadow-sm border border-slate-100">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="bg-slate-900 text-white text-sm px-2 py-1 rounded">Opción 06</span>
              Stacked Layers
            </h2>
            <p className="text-slate-500 mt-2">Concepto: Filtración, Capas, Orden, Estabilidad.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
             <div className="flex flex-col gap-4"><span className="text-xs font-mono text-slate-400">Small</span><LogoStacked size="sm" /></div>
             <div className="flex flex-col gap-4"><span className="text-xs font-mono text-slate-400">Medium</span><LogoStacked size="md" /></div>
             <div className="flex flex-col gap-4"><span className="text-xs font-mono text-slate-400">Large</span><LogoStacked size="lg" /></div>
          </div>
        </section>

        {/* 7. CONCEPTO: MOLECULAR TRINITY (EVOLUCIÓN) */}
        <section className="mb-20 bg-white p-12 rounded-3xl shadow-sm border border-slate-100">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="bg-emerald-600 text-white text-sm px-2 py-1 rounded">Opción 07</span>
              Molecular Trinity
            </h2>
            <p className="text-slate-500 mt-2">Concepto: Fusión, Química Avanzada, Proceso de Absorción (Gradiente).</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
             <div className="flex flex-col gap-4"><span className="text-xs font-mono text-slate-400">Small</span><LogoTrinity size="sm" /></div>
             <div className="flex flex-col gap-4"><span className="text-xs font-mono text-slate-400">Medium</span><LogoTrinity size="md" /></div>
             <div className="flex flex-col gap-4"><span className="text-xs font-mono text-slate-400">Large</span><LogoTrinity size="lg" /></div>
          </div>
        </section>

      </div>
    </div>
  )
}

// --- COMPONENTES DE LOGO PARA DEMOSTRACIÓN ---

function LogoAbstractH({ size = "md", variant = "dark" }: { size?: "sm" | "md" | "lg", variant?: "dark" | "light" }) {
  const sizes = {
    sm: { w: "w-6", h: "h-6", text: "text-base", sub: "text-[8px]" },
    md: { w: "w-10", h: "h-10", text: "text-2xl", sub: "text-[10px]" },
    lg: { w: "w-20", h: "h-20", text: "text-5xl", sub: "text-sm" },
  }
  const s = sizes[size]
  const color = variant === "dark" ? "text-slate-900" : "text-white"
  const subColor = variant === "dark" ? "text-slate-500" : "text-slate-400"

  return (
    <div className="flex items-center gap-3">
      <div className={`relative ${s.w} ${s.h}`}>
        {/* Pilar Izq */}
        <div className="absolute left-0 top-0 bottom-0 w-[25%] bg-emerald-600 rounded-sm"></div>
        {/* Pilar Der */}
        <div className="absolute right-0 top-0 bottom-0 w-[25%] bg-slate-800 rounded-sm"></div>
        {/* Puente/Conexión */}
        <div className="absolute top-1/2 left-0 right-0 h-[15%] bg-slate-400 -translate-y-1/2 z-[-1] opacity-50"></div>
        {/* Punto Central */}
        <div className="absolute top-1/2 left-1/2 w-[30%] h-[30%] bg-emerald-400 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-sm border-2 border-white"></div>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-bold tracking-tight ${s.text} ${color}`}>HAYSEN</span>
        <span className={`font-medium tracking-widest uppercase ${s.sub} ${subColor}`}>Group Chile</span>
      </div>
    </div>
  )
}

function LogoMolecular({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: { w: "w-6", h: "h-6", text: "text-base", sub: "text-[8px]" },
    md: { w: "w-10", h: "h-10", text: "text-2xl", sub: "text-[10px]" },
    lg: { w: "w-20", h: "h-20", text: "text-5xl", sub: "text-sm" },
  }
  const s = sizes[size]

  return (
    <div className="flex items-center gap-3">
      <div className={`relative ${s.w} ${s.h} flex items-center justify-center`}>
         <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-600" fill="currentColor">
           <circle cx="30" cy="70" r="20" className="opacity-80" />
           <circle cx="70" cy="70" r="20" className="text-blue-600 opacity-80" />
           <circle cx="50" cy="35" r="20" className="text-slate-800" />
           {/* Enlaces */}
           <path d="M50 35 L30 70" stroke="currentColor" strokeWidth="4" className="text-slate-300" />
           <path d="M50 35 L70 70" stroke="currentColor" strokeWidth="4" className="text-slate-300" />
         </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-bold tracking-tight ${s.text} text-slate-900`}>HAYSEN</span>
        <span className={`font-medium tracking-widest uppercase ${s.sub} text-slate-400`}>GROUP CHILE</span>
      </div>
    </div>
  )
}

function LogoHexaDrop({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: { w: "w-6", h: "h-6", text: "text-base", sub: "text-[8px]" },
    md: { w: "w-10", h: "h-10", text: "text-2xl", sub: "text-[10px]" },
    lg: { w: "w-20", h: "h-20", text: "text-5xl", sub: "text-sm" },
  }
  const s = sizes[size]

  return (
    <div className="flex items-center gap-3">
       <div className={`relative ${s.w} ${s.h} flex items-center justify-center`}>
         {/* Marco Hexagonal Estilizado (Más orgánico) */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-slate-900 drop-shadow-sm"
        >
          <path
            d="M12 2L3 7V17L12 22L21 17V7L12 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-90"
          />
          {/* Acento interno sutil */}
          <path
            d="M12 4L5 8V16L12 20L19 16V8L12 4Z"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-30"
          />
        </svg>
        
        {/* Gota con Efecto de Volumen (Doble tono) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[45%] h-[45%]"
          >
            {/* Cuerpo de la gota */}
            <path 
              d="M12 22C14.7614 22 17 19.7614 17 17C17 14.5 12 7 12 7C12 7 7 14.5 7 17C7 19.7614 9.23858 22 12 22Z" 
              className="fill-emerald-500"
            />
            {/* Brillo/Reflejo (Volumen) */}
            <path 
              d="M13.5 14C13.5 14 12 11 12 11C12 11 10.5 14 10.5 16C10.5 17 11.5 17.5 12 17.5" 
              className="fill-emerald-300 opacity-60"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-extrabold tracking-tight ${s.text} text-slate-900`}>HAYSEN</span>
        <span className={`font-bold tracking-[0.2em] uppercase ${s.sub} text-emerald-600`}>GROUP CHILE</span>
      </div>
    </div>
  )
}

function LogoPrism({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: { w: "w-6", h: "h-6", text: "text-base", sub: "text-[8px]" },
    md: { w: "w-10", h: "h-10", text: "text-2xl", sub: "text-[10px]" },
    lg: { w: "w-20", h: "h-20", text: "text-5xl", sub: "text-sm" },
  }
  const s = sizes[size]

  return (
    <div className="flex items-center gap-3">
      <div className={`relative ${s.w} ${s.h}`}>
         <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
           <path d="M12 2L22 20H2L12 2Z" className="fill-slate-900" />
           <path d="M12 2L22 20H12V2Z" className="fill-emerald-500 opacity-90" />
           <path d="M12 10L17 20H7L12 10Z" className="fill-white mix-blend-overlay opacity-30" />
         </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-bold tracking-tighter ${s.text} text-slate-900`}>HAYSEN</span>
        <span className={`font-mono tracking-widest uppercase ${s.sub} text-slate-400`}>GROUP CHILE</span>
      </div>
    </div>
  )
}

function LogoOrbital({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: { w: "w-6", h: "h-6", text: "text-base", sub: "text-[8px]" },
    md: { w: "w-10", h: "h-10", text: "text-2xl", sub: "text-[10px]" },
    lg: { w: "w-20", h: "h-20", text: "text-5xl", sub: "text-sm" },
  }
  const s = sizes[size]

  return (
    <div className="flex items-center gap-3">
      <div className={`relative ${s.w} ${s.h} flex items-center justify-center`}>
         <div className="absolute inset-0 border-2 border-slate-200 rounded-full"></div>
         <div className="absolute inset-0 border-2 border-emerald-500 rounded-full border-l-transparent border-b-transparent rotate-45"></div>
         <div className="w-[40%] h-[40%] bg-slate-900 rounded-full"></div>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-medium tracking-tight ${s.text} text-slate-900`}>Haysen</span>
        <span className={`font-bold tracking-wide uppercase ${s.sub} text-emerald-600`}>GROUP CHILE</span>
      </div>
    </div>
  )
}

function LogoStacked({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: { w: "w-6", h: "h-6", text: "text-base", sub: "text-[8px]" },
    md: { w: "w-10", h: "h-10", text: "text-2xl", sub: "text-[10px]" },
    lg: { w: "w-20", h: "h-20", text: "text-5xl", sub: "text-sm" },
  }
  const s = sizes[size]

  return (
    <div className="flex items-center gap-3">
      <div className={`relative ${s.w} ${s.h} flex flex-col justify-between py-[10%]`}>
         <div className="w-full h-[20%] bg-slate-900 rounded-sm"></div>
         <div className="w-[70%] h-[20%] bg-emerald-500 rounded-sm self-end"></div>
         <div className="w-full h-[20%] bg-slate-900 rounded-sm"></div>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-black tracking-tight ${s.text} text-slate-900`}>HAYSEN</span>
        <span className={`font-bold tracking-widest uppercase ${s.sub} text-slate-400`}>GROUP CHILE</span>
      </div>
    </div>
  )
}

function LogoTrinity({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: { w: "w-6", h: "h-6", text: "text-base", sub: "text-[8px]" },
    md: { w: "w-10", h: "h-10", text: "text-2xl", sub: "text-[10px]" },
    lg: { w: "w-20", h: "h-20", text: "text-5xl", sub: "text-sm" },
  }
  const s = sizes[size]

  return (
    <div className="flex items-center gap-3">
      <div className={`relative ${s.w} ${s.h}`}>
         <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
           {/* Definición de Gradiente */}
           <defs>
             <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
               <stop offset="0%" style={{stopColor:'#10b981', stopOpacity:1}} />
               <stop offset="100%" style={{stopColor:'#3b82f6', stopOpacity:1}} />
             </linearGradient>
           </defs>
           
           {/* Conexiones Fluidas (Triángulo) */}
           <path 
             d="M50 20 L80 75 L20 75 Z" 
             stroke="url(#grad1)" 
             strokeWidth="12" 
             strokeLinejoin="round" 
             className="opacity-20"
           />
           
           {/* Nodos Nucleares */}
           <circle cx="50" cy="20" r="12" fill="url(#grad1)" />
           <circle cx="80" cy="75" r="12" fill="url(#grad1)" />
           <circle cx="20" cy="75" r="12" fill="url(#grad1)" />
           
           {/* Detalle interno (Reflejo) */}
           <circle cx="50" cy="20" r="4" fill="white" fillOpacity="0.3" />
         </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-bold tracking-tighter ${s.text} text-slate-900`}>HAYSEN</span>
        <span className={`font-bold tracking-widest uppercase ${s.sub} text-emerald-600`}>GROUP CHILE</span>
      </div>
    </div>
  )
}
