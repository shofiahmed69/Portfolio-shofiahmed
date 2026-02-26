'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import HeroScene from './HeroScene'

const Canvas = dynamic(
  () => import('@react-three/fiber').then((mod) => mod.Canvas),
  { ssr: false }
)

/**
 * Lazy-loaded 3D hero background. Respects prefers-reduced-motion and device tier.
 * Renders a reserved box to avoid CLS; canvas mounts inside it.
 */
export default function Hero3DWrapper() {
  const [mounted, setMounted] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [quality, setQuality] = useState('high') // 'high' | 'medium' | 'low'
  const [show3D, setShow3D] = useState(true)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const mediaReduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaReduced.matches)
    const onChange = (e) => setReducedMotion(e.matches)
    mediaReduced.addEventListener('change', onChange)

    const width = window.innerWidth
    if (width < 768) {
      setQuality('low') // 3D on mobile with low quality so animation is visible
    } else if (width < 1024) {
      setQuality('medium')
    } else {
      setQuality('high')
    }

    return () => mediaReduced.removeEventListener('change', onChange)
  }, [mounted])

  if (!mounted || reducedMotion) return null

  return (
    <div
      className="hero-3d-wrapper"
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        minHeight: '100%',
        overflow: 'hidden'
      }}
    >
      <Canvas
        dpr={quality === 'low' ? [1, 1.5] : [1, 2]}
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ antialias: quality !== 'low', alpha: true, powerPreference: 'high-performance' }}
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <HeroScene quality={quality} reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  )
}
