export const site = {
  name: "Elijah Silverman",
  role: "Software engineer and portfolio analyst",
  location: "New York",
  description:
    "Elijah Silverman builds web apps people actually use: real-time multiplayer trivia, letters that travel on a live map, a volunteer matchmaking platform, and the internal tools behind a global asset manager.",
  email: "hello@elijahsilverman.com",
  resume: "/resume",
  now: {
    title: "Portfolio Analyst, Global Fixed Income",
    org: "Lazard Asset Management",
  },
  socials: [
    { label: "GitHub", href: "https://github.com/elijahms" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/elijahsilverman/" },
    { label: "X", href: "https://x.com/elijahsilverman" },
  ],
} as const

export type Role = {
  start: string
  end: string
  title: string
  org: string
  place: string
  summary: string
}

/** Newest first. */
export const path: readonly Role[] = [
  {
    start: "2024",
    end: "Now",
    title: "Portfolio Analyst, Global Fixed Income",
    org: "Lazard Asset Management",
    place: "New York",
    summary:
      "Sovereign and supranational debt across many markets. I sit between the portfolio managers and the systems they depend on, so the numbers on screen are the numbers that are true.",
  },
  {
    start: "2022",
    end: "2024",
    title: "Full Stack Software Engineer",
    org: "Lazard Asset Management",
    place: "New York",
    summary:
      "Built and scaled the in-house apps 200+ analysts and portfolio managers open every morning. Led the Angular and Node rebuild of legacy financial tools and wrote the AG Grid data views they live in.",
  },
  {
    start: "2020",
    end: "2021",
    title: "Business Strategy Consultant",
    org: "YYA Consulting & Management",
    place: "Tel Aviv",
    summary:
      "Wrote proposals alongside a Big Four firm, designed deliverables for teams of seven-plus specialists, and ran onboarding for new hires.",
  },
]

export const education = [
  {
    school: "Reichman University (IDC Herzliya)",
    detail: "BA, Business Administration and Entrepreneurship. 4.0 GPA, magna cum laude.",
  },
  {
    school: "Flatiron School",
    detail: "Full-stack web development: Ruby on Rails, JavaScript, React.",
  },
] as const

export const toolbox = [
  "TypeScript",
  "React",
  "Next.js",
  "Angular",
  "Node.js",
  "Python",
  "SQL",
  "Firebase",
  "Postgres",
  "AWS",
  "Bloomberg Terminal",
] as const

export const offline = [
  "Black belt, Shotokan karate",
  "PADI open water diver",
  "Red Cross advanced first aid",
] as const
