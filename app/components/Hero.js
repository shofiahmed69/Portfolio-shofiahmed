'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } }
    }

    return (
        <section id="about" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
            <div className="container">
                <div className="grid-container hero-grid" style={{ alignItems: 'center' }}>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="hero-content"
                    >
                        <motion.div variants={itemVariants} className="developer-tag" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <span style={{ width: '40px', height: '1px', background: 'var(--accent)' }} />
                            <span style={{ color: 'var(--accent)', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.8rem' }}>
                                Full Stack Developer
                            </span>
                        </motion.div>

                        <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(3.5rem, 10vw, 6rem)', lineHeight: 1.1, marginBottom: '2.5rem', letterSpacing: '-0.05em', fontWeight: 900 }}>
                            Intelligent <br />
                            <span className="gradient-text">Experiences.</span>
                        </motion.h1>

                        <motion.p variants={itemVariants} style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)', color: 'var(--text-secondary)', marginBottom: '3.5rem', maxWidth: '600px', lineHeight: 1.6, fontWeight: 400 }}>
                            Hi, I'm <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Kazi Shofi Ahmed</span>. I build scalable, AI-powered applications where cutting-edge technology meets intuitive design.
                        </motion.p>

                        <motion.div variants={itemVariants} className="cta-group" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                            <button className="primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                                Explore My Projects
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                            </button>

                            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.3s ease' }} className="hover-link">
                                Get in touch
                                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0 }}
                        className="hero-visual"
                        style={{ position: 'relative' }}
                    >
                        <div style={{
                            position: 'absolute',
                            inset: '-20px',
                            background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
                            opacity: 0.15,
                            filter: 'blur(40px)',
                            zIndex: -1
                        }} />

                        <div className="neon-border" style={{
                            borderRadius: '40px',
                            padding: '12px',
                            background: 'var(--glass)',
                            backdropFilter: 'blur(15px)',
                            maxWidth: '420px',
                            width: '100%',
                            position: 'relative',
                            boxShadow: '0 0 40px rgba(14, 165, 233, 0.25), inset 0 0 20px rgba(14, 165, 233, 0.1)'
                        }}>
                            <Image
                                src="/profile.jpg"
                                alt="Kazi Shofi Ahmed"
                                width={420}
                                height={540}
                                priority
                                style={{
                                    borderRadius: '30px',
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block',
                                    filter: 'contrast(1.05) brightness(1.05)'
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
            <style jsx>{`
                .hover-link:hover {
                    color: var(--accent) !important;
                    transform: translateX(5px);
                }
                
                .hero-content {
                    grid-column: 1 / 8;
                    text-align: left;
                }
                
                .hero-visual {
                    grid-column: 8 / -1;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    width: 100%;
                }
                
                @keyframes floating {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0px); }
                }

                @media (max-width: 1024px) {
                    .hero-grid {
                        display: flex !important;
                        flex-direction: column-reverse !important;
                        gap: 1rem !important;
                        padding-top: 1rem !important;
                        padding-bottom: 1rem !important;
                    }

                    .hero-content {
                        grid-column: span 12 !important;
                        text-align: center;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-bottom: 1rem;
                    }
                    
                    .hero-visual {
                        grid-column: span 12 !important;
                        justify-self: center !important;
                        margin-bottom: 0.5rem;
                        width: 100%;
                        justify-content: center;
                    }
                    
                    .neon-border {
                        max-width: 200px !important;
                        margin: 0 auto;
                        animation: neon-pulse 4s infinite ease-in-out, floating 6s ease-in-out infinite !important;
                    }

                    .developer-tag {
                        justify-content: center !important;
                        margin-bottom: 0.75rem !important;
                        transform: scale(0.9);
                    }
                    
                    h1 {
                        margin-bottom: 0.75rem !important;
                        font-size: 2.25rem !important;
                        line-height: 1.1 !important;
                    }
                    
                    p {
                        margin-bottom: 1.25rem !important;
                        font-size: 0.95rem !important;
                        max-width: 90% !important;
                    }

                    .cta-group {
                        justify-content: center !important;
                        width: 100%;
                        gap: 1rem !important;
                    }

                    p {
                        margin-left: auto;
                        margin-right: auto;
                    }
                }

                @media (max-width: 480px) {
                    .neon-border {
                        max-width: 180px !important;
                    }

                    .cta-group {
                        flex-direction: column;
                        gap: 0.75rem !important;
                    }
                    
                    button.primary {
                        width: 100%;
                        padding: 0.8rem 1.5rem;
                    }
                }
            `}</style>
        </section>
    )
}
