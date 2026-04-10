import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer
      className="py-8 px-6 text-center text-sm border-t"
      style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} Lincoln Adighije. All rights reserved.
      </motion.p>
      <p className="mt-1" style={{ color: 'var(--gold)' }}>
        Law · Technology · Impact
      </p>
    </footer>
  )
}
