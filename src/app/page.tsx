export default function Home() {
  return (
    <main className={"px-6 py-16 sm:py-24"}>
      <section className={"mx-auto max-w-5xl"}>
        <p className={"text-sm tracking-[0.2em] uppercase glitched-text text-cyber-cyan/80"} data-text={"Full-stack developer"}>
          Full-stack developer
        </p>

        <div className={"cyber-tile"}>
          <h1
            className={
              "text-5xl sm:text-7xl leading-[0.95] [font-family:var(--font-display)] tracking-[0.04em] text-white"
            }
          >
            Harry Carr
          </h1>
        </div>

        <p className="mt-2 max-w-2xl text-lg sm:text-xl leading-relaxed text-white/80">
          I build fast, accessible web apps with clean UX and strong
          engineering.
        </p>
      </section>
    </main>
  )
}
