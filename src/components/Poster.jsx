import React from 'react'

export default function Poster() {
  return (
    <section id="poster" className="relative bg-black text-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_10%,rgba(59,130,246,0.1),transparent)]" />
      <div className="relative container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Teaser-plakat</h2>
            <p className="mt-3 text-white/70">Et minimalistisk blik ind i filmens nerve: mennesket, maskinen og de digitale glitchs mellem dem.</p>
            <div className="mt-6 flex gap-3">
              <a href="#logline" className="inline-flex rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10 transition-colors">Gå til logline</a>
              <a href="#synopsis" className="inline-flex rounded-md bg-white text-black px-4 py-2 text-sm font-semibold">Læs synopsis</a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent shadow-[0_10px_60px_rgba(0,0,0,0.6)]">
              <img src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1587&auto=format&fit=crop" alt="KH Ida teaser poster" className="h-full w-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/70">KH Ida</div>
                  <div className="text-sm text-white/80">En kortfilm af [Instruktørnavn]</div>
                </div>
                <div className="text-xs text-white/60">2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
