import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import WorkIcon from '@mui/icons-material/Work'

const timeline = [
  {
    company: 'Department for Work and Pensions (DWP)',
    role: 'Case Manager',
    period: 'May 2025 – Present',
    color: '#D4AF37',
    metrics: ['96% satisfaction rate', 'Complex PIP claims management'],
    description:
      'Managing complex Personal Independence Payment (PIP) claims and providing expert support on medical evidence reviews, applying legal reasoning to data-driven adjudication.',
  },
  {
    company: 'DVLA',
    role: 'Operations Delivery & Customer Advisor',
    period: 'Mar 2024 – May 2025',
    color: '#3B82F6',
    metrics: ['25% improvement in response times', 'Fraud investigation'],
    description:
      'Investigated fraud, managed sensitive data under GDPR, and improved query response times by 25% through process optimisation and stakeholder collaboration.',
  },
  {
    company: 'Nigerian Tech Ecosystem',
    role: 'Full-Stack Engineer & Contributor',
    period: '2020 – 2024',
    color: '#10B981',
    metrics: ['Fintech P2P platforms', 'Cloud data dashboards'],
    description:
      "Developed peer-to-peer fintech platforms and cloud data dashboards via Decagon Institute, HNG Internship, and Andela Learning Community, driving innovation in Nigeria's digital economy.",
  },
  {
    company: 'Afe Babalola University / Swansea University',
    role: 'Law Graduate',
    period: '2015 – 2023',
    color: '#8B5CF6',
    metrics: ['LLB Law', 'LLM International Commercial Law'],
    description:
      'Built a strong foundation in legal reasoning, policy interpretation, and international commercial law — the analytical backbone behind every technical decision.',
  },
]

function TimelineItem({ item, index }: { item: typeof timeline[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative flex gap-4 sm:gap-8"
    >
      {/* Dot + line */}
      <div className="flex flex-col items-center">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 transition-all"
          style={{ backgroundColor: item.color + '22', border: `2px solid ${item.color}` }}
        >
          <WorkIcon style={{ color: item.color, fontSize: 18 }} />
        </motion.div>
        {index < timeline.length - 1 && (
          <div className="w-px flex-1 mt-2" style={{ backgroundColor: 'var(--border)' }} />
        )}
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ scale: 1.01, y: -2 }}
        className="card rounded-2xl p-5 sm:p-6 mb-8 flex-1 transition-all"
      >
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="font-bold text-base sm:text-lg" style={{ color: 'var(--text-primary)' }}>{item.role}</h3>
            <p className="text-sm font-medium" style={{ color: item.color }}>{item.company}</p>
          </div>
          <span
            className="text-xs px-3 py-1 rounded-full font-medium"
            style={{ backgroundColor: item.color + '18', color: item.color }}
          >
            {item.period}
          </span>
        </div>
        <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.metrics.map((m) => (
            <motion.span
              key={m}
              whileHover={{ scale: 1.05 }}
              className="text-xs px-3 py-1 rounded-full font-semibold"
              style={{ backgroundColor: 'var(--gold)' + '18', color: 'var(--gold)' }}
            >
              {m}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const sectionRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-3%', '3%'])

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 overflow-hidden" ref={sectionRef}>
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          style={{ y }}
          className="parallax-layer"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--gold)' }}>
              Professional Journey
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
              From Law School to the Digital Frontier
            </h2>
          </div>
        </motion.div>

        <div>
          {timeline.map((item, i) => (
            <TimelineItem key={item.company} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
