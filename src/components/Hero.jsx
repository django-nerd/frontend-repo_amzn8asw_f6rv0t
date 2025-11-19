import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950"></div>

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-28 sm:pt-28 sm:pb-36 lg:pt-36 lg:pb-44">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-emerald-200 shadow-[0_0_25px_rgba(16,185,129,0.25)]">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live sprint intelligence
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05]">
              Clear your sprints. Accelerate your team.
            </h1>
            <p className="mt-5 text-lg text-emerald-100/90 max-w-xl">
              Clearsprint AI helps teams manage tickets, automate follow‑ups, and stay ahead of deadlines with proactive, AI‑powered workflows.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-semibold shadow-[0_10px_40px_-10px_rgba(16,185,129,0.7)] hover:brightness-110 transition">Start free trial</button>
              <button className="px-6 py-3 rounded-xl border border-white/15 text-white/90 hover:bg-white/5 transition">Book a demo</button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400/90" />
                <span>Automated follow‑ups</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400/90" />
                <span>Deadline forecasting</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-2xl">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />
              <div className="absolute -bottom-12 -left-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="rounded-xl overflow-hidden ring-1 ring-white/10">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop"
                  alt="Clearsprint dashboard"
                  className="w-full h-[360px] object-cover"
                />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-white/70">
                <div className="rounded-lg border border-white/10 bg-white/5 py-3">AI ticket triage</div>
                <div className="rounded-lg border border-white/10 bg-white/5 py-3">Smart reminders</div>
                <div className="rounded-lg border border-white/10 bg-white/5 py-3">Sprint health</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
