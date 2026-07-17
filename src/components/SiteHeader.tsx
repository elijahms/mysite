"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 12)
        ticking = false
      })
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-[background-color,border-color,box-shadow] duration-300 ease-out",
        scrolled
          ? "site-header--scrolled"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 sm:px-10 lg:px-16">
        <a
          href="#"
          className="font-heading text-sm font-semibold tracking-tight transition-opacity duration-200 hover:opacity-70"
        >
          {site.name.split(" ")[0]}
          <span className="text-primary">.</span>
        </a>

        <nav className="flex items-center gap-0.5">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground"
            render={<a href="#work" />}
          >
            Work
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground"
            render={<a href="#contact" />}
          >
            Contact
          </Button>
        </nav>
      </div>
    </header>
  )
}
