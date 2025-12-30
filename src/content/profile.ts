export type YearMonth = `${number}-${"01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12"}`
export type SocialLabel = "GitHub" | "LinkedIn" | "Email" | "Blog" | "CV"
export type Availability = "Open to work" | "Freelance" | "Not looking"
export type SkillLevel = "Basic" | "Proficient" | "Advanced"
export type SkillGroupLabel = "Frontend" | "Backend" | "Tools" | "Platforms" | "Testing"
export type ShippingStatus = "Active" | "Paused" | "Shipped"

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

export type ProjectIcon = {
  src: string
  alt: string
}

export type Project = {
  name: string
  description: string
  tech: string[]
  link?: string
  source?: string
  featured?: boolean
  status?: ShippingStatus
  role?: string
  year?: number
  highlights?: string[]
  metrics?: string[]
  icon?: ProjectIcon
}

export type Profile = {
  name: string
  role: string
  tagline: string
  bio: string[]
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
  tagline: "Building and modernising web applications where correctness, scale, and long-term maintainability matter.",
  bio: [
    "I am a full-stack engineer with experience building, maintaining, and modernising production web applications used by real users at scale. My work spans legacy Java and Scala backends through to modern React and TypeScript frontends, with additional experience building Node.js services through independent projects.",
    "I have contributed to incremental migrations, improved developer workflows, and delivered features while working within existing systems and constraints.",
    "I care deeply about clean, maintainable code, pragmatic architecture, and sustainable development practices. Alongside hands-on engineering, I have contributed as a Scrum Master, led code quality initiatives, and helped teams improve how they plan, review, and ship work.",
    "Outside of my day-to-day role, I build personal projects and infrastructure to explore data ingestion, automation, and system design, with a focus on understanding tools deeply rather than chasing trends.",
  ],
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
        { name: "HTML", level: "Advanced" },
        { name: "CSS", level: "Proficient" },
        { name: "JavaScript", level: "Proficient" },
      ],
    },
    {
      label: "Backend",
      items: [
        { name: "Java", level: "Advanced" },
        { name: "Scala", level: "Proficient" },
        { name: "Node.js", level: "Proficient" },
        { name: "REST APIs", level: "Advanced" },
        { name: "GraphQL", level: "Basic" },
      ],
    },
    {
      label: "Tools",
      items: [
        { name: "SQL", level: "Advanced" },
        { name: "MSSQL", level: "Advanced" },
        { name: "PostgreSQL", level: "Proficient" },
        { name: "Oracle", level: "Proficient" },
        { name: "Git", level: "Advanced" },
        { name: "Azure DevOps", level: "Advanced" },
        { name: "Docker", level: "Proficient" },
        { name: "CI/CD", level: "Proficient" },
      ],
    },
    {
      label: "Testing",
      items: [
        { name: "Unit Testing", level: "Proficient" },
        { name: "Jest", level: "Proficient" },
        { name: "Integration Testing", level: "Proficient" },
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
      start: "2022-06",
      end: "2025-12",
      location: "Remote (UK)",
      type: "Full-time",
      summary:
        "Full-stack development on a document archival solution in the banking space. " +
        "Worked across a Java/Scala backend and a legacy Struts 2 frontend, later modernised to React with TypeScript.",
      highlights: [
        "One of the main developers on the Struts 2 → React rewrite, introducing TypeScript to improve maintainability and type safety",
        "Collaborated on cross-team initiatives including a shared component library",
        "Championed coding standards and documentation to improve maintainability and reduce delivery friction",
        "Took over as Scrum Master, improving ceremonies and fostering continuous improvement across the team",
        "Supported agile adoption across multiple teams and stakeholders",
      ],
      tech: ["Java", "Scala", "React", "TypeScript", "Mantine", "Struts 2", "SQL", "Azure DevOps"],
    },
    {
      company: "Capita Integrated Business Solutions",
      role: "Software Engineer",
      start: "2019-05",
      end: "2022-06",
      location: "Remote (UK)",
      type: "Full-time",
      summary:
        "Worked on an accountancy software suite, focused predominantly on the area of procurement, delivering both bespoke and productised features while the organisation transitioned toward agile ways of working.",
      highlights: [
        "Contributed to the transition from SVN to Git and improved delivery practices through DevOps adoption",
        "Assisted with upskilling and technical migration work (including Java version upgrades)",
        "Helped drive UX overhauls and delivered REST APIs across large enterprise modules",
        "Achieved a 60%+ reduction in the bug backlog through systematic fixes and quality improvements",
      ],
      tech: ["Java", "MSSQL", "Oracle", "Git", "Azure DevOps", "Tomcat", "REST APIs"],
    },
  ],
  projects: [
    {
      name: "Key Level Insights",
      description:
        "A data-driven analytics platform that ingests large volumes of Mythic+ dungeon data and transforms it into long-term performance trends across specs and key levels.",
      tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "GraphQL", "Docker"],
      link: "https://keylevelinsights.com",
      source: "https://github.com/harryc6/key-level-insights",
      featured: true,
      status: "Active",
      role: "Solo developer",
      year: 2025,
      highlights: [
        "Designed and implemented a batch ingestion and transformation pipeline to collect, normalise, and store large Mythic+ datasets",
        "Integrated OAuth-based access to third-party APIs and handled rate limits, retries, and token lifecycle management",
        "Built interactive React dashboards for filtering and visualising performance trends across time",
      ],
      metrics: [
        "Handles tens to hundreds of thousands of records per ingestion run",
        "Processes large batch datasets on a scheduled basis",
      ],
      icon: { src: "/images/kli-icon.webp", alt: "Key Level Insights icon" },
    },
    {
      name: "Redbot",
      description:
        "A Discord bot built in Java to automate and support the running of a Cyberpunk Red westmarch server, managing game workflows, persistence, and community coordination.",
      tech: ["Java", "MySQL", "Discord API"],
      source: "https://github.com/Harryc6/redbot",
      featured: true,
      status: "Shipped",
      role: "Primary developer & project lead",
      year: 2021,
      highlights: [
        "Designed and implemented a stateful Java Discord bot with MySQL-backed persistence",
        "Automated core Westmarch gameplay workflows for Night City Overdrive, reducing manual admin effort",
        "Led a small team of volunteer contributors, coordinating features, reviews, and releases",
        "Structured the codebase to accommodate evolving game rules and long-running server use",
      ],
      metrics: [
        "Actively used in the Night City Overdrive Discord server",
        "Handled long-running uptime with persistent game and server state",
      ],
      icon: { src: "/images/nco-icon.webp", alt: "Night City Overdrive icon" },
    },
    {
      name: "Proxmox MCP Integration",
      description:
        "An MCP server that exposes live Proxmox infrastructure state in a safe, structured way to support automation, operational insight, and AI-assisted documentation workflows.",
      tech: ["JavaScript", "Node.js"],
      source: "https://github.com/Harryc6/ProxmoxMCP",
      featured: true,
      status: "Shipped",
      role: "Solo",
      year: 2025,
      highlights: [
        "Implemented a read-only MCP server to query Proxmox cluster state without exposing credentials or shell access",
        "Designed to support repeatable operational workflows rather than ad-hoc scripts",
        "Used as a data source for automated documentation and runbook generation",
      ],
      metrics: [
        "Provides a single source of truth for homelab infrastructure state",
        "Reduces time to answer operational questions from minutes to seconds",
      ],
    },
    {
      name: "Obsidian + AI Documentation Automation",
      description:
        "Automation workflow for maintaining homelab and project documentation (agents, runbooks, structured notes).",
      tech: ["Markdown", "TypeScript", "Linux"],
      featured: false,
      status: "Active",
      role: "Solo",
      year: 2025,
      highlights: [
        "Focused on turning infrastructure and project work into maintainable documentation",
        "Structured approach with agents and repeatable templates",
      ],
    },
    {
      name: "Homelab Platform",
      description:
        "Self-hosted environment for experimentation and learning: virtualisation, services, and automation to support side projects.",
      tech: ["Proxmox", "Nginx", "Linux", "Docker", "Networking"],
      featured: false,
      status: "Active",
      role: "Solo",
      year: 2024,
      highlights: [
        "Used for running services, testing deployments, and experimenting with automation",
        "Designed as a practical sandbox for real-world ops and reliability habits",
      ],
    },
  ],
}
