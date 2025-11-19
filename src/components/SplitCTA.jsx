import { motion } from 'framer-motion'

export default function SplitCTA() {
  return (
    <section id="pricing" className="relative py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.10),transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] backdrop-blur-xl p-8"
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">Start free</h3>
          <p className="mt-2 text-white/70">All core features. No credit card.</p>
          <ul className="mt-6 space-y-3 text-sm text-white/70">
            <li>• AI ticket triage</li>
            <li>• Smart follow‑ups</li>
            <li>• Forecast dashboards</li>
          </ul>
          <div className="mt-6">
            <button className="px-5 py-3 rounded-xl bg-emerald-500 text-slate-950 font-semibold shadow-[0_10px_40px_-10px_rgba(16,185,129,0.7)] hover:brightness-110 transition">Create account</button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-emerald-500/10 to-cyan-400/10 backdrop-blur-xl p-8 overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">Scale with your team</h3>
          <p className="mt-2 text-white/70">Advanced controls, SSO, audit logs, priority support.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80">SSO/SAML</div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80">Role controls</div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80">Audit logs</div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80">Priority support</div>
          </div>
          <div className="mt-6">
            <button className="px-5 py-3 rounded-xl border border-white/15 text-white/90 hover:bg-white/5 transition">Talk to sales</button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
