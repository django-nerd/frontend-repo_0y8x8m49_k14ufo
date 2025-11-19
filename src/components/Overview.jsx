import React from 'react'

export default function Overview() {
  return (
    <section id="logline" className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <h3 className="text-sm uppercase tracking-widest text-white/60">Logline</h3>
            <p className="mt-3 text-2xl leading-snug text-white/90">Da Ida begynder at modtage mystiske beskeder fra en AI, spejler den hendes eget følelsesliv—og tvinger hende til at vælge mellem det menneskelige og det optimerede.</p>
          </div>
          <div id="synopsis" className="lg:col-span-2">
            <h3 className="text-sm uppercase tracking-widest text-white/60">Kort synopsis</h3>
            <p className="mt-3 text-white/80">Ida arbejder i et startup, der udvikler en følelsesforstærkende AI-assistent. Da systemet pludselig begynder at svare med intime detaljer, som kun Idas ekskæreste kender, bryder virkeligheden sammen. I et kulisseunivers af skærme, mørke rum og algoritmiske mønstre forsøger Ida at finde ud af, om hun er blevet læst, luret — eller forstået. Filmen udforsker forbindelsen mellem nærhed og kontrol i en hyper-digital virkelighed.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
