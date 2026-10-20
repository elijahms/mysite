import { resume } from "@/data/resume"

/** The résumé as plain Markdown, for /resume.md and the copy button. */
export function resumeMarkdown(): string {
  const out: string[] = []
  const push = (...lines: string[]) => out.push(...lines)

  push(`# ${resume.name}`, "", `${resume.headline}. ${resume.location}.`, "")
  push(resume.links.map((l) => `[${l.label}](${l.href})`).join(" | "), "")

  push("## Summary", "", resume.summary, "")

  push("## Experience", "")
  for (const job of resume.experience) {
    push(`### ${job.org}, ${job.place}`, "")
    for (const role of job.roles) {
      push(`**${role.title}** | ${role.start} to ${role.end}`, "")
      push(...role.bullets.map((b) => `- ${b}`), "")
    }
  }

  push("## Projects", "")
  for (const project of resume.projects) {
    push(`### [${project.name}](${project.href})`, "", `${project.summary} *${project.stack.join(", ")}*`, "")
    push(...project.bullets.map((b) => `- ${b}`), "")
  }

  push("## Skills", "")
  push(...resume.skills.map((group) => `- **${group.label}:** ${group.items.join(", ")}`), "")

  push("## Education", "")
  for (const school of resume.education) {
    push(`**${school.school}**, ${school.place}  `, `${school.degree}. ${school.detail}.`, "")
  }

  push("## Certificates", "", ...resume.certificates.map((c) => `- ${c}`), "")

  return out.join("\n")
}
