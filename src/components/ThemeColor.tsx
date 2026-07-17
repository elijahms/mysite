"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"

const LIGHT = "#f4f6fa"
const DARK = "#141824"

/** Keeps Safari chrome / status bar color in sync with the active theme. */
export function ThemeColor() {
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const color = resolvedTheme === "dark" ? DARK : LIGHT
    let meta = document.querySelector('meta[name="theme-color"]')
    if (!meta) {
      meta = document.createElement("meta")
      meta.setAttribute("name", "theme-color")
      document.head.appendChild(meta)
    }
    meta.setAttribute("content", color)
    document.documentElement.style.backgroundColor = color
    document.body.style.backgroundColor = color
  }, [resolvedTheme])

  return null
}
