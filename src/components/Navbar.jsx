import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-30">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 shadow-[0_0_30px_rgba(16,185,129,0.6)]" />
          <div className="leading-tight">
            <p className="text-white/90 font-semibold tracking-tight text-lg">Clearsprint AI</p>
            <p className="text-emerald-300/70 text-[10px] uppercase tracking-[0.2em]">Sprint Intelligence</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a>
          <a href="#showcase" className="text-white/70 hover:text-white transition-colors">Showcase</a>
          <a href="#pricing" className="text-white/70 hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="text-white/70 hover:text-white transition-colors">FAQ</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 text-sm text-white/80 hover:text-white">Sign in</button>
          <button className="px-4 py-2 text-sm rounded-lg bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 hover:bg-emerald-500/25 hover:border-emerald-400/50 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.25)]">Start free</button>
        </div>

        <button className="md:hidden text-white/80" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 space-y-2">
            <a href="#features" className="block text-white/80">Features</a>
            <a href="#showcase" className="block text-white/80">Showcase</a>
            <a href="#pricing" className="block text-white/80">Pricing</a>
            <a href="#faq" className="block text-white/80">FAQ</a>
            <div className="pt-2 flex gap-2">
              <button className="flex-1 px-4 py-2 text-sm text-white/80 rounded-lg border border-white/10">Sign in</button>
              <button className="flex-1 px-4 py-2 text-sm rounded-lg bg-emerald-500/20 text-emerald-200 border border-emerald-400/30">Start free</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
