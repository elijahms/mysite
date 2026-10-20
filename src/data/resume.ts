import { site } from "./site"

export type ResumeRole = {
  title: string
  start: string
  end: string
  bullets: readonly string[]
}

export type ResumeJob = {
  org: string
  place: string
  roles: readonly ResumeRole[]
}

export type ResumeProject = {
  name: string
  href: string
  summary: string
  stack: readonly string[]
  bullets: readonly string[]
}

/**
 * The résumé, as data. The /resume page, /resume.md and the PDF are all
 * generated from this one object, so edit here and everything stays in sync.
 */
export const resume = {
  name: site.name,
  headline: "Software engineer and portfolio analyst",
  location: "New York, NY",
  links: [
    { label: site.email, href: `mailto:${site.email}` },
    { label: "github.com/elijahms", href: "https://github.com/elijahms" },
    { label: "linkedin.com/in/elijahsilverman", href: "https://www.linkedin.com/in/elijahsilverman/" },
  ],
  summary:
    "Engineer who moved to the investment side. Two years building and scaling the in-house applications Lazard Asset Management's analysts and portfolio managers rely on, now analyzing sovereign and supranational debt on its Global Fixed Income team. Outside work I build real-time web apps end to end, from data model to the last animation.",

  experience: [
    {
      org: "Lazard Asset Management",
      place: "New York, NY",
      roles: [
        {
          title: "Portfolio Analyst, Global Fixed Income",
          start: "Jun 2024",
          end: "Present",
          bullets: [
            "Manage and analyze global bond portfolios, specializing in sovereign and supranational debt across multiple jurisdictions.",
            "Work with portfolio managers to execute investment strategies, using proprietary financial models to identify market opportunities and risks.",
            "Bridge technical infrastructure and investment teams, ensuring data integrity and real-time visibility into global fixed income markets.",
          ],
        },
        {
          title: "Full Stack Software Engineer",
          start: "Jun 2022",
          end: "Jun 2024",
          bullets: [
            "Engineered and scaled in-house applications critical to the daily operations of 200+ analysts and portfolio managers.",
            "Led the full-stack rebuild of legacy financial tools in Angular and Node.js, improving system efficiency and user engagement.",
            "Built reusable UI components and complex data visualization tools (AG Grid) to streamline global data flows.",
            "Maintained security best practices and shipped features in legacy C# and .NET codebases.",
          ],
        },
      ],
    },
    {
      org: "YYA Consulting & Management",
      place: "Tel Aviv, Israel",
      roles: [
        {
          title: "Business Strategy Consultant",
          start: "Nov 2020",
          end: "Aug 2021",
          bullets: [
            "Partnered with a Big Four firm to develop client proposals and business development, resulting in more follow-up contracts.",
            "Designed high-impact deliverables for cross-functional teams of 7+ experts, improving client retention and re-signing rates.",
            "Ran end-to-end onboarding and first performance reviews for new hires, aligned with firm-wide goals.",
          ],
        },
      ],
    },
  ] satisfies readonly ResumeJob[],

  projects: [
    {
      name: "Double Down Trivia",
      href: "https://doubledowntrivia.web.app",
      summary: "Real-time multiplayer trivia where every answer is a wager.",
      stack: ["Next.js", "React 19", "TypeScript", "Firebase"],
      bullets: [
        "Used React 19's useOptimistic and startTransition for instant UI feedback, with a game loop built on Context and custom hooks that keeps multi-phase state in sync across concurrent clients.",
        "Built the real-time backend on Cloud Functions and Firestore, using atomic transactions to keep scores consistent and eliminate race conditions during simultaneous scoring.",
        "Wrote a typo-tolerant answer matcher using Levenshtein distance, plus error handling with exponential backoff so sessions survive unreliable networks.",
      ],
    },
    {
      name: "Snail Mail",
      href: "https://snailmail-post.vercel.app",
      summary: "Letters that travel at the speed of their carrier, from an hour by pigeon to a year by snail, tracked on a live map.",
      stack: ["Next.js", "Vercel Workflow", "Postgres", "Drizzle", "AI SDK"],
      bullets: [
        "Modeled each letter as a durable Vercel Workflow run that sleeps until arrival, then delivers and notifies, with a daily cron sweep as a safety net.",
        "Rendered routes on the server with d3-geo and Natural Earth data, served as cacheable SVG layers themed with CSS masks.",
        "Built handwritten letters two ways: photo uploads of real pages, or an image model (via AI Gateway) tracing typed text onto chosen stationery.",
        "Hardened it for strangers with BotID, Postgres-backed rate limits, blocking, reporting and an 18+ pen-pal directory, in five languages.",
      ],
    },
    {
      name: "MoDate",
      href: "https://modate.org",
      summary: "Free volunteer matchmaking for the Modern Orthodox community, with a workspace and iPhone app for the matchmakers.",
      stack: ["React 19", "Vite", "Firebase", "SwiftUI"],
      bullets: [
        "Built a scoring engine for candidate pairs (age range, religious level, Kohen rules, location, aliyah plans) with admin-tunable rules, ported to Swift so web and iOS rank identically.",
        "Shipped MOSwipe, a swipe and ranked-list interface for proposing matches, on the web and in a native SwiftUI app.",
        "Used Firestore live listeners with a multi-tab offline cache, transactional claims and handoffs, and push, email and WhatsApp reminders for volunteers.",
        "Added AI screening of new signups and AI match analysis through xAI's batch API.",
      ],
    },
  ] satisfies readonly ResumeProject[],

  skills: [
    {
      label: "Engineering",
      items: ["TypeScript", "JavaScript", "React", "Next.js", "Angular", "Vite", "Node.js", "Python", "SQL", "Firebase", "AWS", "REST API design"],
    },
    {
      label: "Finance and strategy",
      items: ["Global fixed income analysis", "Portfolio management", "Bloomberg Terminal", "Market research", "Business development", "Proposal development", "Client relations"],
    },
  ],

  education: [
    {
      school: "Reichman University (IDC Herzliya)",
      place: "Tel Aviv, Israel",
      degree: "BA, Business Administration and Entrepreneurship",
      detail: "GPA 4.0, magna cum laude, Dean's List",
    },
    {
      school: "Flatiron School",
      place: "New York, NY",
      degree: "Full Stack Web Development",
      detail: "Ruby on Rails and JavaScript/React program",
    },
  ],

  certificates: ["Black belt, Shotokan karate", "PADI Open Water Diver", "Red Cross Advanced First Aid"],
} as const

export const resumeSections = [
  { id: "summary", label: "Summary" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
] as const
