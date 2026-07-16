"use client"

import { motion, useReducedMotion } from "framer-motion"
import { site } from "@/lib/site"

const ease = [0.22, 1, 0.36, 1] as const

export function Skills() {
  const reduce = useReducedMotion()

  return (
    <section className="px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease }}
        >
          <p className="font-mono mb-6 text-xs tracking-[0.22em] text-muted-foreground uppercase">
            Toolkit
          </p>
          <ul className="flex flex-wrap gap-x-3 gap-y-3">
            {site.skills.map((skill, index) => (
              <motion.li
                key={skill}
                className="font-mono rounded-full border border-border bg-background/70 px-3.5 py-1.5 text-xs tracking-wide text-foreground/80"
                initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.03, ease }}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
