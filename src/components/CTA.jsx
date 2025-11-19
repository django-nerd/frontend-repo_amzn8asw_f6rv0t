import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.12),transparent_50%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-10 sm:p-14 backdrop-blur-xl text-center overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-emerald-500/20 blur-3xl" />
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Run sprints at lightspeed</h3>
          <p className="mt-3 text-emerald-100/80 max-w-2xl mx-auto">Start free in minutes. No credit card required.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-semibold shadow-[0_10px_40px_-10px_rgba(16,185,129,0.7)] hover:brightness-110 transition">Get started</button>
            <button className="px-6 py-3 rounded-xl border border-white/15 text-white/90 hover:bg-white/5 transition">See pricing</button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
