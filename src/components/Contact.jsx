import React from 'react'

export default function Contact() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-sm uppercase tracking-widest text-white/60">Kontakt</h3>
            <p className="mt-3 text-white/80">For presse, festivaler og samarbejde:</p>
            <div className="mt-4 space-y-2 text-white/80">
              <p>Email: <a href="mailto:kontakt@kh-ida.film" className="underline decoration-dotted hover:text-white">kontakt@kh-ida.film</a></p>
              <p>Telefon: <a href="tel:+4512345678" className="underline decoration-dotted hover:text-white">+45 12 34 56 78</a></p>
            </div>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-widest text-white/60">Pitch deck</h3>
            <p className="mt-3 text-white/80">Hent en kort præsentation af projektet med visuel retning, temaer og plan.</p>
            <a
              href="/pitch-deck.pdf"
              download
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white text-black px-5 py-3 text-sm font-semibold shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_20px_40px_rgba(0,0,0,0.6)] transition-all"
            >
              Download pitch deck
            </a>
            <p className="mt-2 text-xs text-white/50">PDF åbner i ny fane, hvis din browser ikke downloader automatisk.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
