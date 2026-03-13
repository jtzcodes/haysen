"use client"

import { cn } from "@/lib/utils"
import { Factory, Leaf, Zap, Anchor, Briefcase, Building2, Plane, Stethoscope, Microscope, Truck } from "lucide-react"

const industries = [
  { name: "MINERÍA", icon: Building2 },
  { name: "AGROINDUSTRIA", icon: Leaf },
  { name: "FARMACÉUTICA", icon: Stethoscope },
  { name: "LOGÍSTICA", icon: Truck },
  { name: "ENERGÍA", icon: Zap },
  { name: "MARÍTIMA", icon: Anchor },
  { name: "AERONÁUTICA", icon: Plane },
  { name: "MANUFACTURA", icon: Factory },
  { name: "LABORATORIOS", icon: Microscope },
  { name: "CORPORATIVO", icon: Briefcase },
]

export function InfiniteLogoCarousel() {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {industries.map((industry, index) => (
          <li key={index} className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 group cursor-default">
            <industry.icon className="h-6 w-6 text-slate-400 group-hover:text-blue-600" />
            <span className="text-xl font-bold text-slate-600 group-hover:text-slate-900 whitespace-nowrap">{industry.name}</span>
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {industries.map((industry, index) => (
          <li key={`duplicate-${index}`} className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 group cursor-default">
            <industry.icon className="h-6 w-6 text-slate-400 group-hover:text-blue-600" />
            <span className="text-xl font-bold text-slate-600 group-hover:text-slate-900 whitespace-nowrap">{industry.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
