'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const navItems = [
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
]

export default function Navbar() {
    return (
        <div className="navbar-wrap">
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="navbar-pill"
        >
            <div className="navbar-links" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center', minWidth: 0 }}>
                {navItems.map((item, i) => (
                    <motion.div
                        key={item.href}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Link href={item.href} className="nav-link nav-link-animated">
                            <span className="nav-link-text">{item.label}</span>
                            <motion.span
                                className="nav-link-underline"
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </Link>
                    </motion.div>
                ))}
            </div>
            <style jsx>{`
                .nav-link-animated {
                    position: relative;
                    display: inline-block;
                }
                .nav-link-underline {
                    position: absolute;
                    bottom: 4px;
                    left: 0;
                    right: 0;
                    height: 2px;
                    background: linear-gradient(90deg, var(--accent), var(--accent-secondary));
                    border-radius: 2px;
                    transform-origin: left;
                }
            `}</style>
        </motion.nav>
        </div>
    )
}
