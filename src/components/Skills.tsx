import { site } from "@/lib/site"

export function Skills() {
  return (
    <section className="px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-4xl">
        <p className="eyebrow mb-6">Stack</p>
        <ul className="flex flex-wrap gap-2">
          {site.skills.map((skill) => (
            <li
              key={skill}
              className="skill-chip font-mono rounded-sm border border-border px-3 py-1.5 text-[11px] tracking-wide text-foreground/80"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
