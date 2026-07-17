"use client"

import { m, useReducedMotion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { site } from "@/lib/site"
import { easeOut, fadeUp, stagger, viewportOnce } from "@/lib/motion"

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
)

const icons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  X: XIcon,
  Email: Mail,
} as const

export function Contact() {
  const reduce = useReducedMotion()

  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <m.div
          className="rounded-2xl border border-border bg-card/80 px-6 py-12 sm:bg-card/60 sm:px-10 sm:py-16 sm:backdrop-blur-sm"
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          <m.p
            className="font-mono mb-3 text-xs tracking-[0.22em] text-muted-foreground uppercase"
            variants={fadeUp}
            transition={{ duration: 0.45, ease: easeOut }}
          >
            Contact
          </m.p>
          <m.h2
            className="font-heading max-w-lg text-3xl font-semibold tracking-tight text-balance sm:text-5xl"
            variants={fadeUp}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            Got a project in mind? I&apos;d love to hear about it.
          </m.h2>
          <m.p
            className="mt-4 max-w-md text-muted-foreground"
            variants={fadeUp}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            Reach out for collaborations, freelance work, or just to talk shop.
          </m.p>

          <m.div
            className="mt-8 flex flex-wrap gap-2"
            variants={stagger}
          >
            {site.socials.map((social) => {
              const Icon = icons[social.label as keyof typeof icons]
              return (
                <m.div
                  key={social.label}
                  variants={fadeUp}
                  transition={{ duration: 0.35, ease: easeOut }}
                >
                  <Tooltip>
                    <TooltipTrigger
                      render={
                        <Button
                          variant="outline"
                          size="icon-lg"
                          className="transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0"
                          nativeButton={false}
                          render={
                            <a
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={social.label}
                            />
                          }
                        >
                          {Icon ? <Icon className="size-4" /> : null}
                        </Button>
                      }
                    />
                    <TooltipContent>{social.label}</TooltipContent>
                  </Tooltip>
                </m.div>
              )
            })}
          </m.div>
        </m.div>
      </div>
    </section>
  )
}
