import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { site } from "@/lib/site"

// Local files, same families and weights as the previous next/font/google setup.
// next/font/google downloads CSS at build time, and Next 16.3 fails the Turbopack
// build when Google returns an extensionless font URL.
const sora = localFont({
  src: [
    { path: "../fonts/sora-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/sora-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/sora-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-sora",
  display: "swap",
  preload: true,
  adjustFontFallback: "Arial",
})

const dmSans = localFont({
  src: [
    { path: "../fonts/dm-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/dm-sans-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/dm-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-dm-sans",
  display: "swap",
  preload: false,
  adjustFontFallback: "Arial",
})

const geistMono = localFont({
  src: [{ path: "../fonts/geist-mono-latin-400-normal.woff2", weight: "400", style: "normal" }],
  variable: "--font-geist-mono",
  display: "swap",
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: site.name,
  description: `${site.title}. ${site.tagline}`,
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: site.name,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#111216",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${dmSans.variable} ${geistMono.variable} dark antialiased`}
    >
      <body className="min-h-dvh bg-background font-sans text-foreground">
        <div className="atmosphere" aria-hidden />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
