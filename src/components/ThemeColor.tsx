"use client"

import { useEffect } from "react"

const LIGHT = "#f4f6fa"
const DARK = "#141824"

/** Keeps Safari chrome / status bar color in sync with system preference. */
export function ThemeColor() {
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)")

    const apply = () => {
      const color = mq.matches ? DARK : LIGHT
      let meta = document.querySelector('meta[name="theme-color"]')
      if (!meta) {
        meta = document.createElement("meta")
        meta.setAttribute("name", "theme-color")
        document.head.appendChild(meta)
      }
      meta.setAttribute("content", color)
      document.documentElement.style.backgroundColor = color
      document.body.style.backgroundColor = color
    }

    apply()
    mq.addEventListener("change", apply)
    return () => mq.removeEventListener("change", apply)
  }, [])

  return null
}
