import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Full-page fixed background with layered parallax glows and a subtle neon grid
export default function ParallaxBackdrop() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const yBack = useTransform(scrollYProgress, [0, 1], [0, 150])
  const yMid = useTransform(scrollYProgress, [0, 1], [0, 250])
  const yFront = useTransform(scrollYProgress, [0, 1], [0, 350])

  return (
    <div ref={ref} aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Subtle neon grid */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage:
          'linear-gradient(rgba(16,185,129,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.25) 1px, transparent 1px)'
      }} />
      {/* Back layer glow */}
      <motion.div style={{ y: yBack }} className="absolute -top-40 -left-20 h-[36rem] w-[36rem] rounded-full bg-emerald-500/15 blur-[120px]" />
      {/* Mid layer glow */}
      <motion.div style={{ y: yMid }} className="absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-cyan-400/20 blur-[100px]" />
      {/* Front layer streaks */}
      <motion.div style={{ y: yFront }} className="absolute bottom-0 left-1/4 h-[18rem] w-[40rem] rotate-12 bg-gradient-to-r from-emerald-400/20 via-transparent to-cyan-400/20 blur-3xl rounded-3xl" />
      {/* Vignette shade to make hero pop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_40%,rgba(2,6,23,0.7)_70%,rgba(2,6,23,0.9)_100%)]" />
    </div>
  )
}
