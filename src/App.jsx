import React from 'react'
import Hero from './components/Hero'
import Poster from './components/Poster'
import Overview from './components/Overview'
import Credits from './components/Credits'
import Director from './components/Director'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-black text-white">
      {/* Global background accents */}
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_80%_0%,rgba(99,102,241,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_60%,rgba(217,70,239,0.10),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.6))]" />
      </div>

      <Hero />
      <Poster />
      <Overview />
      <Credits />
      <Director />
      <Contact />

      {/* Minimal footer */}
      <footer className="border-t border-white/10 bg-black/60">
        <div className="container mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} KH Ida — En skandinavisk kortfilm</p>
          <p className="text-xs text-white/50">Tema: AI, nærhed, kontrol</p>
        </div>
      </footer>
    </div>
  )
}

export default App
