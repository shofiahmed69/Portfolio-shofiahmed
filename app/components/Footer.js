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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem', fontWeight: 900, letterSpacing: '-0.04em' }}>
                        Let's Build Something <span className="gradient-text">Great</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
                        I'm currently looking for new opportunities and collaborations.
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        <a href="https://github.com/shofiahmed69" target="_blank" rel="noopener noreferrer" className="nav-link btn-social btn-github">
                            <Github size={20} />
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/shofi-ahmed-sh351" target="_blank" rel="noopener noreferrer" className="nav-link btn-social btn-linkedin">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            LinkedIn
                        </a>
                    </div>
                </motion.div>

                <p style={{ marginTop: '6rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    © {new Date().getFullYear()} Kazi Shofi Ahmed. Built with Passion, Next.js & Framer Motion.
                </p>
            </div>
        </footer>
    )
}
