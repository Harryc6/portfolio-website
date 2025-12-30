import { FC } from "react"
import { Project, ProjectIcon } from "@/content/profile"
import Image from "next/image"

const ProjectCard: FC<Project> = (project) => {
  return (
    <article
      className={
        "rounded-xl border border-cyber-cyan/20 bg-black/35 p-6 flex flex-col gap-2 " +
        "shadow-[0_0_12px_rgba(34,211,238,0.06)] relative " +
        "transition hover:border-cyber-magenta/30 hover:shadow-[0_0_22px_rgba(255,61,242,0.12)]"
      }
    >
      <Icon icon={project.icon} />
      <Header title={project.name} description={project.description} />
      <Tech tech={project.tech} />
      <Highlights highlights={project.highlights} />
      <Metrics metrics={project.metrics} />
      <Footer {...project} />
    </article>
  )
}

const Icon: FC<{ icon?: ProjectIcon }> = ({ icon }) => {
  return (
    icon && (
      <div className="absolute right-3 top-3 h-9 w-9 rounded-full border border-cyber-cyan/30 bg-black/60 backdrop-blur-sm">
        <Image
          src={icon.src}
          alt={icon.alt}
          width={32}
          height={32}
          className="h-full w-full rounded-full object-contain p-1"
        />
      </div>
    )
  )
}

const Header: FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div>
      <h3 className={"text-2xl font-semibold text-white"}>{title}</h3>
      <p className={"text-white/75 text-sm"}>{description}</p>
    </div>
  )
}

const Tech: FC<{ tech: string[] }> = ({ tech }) => {
  return (
    tech.length > 0 && (
      <div className={"flex flex-wrap gap-2"}>
        {tech.map((techItem) => (
          <TechTag name={techItem} key={techItem} />
        ))}
      </div>
    )
  )
}

const TechTag: FC<{ name: string }> = ({ name }) => {
  return (
    <span className={"rounded-full border border-cyber-cyan/25 bg-black/50 px-3 py-1 text-xs text-cyber-cyan/70"}>
      {name}
    </span>
  )
}

const Highlights: FC<{ highlights?: string[] }> = ({ highlights }) => {
  return (
    highlights && (
      <ul className={"space-y-1 text-sm text-white/70"}>
        {highlights.map((highlight) => (
          <li key={highlight} className={"flex gap-2"}>
            <span className={"mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-cyan/60 shrink-0"} />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    )
  )
}

const Metrics: FC<{ metrics?: string[] }> = ({ metrics }) => {
  return (
    metrics && (
      <ul className={"flex flex-wrap gap-2 text-white/70 text-xs"}>
        {metrics.map((metric) => (
          <li
            className={"rounded-lg border border-cyber-magenta/50 bg-black/40 px-2.5 py-1 text-white/80"}
            key={metric}
          >
            {metric}
          </li>
        ))}
      </ul>
    )
  )
}

const Footer: FC<Project> = (project) => {
  return (
    <div className={"mt-2 flex gap-4 text-sm"}>
      {project.link && (
        <a
          href={project.link}
          className={"text-cyber-cyan hover:text-cyber-magenta transition-colors"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          Live
        </a>
      )}
      {project.source && (
        <a
          href={project.source}
          className={"text-white/70 hover:text-cyber-cyan transition-colors"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          GitHub
        </a>
      )}
      {project.status && (
        <span
          className={
            "ml-auto rounded-full border border-cyber-magenta/40 bg-black/40 px-2 py-0.5 text-xs text-cyber-magenta/80"
          }
        >
          {project.status}
        </span>
      )}
    </div>
  )
}

export default ProjectCard
