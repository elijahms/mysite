export type Project = {
  name: string
  slug: string
  description: string
  stack: readonly string[]
  href: string
  highlights?: readonly string[]
  repo?: string
}

export const site = {
  name: "Elijah Silverman",
  title: "Full Stack Developer",
  tagline:
    "I build web apps that feel fast in the hand. Double Down Trivia is the clearest example: rooms, wagers, custom packs, live on phones.",
  email: "elijahmsilverman@gmail.com",
  resumeUrl: "/resume.pdf",
  year: 2026,
  socials: [
    { label: "GitHub", href: "https://github.com/elijahms" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/elijahsilverman/" },
    { label: "X", href: "https://x.com/elijahsilverman" },
    { label: "Email", href: "mailto:elijahmsilverman@gmail.com" },
  ],
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "Firebase",
    "AWS",
    "SQL / NoSQL",
  ],
  projects: [
    {
      name: "Double Down Trivia",
      slug: "double-down-trivia",
      description:
        "Real-time multiplayer trivia. Join with a 4-letter code, wager on every answer, run custom packs, and climb a win-rate board. Built for phones first.",
      highlights: [
        "Live Firestore sync",
        "Point wagers",
        "Custom packs",
        "Host controls",
      ],
      stack: ["Next.js", "TypeScript", "Firebase", "Tailwind"],
      href: "https://doubledowntrivia.web.app",
    },
    {
      name: "Treadlite",
      slug: "treadlite",
      description:
        "A travel planner that helps people cut carbon without cutting the trip short.",
      stack: ["React Native", "Express", "MongoDB"],
      href: "https://www.loom.com/share/ae32fcb31548443dbf038873b9d6cf8d",
      repo: "https://github.com/elijahms/treadlite",
    },
    {
      name: "Stuck in Space",
      slug: "stuck-in-space",
      description:
        "A browser arcade shooter with tight controls and that just-one-more-run pull.",
      stack: ["JavaScript", "React", "Ruby"],
      href: "https://www.loom.com/share/8db58058dc9a4bc09161d47fb4a2b199",
      repo: "https://github.com/elijahms/stuck-in-space",
    },
  ] satisfies readonly Project[],
} as const
