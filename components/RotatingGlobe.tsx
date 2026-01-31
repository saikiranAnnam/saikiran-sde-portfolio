'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface RotatingGlobeProps {
 skills: string[]
}

export default function RotatingGlobe({ skills }: RotatingGlobeProps) {
 const canvasRef = useRef<HTMLCanvasElement>(null)

 useEffect(() => {
  const canvas = canvasRef.current
  if (!canvas) return

  const ctx = canvas.getContext('2d', { alpha: true })
  if (!ctx) return

  let animationFrameId: number
  let time = 0

  const setCanvasSize = () => {
   const size = Math.min(600, window.innerWidth * 0.6)
   canvas.width = size * 2
   canvas.height = size * 2
   canvas.style.width = size + 'px'
   canvas.style.height = size + 'px'
  }
  setCanvasSize()
  window.addEventListener('resize', setCanvasSize)

  const centerX = canvas.width / 2
  const centerY = canvas.height / 2

  // Create orbital rings - divide skills into 4 orbital rings (like the image)
  const totalSkills = skills.length
  const orbit1Count = Math.ceil(totalSkills * 0.15)
  const orbit2Count = Math.ceil(totalSkills * 0.25)
  const orbit3Count = Math.ceil(totalSkills * 0.30)
  
  const orbits = [
   { 
    radius: 90, 
    speed: 0.025, 
    skills: skills.slice(0, orbit1Count),
    color: 'rgba(155, 105, 255, 0.3)'
   },
   { 
    radius: 150, 
    speed: -0.02, 
    skills: skills.slice(orbit1Count, orbit1Count + orbit2Count),
    color: 'rgba(95, 140, 255, 0.3)'
   },
   { 
    radius: 220, 
    speed: 0.018, 
    skills: skills.slice(orbit1Count + orbit2Count, orbit1Count + orbit2Count + orbit3Count),
    color: 'rgba(155, 105, 255, 0.25)'
   },
   { 
    radius: 290, 
    speed: -0.015, 
    skills: skills.slice(orbit1Count + orbit2Count + orbit3Count),
    color: 'rgba(95, 140, 255, 0.25)'
   },
  ]

  function rotate3D(x: number, y: number, z: number, angleX: number, angleY: number) {
   // Rotate around X axis
   const y1 = y * Math.cos(angleX) - z * Math.sin(angleX)
   const z1 = y * Math.sin(angleX) + z * Math.cos(angleX)
   
   // Rotate around Y axis
   const x2 = x * Math.cos(angleY) - z1 * Math.sin(angleY)
   const z2 = x * Math.sin(angleY) + z1 * Math.cos(angleY)
   
   return { x: x2, y: y1, z: z2 }
  }

  function project(x: number, y: number, z: number) {
   const fov = 400
   const scale = fov / (fov + z)
   return {
    x: centerX + x * scale,
    y: centerY + y * scale,
    scale: Math.max(0.1, scale),
    z,
   }
  }

  function animate() {
   ctx.clearRect(0, 0, canvas.width, canvas.height)
   time += 0.016

   const angleX = Math.sin(time * 0.3) * 0.3
   const angleY = time * 0.2

   // Draw central sphere (sun) - larger and more prominent
   const centerGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 60)
   centerGradient.addColorStop(0, 'rgba(155, 105, 255, 0.9)')
   centerGradient.addColorStop(0.4, 'rgba(95, 140, 255, 0.7)')
   centerGradient.addColorStop(1, 'rgba(155, 105, 255, 0.4)')
   
   ctx.fillStyle = centerGradient
   ctx.beginPath()
   ctx.arc(centerX, centerY, 50, 0, Math.PI * 2)
   ctx.fill()

   // Draw "SK" or "SKA" in center (like the "N" in the image)
   ctx.fillStyle = 'rgba(255, 255, 255, 0.95)'
   ctx.font = 'bold 32px system-ui'
   ctx.textAlign = 'center'
   ctx.textBaseline = 'middle'
   ctx.fillText('SK', centerX, centerY)

   ctx.strokeStyle = 'rgba(155, 105, 255, 0.6)'
   ctx.lineWidth = 3
   ctx.beginPath()
   ctx.arc(centerX, centerY, 50, 0, Math.PI * 2)
   ctx.stroke()

   // Draw orbital rings and skills
   orbits.forEach((orbit, orbitIndex) => {
    // Draw orbital path (dashed circle) - more visible like the image
    ctx.strokeStyle = orbit.color
    ctx.lineWidth = 1.5
    ctx.setLineDash([8, 6])
    ctx.beginPath()
    ctx.arc(centerX, centerY, orbit.radius, 0, Math.PI * 2)
    ctx.stroke()
    ctx.setLineDash([])

    // Draw skills on this orbit
    orbit.skills.forEach((skill, skillIndex) => {
     const angle = (skillIndex / orbit.skills.length) * Math.PI * 2 + time * orbit.speed
     
     // Position on orbital plane (XZ plane) - keep it flat like the image
     const x = orbit.radius * Math.cos(angle)
     const z = orbit.radius * Math.sin(angle)
     const y = Math.sin(time * 0.3 + skillIndex) * 15 // Subtle vertical variation

     // Rotate in 3D space
     const rotated = rotate3D(x, y, z, angleX, angleY)
     const proj = project(rotated.x, rotated.y, rotated.z)

     // Only draw if in front
     if (proj.z > -50) {
      // Draw skill "planet" - circular badge style like the image
      const planetSize = 12 * proj.scale
      
      // Outer glow (subtle)
      const glowGradient = ctx.createRadialGradient(proj.x, proj.y, 0, proj.x, proj.y, planetSize * 3)
      glowGradient.addColorStop(0, `rgba(155, 105, 255, ${0.3 * proj.scale})`)
      glowGradient.addColorStop(1, 'rgba(155, 105, 255, 0)')
      ctx.fillStyle = glowGradient
      ctx.beginPath()
      ctx.arc(proj.x, proj.y, planetSize * 3, 0, Math.PI * 2)
      ctx.fill()

      // Planet circle - solid color like logo badges
      const colors = [
       'rgba(95, 140, 255, 0.9)', // Blue
       'rgba(155, 105, 255, 0.9)', // Purple
       'rgba(255, 200, 100, 0.9)', // Yellow/Orange
       'rgba(100, 200, 255, 0.9)', // Light Blue
      ]
      ctx.fillStyle = colors[orbitIndex % colors.length]
      ctx.beginPath()
      ctx.arc(proj.x, proj.y, planetSize, 0, Math.PI * 2)
      ctx.fill()

      // Planet border - white border like the image
      ctx.strokeStyle = `rgba(255, 255, 255, ${0.8 * proj.scale})`
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(proj.x, proj.y, planetSize, 0, Math.PI * 2)
      ctx.stroke()

      // Draw skill text - smaller and closer like the image
      if (proj.scale > 0.4 && proj.z > 0) {
       ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, proj.scale * 1.5)})`
       ctx.font = `600 ${Math.max(10, 13 * proj.scale)}px system-ui`
       ctx.textAlign = 'center'
       ctx.textBaseline = 'middle'
       
       ctx.shadowColor = 'rgba(0, 0, 0, 1)'
       ctx.shadowBlur = 8
       ctx.fillText(skill, proj.x, proj.y + planetSize + 16 * proj.scale)
       ctx.shadowBlur = 0
      }
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
 }, [skills])

 return (
  <div className="relative w-full h-full flex items-center justify-center">
   <canvas
    ref={canvasRef}
    className="w-full h-full"
    style={{ maxWidth: '600px', maxHeight: '600px' }}
   />
  </div>
 )
}
