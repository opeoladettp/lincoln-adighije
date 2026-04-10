import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SchoolIcon from '@mui/icons-material/School'
import graduationImg from '../assets/lincoln-graduation.png'

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
    <section id="education" className="py-12 px-4 sm:px-6 lg:py-0 section-alt overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--gold)' }}>
            Education
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
            Built on Rigorous Foundations
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Graduation image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div
                className="absolute -inset-3 rounded-3xl blur-2xl opacity-20"
                style={{ backgroundColor: 'var(--gold)' }}
              />
              <motion.img
                src={graduationImg}
                alt="Lincoln Adighije graduation"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 180 }}
                className="relative w-full rounded-3xl object-cover shadow-2xl"
                style={{ border: '3px solid var(--gold-light)', maxHeight: 340, objectPosition: 'top' }}
              />
            </div>
          </motion.div>

          {/* Cards */}
          <div className="flex flex-col gap-5">
            {education.map((e, i) => (
              <motion.div
                key={e.degree}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ scale: 1.02, x: 4 }}
                className="card rounded-2xl p-4 flex gap-4 cursor-default"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1"
                  style={{ backgroundColor: 'var(--gold)' + '22' }}
                >
                  <SchoolIcon style={{ color: 'var(--gold)', fontSize: 20 }} />
                </div>
                <div>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium inline-block mb-1"
                    style={{ backgroundColor: 'var(--gold)' + '18', color: 'var(--gold)' }}
                  >
                    {e.year}
                  </span>
                  <h3 className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>{e.degree}</h3>
                  <p className="text-sm font-semibold mb-1" style={{ color: 'var(--gold)' }}>{e.institution}</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{e.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
