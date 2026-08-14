import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"

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
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-4xl">
        <p className="eyebrow mb-3">Contact</p>
        <h2 className="font-heading max-w-lg text-3xl tracking-tight text-balance sm:text-5xl">
          Got a project in mind? I&apos;d love to hear about it.
        </h2>
        <p className="mt-4 max-w-md text-muted-foreground">
          Collaborations, freelance, or just talking shop.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {site.socials.map((social) => {
            const Icon = icons[social.label as keyof typeof icons]
            return (
              <Button
                key={social.label}
                variant="outline"
                size="icon-lg"
                className="rounded-sm"
                nativeButton={false}
                aria-label={social.label}
                render={
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                {Icon ? <Icon className="size-4" /> : null}
              </Button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
