import type { FC } from "react"

const AboutSection: FC = () => {
  return (
    <section id={"about"} className={"scroll-mt-22 sm:scroll-mt-18 mt-16 sm:mt-24 mx-auto max-w-5xl"}>
      <h2 className={"text-3xl sm:text-4xl display-heading text-white mb-8"}>About Me</h2>
      <p className="max-w-3xl text-lg sm:text-xl leading-relaxed text-white/80">
        I am a full-stack engineer with experience building, maintaining, and modernising production web applications
        used by real users at scale.
        <br />
        <br />
        My work spans legacy Java and Scala backends through to modern React and TypeScript frontends. I have
        contributed to incremental migrations, improved developer workflows, and delivered features while working within
        existing systems and constraints.
        <br />
        <br />
        I care deeply about clean, maintainable code, pragmatic architecture, and sustainable development practices.
        Alongside hands-on engineering, I have contributed as a Scrum Master, led code quality initiatives, and helped
        teams improve how they plan, review, and ship work.
        <br />
        <br />
        Outside of my day-to-day role, I build personal projects and infrastructure to explore data ingestion,
        automation, and system design, with a focus on understanding tools deeply rather than chasing trends.
      </p>
    </section>
  )
}

export default AboutSection
