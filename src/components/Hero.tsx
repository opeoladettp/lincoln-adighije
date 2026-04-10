import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import GavelIcon from '@mui/icons-material/Gavel'
import CodeIcon from '@mui/icons-material/Code'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import heroImg from '../assets/lincoln.png'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Parallax transforms
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden lg:min-h-0 lg:h-screen"
    >
      {/* Parallax background blobs */}
      <motion.div
        style={{ y: bgY }}
        className="parallax-layer absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: 'var(--gold)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: '#60A5FA' }}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 w-full z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Text side */}
          <motion.div style={{ y: textY }} className="parallax-layer">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: 'var(--gold)' }}
            >
              Legal-Tech Professional
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-4xl xl:text-5xl font-extrabold leading-tight mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Bridging the Gap Between{' '}
              <span style={{ color: 'var(--gold)' }}>Law & Technology</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-base sm:text-lg max-w-xl mb-6 leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              A legally trained Software Engineer and Case Manager specializing in full-stack
              development, cloud infrastructure, and data-driven adjudication.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap gap-4 mb-6"
            >
              <motion.a
                href="#experience"
                whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(212,175,55,0.35)' }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-full font-semibold text-sm transition-all"
                style={{ backgroundColor: 'var(--gold)', color: '#0F172A' }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="/Lincoln Adighije.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-full font-semibold text-sm border-2 transition-all"
                style={{ borderColor: 'var(--gold)', color: 'var(--gold)', background: 'transparent' }}
              >
                Download Resume
              </motion.a>
            </motion.div>

            {/* Dual identity pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-3"
            >
              {[
                { icon: <GavelIcon fontSize="small" />, label: 'LLM · Swansea University' },
                { icon: <CodeIcon fontSize="small" />, label: 'Full-Stack · Decagon · HNG' },
              ].map(({ icon, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="glass flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                  style={{ color: 'var(--text-primary)' }}
                >
                  <span style={{ color: 'var(--gold)' }}>{icon}</span>
                  {label}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image side */}
          <motion.div
            style={{ y: imgY }}
            className="parallax-layer flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, type: 'spring', stiffness: 80 }}
          >
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-3xl blur-2xl opacity-30 scale-105"
                style={{ backgroundColor: 'var(--gold)' }}
              />
              <motion.img
                src={heroImg}
                alt="Lincoln Adighije"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="relative rounded-3xl object-cover w-full max-w-xs sm:max-w-sm md:max-w-md shadow-2xl lg:max-h-[55vh]"
                style={{ border: '3px solid var(--gold-light)' }}
              />
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 text-xs font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                <span style={{ color: 'var(--gold)' }}>⚖️</span> Law + <span style={{ color: 'var(--gold)' }}>💻</span> Code
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.2, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ color: 'var(--gold)' }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <KeyboardArrowDownIcon />
      </motion.a>
    </section>
  )
}
