import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useTheme } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import FeaturedIn from './components/FeaturedIn'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Floating background particles
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  left: Math.random() * 100,
  delay: Math.random() * 6,
  duration: Math.random() * 4 + 5,
  opacity: Math.random() * 0.25 + 0.05,
}))

export default function App() {
  const { theme } = useTheme()
  const spotlightRef = useRef<HTMLDivElement>(null)
  const [showBackToTop, setShowBackToTop] = useState(false)

  // Cursor spotlight
  useEffect(() => {
    const el = spotlightRef.current
    if (!el) return
    const move = (e: MouseEvent) => {
      el.style.setProperty('--x', `${e.clientX}px`)
      el.style.setProperty('--y', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  // Show back-to-top after scrolling 400px
  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal')
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div
      data-theme={theme}
      className="min-h-screen transition-colors duration-300 relative overflow-x-hidden"
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      {/* Cursor spotlight overlay */}
      <div ref={spotlightRef} className="spotlight" aria-hidden="true" />

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {PARTICLES.map(p => (
          <div
            key={p.id}
            className="particle"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.left}%`,
              bottom: '-10px',
              opacity: p.opacity,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Education />
        <div className="section-divider" />
        <FeaturedIn />
        <div className="section-divider" />
        <Contact />
        <Footer />
      </div>

      {/* Floating back-to-top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            key="back-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.7, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 16 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            whileHover={{ scale: 1.12, boxShadow: '0 8px 24px rgba(212,175,55,0.45)' }}
            whileTap={{ scale: 0.93 }}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center shadow-lg"
            style={{ backgroundColor: 'var(--gold)', color: '#0F172A' }}
          >
            <KeyboardArrowUpIcon style={{ fontSize: 22 }} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
