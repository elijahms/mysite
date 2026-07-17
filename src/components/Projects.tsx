"use client"

import { m, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { site } from "@/lib/site"
import { easeOut, fadeUp, viewportOnce } from "@/lib/motion"

export function Projects() {
  const reduce = useReducedMotion()

  return (
    <section id="work" className="scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <m.div
          className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          <div>
            <p className="font-mono mb-2 text-xs tracking-[0.22em] text-muted-foreground uppercase">
              Selected work
            </p>
            <h2 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              Projects
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground text-balance">
            A few things I&apos;ve built end to end — live apps, demos, and the
            occasional game.
          </p>
        </m.div>

        <Separator className="mb-2" />

        <ul className="flex flex-col">
          {site.projects.map((project, index) => {
            const repo = "repo" in project ? project.repo : undefined

            return (
              <m.li
                key={project.slug}
                initial={reduce ? false : "hidden"}
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                transition={{
                  duration: 0.5,
                  delay: reduce ? 0 : index * 0.08,
                  ease: easeOut,
                }}
                className="project-row group relative border-b border-border transition-colors hover:bg-accent/40"
              >
                <div className="project-row__bar absolute inset-y-0 left-0 w-0.5 bg-primary" />

                <div className="relative grid gap-4 py-8 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)_auto] sm:items-center sm:gap-8 sm:px-3">
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
                    <h3 className="font-heading text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary sm:text-3xl">
                      {project.name}
                    </h3>
                  </div>

                  <div className="relative z-10 space-y-3 pointer-events-none">
                    <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.stack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="font-mono text-[10px] tracking-wide uppercase"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {repo ? (
                        <a
                          href={repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono pointer-events-auto ml-1 text-[10px] tracking-wide text-muted-foreground uppercase underline-offset-4 transition-colors hover:text-primary hover:underline"
                        >
                          Source
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <div className="project-row__arrow relative z-10 flex items-center gap-2 text-sm font-medium text-foreground/70 pointer-events-none">
                    View
                    <ArrowUpRight className="size-4" />
                  </div>
                </div>
              </m.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
