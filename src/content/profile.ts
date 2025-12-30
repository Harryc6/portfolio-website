export type YearMonth = `${number}-${"01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12"}`
export type SocialLabel = "GitHub" | "LinkedIn" | "Email" | "Blog" | "CV"
export type Availability = "Open to work" | "Freelance" | "Not looking"
export type SkillLevel = "Basic" | "Proficient" | "Advanced"
export type SkillGroupLabel = "Frontend" | "Backend" | "Tools" | "Platforms" | "Testing"

export type Social = {
  label: SocialLabel
  href: string
  handle?: string
  icon?: string
}

export type Skill = {
  name: string
  level: SkillLevel
}

export type SkillGroup = {
  label: SkillGroupLabel
  items: Skill[]
}

export type Experience = {
  company: string
  role: string
  start: YearMonth
  end?: YearMonth
  location?: string
  type?: "Full-time" | "Contract" | "Freelance"
  summary: string
  highlights?: string[]
  tech?: string[]
}

export type Project = {
  name: string
  description: string
  tech: string[]
  link?: string
  source?: string
  featured?: boolean
  status?: "Active" | "Paused" | "Shipped"
  role?: string
  year?: number
  highlights?: string[]
  metrics?: string[]
  images?: { src: string; alt: string }[]
}

export type Profile = {
  name: string
  role: string
  tagline: string
  bio: string
  email: string
  location: string
  availability: Availability
  meta: {
    siteTitle: string
    description: string
  }
  socials: Social[]
  skills: SkillGroup[]
  experience: Experience[]
  projects: Project[]
}

export const profile: Profile = {
  name: "Harry Carr",
  role: "Full-stack Engineer",
  tagline: "Designing and maintaining scalable web applications in real production environments.",
  bio: "Short paragraph about you…",
  email: "harrycarr64@hotmail.com",
  location: "Bedford, UK",
  availability: "Open to work",

  meta: {
    siteTitle: "Harry Carr | Full-stack Engineer",
    description:
      "Full-stack engineer specialising in Java/Scala backends and React/TypeScript frontends. Focused on clean UX, maintainability, and modernising legacy systems.",
  },

  socials: [
    { label: "GitHub", href: "https://github.com/Harryc6" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/harry-carr-53a943122/" },
    { label: "Email", href: "mailto:harrycarr64@hotmail.com" },
  ],
  skills: [
    {
      label: "Frontend",
      items: [
        { name: "React", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Next.js", level: "Proficient" },
        { name: "Mantine", level: "Proficient" },
      ],
    },
    {
      label: "Backend",
      items: [
        { name: "Java", level: "Advanced" },
        { name: "Scala", level: "Proficient" },
        { name: "Node.js", level: "Proficient" },
      ],
    },
    {
      label: "Tools",
      items: [
        { name: "PostgreSQL", level: "Proficient" },
        { name: "MSSQL", level: "Advanced" },
        { name: "Oracle", level: "Proficient" },
        { name: "Docker", level: "Proficient" },
        { name: "Git", level: "Advanced" },
        { name: "Azure DevOps", level: "Advanced" },
      ],
    },
    {
      label: "Testing",
      items: [
        { name: "Jest", level: "Proficient" },
        { name: "Playwright", level: "Basic" },
      ],
    },
    {
      label: "Platforms",
      items: [
        { name: "Azure", level: "Basic" },
        { name: "Linux", level: "Proficient" },
      ],
    },
  ],
  experience: [
    {
      company: "Formpipe",
      role: "Full-stack Engineer",
      start: "2019-08",
      end: "2024-12",
      location: "UK (remote)",
      type: "Full-time",
      summary:
        "Worked across Java/Scala backends and a modernising React/TypeScript frontend on enterprise document management systems.",
      highlights: [
        "Modernised legacy Struts UI into React",
        "Led PR quality workshops and sprint improvements",
        "Acted as Scrum Master alongside engineering role",
      ],
      tech: ["Java", "Scala", "React", "TypeScript", "Mantine", "MSSQL", "Oracle", "Azure DevOps"],
    },
  ],
  projects: [
    {
      name: "Key Level Insights",
      description: "A data-driven dashboard analysing Mythic+ dungeon performance using data from Blizzard's API.",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "GraphQL"],
      source: "https://github.com/harryc6/key-level-insights",
      featured: true,
      status: "Active",
      role: "Solo",
      year: 2025,
      highlights: ["Batch ingestion and transformation pipeline", "UI dashboards for spec and key-level trends"],
      metrics: ["Handles large batch datasets", "Designed for trend analysis over time"],
      // images: [{ src: "/images/kli-1.png", alt: "Key Level Insights dashboard" }],
    },
  ],
}
