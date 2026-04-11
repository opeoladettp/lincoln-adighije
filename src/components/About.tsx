import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import SpeedIcon from '@mui/icons-material/Speed'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory'
import portraitImg from '../assets/lincoln-portrait.jpg'

const stats = [
  { icon: EmojiEventsIcon, value: '96%', label: 'Satisfaction Rate' },
  { icon: SpeedIcon, value: '25%', label: 'Response Time Improvement' },
  { icon: WorkHistoryIcon, value: '7+', label: 'Years Combined Experience' },
]

export default function About() {
  const ref = useRef(null)
  const sectionRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['-2%', '2%'])

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:py-0" ref={sectionRef}>
      <div className="max-w-6xl mx-auto w-full" ref={ref}>
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image col */}
          <motion.div
            style={{ y: imgY }}
            className="parallax-layer flex justify-center order-2 md:order-1"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-full max-w-sm pb-14">
              <div
                className="absolute -inset-3 rounded-3xl blur-2xl opacity-20 pointer-events-none"
                style={{ backgroundColor: 'var(--gold)' }}
              />
              <motion.img
                src={portraitImg}
                alt="Lincoln Adighije – confident portrait"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 180 }}
                className="relative w-full rounded-3xl object-cover object-top shadow-2xl"
                style={{ border: '3px solid var(--gold-light)', height: 320 }}
              />
              {/* Stats row below image */}
              <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 gap-2">
                {stats.map((s, i) => {
                  const Icon = s.icon
                  return (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 16 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.12, type: 'spring' }}
                      whileHover={{ scale: 1.06, y: -2 }}
                      className="glass rounded-xl p-2 text-center cursor-default"
                    >
                      <Icon style={{ color: 'var(--gold)', fontSize: 18 }} className="mx-auto block mb-0.5" />
                      <div className="text-sm font-extrabold leading-none" style={{ color: 'var(--gold)' }}>
                        {s.value}
                      </div>
                      <div className="text-[9px] mt-0.5 leading-tight" style={{ color: 'var(--text-muted)' }}>
                        {s.label}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Text col */}
          <motion.div
            style={{ y: textY }}
            className="parallax-layer order-1 md:order-2"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--gold)' }}>
              About Me
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4" style={{ color: 'var(--text-primary)' }}>
              Where Legal Precision Meets Engineering Excellence
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-muted)' }}>
              Lincoln Adighije is a unique professional who combines structured legal reasoning with
              hands-on software engineering. With an LLB from Afe Babalola University and an LLM in
              Commercial Law from Swansea University, he transitioned into tech to merge analytical
              thinking with practical problem-solving.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              He has honed his technical expertise through elite programs like the Decagon Institute,
              HNG Internship, and Andela Learning Community — building fintech platforms and
              cloud-native solutions that drive real impact.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
