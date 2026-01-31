'use client'

import { useEffect, useRef } from 'react'

export default function ParticleCanvas() {
 const canvasRef = useRef<HTMLCanvasElement>(null)

 useEffect(() => {
  const canvas = canvasRef.current
  if (!canvas) return

  const ctx = canvas.getContext('2d', { alpha: true })
  if (!ctx) return

  // Set canvas size
  const setCanvasSize = () => {
   canvas.width = window.innerWidth
   canvas.height = window.innerHeight
  }
  setCanvasSize()
  window.addEventListener('resize', setCanvasSize)

  // Particle system
  const particles: Array<{
   x: number
   y: number
   vx: number
   vy: number
   size: number
   opacity: number
  }> = []

  const particleCount = 100
  for (let i = 0; i < particleCount; i++) {
   particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.5 + 0.2,
   })
  }

  // Animation loop
  let animationFrameId: number
  const animate = () => {
   ctx.fillStyle = 'rgba(5, 5, 10, 0.1)'
   ctx.fillRect(0, 0, canvas.width, canvas.height)

   particles.forEach((particle) => {
    particle.x += particle.vx
    particle.y += particle.vy

    // Wrap around edges
    if (particle.x < 0) particle.x = canvas.width
    if (particle.x > canvas.width) particle.x = 0
    if (particle.y < 0) particle.y = canvas.height
    if (particle.y > canvas.height) particle.y = 0

    // Draw particle
    ctx.beginPath()
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(155, 105, 255, ${particle.opacity})`
    ctx.fill()
   })

   // Draw connections
   particles.forEach((p1, i) => {
    particles.slice(i + 1).forEach((p2) => {
     const dx = p1.x - p2.x
     const dy = p1.y - p2.y
     const distance = Math.sqrt(dx * dx + dy * dy)

     if (distance < 150) {
      ctx.beginPath()
      ctx.moveTo(p1.x, p1.y)
      ctx.lineTo(p2.x, p2.y)
      ctx.strokeStyle = `rgba(155, 105, 255, ${0.2 * (1 - distance / 150)})`
      ctx.lineWidth = 0.5
      ctx.stroke()
     }
    })
   })

   animationFrameId = requestAnimationFrame(animate)
  }

  animate()

  return () => {
   window.removeEventListener('resize', setCanvasSize)
   cancelAnimationFrame(animationFrameId)
  }
 }, [])

 return (
  <canvas
   ref={canvasRef}
   className="absolute inset-0 w-full h-full"
   style={{ zIndex: 0 }}
  />
 )
}
