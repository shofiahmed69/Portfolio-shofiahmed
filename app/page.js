'use client'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] }
  }
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.12 } }
        }}
      >
        <motion.div variants={sectionVariants}><Hero /></motion.div>
        <motion.div variants={sectionVariants}><Skills /></motion.div>
        <motion.div variants={sectionVariants}><Projects /></motion.div>
        <motion.div variants={sectionVariants}><Footer /></motion.div>
      </motion.div>
    </main>
  )
}
