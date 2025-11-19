import { motion } from 'framer-motion'
import { Sparkles, AlarmClock, Gauge, Bot, CheckCircle2, Workflow } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'AI ticket triage',
    desc: 'Auto‑classify and route tickets. Summaries, priorities, and owners—instant.'
  },
  {
    icon: AlarmClock,
    title: 'Smart follow‑ups',
    desc: 'Automated nudges and reminders to unblock work before it slips.'
  },
  {
    icon: Gauge,
    title: 'Sprint health',
    desc: 'Velocity, risk, and forecast—projected in real‑time with confidence.'
  },
  {
    icon: Workflow,
    title: 'Workflow automation',
    desc: 'Build powerful automations with triggers across your tools.'
  },
  {
    icon: Bot,
    title: 'Proactive insights',
    desc: 'Predict delays and surface what matters with contextual signals.'
  },
  {
    icon: CheckCircle2,
    title: 'Zero‑drag updates',
    desc: 'Turn messy updates into crisp status with one click.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-28 lg:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
          >
            Built for high‑velocity teams
          </motion.h2>
          <p className="mt-3 text-emerald-100/80">
            A crisp, modern experience that turns chaos into clarity—so your team always knows what matters next.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-6 backdrop-blur-xl hover:border-emerald-400/30"
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-emerald-500/10 blur-2xl group-hover:bg-emerald-500/20 transition" />
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 text-slate-950 grid place-items-center shadow-[0_0_25px_rgba(16,185,129,0.6)]">
                  {<f.icon className="h-5 w-5" />}
                </div>
                <h3 className="text-white font-semibold">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
