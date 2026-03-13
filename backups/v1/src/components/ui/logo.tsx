import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  iconClassName?: string
  textClassName?: string
  hideText?: boolean
  variant?: "dark" | "light"
}

export function Logo({ className, iconClassName, textClassName, hideText = false, variant = "dark" }: LogoProps) {
  const textColor = variant === "dark" ? "text-slate-900" : "text-white"
  const secondaryTextColor = variant === "dark" ? "text-emerald-600" : "text-emerald-400"
  
  return (
    <div className={cn("flex items-center gap-2.5 select-none", className)}>
      {/* Isotipo: Hexágono Eco-Industrial */}
      <div className={cn("relative flex items-center justify-center w-8 h-8", iconClassName)}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Hexágono Exterior (Industrial) */}
          <path
            d="M50 5L93.3013 30V80L50 105L6.69873 80V30L50 5Z"
            className="fill-emerald-600"
            stroke="currentColor"
            strokeWidth="0"
          />
          {/* Hexágono Interior (Profundidad) */}
          <path
            d="M50 15L84.641 35V75L50 95L15.359 75V35L50 15Z"
            className="fill-emerald-500"
          />
          
          {/* Hoja / Gota Negativa (Eco/Absorción) */}
          <path
            d="M50 35C50 35 35 55 35 65C35 73.2843 41.7157 80 50 80C58.2843 80 65 73.2843 65 65C65 55 50 35 50 35Z"
            className="fill-white"
          />
          {/* Detalle Hoja */}
          <path 
            d="M50 35V65" 
            stroke={variant === "dark" ? "#10b981" : "#059669"} 
            strokeWidth="4" 
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Logotipo: Tipografía */}
      {!hideText && (
        <div className={cn("flex flex-col leading-none", textClassName)}>
          <span className={cn("font-bold text-lg tracking-tight", textColor)}>
            Haysen
          </span>
          <span className={cn("text-[10px] font-semibold tracking-widest uppercase", secondaryTextColor)}>
            Group Chile
          </span>
        </div>
      )}
    </div>
  )
}
