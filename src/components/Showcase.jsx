import { motion } from 'framer-motion'

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-24 sm:py-28 lg:py-32">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">A new kind of sprint dashboard</h2>
          <p className="mt-3 text-emerald-100/80">Glassmorphic depth, soft glows, and floating cards keep focus on what matters now.</p>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          {[1,2,3,4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 overflow-hidden"
            >
              <div className="absolute -top-16 -left-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl" />
              <img
                src={`https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop`}
                alt="UI preview"
                className="rounded-xl ring-1 ring-white/10"
              />
              <div className="mt-3 text-sm text-white/70">Interactive analytics and AI‑powered summaries.</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
