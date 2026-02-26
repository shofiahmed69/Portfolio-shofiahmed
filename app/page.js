'use client'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

const viewport = { once: true, margin: '-60px', amount: 0.15 }
const sectionTransition = { duration: 0.85, ease: [0.23, 1, 0.32, 1] }
const sectionInitial = { opacity: 0, y: 56 }
const sectionAnimate = { opacity: 1, y: 0 }

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...sectionTransition, delay: 0.1 }}
      >
        <Hero />
      </motion.div>

      <motion.div
        initial={sectionInitial}
        whileInView={sectionAnimate}
        viewport={viewport}
        transition={sectionTransition}
      >
        <Skills />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={sectionTransition}
      >
        <Projects />
      </motion.div>

      <motion.div
        initial={sectionInitial}
        whileInView={sectionAnimate}
        viewport={viewport}
        transition={sectionTransition}
      >
        <Footer />
      </motion.div>
    </motion.main>
  )
}
