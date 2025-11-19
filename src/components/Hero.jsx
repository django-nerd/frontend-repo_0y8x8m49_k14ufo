import React from 'react'
import Spline from '@splinetool/react-spline'

const GlitchText = ({ children, className = '' }) => (
  <span className={`relative inline-block ${className}`}>
    <span className="relative z-10">{children}</span>
    <span aria-hidden className="absolute inset-0 text-transparent select-none">
      <span className="absolute inset-0 -translate-x-0.5 -translate-y-0.5 text-blue-400/60 blur-sm mix-blend-screen" style={{ textShadow: '0 0 20px rgba(59,130,246,0.6)' }}>{children}</span>
      <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 text-fuchsia-400/60 blur-sm mix-blend-screen" style={{ textShadow: '0 0 20px rgba(217,70,239,0.6)' }}>{children}</span>
    </span>
  </span>
)

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_70%_20%,rgba(139,92,246,0.18),transparent)]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-widest uppercase text-white/70 backdrop-blur">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Filmisk kortfilm • AI • Psykologisk techno-noir
          </div>
          <h1 className="mt-6 text-5xl sm:text-7xl font-semibold leading-[0.95] tracking-tight">
            <GlitchText className="[text-shadow:0_0_30px_rgba(99,102,241,0.35)]">KH Ida</GlitchText>
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-white/80 max-w-2xl">
            En mørk, teknologisk fortælling om nærhed i en tid, hvor alt filtreres gennem skærme, algoritmer og kunstig intelligens.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#poster" className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-5 py-3 text-sm font-semibold shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_20px_40px_rgba(0,0,0,0.6)] transition-all">
              Se teaser-plakat
            </a>
            <a href="#synopsis" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all backdrop-blur">
              Læs mere
            </a>
          </div>
        </div>

        {/* Phone-inspired HUD frame */}
        <div className="mt-16 w-full max-w-sm rounded-[2.2rem] border border-white/15 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur relative shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_10px_60px_rgba(0,0,0,0.6)]">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 h-6 w-32 rounded-full bg-white/10" />
          <div className="aspect-[9/19.5] overflow-hidden rounded-[2rem]">
            <div className="h-full w-full bg-gradient-to-b from-zinc-950 via-zinc-900 to-black p-4">
              <div className="text-[10px] text-white/50 tracking-widest uppercase">AI feed</div>
              <div className="mt-2 h-44 rounded-xl bg-white/5 border border-white/10 overflow-hidden">
                <div className="h-full w-full bg-[linear-gradient(120deg,rgba(168,85,247,0.08),transparent_50%),linear-gradient(0deg,rgba(59,130,246,0.08),transparent_50%)] animate-pulse" />
              </div>
              <div className="mt-3 text-xs text-white/70">Signal ustabilt. Følelser forvrænges…</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
