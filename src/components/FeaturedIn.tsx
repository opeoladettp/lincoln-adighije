import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

const features = [
  {
    name: 'Vanguard Nigeria',
    description: 'Coverage of tech innovation and legal-tech professionals in Nigeria.',
    url: 'https://www.vanguardngr.com',
    abbr: 'VG',
  },
  {
    name: 'The Sun Nigeria',
    description: "Spotlight on emerging voices in Nigeria's growing digital economy.",
    url: 'https://www.sunnewsonline.com',
    abbr: 'SN',
  },
]

export default function FeaturedIn() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--gold)' }}>
            Featured In
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
            Recognised by Leading Publications
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {features.map((f, i) => (
            <motion.a
              key={f.name}
              href={f.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              whileHover={{ scale: 1.04, y: -4 }}
              className="card rounded-2xl p-6 flex items-center gap-4 group w-full sm:w-72 transition-all"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-xl font-extrabold shrink-0"
                style={{ backgroundColor: 'var(--gold)' + '18', color: 'var(--gold)' }}
              >
                {f.abbr}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 font-bold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>
                  <span className="truncate">{f.name}</span>
                  <OpenInNewIcon
                    fontSize="small"
                    className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                    style={{ color: 'var(--gold)', fontSize: 14 }}
                  />
                </div>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{f.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
