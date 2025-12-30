import type { FC } from "react"

const ContactSection: FC = () => {
  return (
    <section id={"contact"} className={"scroll-mt-22 sm:scroll-mt-18 mt-16 sm:mt-24 mx-auto max-w-5xl mb-16"}>
      <h2 className={"text-3xl sm:text-4xl display-heading text-white mb-8"}>Contact</h2>
      <p className="max-w-3xl text-lg sm:text-xl leading-relaxed text-white/80">
        Interested in working together, discussing opportunities, or just talking tech? Reach out at{" "}
        <a href="mailto:harrycarr64@hotmail.com" className="text-cyber-cyan underline">
          harrycarr64@hotmail.com
        </a>
        . I’m always happy to chat.
      </p>
    </section>
  )
}

export default ContactSection
