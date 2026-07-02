import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GavelIcon from '@mui/icons-material/Gavel'
import CodeIcon from '@mui/icons-material/Code'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import DownloadIcon from '@mui/icons-material/Download'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Awards', href: '#awards' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  {
    icon: EmailIcon,
    label: 'Email',
    href: 'mailto:me@lincolnadighije.com',
    value: 'me@lincolnadighije.com',
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/lincoln-adighije-25a86b23a/',
    value: 'lincoln-adighije',
  },
]

const pillars = [
  { icon: GavelIcon, label: 'Legal Precision' },
  { icon: CodeIcon, label: 'Engineering Excellence' },
]

export default function Footer() {
  const ref = useRef(null)
  const sectionRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer
      ref={sectionRef}
      className="relative pt-16 pb-8 px-4 sm:px-6 overflow-hidden"
      style={{
        borderTop: '1px solid var(--border)',
        backgroundColor: 'var(--footer-bg)',
      }}
    >
      {/* Background glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: 'var(--gold)' }}
        />
        <div
          className="absolute -top-12 right-0 w-48 h-48 rounded-full blur-3xl opacity-8"
          style={{ backgroundColor: '#60A5FA' }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>

        {/* ── Top: 3-column grid ── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-10 pb-12 border-b"
          style={{ borderColor: 'var(--border)' }}
        >

          {/* ── Col 1: Brand ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <a href="#" className="text-3xl font-extrabold tracking-tight" style={{ color: 'var(--gold)' }}>
              LA<span style={{ color: 'var(--text-primary)' }}>.</span>
            </a>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Software engineer with a legal edge — building scalable, intelligent solutions at the
              intersection of law, technology, and Africa's digital future.
            </p>

            {/* Availability badge */}
            <div className="flex items-center gap-2">
              <span className="relative flex items-center justify-center w-3 h-3">
                <FiberManualRecordIcon style={{ color: '#10B981', fontSize: 10, position: 'relative', zIndex: 1 }} />
                <span
                  className="pulse-ring absolute inset-0 rounded-full"
                  style={{ backgroundColor: '#10B981', opacity: 0.5 }}
                />
              </span>
              <span className="text-xs font-semibold" style={{ color: '#10B981' }}>
                Open to opportunities
              </span>
            </div>

            {/* Identity pills */}
            <div className="flex flex-wrap gap-2">
              {pillars.map(({ icon: Icon, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="glass flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{ color: 'var(--text-primary)' }}
                >
                  <Icon style={{ color: 'var(--gold)', fontSize: 14 }} />
                  {label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Col 2: Navigation ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col"
          >
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--gold)' }}>
              Navigation
            </p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.06 }}
                >
                  <a
                    href={link.href}
                    className="text-sm gold-underline transition-colors hover:text-(--gold)"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ── Col 3: Connect ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--gold)' }}>
              Connect
            </p>
            <ul className="flex flex-col gap-4 mb-6">
              {socials.map(({ icon: Icon, label, href, value }, i) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, x: 12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                >
                  <motion.a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 group"
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all group-hover:scale-110"
                      style={{ backgroundColor: 'var(--gold)' + '22', border: '1px solid var(--gold)' + '30' }}
                    >
                      <Icon style={{ fontSize: 17, color: 'var(--gold)' }} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>{label}</p>
                      <p className="text-xs truncate gold-underline" style={{ color: 'var(--text-primary)' }}>{value}</p>
                    </div>
                  </motion.a>
                </motion.li>
              ))}
            </ul>

            {/* Resume download */}
            <motion.a
              href="/Lincoln-Adighije-Resume.pdf"
              download="Lincoln-Adighije-Resume.pdf"
              whileHover={{ scale: 1.04, boxShadow: '0 6px 20px rgba(212,175,55,0.35)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all self-start"
              style={{ borderColor: 'var(--gold)', color: 'var(--gold)', background: 'transparent' }}
            >
              <DownloadIcon style={{ fontSize: 16 }} />
              Download Resume
            </motion.a>
          </motion.div>

        </div>

        {/* ── Bottom bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8"
        >
          <p className="text-xs text-center sm:text-left" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Lincoln Adighije. All rights reserved.
          </p>
          <p className="text-xs font-semibold tracking-wider" style={{ color: 'var(--gold)' }}>
            Law · Technology · Impact
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2, boxShadow: '0 6px 18px rgba(212,175,55,0.35)' }}
            whileTap={{ scale: 0.93 }}
            aria-label="Back to top"
            className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
            style={{ backgroundColor: 'var(--gold)', color: '#0F172A' }}
          >
            <KeyboardArrowUpIcon style={{ fontSize: 20 }} />
          </motion.button>
        </motion.div>

      </div>
    </footer>
  )
}
