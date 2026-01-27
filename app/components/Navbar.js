'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            style={{
                position: 'fixed',
                top: '0.75rem',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 'fit-content', // Changed from min(92%, 1100px)
                zIndex: 100,
                padding: '0.6rem 1.5rem', // Slightly more compact padding
                background: 'rgba(2, 6, 23, 0.7)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: '50px', // More rounded for pill shape
                border: '1px solid var(--glass-border)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4), 0 0 20px rgba(56, 189, 248, 0.05)'
            }}
        >
            <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="#skills" className="nav-link">Skills</Link>
                <Link href="#projects" className="nav-link">Projects</Link>
                <Link href="#contact" className="nav-link">Contact</Link>
            </div>
        </motion.nav>
    )
}
