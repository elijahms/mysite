import { site } from "@/lib/site"
import { SiteHeader } from "@/components/SiteHeader"
import { Hero } from "@/components/Hero"
import { Skills } from "@/components/Skills"
import { Projects } from "@/components/Projects"
import { Contact } from "@/components/Contact"

export default function Home() {
  return (
    <div className="relative min-h-screen-safe overflow-x-hidden">
      <SiteHeader />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-border px-6 py-8 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js, shadcn & Base UI
          </p>
        </div>
      </footer>
    </div>
  )
}
