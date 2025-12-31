import type { FC } from "react"
import { profile } from "@/content/profile"

const AboutSection: FC = () => {
  return (
    <section id={"about"} className={"scroll-mt-22 sm:scroll-mt-18 mt-16 sm:mt-24 mx-auto max-w-5xl"}>
      <h2 className={"text-3xl sm:text-4xl display-heading text-white mb-8"}>About Me</h2>
      {profile.bio.map((paragraph, index) => (
        <p className={"max-w-3xl text-sm sm:text-base leading-relaxed mt-4 text-white/80"} key={index}>
          {paragraph}
        </p>
      ))}
    </section>
  )
}

export default AboutSection
