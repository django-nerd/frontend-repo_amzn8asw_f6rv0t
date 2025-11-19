import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  { q: 'How does Clearsprint AI triage tickets?', a: 'We analyze metadata, text and historical patterns to auto‑classify, assign, and prioritize issues with explainable reasoning.' },
  { q: 'Will it fit our existing tools?', a: 'Clearsprint connects with Jira, Linear, Slack, GitHub and more. Automations trigger across your stack.' },
  { q: 'What about security?', a: 'SSO, encryption at rest and in transit, role controls and audit logs are built‑in. We meet enterprise standards.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="relative py-24 sm:py-28">
      <div className="relative mx-auto max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-center"
        >
          Frequently asked
        </motion.h2>

        <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          {faqs.map((f, i) => (
            <div key={f.q} className="p-5">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full text-left text-white/90 font-medium">
                {f.q}
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden text-white/70 text-sm pt-2"
                  >
                    {f.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
