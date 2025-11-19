import React from 'react'

function CreditItem({ role, name }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-white/10">
      <span className="text-white/60 text-sm">{role}</span>
      <span className="text-white/90 font-medium">{name}</span>
    </div>
  )
}

export default function Credits() {
  const cast = [
    { role: 'Ida', name: 'TBA' },
    { role: 'Jonas', name: 'TBA' },
    { role: 'AI-stemme', name: 'TBA' },
  ]

  const crew = [
    { role: 'Instruktør', name: 'TBA' },
    { role: 'Manuskript', name: 'TBA' },
    { role: 'Producer', name: 'TBA' },
    { role: 'Fotograf', name: 'TBA' },
    { role: 'Lyd', name: 'TBA' },
    { role: 'Klipper', name: 'TBA' },
    { role: 'Komponist', name: 'TBA' },
  ]

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-sm uppercase tracking-widest text-white/60">Cast</h3>
            <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
              {cast.map((c, i) => <CreditItem key={i} role={c.role} name={c.name} />)}
            </div>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-widest text-white/60">Crew</h3>
            <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
              {crew.map((c, i) => <CreditItem key={i} role={c.role} name={c.name} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
