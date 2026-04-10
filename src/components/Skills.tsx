import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CodeIcon from '@mui/icons-material/Code'
import StorageIcon from '@mui/icons-material/Storage'
import CloudIcon from '@mui/icons-material/Cloud'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import MemoryIcon from '@mui/icons-material/Memory'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import GavelIcon from '@mui/icons-material/Gavel'
import DescriptionIcon from '@mui/icons-material/Description'
import SecurityIcon from '@mui/icons-material/Security'
import GroupsIcon from '@mui/icons-material/Groups'
import PublicIcon from '@mui/icons-material/Public'
import AssignmentIcon from '@mui/icons-material/Assignment'

const techStack = [
  { icon: CodeIcon, label: 'Next.js / React' },
  { icon: StorageIcon, label: 'Node.js / Python' },
  { icon: CloudIcon, label: 'Cloud Infrastructure' },
  { icon: SmartToyIcon, label: 'AI & Chatbots' },
  { icon: MemoryIcon, label: 'Rust' },
  { icon: AccountBalanceIcon, label: 'Fintech Platforms' },
]

const legalOps = [
  { icon: GavelIcon, label: 'Evidence Adjudication' },
  { icon: DescriptionIcon, label: 'Policy Interpretation' },
  { icon: SecurityIcon, label: 'GDPR Compliance' },
  { icon: GroupsIcon, label: 'Stakeholder Collaboration' },
  { icon: PublicIcon, label: 'International Commercial Law' },
  { icon: AssignmentIcon, label: 'High-Volume Case Mgmt' },
]

function SkillCard({ icon: Icon, label, delay }: { icon: React.ElementType; label: string; delay: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay, duration: 0.4, type: 'spring', stiffness: 120 }}
      whileHover={{ scale: 1.07, y: -4, boxShadow: '0 8px 24px rgba(212,175,55,0.2)' }}
      className="card rounded-xl p-4 flex flex-col items-center gap-2 text-center cursor-default transition-all"
    >
      <Icon style={{ color: 'var(--gold)', fontSize: 30 }} />
      <span className="text-xs sm:text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{label}</span>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="expertise" className="py-24 px-4 sm:px-6 section-alt">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--gold)' }}>
            Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
            A Dual Skill Set, One Vision
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-lg font-bold mb-6 flex items-center gap-2"
              style={{ color: 'var(--gold)' }}
            >
              <CodeIcon /> Technical Stack
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {techStack.map((s, i) => (
                <SkillCard key={s.label} icon={s.icon} label={s.label} delay={i * 0.07} />
              ))}
            </div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 }}
              className="text-lg font-bold mb-6 flex items-center gap-2"
              style={{ color: 'var(--gold)' }}
            >
              <GavelIcon /> Legal & Ops
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {legalOps.map((s, i) => (
                <SkillCard key={s.label} icon={s.icon} label={s.label} delay={i * 0.07} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
