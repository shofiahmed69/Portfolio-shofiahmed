'use client'
import { motion } from 'framer-motion'
import {
    Code2, Database, Globe, Cpu, Smartphone,
    Layers, Zap, Terminal, Brain, Palette, FileCode
} from 'lucide-react'

const skills = [
    { name: 'Java', icon: <Terminal size={24} />, color: '#f8981d' },
    { name: 'Python', icon: <FileCode size={24} />, color: '#3776ab' },
    { name: 'Next.js', icon: <Globe size={24} />, color: '#ffffff' },
    { name: 'Node.js', icon: <Cpu size={24} />, color: '#339933' },
    { name: 'React.js', icon: <Zap size={24} />, color: '#61dafb' },
    { name: 'Express.js', icon: <Layers size={24} />, color: '#ffffff' },
    { name: 'Firebase', icon: <Database size={24} />, color: '#ffca28' },
    { name: 'MongoDB', icon: <Database size={24} />, color: '#47a248' },
    { name: 'TensorFlow', icon: <Brain size={24} />, color: '#ff6f00' },
    { name: 'MediaPipe', icon: <Brain size={24} />, color: '#00c1af' },
    { name: 'Flutter', icon: <Smartphone size={24} />, color: '#02569b' },
]

export default function Skills() {
    return (
        <section id="skills" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">Technical <span className="gradient-text">Expertise</span></h2>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                    gap: '1.5rem',
                    width: '100%'
                }}>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="glass-card"
                            style={{
                                padding: '2rem 1rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '1rem',
                                textAlign: 'center',
                                border: `1px solid rgba(255, 255, 255, 0.05)`
                            }}
                            whileHover={{
                                scale: 1.05,
                                borderColor: skill.color + '50',
                                boxShadow: `0 10px 30px -10px ${skill.color}30`
                            }}
                        >
                            <div style={{
                                position: 'relative',
                                width: '56px',
                                height: '56px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: `${skill.color}10`,
                                borderRadius: '14px',
                                color: skill.color,
                                border: `1px solid ${skill.color}20`,
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: skill.color,
                                    filter: 'blur(15px)',
                                    opacity: 0.15,
                                    borderRadius: '14px',
                                    zIndex: -1
                                }} />
                                {skill.icon}
                            </div>
                            <span style={{
                                fontWeight: 600,
                                fontSize: '0.95rem',
                                color: 'var(--foreground)',
                                opacity: 0.9
                            }}>
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
