import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function EpicParallax() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const ySlow = useTransform(scrollYProgress, [0, 1], [-60, 60])
  const yMed = useTransform(scrollYProgress, [0, 1], [-120, 120])
  const yFast = useTransform(scrollYProgress, [0, 1], [-180, 180])

  return (
    <section ref={ref} className="relative py-28 sm:py-36 lg:py-44">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.10),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-black tracking-tight text-white"
          >
            Parallax intelligence layers
          </motion.h2>
          <p className="mt-3 text-emerald-100/80">
            Multiple views moving at different speeds reveal how Clearsprint automates your flow end‑to‑end.
          </p>
        </div>

        <div className="mt-14 relative h-[38rem] sm:h-[44rem]">
          {/* Back plate */}
          <motion.div style={{ y: ySlow }} className="absolute left-0 right-0 top-6 mx-auto w-[92%] sm:w-11/12">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] backdrop-blur-xl p-4 shadow-[0_40px_120px_-30px_rgba(16,185,129,0.35)]">
              <div className="rounded-2xl overflow-hidden ring-1 ring-white/10">
                <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1800&auto=format&fit=crop" alt="Automation overview" className="w-full h-[18rem] sm:h-[22rem] object-cover" />
              </div>
              <div className="mt-3 text-sm text-white/70">Automation graph with cross‑tool triggers.</div>
            </div>
          </motion.div>

          {/* Mid plate */}
          <motion.div style={{ y: yMed }} className="absolute left-6 right-6 sm:left-12 sm:right-12 top-40">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
              <div className="rounded-2xl overflow-hidden ring-1 ring-white/10">
                <img src="https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1700&auto=format&fit=crop" alt="Triage stream" className="w-full h-[16rem] sm:h-[18rem] object-cover" />
              </div>
              <div className="mt-3 text-sm text-white/70">Real‑time triage stream with AI suggestions.</div>
            </div>
          </motion.div>

          {/* Front plate */}
          <motion.div style={{ y: yFast }} className="absolute left-10 right-10 sm:left-24 sm:right-24 top-72">
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-emerald-500/10 to-cyan-400/10 backdrop-blur-xl p-4">
              <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-emerald-400/20 blur-3xl" />
              <div className="rounded-2xl overflow-hidden ring-1 ring-white/10">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop" alt="Forecast heatmap" className="w-full h-[14rem] sm:h-[16rem] object-cover" />
              </div>
              <div className="mt-3 text-sm text-white/70">Forecast heatmap predicting deadlines with confidence bands.</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
