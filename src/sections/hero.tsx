import type { FC } from "react"
import { profile } from "@/content/profile"

const HeroSection: FC = () => {
  return (
    <section className={"scroll-mt-22 sm:scroll-mt-18 mx-auto mt-16 sm:mt-24 max-w-5xl"}>
      <p className={"text-sm tracking-[0.2em] uppercase glitched-text text-cyber-cyan/80"} data-text={profile.role}>
        {profile.role}
      </p>
      <div className={"cyber-tile"}>
        <h1 className={"pb-1 text-5xl sm:text-7xl display-heading text-white"}>{profile.name}</h1>
      </div>
      <p className="mt-2 max-w-2xl text-lg sm:text-xl leading-relaxed text-white/80">{profile.subheading}</p>
      <p className={"text-xs text-white/60"}>{profile.tagline}</p>
    </section>
  )
}

export default HeroSection
