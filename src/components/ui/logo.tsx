import Image from "next/image"

export function Logo({ className, variant = "default" }: { className?: string, variant?: "default" | "light" }) {
  // Guardamos las variables antiguas comentadas por si queremos volver al logo de texto
  // const textColor = variant === "light" ? "text-white" : "text-slate-900"
  // const subTextColor = variant === "light" ? "text-emerald-400" : "text-emerald-600"

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Nuevo Logo (Imagen) */}
      <div className="relative w-32 h-10 sm:w-40 sm:h-12">
        <Image 
          src="/logo/logo-haysen.png" 
          alt="Haysen Group Chile Logo" 
          fill
          sizes="(max-width: 640px) 128px, 160px"
          className="object-contain object-left"
          priority
        />
      </div>

      {/* Logo Antiguo (Texto + Isotipo) - Comentado */}
      {/* 
      <div className="relative flex items-center justify-center w-8 h-8">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          <path 
            d="M50 20 L80 75 L20 75 Z" 
            stroke="currentColor" 
            strokeWidth="12" 
            strokeLinejoin="round" 
            className="text-emerald-500 opacity-20"
          />
          <circle cx="50" cy="20" r="12" className="fill-emerald-600" />
          <circle cx="80" cy="75" r="12" className="fill-blue-600" />
          <circle cx="20" cy="75" r="12" className="fill-emerald-600" />
          <circle cx="50" cy="20" r="4" fill="white" fillOpacity="0.4" />
        </svg>
      </div>

      <div className="flex flex-col leading-none select-none">
        <span className={`text-lg font-extrabold tracking-tight ${textColor}`}>
          HAYSEN
        </span>
        <span className={`text-[9px] font-bold tracking-[0.2em] uppercase ${subTextColor}`}>
          Group Chile
        </span>
      </div>
      */}
    </div>
  )
}
