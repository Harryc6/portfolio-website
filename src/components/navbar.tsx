import type { FC } from "react"

const Navbar: FC = () => {
  return (
    <header className={"px-6 pt-10 sm:pt-6 mx-auto sticky top-0 bg-black/40 backdrop-blur-xs z-10"}>
      <nav className={"flex justify-end pb-2 mx-auto max-w-5xl pr-2"} aria-label={"Primary Navigation"}>
        <LinkItem name={"Projects"} href={"#projects"} />
        <LinkItem name={"About"} href={"#about"} />
        <LinkItem name={"Contact"} href={"#contact"} />
      </nav>
    </header>
  )
}

const LinkItem: FC<{ name: string; href: string }> = ({ name, href }) => {
  return (
    <a
      href={href}
      className={
        "ml-8 text-xl sm:text-lg text-white/80 hover:text-cyber-cyan transition-colors rounded-sm " +
        "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyber-cyan"
      }
    >
      {name}
    </a>
  )
}

export default Navbar
