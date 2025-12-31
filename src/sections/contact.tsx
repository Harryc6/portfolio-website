import type { FC } from "react"
import { profile } from "@/content/profile"
import { Github, Linkedin, Mail } from "lucide-react"

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
} as const

const ContactSection: FC = () => {
  return (
    <section id={"contact"} className={"scroll-mt-22 sm:scroll-mt-18 mt-16 sm:mt-24 mx-auto max-w-5xl mb-16"}>
      <h2 className={"text-3xl sm:text-4xl display-heading text-white mb-8"}>Contact</h2>
      <p className={"max-w-3xl text-base sm:text-lg leading-relaxed text-white/80"}>
        Interested in working together, discussing opportunities, or just talking tech? Feel free to reach out at any
        time.
      </p>
      {profile.socials.map((social) => {
        const Icon = iconMap[social.icon]
        return (
          <a
            key={social.label}
            href={social.href}
            className={
              "inline-flex items-center justify-center mr-4 last:mr-0 mt-4 h-22 w-22 rounded-full border border-cyber-cyan/30 " +
              "bg-black/60 backdrop-blur-sm text-cyber-cyan/80 hover:text-cyber-magenta/80 " +
              "shadow-[0_0_12px_rgba(34,211,238,0.06)] transition hover:border-cyber-magenta/30 hover:shadow-[0_0_22px_rgba(255,61,242,0.12)] " +
              "focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyber-cyan"
            }
            aria-label={social.label}
            {...(!social.href.startsWith("mailto:") && { target: "_blank", rel: "noopener noreferrer" })}
          >
            <Icon className={"h-14 w-14"} aria-hidden={true} />
          </a>
        )
      })}
    </section>
  )
}

export default ContactSection
