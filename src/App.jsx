import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import CTA from './components/CTA'
import ParallaxBackdrop from './components/ParallaxBackdrop'
import FloatingBadges from './components/FloatingBadges'
import EpicParallax from './components/EpicParallax'
import SplitCTA from './components/SplitCTA'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      <ParallaxBackdrop />

      {/* Background accent blobs (extra depth) */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-20 left-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(16,185,129,0.10),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.10),transparent_35%)]" />
      </div>

      <Navbar />

      <div className="relative">
        <FloatingBadges />
        <Hero />
      </div>

      <Features />
      <EpicParallax />
      <Showcase />
      <SplitCTA />
      <CTA />
      <FAQ />

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-emerald-400 to-cyan-400" />
            <span>Clearsprint AI</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <span className="text-white/40">© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
