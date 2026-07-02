import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import SchoolIcon from '@mui/icons-material/School'
import graduationImg from '../assets/lincoln-graduation.jpg'

const education = [
  {
    degree: 'LLM – Commercial Law',
    institution: 'Swansea University',
    year: '2022–2023',
    detail: 'Specialised in cross-border transactions, dispute resolution, and commercial contracts.',
  },
  {
    degree: 'LLB – Bachelor of Laws',
    institution: 'Afe Babalola University',
    year: '2019',
    detail: 'Foundation in Nigerian and international law, legal research, and advocacy.',
  },
  {
    degree: 'Full-Stack Software Engineering',
    institution: 'Decagon · HNG · Andela · Moat Academy',
    year: '2020–2024',
    detail: 'Intensive training covering React, Node.js, cloud infrastructure, and agile delivery in real-world engineering environments.',
  },
  {
    degree: 'Microsoft Office Specialist – Excel',
    institution: 'Microsoft',
    year: '2024',
    detail: 'Advanced data modelling, analysis, and reporting with Excel.',
  },
  {
    degree: 'Gemini Certified Educator',
    institution: 'Google for Education',
    year: 'Sep 2025',
    detail: 'Certified in leveraging AI tools for education and productivity.',
  },
  {
    degree: 'Networking – CCNA & Network+',
    institution: 'Soft Alliance',
    year: 'Jul 2025',
    detail: 'Networking fundamentals, infrastructure, and security principles.',
  },
  {
    degree: 'CS50 Web Programming with Python & JavaScript',
    institution: 'Harvard / edX',
    year: '2023',
    detail: 'Web development, Django, JavaScript, and SQL via Harvard\'s flagship CS50 programme.',
  },
]

export default function Education() {
  const ref = useRef(null)
  const sectionRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const headingY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.04, 1])

  return (
    <section id="education" className="py-16 px-4 sm:px-6 section-alt" ref={sectionRef}>
      <div className="max-w-6xl mx-auto w-full" ref={ref}>

        <motion.div
          style={{ y: headingY }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--gold)' }}>
            Education & Certifications
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
            Built on Rigorous Foundations
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* Image — sticky so it stays visible while scrolling through the cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden md:sticky md:top-24"
            style={{ border: '3px solid var(--gold-light)', height: 420 }}
          >
            <div
              className="absolute -inset-3 rounded-3xl blur-2xl opacity-20 pointer-events-none"
              style={{ backgroundColor: 'var(--gold)' }}
            />
            <motion.img
              src={graduationImg}
              alt="Lincoln Adighije graduation"
              style={{ scale: imgScale }}
              whileHover={{ scale: 1.06 }}
              transition={{ type: 'spring', stiffness: 180 }}
              className="w-full h-full object-cover object-top absolute inset-0"
            />
          </motion.div>

          {/* Cards — natural height, no stretching */}
          <div className="flex flex-col gap-3">
            {education.map((e, i) => (
              <motion.div
                key={e.degree}
                initial={{ opacity: 0, x: 40, scale: 0.97 }}
                animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{ delay: i * 0.1, duration: 0.45, type: 'spring', stiffness: 130 }}
                whileHover={{ scale: 1.02, x: 5, boxShadow: '0 8px 24px rgba(212,175,55,0.15)' }}
                className="card card-glow rounded-2xl p-3 flex gap-3 cursor-default"
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
