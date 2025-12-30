import type { FC } from "react"
import { profile } from "@/content/profile"
import ProjectCard from "@/components/projectCard"

const ProjectSection: FC = () => {
  return (
    <section id={"projects"} className={"scroll-mt-22 sm:scroll-mt-18 mt-16 sm:mt-24 mx-auto max-w-5xl"}>
      <h2 className={"text-3xl sm:text-4xl display-heading text-white mb-8"}>Selected Projects</h2>
      <div className={"grid gap-4 sm:gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"}>
        {profile.projects
          .filter((project) => project.featured)
          .map((project) => (
            <ProjectCard {...project} key={project.name} />
          ))}
      </div>
    </section>
  )
}

export default ProjectSection
