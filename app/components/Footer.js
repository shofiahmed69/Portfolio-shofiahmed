'use client'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

export default function Footer() {
    return (
        <footer id="contact" style={{
            padding: '8rem 0 4rem',
            borderTop: '1px solid var(--glass-border)',
            background: 'linear-gradient(to bottom, transparent, rgba(15, 23, 42, 0.5))',
            position: 'relative'
        }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 44 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px', amount: 0.2 }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                >
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem', fontWeight: 900, letterSpacing: '-0.04em' }}>
                        Let's Build Something <span className="gradient-text">Great</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
                        I'm currently looking for new opportunities and collaborations.
                    </p>

                    <motion.div
                        style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
                            hidden: {}
                        }}
                    >
                        <motion.a
                            href="https://github.com/shofiahmed69"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link btn-social btn-github"
                            variants={{
                                hidden: { opacity: 0, y: 32, scale: 0.9 },
                                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Github size={20} />
                            GitHub
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/shofi-ahmed-sh351"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link btn-social btn-linkedin"
                            variants={{
                                hidden: { opacity: 0, y: 32, scale: 0.9 },
                                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            LinkedIn
                        </motion.a>
                    </motion.div>
                </motion.div>

                <motion.p
                    style={{ marginTop: '6rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                >
                    © {new Date().getFullYear()} Kazi Shofi Ahmed. Built with Passion, Next.js & Framer Motion.
                </motion.p>
            </div>
        </footer>
    )
}
