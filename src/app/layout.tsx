import type { Metadata, Viewport } from "next"
import { DM_Sans, Geist_Mono, Sora } from "next/font/google"
import "./globals.css"
import { site } from "@/lib/site"

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
})

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: false,
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
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
