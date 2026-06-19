type Step = { no: string; title: string; desc: string }
type Stat = { value: string; label: string }

const STATS: Stat[] = [
  { value: "500 MW", label: "clean output per unit" },
  { value: "0 g", label: "carbon emissions" },
  { value: "4x", label: "energy gain (Q factor)" },
  { value: "24/7", label: "baseload availability" },
]

const STEPS: Step[] = [
  { no: "01", title: "Heat", desc: "Hydrogen fuel is heated into a plasma hotter than the sun's core." },
  { no: "02", title: "Confine", desc: "Superconducting magnets suspend the plasma in a magnetic cage." },
  { no: "03", title: "Harvest", desc: "Fusion energy heats a coolant loop that drives clean turbines." },
]

export function Sections() {
  return (
    <div className="w-screen text-white">
      <section className="flex h-screen w-screen flex-col items-center justify-center px-8 text-center">
        <p className="mb-5 text-xs uppercase tracking-[0.4em] text-cyan-300/80">AETHER · Fusion Energy</p>
        <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
          Limitless clean energy,
          <br />
          <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-400 bg-clip-text text-transparent">
            finally within reach.
          </span>
        </h1>
        <p className="mt-7 max-w-xl text-lg text-white/60">
          We build compact fusion reactors that deliver always-on, carbon-free power at the scale
          the planet needs.
        </p>
        <div className="mt-10 flex gap-4">
          <button className="rounded-full bg-white px-7 py-3 font-medium text-black transition hover:bg-white/90">
            Explore the reactor
          </button>
          <button className="rounded-full border border-white/20 px-7 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10">
            Read the science
          </button>
        </div>
      </section>

      <section className="flex h-screen w-screen items-center px-8 md:px-20">
        <div className="max-w-lg">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-cyan-300/80">Our mission</p>
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Power humanity without costing the Earth.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            Fusion fuses light atoms to release enormous energy - no carbon, no long-lived waste,
            no meltdown risk. We are turning that promise into real infrastructure.
          </p>
        </div>
      </section>

      <section className="flex h-screen w-screen items-center justify-end px-8 md:px-20">
        <div className="max-w-lg text-right">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-cyan-300/80">The technology</p>
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            150 million degrees, perfectly contained.
          </h2>
          <ul className="mt-8 space-y-4 text-white/65">
            <li>High-temperature superconducting magnets confine the plasma.</li>
            <li>Real-time AI control keeps the reaction stable to the microsecond.</li>
            <li>A compact tokamak footprint, 10x smaller than legacy designs.</li>
          </ul>
        </div>
      </section>

      <section className="flex h-screen w-screen flex-col items-center justify-center px-8">
        <p className="mb-12 text-xs uppercase tracking-[0.4em] text-cyan-300/80">By the numbers</p>
        <div className="grid w-full max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-4xl font-extrabold text-transparent md:text-6xl">
                {s.value}
              </div>
              <div className="mt-3 text-sm text-white/50">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex h-screen w-screen flex-col justify-center px-8 md:px-20">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-cyan-300/80">How it works</p>
        <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">From plasma to power grid.</h2>
        <div className="mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.no}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition hover:border-cyan-300/40"
            >
              <div className="text-sm font-semibold text-cyan-300/80">{step.no}</div>
              <h3 className="mt-3 text-2xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-white/55">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex h-screen w-screen flex-col items-center justify-center px-8 text-center">
        <blockquote className="max-w-3xl text-3xl font-medium leading-snug tracking-tight md:text-5xl">
          "The most credible path to commercial fusion we have seen."
        </blockquote>
        <p className="mt-6 text-white/50">- Global Energy Review</p>
        <p className="mt-16 text-xs uppercase tracking-[0.4em] text-white/40">Backed by</p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-lg font-semibold text-white/70">
          <span>Helion Capital</span>
          <span>MIT Spinouts</span>
          <span>Breakthrough Energy</span>
          <span>TII</span>
        </div>
      </section>

      <section className="flex h-screen w-screen flex-col justify-between px-8 pb-12 pt-32 md:px-20">
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            The energy transition starts now.
          </h2>
          <button className="mt-9 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-9 py-4 text-lg font-semibold text-black transition hover:opacity-90">
            Partner with us
          </button>
        </div>
        <div className="flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row md:items-center">
          <span className="font-bold tracking-[0.2em] text-white/80">AETHER</span>
          <div className="flex gap-8">
            <a href="#">Technology</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
            <a href="#">Contact</a>
          </div>
          <span className="text-white/30">(c) 2026 Aether Energy. All rights reserved.</span>
        </div>
      </section>
    </div>
  )
}
