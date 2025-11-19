import { motion } from 'framer-motion'

const badges = [
  { label: 'Proactive insights', x: '-10%', y: '10%' },
  { label: 'AI ticket triage', x: '70%', y: '25%' },
  { label: 'Zero-drag updates', x: '15%', y: '70%' },
  { label: 'Sprint health', x: '75%', y: '65%' }
]

export default function FloatingBadges() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
      {badges.map((b, i) => (
        <motion.div
          key={b.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -6, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute"
          style={{ left: b.x, top: b.y }}
        >
          <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 backdrop-blur-md px-3 py-1 text-xs text-emerald-100/90 shadow-[0_0_25px_rgba(16,185,129,0.25)]">
            {b.label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
