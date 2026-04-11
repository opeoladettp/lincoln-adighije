import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import SendIcon from '@mui/icons-material/Send'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import PersonIcon from '@mui/icons-material/Person'
import MessageIcon from '@mui/icons-material/Message'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  const inputBase: React.CSSProperties = {
    backgroundColor: 'var(--bg-primary)',
    border: '1.5px solid var(--border)',
    color: 'var(--text-primary)',
    width: '100%',
    borderRadius: '0.75rem',
    padding: '0.75rem 1rem',
    fontSize: '0.875rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  const socials = [
    { icon: EmailIcon, label: 'Email', value: 'lincoln@example.com', href: 'mailto:lincoln@example.com' },
    { icon: LinkedInIcon, label: 'LinkedIn', value: 'linkedin.com/in/lincoln-adighije', href: 'https://linkedin.com' },
    { icon: GitHubIcon, label: 'GitHub', value: 'github.com/lincoln-adighije', href: 'https://github.com' },
  ]

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:py-0 section-alt">
      <div className="max-w-6xl mx-auto w-full" ref={ref}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--gold)' }}>
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2" style={{ color: 'var(--text-primary)' }}>
            Let's Build Something Together
          </h2>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Whether it's a legal-tech project, a full-stack build, or a conversation — reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 items-start">

          {/* Form — takes 3/5 width on large screens */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 card rounded-2xl p-6 sm:p-8 flex flex-col gap-4"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 gap-3">
                <div className="text-5xl">✅</div>
                <p className="font-bold text-lg" style={{ color: 'var(--gold)' }}>Message sent!</p>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>I'll be in touch soon.</p>
              </div>
            ) : (
              <>
                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold flex items-center gap-1" style={{ color: 'var(--text-muted)' }}>
                      <PersonIcon style={{ fontSize: 14 }} /> Your Name
                    </label>
                    <input required type="text" placeholder="Lincoln Adighije" style={inputBase} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold flex items-center gap-1" style={{ color: 'var(--text-muted)' }}>
                      <EmailIcon style={{ fontSize: 14 }} /> Email Address
                    </label>
                    <input required type="email" placeholder="you@example.com" style={inputBase} />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>
                    Subject
                  </label>
                  <input type="text" placeholder="Project enquiry / Collaboration / Other" style={inputBase} />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold flex items-center gap-1" style={{ color: 'var(--text-muted)' }}>
                    <MessageIcon style={{ fontSize: 14 }} /> Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project or idea..."
                    style={{ ...inputBase, resize: 'none' }}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03, boxShadow: '0 8px 28px rgba(212,175,55,0.35)' }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm w-full"
                  style={{ backgroundColor: 'var(--gold)', color: '#0F172A' }}
                >
                  <SendIcon fontSize="small" /> Send Message
                </motion.button>
              </>
            )}
          </motion.form>

          {/* Sidebar — takes 2/5 width */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Availability badge */}
            <div
              className="card rounded-2xl p-5 flex items-center gap-4"
            >
              <div className="relative shrink-0">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#10B981' }} />
                <div className="absolute inset-0 w-3 h-3 rounded-full animate-ping opacity-60" style={{ backgroundColor: '#10B981' }} />
              </div>
              <div>
                <p className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>Available for opportunities</p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Open to freelance & full-time roles</p>
              </div>
            </div>

            {/* Social links */}
            {socials.map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.1 }}
                whileHover={{ scale: 1.03, x: 4 }}
                className="card rounded-xl p-4 flex items-center gap-4 transition-all"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'var(--gold)' + '18' }}
                >
                  <Icon style={{ color: 'var(--gold)', fontSize: 20 }} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>{label}</p>
                  <p className="text-sm font-semibold truncate" style={{ color: 'var(--text-primary)' }}>{value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
