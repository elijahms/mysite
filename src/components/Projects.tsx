import { ArrowUpRight } from "lucide-react"
import { site } from "@/lib/site"

export function Projects() {
  return (
    <section id="work" className="scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-2">Selected work</p>
            <h2 className="font-heading text-4xl tracking-tight sm:text-5xl">
              Projects
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground text-balance">
            Things I built end to end. Live apps, demos, and a game or two.
          </p>
        </div>

        <ul className="border-t border-border">
          {site.projects.map((project, index) => (
            <li key={project.slug} className="project-row group relative">
              <div className="project-row__bar absolute inset-y-0 left-0 w-px bg-primary" />
              <div className="relative grid gap-4 py-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)_auto] sm:items-center sm:gap-8">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-0"
                  aria-label={`View ${project.name}`}
                />
                <div className="relative z-10 pointer-events-none">
                  <p className="font-mono mb-2 text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-heading text-2xl tracking-tight sm:text-3xl">
                    {project.name}
                  </h3>
                </div>
                <div className="relative z-10 space-y-3 pointer-events-none">
                  <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {project.description}
                  </p>
                  {project.highlights ? (
                    <ul className="flex flex-wrap gap-x-3 gap-y-1">
                      {project.highlights.map((item) => (
                        <li
                          key={item}
                          className="font-mono text-[11px] tracking-wide text-foreground/65"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono rounded-sm border border-border px-2 py-0.5 text-[10px] tracking-wide text-muted-foreground uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.repo ? (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono pointer-events-auto ml-1 text-[10px] tracking-wide text-muted-foreground uppercase underline-offset-4 hover:text-primary hover:underline"
                      >
                        Source
                      </a>
                    ) : null}
                  </div>
                </div>
                <div className="project-row__arrow relative z-10 flex items-center gap-2 text-sm font-medium text-muted-foreground pointer-events-none">
                  View
                  <ArrowUpRight className="size-4" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
