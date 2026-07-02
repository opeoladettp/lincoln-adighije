import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import StarIcon from '@mui/icons-material/Star'

const features = [
  {
    name: 'Vanguard Nigeria',
    description: "Coverage of tech innovation and legal-tech professionals shaping Nigeria's digital future.",
    url: 'https://www.vanguardngr.com',
    abbr: 'VG',
  },
  {
    name: 'The Sun Nigeria',
    description: "Spotlight on emerging voices in Nigeria's growing digital economy and tech ecosystem.",
    url: 'https://www.sunnewsonline.com',
    abbr: 'SN',
  },
]

const awards = [
  {
    title: 'Digital Resilience Initiative of the Year',
    org: 'Soft Alliance',
    year: 'May 2025',
    color: '#D4AF37',
  },
  {
    title: 'Best Performance Award',
    org: 'Golden Excellence Awards',
    year: '2024',
    color: '#10B981',
  },
]

export default function FeaturedIn() {
  const ref = useRef(null)
  const sectionRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const headingY = useTransform(scrollYProgress, [0, 1], ['-3%', '3%'])

  return (
    <section className="py-20 px-4 sm:px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto w-full" ref={ref}>

        {/* ── Awards ── */}
        <motion.div
          style={{ y: headingY }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--gold)' }}>
            Awards
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
            Recognised for Excellence
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {awards.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5, type: 'spring', stiffness: 120 }}
              whileHover={{ scale: 1.03, y: -5, boxShadow: '0 12px 32px rgba(212,175,55,0.18)' }}
              className="card card-glow rounded-2xl p-6 flex items-start gap-5 cursor-default"
            >
              {/* Animated trophy icon */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -6, 0], scale: 1.12 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: a.color + '18', border: `1.5px solid ${a.color}30` }}
              >
                <EmojiEventsIcon style={{ color: a.color, fontSize: 32 }} />
              </motion.div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 mb-0.5">
                  <StarIcon style={{ color: 'var(--gold)', fontSize: 13 }} />
                  <StarIcon style={{ color: 'var(--gold)', fontSize: 13 }} />
                  <StarIcon style={{ color: 'var(--gold)', fontSize: 13 }} />
                </div>
                <p className="font-bold text-base leading-snug" style={{ color: 'var(--text-primary)' }}>{a.title}</p>
                <p className="text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>{a.org}</p>
                <span
                  className="inline-block mt-3 text-xs font-bold px-3 py-1 rounded-full"
                  style={{ backgroundColor: a.color + '18', color: a.color }}
                >
                  {a.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Press ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--gold)' }}>
            Featured In
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
            Recognised by Leading Publications
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.a
              key={f.name}
              href={f.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: i % 2 === 0 ? -28 : 28 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.35 + i * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -5, boxShadow: '0 12px 32px rgba(212,175,55,0.15)' }}
              className="card card-glow rounded-2xl p-6 flex items-start gap-5 group transition-all"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-colors group-hover:bg-(--gold)"
                style={{ backgroundColor: 'var(--gold)' + '18' }}
              >
                <NewspaperIcon
                  className="transition-colors group-hover:text-[#0F172A]"
                  style={{ color: 'var(--gold)', fontSize: 32 }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 font-bold text-base mb-1" style={{ color: 'var(--text-primary)' }}>
                  {f.name}
                  <OpenInNewIcon
                    className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                    style={{ color: 'var(--gold)', fontSize: 16 }}
                  />
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{f.description}</p>
                <span
                  className="inline-block mt-3 text-xs font-bold px-3 py-1 rounded-full"
                  style={{ backgroundColor: 'var(--gold)' + '18', color: 'var(--gold)' }}
                >
                  {f.abbr}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  )
}
