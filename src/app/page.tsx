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
      <footer className="px-6 pb-10 pt-4 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl border-t border-border/70 pt-8">
          <p className="font-mono text-xs tracking-wide text-muted-foreground">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </footer>
    </div>
  )
}
