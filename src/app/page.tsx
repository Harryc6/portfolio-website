import type { FC } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/sections/hero"
import ProjectSection from "@/sections/projects"
import AboutSection from "@/sections/about"
import ContactSection from "@/sections/contact"

const Home: FC = () => {
  return (
    <>
      <Navbar />
      <main className={"px-6 py-16 sm:py-24"}>
        <HeroSection />
        <ProjectSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  )
}

export default Home
