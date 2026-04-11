import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SchoolIcon from '@mui/icons-material/School'
import graduationImg from '../assets/lincoln-graduation.jpg'

const education = [
  {
    degree: 'LLM – International Commercial Law',
    institution: 'Swansea University',
    year: '2023',
    detail: 'Specialised in cross-border transactions, dispute resolution, and commercial contracts.',
  },
  {
    degree: 'LLB – Bachelor of Laws',
    institution: 'Afe Babalola University',
    year: '2019',
    detail: 'Foundation in Nigerian and international law, legal research, and advocacy.',
  },
  {
    degree: 'Software Engineering',
    institution: 'Decagon · HNG · Andela',
    year: '2020–2023',
    detail: 'Intensive full-stack training covering React, Node.js, cloud infrastructure, and agile delivery.',
  },
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:py-0 section-alt">
      <div className="max-w-6xl mx-auto w-full" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--gold)' }}>
            Education
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
            Built on Rigorous Foundations
          </h2>
        </motion.div>

        {/* items-stretch so image matches total card column height */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">

          {/* Image — h-full stretches to match the cards column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden min-h-[200px]"
            style={{ border: '3px solid var(--gold-light)' }}
          >
            <div
              className="absolute -inset-3 rounded-3xl blur-2xl opacity-20 pointer-events-none"
              style={{ backgroundColor: 'var(--gold)' }}
            />
            <motion.img
              src={graduationImg}
              alt="Lincoln Adighije graduation"
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 180 }}
              className="w-full h-full object-cover object-top absolute inset-0"
            />
          </motion.div>

          {/* Cards — natural height, no stretching */}
          <div className="flex flex-col gap-3">
            {education.map((e, i) => (
              <motion.div
                key={e.degree}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                whileHover={{ scale: 1.02, x: 4 }}
                className="card rounded-2xl p-3 flex gap-3 cursor-default"
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: 'var(--gold)' + '22' }}
                >
                  <SchoolIcon style={{ color: 'var(--gold)', fontSize: 16 }} />
                </div>
                <div className="min-w-0">
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium inline-block mb-0.5"
                    style={{ backgroundColor: 'var(--gold)' + '18', color: 'var(--gold)' }}
                  >
                    {e.year}
                  </span>
                  <h3 className="font-bold text-sm leading-tight" style={{ color: 'var(--text-primary)' }}>{e.degree}</h3>
                  <p className="text-xs font-semibold" style={{ color: 'var(--gold)' }}>{e.institution}</p>
                  <p className="text-xs leading-snug mt-0.5" style={{ color: 'var(--text-muted)' }}>{e.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
