export const site = {
  name: "Elijah Silverman",
  title: "Full Stack Developer & Creative Technologist",
  tagline:
    "I build beautiful, intuitive, and performant web applications — with a sharp eye for craft and a love of solving hard problems.",
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
      label: "Instagram",
      href: "https://www.instagram.com/elijahsilverman",
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
        "Real-time multiplayer trivia — host live events, custom packs, and instant feedback.",
      stack: ["React", "Firebase", "Node.js"],
      href: "https://doubledowntrivia.web.app",
    },
    {
      name: "Treadlite",
      slug: "treadlite",
      description:
        "Sustainable travel planning that helps people shrink their carbon footprint.",
      stack: ["React Native", "Express", "MongoDB"],
      href: "https://www.loom.com/share/ae32fcb31548443dbf038873b9d6cf8d",
    },
    {
      name: "Stuck in Space",
      slug: "stuck-in-space",
      description: "An arcade-style space shooter built for the browser.",
      stack: ["JavaScript", "HTML5 Canvas"],
      href: "https://www.loom.com/share/8db58058dc9a4bc09161d47fb4a2b199",
    },
  ],
} as const
