import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { site, type Project } from "@/lib/site"

function ProjectMeta({ project }: { project: Project }) {
  return (
    <>
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
    </>
  )
}

export function Projects() {
  const featured = site.projects.find((project) => project.demo)
  const rest = site.projects.filter((project) => !project.demo)

  return (
    <section id="work" className="scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-10">
          <p className="eyebrow mb-2">Accomplishments</p>
          <h2 className="font-heading text-4xl tracking-tight sm:text-5xl">
            Work worth showing
          </h2>
        </div>

        {featured ? (
          <article className="border border-border">
            <div className="border-b border-border bg-card">
              <video
                className="aspect-video w-full bg-background"
                controls
                playsInline
                preload="metadata"
                poster={featured.demo?.poster}
              >
                <source src={featured.demo?.src} type="video/mp4" />
              </video>
            </div>
            <div className="space-y-4 p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2">
                  <p className="eyebrow">Featured</p>
                  <h3 className="font-heading text-2xl tracking-tight sm:text-3xl">
                    {featured.name}
                  </h3>
                </div>
                <Button
                  size="lg"
                  className="h-11 gap-2 px-4 font-heading text-sm font-semibold"
                  nativeButton={false}
                  render={
                    <a
                      href={featured.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  Play live
                  <ArrowUpRight className="size-4" />
                </Button>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {featured.description}
              </p>
              <ProjectMeta project={featured} />
            </div>
          </article>
        ) : null}

        {rest.length > 0 ? (
          <ul className="mt-12 border-t border-border">
            {rest.map((project, index) => (
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
                    <ProjectMeta project={project} />
                  </div>
                  <div className="project-row__arrow relative z-10 flex items-center gap-2 text-sm font-medium text-muted-foreground pointer-events-none">
                    View
                    <ArrowUpRight className="size-4" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  )
}
