'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'

const GITHUB_USER = 'shofiahmed69'
const REPOS_API = `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100&type=all`

// Fallback when API fails or returns empty (e.g. rate limit)
const FALLBACK_REPOS = [
    { id: 1, name: 'Portfolio-shofiahmed', description: 'Personal portfolio site built with Next.js, 3D animations & Firebase.', html_url: `https://github.com/${GITHUB_USER}/Portfolio-shofiahmed`, homepage: 'https://portfolio-kazi-shofi-ahmed.web.app', language: 'JavaScript', stargazers_count: 0, fork: false }
]

function getGitHubHeaders() {
    const token = typeof process !== 'undefined' && process.env.NEXT_PUBLIC_GITHUB_TOKEN
    return {
        Accept: 'application/vnd.github.v3+json',
        ...(token && { Authorization: `Bearer ${token}` })
    }
}

export default function Projects() {
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchRepos = () => {
        setLoading(true)
        setError(null)
        const controller = new AbortController()
        const timeout = setTimeout(() => controller.abort(), 12000)
        fetch(REPOS_API, { headers: getGitHubHeaders(), signal: controller.signal })
            .then(res => res.json().then(data => ({ ok: res.ok, status: res.status, data })))
            .then(({ ok, status, data }) => {
                clearTimeout(timeout)
                if (ok && Array.isArray(data)) {
                    const nonForks = data.filter(repo => !repo.fork)
                    const list = nonForks.length > 0 ? nonForks : data
                    setRepos(list.length > 0 ? list : FALLBACK_REPOS)
                } else if (Array.isArray(data) && data.length > 0) {
                    setRepos(data)
                } else {
                    setError(data?.message || `GitHub API ${status}`)
                    setRepos(FALLBACK_REPOS)
                }
                setLoading(false)
            })
            .catch(err => {
                clearTimeout(timeout)
                if (err.name !== 'AbortError') console.error(err)
                setError(err.message || 'Failed to load projects')
                setRepos(FALLBACK_REPOS)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchRepos()
    }, [])

    return (
        <section id="projects">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 48, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-80px', amount: 0.2 }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                >
                    Latest <span className="gradient-text">Projects</span>
                </motion.h2>

                {loading ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{ textAlign: 'center', padding: '4rem' }}
                    >
                        <motion.span
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            Loading awesome projects...
                        </motion.span>
                    </motion.div>
                ) : repos.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            textAlign: 'center',
                            padding: '3rem 1.5rem',
                            background: 'var(--glass)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '24px'
                        }}
                    >
                        <Github size={48} color="var(--text-muted)" style={{ marginBottom: '1rem' }} />
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                            {error ? 'Couldn\'t load projects from GitHub. Try again later.' : 'No public repositories yet.'}
                        </p>
                        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button type="button" className="primary" onClick={fetchRepos} style={{ margin: 0 }}>
                                Retry
                            </button>
                            <a
                                href={`https://github.com/${GITHUB_USER}?tab=repositories`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '12px',
                                    border: '1px solid var(--glass-border)',
                                    color: 'var(--text-primary)',
                                    textDecoration: 'none',
                                    fontWeight: 600
                                }}
                            >
                                <Github size={20} /> View on GitHub
                            </a>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px', amount: 0.1 }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
                            hidden: {}
                        }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
                            gap: '2rem',
                            width: '100%',
                            minHeight: '120px'
                        }}
                    >
                        {repos.map((repo) => (
                            <motion.div
                                key={repo.id}
                                variants={{
                                    hidden: { opacity: 0, y: 56, scale: 0.92 },
                                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.23, 1, 0.32, 1] } }
                                }}
                                className="glass-card"
                                style={{
                                    padding: 'clamp(1.25rem, 5vw, 2.5rem)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    border: '1px solid var(--glass-border)'
                                }}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
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
                    </motion.div>
                )}
            </div>
        </section>
    )
}
