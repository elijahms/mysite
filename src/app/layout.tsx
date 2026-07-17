import type { Metadata, Viewport } from "next"
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google"
import "./globals.css"
import { TooltipProvider } from "@/components/ui/tooltip"
import { MotionProvider } from "@/components/MotionProvider"
import { ThemeColor } from "@/components/ThemeColor"
import { SiteBackground } from "@/components/SiteBackground"

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
})

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Elijah Silverman",
  description:
    "Full Stack Developer & Creative Technologist. Builder of Double Down Trivia and other fast, intentional web apps.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Elijah Silverman",
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f6fa" },
    { media: "(prefers-color-scheme: dark)", color: "#141824" },
  ],
  colorScheme: "light dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${syne.variable} ${jetbrainsMono.variable}`}
    >
      <body className={`${dmSans.className} min-h-screen-safe antialiased`}>
        <ThemeColor />
        <SiteBackground />
        <MotionProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </MotionProvider>
      </body>
    </html>
  )
}
