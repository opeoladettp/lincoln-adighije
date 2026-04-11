import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
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
import AppsIcon from '@mui/icons-material/Apps'

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

const tabs = [
  { id: 'all', label: 'All', icon: AppsIcon, skills: [...techStack, ...legalOps] },
  { id: 'tech', label: 'Technical Stack', icon: CodeIcon, skills: techStack },
  { id: 'legal', label: 'Legal & Ops', icon: GavelIcon, skills: legalOps },
]

function SkillCard({ icon: Icon, label, index }: { icon: React.ElementType; label: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ delay: index * 0.04, duration: 0.3, type: 'spring', stiffness: 140 }}
      whileHover={{ scale: 1.07, y: -4, boxShadow: '0 8px 24px rgba(212,175,55,0.2)' }}
      className="card rounded-xl p-3 flex flex-col items-center gap-1.5 text-center cursor-default"
    >
      <Icon style={{ color: 'var(--gold)', fontSize: 26 }} />
      <span className="text-xs font-medium leading-tight" style={{ color: 'var(--text-primary)' }}>
        {label}
      </span>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [activeTab, setActiveTab] = useState('all')
  const active = tabs.find(t => t.id === activeTab)!

  return (
    <section id="expertise" className="py-16 px-4 sm:px-6 lg:py-0 section-alt">
      <div className="max-w-6xl mx-auto w-full" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--gold)' }}>
            Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
            A Dual Skill Set, One Vision
          </h2>
        </motion.div>

        {/* Tab bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex justify-center mb-6"
        >
          <div
            className="inline-flex rounded-2xl p-1 gap-1"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
          >
            {tabs.map(tab => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-colors"
                  style={{ color: isActive ? '#0F172A' : 'var(--text-muted)' }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="tab-pill"
                      className="absolute inset-0 rounded-xl"
                      style={{ backgroundColor: 'var(--gold)' }}
                      transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <Icon style={{ fontSize: 16 }} />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.id === 'all' ? 'All' : tab.id === 'tech' ? 'Tech' : 'Legal'}</span>
                  </span>
                </motion.button>
              )
            })}
          </div>
        </motion.div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3"
          >
            {active.skills.map((s, i) => (
              <SkillCard key={s.label} icon={s.icon} label={s.label} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
