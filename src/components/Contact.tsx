import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import SendIcon from '@mui/icons-material/Send'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  const inputStyle = {
    backgroundColor: 'var(--bg-secondary)',
    border: '1px solid var(--border)',
    color: 'var(--text-primary)',
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 section-alt">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--gold)' }}>
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: 'var(--text-primary)' }}>
            Let's Build Something Together
          </h2>
          <p className="text-base" style={{ color: 'var(--text-muted)' }}>
            Whether it's a legal-tech project, a full-stack build, or a conversation — reach out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="card rounded-2xl p-6 sm:p-8 flex flex-col gap-4"
          >
            {sent ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-3">✅</div>
                <p className="font-semibold" style={{ color: 'var(--gold)' }}>Message sent. I'll be in touch soon.</p>
              </div>
            ) : (
              <>
                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2"
                  style={{ ...inputStyle, '--tw-ring-color': 'var(--gold)' } as React.CSSProperties}
                />
                <input
                  required
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2"
                  style={inputStyle}
                />
                <textarea
                  required
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all"
                  style={inputStyle}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(212,175,55,0.3)' }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all"
                  style={{ backgroundColor: 'var(--gold)', color: '#0F172A' }}
                >
                  <SendIcon fontSize="small" /> Send Message
                </motion.button>
              </>
            )}
          </motion.form>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4 justify-center"
          >
            {[
              { icon: EmailIcon, label: 'Email', value: 'lincoln@example.com', href: 'mailto:lincoln@example.com' },
              { icon: LinkedInIcon, label: 'LinkedIn', value: 'linkedin.com/in/lincoln-adighije', href: 'https://linkedin.com' },
              { icon: GitHubIcon, label: 'GitHub', value: 'github.com/lincoln-adighije', href: 'https://github.com' },
            ].map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.03, x: 4 }}
                className="card rounded-xl p-4 flex items-center gap-4 transition-all"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'var(--gold)' + '18' }}
                >
                  <Icon style={{ color: 'var(--gold)', fontSize: 20 }} />
                </div>
                <div>
                  <p className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>{label}</p>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
