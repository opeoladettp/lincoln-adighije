import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import NewspaperIcon from '@mui/icons-material/Newspaper'

const features = [
  {
    name: 'Vanguard Nigeria',
    description: 'Coverage of tech innovation and legal-tech professionals shaping Nigeria\'s digital future.',
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

export default function FeaturedIn() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-16 px-4 sm:px-6 lg:py-0">
      <div className="max-w-6xl mx-auto w-full" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
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
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="card rounded-2xl p-6 flex items-start gap-5 group transition-all"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: 'var(--gold)' + '18' }}
              >
                <NewspaperIcon style={{ color: 'var(--gold)', fontSize: 32 }} />
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
