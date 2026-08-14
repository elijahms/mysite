import { site } from "@/lib/site"

export function SiteHeader() {
  return (
    <header className="site-header sticky top-0 z-50 pt-[env(safe-area-inset-top)]">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6 sm:px-10 lg:px-16">
        <a
          href="#top"
          className="font-heading text-sm font-semibold tracking-tight text-foreground transition-opacity duration-200 hover:opacity-70"
        >
          {site.name.split(" ")[0]}
          <span className="text-muted-foreground">.</span>
        </a>
        <nav className="flex items-center gap-5">
          <a
            href="#work"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Work
          </a>
          <a
            href="#contact"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
