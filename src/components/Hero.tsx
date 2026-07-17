"use client"

import { m, useReducedMotion } from "framer-motion"
import { ArrowUpRight, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"
import { easeOut, fadeUp, stagger } from "@/lib/motion"

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative flex min-h-screen-safe flex-col justify-center px-6 pb-20 pt-28 sm:px-10 lg:px-16">
      <m.div
        className="mx-auto w-full max-w-6xl"
        initial={reduce ? false : "hidden"}
        animate="visible"
        variants={stagger}
      >
        <m.p
          className="font-mono mb-6 text-xs tracking-[0.22em] text-muted-foreground uppercase"
          variants={fadeUp}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          Full stack · Creative tech
        </m.p>

        <m.h1
          className="font-heading text-[clamp(3.25rem,12vw,8.5rem)] leading-[0.92] font-semibold tracking-tight text-foreground"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          {site.name}
        </m.h1>

        <m.div
          className="mt-5 h-px w-full origin-left bg-gradient-to-r from-primary via-signal to-transparent"
          initial={reduce ? false : { scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.28, ease: easeOut }}
        />

        <m.p
          className="mt-8 max-w-xl text-lg text-muted-foreground sm:text-xl"
          variants={fadeUp}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          <span className="font-medium text-foreground">{site.title}</span>
          <br />
          <span className="mt-3 block text-balance">{site.tagline}</span>
        </m.p>

        <m.div
          className="mt-10 flex flex-wrap items-center gap-3"
          variants={fadeUp}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          <Button
            size="lg"
            className="h-11 gap-2 px-5 text-sm transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0"
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
            <ArrowUpRight className="size-4 opacity-70 transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-11 px-5 text-sm transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0"
            render={<a href="#work" />}
          >
            See work
          </Button>
        </m.div>
      </m.div>
    </section>
  )
}
