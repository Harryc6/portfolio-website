import type { FC } from "react"

const ProjectSection: FC = () => {
  return (
    <section id={"projects"} className={"scroll-mt-22 sm:scroll-mt-18 mt-16 sm:mt-24 mx-auto max-w-5xl"}>
      <h2 className={"text-3xl sm:text-4xl display-heading text-white mb-8"}>Selected Projects</h2>
      <div className={"grid gap-8 sm:gap-12"}>{/* Project cards would go here */}</div>
    </section>
  )
}

export default ProjectSection
