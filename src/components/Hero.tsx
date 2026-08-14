import { ArrowUpRight, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"

export function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-[88dvh] flex-col justify-center px-6 pb-20 pt-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-4xl">
        <p className="eyebrow animate-rise mb-6">{site.title}</p>
        <h1 className="animate-rise animate-rise-delay-1 font-heading text-[clamp(3rem,11vw,7.5rem)] leading-[0.9] tracking-tight text-foreground">
          {site.name}
        </h1>
        <div className="animate-rise animate-rise-delay-2 mt-6 h-px w-full bg-border" />
        <p className="animate-rise animate-rise-delay-3 mt-8 max-w-xl text-lg text-muted-foreground text-balance sm:text-xl">
          {site.tagline}
        </p>
        <div className="animate-rise animate-rise-delay-4 mt-10 flex flex-wrap items-center gap-3">
          <Button
            size="lg"
            className="h-12 gap-2 px-5 font-heading text-sm font-semibold"
            nativeButton={false}
            render={
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            <FileText className="size-4" />
            View resume
            <ArrowUpRight className="size-4 opacity-70" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12 px-5 font-heading text-sm font-semibold"
            nativeButton={false}
            render={<a href="#work" />}
          >
            See work
          </Button>
        </div>
      </div>
    </section>
  )
}
