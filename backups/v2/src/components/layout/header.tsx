"use client"

import Link from "next/link"
import { siteConfig } from "@/config/site"
import { CartSheet } from "@/components/cart/cart-sheet"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Logo } from "@/components/ui/logo"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto px-4">
        {/* Mobile Menu & Logo */}
        <div className="flex lg:hidden items-center gap-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetTitle className="sr-only">Menú de Navegación</SheetTitle>
              <Link href="/" className="flex items-center mb-8" onClick={() => setIsOpen(false)}>
                <Logo />
              </Link>
              <nav className="flex flex-col gap-4">
                {siteConfig.mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium hover:text-emerald-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <Logo />
          </Link>
        </div>

        {/* Desktop Logo (Left) */}
        <Link href="/" className="hidden lg:flex items-center gap-2 transition-opacity hover:opacity-90">
          <Logo />
        </Link>

        {/* Desktop Nav (Centered) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium absolute left-1/2 -translate-x-1/2">
          {siteConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-emerald-600 text-foreground/80 font-medium"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Cart (Right) */}
        <div className="flex items-center gap-4">
          <CartSheet />
        </div>
      </div>
    </header>
  )
}
