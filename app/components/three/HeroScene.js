'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const ACCENT = new THREE.Color('#38bdf8')
const ACCENT_SECONDARY = new THREE.Color('#818cf8')

/**
 * Lightweight 3D hero background: floating particles + subtle mesh.
 * Designed for performance: low particle count on mobile (quality prop).
 */
function Particles({ count = 800, quality = 'high' }) {
  const meshRef = useRef(null)
  const lightRef = useRef(null)
  const actualCount = quality === 'low' ? 200 : quality === 'medium' ? 400 : count

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(actualCount * 3)
    const col = new Float32Array(actualCount * 3)
    for (let i = 0; i < actualCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12
      col[i * 3] = ACCENT.r
      col[i * 3 + 1] = ACCENT.g
      col[i * 3 + 2] = ACCENT.b
    }
    return [pos, col]
  }, [actualCount])

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.elapsedTime * 0.15
    meshRef.current.rotation.y = t * 0.2
    meshRef.current.rotation.x = Math.sin(t * 0.1) * 0.1
    const pos = meshRef.current.geometry.attributes.position.array
    for (let i = 0; i < actualCount; i++) {
      pos[i * 3 + 1] += Math.sin(t + i * 0.01) * 0.002
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={actualCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={actualCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={quality === 'low' ? 0.08 : 0.06}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

/**
 * Static version (single frame) for prefers-reduced-motion.
 */
function ParticlesStatic({ count = 400 }) {
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12
      col[i * 3] = ACCENT.r
      col[i * 3 + 1] = ACCENT.g
      col[i * 3 + 2] = ACCENT.b
    }
    return [pos, col]
  }, [count])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        vertexColors
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

export default function HeroScene({ quality = 'high', reducedMotion = false }) {
  return (
    <>
      <color attach="background" args={['#020617']} />
      <fog attach="fog" args={['#020617', 8, 22]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 4]} intensity={0.6} color={ACCENT} />
      <pointLight position={[-4, -2, 2]} intensity={0.3} color={ACCENT_SECONDARY} />
      {reducedMotion ? <ParticlesStatic count={300} /> : <Particles count={800} quality={quality} />}
    </>
  )
}
