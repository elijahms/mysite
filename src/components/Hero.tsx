"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative flex min-h-dvh flex-col justify-center px-6 pb-20 pt-28 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <motion.p
          className="font-mono mb-6 text-xs tracking-[0.22em] text-muted-foreground uppercase"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          Portfolio
        </motion.p>

        <motion.h1
          className="font-heading text-[clamp(3.25rem,12vw,8.5rem)] leading-[0.92] font-semibold tracking-tight text-foreground"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease }}
        >
          {site.name}
        </motion.h1>

        <motion.div
          className="mt-5 h-px w-full origin-left bg-gradient-to-r from-primary via-signal to-transparent"
          initial={reduce ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease }}
        />

        <motion.p
          className="mt-8 max-w-xl text-lg text-muted-foreground sm:text-xl"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.45, ease }}
        >
          <span className="font-medium text-foreground">{site.title}</span>
          <br />
          <span className="mt-3 block text-balance">{site.tagline}</span>
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-3"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease }}
        >
          <Button
            size="lg"
            className="h-11 gap-2 px-5 text-sm"
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
            className="h-11 px-5 text-sm"
            render={<a href="#work" />}
          >
            See work
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
