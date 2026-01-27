'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'

export default function Projects() {
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://api.github.com/users/shofiahmed69/repos?sort=updated&per_page=100')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    // Filter out forks if desired, or just show all as requested
                    setRepos(data.filter(repo => !repo.fork))
                }
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setLoading(false)
            })
    }, [])

    return (
        <section id="projects">
            <div className="container">
                <h2 className="section-title">Latest <span className="gradient-text">Projects</span></h2>

                {loading ? (
                    <div style={{ textAlign: 'center', padding: '4rem' }}>Loading awesome projects...</div>
                ) : (
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
                        gap: '2rem',
                        width: '100%'
                    }}>
                        {repos.map((repo, index) => (
                            <motion.div
                                key={repo.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="glass-card"
                                style={{
                                    padding: 'clamp(1.25rem, 5vw, 2.5rem)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    border: '1px solid var(--glass-border)'
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', alignItems: 'center' }}>
                                    <div style={{
                                        width: '42px',
                                        height: '42px',
                                        background: 'rgba(56, 189, 248, 0.1)',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '1px solid rgba(56, 189, 248, 0.2)'
                                    }}>
                                        <Github size={20} color="var(--accent)" />
                                    </div>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        {repo.homepage && (
                                            <a href={repo.homepage} target="_blank" rel="noopener noreferrer" style={{ padding: '8px', background: 'rgba(255,255,255,0.03)', borderRadius: '10px' }}>
                                                <ExternalLink size={18} color="var(--text-secondary)" />
                                            </a>
                                        )}
                                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={{ padding: '8px', background: 'rgba(255,255,255,0.03)', borderRadius: '10px' }}>
                                            <Github size={18} color="var(--text-secondary)" />
                                        </a>
                                    </div>
                                </div>

                                <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', marginBottom: '0.75rem', letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--text-primary)' }}>
                                    {repo.name.replace(/-/g, ' ')}
                                </h3>

                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: 1.6, flexGrow: 1 }}>
                                    {repo.description || 'A professional software solution built with modern architecture and best practices.'}
                                </p>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)', flexWrap: 'wrap' }}>
                                    {repo.language && (
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }} />
                                            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)' }}>{repo.language}</span>
                                        </div>
                                    )}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: 'auto' }}>
                                        <Star size={14} />
                                        <span>{repo.stargazers_count}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}
