"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { site } from "@/lib/site"

const ease = [0.22, 1, 0.36, 1] as const

export function Projects() {
  const reduce = useReducedMotion()

  return (
    <section id="work" className="scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease }}
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
            Live products and demos — games, tools, and experiments.
          </p>
        </motion.div>

        <Separator className="mb-2" />

        <ul className="flex flex-col">
          {site.projects.map((project, index) => (
            <motion.li
              key={project.slug}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease }}
            >
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative grid gap-4 border-b border-border py-8 transition-colors duration-300 hover:bg-accent/40 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)_auto] sm:items-center sm:gap-8 sm:px-3"
              >
                <div className="absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-y-100" />

                <div>
                  <p className="font-mono mb-2 text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-heading text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary sm:text-3xl">
                    {project.name}
                  </h3>
                </div>

                <div className="space-y-3">
                  <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="font-mono text-[10px] tracking-wide uppercase"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-foreground/70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-primary">
                  Open
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
