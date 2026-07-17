"use client"

import { m, useReducedMotion } from "framer-motion"
import { site } from "@/lib/site"
import { easeOut, fadeUp, stagger, viewportOnce } from "@/lib/motion"

export function Skills() {
  const reduce = useReducedMotion()

  return (
    <section className="px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <m.div
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          <m.p
            className="font-mono mb-6 text-xs tracking-[0.22em] text-muted-foreground uppercase"
            variants={fadeUp}
            transition={{ duration: 0.45, ease: easeOut }}
          >
            Stack
          </m.p>
          <ul className="flex flex-wrap gap-x-3 gap-y-3">
            {site.skills.map((skill) => (
              <m.li
                key={skill}
                className="skill-chip font-mono rounded-full border border-border bg-background/70 px-3.5 py-1.5 text-xs tracking-wide text-foreground/80"
                variants={fadeUp}
                transition={{ duration: 0.4, ease: easeOut }}
              >
                {skill}
              </m.li>
            ))}
          </ul>
        </m.div>
      </div>
    </section>
  )
}
