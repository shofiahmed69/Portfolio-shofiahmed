'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const Hero3DWrapper = dynamic(() => import('./three/Hero3DWrapper'), { ssr: false })

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
        <section id="about" className="hero-section" style={{ minHeight: '100vh', minHeight: '100dvh', display: 'flex', alignItems: 'center', position: 'relative' }}>
            {/* 3D background (lazy-loaded; hidden on mobile / reduced-motion per PRD) */}
            <Hero3DWrapper />
            <div className="container hero-content-wrapper" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
                <div className="grid-container hero-grid hero-grid-desktop" style={{ alignItems: 'center' }}>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="hero-content"
                        style={{ gridColumn: '1 / 8' }}
                    >
                        <motion.div variants={itemVariants} className="developer-tag hero-tag" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <span style={{ width: '40px', height: '1px', background: 'var(--accent)' }} />
                            <span style={{ color: 'var(--accent)', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.8rem' }}>
                                Full Stack Developer
                            </span>
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="hero-title" style={{ lineHeight: 1.1, letterSpacing: '-0.05em', fontWeight: 900 }}>
                            Intelligent <br />
                            <span className="gradient-text">Experiences.</span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="hero-intro" style={{ color: 'var(--text-secondary)', maxWidth: '600px', lineHeight: 1.6, fontWeight: 400 }}>
                            Hi, I'm <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Kazi Shofi Ahmed</span>. I build scalable, AI-powered applications where cutting-edge technology meets intuitive design.
                        </motion.p>

                        <motion.div variants={itemVariants} className="cta-group" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                            <button className="primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                                Explore My Projects
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                            </button>

                            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.3s ease', minHeight: 44, minWidth: 44 }} className="hover-link">
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
                        style={{ position: 'relative', gridColumn: '8 / -1', minWidth: 0 }}
                    >
                        <motion.div
                            animate={{ opacity: [0.1, 0.25, 0.1], scale: [1, 1.1, 1] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            style={{
                                position: 'absolute',
                                inset: '-20px',
                                background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
                                filter: 'blur(40px)',
                                zIndex: -1
                            }}
                        />

                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                            className="neon-border hero-profile-wrap" style={{
                            borderRadius: '40px',
                            padding: '12px',
                            background: 'var(--glass)',
                            backdropFilter: 'blur(15px)',
                            maxWidth: '420px',
                            minWidth: '280px',
                            width: '100%',
                            position: 'relative',
                            boxShadow: '0 0 40px rgba(14, 165, 233, 0.25), inset 0 0 20px rgba(14, 165, 233, 0.1)'
                        }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/profile.jpg"
                                alt="Kazi Shofi Ahmed"
                                width={420}
                                height={540}
                                loading="eager"
                                decoding="sync"
                                style={{
                                    borderRadius: '30px',
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block',
                                    filter: 'contrast(1.05) brightness(1.05)'
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            <style jsx>{`
                .hero-section {
                    isolation: isolate;
                }
                .hover-link:hover {
                    color: var(--accent) !important;
                    transform: translateX(5px);
                }
                
                .hero-content {
                    text-align: left;
                }
                
                .hero-visual {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    width: 100%;
                    min-width: 0;
                }
                .hero-profile-wrap {
                    overflow: hidden;
                }
                .hero-profile-wrap img {
                    max-width: 100%;
                    object-fit: cover;
                }
                .hero-tag { margin-bottom: 2rem; }
                .hero-title { margin-bottom: 2.5rem; font-size: clamp(3.5rem, 10vw, 6rem); }
                .hero-intro { margin-bottom: 3.5rem; font-size: clamp(1.1rem, 1.8vw, 1.3rem); }
                
                @keyframes floating {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0px); }
                }

                @media (max-width: 1024px) {
                    .hero-section {
                        min-height: 100vh;
                        min-height: 100dvh;
                        height: 100dvh !important;
                        max-height: 100dvh !important;
                        align-items: stretch !important;
                        padding-top: 0.15rem !important;
                        padding-bottom: 0.15rem !important;
                        overflow: hidden !important;
                        display: flex !important;
                        flex-direction: column !important;
                    }
                    .hero-content-wrapper {
                        padding-top: 0 !important;
                        padding-bottom: 0 !important;
                        flex: 1 1 0 !important;
                        min-height: 0 !important;
                        overflow: hidden !important;
                        display: flex !important;
                        flex-direction: column !important;
                    }
                    .hero-grid {
                        display: flex !important;
                        flex-direction: column-reverse !important;
                        gap: 0 !important;
                        padding-top: 0 !important;
                        padding-bottom: 0 !important;
                        width: 100%;
                        flex: 1 1 0 !important;
                        min-height: 0 !important;
                    }

                    .hero-content {
                        grid-column: span 12 !important;
                        text-align: center;
                        display: flex !important;
                        flex-direction: column !important;
                        align-items: center;
                        margin-bottom: 0 !important;
                        flex: 1 1 0 !important;
                        min-height: 0 !important;
                    }
                    
                    .hero-visual {
                        grid-column: span 12 !important;
                        justify-self: center !important;
                        margin-bottom: 0.15rem !important;
                        width: 100%;
                        justify-content: center;
                        overflow: hidden !important;
                        flex-shrink: 0 !important;
                    }
                    
                    .neon-border {
                        width: 24px !important;
                        max-width: 24px !important;
                        min-width: 0 !important;
                        height: 24px !important;
                        margin: 0 auto;
                        padding: 2px !important;
                        box-sizing: border-box !important;
                        overflow: hidden !important;
                        animation: neon-pulse 4s infinite ease-in-out, floating 6s ease-in-out infinite !important;
                    }
                    .neon-border img {
                        width: 100% !important;
                        max-width: 100% !important;
                        height: 100% !important;
                        min-height: 0 !important;
                        max-height: 100% !important;
                        object-fit: cover !important;
                        display: block !important;
                    }

                    .hero-tag, .developer-tag {
                        justify-content: center !important;
                        margin-bottom: 0.12rem !important;
                        transform: scale(0.88);
                        font-size: 0.5rem !important;
                        flex-shrink: 0 !important;
                    }
                    
                    .hero-title, h1 {
                        margin-bottom: 0.12rem !important;
                        font-size: 0.8rem !important;
                        line-height: 1.06 !important;
                        flex-shrink: 0 !important;
                    }
                    
                    .hero-intro, .hero-content p {
                        margin-bottom: 0.15rem !important;
                        font-size: 0.58rem !important;
                        line-height: 1.5 !important;
                        max-width: 90% !important;
                        flex-shrink: 1 !important;
                        min-height: 0 !important;
                    }

                    .cta-group {
                        justify-content: center !important;
                        width: 100%;
                        gap: 0.35rem !important;
                        margin-top: auto !important;
                        flex-shrink: 0 !important;
                        padding-top: 0.75rem !important;
                        padding-bottom: 0.25rem !important;
                    }
                    button.primary {
                        padding: 0.45rem 0.75rem !important;
                        font-size: 0.72rem !important;
                    }

                    p {
                        margin-left: auto;
                        margin-right: auto;
                    }
                }

                /* Mobile: tiny image, CTAs pinned to bottom so always visible */
                @media (max-width: 480px) {
                    .hero-section {
                        padding-top: 0.1rem !important;
                        padding-bottom: 0 !important;
                        min-height: 100dvh !important;
                        height: 100dvh !important;
                        max-height: 100dvh !important;
                        align-items: stretch !important;
                        overflow: hidden !important;
                    }
                    .hero-content-wrapper {
                        padding-top: 0 !important;
                        padding-bottom: 0 !important;
                        flex: 1 1 0 !important;
                        min-height: 0 !important;
                        overflow: hidden !important;
                    }
                    .hero-grid {
                        gap: 0 !important;
                        padding-top: 0 !important;
                        padding-bottom: 0 !important;
                        min-height: 0 !important;
                    }
                    .hero-visual {
                        overflow: hidden !important;
                        justify-content: center !important;
                        margin-bottom: 0.1rem !important;
                    }
                    .neon-border {
                        width: 20px !important;
                        max-width: 20px !important;
                        min-width: 0 !important;
                        height: 20px !important;
                        padding: 2px !important;
                        box-sizing: border-box !important;
                        overflow: hidden !important;
                    }
                    .neon-border img {
                        width: 100% !important;
                        max-width: 100% !important;
                        height: 100% !important;
                        min-height: 0 !important;
                        max-height: 100% !important;
                        object-fit: cover !important;
                        display: block !important;
                    }
                    .hero-tag, .developer-tag {
                        margin-bottom: 0.08rem !important;
                        font-size: 0.4rem !important;
                    }
                    .developer-tag span:first-of-type {
                        width: 5px !important;
                    }
                    .hero-title, h1 {
                        font-size: 0.65rem !important;
                        margin-bottom: 0.08rem !important;
                        line-height: 1.04 !important;
                    }
                    .hero-intro, .hero-content p {
                        font-size: 0.46rem !important;
                        margin-bottom: 0.08rem !important;
                        line-height: 1.45 !important;
                        display: -webkit-box !important;
                        -webkit-line-clamp: 2 !important;
                        -webkit-box-orient: vertical !important;
                        overflow: hidden !important;
                    }
                    .cta-group {
                        flex-direction: row !important;
                        flex-wrap: wrap !important;
                        justify-content: center !important;
                        gap: 0.35rem !important;
                        margin-top: auto !important;
                        margin-bottom: 0 !important;
                        padding-top: 0.6rem !important;
                        padding-bottom: 0.5rem !important;
                        flex-shrink: 0 !important;
                    }
                    button.primary {
                        width: auto !important;
                        padding: 0.4rem 0.6rem !important;
                        font-size: 0.62rem !important;
                    }
                    .hover-link {
                        font-size: 0.62rem !important;
                        min-height: 38px !important;
                        min-width: 38px !important;
                    }
                }

                /* Short viewports: smallest image, CTAs always at bottom */
                @media (max-width: 1024px) and (max-height: 700px) {
                    .hero-section {
                        padding-top: 0.08rem !important;
                        padding-bottom: 0 !important;
                        height: 100dvh !important;
                        max-height: 100dvh !important;
                        overflow: hidden !important;
                    }
                    .hero-visual {
                        overflow: hidden !important;
                        margin-bottom: 0.06rem !important;
                    }
                    .hero-grid {
                        gap: 0 !important;
                    }
                    .neon-border {
                        width: 20px !important;
                        max-width: 20px !important;
                        height: 20px !important;
                        padding: 2px !important;
                        overflow: hidden !important;
                    }
                    .neon-border img {
                        height: 100% !important;
                        min-height: 0 !important;
                        max-height: 100% !important;
                        object-fit: cover !important;
                    }
                    .hero-tag, .developer-tag {
                        margin-bottom: 0.06rem !important;
                        font-size: 0.38rem !important;
                    }
                    .hero-title, h1 {
                        font-size: 0.62rem !important;
                        margin-bottom: 0.06rem !important;
                    }
                    .hero-intro, .hero-content p {
                        font-size: 0.44rem !important;
                        margin-bottom: 0.06rem !important;
                        line-height: 1.4 !important;
                        -webkit-line-clamp: 2 !important;
                    }
                    .cta-group {
                        gap: 0.28rem !important;
                        margin-top: auto !important;
                        padding-top: 0.5rem !important;
                        padding-bottom: 0.3rem !important;
                    }
                    button.primary {
                        padding: 0.35rem 0.5rem !important;
                        font-size: 0.58rem !important;
                    }
                }
            `}</style>
        </section>
    )
}
