export const site = {
  name: "Elijah Silverman",
  title: "Full Stack Developer & Creative Technologist",
  tagline:
    "I design and ship web apps that feel fast and intentional — from real-time multiplayer games like Double Down Trivia to tools people actually enjoy using.",
  email: "elijahmsilverman@gmail.com",
  resumeUrl: "/resume.pdf",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/elijahms",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/elijahsilverman/",
    },
    {
      label: "X",
      href: "https://x.com/elijahsilverman",
    },
    {
      label: "Email",
      href: "mailto:elijahmsilverman@gmail.com",
    },
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
        "Real-time multiplayer trivia with room codes, point wagers, custom question packs, and live leaderboards — built for phones first.",
      stack: ["Next.js", "Firebase", "TypeScript"],
      href: "https://doubledowntrivia.web.app",
      repo: "https://github.com/elijahms/trivia",
    },
    {
      name: "Treadlite",
      slug: "treadlite",
      description:
        "A travel planner that helps people cut carbon without cutting the trip short.",
      stack: ["React Native", "Express", "MongoDB"],
      href: "https://www.loom.com/share/ae32fcb31548443dbf038873b9d6cf8d",
    },
    {
      name: "Stuck in Space",
      slug: "stuck-in-space",
      description:
        "A browser arcade shooter with tight controls and that classic just-one-more-run pull.",
      stack: ["JavaScript", "HTML5 Canvas"],
      href: "https://www.loom.com/share/8db58058dc9a4bc09161d47fb4a2b199",
    },
  ],
} as const
