"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Github, Instagram, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { site } from "@/lib/site"

const ease = [0.22, 1, 0.36, 1] as const

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
  Instagram: Instagram,
  Email: Mail,
} as const

export function Contact() {
  const reduce = useReducedMotion()

  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          className="rounded-2xl border border-border bg-card/60 px-6 py-12 backdrop-blur-sm sm:px-10 sm:py-16"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease }}
        >
          <p className="font-mono mb-3 text-xs tracking-[0.22em] text-muted-foreground uppercase">
            Connect
          </p>
          <h2 className="font-heading max-w-lg text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            Let&apos;s build something worth shipping.
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Open to collaborations, interesting problems, and good conversations.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {site.socials.map((social, index) => {
              const Icon = icons[social.label as keyof typeof icons]
              return (
                <motion.div
                  key={social.label}
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.05 * index, ease }}
                >
                  <Tooltip>
                    <TooltipTrigger
                      delay={0}
                      render={
                        <Button
                          variant="outline"
                          size="icon-lg"
                          className="transition-transform duration-300 hover:-translate-y-0.5"
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
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
