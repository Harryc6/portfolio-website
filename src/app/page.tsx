import type { FC } from "react"

const Home: FC = () => {
    return (
    <>
      <Header />
      <main className={"px-6 py-16 sm:py-24"}>
        <HeroSection />
        <ProjectSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  )
}

const Header: FC = () => {
  return (
    <header className={"px-6 pt-12 sm:pt-8 mx-auto sticky top-0 bg-black/40 backdrop-blur-[1px] z-10"}>
      <nav className={"flex justify-end mb-6 mx-auto sm:mb-12 max-w-5xl"}>
        <a href={"#projects"} className={"ml-8 text-xl sm:text-lg text-white/80 hover:text-cyber-cyan transition"}>
          Projects
        </a>
        <a href={"#about"} className={"ml-8 text-xl sm:text-lg text-white/80 hover:text-cyber-cyan transition"}>
          About
        </a>
        <a href={"#contact"} className={"ml-8 text-xl sm:text-lg text-white/80 hover:text-cyber-cyan transition"}>
          Contact
        </a>
      </nav>
    </header>
  )
}

const HeroSection: FC = () => {
  return (
    <section className={"mx-auto max-w-5xl"}>
      <p
        className={"text-sm tracking-[0.2em] uppercase glitched-text text-cyber-cyan/80"}
        data-text={"Full-stack developer"}
      >
        Full-stack developer
      </p>
      <div className={"cyber-tile"}>
        <h1 className={"text-5xl sm:text-7xl display-heading text-white"}>Harry Carr</h1>
      </div>
      <p className="mt-2 max-w-2xl text-lg sm:text-xl leading-relaxed text-white/80">
        Designing and maintaining scalable web applications in real production environments.
      </p>
    </section>
  )
}

const ProjectSection: FC = () => {
  return (
    <section id={"projects"} className={"mt-16 sm:mt-24 mx-auto max-w-5xl"}>
      <h2 className={"text-3xl sm:text-4xl display-heading text-white mb-8"}>Selected Projects</h2>
      <div className={"grid gap-8 sm:gap-12"}>{/* Project cards would go here */}</div>
    </section>
  )
}

const ProjectCard: FC<{ title: string, description: string, link: string }> = ({ title, description, link }) => {
  return <></>
}

const AboutSection: FC = () => {
  return (
    <section id={"about"} className={"mt-16 sm:mt-24 mx-auto max-w-5xl"}>
      <h2 className={"text-3xl sm:text-4xl display-heading text-white mb-8"}>About Me</h2>
      <p className="max-w-3xl text-lg sm:text-xl leading-relaxed text-white/80">
        I am a full-stack engineer with experience building, maintaining, and modernising production web applications
        used by real users at scale.
        <br /><br />
        My work spans legacy Java and Scala backends through to modern React and TypeScript frontends. I have
        contributed to incremental migrations, improved developer workflows, and delivered features while working within
        existing systems and constraints.
        <br /><br />
        I care deeply about clean, maintainable code, pragmatic architecture, and sustainable development practices.
        Alongside hands-on engineering, I have contributed as a Scrum Master, led code quality initiatives, and helped
        teams improve how they plan, review, and ship work.
        <br /><br />
        Outside of my day-to-day role, I build personal projects and infrastructure to explore data ingestion,
        automation, and system design, with a focus on understanding tools deeply rather than chasing trends.
      </p>
    </section>
  )
}

const ContactSection: FC = () => {
  return (
    <section id={"contact"} className={"mt-16 sm:mt-24 mx-auto max-w-5xl mb-16"}>
      <h2 className={"text-3xl sm:text-4xl display-heading text-white mb-8"}>Contact</h2>
      <p className="max-w-3xl text-lg sm:text-xl leading-relaxed text-white/80">
        Interested in working together or have any questions? Feel free to reach out to me at{" "}
        <a href="mailto:harrycarr64@hotmail.com" className="text-cyber-cyan underline">
          harrycarr64@hotmail.com
        </a>
        . I look forward to connecting with you!
      </p>
    </section>
  )
}

export default Home